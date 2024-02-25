<template></template>

<script setup>
import { watch, onMounted } from "vue";
import { usePage } from "@inertiajs/vue3";

import { useMessage, useNotification } from "naive-ui";
const message = useMessage();

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
      message.success(messageData);
      break;
    case "error":
      message.error(messageData);
      break;
    case "warning":
      message.warning(messageData);
      break;
    case "info":
      message.info(messageData);
      break;
    default:
      message.info(messageData);
      break;
  }
};
</script>
