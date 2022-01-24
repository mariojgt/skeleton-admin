<?php

use Illuminate\Support\Facades\Route;
use Mariojgt\SkeletonAdmin\Controllers\HomeContoller;
use Mariojgt\SkeletonAdmin\Controllers\DashboardController;
use Mariojgt\SkeletonAdmin\Controllers\Admin\AdminController;

// Standard
Route::group([
    'middleware' => ['web'],
], function () {
    // Example page not required to be login
    Route::get('/skeleton-admin', [HomeContoller::class, 'index'])->name('skeleton');
});

// Auth Route
Route::group([
    'middleware' => ['skeleton_admin'],
], function () {
    // Example page required to be login
    Route::get('/skeleton-admin/home', [DashboardController::class, 'index'])
        ->name('skeleton-admin.home');
    // Admin Routes
    // Profile
    Route::get('/skeleton/profile', [AdminController::class, 'profile'])
        ->name('skeleton-admin.profile');
    // Verify and enable 2FA
    Route::post('/skeleton/2fa/enable', [AdminController::class, 'enable2fa'])
        ->name('skeleton-admin.2fa.enable');
});
