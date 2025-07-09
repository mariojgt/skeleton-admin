<!-- ModernAppCard.vue -->
<template>
  <div class="card card-compact bg-base-100/80 backdrop-blur-sm shadow-lg border border-base-300/50 hover:shadow-xl transition-all duration-300 cursor-pointer group">
    <!-- Card Body -->
    <div class="card-body relative">
      <!-- App Icon -->
      <div class="relative mb-4">
        <div class="avatar">
          <div class="w-16 rounded-2xl bg-gradient-to-br from-primary to-secondary shadow-lg group-hover:shadow-xl transition-all duration-300">
            <div class="w-full h-full flex items-center justify-center">
              <div class="w-8 h-8 text-white" v-html="menuItem.icon || defaultIcon"></div>
            </div>
          </div>
        </div>
        <!-- Status Indicator -->
        <div class="absolute -top-1 -right-1">
          <div class="indicator">
            <span class="indicator-item badge badge-success badge-xs opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div class="w-full h-full bg-success rounded-full animate-ping"></div>
            </span>
          </div>
        </div>
      </div>

      <!-- App Info -->
      <div class="space-y-2">
        <h3 class="card-title text-sm">
          {{ menuItem.menu_label }}
        </h3>
        <p class="text-xs text-base-content/70">
          {{ menuItem.description || 'Access and manage this application' }}
        </p>
      </div>

      <!-- Category Badge -->
      <div class="card-actions justify-end absolute top-3 right-3">
        <div class="badge badge-primary badge-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
          {{ menuItem.category || 'App' }}
        </div>
      </div>

      <!-- Hover Effect Overlay -->
      <div class="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface MenuItem {
  id: number
  menu_label: string
  icon: string
  route: string
  category?: string
  description?: string
}

defineProps<{
  menuItem: MenuItem
}>()

const defaultIcon = `
<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
</svg>
`
</script>
