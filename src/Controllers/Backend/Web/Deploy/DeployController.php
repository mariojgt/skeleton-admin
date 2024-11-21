<?php

namespace Mariojgt\SkeletonAdmin\Controllers\Backend\Web\Deploy;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Cache;
use Mariojgt\SkeletonAdmin\Models\DeploymentLog;
use Mariojgt\SkeletonAdmin\Models\WebhookConfig;
use Mariojgt\SkeletonAdmin\Models\DeploymentOutputLog;
use Mariojgt\SkeletonAdmin\Resource\Backend\DeploymentLogResource;
use Mariojgt\SkeletonAdmin\Resource\Backend\DeploymentOutputLogResource;

class DeployController extends Controller
{
    public function index()
    {
        // Build the breadcrumb
        $breadcrumb = [
            [
                'label' => 'Role',
                'url'   => route('admin.role.index'),
            ]
        ];

        // Table columns
        $columns = [
            [
                'label'     => 'Id',
                'key'       => 'id',
                'sortable'  => true,
                'canCreate' => false,
                'canEdit'   => false,
            ],
            [
                'label'     => 'Name',
                'key'       => 'name',
                'sortable'  => true,
                'canCreate' => true,
                'canEdit'   => true,
                'type'      => 'text',
            ],
            [
                'label'     => 'Repository Url',
                'key'       => 'repository_url',
                'sortable'  => true,
                'canCreate' => true,
                'canEdit'   => true,
                'type'      => 'text',
            ],
            [
                'label'     => 'Branch',
                'key'       => 'branch',
                'sortable'  => true,
                'canCreate' => true,
                'canEdit'   => true,
                'type'      => 'text',
            ],
            [
                'label'     => 'Is active',
                'key'       => 'is_active',
                'sortable'  => true,
                'canCreate' => false,
                'canEdit'   => true,
                'type'      => 'boolean',
            ],
            [
                'label'     => 'Deployment Path',
                'key'       => 'deployment_path',
                'sortable'  => true,
                'canCreate' => true,
                'canEdit'   => true,
                'type'      => 'text',
            ],
            [
                'label'     => 'Deployment Commands',
                'key'       => 'deployment_commands',
                'sortable'  => true,
                'canCreate' => true,
                'canEdit'   => true,
                'type'      => 'chips',
            ]
        ];
        return Inertia::render('BackEnd/Deploy/Index', [
            'title'      => 'Deploy',
            'breadcrumb' => $breadcrumb,
            // Required for the generic builder table api
            'endpoint'       => route('admin.api.generic.table'),
            'endpointDelete' => route('admin.api.generic.table.delete'),
            'endpointCreate' => route('admin.api.generic.table.create'),
            'endpointEdit'   => route('admin.api.generic.table.update'),
            // You table columns
            'columns'        => $columns,
            // The model where all those actions will take place
            'model'          => encrypt(WebhookConfig::class),
            // If you want to protect your crud form you can use this below not required
            'permission'     => encrypt([
                'guard'          => 'skeleton_admin',
                // You can use permission or role up to you
                'type'          => 'permission',
                // The permission name or role
                'key' => [
                    'store'  => 'create-permission',
                    'update' => 'edit-permission',
                    'delete' => 'delete-permission',
                    'index'  => 'read-permission',
                ],
            ]),
            'custom_edit_route' => '/' . config('skeleton.route_prefix') . '/deploy/edit/',
        ]);
    }

    public function edit(Request $request, WebhookConfig $deploy)
    {
        $breadcrumb = [
            [
                'label' => 'Webhook',
                'url'   => route('admin.deploy.index'),
            ]
        ];

        return Inertia::render('BackEnd/Deploy/Edit', [
            'breadcrumb'     => $breadcrumb,
            'deploy'         => $deploy,
            'deploymentLogs' => DeploymentLogResource::collection($deploy->deploymentLogs()->orderBy('id', 'desc')->paginate(10)),
        ]);
    }

    public function update(Request $request, WebhookConfig $deploy)
    {
        $validData = $request->validate([
            'name'                => 'required',
            'repository_url'      => 'required',
            'branch'              => 'required',
            'is_active'           => 'required',
            'deployment_path'     => 'required',
            'deployment_commands' => 'required',
            'secret_token'        => 'nullable|string',
        ]);

        $deploy->name                = $validData['name'];
        $deploy->repository_url      = $validData['repository_url'];
        $deploy->branch              = $validData['branch'];
        $deploy->is_active           = $validData['is_active'];
        $deploy->deployment_path     = $validData['deployment_path'];
        $deploy->deployment_commands = $validData['deployment_commands'];
        $deploy->secret_token        = $validData['secret_token'];
        $deploy->save();

        return back()->with('success', 'Deploy updated successfully');
    }

        /**
     * Get deployment details
     */
    public function show($id)
    {
        $deployment = DeploymentLog::with(['webhookConfig', 'outputLogs'])
            ->findOrFail($id);

        return new DeploymentLogResource($deployment);
    }

    /**
     * Get deployment logs
     */
    public function logs($id)
    {
        $deployment = DeploymentLog::findOrFail($id);
        $logs = DeploymentOutputLog::where('deployment_log_id', $id)
            ->orderBy('sequence', 'asc')
            ->get();

        return DeploymentOutputLogResource::collection($logs);
    }

    /**
     * Get recent logs (for polling)
     */
    public function recentLogs($id, Request $request)
    {
        $lastSequence = $request->input('last_sequence', 0);

        $logs = DeploymentOutputLog::where('deployment_log_id', $id)
            ->where('sequence', '>', $lastSequence)
            ->orderBy('sequence', 'asc')
            ->get();

        return DeploymentOutputLogResource::collection($logs);
    }

    /**
     * Get deployment status
     */
    public function status($id)
    {
        $deployment = DeploymentLog::with(['webhookConfig'])->findOrFail($id);

        return response()->json([
            'status' => $deployment->status,
            'progress' => [
                'percentage' => $deployment->getProgress()['percentage'],
                'completed' => $deployment->getProgress()['completed'],
                'total' => $deployment->getProgress()['total'],
            ],
            'duration' => $deployment->getDurationInSeconds(),
            'completed_at' => $deployment->completed_at,
            'error_message' => $deployment->error_message,
        ]);
    }

    /**
     * Cancel deployment
     */
    public function cancel($id)
    {
        $deployment = DeploymentLog::findOrFail($id);

        if ($deployment->status !== 'running') {
            return response()->json([
                'message' => 'Deployment is not running'
            ], 400);
        }

        try {
            DB::transaction(function () use ($deployment) {
                // Update deployment status
                $deployment->update([
                    'status' => 'failed',
                    'error_message' => 'Deployment cancelled by user',
                    'completed_at' => now()
                ]);

                // Add cancellation log
                DeploymentOutputLog::create([
                    'deployment_log_id' => $deployment->id,
                    'type' => 'error',
                    'output' => 'Deployment cancelled by user',
                    'sequence' => DeploymentOutputLog::where('deployment_log_id', $deployment->id)
                        ->max('sequence') + 1
                ]);

                // Release lock
                Cache::forget("deploy-lock-{$deployment->webhook_config_id}");
            });

            return new DeploymentLogResource($deployment->fresh(['webhookConfig', 'outputLogs']));
        } catch (\Exception $e) {
            Log::error('Failed to cancel deployment', [
                'deployment_id' => $id,
                'error' => $e->getMessage()
            ]);

            return response()->json([
                'message' => 'Failed to cancel deployment'
            ], 500);
        }
    }
}
