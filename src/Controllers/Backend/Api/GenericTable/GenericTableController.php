<?php

namespace Mariojgt\SkeletonAdmin\Controllers\Backend\Api\GenericTable;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Mariojgt\SkeletonAdmin\Resource\Common\NotificationResource;

class GenericTableController extends Controller
{
    public function index(Request $request)
    {
        $request->validate([
          'model'   => 'required',
          'columns' => 'required',
        ]);

        // Fist we need to decrypt the model and instantiate it
        $model = decrypt($request->model);
        $model = new $model;

        // Get the columns
        $rawColumns = collect($request->columns);
        $columns    = $rawColumns->pluck('key');

        // Check if the search is not empty
        if ($request->has('search')) {
            // Get the columns that are sortable
            $sortableColumns = $rawColumns->filter(function ($column) use ($model) {
                // If shortalbe is true, then we can sort it
                if ($column['sortable'] == true) {
                    return true;
                }
            });
            // Get the columns that are searchable
            $columnSearch = $sortableColumns->pluck('key');
            // Get the search value
            $model = $model->where(function ($query) use ($request, $columnSearch) {
                // Search using concatination
                foreach ($columnSearch as $column) {
                    $query->orWhere($column, 'like', '%'.$request->search.'%');
                }
            });
        }

        // Check if the sort is not empty
        if (!empty($request->sort)) {
            // Get the sort value
            $model = $model->orderBy($request->sort, $request->direction ?? 'asc');
        }

        // Get the data based on the columns if is date we need to format it
        $data = $model->select($columns->toArray())->paginate($request->perPage ?? 10);

        return $data;
    }
}
