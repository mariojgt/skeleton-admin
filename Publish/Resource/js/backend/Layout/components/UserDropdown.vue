<!-- UserDropdown.vue -->
<template>
  <div class="relative">
    <!-- User Avatar Button -->
    <button
      @click="toggleModal"
      class="btn btn-ghost gap-3 p-1.5"
      :class="{ 'btn-active': isOpen }"
    >
      <div class="avatar online">
        <div class="w-8 rounded-lg ring ring-base-300 ring-offset-base-100 ring-offset-2">
          <img
            :src="userAvatar"
            :alt="userName"
            class="object-cover"
          />
        </div>
      </div>
      <div class="hidden sm:block text-left">
        <div class="text-sm font-semibold">{{ userName }}</div>
        <div class="text-xs text-base-content/60">{{ userRole }}</div>
      </div>
      <svg class="w-4 h-4 text-base-content/60 hidden sm:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
      </svg>
    </button>

    <!-- Custom Modal Overlay -->
    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 flex items-start justify-end pt-20 pr-4"
      @click="closeModal"
    >
      <!-- Backdrop -->
      <div class="fixed inset-0 bg-black/20 backdrop-blur-sm"></div>

      <!-- Modal Content -->
      <div
        class="relative w-64 card card-compact shadow-xl bg-base-100 border border-base-300"
        @click.stop
      >
        <!-- User Info Header -->
        <div class="card-header p-4 border-b border-base-300 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3 flex-1 min-w-0">
              <div class="avatar online">
                <div class="w-12 rounded-xl">
                  <img
                    :src="userAvatar"
                    :alt="userName"
                    class="object-cover"
                  />
                </div>
              </div>
              <div class="flex-1 min-w-0">
                <div class="text-sm font-semibold truncate">{{ userName }}</div>
                <div class="text-xs text-base-content/60 truncate">{{ userEmail }}</div>
                <div class="badge badge-primary badge-sm mt-1">
                  {{ userRole }}
                </div>
              </div>
            </div>
            <button
              @click="closeModal"
              class="btn btn-ghost btn-circle btn-xs ml-2"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Menu Items -->
        <div class="card-body p-0">
          <ul class="menu p-2">
            <li v-for="(item, index) in userMenuItems" :key="index">
              <a
                :href="getRouteUrl(item.route)"
                @click="closeModal"
                class="flex items-center gap-3 py-3 hover:bg-base-200 rounded-lg transition-colors"
              >
                <div class="w-5 h-5 text-base-content/60" v-html="item.icon"></div>
                <span class="flex-1">{{ item.menu_label }}</span>
                <svg class="w-4 h-4 text-base-content/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </a>
            </li>
          </ul>
        </div>

        <!-- Footer Actions -->
        <div class="card-actions p-2 border-t border-base-300">
          <button
            @click="handleLogout"
            class="btn btn-error btn-outline btn-sm w-full gap-3 normal-case"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
            </svg>
            <span>Sign out</span>
          </button>
        </div>
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
const toggleModal = () => {
  isOpen.value = !isOpen.value
}

const closeModal = () => {
  isOpen.value = false
}

const getRouteUrl = (routeName) => {
  if (!routeName) return '#'

  try {
    if (routeName.startsWith('http') || routeName.startsWith('/')) {
      return routeName
    }
    return route(routeName)
  } catch (error) {
    console.warn(`Route '${routeName}' not found`, error)
    return '#'
  }
}

const handleLogout = () => {
  try {
    window.location.href = route('logout')
  } catch (error) {
    window.location.href = '/logout'
  }
}

// Handle escape key
const handleEscape = (e) => {
  if (e.key === 'Escape' && isOpen.value) {
    closeModal()
  }
}

// Lifecycle
onMounted(() => {
  document.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape)
})
</script>
