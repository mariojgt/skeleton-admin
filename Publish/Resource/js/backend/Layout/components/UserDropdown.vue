<!-- UserDropdown.vue -->
<template>
  <div class="relative">
    <!-- User Avatar Button -->
    <button
      @click="toggleDropdown"
      class="flex items-center space-x-3 p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200"
      :class="{ 'bg-slate-100 dark:bg-slate-800': isOpen }"
    >
      <div class="relative">
        <img
          :src="userAvatar"
          :alt="userName"
          class="w-8 h-8 rounded-lg object-cover ring-2 ring-slate-200 dark:ring-slate-700"
        />
        <div class="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 border-2 border-white dark:border-slate-800 rounded-full"></div>
      </div>
      <div class="hidden sm:block text-left">
        <div class="text-sm font-semibold text-slate-900 dark:text-slate-100">{{ userName }}</div>
        <div class="text-xs text-slate-500 dark:text-slate-400">{{ userRole }}</div>
      </div>
      <svg class="w-4 h-4 text-slate-400 hidden sm:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
      </svg>
    </button>

    <!-- Dropdown Menu -->
    <div
      v-if="isOpen"
      class="absolute right-0 top-full mt-2 w-64 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 z-50 overflow-hidden"
    >
      <!-- User Info Header -->
      <div class="p-4 border-b border-slate-200 dark:border-slate-700 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700">
        <div class="flex items-center space-x-3">
          <div class="relative">
            <img
              :src="userAvatar"
              :alt="userName"
              class="w-12 h-12 rounded-xl object-cover"
            />
            <div class="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white dark:border-slate-800 rounded-full"></div>
          </div>
          <div class="flex-1 min-w-0">
            <div class="text-sm font-semibold text-slate-900 dark:text-slate-100 truncate">{{ userName }}</div>
            <div class="text-xs text-slate-500 dark:text-slate-400 truncate">{{ userEmail }}</div>
            <div class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 mt-1">
              {{ userRole }}
            </div>
          </div>
        </div>
      </div>

      <!-- Menu Items -->
      <div class="py-2">
        <a
          v-for="(item, index) in userMenuItems"
          :key="index"
          :href="getRouteUrl(item.route)"
          @click="closeDropdown"
          class="flex items-center px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-200"
        >
          <div class="w-5 h-5 mr-3 text-slate-500 dark:text-slate-400" v-html="item.icon"></div>
          <span class="flex-1">{{ item.menu_label }}</span>
          <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </a>
      </div>

      <!-- Footer Actions -->
      <div class="border-t border-slate-200 dark:border-slate-700 p-2">
        <button
          @click="handleLogout"
          class="w-full flex items-center px-4 py-3 text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors duration-200"
        >
          <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
          </svg>
          <span>Sign out</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { usePage } from '@inertiajs/vue3'

// State
const isOpen = ref(false)

// User data from page props
const userAvatar = computed(() => usePage().props.avatar || '/default-avatar.png')
const userName = computed(() => usePage().props.auth?.user?.name || 'User')
const userEmail = computed(() => usePage().props.auth?.user?.email || 'user@example.com')
const userRole = computed(() => usePage().props.auth?.user?.role || 'Administrator')
const userMenuItems = computed(() => usePage().props.navbar?.data || [])

// Methods
const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const closeDropdown = () => {
  isOpen.value = false
}

const getRouteUrl = (routeName) => {
  if (!routeName) return '#'

  try {
    // If it's already a URL, return it
    if (routeName.startsWith('http') || routeName.startsWith('/')) {
      return routeName
    }

    // Use Ziggy route helper
    return route(routeName)
  } catch (error) {
    console.warn(`Route '${routeName}' not found`, error)
    return '#'
  }
}

const handleLogout = () => {
  try {
    // Handle logout logic here using Ziggy routes
    window.location.href = route('logout')
  } catch (error) {
    // Fallback to standard logout route
    window.location.href = '/logout'
  }
}

// Click outside handler
const handleClickOutside = (e) => {
  if (!e.target.closest('.relative')) {
    isOpen.value = false
  }
}

// Lifecycle
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>
