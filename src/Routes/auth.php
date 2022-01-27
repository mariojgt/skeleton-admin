<?php

use Illuminate\Support\Facades\Route;
use Mariojgt\SkeletonAdmin\Controllers\Auth\LoginController;
use Mariojgt\SkeletonAdmin\Controllers\Auth\RegisterController;
use Mariojgt\SkeletonAdmin\Controllers\Auth\ResetPassword;

// Login | Register Route need to be logout to view this page
Route::group([
    'middleware' => ['web', 'skeleton_guest'],
    'prefix'     => config('skeletonAdmin.route_prefix'),
], function () {
    // Logoin routes
    Route::controller(LoginController::class)->group(function () {
        // User Login
        Route::get('login', 'index')->name('skeleton.login');
        // Dologin
        Route::post('login/user', 'login')->name('skeleton.login.user');
    });

    // User Registration
    Route::controller(RegisterController::class)->group(function () {
        Route::get('register', 'register')->name('skeleton.register');
        Route::post('register/user', 'userRegister')->name('skeleton.register.user');
    });

    // Password Reset
    Route::controller(ResetPassword::class)->group(function () {
        Route::get('forgot-password', 'index')->name('skeleton.forgot-password');
        Route::post('password-reset', 'reset')->name('skeleton.password-reset');
        Route::get('password-reset/{token}', 'passwordReset')->name('skeleton.password.reset');
        Route::post('password-change', 'passwordChange')->name('skeleton.password.change');
    });
});

// User verify account
Route::group([
    'middleware' => ['web', 'skeleton_guest'],
], function () {
    Route::controller(LoginController::class)->group(function () {
        // Warn the user need to be verify
        Route::get('skeleton-admin/email/verify', 'needVerify')->name('skeleton.verification.notice');
        // Login to verify the user
        Route::get('skeleton-admin/user/verify/{id}/{time}', 'verify')->name('skeleton.user.verify');
    });
});

// Auth Route
Route::group([
    'middleware' => ['skeleton_admin'],
], function () {
    // Logout function
    Route::get('skeleton-admin/logout', [LoginController::class, 'logout'])
        ->name('skeleton.logout');
});
