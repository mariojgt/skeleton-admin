<!DOCTYPE html>
<html data-theme="dracula" >

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <link href="{{ asset('vendor/SkeletonAdmin/css/backend/app.css') }}" rel="stylesheet">
    @inertiaHead
</head>

<body>
    @inertia
</body>
@routes
<script src="{{ asset('vendor/SkeletonAdmin/js/backend/app.js') }}" defer></script>
<x-biscotto::biscotto/>
</html>
