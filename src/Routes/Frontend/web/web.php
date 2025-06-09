<?php

use Illuminate\Support\Facades\Route;
use Mariojgt\SkeletonAdmin\Controllers\FrontEnd\Web\Profile\ProfileController;
use Mariojgt\SkeletonAdmin\Controllers\Frontend\Web\Dashboard\DashboardController;

Route::group([
    'middleware' => ['web', 'auth', 'verified', '2fa'],
    'prefix' => config('skeleton.route_prefix_front'),
], function () {
    // Route::get('/home', [DashboardController::class, 'index'])->name('user.home');

    // if if the class exist ProfileController
    if (class_exists(ProfileController::class)) {
        Route::controller(ProfileController::class)->group(function () {
            Route::get('/user/edit/{user?}', 'edit')->name('user.edit');
            Route::patch('/user/update/{user}', 'update')->name('user.update');
            Route::patch('/user/update-password/{user}', 'updatePassword')->name('user.update-password');
            Route::patch('/user/remove-autenticator', 'removeAutenticator')
                ->name('user.remove-autenticator');
            Route::post('/user/2fa/enable', 'enable2fa')->name('user.2fa.enable');
        });
    }

    Route::get('/avatars', [ProfileController::class, 'listAvatars'])->name('avatars.list');
});
