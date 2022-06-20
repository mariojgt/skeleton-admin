<?php

namespace Mariojgt\SkeletonAdmin\Controllers\Backend\Api\User;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Mariojgt\SkeletonAdmin\Resource\Backend\AdminResource;

class UserController extends Controller
{
    /**
     * Return the user information
     *
     * @return Collect [user]
     */
    public function index()
    {
        return new AdminResource(Auth::user());
    }
}
