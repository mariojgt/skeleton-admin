<?php

use Illuminate\Support\Facades\Route;
use Mariojgt\Builder\Controllers\TableBuilderApiController;
use Mariojgt\SkeletonAdmin\Controllers\Backend\Api\Auth\AuthApiController;
use Mariojgt\SkeletonAdmin\Controllers\Backend\Api\Navigation\NavigationController;
use Mariojgt\SkeletonAdmin\Controllers\Backend\Api\Notifications\NotificationsController;

Route::group([
    'middleware' => ['web', 'skeleton_admin'],
    'prefix'     => config('skeleton.route_prefix'),
], function () {
    // Admin notifications fetch
    Route::controller(NotificationsController::class)->group(function () {
        // Get Admin notifications
        Route::get('/admin/api/notifications/{amount}', 'index')->name('admin.api.notifications');
        // Admin read notification
        Route::post('/admin/api/notification/read', 'read')->name('admin.api.notification.read');
    });

    // Admin update the navigation
    Route::controller(NavigationController::class)->group(function () {
        // Get Admin notifications
        Route::put('/admin/api/navigation/{navigation}', 'menuUpdate')->name('admin.api.navigation.update');
    });

    // BUILDER Table api controller
    Route::controller(TableBuilderApiController::class)->group(function () {
        Route::post('/admin/api/generic/table', 'index')->name('admin.api.generic.table');
        Route::post('/admin/api/generic/table/create', 'store')->name('admin.api.generic.table.create');
        Route::post('/admin/api/generic/table/update', 'update')->name('admin.api.generic.table.update');
        Route::post('/admin/api/generic/table/delete', 'delete')->name('admin.api.generic.table.delete');
    });
});

// Boot token required
Route::group([
    'prefix'     => 'api',
], function () {
    Route::controller(AuthApiController::class)->group(function () {
        // Api do Login
        Route::post('/backend/login', 'login')->name('skeleton.backend.api.login');
        // Api do Register
        Route::post('/backend/register', 'register')->name('skeleton.backend.api.register');
        // Api do forgot password
        Route::post('/backend/forgot', 'reset')->name('skeleton.backend.api.forgot');
    });
});

// Mobile Auth Routes
Route::group([
    'middleware' => ['auth:sanctum'],
    'prefix'     => 'api',
], function () {
    Route::controller(UserApiController::class)->group(function () {
        // Check validate token
        Route::post('/skeleton/api/check-token', 'checkToken')->name('skeleton.api.check-token');
        // Load user info
        Route::post('/skeleton/api/user', 'userProfile')->name('skeleton.api.user');
        Route::post('/skeleton/api/user-update', 'userUpdateProfile')->name('skeleton.api.user-update');
    });
});
