<?php

use Illuminate\Support\Facades\Route;
use Mariojgt\Builder\Controllers\TableBuilderApiController;
use Mariojgt\SkeletonAdmin\Controllers\Backend\Api\Till\TillController;
use Mariojgt\SkeletonAdmin\Controllers\Backend\Api\User\UserController;
use Mariojgt\SkeletonAdmin\Controllers\Backend\Api\Order\OrderController;
use Mariojgt\SkeletonAdmin\Controllers\Backend\Api\Auth\AuthApiController;
use Mariojgt\SkeletonAdmin\Controllers\Backend\Api\Product\ProductController;
use Mariojgt\SkeletonAdmin\Controllers\Backend\Api\Category\CategoryController;
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
    // User api controller
    Route::controller(UserController::class)->group(function () {
        // User info
        Route::post('/user/info', 'index')->name('user.info');
        // Update User profile
        Route::patch('/user/profile', 'updateProfile')->name('user.profile');
        // Update User password
        Route::patch('/user/password', 'updatePassword')->name('user.password');
        // Update User avatar
        Route::post('/user/avatar', 'updateAvatar')->name('user.avatar');
    });
    // User api controller
    Route::controller(AuthApiController::class)->group(function () {
        // Api do Logout
        Route::post('/backend/logout', 'logout')->name('skeleton.backend.api.logout');
    });

    // Till routes
    Route::controller(TillController::class)->group(function () {
        Route::post('/tills', 'index')->name('skeleton.backend.api.tills');
        Route::patch('/tills/update/{till}', 'update')->name('skeleton.backend.api.update');
        Route::post('/tills/create', 'create')->name('skeleton.backend.api.create');
    });

    // Category routes
    Route::controller(CategoryController::class)->group(function () {
        Route::post('/category', 'index')->name('skeleton.backend.api.category');
        Route::patch('/category/update/{category}', 'update')->name('skeleton.backend.api.update.category');
        Route::post('/category/create', 'create')->name('skeleton.backend.api.create.category');
    });

    // Product routes
    Route::controller(ProductController::class)->group(function () {
        Route::post('/product', 'index')->name('skeleton.backend.api.product');
        Route::patch('/product/update/{product}', 'update')->name('skeleton.backend.api.product.update');
        Route::post('/product/create', 'create')->name('skeleton.backend.api.product.create');
        Route::post('/product/update/main/image', 'updateMainImage')->name('skeleton.backend.api.update.main.image');
        Route::post('/product/update', 'update')->name('skeleton.backend.api.update');
        Route::post('/product/search', 'search')->name('skeleton.backend.api.product.search');
        // Extra products search
        Route::post('/product/extras', 'extras')->name('skeleton.backend.api.product.extras');
    });

    // Order routes
    Route::controller(OrderController::class)->group(function () {
        Route::post('/order/create', 'create')->name('skeleton.backend.api.order.create');
        Route::post('/order/edit/{order}', 'edit')->name('skeleton.backend.api.order.edit');
    });
});
