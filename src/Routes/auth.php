<?php

use Illuminate\Support\Facades\Route;
use Mariojgt\SkeletonAdmin\Controllers\Auth\LoginController;
use Mariojgt\SkeletonAdmin\Controllers\Auth\RegisterController;
use Mariojgt\SkeletonAdmin\Controllers\Auth\ResetPassword;

// Login | Register Route need to be logout to view this page
Route::group([
    'middleware' => ['web', 'skeleton_guest'],
], function () {
    // Logoin routes
    Route::controller(LoginController::class)->group(function () {
        // User Login
        Route::get('skeleton-admin/login', 'index')->name('skeleton.login');
        // Dologin
        Route::post('skeleton-admin/login/user', 'login')->name('skeleton.login.user');
    });

    // User Registration
    Route::controller(RegisterController::class)->group(function () {
        Route::get('skeleton-admin/register', 'register')->name('skeleton.register');
        Route::post('skeleton-admin/register/user', 'userRegister')->name('skeleton.register.user');
    });

    // Password Reset
    Route::controller(ResetPassword::class)->group(function () {
        Route::get('skeleton-admin/forgot-password', 'index')->name('skeleton.forgot-password');
        Route::post('skeleton-admin/password-reset', 'reset')->name('skeleton.password-reset');
        Route::get('skeleton-admin/password-reset/{token}', 'passwordReset')->name('skeleton.password.reset');
        Route::post('skeleton-admin/password-change', 'passwordChange')->name('skeleton.password.change');
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
