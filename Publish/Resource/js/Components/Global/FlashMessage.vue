<template></template>

<script setup>
import { watch, onMounted } from "vue";
import { usePage } from "@inertiajs/inertia-vue3";

import { useMessage } from "naive-ui";
const message = useMessage();

watch(
    () => usePage().props.value,
    (v) => {
        // Loop any possible page errors and display the message
        if (usePage().props.value.errors) {
            for (const [key, value] of Object.entries(
                usePage().props.value.errors
            )) {
                message.error(value);
            }
        }
        if (usePage().props.value.flash) {
            // Bases on the flash type, show the toast
            switch (usePage().props.value.flash.type) {
                case "success":
                    message.success(usePage().props.value.flash.message);
                    break;
                case "error":
                    message.error(usePage().props.value.flash.message);
                    break;
                case "warning":
                    message.warning(usePage().props.value.flash.message);
                    break;
                case "info":
                    message.info(usePage().props.value.flash.message);
                    break;
                default:
                    message.info(usePage().props.value.flash.message);
                    break;
            }
        }
    }
);
</script>
