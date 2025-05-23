<?php

namespace Mariojgt\SkeletonAdmin\Controllers\Backend\Web\Crud;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Mariojgt\Builder\Helpers\FormHelper;

abstract class GenericCrudController extends Controller
{
    protected string $title;
    protected string $model;

    /**
     * Abstract method that must be implemented by child classes
     * This will contain the form configuration
     */
    abstract protected function getFormConfig(): FormHelper;

    /**
     * @param Request $request
     *
     * @return \Inertia\Response
     */
    public function index(Request $request) : \Inertia\Response
    {
        $formConfig = $this->getFormConfig()
            ->setEndpoints(
                listEndpoint: route('admin.api.generic.table'),
                deleteEndpoint: route('admin.api.generic.table.delete'),
                createEndpoint: route('admin.api.generic.table.create'),
                editEndpoint: route('admin.api.generic.table.update')
            )
            ->setModel($this->model)
            ->build();

        return Inertia::render('BackEnd/Generic/index', [
            'title' => $this->title,
            ...$formConfig
        ]);
    }
}
