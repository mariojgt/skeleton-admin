<?php

use Illuminate\Support\Facades\Route;
use Mariojgt\SkeletonAdmin\Controllers\FrontEnd\Web\Dashboard\DashboardController;

Route::group([
    'middleware' => ['web'],
], function () {
    Route::get('/', [DashboardController::class, 'index'])->name('homepage');
});
