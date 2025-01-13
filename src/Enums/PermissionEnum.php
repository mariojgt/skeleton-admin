<?php

namespace Mariojgt\SkeletonAdmin\Enums;

use Mariojgt\SkeletonAdmin\Enums\EnumToArray;

enum PermissionEnum: string
{
    use EnumToArray;
    case CreatePermission = 'create-permission';
    case EditPermission = 'edit-permission';
    case DeletePermission = 'delete-permission';
    case ReadPermission = 'read-permission';
    case AdminEdit = 'admin-edit';
}
