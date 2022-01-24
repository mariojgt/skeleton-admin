<x-skeleton::layout.login>
    <x-skeleton::auth.authconteiner title="Password Change Reset" >
        <x-slot name="form">
            <x-skeleton::form.form action="{{ route('password.change') }}" >
                <div class="px-5 py-7">
                    <input type="hidden" name="token" value="{{ $token }}" >
                    <x-skeleton::form.email name="email" label="Email" value="{{ Request('email') }}" />
                    <x-skeleton::form.password name="password" label="Password" />
                    <x-skeleton::form.password name="password_confirmation" label="Password Confirm" />
                    <x-skeleton::form.submit name="Reset" />
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
