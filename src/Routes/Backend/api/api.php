<?php

use Illuminate\Support\Facades\Route;
use Mariojgt\Builder\Controllers\TableBuilderApiController;
use Mariojgt\SkeletonAdmin\Controllers\Backend\Api\Notifications\NotificationsController;

Route::group([
    'middleware' => ['web', 'skeleton_admin'],
    'prefix'     => config('skeleton.route_prefix'),
], function () {
    // Get Admin notifications
    Route::get('/admin/api/notifications/{amount}', [NotificationsController::class, 'index'])
        ->name('admin.api.notifications');
    // Admin read notification
    Route::post('/admin/api/notification/read', [NotificationsController::class, 'read'])
        ->name('admin.api.notification.read');

    // Table api controller
    Route::controller(TableBuilderApiController::class)->group(function () {
        Route::post('/admin/api/generic/table', 'index')->name('admin.api.generic.table');
        Route::post('/admin/api/generic/table/create', 'store')->name('admin.api.generic.table.create');
        Route::post('/admin/api/generic/table/update', 'update')->name('admin.api.generic.table.update');
        Route::post('/admin/api/generic/table/delete', 'delete')->name('admin.api.generic.table.delete');
    });
});
