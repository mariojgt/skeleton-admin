<?php

use Illuminate\Support\Facades\Auth;

if (!function_exists('backendGuard')) {

    function backendGuard()
    {
        return Auth::guard('skeleton_admin');
    }
}
