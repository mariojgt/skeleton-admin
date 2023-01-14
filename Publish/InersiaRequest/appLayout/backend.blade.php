<!DOCTYPE html>
<html data-theme="dracula" >

<head>
    <title>Skeleton Admin Backend</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />

    {{
        Vite::useBuildDirectory('vendor/Skeleton')
            ->withEntryPoints([
                'resources/vendor/SkeletonAdmin/js/backend/app.js',
                'resources/vendor/SkeletonAdmin/sass/backend/backendApp.scss',
            ])
    }}
    @inertiaHead
</head>

<body>
    @inertia
</body>
@routes
<x-biscotto::biscotto/>
</html>
