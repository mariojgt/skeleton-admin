<?php

use Illuminate\Support\Facades\Route;
use Mariojgt\SkeletonAdmin\Controllers\Admin\Dashboard\DashboardController;
use Mariojgt\SkeletonAdmin\Controllers\Admin\Admin\AdminController;
use Mariojgt\SkeletonAdmin\Controllers\Admin\Booking\BookingController;
use Mariojgt\SkeletonAdmin\Controllers\Admin\Category\CategoryController;

// Auth Route
Route::group([
    'middleware' => ['skeleton_admin', '2fa:skeleton_admin'],
    'prefix'     => config('skeletonAdmin.route_prefix'),
], function () {
    // Admin Dashboard
    Route::get('/skeleton-admin/home', [DashboardController::class, 'index'])
        ->name('skeleton-admin.home');

    // Admin Routes
    Route::controller(AdminController::class)->group(function () {
        // Profile Edit
        Route::get('/admin/edit/{admin?}', 'edit')->name('admin.edit');
        // Prodifle Update
        Route::patch('/admin/update/{admin}', 'update')->name('admin.update');
        // Profile Update Password
        Route::patch('/admin/update-password/{admin}', 'updatePassword')->name('admin.update-password');
        // Remove Autentetictor
        Route::patch('/admin/remove-autenticator', 'removeAutenticator')
            ->name('admin.remove-autenticator');
        // Verify and enable 2FA
        Route::post('/admin/2fa/enable', 'enable2fa')->name('admin.2fa.enable');
    });

    // Ecommerce categories
    Route::controller(CategoryController::class)->group(function () {
        // Index
        Route::get('/categories', 'index')->name('admin.categories.index');
    });

    // Booking System Routes
    Route::controller(BookingController::class)->group(function () {
        // Profile Edit
        Route::get('booking/', 'index')->name('admin.booking.index');
    });
});
