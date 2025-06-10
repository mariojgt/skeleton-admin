<!-- DesktopNavigation.vue -->
<template>
  <nav class="flex flex-1 flex-col space-y-2">
    <div v-for="(item, index) in menuItems" :key="index">
      <!-- Single Menu Item -->
      <div v-if="!item.children || item.children.length === 0">
        <Link
          :href="buildLinkClass(item.route)"
          class="group flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200"
          :class="isActive(item.route)
            ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
            : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100'"
        >
          <div
            class="w-6 h-6 mr-3 flex items-center justify-center"
            v-html="item.icon"
          ></div>
          <span class="flex-1">{{ item.menu_label }}</span>
          <div
            v-if="item.badge"
            class="ml-2 px-2 py-0.5 text-xs font-semibold rounded-full"
            :class="isActive(item.route)
              ? 'bg-white/20 text-white'
              : 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'"
          >
            {{ item.badge }}
          </div>
        </Link>
      </div>

      <!-- Collapsible Menu Item -->
      <div v-else>
        <button
          @click="toggleSubmenu(index)"
          class="w-full group flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200"
          :class="isSubmenuOpen(index)
            ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100'
            : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100'"
        >
          <div
            class="w-6 h-6 mr-3 flex items-center justify-center"
            v-html="item.icon"
          ></div>
          <span class="flex-1 text-left">{{ item.menu_label }}</span>
          <svg
            class="w-4 h-4 transition-transform duration-200"
            :class="{ 'rotate-90': isSubmenuOpen(index) }"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>

        <!-- Submenu -->
        <div
          v-if="isSubmenuOpen(index)"
          class="mt-1 ml-6 space-y-1 border-l-2 border-slate-200 dark:border-slate-700 pl-4"
        >
          <Link
            v-for="(child, childIndex) in item.children"
            :key="childIndex"
            :href="buildLinkClass(child.route)"
            class="group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200"
            :class="isActive(child.route)
              ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100'"
          >
            <div
              class="w-5 h-5 mr-3 flex items-center justify-center"
              v-html="child.icon"
            ></div>
            <span class="flex-1">{{ child.menu_label }}</span>
            <div
              v-if="child.badge"
              class="ml-2 px-2 py-0.5 text-xs font-semibold rounded-full"
              :class="isActive(child.route)
                ? 'bg-white/20 text-white'
                : 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'"
            >
              {{ child.badge }}
            </div>
          </Link>
        </div>
      </div>
    </div>

    <!-- Quick Actions Section -->
    <div class="pt-6 mt-6 border-t border-slate-200 dark:border-slate-700">
      <h3 class="px-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
        Quick Actions
      </h3>
      <div class="space-y-2">
        <button class="w-full group flex items-center px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100 rounded-lg transition-all duration-200">
          <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
          </svg>
          Create New
        </button>
        <button class="w-full group flex items-center px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100 rounded-lg transition-all duration-200">
          <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
          </svg>
          Analytics
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { Link, usePage } from '@inertiajs/vue3'

// State
const openSubmenus = ref(new Set())

// Get menu items from page props
const menuItems = usePage().props.navigation?.data || []

// Methods
const toggleSubmenu = (index) => {
  if (openSubmenus.value.has(index)) {
    openSubmenus.value.delete(index)
  } else {
    openSubmenus.value.add(index)
  }
}

const isSubmenuOpen = (index) => {
  return openSubmenus.value.has(index)
}

const isActive = (route) => {
  return window.location.pathname === route
}

const buildLinkClass = (routeLink) => {
  return route(routeLink);
}
</script>
