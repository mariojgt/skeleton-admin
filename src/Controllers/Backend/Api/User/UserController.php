<?php

namespace Mariojgt\SkeletonAdmin\Controllers\Backend\Api\User;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Validator;
use Mariojgt\SkeletonAdmin\Resource\Backend\AdminResource;

class UserController extends Controller
{
    /**
     * Return the user information
     *
     * @return Collect [user]
     */
    public function index()
    {
        return new AdminResource(Auth::user());
    }

    /**
     * Update the user basic information
     *
     * @param Request $request
     *
     * @return json
     */
    public function updateProfile(Request $request)
    {
        $request->validate([
            'first_name' => ['required', 'string', 'max:255'],
            'last_name'  => ['required', 'string', 'max:255'],
            'email'      => ['required', 'string', 'email', 'max:255', 'unique:admins'],
        ]);

        Auth::user()->first_name = Request('first_name');
        Auth::user()->last_name  = Request('last_name');
        Auth::user()->email      = Request('email');
        Auth::user()->save();

        return new AdminResource(Auth::user());
    }

    public function updatePassword(Request $request)
    {
        $request->validate([
            'password'   => ['required', 'confirmed', 'min:8'],
        ]);

        Auth::user()->password          = Hash::make($request->password);
        Auth::user()->save();

        return response()->json([
            'data' => 'Password updated',
        ]);
    }
}
