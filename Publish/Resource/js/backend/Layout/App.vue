<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
    <!-- Mobile Menu Overlay -->
    <div
      v-if="isMobileMenuOpen"
      class="fixed inset-0 z-50 lg:hidden"
      @click="closeMobileMenu"
    >
      <div class="fixed inset-0 bg-black/20 backdrop-blur-sm"></div>
      <nav class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm bg-white dark:bg-slate-900 shadow-xl">
        <div class="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-700">
          <div class="flex items-center space-x-3">
            <div class="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.84L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.84l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
              </svg>
            </div>
            <span class="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Skeleton Admin
            </span>
          </div>
          <button @click="closeMobileMenu" class="p-2 text-slate-400 hover:text-slate-600">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
        <MobileNavigation />
      </nav>
    </div>

    <!-- Desktop Sidebar -->
    <aside class="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-72 lg:flex-col">
      <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-white dark:bg-slate-900 px-6 pb-4 shadow-xl border-r border-slate-200 dark:border-slate-700">
        <div class="flex h-20 shrink-0 items-center">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.84L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.84l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
              </svg>
            </div>
            <div>
              <div class="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Skeleton
              </div>
              <div class="text-sm text-slate-500 dark:text-slate-400 font-medium">Admin Panel</div>
            </div>
          </div>
        </div>
        <DesktopNavigation />
      </div>
    </aside>

    <!-- Main Content -->
    <div class="lg:pl-72">
      <!-- Top Header -->
      <div class="sticky top-0 z-40 flex h-20 shrink-0 items-center gap-x-4 border-b border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
        <!-- Mobile menu button -->
        <button
          @click="openMobileMenu"
          class="lg:hidden p-2.5 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
        >
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>

        <!-- Breadcrumbs -->
        <div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6" v-if="!homePage">
          <ModernBreadcrumb />
        </div>

        <!-- Right side actions -->
        <div class="flex items-center gap-x-4 lg:gap-x-6">
          <ModernSearch />
          <ThemeToggle />
          <ModernNotifications />
          <UserDropdown />
        </div>
      </div>

      <!-- Page Content -->
      <main class="py-8">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FlashMessage />
          <slot />
        </div>
      </main>

      <!-- Footer -->
      <ModernFooter />
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { usePage } from '@inertiajs/vue3'
import FlashMessage from '@backend_components/Backend/Global/FlashMessage.vue'
import ModernBreadcrumb from './components/ModernBreadcrumb.vue'
import ModernSearch from './components/ModernSearch.vue'
import ThemeToggle from './components/ThemeToggle.vue'
import ModernNotifications from './components/ModernNotifications.vue'
import UserDropdown from './components/UserDropdown.vue'
import ModernFooter from './components/ModernFooter.vue'
import DesktopNavigation from './components/DesktopNavigation.vue'
import MobileNavigation from './components/MobileNavigation.vue'

// Props
const props = defineProps({
  homePage: {
    type: Boolean,
    default: false
  }
})

// State
const isMobileMenuOpen = ref(false)

// Methods
const openMobileMenu = () => {
  isMobileMenuOpen.value = true
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// Update page title
const updatePageTitle = (newTitle) => {
  document.title = newTitle || 'Skeleton Admin'
}

// Watch for title changes
watch(() => usePage().props.title, updatePageTitle)

// Set initial title
onMounted(() => {
  setTimeout(() => {
    updatePageTitle(usePage().props.title)
  }, 500)
})
</script>
