<?php

use Illuminate\Support\Facades\Route;
use Mariojgt\SkeletonAdmin\Controllers\Auth\FrontendAuth\LoginController;
use Mariojgt\SkeletonAdmin\Controllers\Auth\FrontendAuth\RegisterController;
use Mariojgt\SkeletonAdmin\Controllers\Auth\FrontendAuth\ResetPassword;

// Login | Register Route need to be logout to view this page
Route::group([
    'middleware' => ['web', 'guest'],
    'prefix'     => config('skeleton.route_prefix_front'),
], function () {
    Route::controller(LoginController::class)->group(function () {
        // User Login
        Route::get('/login', 'index')->name('login');
        // Do login
        Route::post('/login/user', 'login')->name('login.user');
    });

    // User Registration
    Route::controller(RegisterController::class)->group(function () {
        Route::get('/register', 'register')->name('register.user');
        Route::post('/register/user', 'userRegister')->name('register.user');
    });

    // Password Reset
    Route::controller(ResetPassword::class)->group(function () {
        Route::get('/forgot-password', 'index')->name('forgot-password');
        Route::post('/password-reset', 'reset')->name('password-reset.user');
        Route::get('/password-reset/{token}', 'passwordReset')->name('password.reset');
        Route::post('/password-change', 'passwordChange')->name('password.change.user');
    });
});

// User verify account
Route::group([
    'middleware' => ['web'],
    'prefix'     => config('skeleton.route_prefix_front'),
], function () {
    Route::controller(LoginController::class)->group(function () {
        // Warn the user need to be verify
        Route::get('/email/verify', 'needVerify')->name('verification.notice');
        // Login to verify the user
        Route::get('/user/verify/{id}/{time}', 'verify')->name('user.verify');
    });
});

Route::group([
    'middleware' => ['web', 'auth'],
    'prefix'     => config('skeleton.route_prefix_front'),
], function () {
    // Do logout
    Route::get('/logout', [LoginController::class, 'logout'])->name('logout.user');
});
