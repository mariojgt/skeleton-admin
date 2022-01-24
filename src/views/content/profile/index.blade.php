@php
    use Mariojgt\Castle\Helpers\AutenticatorHandle;
    $autenticator = new AutenticatorHandle();
@endphp
<x-skeleton::layout.main>
    <div class="grid grid-cols-1 gap-6 lg:p-10 xl:grid-cols-12 lg:bg-base-200 rounded-box">

        {{-- Check if the user has setup 2fa --}}
        @if (Auth()->user()->twoStepsEnable() == false)
            @php
                // Generate the qr-code
                $generatedCode = $autenticator->generateCode(Auth()->user()->email);
            @endphp
            <div class="card col-span-1 row-span-3 shadow-lg xl:col-span-2 bg-base-100">
                <div class="card-body">
                    <h2 class="my-4 text-4xl font-bold card-title">Enable 2 Steps Verification</h2>
                    <div class="card row-span-3 shadow-lg compact bg-base-100 p-3">
                        <figure>{!! $generatedCode['qr_code'] !!}</figure>
                        <div class="flex-row items-center space-x-4 card-body">
                            <div>
                                <h2 class="card-title">You Autenticaton QRCode</h2>
                                <p class="text-base-content text-opacity-40">If you can't use QRCode you can use the screct <strong>{{ $generatedCode['secret'] }}</strong>
                                </p>
                                <strong>This Code will show only one time.</strong>
                            </div>
                        </div>
                    </div>
                    {{-- The form where you type the text to be autenticated --}}
                    <x-skeleton::form.form action="{{ route('skeleton.2fa.enable') }}">
                        <div class="px-5 py-7">
                            <x-skeleton::form.text name="code" label="Type the code here, if successfully 2 steps will be enabled" />
                            <x-skeleton::form.submit name="Check Code" />
                        </div>
                    </x-skeleton::form.form>
                </div>
            </div>
        @endif
    </div>
</x-skeleton::layout.main>
