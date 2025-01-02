<?php

namespace Mariojgt\SkeletonAdmin\Controllers\FrontEnd\Web\Dashboard;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Return the dashboard view for the frontend user.
     */
    public function index()
    {
        // Example on the fly change the inertia template
        // Inertia::setRootView('layouts.news');
        return Inertia::render('FrontEnd/Dashboard/Index', [
            'title' => 'Login',
        ]);
    }
}
