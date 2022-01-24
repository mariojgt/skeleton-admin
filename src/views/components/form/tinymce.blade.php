<label class="font-semibold text-sm text-gray-600 dark:text-white pb-1 block">{{ $label ?? 'undefine' }}</label>

<textarea cols="30" rows="10" name="{{ $name ?? 'name' }}" id="{{ $id ?? $name }}"
    placeholder="{{ $placeholder ?? '' }}"
    class="tiny border rounded-lg focus:border-black dark:focus:border-white dark:bg-gray-900 dark:text-white px-3 py-3 mt-1 mb-5 text-sm w-full font-extrabold">{{ $value ?? '' }}</textarea>
@error($name)
<span class="invalid-feedback text-black dark:text-white" role="alert">
    <strong>{{ $message }}</strong>
</span>
@enderror
