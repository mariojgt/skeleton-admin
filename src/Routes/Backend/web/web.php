<?php

use Illuminate\Support\Facades\Route;
use Mariojgt\SkeletonAdmin\Controllers\Backend\Web\Admin\AdminController;
use Mariojgt\SkeletonAdmin\Controllers\Backend\Web\Permissions\RoleController;
use Mariojgt\SkeletonAdmin\Controllers\Backend\Web\Dashboard\DashboardController;
use Mariojgt\SkeletonAdmin\Controllers\Backend\Web\Navigation\NavigationController;
use Mariojgt\SkeletonAdmin\Controllers\Backend\Web\Permissions\PermissionController;

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
        // Profile Update
        Route::patch('/admin/update/{admin}', 'update')->name('admin.update');
        // Profile Update Password
        Route::patch('/admin/update-password/{admin}', 'updatePassword')->name('admin.update-password');
        // Remove Authenticator
        Route::patch('/admin/remove-authenticator', 'removeAuthenticator')
            ->name('admin.remove-authenticator');
        // Verify and enable 2FA
        Route::post('/admin/2fa/enable', 'enable2fa')->name('admin.2fa.enable');
    });

    // Admin roles management
    Route::controller(RoleController::class)->group(function () {
        // Profile Edit
        Route::get('/role/index', 'index')->name('admin.role.index');
        Route::get('/role/edit/{role}', 'edit')->name('admin.role.edit');
        Route::patch('/role/edit/{role}', 'update')->name('admin.role.update');
        Route::patch('/role/edit/perm/sync/{role}', 'syncPerm')->name('admin.role.perm.update');
    });

    // Admin permission management
    Route::controller(PermissionController::class)->group(function () {
        // Profile Edit
        Route::get('/permission/index', 'index')->name('admin.permission.index');
    });

    // Navigation's
    Route::controller(NavigationController::class)->group(function () {
        // Navigation Index
        Route::get('/navigation/index', 'index')->name('admin.navigation.index');
        // Navigation position edit
        Route::get('/navigation/position', 'position')->name('admin.navigation.position');
    });
});
