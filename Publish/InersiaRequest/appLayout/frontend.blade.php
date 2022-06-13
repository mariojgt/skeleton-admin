<!DOCTYPE html>
<html data-theme="dracula" >

<head>
    <title>Skeleton Admin Front</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <link href="{{ asset('vendor/SkeletonAdmin/css/frontend/app.css') }}" rel="stylesheet">
    @inertiaHead
</head>

<body>
    @inertia
</body>
@routes
<script src="{{ asset('vendor/SkeletonAdmin/js/frontend/app.js') }}" defer></script>
<x-biscotto::biscotto/>
</html>
