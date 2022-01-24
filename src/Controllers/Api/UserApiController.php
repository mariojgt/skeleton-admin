<?php

namespace Mariojgt\SkeletonAdmin\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Mariojgt\SkeletonAdmin\Models\User;
use Mariojgt\SkeletonAdmin\Resource\UserResource;

class UserApiController extends Controller
{
    /**
     * @param Request $request
     *
     * @return [json]
     */
    public function checkToken(Request $request)
    {
        return response()->json([
            'data' => true,
        ]);
    }

    /**
     * @param Request $request
     *
     * @return [json]
     */
    public function userProfile(Request $request)
    {
        return response()->json([
            'data' => new UserResource($request->user()),
        ]);
    }

    /**
     * @param Request $request
     *
     * @return [json]
     */
    public function userUpdateProfile(Request $request)
    {
        // Validate the user
        $validator = Validator::make($request->all(), [
            'name'     => ['required', 'string', 'max:255'],
            'email'    => ['required', 'string', 'email', 'max:255'],
            'password' => ['required', 'confirmed'],
        ]);

        // If Validation Fail for the basic stuf
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        // Update the user profile
        $user        = User::find($request->user()->id);
        $user->name  = Request('name');
        $user->email = Request('email');
        if (!empty(Request('password'))) {
            $user->password = Hash::make(Request('password'));
        }
        $user->save();

        return response()->json([
            'data'    => $user,
            'status'  => true,
            'message' => 'information updated',
        ]);
    }
}
