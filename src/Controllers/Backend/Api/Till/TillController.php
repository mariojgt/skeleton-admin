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

    public function update(Request $request)
    {
        // Validate the till as array
        $request->validate([
            'tills.*.name'      => 'required|string',
            'tills.*.is_active' => 'required|boolean',
        ]);

        foreach (Request('tills') as $key => $till) {
            $tillUpdate            = Till::find($till['id']);
            $tillUpdate->name      = $till['name'];
            $tillUpdate->is_active = $till['is_active'];
            $tillUpdate->save();
        }

        return response()->json([
            'message' => 'Tills updated',
        ]);
    }
}
