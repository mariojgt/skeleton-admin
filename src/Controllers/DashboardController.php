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
        return Inertia::render('Dashboard/Index', [
            'title' => 'Login',
        ]);
    }
}
