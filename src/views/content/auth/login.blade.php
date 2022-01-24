<x-skeleton::layout.login>
    <x-skeleton::auth.authconteiner title="Login">
        <x-slot name="form">
            <x-skeleton::form.form action="{{ route('login.user') }}">
                <div class="px-5 py-7">
                    <x-skeleton::form.email name="email" label="Email" />
                    <x-skeleton::form.password name="password" label="Password" />
                    <x-skeleton::form.submit />
                </div>
            </x-skeleton::form.form>
        </x-slot>

        <x-slot name="links">
            <div class="grid grid-cols-2 gap-1">
                <div class="text-center sm:text-center whitespace-nowrap">
                    <x-skeleton::form.link route="{{ route('forgot-password') }}" name="Forgot Password" />
                </div>
                <div class="text-center sm:text-center whitespace-nowrap">
                    <x-skeleton::form.link route="{{ route('register') }}" name="Register" />
                </div>
            </div>
        </x-slot>
    </x-skeleton::auth.authconteiner>

</x-skeleton::layout.login>
