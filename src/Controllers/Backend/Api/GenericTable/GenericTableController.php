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
                    $query->orWhere($column, 'like', '%' . $request->search . '%');
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

    public function store(Request $request)
    {
        $request->validate(
            [
                'model'        => 'required',
                'data.*.value' => 'required',
            ],
            [
                'data.*.value.required' => 'The value is required',
            ]
        );

        // Fist we need to decrypt the model and instantiate it
        $model = decrypt($request->model);
        $model = new $model;

        // Get the columns
        $rawColumns = collect($request->data);
        $columns    = $rawColumns->pluck('value', 'key');

        // Create the model
        $model = new $model();
        // Loop through the columns and set the values
        foreach ($columns as $key => $value) {
            $model->$key = $value;
        }
        // Save the model
        $model->save();

        // Return the response
        return response()->json([
            'success' => true,
            'message' => 'Item created successfully',
        ]);
    }

    /**
     * Dynamic delete model item.
     *
     * @param Request $request
     *
     */
    public function delete(Request $request)
    {
        $request->validate([
            'model' => 'required',
            'id'  => 'required',
        ]);

        // Fist we need to decrypt the model and instantiate it
        $model = decrypt($request->model);
        $model = new $model;

        // Find the model item
        $modelItem = $model->find($request->id);

        // Delete
        $modelItem->delete();

        // Return the response
        return response()->json([
            'success' => true,
            'message' => 'Item deleted successfully',
        ]);
    }
}
