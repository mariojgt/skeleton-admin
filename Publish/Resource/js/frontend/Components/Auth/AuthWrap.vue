<template>
  <div class="flex items-center min-h-screen p-6 bg-base-200">
    <div
      class="
        flex-1
        h-full
        max-w-4xl
        mx-auto
        overflow-hidden
        bg-base-300
        rounded-lg
        shadow-xl
      "
    >
      <div class="flex flex-col overflow-y-auto md:flex-row">
        <div class="h-32 md:h-auto md:w-1/2">
          <!-- Call the logo here -->
          <userLogo/>
        </div>
        <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
          <div class="w-full">
            <h1 class="my-4 text-4xl font-bold card-title">
              {{ props.title }}
            </h1>
            <!-- Where the data will display -->
            <slot name="form" />
            <div
              class="flex items-right justify-right p-6 sm:p-12 md:w-1/2 gap-3"
            >
              <slot name="links" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { watch, onMounted } from "vue";
import { usePage } from "@inertiajs/inertia-vue3";

import userLogo from "../FrontEnd/Global/UserLogo";

const props = defineProps({
  title: {
    type: String,
    default: "",
  }
});
</script>

<style>
</style>
