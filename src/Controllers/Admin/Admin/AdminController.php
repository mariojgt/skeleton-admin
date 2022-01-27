<?php

namespace Mariojgt\SkeletonAdmin\Controllers\Admin\Admin;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Redirect;
use Mariojgt\Castle\Helpers\AutenticatorHandle;
use Mariojgt\SkeletonAdmin\Models\Admin;
use Mariojgt\SkeletonAdmin\Resource\AdminResource;

class AdminController extends Controller
{
    /**
     * Create new admin
     * @param Request $request
     *
     * @return [type]
     */
    public function store(Request $request)
    {
        # code...
    }

    /**
     * Edit Admin Profile
     * @return [blade view]
     */
    public function edit($admin = null)
    {
        // Get current user else the login admin
        if (empty($admin)) {
            $adminInfo = Auth::guard('skeleton_admin')->user();
        } else {
            $adminInfo = Auth::guard('skeleton_admin');
        }
        // Start the user autenticator so we can enalbe or disable the 2FA and other options
        $autenticator = new AutenticatorHandle();

        return Inertia::render('Admin/Edit', [
            'autenticator'        => $autenticator->generateCode(Auth::guard('skeleton_admin')->user()->email),
            'autenticator_enable' => Auth::guard('skeleton_admin')->user()->twoStepsEnable(),
            'admin'               => new AdminResource($adminInfo),
        ]);
    }

    /**
     * Update admin profile
     * @param Request $request
     *
     * @return [type]
     */
    public function update(Request $request, Admin $admin)
    {
        # code...
    }

    /**
     * Update the user password
     * @param Request $request
     *
     * @return [type]
     */
    public function updatePassword(Request $request)
    {
        # code...
    }

    /**
     * Check if the code that the user type match with the autenticator
     * @param Request $request
     *
     * @return [type]
     */
    public function enable2fa(Request $request)
    {
        $request->validate([
            'code'       => 'required',
        ]);

        $autenticatorHandle = new AutenticatorHandle();
        $verification       = $autenticatorHandle->checkCode(Request('code'));

        // if true we can sync the user
        if ($verification) {
            Auth::user()->syncAutenticator(decrypt(Session::get('autenticator_key')));
            // Return success
            return Redirect::back()
                ->with('success', 'code sync with success.');
        } else {
            // Return success
            return Redirect::back()
                ->with('error', 'Sorry Code invalid try again.');
        }
    }
}
