<?php

namespace Mariojgt\SkeletonAdmin\Controllers\FrontEnd\Dashboard;

use Inertia\Inertia;
use App\Http\Controllers\Controller;

class DashboardController extends Controller
{
    /**
     * Return the dashboard view for the frontend user.
     * @return [blade view]
     */
    public function index()
    {
        // Example on the fly change the inertia template
        // Inertia::setRootView('layouts.news');
        return Inertia::render('UserDashboard/Index', [
            'title' => 'Login',
        ]);
    }
}
