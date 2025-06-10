<?php

use Illuminate\Support\Facades\Route;
use Laravel\Socialite\Facades\Socialite;
use Mariojgt\SkeletonAdmin\Controllers\Backend\Web\User\UserController;
use Mariojgt\SkeletonAdmin\Controllers\Backend\Web\Admin\AdminController;
use Mariojgt\SkeletonAdmin\Controllers\Backend\Web\Navbar\NavbarController;
use Mariojgt\SkeletonAdmin\Controllers\Backend\Web\System\SystemController;
use Mariojgt\SkeletonAdmin\Controllers\Backend\Web\Permissions\RoleController;
use Mariojgt\SkeletonAdmin\Controllers\Backend\Web\Social\SocialAuthController;
use Mariojgt\SkeletonAdmin\Controllers\Backend\Web\Dashboard\DashboardController;
use Mariojgt\SkeletonAdmin\Controllers\Backend\Web\Navigation\NavigationController;
use Mariojgt\SkeletonAdmin\Controllers\Backend\Web\System\PackageBuilderController;
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

         // API routes
        Route::put('/api/navigation/update/{navigation}', 'updatePosition')->name('admin.api.navigation.update');
        Route::post('/api/navigation/reset', 'resetPositions')->name('admin.api.navigation.reset');
        Route::post('/api/navigation/save', 'savePositions')->name('admin.api.navigation.save');
        Route::get('/api/navigation/tree', 'getNavigationTree')->name('admin.api.navigation.tree');
    });

    Route::controller(NavbarController::class)->group(function () {
        Route::get('/navbar/index', 'index')->name('admin.navbar.index');
    });

    // System Settings Routes
    Route::controller(SystemController::class)->group(function () {
        Route::get('/system/settings', 'index')->name('admin.system.settings');

        // API routes for system management
        Route::get('/api/system/stats', 'getStats')->name('admin.api.system.stats');
        Route::get('/api/system/info', 'getInfo')->name('admin.api.system.info');
        Route::post('/api/system/command', 'runCommand')->name('admin.api.system.command');
        Route::get('/api/system/packages', 'getPackages')->name('admin.api.system.packages');
        Route::post('/api/system/config', 'updateConfig')->name('admin.api.system.config');
        Route::get('/api/system/log-files', 'getLogFiles')->name('admin.api.system.log-files');
        Route::get('/api/system/logs', 'getLogs')->name('admin.api.system.logs');

         // Environment management
        Route::get('/api/system/env-variables', 'getEnvVariables')->name('admin.api.system.env-variables');
        Route::put('/api/system/env-variable/{key}', 'updateEnvVariable')->name('admin.api.system.env-variable');
        Route::post('/api/system/env-variable', 'addEnvVariable')->name('admin.api.system.env-variable.store');
        Route::post('/api/system/env-backup', 'backupEnv')->name('admin.api.system.env-backup');

        // Config file management
        Route::get('/api/system/config-files', 'getConfigFiles')->name('admin.api.system.config-files');
        Route::get('/api/system/config-file/{filename}', 'getConfigFile')->name('admin.api.system.config-file');
    });

    // Package Builder Routes
    Route::controller(PackageBuilderController::class)->group(function () {
        Route::get('/package/builder', 'index')->name('admin.package.builder');

        // API routes for package generation
        Route::post('/api/package/generate', 'generate')->name('admin.api.package.generate');
        Route::get('/api/package/existing', 'getExistingPackages')->name('admin.api.package.existing');
        Route::post('/api/package/validate', 'validateConfig')->name('admin.api.package.validate');
    });
});

Route::group(['middleware' => ['web']], function () {
    Route::get('/auth/{provider}/redirect', [SocialAuthController::class, 'redirect'])
    ->name('social.redirect');
    Route::get('/auth/{provider}/callback', [SocialAuthController::class, 'callback'])
        ->name('social.callback');
});
