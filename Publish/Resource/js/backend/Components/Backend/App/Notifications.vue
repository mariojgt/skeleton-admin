<template>
    <div class="dropdown dropdown-end">
      <!-- Notification Button -->
      <button
        class="btn btn-ghost btn-circle relative"
        aria-label="Notifications"
      >
        <BellIcon class="h-5 w-5" />
        <div
          v-if="notificationCount > 0"
          class="absolute -top-1 -right-1 flex items-center justify-center"
        >
          <div class="badge badge-primary badge-sm">{{ notificationCount }}</div>
        </div>
      </button>

      <!-- Dropdown Content -->
      <div
        tabindex="0"
        class="dropdown-content z-30 shadow-lg menu bg-base-100 rounded-box w-96 overflow-hidden"
      >
        <!-- Notifications List -->
        <div v-if="notifications.length > 0" class="max-h-[70vh] overflow-y-auto">
          <TransitionGroup
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="transform translate-x-full opacity-0"
            enter-to-class="transform translate-x-0 opacity-100"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="transform translate-x-0 opacity-100"
            leave-to-class="transform translate-x-full opacity-0"
          >
            <div
              v-for="notification in notifications"
              :key="notification.id"
              class="border-b border-base-200 last:border-none"
            >
              <div class="flex items-start p-4 hover:bg-base-200 transition-colors duration-200">
                <!-- Icon -->
                <div class="flex-shrink-0">
                  <div
                    class="w-10 h-10 rounded-full flex items-center justify-center"
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
                <div class="ml-4 flex-1">
                  <p class="text-sm font-medium text-base-content">
                    {{ notification.data.title }}
                  </p>
                  <p class="mt-1 text-sm text-base-content/70">
                    {{ notification.data.content }}
                  </p>
                  <p class="mt-2 text-xs text-base-content/50">
                    {{ formatTimestamp(notification.created_at) }}
                  </p>
                </div>
              </div>
            </div>
          </TransitionGroup>
        </div>

        <!-- Empty State -->
        <div
          v-else
          class="p-6 text-center text-base-content/70"
        >
          <BellOffIcon class="w-8 h-8 mx-auto mb-3 opacity-50" />
          <p>No new notifications</p>
        </div>

        <!-- Actions -->
        <div class="border-t border-base-200">
          <button
            v-if="notificationCount > 0"
            @click="handleClearAll"
            class="flex items-center justify-center w-full gap-2 px-4 py-3 text-sm text-base-content/70 hover:bg-base-200 transition-colors duration-200"
          >
            <TrashIcon class="w-4 h-4" />
            Clear All Notifications
          </button>
          <button
            v-else
            @click="handleRefresh"
            class="flex items-center justify-center w-full gap-2 px-4 py-3 text-sm text-base-content/70 hover:bg-base-200 transition-colors duration-200"
          >
            <RefreshCwIcon
              class="w-4 h-4"
              :class="{ 'animate-spin': isLoading }"
            />
            Refresh
          </button>
        </div>
      </div>
    </div>
  </template>

  <script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue';
  import { useMessage } from 'naive-ui';
  import { api } from "../../../Boot/axios.js";
  import {
    Bell as BellIcon,
    BellOff as BellOffIcon,
    Trash as TrashIcon,
    RefreshCw as RefreshCwIcon,
    AlertCircle as AlertCircleIcon,
    CheckCircle as CheckCircleIcon,
    Info as InfoIcon,
    AlertTriangle as AlertTriangleIcon
  } from 'lucide-vue-next';

  interface NotificationData {
    type: 'success' | 'error' | 'warning' | 'info';
    title: string;
    content: string;
    icon?: string;
  }

  interface Notification {
    id: string;
    data: NotificationData;
    created_at: string;
  }

  // State
  const notifications = ref<Notification[]>([]);
  const notificationCount = ref(0);
  const isLoading = ref(false);
  const message = useMessage();
  let pollingInterval: NodeJS.Timer;

  // Methods
  const fetchNotifications = async () => {
    try {
      isLoading.value = true;
      const response = await api.get(route('admin.api.notifications', 5));
      notifications.value = response.data.data;
      notificationCount.value = notifications.value.length;

      if (notificationCount.value > 0) {
        message.success('You have new notifications');
      }
    } catch (error) {
      message.error('Failed to fetch notifications');
    } finally {
      isLoading.value = false;
    }
  };

  const handleClearAll = async () => {
    try {
      isLoading.value = true;
      await api.post(route('admin.api.notification.read'));
      await fetchNotifications();
      message.success('Notifications cleared');
    } catch (error) {
      message.error('Failed to clear notifications');
    } finally {
      isLoading.value = false;
    }
  };

  const handleRefresh = () => {
    fetchNotifications();
  };

  const getNotificationIcon = (type: string) => {
    const icons = {
      success: CheckCircleIcon,
      error: AlertCircleIcon,
      warning: AlertTriangleIcon,
      info: InfoIcon,
      default: BellIcon
    };
    return icons[type as keyof typeof icons] || icons.default;
  };

  const getIconBgClass = (type: string) => {
    const classes = {
      success: 'bg-success/10',
      error: 'bg-error/10',
      warning: 'bg-warning/10',
      info: 'bg-info/10',
      default: 'bg-primary/10'
    };
    return classes[type as keyof typeof classes] || classes.default;
  };

  const getIconClass = (type: string) => {
    const classes = {
      success: 'text-success',
      error: 'text-error',
      warning: 'text-warning',
      info: 'text-info',
      default: 'text-primary'
    };
    return classes[type as keyof typeof classes] || classes.default;
  };

  const formatTimestamp = (timestamp: string): string => {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (minutes < 60) {
      return `${minutes} minutes ago`;
    } else if (hours < 24) {
      return `${hours} hours ago`;
    } else {
      return `${days} days ago`;
    }
  };

  // Lifecycle
  onMounted(() => {
    fetchNotifications();
    pollingInterval = setInterval(fetchNotifications, 25000);
  });

  onUnmounted(() => {
    clearInterval(pollingInterval);
  });
  </script>
