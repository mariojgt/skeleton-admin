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
                canCreate: true, // Changed to true to allow creation
                canEdit: true,
                type: FieldTypes::TEXT->value
            )
            ->addField(
                label: 'Route',
                key: 'route',
                sortable: true,
                canCreate: true, // Changed to true to allow creation
                canEdit: true, // Changed to true to allow editing
                type: FieldTypes::TEXT->value
            )
            ->addIconField(
                label: 'Icon',
                key: 'icon',
                sortable: true,
                canCreate: true, // Changed to true to allow creation
                canEdit: true
            )
            ->addBooleanField(
                label: 'Is Frontend', // Corrected label for consistency
                key: 'is_frontend',
                canCreate: true, // Added to allow creation
                canEdit: true // Added to allow editing
            )
            ->addBooleanField(
                label: 'Is Active',
                key: 'is_active',
                canCreate: true, // Added to allow creation
                canEdit: true // Added to allow editing
            );
    }
}
