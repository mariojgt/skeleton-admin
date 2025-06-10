<!-- ModernBreadcrumb.vue -->
<template>
  <div class="flex items-center space-x-2 text-sm" v-if="breadcrumbs && breadcrumbs.length > 0">
    <!-- Home Link -->
    <a
      :href="getHomeUrl()"
      class="flex items-center text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors duration-200"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
      </svg>
    </a>

    <!-- Breadcrumb Items -->
    <template v-for="(item, index) in breadcrumbs" :key="index">
      <!-- Separator -->
      <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
      </svg>

      <!-- Breadcrumb Link/Text -->
      <div class="flex items-center">
        <a
          v-if="item.url && index < breadcrumbs.length - 1"
          :href="item.url"
          class="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors duration-200 font-medium"
        >
          {{ item.label }}
        </a>
        <span
          v-else
          class="text-slate-900 dark:text-slate-100 font-semibold"
        >
          {{ item.label }}
        </span>
      </div>
    </template>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { usePage } from '@inertiajs/vue3'

// Get breadcrumbs from page props
const breadcrumbs = computed(() => usePage().props.breadcrumb || [])

// Methods
const getHomeUrl = () => {
  try {
    return route('admin.dashboard') || route('dashboard') || '/'
  } catch (error) {
    return '/'
  }
}
</script>
