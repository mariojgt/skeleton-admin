<template>
    <div class="relative w-full" tabindex="0">
        <!-- RPG-Styled Notification Panel -->
        <Transition enter-active-class="transition ease-out duration-300" enter-from-class="opacity-0 -translate-y-4"
            enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-200"
            leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-4">
            <div v-if="notifications.length > 0"
                class="absolute right-0 top-full mt-3 w-full bg-[#1E2A42]/90 backdrop-blur-lg rounded-xl border-2 border-[#328AF1]/30 overflow-hidden rpg-notification-container">
                <!-- Magical Background Elements -->
                <div class="absolute inset-0">
                    <!-- Fantasy grid pattern -->
                    <div
                        class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDUgTCA1IDAgTSAxNSAwIEwgMjAgNSBNIDAgMTUgTCA1IDIwIE0gMTUgMjAgTCAyMCAxNSIgc3Ryb2tlPSIjQkFEOUZDIiBzdHJva2Utd2lkdGg9IjAuNSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20 fantasy-grid">
                    </div>

                    <!-- Magical aura effect -->
                    <div class="absolute inset-0 bg-gradient-to-t from-[#8B60ED]/10 to-transparent magical-aura"></div>

                    <!-- RPG UI scanlines -->
                    <div class="absolute inset-0 bg-scanlines opacity-5"></div>
                </div>

                <!-- Fantasy corner elements -->
                <div
                    class="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#328AF1] opacity-50 corner-accent">
                </div>
                <div
                    class="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#328AF1] opacity-50 corner-accent">
                </div>
                <div
                    class="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#328AF1] opacity-50 corner-accent">
                </div>
                <div
                    class="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#328AF1] opacity-50 corner-accent">
                </div>

                <!-- Header with RPG Quest Styling -->
                <div class="relative px-4 py-3 border-b border-[#328AF1]/30 flex items-center justify-between z-10">
                    <div class="rpg-quest-badge flex items-center gap-2">
                        <Bell class="w-5 h-5 text-[#328AF1]" />
                        <h3 class="text-sm font-medium text-[#BAD9FC]">Quest Notifications</h3>
                    </div>
                    <span
                        class="px-2 py-1 bg-[#328AF1]/10 text-[#328AF1] text-xs rounded-full border border-[#328AF1]/30 rpg-badge">
                        {{ notifications.length }}
                    </span>
                </div>

                <!-- Notifications List with RPG Item Styling -->
                <div class="relative max-h-[32rem] overflow-y-auto rpg-scrollbar z-10">
                    <div v-for="(item, index) in notifications" :key="index"
                        class="group px-4 py-3 border-b border-[#328AF1]/20 last:border-b-0 hover:bg-[#253D63] transition-all duration-200 rpg-notification-item">
                        <div class="flex gap-4">
                            <!-- RPG-Styled Notification Icon -->
                            <div class="flex-shrink-0">
                                <div v-if="item.data.type === 'image'"
                                    class="w-10 h-10 rounded-full overflow-hidden ring-2 ring-[#328AF1]/30 group-hover:ring-[#328AF1]/70 transition-all rpg-icon-container">
                                    <img :src="item.data.icon" :alt="item.data.title"
                                        class="w-full h-full object-cover" />
                                </div>
                                <div v-else
                                    class="w-10 h-10 rounded-full flex items-center justify-center rpg-icon-container transition-all"
                                    :class="getRpgIconBackground(item.data.icon)">
                                    <component :is="getIconComponent(item.data.icon)" size="20"
                                        class="text-white group-hover:scale-110 transition-transform" />
                                </div>
                            </div>

                            <!-- Content with Fantasy Styling -->
                            <div class="flex-1 min-w-0">
                                <div class="flex items-start justify-between gap-x-2">
                                    <p
                                        class="text-sm font-medium text-[#BAD9FC] group-hover:text-white transition-colors line-clamp-1">
                                        {{ item.data.title }}
                                    </p>
                                    <time :datetime="item.date" class="text-xs text-[#8B60ED] whitespace-nowrap">
                                        {{ formatDateSimple(item.date) }}
                                    </time>
                                </div>
                                <p
                                    class="mt-1 text-sm text-[#BAD9FC]/70 group-hover:text-[#BAD9FC] transition-colors line-clamp-2">
                                    {{ item.data.content }}
                                </p>
                            </div>
                        </div>

                        <!-- Hover glow effect -->
                        <div
                            class="absolute inset-0 bg-gradient-to-r from-[#328AF1]/5 to-[#8B60ED]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        </div>
                    </div>
                </div>

                <!-- RPG-Styled Action Button -->
                <div
                    class="relative sticky bottom-0 bg-[#1E2A42]/95 backdrop-blur-sm border-t border-[#328AF1]/30 z-10">
                    <button @click="readAll"
                        class="rpg-button secondary-button group relative w-full px-4 py-3 flex items-center justify-center gap-2 bg-[#1E2A42] hover:bg-[#253D63] text-[#F19A1A] transition-all duration-200 overflow-hidden">
                        <!-- Button magic glow -->
                        <div
                            class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rpg-button-magic">
                        </div>

                        <!-- RPG button border frames -->
                        <div class="absolute inset-0 rpg-button-frame-alt opacity-70"></div>

                        <Trash2 size="16" class="group-hover:scale-110 transition-transform duration-200" />
                        <span class="text-sm font-bold">Clear Quest Log</span>
                    </button>
                </div>
            </div>

            <!-- Empty State with RPG Styling -->
            <div v-else
                class="absolute right-0 top-full mt-3 w-full bg-[#1E2A42]/90 backdrop-blur-lg rounded-xl border-2 border-[#328AF1]/30 p-8 text-center rpg-notification-container">
                <!-- Fantasy corner elements -->
                <div
                    class="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#328AF1] opacity-50 corner-accent">
                </div>
                <div
                    class="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#328AF1] opacity-50 corner-accent">
                </div>
                <div
                    class="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#328AF1] opacity-50 corner-accent">
                </div>
                <div
                    class="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#328AF1] opacity-50 corner-accent">
                </div>

                <!-- Magical Background Elements -->
                <div class="absolute inset-0">
                    <div
                        class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDUgTCA1IDAgTSAxNSAwIEwgMjAgNSBNIDAgMTUgTCA1IDIwIE0gMTUgMjAgTCAyMCAxNSIgc3Ryb2tlPSIjQkFEOUZDIiBzdHJva2Utd2lkdGg9IjAuNSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20 fantasy-grid">
                    </div>
                    <div class="absolute inset-0 bg-gradient-to-t from-[#8B60ED]/10 to-transparent magical-aura"></div>
                </div>

                <div class="relative z-10">
                    <div
                        class="rpg-icon mx-auto mb-3 p-4 rounded-full bg-[#328AF1]/10 border border-[#328AF1]/30 animate-pulse-slow">
                        <BellOff size="48" class="text-[#BAD9FC] opacity-70" />
                    </div>
                    <p class="text-[#BAD9FC] text-sm font-medium">Quest Log Empty!</p>
                    <p class="text-[#BAD9FC]/60 text-xs mt-1">No new notifications</p>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, inject } from 'vue';
