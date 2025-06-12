<?php

namespace Mariojgt\SkeletonAdmin\Controllers\Backend\Web\Permissions;

use Inertia\Inertia;
use App\Http\Controllers\Controller;
use Mariojgt\Builder\Enums\FieldTypes;
use Mariojgt\Builder\Helpers\FormHelper;
use Mariojgt\SkeletonAdmin\Models\Permission;
use Mariojgt\SkeletonAdmin\Controllers\Backend\Web\Crud\GenericCrudController;

class PermissionController extends GenericCrudController
{
    public function __construct()
    {
        $this->title = 'Permissions | Permissions';
        $this->model = Permission::class;
    }

    protected function getFormConfig(): FormHelper
    {
        return (new FormHelper())
            ->addIdField()
            ->addField(
                label: 'Name',
                key: 'name',
                sortable: true, // Added sortable
                canCreate: true, // Added canCreate
                canEdit: true, // Added canEdit
                unique: true, // Permissions usually have unique names
                type: FieldTypes::TEXT->value
            )
            ->addField(
                label: 'Guard',
                key: 'guard_name',
                type: FieldTypes::SELECT->value,
                options: [
                    'select_options' => [
                        ['value' => 'skeleton_admin', 'label' => 'backend'],
                        ['value' => 'web', 'label' => 'frontend'],
                        ['value' => 'api', 'label' => 'api']
                    ]
                ],
                filterable: true
            )
            ->addTimestampField( // Using addTimestampField for created_at
                label: 'Created At',
                key: 'created_at',
                sortable: true, // Made sortable
                canCreate: false,
                canEdit: false // Typically not editable manually
            )
            ->addTimestampField(
                label: 'Updated At',
                key: 'updated_at',
                sortable: true, // Made sortable
                canCreate: false,
                canEdit: false // Typically not editable manually
            );
    }
}
