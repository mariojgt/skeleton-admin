<!-- MobileNavigation.vue -->
<template>
  <div class="flex flex-col h-full">
    <!-- Navigation Menu -->
    <nav class="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
      <div v-for="(item, index) in menuItems" :key="index">
        <!-- Single Menu Item -->
        <div v-if="!item.children || item.children.length === 0">
          <Link
            :href="buildLinkClass(item.route)"
            @click="$emit('close')"
            class="group flex items-center px-4 py-3 text-base font-medium rounded-xl transition-all duration-200"
            :class="isActive(item.route)
              ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
              : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'"
          >
            <div
              class="w-6 h-6 mr-4 flex items-center justify-center"
              v-html="item.icon"
            ></div>
            <span class="flex-1">{{ item.menu_label }}</span>
            <div
              v-if="item.badge"
              class="ml-2 px-2 py-1 text-xs font-semibold rounded-full"
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
            class="w-full group flex items-center px-4 py-3 text-base font-medium rounded-xl transition-all duration-200"
            :class="isSubmenuOpen(index)
              ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100'
              : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'"
          >
            <div
              class="w-6 h-6 mr-4 flex items-center justify-center"
              v-html="item.icon"
            ></div>
            <span class="flex-1 text-left">{{ item.menu_label }}</span>
            <svg
              class="w-5 h-5 transition-transform duration-200"
              :class="{ 'rotate-90': isSubmenuOpen(index) }"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>

          <!-- Mobile Submenu -->
          <div
            v-if="isSubmenuOpen(index)"
            class="mt-2 ml-8 space-y-1"
          >
            <Link
              v-for="(child, childIndex) in item.children"
              :key="childIndex"
              :href="buildLinkClass(child.route)"
              @click="$emit('close')"
              class="group flex items-center px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200"
              :class="isActive(child.route)
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'"
            >
              <div
                class="w-5 h-5 mr-3 flex items-center justify-center"
                v-html="child.icon"
              ></div>
              <span class="flex-1">{{ child.menu_label }}</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>

    <!-- Mobile Footer Actions -->
    <div class="border-t border-slate-200 dark:border-slate-700 p-4">
      <div class="space-y-2">
        <button class="w-full flex items-center px-4 py-3 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all duration-200">
          <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
          </svg>
          Settings
        </button>
        <button class="w-full flex items-center px-4 py-3 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all duration-200">
          <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          Help & Support
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Link, usePage } from '@inertiajs/vue3'

// Emits
defineEmits(['close'])

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
