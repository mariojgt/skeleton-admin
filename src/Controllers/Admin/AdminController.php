<?php

namespace Mariojgt\SkeletonAdmin\Controllers\Admin;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Redirect;
use Mariojgt\Castle\Helpers\AutenticatorHandle;

class AdminController extends Controller
{
    /**
     * @return [blade view]
     */
    public function profile()
    {
        $autenticator = new AutenticatorHandle();

        return Inertia::render('Admin/Edit', [
            'autenticator'        => $autenticator->generateCode(Auth::guard('skeleton_admin')->user()->email),
            'autenticator_enable' => Auth::guard('skeleton_admin')->user()->twoStepsEnable(),
        ]);
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
