<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div class="card-body text-center">
          <div class="avatar justify-center">
            <div class="w-32 rounded">
              <userLogo />
            </div>
          </div>
          <slot name="form" />
          <slot name="links" />
        </div>
      </div>
      <div class="text-center lg:text-left">
        <h1 class="text-5xl font-bold">
{{ props.title }}
</h1>
        <p class="py-6">
          Welcome to the frontend login, in here you have a very basic
          dashboard, with user profile management, Thank you for download
          skeleton-admin please don't forget to share this package, now go and
          create your amazing application.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import userLogo from "../FrontEnd/Global/UserLogo.vue";

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
});
</script>

<style>
</style>
