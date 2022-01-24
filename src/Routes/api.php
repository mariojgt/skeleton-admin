<?php

use Illuminate\Support\Facades\Route;
use Mariojgt\SkeletonAdmin\Controllers\Api\AuthApiControler;
use Mariojgt\SkeletonAdmin\Controllers\Api\UserApiController;

// Check url
Route::group([
    'prefix' => 'api',
], function () {
    // Api to Login
    Route::get('/check-url', [AuthApiControler::class, 'checkUrl'])->name('check-url');
});

// Boot token required
Route::group([
    'middleware' => ['boot_token'],
    'prefix'     => 'api',
], function () {
    // Api connection test
    Route::post('/skeleton/api/check-boot-tooken', [AuthApiControler::class, 'checkConnection'])
        ->name('skeleton.api.check-boot-tooken');
    // Api do Login
    Route::post('/skeleton/api/login', [AuthApiControler::class, 'login'])
        ->name('skeleton.api.login');
    // Api do Register
    Route::post('/skeleton/api/register', [AuthApiControler::class, 'register'])
        ->name('skeleton.api.register');
});

// Auth Route
Route::group([
    'middleware' => ['auth:sanctum'],
    'prefix'     => 'api',
], function () {
    // Check validate token
    Route::post('/skeleton/api/check-token', [UserApiController::class, 'checkToken'])->name('skeleton.api.check-token');
    // Load user info
    Route::post('/skeleton/api/user', [UserApiController::class, 'userProfile'])->name('skeleton.api.user');
    Route::post('/skeleton/api/user-update', [UserApiController::class, 'userUpdateProfile'])->name('skeleton.api.user-update');
});
