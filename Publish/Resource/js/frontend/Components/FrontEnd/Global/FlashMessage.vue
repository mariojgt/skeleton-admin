<template></template>

<script setup>
import { watch, onMounted } from "vue";
import { usePage } from "@inertiajs/inertia-vue3";

import { useMessage, useNotification } from "naive-ui";
const message = useMessage();

watch(
  () => usePage().props.value.errors,
  (v) => {
    // Loop any possible page errors and display the message
    if (usePage().props.value.errors) {
      for (const [key, value] of Object.entries(usePage().props.value.errors)) {
        // Display a message using the helper
        handleMessage("error", value);
      }
    }
  }
);

// Check if there is a flash message and display it
onMounted(() => {
  if (usePage().props.value.flash) {
    handleMessage(
      usePage().props.value.flash.type,
      usePage().props.value.flash.message
    );
  }
});

watch(
  () => usePage().props.value.flash,
  (v) => {
    // If there is any message we can display it
    if (usePage().props.value.flash) {
      handleMessage(
        usePage().props.value.flash.type,
        usePage().props.value.flash.message
      );
    }
  }
);

// This fuction will display a mesage based o nthe message type
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
