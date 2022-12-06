<?php

namespace Mariojgt\SkeletonAdmin\Controllers\Backend\Web\Dashboard;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Facades\Mariojgt\SkeletonAdmin\Helpers\SystemHelper;


class DashboardController extends Controller
{
    /**
     * @return [blade view]
     */
    public function index()
    {
        return Inertia::render('BackEnd/Dashboard/Index', [
            'title'          => 'Dashboard',
            'system_version' => SystemHelper::localVersion(),
        ]);
    }
}
