<?php

use Illuminate\Support\Facades\Route;
use Mariojgt\SkeletonAdmin\Controllers\Frontend\Api\Notifications\NotificationController;

Route::group([
    'middleware' => ['web', 'auth'],
    'prefix'     => config('skeleton.route_prefix_front'),
], function () {
    // User notifications fetch
    Route::controller(NotificationController::class)->group(function () {
        // Get user notifications
        Route::get('/user/api/notifications/{amount}', 'index')->name('user.api.notifications');
        // User read notification
        Route::post('/user/api/notification/read', 'read')->name('user.api.notification.read');
    });
});
