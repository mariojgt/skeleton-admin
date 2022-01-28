<template>
    <div class="form-control">
        <label class="label">
            <span class="label-text">{{ props.label }}</span>
        </label>
        <div class="relative">
            <input
                class="w-full pr-16 input input-primary input-bordered"
                :type="showPassword ? 'text' : 'password'"
                name="{{ props.name }}"
                id="{{ props.id }}"
                :placeholder="props.placeholder"
                :value="modelValue"
                @input="update"
            />
            <a class="absolute top-0 right-0 rounded-l-none btn btn-primary" @click="showPasswordlToogle" >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
            </a>

            <span class="invalid-feedback text-primary" role="alert">
                <strong>{{ errorMessage }}</strong>
            </span>
        </div>
    </div>
</template>

<script setup>
import { watch, onMounted, defineEmits } from "vue";

import { usePage } from "@inertiajs/inertia-vue3";

let errorMessage = $ref(null);

watch(
    () => usePage().props.value.errors,
    (v) => {
       if (usePage().props.value.errors[props.name]) {
            errorMessage = usePage().props.value.errors[props.name];
        }
    }
);

const props = defineProps({
    label: {
        type: String,
        default: "",
    },
    name: {
        type: String,
        default: "",
    },
    id: {
        type: String,
        default: "",
    },
    placeholder: {
        type: String,
        default: "",
    },
    modelValue: {
        type: String,
        default: "",
    }
});

const emit = defineEmits(['update:modelValue'])

const update = (event) => {
    emit("update:modelValue", event.target.value);
};

let showPassword = $ref(false);

const showPasswordlToogle = () => {
    if (showPassword == false) {
        showPassword = true;
    } else {
        showPassword = false;
    }
};

</script>

<style></style>
