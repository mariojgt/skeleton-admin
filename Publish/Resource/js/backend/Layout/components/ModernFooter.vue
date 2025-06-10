<!-- ModernFooter.vue -->
<template>
  <footer class="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="py-8">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <!-- Logo and Description -->
          <div class="flex items-center space-x-4">
            <div class="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.84L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.84l-7-3z"/>
              </svg>
            </div>
            <div>
              <div class="text-sm font-semibold text-slate-900 dark:text-slate-100">
                {{ appName }}
              </div>
              <div class="text-xs text-slate-500 dark:text-slate-400">
                Admin Dashboard v2.0
              </div>
            </div>
          </div>

          <!-- Links -->
          <div class="flex items-center space-x-6 text-sm">
            <a href="#" class="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors">
              Documentation
            </a>
            <a href="#" class="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors">
              Support
            </a>
            <a href="#" class="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors">
              Privacy
            </a>
          </div>

          <!-- Copyright -->
          <div class="text-xs text-slate-500 dark:text-slate-400">
            © {{ currentYear }} {{ appName }}. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { usePage } from '@inertiajs/vue3'

// Get app name from page props
const appName = computed(() => usePage().props.app || 'Skeleton Admin')
const currentYear = new Date().getFullYear()
</script>
