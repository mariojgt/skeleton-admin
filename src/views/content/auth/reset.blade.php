<x-skeleton::layout.login>
    <x-skeleton::auth.authconteiner title="Password Reset" >
        <x-slot name="form">
            <x-skeleton::form.form action="{{ route('password-reset') }}" >
                <div class="px-5 py-7">
                    <x-skeleton::form.email name="email" label="Email" />
                    <x-skeleton::form.submit />
                </div>
            </x-skeleton::form.form>
        </x-slot>

        <x-slot name="links">
            <div class="px-5 py-7">
                <div class="grid grid-cols-1 gap-3">
                    <x-skeleton::form.link route="{{ route('login') }}" name="Login" />
                </div>
            </div>
        </x-slot>
    </x-skeleton::auth.authconteiner>
</x-skeleton::layout.login>
