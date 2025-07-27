<!-- ModernBreadcrumb.vue -->
<template>
  <div v-if="breadcrumbs && breadcrumbs.length > 0" class="breadcrumbs text-sm">
    <ul>
      <!-- Home Link -->
      <li>
        <a
          :href="getHomeUrl()"
          class="link link-hover text-base-content/60 hover:text-base-content flex items-center gap-2"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
          </svg>
          <span class="hidden sm:inline">Home</span>
        </a>
      </li>

      <!-- Breadcrumb Items -->
      <li v-for="(item, index) in breadcrumbs" :key="index">
        <a
          v-if="item.url && index < breadcrumbs.length - 1"
          :href="item.url"
          class="link link-hover text-base-content/60 hover:text-base-content font-medium"
        >
          {{ item.label }}
        </a>
        <span
          v-else
          class="text-base-content font-semibold"
        >
          {{ item.label }}
        </span>
      </li>
    </ul>
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
