<template>
  <div class="relative">
    <!-- Notification Button -->
    <button
      @click="toggleDropdown"
      class="relative p-2 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all duration-200"
      :class="{ 'bg-slate-100 dark:bg-slate-800': isOpen }"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5 5v-5zM11 19H6a2 2 0 01-2-2V7a2 2 0 012-2h5m5 0v.01M19 12v.01"/>
      </svg>

      <!-- Badge -->
      <div
        v-if="notificationCount > 0"
        class="absolute -top-1 -right-1 flex items-center justify-center"
      >
        <div class="relative">
          <div class="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
            <span class="text-xs font-semibold text-white">
              {{ notificationCount > 99 ? '99+' : notificationCount }}
            </span>
          </div>
          <div class="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-75"></div>
        </div>
      </div>
    </button>

    <!-- Dropdown -->
    <div
      v-if="isOpen"
      class="absolute right-0 top-full mt-2 w-96 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 z-50 overflow-hidden"
    >
      <!-- Header -->
      <div class="p-4 border-b border-slate-200 dark:border-slate-700 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700">
        <div class="flex items-center justify-between">
          <div>
            <h3 class="text-lg font-semibold text-slate-900 dark:text-slate-100">Notifications</h3>
            <p class="text-sm text-slate-500 dark:text-slate-400" v-if="notificationCount > 0">
              You have {{ notificationCount }} new notification{{ notificationCount === 1 ? '' : 's' }}
            </p>
            <p class="text-sm text-slate-500 dark:text-slate-400" v-else>
              All caught up! No new notifications
            </p>
          </div>
          <button
            v-if="notificationCount > 0"
            @click="handleClearAll"
            :disabled="isLoading"
            class="px-3 py-1.5 text-xs font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 hover:bg-white dark:hover:bg-slate-800 rounded-lg transition-colors disabled:opacity-50"
          >
            Clear all
          </button>
        </div>
      </div>

      <!-- Notifications List -->
      <div class="max-h-80 overflow-y-auto">
        <div v-if="isLoading" class="p-6 text-center">
          <div class="inline-flex items-center space-x-2 text-slate-500">
            <svg class="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
            </svg>
            <span class="text-sm">Loading notifications...</span>
          </div>
        </div>

        <div v-else-if="notifications.length === 0" class="p-8 text-center">
          <div class="w-16 h-16 mx-auto mb-4 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center">
            <svg class="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5 5v-5zM11 19H6a2 2 0 01-2-2V7a2 2 0 012-2h5m5 0v.01M19 12v.01"/>
            </svg>
          </div>
          <p class="text-sm text-slate-500 dark:text-slate-400 font-medium">No notifications yet</p>
          <p class="text-xs text-slate-400 dark:text-slate-500 mt-1">We'll notify you when something arrives</p>
        </div>

        <div v-else>
          <TransitionGroup
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="transform translate-x-full opacity-0"
            enter-to-class="transform translate-x-0 opacity-100"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="transform translate-x-0 opacity-100"
            leave-to-class="transform translate-x-full opacity-0"
          >
            <div
              v-for="notification in notifications"
              :key="notification.id"
              class="border-b border-slate-100 dark:border-slate-700 last:border-none"
            >
              <div class="p-4 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors duration-200">
                <div class="flex items-start space-x-3">
                  <!-- Icon -->
                  <div class="flex-shrink-0 mt-0.5">
                    <div
                      class="w-10 h-10 rounded-xl flex items-center justify-center shadow-sm"
                      :class="getIconBgClass(notification.data.type)"
                    >
                      <component
                        :is="getNotificationIcon(notification.data.type)"
                        class="w-5 h-5"
                        :class="getIconClass(notification.data.type)"
                      />
                    </div>
                  </div>

                  <!-- Content -->
                  <div class="flex-1 min-w-0">
                    <div class="flex items-start justify-between">
                      <div class="flex-1">
                        <p class="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-1">
                          {{ notification.data.title }}
                        </p>
                        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                          {{ notification.data.content }}
                        </p>
                      </div>
                      <button
                        @click="markAsRead(notification.id)"
                        class="ml-2 p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 rounded transition-colors"
                      >
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                      </button>
                    </div>
                    <div class="flex items-center justify-between mt-3">
                      <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium"
                        :class="getTypeBadgeClass(notification.data.type)">
                        {{ notification.data.type }}
                      </span>
                      <span class="text-xs text-slate-500 dark:text-slate-400">
                        {{ formatTimestamp(notification.created_at) }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TransitionGroup>
        </div>
      </div>

      <!-- Footer Actions -->
      <div class="p-3 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900">
        <button
          @click="handleRefresh"
          :disabled="isLoading"
          class="w-full flex items-center justify-center space-x-2 px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-white dark:hover:bg-slate-800 rounded-lg transition-colors disabled:opacity-50"
        >
          <svg
            class="w-4 h-4 transition-transform duration-200"
            :class="{ 'animate-spin': isLoading }"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
          </svg>
          <span>{{ isLoading ? 'Refreshing...' : 'Refresh' }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { startWindToast } from '@mariojgt/wind-notify/packages/index.js'
import { api } from '../../Boot/axios.js'

// Icons
const CheckCircleIcon = 'svg'
const AlertCircleIcon = 'svg'
const InfoIcon = 'svg'
const AlertTriangleIcon = 'svg'
const BellIcon = 'svg'

// State
const notifications = ref([])
const notificationCount = ref(0)
const isLoading = ref(false)
const isOpen = ref(false)
let pollingInterval

// Methods
const toggleDropdown = () => {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    fetchNotifications()
  }
}

const fetchNotifications = async () => {
  try {
    isLoading.value = true
    const response = await api.get(route('admin.api.notifications', 5))
    notifications.value = response.data.data
    notificationCount.value = notifications.value.length
  } catch (error) {
    startWindToast('error', 'Failed to fetch notifications', 'error')
  } finally {
    isLoading.value = false
  }
}

const handleClearAll = async () => {
  try {
    isLoading.value = true
    await api.post(route('admin.api.notification.read'))
    await fetchNotifications()
    startWindToast('success', 'All notifications cleared', 'success')
  } catch (error) {
    startWindToast('error', 'Failed to clear notifications', 'error')
  } finally {
    isLoading.value = false
  }
}

const markAsRead = async (notificationId) => {
  try {
    await api.post(route('admin.api.notification.read', { id: notificationId }))
    notifications.value = notifications.value.filter(n => n.id !== notificationId)
    notificationCount.value = notifications.value.length
    startWindToast('success', 'Notification marked as read', 'success')
  } catch (error) {
    startWindToast('error', 'Failed to mark notification as read', 'error')
  }
}

const handleRefresh = () => {
  fetchNotifications()
}

const getNotificationIcon = (type) => {
  const iconMap = {
    success: 'check-circle',
    error: 'alert-circle',
    warning: 'alert-triangle',
    info: 'info',
    default: 'bell'
  }
  return iconMap[type] || iconMap.default
}

const getIconBgClass = (type) => {
  const classMap = {
    success: 'bg-green-100 dark:bg-green-900/30',
    error: 'bg-red-100 dark:bg-red-900/30',
    warning: 'bg-yellow-100 dark:bg-yellow-900/30',
    info: 'bg-blue-100 dark:bg-blue-900/30',
    default: 'bg-slate-100 dark:bg-slate-700'
  }
  return classMap[type] || classMap.default
}

const getIconClass = (type) => {
  const classMap = {
    success: 'text-green-600 dark:text-green-400',
    error: 'text-red-600 dark:text-red-400',
    warning: 'text-yellow-600 dark:text-yellow-400',
    info: 'text-blue-600 dark:text-blue-400',
    default: 'text-slate-600 dark:text-slate-400'
  }
  return classMap[type] || classMap.default
}

const getTypeBadgeClass = (type) => {
  const classMap = {
    success: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
    error: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
    warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
    info: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
    default: 'bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-400'
  }
  return classMap[type] || classMap.default
}

const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp)
  const now = new Date()
  const diff = now.getTime() - date.getTime()
  const minutes = Math.floor(diff / 60000)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)

  if (minutes < 1) return 'Just now'
  if (minutes < 60) return `${minutes}m ago`
  if (hours < 24) return `${hours}h ago`
  if (days < 7) return `${days}d ago`
  return date.toLocaleDateString()
}

// Click outside handler
const handleClickOutside = (e) => {
  if (!e.target.closest('.relative')) {
    isOpen.value = false
  }
}

// Lifecycle
onMounted(() => {
  fetchNotifications()
  pollingInterval = setInterval(fetchNotifications, 30000) // Poll every 30 seconds
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  clearInterval(pollingInterval)
  document.removeEventListener('click', handleClickOutside)
})
</script>
