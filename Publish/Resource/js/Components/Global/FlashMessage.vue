<template></template>

<script setup>
import { watch, onMounted } from "vue";
import { usePage } from "@inertiajs/inertia-vue3";
import Toastify from "toastify-js";

watch(
    () => usePage().props.value,
    (v) => {
        if (usePage().props.value.flash) {
            Toastify({
                text: usePage().props.value.flash.message,
                className: usePage().props.value.flash.type,
                duration: 31000,
                close: true,
            }).showToast();
        }
    }
);

</script>

<style>

.info {
    background: #BE123C;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    background-clip: padding-box;
    --tw-bg-opacity: 1;
    background-color: #0284C7;
    --tw-border-opacity: 1;
    border-color: #FACC15;
    border-bottom-width: 4px;
    justify-content: space-between;
    align-items: center;
    display: flex;
}

.success {
    background: #BE123C;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    background-clip: padding-box;
    --tw-bg-opacity: 1;
    background-color: #22C55E;
    --tw-border-opacity: 1;
    border-color: #FACC15;
    border-bottom-width: 4px;
    justify-content: space-between;
    align-items: center;
    display: flex;
}

.error {
    background: #BE123C;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    background-clip: padding-box;
    --tw-bg-opacity: 1;
    background-color: #DC2626;
    --tw-border-opacity: 1;
    border-color: #22C55E;
    border-bottom-width: 4px;
    justify-content: space-between;
    align-items: center;
    display: flex;
}

.warning {
    background: #BE123C;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    background-clip: padding-box;
    --tw-bg-opacity: 1;
    background-color: #DC2626;
    --tw-border-opacity: 1;
    border-color: #22C55E;
    border-bottom-width: 4px;
    justify-content: space-between;
    align-items: center;
    display: flex;
}

.toast-close {
    color: #ffffff;
}
</style>
