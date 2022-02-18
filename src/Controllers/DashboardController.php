<?php

namespace Mariojgt\SkeletonAdmin\Controllers;

use Inertia\Inertia;
use App\Http\Controllers\Controller;

class DashboardController extends Controller
{
    /**
     * @return [blade view]
     */
    public function index()
    {
        // Example on the fly change the inertia template
        // Inertia::setRootView('layouts.news');

        return Inertia::render('Dashboard/Index', [
            'title' => 'Login',
        ]);
    }
}
