<?php

namespace Mariojgt\SkeletonAdmin\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Support\Facades\Cache;
use Symfony\Component\Process\Process;
use Mariojgt\SkeletonAdmin\Models\Admin;
use Mariojgt\SkeletonAdmin\Models\DeploymentLog;
use Mariojgt\SkeletonAdmin\Models\WebhookConfig;
use Mariojgt\SkeletonAdmin\Models\DeploymentOutputLog;
use Mariojgt\SkeletonAdmin\Notifications\GenericNotification;

class ExecuteDeployment implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    private $config;
    private $log;

    public function __construct(WebhookConfig $config, DeploymentLog $log)
    {
        $this->config = $config;
        $this->log = $log;
    }

    public function handle()
    {
        try {
            $this->log->update(['status' => 'running']);
            $output = [];
            $sequence = 0;

            $admins = Admin::all();
            foreach ($admins as $admin) {
                $admin->notify(new GenericNotification(
                    'Deployment Started',
                    'info',
                    'Deployment started for ' . $this->config->repository_url,
                    'icon'
                ));
            }

            chdir(base_path($this->config->deployment_path));

            foreach ($this->config->deployment_commands as $command) {
                DeploymentOutputLog::create([
                    'deployment_log_id' => $this->log->id,
                    'command' => $command,
                    'output' => "Starting command: {$command}",
                    'type' => 'info',
                    'sequence' => $sequence++
                ]);

                $process = new Process(explode(' ', $command));
                $process->setTimeout(3600);

                $process->start();

                $process->wait(function ($type, $buffer) use ($command, &$sequence) {
                    $outputType = $type === Process::ERR ? 'error' : 'info';

                    DeploymentOutputLog::create([
                        'deployment_log_id' => $this->log->id,
                        'command' => $command,
                        'output' => $buffer,
                        'type' => $outputType,
                        'sequence' => $sequence++
                    ]);
                });

                if (!$process->isSuccessful()) {
                    DeploymentOutputLog::create([
                        'deployment_log_id' => $this->log->id,
                        'command' => $command,
                        'output' => $process->getErrorOutput(),
                        'type' => 'error',
                        'sequence' => $sequence++
                    ]);

                    throw new ProcessFailedException($process);
                }

                DeploymentOutputLog::create([
                    'deployment_log_id' => $this->log->id,
                    'command' => $command,
                    'output' => "Command completed successfully",
                    'type' => 'success',
                    'sequence' => $sequence++
                ]);

                $output[] = [
                    'command' => $command,
                    'output' => $process->getOutput(),
                ];
            }

            $this->log->update([
                'status' => 'completed',
                'output' => json_encode($output),
                'completed_at' => now()
            ]);
        } catch (\Exception $e) {
            DeploymentOutputLog::create([
                'deployment_log_id' => $this->log->id,
                'command' => $command ?? 'General Error',
                'output' => $e->getMessage(),
                'type' => 'error',
                'sequence' => $sequence++
            ]);

            $this->log->update([
                'status' => 'failed',
                'error_message' => $e->getMessage(),
                'output' => json_encode($output ?? []),
                'completed_at' => now()
            ]);
        } finally {
            Cache::forget("deploy-lock-{$this->config->id}");
        }
    }
}
