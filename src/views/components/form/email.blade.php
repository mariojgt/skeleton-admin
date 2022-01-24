<div class="form-control">
    <label class="label">
        <span class="label-text">{{ $label ?? 'undefine' }}</span>
    </label>
    <input class="input input-primary input-bordered" type="email" name="{{ $name ?? 'name' }}" id="{{ $id ?? $name }}"
        {{ $required ?? ''=="true" ? "required" : "" }} value="{{ $value ?? old($name) }}"
        placeholder="{{ $placeholder ?? '' }}">
    @error($name)
    <span class="invalid-feedback text-black dark:text-white" role="alert">
        <strong>{{ $message }}</strong>
    </span>
    @enderror
</div>
