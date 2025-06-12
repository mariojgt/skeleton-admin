<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0); background-size: 20px 20px;"></div>
    </div>

    <!-- Flash Message -->
    <FlashMessage />

    <!-- Main Container -->
    <div class="relative z-10 w-full max-w-md">
      <!-- Card Container -->
      <div class="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8">
        <!-- Header -->
        <div class="text-center mb-8">
          <div class="w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-2xl">
            <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h1 class="text-3xl font-bold text-white mb-2">{{ props.title }}</h1>
          <p class="text-white/70">Welcome to Skeleton Admin</p>
        </div>

        <!-- Form Slot -->
        <slot name="form" />

        <!-- Links Slot -->
        <div class="mt-8 text-center">
          <slot name="links" />
        </div>
      </div>

      <!-- Footer -->
      <footer class="text-center mt-8 text-white/60 text-sm">
        <p>
          Copyright © {{ currentYear }} - All rights reserved by
          <a
            target="_blank"
            href="https://github.com/mariojgt/skeleton-admin"
            class="text-white/80 hover:text-white transition-colors duration-200 underline"
          >
            Skeleton Admin
          </a>
        </p>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue"
import FlashMessage from "@backend_components/Backend/Global/FlashMessage.vue"

const props = defineProps({
  title: {
    type: String,
    default: "Sign In",
  },
})

// Load the saved theme
const loadLocalStorageTheme = async () => {
  const html = document.querySelector("html")
  html.setAttribute("data-theme", "forest")

  const theme = localStorage.getItem("theme-backend")
  if (theme) {
    html.setAttribute("data-theme", theme)
  } else {
    html.setAttribute("data-theme", "admin")
  }
}

onMounted(() => {
  loadLocalStorageTheme()
})

const currentYear = new Date().getFullYear()
</script>

<style scoped>
/* Gradient animation */
@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.bg-gradient-to-br {
  background-size: 200% 200%;
  animation: gradient 15s ease infinite;
}

/* Glass morphism effect */
.backdrop-blur-lg {
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}
</style>
