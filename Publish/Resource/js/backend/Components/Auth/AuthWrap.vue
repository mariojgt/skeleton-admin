<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div class="text-center lg:text-left">
        <h1 class="text-5xl font-bold">{{ props.title }}</h1>
        <p class="py-6">
          Welcome to the backend login, in here you have a complete different
          application controllers and routes, Thank you for download
          skeleton-admin please don't forget to share this package, now go and
          create your amazing application.
        </p>
      </div>
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div class="card-body text-center">
          <div class="avatar justify-center">
            <div class="w-32 rounded">
              <adminLogo />
            </div>
          </div>
          <slot name="form" />
          <slot name="links" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { watch, onMounted } from "vue";
import { usePage } from "@inertiajs/inertia-vue3";

import adminLogo from "../Backend/Global/AdminLogo.vue";

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
});
</script>

<style>
</style>
