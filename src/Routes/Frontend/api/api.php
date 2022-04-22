<?php

use Illuminate\Support\Facades\Route;
use Mariojgt\SkeletonAdmin\Controllers\Frontend\Api\Notifications\NotificationsController;

Route::group([
    'middleware' => ['web', 'auth'],
    'prefix'     => config('skeleton.route_prefix_front'),
], function () {
    // Get user notifications
    Route::get('/user/api/notifications/{amount}', [NotificationsController::class, 'index'])
        ->name('user.api.notifications');
    // User read notification
    Route::post('/user/api/notification/read', [NotificationsController::class, 'read'])
        ->name('user.api.notification.read');
});