const route = inject('route');
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

// RPG-themed background color mapping function
const getRpgIconBackground = (type) => {
    const bgMap = {
        'success': 'bg-gradient-to-br from-[#1AAB8B] to-[#6EDCC4] shadow-[0_0_15px_rgba(26,171,139,0.3)]',
        'error': 'bg-gradient-to-br from-[#F06060] to-[#F19A1A] shadow-[0_0_15px_rgba(241,154,26,0.3)]',
        'warning': 'bg-gradient-to-br from-[#F19A1A] to-[#FFC73C] shadow-[0_0_15px_rgba(241,154,26,0.3)]',
        'info': 'bg-gradient-to-br from-[#328AF1] to-[#21C8F6] shadow-[0_0_15px_rgba(50,138,241,0.3)]',
        'message': 'bg-gradient-to-br from-[#8B60ED] to-[#B372BD] shadow-[0_0_15px_rgba(139,96,237,0.3)]',
        'mail': 'bg-gradient-to-br from-[#8B60ED] to-[#21C8F6] shadow-[0_0_15px_rgba(139,96,237,0.3)]',
        'user': 'bg-gradient-to-br from-[#F19A1A] to-[#8B60ED] shadow-[0_0_15px_rgba(241,154,26,0.3)]',
        'star': 'bg-gradient-to-br from-[#F19A1A] to-[#FFC73C] shadow-[0_0_15px_rgba(241,154,26,0.3)]',
        'default': 'bg-gradient-to-br from-[#328AF1] to-[#8B60ED] shadow-[0_0_15px_rgba(50,138,241,0.3)]'
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
/* RPG UI and Magical Effects */
.rpg-notification-container {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3), 0 0 15px rgba(50, 138, 241, 0.2);
    transition: all 0.3s ease;
    transform: translateY(0);
}

.rpg-notification-container:hover {
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(50, 138, 241, 0.3);
}

/* Fantasy grid animation */
.fantasy-grid {
    animation: fantasy-grid-pulse 10s ease-in-out infinite;
}

@keyframes fantasy-grid-pulse {

    0%,
    100% {
        opacity: 0.1;
    }

    50% {
        opacity: 0.3;
    }
}

/* Magical Aura */
.magical-aura {
    opacity: 0.5;
    animation: magical-pulse 5s ease-in-out infinite;
}

@keyframes magical-pulse {

    0%,
    100% {
        opacity: 0.5;
    }

    50% {
        opacity: 0.8;
    }
}

/* Fantasy Corner Accents */
.corner-accent {
    transition: all 0.5s ease;
}

.rpg-notification-container:hover .corner-accent {
    opacity: 0.8;
}

/* RPG Quest Badge with Pulse Effect */
.rpg-quest-badge {
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
}

/* RPG Badge with Shine Animation */
.rpg-badge {
    position: relative;
    overflow: hidden;
}

.rpg-badge::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transform: translateX(-100%);
    animation: rpg-badge-shine 3s infinite;
}

