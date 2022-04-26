<?php

namespace Mariojgt\SkeletonAdmin\Controllers\Frontend\Web\Dashboard;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Return the dashboard view for the frontend user.
     *
     * @return [blade view]
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
