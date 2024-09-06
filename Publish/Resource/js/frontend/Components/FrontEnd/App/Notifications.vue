<template>
    <div class="dropdown dropdown-end z-50">
        <div tabindex="0" class="m-1 btn btn-square btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                class="inline-block w-6 h-6 stroke-current text-neutral">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9">
                </path>
            </svg>
            <div class="badge badge-neutral" v-if="notificationsCount > 0">
                {{ notificationsCount }}
            </div>
        </div>
        <div tabindex="0" class="flex shadow menu dropdown-content bg-dark-200 rounded-box w-96">
            <ul v-if="notifications.length > 0" class="menu py-3 shadow-lg bg-dark-400">
                <li v-for="(item, index) in notifications" :key="index" class="pb-0">
                    <div class="flex pd overflow-hidden">
                        <div class="flex items-center pr-7">
                            <div class="avatar">
                                <div class="w-12 mask mask-squircle" v-if="item.data.type == 'image'">
                                    <img :src="item.data.icon" />
                                </div>
                                <div v-else>
                                    <Icon :icon="item.data.icon" />
                                </div>
                            </div>
                            <div class="mx-3">
                                <h2 class="text-xl font-semibold text-base-content">
                                    {{ item.data.title }}
                                </h2>
                                <div class="text-base-content">
                                    {{ item.data.content }}
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <ul class="menu bg-dark-400">
                <li @click="readAll">
                    <a class="flex justify-start" >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-neutral" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        Clear Notifications
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup >
// Import axios
import { api } from "../../../Boot/axios.js";
// Import the icon handle for the notification
import Icon from "./NotificationIcon.vue";
// Import the mounted function
import { onMounted } from "vue";

import { useMessage } from "naive-ui";
const message = useMessage();

let notifications = $ref([]);
// Notifications count
let notificationsCount = $ref(0);

const fetchNotifications = async () => {
    api
        .get(route("user.api.notifications", 5))
        .then(function (response) {
            console.log('asdasd');
            // Get the notifications
            notifications = response.data.data;
            // Count the notifications
            notificationsCount = notifications.length;
            // If is more them 0 we can display a message
            if (notificationsCount > 0) {
                message.success("You have new notifications");
            }
        })
        .catch(function (error) { });
};

onMounted(() => {
    fetchNotifications();
});

// Set a timeout to fetch notifications every 25 seconds
setInterval(fetchNotifications, 25000);

const readAll = async () => {
    await api.post(route("user.api.notification.read")).then(function (response) {
        // Clear the notifications
        notifications = [];
        // Clear the count
        notificationsCount = 0;
        // Display a message
        message.success("All notifications are read");
    });
};
</script>
