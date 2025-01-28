<template>
    <div
      tabindex="0"
      class="m-1 btn btn-square btn-primary"
      @click="openNotification"
    >
      <Bell
        class="inline-block w-6 h-6 stroke-current text-white"
      />
    </div>
  </template>

  <script setup>
  import { Bell } from 'lucide-vue-next';

  const emit = defineEmits(["open-notification"]);

  const openNotification = async () => {
    emit("open-notification");
  };
  </script>
