<?php

use Illuminate\Support\Facades\Route;
use Mariojgt\SkeletonAdmin\Controllers\Backend\Api\GenericTable\GenericTableController;
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

    // Generic table api
    Route::post('/admin/api/generic/table', [GenericTableController::class, 'index'])
        ->name('admin.api.generic.table');
    Route::post('/admin/api/generic/table/create', [GenericTableController::class, 'store'])
        ->name('admin.api.generic.table.create');
    Route::post('/admin/api/generic/table/delete', [GenericTableController::class, 'delete'])
        ->name('admin.api.generic.table.delete');
});
