<template>
  <div class="relative notification-dropdown" @click.stop>
    <!-- Notification Button -->
    <button
      @click="toggleDropdown"
      class="relative p-2 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5-5V9.5a6.5 6.5 0 10-13 0V12L7 17h5m3 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>

      <!-- Badge -->
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="transform scale-0 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-0 opacity-0"
      >
        <span
          v-if="unreadCount > 0"
          class="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full"
        >
          {{ unreadCount > 9 ? '9+' : unreadCount }}
        </span>
      </Transition>
    </button>

    <!-- Dropdown -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div
        v-if="isOpen"
        class="absolute right-0 mt-2 w-96 bg-slate-800/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl z-[9999]"
        @click.stop
      >
        <!-- Header -->
        <div class="flex items-center justify-between p-4 border-b border-white/10">
          <h3 class="text-lg font-semibold text-white">Notifications</h3>
          <button
            v-if="unreadCount > 0"
            @click="markAllAsRead"
            class="text-sm text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
          >
            Mark all read
          </button>
        </div>

        <!-- Content -->
        <div class="max-h-80 overflow-y-auto">
          <!-- Loading State -->
          <div v-if="loading" class="flex items-center justify-center py-12">
            <svg class="animate-spin h-6 w-6 text-emerald-500" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>

          <!-- Empty State -->
          <div v-else-if="notifications.length === 0" class="flex flex-col items-center justify-center py-12 px-4">
            <div class="w-16 h-16 bg-slate-700/50 rounded-full flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5-5V9.5a6.5 6.5 0 10-13 0V12L7 17h5m3 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </div>
            <p class="text-slate-400 text-center">No notifications yet</p>
            <p class="text-sm text-slate-500 text-center mt-1">We'll notify you when something happens</p>
          </div>

          <!-- Notification List -->
          <div v-else class="divide-y divide-white/5">
            <div
              v-for="notification in notifications"
              :key="notification.id"
              @click="markAsRead(notification.id)"
              :class="[
                'p-4 hover:bg-white/5 cursor-pointer transition-colors',
                { 'bg-emerald-500/5 border-l-2 border-l-emerald-500': !notification.read_at }
              ]"
            >
              <div class="flex items-start gap-3">
                <!-- Avatar/Icon -->
                <div class="flex-shrink-0">
                  <div class="w-10 h-10 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-lg flex items-center justify-center">
                    <span class="text-white text-sm font-semibold">
                      {{ notification.data?.title?.charAt(0)?.toUpperCase() || 'N' }}
                    </span>
                  </div>
                </div>

                <!-- Content -->
                <div class="flex-1 min-w-0">
                  <div class="flex items-start justify-between">
                    <p class="text-sm font-medium text-white truncate">
                      {{ notification.data?.title || 'Notification' }}
                    </p>
                    <div class="flex items-center gap-2 ml-3">
                      <span class="text-xs text-slate-400 whitespace-nowrap">
                        {{ notification.date || formatDate(notification.created_at) }}
                      </span>
                      <div
                        v-if="!notification.read_at"
                        class="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"
                      ></div>
                    </div>
                  </div>
                  <p class="text-sm text-slate-400 mt-1 line-clamp-2">
                    {{ notification.data?.message || notification.data?.content || 'No message' }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div v-if="notifications.length > 0" class="p-4 border-t border-white/10">
          <button
            @click="closeDropdown"
            class="block w-full text-center py-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
          >
            Close notifications
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { Link } from '@inertiajs/vue3'
import axios from 'axios'

const isOpen = ref(false)
const notifications = ref([])
const loading = ref(false)

const unreadCount = computed(() => {
  return notifications.value.filter(n => !n.read_at).length
})

const fetchNotifications = async () => {
  try {
    loading.value = true
    const response = await axios.get(route('user.api.notifications', 10))

    // Handle the nested data structure from your API
    if (response.data && response.data.data) {
      notifications.value = response.data.data.map(item => ({
        id: item.id,
        data: item.data, // This contains title, icon, content, type
        created_at: item.created_at || new Date().toISOString(),
        read_at: item.read_at || null
      }))
    } else {
      notifications.value = response.data || []
    }
  } catch (error) {
    console.error('Failed to fetch notifications:', error)
    // Fallback mock data for development
    notifications.value = [
    ]
  } finally {
    loading.value = false
  }
}

const markAsRead = async (notificationId) => {
  try {
    await axios.post(route('user.api.notification.read'), {
      notification_id: notificationId
    })

    // Update local state
    const notification = notifications.value.find(n => n.id === notificationId)
    if (notification) {
      notification.read_at = new Date().toISOString()
    }
  } catch (error) {
    console.error('Failed to mark notification as read:', error)
    // Still update local state for better UX
    const notification = notifications.value.find(n => n.id === notificationId)
    if (notification) {
      notification.read_at = new Date().toISOString()
    }
  }
}

const markAllAsRead = async () => {
  try {
    const unreadNotifications = notifications.value.filter(n => !n.read_at)

    for (const notification of unreadNotifications) {
      await markAsRead(notification.id)
    }
  } catch (error) {
    console.error('Failed to mark all notifications as read:', error)
  }
}

const formatDate = (dateString) => {
  const date = new Date(dateString)
  const now = new Date()
  const diffInHours = Math.floor((now - date) / (1000 * 60 * 60))

  if (diffInHours < 1) {
    return 'Just now'
  } else if (diffInHours < 24) {
    return `${diffInHours}h ago`
  } else if (diffInHours < 168) {
    return `${Math.floor(diffInHours / 24)}d ago`
  } else {
    return date.toLocaleDateString()
  }
}

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const closeDropdown = () => {
  isOpen.value = false
}

// Click outside handler
const handleClickOutside = (event) => {
  const dropdown = document.querySelector('.notification-dropdown')
  if (dropdown && !dropdown.contains(event.target)) {
    isOpen.value = false
  }
}

onMounted(() => {
  fetchNotifications()
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