@keyframes rpg-badge-shine {
    100% {
        transform: translateX(100%);
    }
}

/* RPG Icon Container with glow effect */
.rpg-icon-container {
    position: relative;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(50, 138, 241, 0.2);
    transition: all 0.3s ease;
}

.rpg-icon-container:hover {
    transform: scale(1.05);
    box-shadow: 0 0 15px rgba(50, 138, 241, 0.4);
}

/* RPG Notification Item Hover Effect */
.rpg-notification-item {
    position: relative;
    transition: all 0.2s ease;
}

.rpg-notification-item:hover {
    transform: translateX(3px);
}

/* RPG Button Styling */
.rpg-button {
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
}

.rpg-button:hover {
    transform: translateY(-2px);
}

.rpg-button-magic {
    box-shadow: inset 0 0 15px rgba(241, 154, 26, 0.4);
}

/* RPG Button Frame Decorations */
.rpg-button-frame-alt::before,
.rpg-button-frame-alt::after {
    content: "";
    position: absolute;
    width: 8px;
    height: 8px;
    border: 2px solid rgba(241, 154, 26, 0.5);
}

.rpg-button-frame-alt::before {
    top: -1px;
    right: -1px;
    border-left: none;
    border-bottom: none;
}

.rpg-button-frame-alt::after {
    bottom: -1px;
    left: -1px;
    border-right: none;
    border-top: none;
}

/* Custom RPG Scrollbar */
.rpg-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: #328AF1 #1E2A42;
}

.rpg-scrollbar::-webkit-scrollbar {
    width: 6px;
}

.rpg-scrollbar::-webkit-scrollbar-track {
    background: #1E2A42;
    border-radius: 3px;
}

.rpg-scrollbar::-webkit-scrollbar-thumb {
    background: #328AF1;
    border-radius: 3px;
    border: 1px solid rgba(50, 138, 241, 0.3);
}

.rpg-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #8B60ED;
}

/* Empty State RPG Icon Animation */
.rpg-icon {
    position: relative;
    animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse-slow {

    0%,
    100% {
        opacity: 1;
        transform: scale(1);
    }

    50% {
        opacity: 0.7;
        transform: scale(0.95);
    }
}

/* RPG UI scanlines */
.bg-scanlines {
    background-image: linear-gradient(0deg,
            transparent 0%,
            rgba(50, 138, 241, 0.05) 50%,
            transparent 100%);
    background-size: 100% 4px;
}

/* Text styling */
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

/* Mobile optimizations */
@media (max-width: 640px) {
    .rpg-notification-item:hover {
        transform: none;
    }
}
</style>
