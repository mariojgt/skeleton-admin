<?php

namespace Mariojgt\SkeletonAdmin\Controllers\Backend\Web\Permissions;

use Mariojgt\Builder\Enums\FieldTypes;
use Mariojgt\Builder\Helpers\FormHelper;
use Mariojgt\SkeletonAdmin\Controllers\Backend\Web\Crud\GenericCrudController;
use Mariojgt\SkeletonAdmin\Models\Permission;

class PermissionController extends GenericCrudController
{
    public function __construct()
    {
        $this->title = 'Permissions | Permissions';
        $this->model = Permission::class;
    }

    protected function getFormConfig(): FormHelper
    {
        return (new FormHelper)
            ->addIdField()
            ->addField(
                label: 'Name',
                key: 'name',
                sortable: true,
                canCreate: true,
                canEdit: true,
                unique: true,
                type: FieldTypes::TEXT->value
            )
            ->addField(
                label: 'Guard',
                key: 'guard_name',
                type: FieldTypes::SELECT->value,
                sortable: true,
                canCreate: true,
                canEdit: true,
                options: [
                    'select_options' => [
                        ['value' => 'skeleton_admin', 'label' => 'backend'],
                        ['value' => 'web', 'label' => 'frontend'],
                        ['value' => 'api', 'label' => 'api'],
                    ],
                ],
                filterable: true
            )
            ->addField(
                label: 'Created At',
                key: 'created_at',
                type: FieldTypes::TIMESTAMP->value,
                filterable: true,
                sortable: true,
                canCreate: false,
                canEdit: false
            )
            ->addField(
                label: 'Updated At',
                key: 'updated_at',
                type: FieldTypes::TIMESTAMP->value,
                filterable: true,
                sortable: true,
                canCreate: false,
                canEdit: false
            );
    }
}
