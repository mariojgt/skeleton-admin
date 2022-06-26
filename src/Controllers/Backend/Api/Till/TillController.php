<?php

namespace Mariojgt\SkeletonAdmin\Controllers\Backend\Api\Till;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Mariojgt\SkeletonAdmin\Models\Till;
use Mariojgt\SkeletonAdmin\Resource\Backend\TillResource;
use Mariojgt\SkeletonAdmin\Resource\Common\NotificationResource;

class TillController extends Controller
{
    /**
     * Return the last notifications.
     *
     * @param int $amount
     *
     * @return [type]
     */
    public function index(Request $request)
    {
        if (empty($request->section) || $request->section == 'all') {
            $tills = Till::paginate(10);
        } else {
            $tills = Till::where('section', $request->section)->paginate(10);
        }

        return TillResource::collection($tills);
    }

    public function update(Request $request, $till)
    {
        // Validate the till as array
        $request->validate([
            'name'      => 'required|string',
            'is_active' => 'required|boolean',
        ]);

        $tillUpdate            = Till::findOrFail($till);
        $tillUpdate->name      = $request->name;
        $tillUpdate->is_active = $request->is_active;
        $tillUpdate->save();

        return response()->json([
            'message' => 'Tills updated',
        ]);
    }

    public function create(Request $request)
    {
        // Validate the till as array
        $request->validate([
            'name'      => 'required|string',
            'is_active' => 'required|boolean',
            'section'   => 'required|string',
        ]);

        $tillUpdate            = new Till();
        $tillUpdate->name      = Request('name');
        $tillUpdate->is_active = Request('is_active');
        $tillUpdate->section   = Request('section');
        $tillUpdate->save();

        return response()->json([
            'message' => 'Tills created',
        ]);
    }
}
