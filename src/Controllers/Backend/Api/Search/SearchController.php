<?php

namespace Mariojgt\SkeletonAdmin\Controllers\Backend\Api\Search;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class SearchController extends Controller
{
    /**
     * Return the last search
     */
    public function index(Request $request)
    {
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
            // Automatic create a instance of the model
            $modelInstance = new $model();
            $modelInstance = $modelInstance->query();
            // Now do a like search on the model based on the search fields
            foreach ($item['search_fiels'] as $field) {
                $modelInstance->orWhere($field, 'LIKE', '%' . $search . '%');
            }
            // Get the result
            $result = $modelInstance->get()->take(5)->pluck($item['pluck'], 'id');

            if (count($result) > 0) {
                $searchLoopItem = [];
                foreach ($result as $key => $data) {
                    $route                      = route($item['route'], $key);
                    $lastRoute                  = explode('/', $route);
                    $lastRoute                  = $lastRoute[count($lastRoute) - 2] . '/' . $lastRoute[count($lastRoute) - 1];
                    $searchLoopItem['search'][] = [
                        'result'     => $data,
                        'route'      => route($item['route'], $key),
                        'last_route' => $lastRoute,
                    ];
                }
                $modelName = class_basename($model);

                $validSearchItems[$modelName] = $searchLoopItem;
            }
        }
        if (empty($validSearchItems)) {
            return [
                'data' => $validSearchItems,
                'status' => false,
            ];
        } else {
            return [
                'data' => $validSearchItems,
                'status' => true,
            ];
        }
    }
}
