<?php

use Illuminate\Support\Facades\Route;
use Mariojgt\SkeletonAdmin\Controllers\Backend\Web\Admin\AdminController;
use Mariojgt\SkeletonAdmin\Controllers\Backend\Web\Dashboard\DashboardController;
use Mariojgt\SkeletonAdmin\Controllers\Backend\Web\Permissions\PermissionController;
use Mariojgt\SkeletonAdmin\Controllers\Backend\Web\Permissions\RoleController;

// Auth Route
Route::group([
    'middleware' => ['skeleton_admin', '2fa:skeleton_admin'],
    'prefix'     => config('skeleton.route_prefix'),
], function () {
    // Admin Dashboard
    Route::get('/skeleton-admin/home', [DashboardController::class, 'index'])
        ->name('skeleton-admin.home');

    // Admin Routes profile
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

    // Admin roles management
    Route::controller(RoleController::class)->group(function () {
        // Profile Edit
        Route::get('/roles/index', 'index')->name('admin.roles.index');
    });

    // Admin permission management
    Route::controller(PermissionController::class)->group(function () {
        // Profile Edit
        Route::get('/permission/index', 'index')->name('admin.permission.index');
    });
});
