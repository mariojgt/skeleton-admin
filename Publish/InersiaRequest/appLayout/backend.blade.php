<!DOCTYPE html>
<html data-theme="dracula" >

<head>
    <title>Skeleton Admin Backend</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <link href="{{ asset('vendor/SkeletonAdmin/css/backend/app.css') }}" rel="stylesheet">
    @vite([
        'resources/vendor/SkeletonAdmin/js/backend/app.js',
        'resources/vendor/SkeletonAdmin/sass/backend/app.scss',
    ])
    @inertiaHead
</head>

<body>
    @inertia
</body>
@routes
<x-biscotto::biscotto/>
</html>
