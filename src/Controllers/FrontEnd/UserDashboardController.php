<?php

namespace Mariojgt\SkeletonAdmin\Controllers\FrontEnd;

use Inertia\Inertia;
use App\Http\Controllers\Controller;

class UserDashboardController extends Controller
{
    /**
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
