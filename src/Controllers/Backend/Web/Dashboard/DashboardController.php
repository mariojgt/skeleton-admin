<?php

namespace Mariojgt\SkeletonAdmin\Controllers\Backend\Web\Dashboard;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * @return [blade view]
     */
    public function index()
    {
        return Inertia::render('BackEnd/Dashboard/Index', [
            'title' => 'Dashboard',
        ]);
    }
}
