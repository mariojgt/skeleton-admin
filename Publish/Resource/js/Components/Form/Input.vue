<template>
    <div class="form-control">
        <label class="label">
            <span class="label-text">{{ props.label }}</span>
        </label>
        <input
            class="input input-primary input-bordered"
            :type="props.type"
            name="{{ props.name }}"
            id="{{ props.id }}"
            :placeholder="props.placeholder"
            @input="update"
        />
    </div>

    <span class="invalid-feedback text-primary" role="alert">
        <strong>{{ errorMessage }}</strong>
    </span>

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
    type: {
        type: String,
        default: "text",
    },
});

const emit = defineEmits(['update:modelValue'])

const update = (event) => {
    emit("update:modelValue", event.target.value);
};
</script>

<style></style>
