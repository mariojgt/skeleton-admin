<div class="form-control">
    <label class="label">
        <span class="label-text">{{ $label ?? 'undefine' }}</span>
    </label>
    <textarea class="textarea h-24 textarea-bordered textarea-primary" name="{{ $name ?? 'name' }}"
        id="{{ $id ?? $name }}" placeholder="{{ $placeholder ?? '' }}">{{ $value ?? '' }}</textarea>
    @error($name)
    <span class="invalid-feedback text-black dark:text-white" role="alert">
        <strong>{{ $message }}</strong>
    </span>
    @enderror
</div>
