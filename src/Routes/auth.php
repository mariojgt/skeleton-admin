<?php

use Illuminate\Support\Facades\Route;
use Mariojgt\SkeletonAdmin\Controllers\Auth\LoginController;
use Mariojgt\SkeletonAdmin\Controllers\Auth\RegisterController;
use Mariojgt\SkeletonAdmin\Controllers\Auth\ResetPassword;

// Login | Register Route need to be logout to view this page
Route::group([
    'middleware' => ['web', 'skeleton_guest'],
], function () {
    // User Login
    Route::get('skeleton-admin/login', [LoginController::class, 'index'])
        ->name('skeleton.login');
    // Dologin
    Route::post('skeleton-admin/login/user', [LoginController::class, 'login'])
        ->name('skeleton.login.user');

    // User Registration
    Route::get('skeleton-admin/register', [RegisterController::class, 'register'])
        ->name('skeleton.register');
    Route::post('skeleton-admin/register/user', [RegisterController::class, 'userRegister'])
        ->name('skeleton.register.user');

    // Password Reset
    Route::get('skeleton-admin/forgot-password', [ResetPassword::class, 'index'])
        ->name('skeleton.forgot-password');
    Route::post('skeleton-admin/password-reset', [ResetPassword::class, 'reset'])
        ->name('skeleton.password-reset');
    Route::get('skeleton-admin/password-reset/{token}', [ResetPassword::class, 'passwordReset'])
        ->name('skeleton.password.reset');
    Route::post('skeleton-admin/password-change', [ResetPassword::class, 'passwordChange'])
        ->name('skeleton.password.change');
});

// User verify account
Route::group([
    'middleware' => ['web', 'skeleton_guest'],
], function () {
    // Warn the user need to be verify
    Route::get('skeleton-admin/email/verify', [LoginController::class, 'needVerify'])
        ->name('skeleton.verification.notice');

    // Login to verify the user
    Route::get('skeleton-admin/user/verify/{id}/{time}', [LoginController::class, 'verify'])
        ->name('skeleton.user.verify');
});

// Auth Route
Route::group([
    'middleware' => ['skeleton_admin'],
], function () {
    // Logout function
    Route::get('skeleton-admin/logout', [LoginController::class, 'logout'])
        ->name('skeleton.logout');
});
