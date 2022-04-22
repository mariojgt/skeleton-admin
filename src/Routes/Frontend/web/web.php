<?php

use Illuminate\Support\Facades\Route;
use Mariojgt\SkeletonAdmin\Controllers\Frontend\Web\Profile\ProfileController;
use Mariojgt\SkeletonAdmin\Controllers\Frontend\Web\Dashboard\DashboardController;

Route::group([
    'middleware' => ['web', 'auth', '2fa'],
    'prefix'     => config('skeleton.route_prefix_front'),
], function () {
    // Warn the user need to be verify
    Route::get('/user/home', [DashboardController::class, 'index'])->name('user.home');

    // User Profile
    Route::controller(ProfileController::class)->group(function () {
        // Profile Edit
        Route::get('/user/edit/{user?}', 'edit')->name('user.edit');
        // Prodifle Update
        Route::patch('/user/update/{user}', 'update')->name('user.update');
        // Profile Update Password
        Route::patch('/user/update-password/{user}', 'updatePassword')->name('user.update-password');
        // Remove Autentetictor
        Route::patch('/user/remove-autenticator', 'removeAutenticator')
            ->name('user.remove-autenticator');
        // Verify and enable 2FA
        Route::post('/user/2fa/enable', 'enable2fa')->name('user.2fa.enable');
    });
});
