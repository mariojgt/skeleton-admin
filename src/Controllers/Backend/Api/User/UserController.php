<?php

namespace Mariojgt\SkeletonAdmin\Controllers\Backend\Api\User;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Mariojgt\Magnifier\Models\MediaFolder;
use Mariojgt\Magnifier\Controllers\MediaController;
use Mariojgt\SkeletonAdmin\Resource\Backend\AdminResource;

class UserController extends Controller
{
    /**
     * Return the user information
     */
    public function index()
    {
        return new AdminResource(Auth::user());
    }

    /**
     * Update the user basic information
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

    /**
     * Update the user password
     */
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

    /**
     * Update The user avatar
     */
    public function updateAvatar(Request $request)
    {
        $request->validate([
            'file'   => ['required', 'image'],
        ]);

        $media  = new MediaController();
        $folder = MediaFolder::where('name', 'media')->first();
        $file = $media->upload($request, $folder->id);
        // Get the resource and update the avatar
        Auth::user()->avatar = $file->getData()->data->id;
        Auth::user()->save();

        return response()->json([
            'data' => 'Avatar updated',
        ]);
    }
}
