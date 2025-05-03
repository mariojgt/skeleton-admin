<?php

use Illuminate\Support\Facades\Route;
use Mariojgt\SkeletonAdmin\Controllers\Auth\BackendAuth\LoginController;
use Mariojgt\SkeletonAdmin\Controllers\Auth\BackendAuth\RegisterController;
use Mariojgt\SkeletonAdmin\Controllers\Auth\BackendAuth\ResetPassword;

Route::group([
    'middleware' => ['web', 'skeleton_guest'],
    'prefix' => config('skeleton.route_prefix'),
], function () {
    Route::controller(LoginController::class)->group(function () {
        Route::get('login', 'index')->name('skeleton.login');
        Route::post('login/user', 'login')->name('skeleton.login.user');
    });

    // Request Magic Link
    Route::post('magic-link', [LoginController::class, 'sendMagicLink'])->name('skeleton.login.magic');

    // Handle Magic Link
    Route::get('magic-login/{admin}', [LoginController::class, 'handleMagicLink'])
        ->name('skeleton.magic.login')
        ->middleware(['signed']);


    /*
    |--------------------------------------------------------------------------
    | Allow user to register if the config is enable
    |--------------------------------------------------------------------------
    */
    if (config('skeleton.backend_register_enable')) {
        Route::controller(RegisterController::class)->group(function () {
            Route::get('register', 'register')->name('skeleton.register');
            Route::post('register/user', 'userRegister')->name('skeleton.register.user');
        });
    }

    Route::controller(ResetPassword::class)->group(function () {
        Route::get('forgot-password', 'index')->name('skeleton.forgot-password');
        Route::post('password-reset', 'reset')->name('skeleton.password-reset');
        Route::get('password-reset/{token}', 'passwordReset')->name('skeleton.password.reset');
        Route::post('password-change', 'passwordChange')->name('skeleton.password.change');
    });
});

Route::group([
    'middleware' => ['web', 'skeleton_guest'],
], function () {
    Route::controller(LoginController::class)->group(function () {
        Route::get('skeleton-admin/email/verify', 'needVerify')->name('skeleton.verification.notice');
        Route::get('skeleton-admin/user/verify/{id}/{time}', 'verify')->name('skeleton.user.verify');
    });
});

Route::group([
    'middleware' => ['skeleton_admin'],
], function () {
    Route::get('skeleton-admin/logout', [LoginController::class, 'logout'])
        ->name('skeleton.logout');
});
