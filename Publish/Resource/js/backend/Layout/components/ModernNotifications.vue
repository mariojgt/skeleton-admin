<template>
  <div class="relative">
    <!-- Notification Button -->
    <button
      @click="toggleModal"
      class="btn btn-ghost btn-circle relative"
      :class="{ 'btn-active': isOpen }"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5 5v-5zM11 19H6a2 2 0 01-2-2V7a2 2 0 012-2h5m5 0v.01M19 12v.01"/>
      </svg>

      <!-- Badge -->
      <div
        v-if="notificationCount > 0"
        class="indicator-item badge badge-error badge-sm absolute -top-1 -right-1"
      >
        {{ notificationCount > 99 ? '99+' : notificationCount }}
      </div>
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
        class="relative w-96 card card-compact shadow-xl bg-base-100 border border-base-300"
        @click.stop
      >
        <!-- Header -->
        <div class="card-header p-4 border-b border-base-300 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div class="flex items-center justify-between">
            <div>
              <h3 class="card-title text-lg">Notifications</h3>
              <p class="text-sm text-base-content/70" v-if="notificationCount > 0">
                You have {{ notificationCount }} new notification{{ notificationCount === 1 ? '' : 's' }}
              </p>
              <p class="text-sm text-base-content/70" v-else>
                All caught up! No new notifications
              </p>
            </div>
            <div class="flex items-center gap-2">
              <button
                v-if="notificationCount > 0"
                @click="handleClearAll"
                :disabled="isLoading"
                class="btn btn-ghost btn-xs"
                :class="{ 'loading': isLoading }"
              >
                Clear all
              </button>
              <button
                @click="closeModal"
                class="btn btn-ghost btn-circle btn-xs"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Notifications List -->
        <div class="card-body p-0 max-h-80 overflow-y-auto">
          <div v-if="isLoading" class="p-6 text-center">
            <div class="loading loading-spinner loading-md mx-auto"></div>
            <p class="text-sm text-base-content/60 mt-2">Loading notifications...</p>
          </div>

          <div v-else-if="notifications.length === 0" class="p-8 text-center">
            <div class="avatar mb-4">
              <div class="w-16 rounded-full bg-base-200">
                <div class="w-full h-full flex items-center justify-center">
                  <svg class="w-8 h-8 text-base-content/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5 5v-5zM11 19H6a2 2 0 01-2-2V7a2 2 0 012-2h5m5 0v.01M19 12v.01"/>
                  </svg>
                </div>
              </div>
            </div>
            <p class="text-sm text-base-content/60 font-medium">No notifications yet</p>
            <p class="text-xs text-base-content/40 mt-1">We'll notify you when something arrives</p>
          </div>

          <div v-else>
            <div
              v-for="notification in notifications"
              :key="notification.id"
              class="border-b border-base-300 last:border-none"
            >
              <div class="p-4 hover:bg-base-200 transition-colors duration-200">
                <div class="flex items-start space-x-3">
                  <!-- Icon -->
                  <div class="flex-shrink-0 mt-0.5">
                    <div
                      class="avatar w-10 h-10"
                      :class="getIconBgClass(notification.data.type)"
                    >
                      <div class="rounded-xl flex items-center justify-center">
                        <svg
                          class="w-5 h-5"
                          :class="getIconClass(notification.data.type)"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path v-if="notification.data.type === 'success'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                          <path v-else-if="notification.data.type === 'error'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                          <path v-else-if="notification.data.type === 'warning'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <!-- Content -->
                  <div class="flex-1 min-w-0">
                    <div class="flex items-start justify-between">
                      <div class="flex-1">
                        <p class="text-sm font-semibold text-base-content mb-1">
                          {{ notification.data.title }}
                        </p>
                        <p class="text-sm text-base-content/70 leading-relaxed">
                          {{ notification.data.content }}
                        </p>
                      </div>
                      <button
                        @click="markAsRead(notification.id)"
                        class="btn btn-ghost btn-circle btn-xs ml-2"
                      >
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                      </button>
                    </div>
                    <div class="flex items-center justify-between mt-3">
                      <div
                        class="badge badge-sm"
                        :class="getTypeBadgeClass(notification.data.type)"
                      >
                        {{ notification.data.type }}
                      </div>
                      <span class="text-xs text-base-content/50">
                        {{ formatTimestamp(notification.created_at) }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer Actions -->
        <div class="card-actions p-3 border-t border-base-300 bg-base-200">
          <button
            @click="handleRefresh"
            :disabled="isLoading"
            class="btn btn-ghost btn-sm w-full"
            :class="{ 'loading': isLoading }"
          >
            <svg
              v-if="!isLoading"
              class="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
            </svg>
            {{ isLoading ? 'Refreshing...' : 'Refresh' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { startWindToast } from '@mariojgt/wind-notify/packages/index.js'
import { api } from '../../Boot/axios.js'

// State
const notifications = ref([])
const notificationCount = ref(0)
const isLoading = ref(false)
const isOpen = ref(false)
let pollingInterval

// Methods
const toggleModal = () => {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    fetchNotifications()
  }
}

const closeModal = () => {
  isOpen.value = false
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

const getIconBgClass = (type) => {
  const classMap = {
    success: 'bg-success/20',
    error: 'bg-error/20',
    warning: 'bg-warning/20',
    info: 'bg-info/20',
    default: 'bg-base-200'
  }
  return classMap[type] || classMap.default
}

const getIconClass = (type) => {
  const classMap = {
    success: 'text-success',
    error: 'text-error',
    warning: 'text-warning',
    info: 'text-info',
    default: 'text-base-content/60'
  }
  return classMap[type] || classMap.default
}

const getTypeBadgeClass = (type) => {
  const classMap = {
    success: 'badge-success',
    error: 'badge-error',
    warning: 'badge-warning',
    info: 'badge-info',
    default: 'badge-neutral'
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

// Handle escape key
const handleEscape = (e) => {
  if (e.key === 'Escape' && isOpen.value) {
    closeModal()
  }
}

// Lifecycle
onMounted(() => {
  fetchNotifications()
  pollingInterval = setInterval(fetchNotifications, 30000) // Poll every 30 seconds
  document.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  clearInterval(pollingInterval)
  document.removeEventListener('keydown', handleEscape)
})
</script>
