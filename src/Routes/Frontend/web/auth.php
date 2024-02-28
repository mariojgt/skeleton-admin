<?php

use Illuminate\Support\Facades\Route;
use Mariojgt\SkeletonAdmin\Controllers\Auth\FrontendAuth\LoginController;
use Mariojgt\SkeletonAdmin\Controllers\Auth\FrontendAuth\RegisterController;
use Mariojgt\SkeletonAdmin\Controllers\Auth\FrontendAuth\ResetPassword;

Route::group([
    'middleware' => ['web', 'guest'],
    'prefix'     => config('skeleton.route_prefix_front'),
], function () {
    Route::controller(LoginController::class)->group(function () {
        Route::get('/login', 'index')->name('login');
        Route::post('/login/user', 'login')->name('login.user');
    });

    Route::controller(RegisterController::class)->group(function () {
        Route::get('/register', 'register')->name('register.user');
        Route::post('/register/user', 'userRegister')->name('register.user');
    });

    Route::controller(ResetPassword::class)->group(function () {
        Route::get('/forgot-password', 'index')->name('forgot-password');
        Route::post('/password-reset', 'reset')->name('password-reset.user');
        Route::get('/password-reset/{token}', 'passwordReset')->name('password.reset');
        Route::post('/password-change', 'passwordChange')->name('password.change.user');
    });
});

Route::group([
    'middleware' => ['web'],
    'prefix'     => config('skeleton.route_prefix_front'),
], function () {
    Route::controller(LoginController::class)->group(function () {
        Route::get('/email/verify', 'needVerify')->name('verification.notice');
        Route::get('/user/verify/{id}/{time}', 'verify')->name('user.verify');
    });
});

Route::group([
    'middleware' => ['web', 'auth'],
    'prefix'     => config('skeleton.route_prefix_front'),
], function () {
    Route::get('/logout', [LoginController::class, 'logout'])->name('logout.user');
});
