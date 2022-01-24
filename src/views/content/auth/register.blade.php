<x-skeleton::layout.login>
    <x-skeleton::auth.authconteiner title="Register">
        <x-slot name="form">
            <x-skeleton::form.form action="{{ route('register.user') }}">
                <div class="px-5 py-7">
                    <x-skeleton::form.text name="name" label="Name" />
                    <x-skeleton::form.email name="email" label="Email" />
                    <x-skeleton::form.password name="password" label="Password" />
                    <x-skeleton::form.password name="password_confirmation" label="Password Confirm" />
                    <x-skeleton::form.submit name="Register" />
                </div>
            </x-skeleton::form.form>
        </x-slot>

        <x-slot name="links">
            <x-skeleton::form.link route="{{ route('login') }}" name="Login" />
        </x-slot>
    </x-skeleton::auth.authconteiner>
</x-skeleton::layout.login>
