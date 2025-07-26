<?php

namespace Mariojgt\SkeletonAdmin\Controllers\Backend\Web\User;

use App\Models\User;
use Mariojgt\Builder\Enums\FieldTypes;
use Mariojgt\Builder\Helpers\FormHelper;
use Mariojgt\SkeletonAdmin\Controllers\Backend\Web\Crud\GenericCrudController;

class UserController extends GenericCrudController
{
    public function __construct()
    {
        $this->title = 'Users | Management'; // Adjusted title for clarity
        $this->model = User::class;
    }

    protected function getFormConfig(): FormHelper
    {
        return (new FormHelper)
            ->addIdField()
            ->addField(
                label: 'First Name',
                key: 'first_name',
                sortable: true,
                canCreate: true,
                canEdit: true,
                type: FieldTypes::TEXT->value
            )
            ->addField(
                label: 'Last Name',
                key: 'last_name',
                sortable: true,
                canCreate: true,
                canEdit: true,
                type: FieldTypes::TEXT->value
            )
            ->addField(
                label: 'Email',
                key: 'email',
                sortable: true,
                canCreate: true,
                canEdit: true,
                unique: true, // Email should be unique
                type: FieldTypes::EMAIL->value
            )
            ->addField(
                label: 'Password',
                key: 'password',
                sortable: false, // Passwords are not typically sortable
                canCreate: true,
                canEdit: true, // Allow editing for password change (though often handled separately)
                type: FieldTypes::PASSWORD->value
            )
            ->addTimestampField( // Using addTimestampField for email_verified_at
                label: 'Email Verified At',
                key: 'email_verified_at',
                sortable: true,
                canCreate: false, // Not manually set on creation
                canEdit: false // Typically not editable manually
            );
        // If you have a custom edit route for users (e.g., for profile settings), you'd add it here:
        // ->setCustomEditRoute(
        //     route: route('admin.user.edit', ['user' => '{id}']), // Example, adjust as needed
        //     customActionName: 'User Profile'
        // );
    }
}
