<template>
    <div class="relative w-full" tabindex="0">
      <!-- Notification Panel -->
      <Transition
        enter-active-class="transition ease-out duration-200"
        enter-from-class="opacity-0 -translate-y-1"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition ease-in duration-150"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-1"
      >
        <div
          v-if="notifications.length > 0"
          class="absolute right-0 top-full mt-3 w-full bg-gray-900/95 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-800/50"
        >
          <!-- Header -->
          <div class="px-4 py-3 border-b border-gray-800/50 flex items-center justify-between">
            <h3 class="text-sm font-medium text-gray-200">Recent Notifications</h3>
            <span class="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
              {{ notifications.length }}
            </span>
          </div>

          <!-- Notifications List -->
          <div class="max-h-[32rem] overflow-y-auto scrollbar-styled">
            <div
              v-for="(item, index) in notifications"
              :key="index"
              class="group px-4 py-3 border-b border-gray-800/50 last:border-b-0 hover:bg-gray-800/50 transition-all duration-200"
            >
              <div class="flex gap-4">
                <!-- Notification Icon -->
                <div class="flex-shrink-0">
                  <div
                    v-if="item.data.type === 'image'"
                    class="w-10 h-10 rounded-full overflow-hidden ring-2 ring-gray-700/50"
                  >
                    <img
                      :src="item.data.icon"
                      :alt="item.data.title"
                      class="w-full h-full object-cover"
                    />
                  </div>
                  <div
                    v-else
                    class="w-10 h-10 rounded-full flex items-center justify-center"
                    :class="getIconBackground(item.data.icon)"
                  >
                    <component
                      :is="getIconComponent(item.data.icon)"
                      size="20"
                      class="text-white"
                    />
                  </div>
                </div>

                <!-- Content -->
                <div class="flex-1 min-w-0">
                  <div class="flex items-start justify-between gap-x-2">
                    <p class="text-sm font-medium text-gray-100 line-clamp-1">
                      {{ item.data.title }}
                    </p>
                    <time
                      :datetime="item.date"
                      class="text-xs text-gray-500 whitespace-nowrap"
                    >
                      {{ formatDateSimple(item.date) }}
                    </time>
                  </div>
                  <p class="mt-1 text-sm text-gray-400 line-clamp-2">
                    {{ item.data.content }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Actions -->
          <div class="sticky bottom-0 bg-gray-900/95 backdrop-blur-sm border-t border-gray-800/50">
            <button
              @click="readAll"
              class="w-full px-4 py-3 flex items-center justify-center gap-2 text-red-400 hover:bg-red-500/10 transition-all duration-200 group"
            >
              <Trash2
                size="16"
                class="group-hover:scale-110 transition-transform duration-200"
              />
              <span class="text-sm font-medium">Clear All</span>
            </button>
          </div>
        </div>

        <!-- Empty State -->
        <div
          v-else
          class="absolute right-0 top-full mt-3 w-full bg-gray-900/95 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-800/50 p-8 text-center"
        >
          <BellOff
            size="48"
            class="text-gray-700 mx-auto mb-3 opacity-50"
          />
          <p class="text-gray-400 text-sm font-medium">All Caught Up!</p>
          <p class="text-gray-600 text-xs mt-1">No new notifications</p>
        </div>
      </Transition>
    </div>
  </template>

  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  import { api } from "../../../Boot/axios.js";
  import { startWindToast } from "@mariojgt/wind-notify/packages/index.js";
  import {
    Bell,
    BellOff,
    Trash2,
    CheckCircle,
    AlertCircle,
    InfoIcon,
    AlertTriangle,
    Mail,
    MessageSquare,
    User,
    Star
  } from 'lucide-vue-next';

  const notifications = ref([]);
  const notificationsCount = ref(0);

  // Icon mapping function
  const getIconComponent = (type) => {
    const iconMap = {
      'success': CheckCircle,
      'error': AlertCircle,
      'warning': AlertTriangle,
      'info': InfoIcon,
      'message': MessageSquare,
      'mail': Mail,
      'user': User,
      'star': Star,
      'default': Bell
    };
    return iconMap[type] || iconMap.default;
  };

  // Background color mapping function
  const getIconBackground = (type) => {
    const bgMap = {
      'success': 'bg-emerald-500/20',
      'error': 'bg-red-500/20',
      'warning': 'bg-amber-500/20',
      'info': 'bg-blue-500/20',
      'message': 'bg-indigo-500/20',
      'mail': 'bg-violet-500/20',
      'user': 'bg-pink-500/20',
      'star': 'bg-yellow-500/20',
      'default': 'bg-gray-500/20'
    };
    return bgMap[type] || bgMap.default;
  };

  // Safe date formatting function
  const formatDateSimple = (dateString) => {
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) {
        return 'Just now';
      }

      // Format as relative time
      const now = new Date();
      const diffInMinutes = Math.floor((now - date) / (1000 * 60));

      if (diffInMinutes < 1) return 'Just now';
      if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
      if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
      if (diffInMinutes < 10080) return `${Math.floor(diffInMinutes / 1440)}d ago`;

      // For older dates, show the actual date
      return date.toLocaleDateString();
    } catch {
      return 'Recently';
    }
  };

  // Fetch notifications
  const fetchNotifications = async () => {
    try {
      const response = await api.get(route("user.api.notifications", 5));
      notifications.value = response.data.data;
      notificationsCount.value = notifications.value.length;

      if (notificationsCount.value > 0) {
        startWindToast('info',
          `${notificationsCount.value} new notification${notificationsCount.value > 1 ? 's' : ''}`,
          'info'
        );
      }
    } catch (error) {
      console.error("Failed to fetch notifications", error);
      startWindToast('error', "Failed to fetch notifications", 'error');
    }
  };

  // Read all notifications
  const readAll = async () => {
    try {
      await api.post(route("user.api.notification.read"));
      notifications.value = [];
      notificationsCount.value = 0;
      startWindToast('success', "All notifications cleared", 'success');
    } catch (error) {
      console.error("Failed to mark notifications as read", error);
      startWindToast('error', "Failed to clear notifications", 'error');
    }
  };

  // Lifecycle hooks
  let intervalId;
  onMounted(() => {
    fetchNotifications();
    intervalId = setInterval(fetchNotifications, 25000);
  });

  onUnmounted(() => {
    if (intervalId) clearInterval(intervalId);
  });
  </script>

  <style scoped>
  .scrollbar-styled {
    scrollbar-width: thin;
    scrollbar-color: #374151 #1F2937;
  }

  .scrollbar-styled::-webkit-scrollbar {
    width: 6px;
  }

  .scrollbar-styled::-webkit-scrollbar-track {
    background: #1F2937;
    border-radius: 3px;
  }

  .scrollbar-styled::-webkit-scrollbar-thumb {
    background: #374151;
    border-radius: 3px;
  }

  .line-clamp-1 {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  </style>
