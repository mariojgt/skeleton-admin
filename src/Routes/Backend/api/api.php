<?php

use Illuminate\Support\Facades\Route;
use Mariojgt\Builder\Controllers\TableBuilderApiController;
use Mariojgt\SkeletonAdmin\Controllers\Backend\Api\Auth\AuthApiController;
use Mariojgt\SkeletonAdmin\Controllers\Backend\Api\Media\MediaController;
use Mariojgt\SkeletonAdmin\Controllers\Backend\Api\Navigation\NavigationController;
use Mariojgt\SkeletonAdmin\Controllers\Backend\Api\Notifications\NotificationsController;
use Mariojgt\SkeletonAdmin\Controllers\Backend\Api\Search\SearchController;
use Mariojgt\SkeletonAdmin\Controllers\Backend\Api\User\UserController;

Route::group([
    'middleware' => ['web', 'skeleton_admin'],
    'prefix' => config('skeleton.route_prefix'),
], function () {
    Route::controller(NotificationsController::class)->group(function () {
        Route::get('/admin/api/notifications/{amount}', 'index')->name('admin.api.notifications');
        Route::post('/admin/api/notification/read', 'read')->name('admin.api.notification.read');
    });

    Route::controller(NavigationController::class)->group(function () {
        Route::put('/admin/api/navigation/{navigation}', 'menuUpdate')->name('admin.api.navigation.update');
    });

    Route::controller(SearchController::class)->group(function () {
        Route::get('/admin/api/search', 'index')->name('admin.api.search');
    });

    /*
    |--------------------------------------------------------------------------
    | We need this builder api so we can dynamic create the datatable and cruds
    |--------------------------------------------------------------------------
    */
    Route::controller(TableBuilderApiController::class)->group(function () {
        Route::post('/admin/api/generic/table', 'index')->name('admin.api.generic.table');
        Route::post('/admin/api/generic/table/create', 'store')->name('admin.api.generic.table.create');
        Route::post('/admin/api/generic/table/update', 'update')->name('admin.api.generic.table.update');
        Route::post('/admin/api/generic/table/delete', 'delete')->name('admin.api.generic.table.delete');
    });

    Route::controller(MediaController::class)->group(function () {
        Route::post('/admin/api/media/search', 'searchMedia')->name('admin.api.media.search');
    });
});

Route::group([
    'prefix' => 'api',
], function () {
    Route::controller(AuthApiController::class)->group(function () {
        Route::post('/backend/login', 'login')->name('skeleton.backend.api.login');
        Route::post('/backend/register', 'register')->name('skeleton.backend.api.register');
        Route::post('/backend/forgot', 'reset')->name('skeleton.backend.api.forgot');
    });
});

/*
|--------------------------------------------------------------------------
| Api controller
|--------------------------------------------------------------------------
*/
Route::group([
    'middleware' => ['auth:sanctum'],
    'prefix' => 'api',
], function () {
    Route::controller(UserController::class)->group(function () {
        Route::post('/user/info', 'index')->name('user.info');
        Route::patch('/user/profile', 'updateProfile')->name('user.profile');
        Route::patch('/user/password', 'updatePassword')->name('user.password');
        Route::post('/user/avatar', 'updateAvatar')->name('user.avatar');
    });

    Route::controller(AuthApiController::class)->group(function () {
        Route::post('/backend/logout', 'logout')->name('skeleton.backend.api.logout');
    });
});
