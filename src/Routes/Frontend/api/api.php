<?php

use Illuminate\Support\Facades\Route;
use Mariojgt\SkeletonAdmin\Controllers\FrontEnd\Api\Notifications\NotificationController;

Route::group([
    'middleware' => ['web', 'auth'],
    'prefix'     => config('skeleton.route_prefix_front'),
], function () {
    if (class_exists(NotificationController::class)) {
        Route::controller(NotificationController::class)->group(function () {
            Route::get('/user/api/notifications/{amount}', 'index')->name('user.api.notifications');
            Route::post('/user/api/notification/read', 'read')->name('user.api.notification.read');
        });
    }
});
