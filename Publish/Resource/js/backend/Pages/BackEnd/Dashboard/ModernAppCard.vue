<!-- Modern App Card Component -->
<template>
  <div class="group cursor-pointer">
    <div class="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl hover:scale-105 transition-all duration-300 hover:bg-white dark:hover:bg-slate-800">
      <!-- App Icon -->
      <div class="relative mb-4">
        <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
          <div class="w-8 h-8 text-white" v-html="menuItem.icon || defaultIcon"></div>
        </div>
        <div class="absolute -top-1 -right-1 w-6 h-6 bg-green-400 border-2 border-white dark:border-slate-800 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div class="w-full h-full bg-green-400 rounded-full animate-ping"></div>
        </div>
      </div>

      <!-- App Info -->
      <div class="space-y-2">
        <h3 class="font-semibold text-slate-900 dark:text-slate-100 text-sm leading-tight">
          {{ menuItem.menu_label }}
        </h3>
        <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
          {{ menuItem.description || 'Access and manage this application' }}
        </p>
      </div>

      <!-- Category Badge -->
      <div class="absolute top-3 right-3">
        <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-300">
          {{ menuItem.category || 'App' }}
        </span>
      </div>

      <!-- Hover Effect Overlay -->
      <div class="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
    menuItem: MenuItem
}>()

const defaultIcon = `
<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
</svg>
`
</script>
