<?php

namespace Mariojgt\SkeletonAdmin\Controllers\Backend\Web\Navbar;

use Mariojgt\Builder\Enums\FieldTypes;
use Mariojgt\Builder\Helpers\FormHelper;
use Mariojgt\SkeletonAdmin\Controllers\Backend\Web\Crud\GenericCrudController;
use Mariojgt\SkeletonAdmin\Models\Navbar;

class NavbarController extends GenericCrudController
{
    public function __construct()
    {
        $this->title = 'Navbar | Navbar';
        $this->model = Navbar::class;
    }

    protected function getFormConfig(): FormHelper
    {
        return (new FormHelper)
            ->addIdField()
            ->addField(
                label: 'Menu Label',
                key: 'menu_label',
                sortable: true,
                canCreate: true,
                canEdit: true,
                type: FieldTypes::TEXT->value
            )
            ->addField(
                label: 'Route',
                key: 'route',
                sortable: true,
                canCreate: true,
                canEdit: true,
                type: FieldTypes::TEXT->value
            )
            ->addField(
                label: 'Icon',
                key: 'icon',
                sortable: true,
                canCreate: true,
                canEdit: true,
                type: FieldTypes::ICON->value
            )
            ->addField(
                label: 'Is Frontend',
                key: 'is_frontend',
                type: FieldTypes::BOOLEAN->value,
                filterable: true,
                sortable: true,
                canCreate: true,
                canEdit: true
            )
            ->addField(
                label: 'Is Active',
                key: 'is_active',
                type: FieldTypes::BOOLEAN->value,
                filterable: true,
                sortable: true,
                canCreate: true,
                canEdit: true
            );
    }
}
