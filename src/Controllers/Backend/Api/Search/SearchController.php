<?php

namespace Mariojgt\SkeletonAdmin\Controllers\Backend\Api\Search;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Mariojgt\SkeletonAdmin\Models\Role;
use Mariojgt\SkeletonAdmin\Models\User;
use Mariojgt\SkeletonAdmin\Models\Admin;
use Illuminate\Support\Facades\Validator;
use Mariojgt\SkeletonAdmin\Models\Navigation;
use Mariojgt\SkeletonAdmin\Models\Permission;
use Mariojgt\SkeletonAdmin\Resource\Common\SearchResource;
use Mariojgt\SkeletonAdmin\Resource\Common\NotificationResource;

class SearchController extends Controller
{
    /**
     * Return the last searchs
     *
     * @param int $amount
     *
     * @return json
     */
    public function index(Request $request)
    {
        // Validate the user
        $validator = Validator::make($request->all(), [
            'search' => 'required',
        ]);

        // If Validation Fail
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
        // Get the search
        $search = $request->search;

        $searchRules = config('skeleton')['backend_search_config'];

        $validSearchItems = [];

        foreach ($searchRules as $model => $item) {
            // Automaitc create a instance of the model
            $modelInstance = new $model();
            $modelInstance = $modelInstance->query();
            // Now do a like search on the model based on the search fields
            foreach ($item['search_fiels'] as $field) {
                $modelInstance->orWhere($field, 'LIKE', '%' . $search . '%');
            }
            // Get the result
            $result = $modelInstance->get()->take(5)->pluck($item['pluck'], 'id');

            if (count($result) > 0) {
                $serachLoopItem = [];
                foreach ($result as $key => $data) {
                    $route = route($item['route'], $key);
                    $lastRoute = explode('/', $route);
                    $lastRoute = $lastRoute[count($lastRoute) - 2] .'/'. $lastRoute[count($lastRoute) - 1];
                    $serachLoopItem['search'][] = [
                        'result'     => $data,
                        'route'      => route($item['route'], $key),
                        'last_route' => $lastRoute,
                    ];
                }
                $modelName = class_basename($model);

                $validSearchItems[$modelName] = $serachLoopItem;
            }
        }

        return $validSearchItems;
    }
}
