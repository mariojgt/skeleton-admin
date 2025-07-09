<template></template>

<script setup>
import { watch, onMounted } from "vue";
import { usePage } from "@inertiajs/vue3";
import { startWindToast } from "@mariojgt/wind-notify/packages/index.js";

watch(
  () => usePage().props.errors,
  (v) => {
    // Loop any possible page errors and display the message
    if (usePage().props.errors) {
      for (const [key, value] of Object.entries(usePage().props.errors)) {
        // Display a message using the helper
        handleMessage("error", value);
      }
    }
  }
);

// Check if there is a flash message and display it
onMounted(() => {
  if (usePage().props.flash) {
    handleMessage(
      usePage().props.flash.type,
      usePage().props.flash.message
    );
  }
});

watch(
  () => usePage().props.flash,
  (v) => {
    // If there is any message we can display it
    if (usePage().props.flash) {
      handleMessage(
        usePage().props.flash.type,
        usePage().props.flash.message
      );
    }
  }
);

// This function will display a mesage based o nthe message type
const handleMessage = async (type, messageData) => {
  switch (type) {
    case "success":
        startWindToast('success', messageData, 'success');
      break;
    case "error":
        startWindToast('error', messageData, 'error');
      break;
    case "warning":
        startWindToast('warning', messageData, 'warning');
      break;
    case "info":
        startWindToast('info', messageData, 'info');
      break;
    default:
        startWindToast('info', messageData, 'info');
      break;
  }
};
</script>
