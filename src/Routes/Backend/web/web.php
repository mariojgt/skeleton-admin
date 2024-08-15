<?php

use Illuminate\Support\Facades\Route;
use Mariojgt\SkeletonAdmin\Controllers\Backend\Web\User\UserController;
use Mariojgt\SkeletonAdmin\Controllers\Backend\Web\Admin\AdminController;
use Mariojgt\SkeletonAdmin\Controllers\Backend\Web\Navbar\NavbarController;
use Mariojgt\SkeletonAdmin\Controllers\Backend\Web\Permissions\RoleController;
use Mariojgt\SkeletonAdmin\Controllers\Backend\Web\Dashboard\DashboardController;
use Mariojgt\SkeletonAdmin\Controllers\Backend\Web\Navigation\NavigationController;
use Mariojgt\SkeletonAdmin\Controllers\Backend\Web\Permissions\PermissionController;

// Auth Route
Route::group([
    'middleware' => ['skeleton_admin', '2fa:skeleton_admin'],
    'prefix'     => config('skeleton.route_prefix'),
], function () {
    Route::get('/skeleton-admin/home', [DashboardController::class, 'index'])
        ->name('skeleton-admin.home');

    Route::controller(AdminController::class)->group(function () {
        Route::get('/admin/index', 'index')->name('admin.admin.index');
        Route::get('/admin/edit/{admin?}', 'edit')->name('admin.edit');
        Route::patch('/admin/update/{admin}', 'update')->name('admin.update');
        Route::patch('/admin/update-password/{admin}', 'updatePassword')->name('admin.update-password');
        Route::patch('/admin/remove-authenticator', 'removeAuthenticator')
            ->name('admin.remove-authenticator');
        Route::post('/admin/2fa/enable', 'enable2fa')->name('admin.2fa.enable');
    });

    Route::controller(UserController::class)->group(function () {
        Route::get('/user/index', 'index')->name('user.admin.index');
    });

    Route::controller(RoleController::class)->group(function () {
        Route::get('/role/index', 'index')->name('admin.role.index');
        Route::get('/role/edit/{role}', 'edit')->name('admin.role.edit');
        Route::patch('/role/edit/{role}', 'update')->name('admin.role.update');
        Route::patch('/role/edit/perm/sync/{role}', 'syncPerm')->name('admin.role.perm.update');
    });

    Route::controller(PermissionController::class)->group(function () {
        Route::get('/permission/index', 'index')->name('admin.permission.index');
    });

    Route::controller(NavigationController::class)->group(function () {
        Route::get('/navigation/index', 'index')->name('admin.navigation.index');
        Route::get('/navigation/position', 'position')->name('admin.navigation.position');
    });

    Route::controller(NavbarController::class)->group(function () {
        Route::get('/navbar/index', 'index')->name('admin.navbar.index');
    });
});
