<!DOCTYPE html>
<html lang="en" data-theme="dark">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{ $title ?? 'Phantom' }}</title>
    <link href="{{ asset('vendor/SkeletonAdmin/css/app.css') }}" rel="stylesheet">
    @stack('css')
</head>

<body>
    <div id="app">
        <div class="base-200 drawer">
            {{-- Id used to toogle the side menu --}}
            <input id="nav-drawer" type="checkbox" class="drawer-toggle">
            {{-- Website content --}}
            <div class="flex flex-col drawer-content">
                <x-skeleton::core.navbar />
                <x-skeleton::layout.flash />
                <div class="px-6 py-8">
                    {{ $slot }}
                </div>
                {{-- Footer --}}
                <x-skeleton::core.footer />
            </div>
            {{-- Side Menu Drawer Start here --}}
            <div class="drawer-side">
                <label for="nav-drawer" class="drawer-overlay"></label>
                <x-skeleton::menu.menu-container />

            </div>
            {{-- Side Menu Drawer End here --}}
        </div>
    </div>
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
