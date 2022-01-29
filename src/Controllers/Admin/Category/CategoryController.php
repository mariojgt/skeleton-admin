<?php

namespace Mariojgt\SkeletonAdmin\Controllers\Admin\Category;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Redirect;
use Mariojgt\SkeletonAdmin\Models\Admin;
use Illuminate\Validation\ValidationException;
use Mariojgt\Castle\Helpers\AutenticatorHandle;
use Mariojgt\SkeletonAdmin\Resource\AdminResource;

class CategoryController extends Controller
{
    public function index(Request $request)
    {
        return Inertia::render('Category/Index', []);
    }
}
