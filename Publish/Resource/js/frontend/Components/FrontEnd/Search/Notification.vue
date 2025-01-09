<template>
    <div class="relative w-full sm:w-auto" tabindex="0">
      <div
        v-if="notifications.length > 0"
        class="absolute right-0 top-full mt-2 w-full bg-gray-900 rounded-xl shadow-2xl border border-gray-800 overflow-hidden"
      >
        <!-- Notifications List -->
        <div class="max-h-96 overflow-y-auto">
          <div
            v-for="(item, index) in notifications"
            :key="index"
            class="px-4 py-3 border-b border-gray-800 last:border-b-0 hover:bg-gray-800 transition-colors duration-200"
          >
            <div class="flex items-center space-x-4">
              <!-- Notification Icon -->
              <div class="flex-shrink-0">
                <div
                  v-if="item.data.type === 'image'"
                  class="w-12 h-12 rounded-full overflow-hidden"
                >
                  <img
                    :src="item.data.icon"
                    alt="Notification Icon"
                    class="w-full h-full object-cover"
                  />
                </div>
                <div v-else class="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                    <Icon :icon="item.data.icon" />
                </div>
              </div>

              <!-- Notification Content -->
              <div class="flex-1 min-w-0">
                <p class="text-sm font-semibold text-white truncate">
                  {{ item.data.title }}
                </p>
                <p class="text-sm text-gray-400 truncate">
                  {{ item.data.content }}
                </p>
              </div>

              <!-- Notification Time -->
              <div class="text-xs text-gray-500">
                {{ item.date }}
              </div>
            </div>
          </div>
        </div>

        <!-- Clear All Notifications -->
        <div
          v-if="notifications.length > 0"
          class="sticky bottom-0 bg-gray-900 border-t border-gray-800"
        >
          <button
            @click="readAll"
            class="w-full px-4 py-3 flex items-center justify-center space-x-2 text-red-500 hover:bg-red-500/10 transition-colors duration-200"
          >
            <Trash2
              :size="20"
              class="text-red-500"
            />
            <span class="text-sm">Clear All Notifications</span>
          </button>
        </div>
      </div>

      <!-- Empty State -->
      <div
        v-else
        class="absolute right-0 top-full mt-2 w-full bg-gray-900 rounded-xl shadow-2xl border border-gray-800 p-6 text-center"
      >
        <BellOff
          :size="64"
          class="text-gray-700 mx-auto mb-4"
        />
        <p class="text-gray-500">
          No new notifications
        </p>
      </div>
    </div>
  </template>

  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  import { api } from "../../../Boot/axios.js";
  import Icon from "./NotificationIcon.vue";
  import { useMessage } from "naive-ui";

  const message = useMessage();
  const notifications = ref([]);
  const notificationsCount = ref(0);

  // Fetch notifications
  const fetchNotifications = async () => {
    try {
      const response = await api.get(route("user.api.notifications", 5));
      notifications.value = response.data.data;
      notificationsCount.value = notifications.value.length;

      if (notificationsCount.value > 0) {
        message.success(`You have ${notificationsCount.value} new notification${notificationsCount.value > 1 ? 's' : ''}`);
      }
    } catch (error) {
      console.error("Failed to fetch notifications", error);
    }
  };

  // Read all notifications
  const readAll = async () => {
    try {
      await api.post(route("user.api.notification.read"));
      notifications.value = [];
      notificationsCount.value = 0;
      message.success("All notifications marked as read");
    } catch (error) {
      console.error("Failed to mark notifications as read", error);
    }
  };

  // Format time for notifications
  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMinutes = Math.round((now - date) / (1000 * 60));

    if (diffMinutes < 1) return 'Just now';
    if (diffMinutes < 60) return `${diffMinutes} min ago`;

    const diffHours = Math.round(diffMinutes / 60);
    if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;

    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  // Fetch notifications on mount
  let intervalId;
  onMounted(() => {
    fetchNotifications();

    // Set interval to fetch notifications
    intervalId = setInterval(fetchNotifications, 25000);
  });

  // Clear interval on unmount
  onUnmounted(() => {
    if (intervalId) {
      clearInterval(intervalId);
    }
  });
  </script>

  <style scoped>
  /* Custom scrollbar for dark mode */
  *::-webkit-scrollbar {
    width: 8px;
  }
  *::-webkit-scrollbar-track {
    background: #1F2937;
  }
  *::-webkit-scrollbar-thumb {
    background: #374151;
    border-radius: 4px;
  }
  </style>
