<!DOCTYPE html>
<html lang="en" data-theme="halloween">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{ $title ?? 'SkeletonAdmin' }}</title>
    <link href="{{ asset('vendor/SkeletonAdmin/css/app.css') }}" rel="stylesheet">
    @stack('css')
</head>

<body>

    <x-skeleton::layout.flash />
    {{ $slot }}

    <script src="{{ asset('vendor/SkeletonAdmin/js/app.js') }}"></script>
    <script src="{{ asset('vendor/SkeletonAdmin/js/vue.js') }}"></script>
    <script>
        const Toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
            });
    </script>
    @stack('js')
</body>

</html>
