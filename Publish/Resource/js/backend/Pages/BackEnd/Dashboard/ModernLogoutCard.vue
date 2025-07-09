<template>
  <div class="card card-compact bg-gradient-to-r from-error to-warning shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group max-w-sm">
    <div class="card-body text-white">
      <div class="flex items-center space-x-4">
        <div class="avatar">
          <div class="w-12 rounded-xl bg-white/20">
            <div class="w-full h-full flex items-center justify-center">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </div>
          </div>
        </div>
        <div>
          <h3 class="card-title text-lg text-white">Sign Out</h3>
          <p class="text-white/80 text-sm">End your session securely</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// No props needed for logout card
</script>
