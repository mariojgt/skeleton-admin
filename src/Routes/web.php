<?php

use Illuminate\Support\Facades\Route;
use Mariojgt\SkeletonAdmin\Controllers\HomeContoller;
use Mariojgt\SkeletonAdmin\Controllers\DashboardController;
use Mariojgt\SkeletonAdmin\Controllers\Admin\Admin\AdminController;

// Standard
Route::group([
    'middleware' => ['web'],
], function () {
    // Example page not required to be login
    Route::get('/skeleton-admin', [HomeContoller::class, 'index'])->name('skeleton');
});

// Auth Route
Route::group([
    'middleware' => ['skeleton_admin', '2fa'],
], function () {
    // Admin Dashboard
    Route::get('/skeleton-admin/home', [DashboardController::class, 'index'])
        ->name('skeleton-admin.home');

    // Admin Routes
    Route::controller(AdminController::class)->group(function () {
        // Profile
        Route::get('/admin/edit/{admin?}', 'edit')->name('admin.edit');
        // Verify and enable 2FA
        Route::post('/skeleton/2fa/enable', 'enable2fa')->name('skeleton-admin.2fa.enable');
    });
});
