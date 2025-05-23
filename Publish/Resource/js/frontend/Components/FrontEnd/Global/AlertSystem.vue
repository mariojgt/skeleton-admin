<template>
    <TransitionGroup name="alert" tag="div" class="relative z-[9999]">
        <template v-for="alert in visibleAlerts" :key="alert.id">
            <!-- Fullscreen Modal -->
            <div v-if="alert.is_full_screen"
                 class="fixed inset-0 z-[9999] flex items-center justify-center md:p-6">
                <!-- Backdrop with blur -->
                <div class="absolute inset-0 bg-[#1E2F4A]/95 backdrop-blur-lg" />

                <!-- Main Container -->
                <div class="relative w-full md:max-w-2xl h-full md:h-auto">
                    <!-- Gaming-style Card -->
                    <div class="relative h-full md:h-auto flex flex-col bg-[#253D63] md:rounded-2xl overflow-hidden"
                         :class="{ 'bg-[#253D63]': alert.theme === 'dark', 'bg-[#F0F7FF]': alert.theme === 'light' }">
                        <!-- Animated Border Effect -->
                        <div class="absolute inset-px md:rounded-2xl bg-gradient-to-br from-[#328AF1] to-[#8B60ED] opacity-25" />
                        <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDUgTCA1IDAgTSAxNSAwIEwgMjAgNSBNIDAgMTUgTCA1IDIwIE0gMTUgMjAgTCAyMCAxNSIgc3Ryb2tlPSIjQkFEOUZDIiBzdHJva2Utd2lkdGg9IjAuNSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-5" />

                        <!-- Header Section -->
                        <div class="flex-shrink-0 relative px-6 pt-6 pb-4 border-b"
                             :class="[
                                alert.theme === 'dark' ? 'border-[#328AF1]/20' : 'border-[#328AF1]/30',
                             ]">
                            <!-- Close Button for Mobile -->
                            <div v-if="alert.is_dismissible"
                                 class="absolute right-4 -top-4 md:top-4 z-20">
                                <button @click="dismissAlert(alert)"
                                        class="w-12 h-12 rounded-full border-2 flex items-center justify-center
                                               touch-manipulation active:scale-95 transition-all duration-200
                                               hover:border-[#328AF1] group shadow-lg"
                                        :class="[
                                            alert.theme === 'dark' ? 'bg-[#1E2F4A] border-[#328AF1]/30 text-white' : 'bg-white border-[#328AF1]/20 text-[#1E2F4A]'
                                        ]">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <!-- Alert Icon -->
                            <div class="relative flex justify-center mb-4">
                                <!-- Hex Background -->
                                <div class="absolute inset-0 bg-gradient-to-br from-[#328AF1]/10 to-[#8B60ED]/10
                                            rounded-xl transform rotate-45"></div>
                                <!-- Icon Wrapper -->
                                <div class="relative">
                                    <component
                                        :is="getAlertIcon(alert)"
                                        class="w-16 h-16 md:w-20 md:h-20"
                                        :class="getIconColorClass(alert)"
                                        strokeWidth="1.5"
                                    />
                                    <div class="absolute inset-0 rounded-full animate-ping-slow"
                                         :class="alert.theme === 'dark' ? 'bg-[#328AF1]/20' : 'bg-[#328AF1]/10'"></div>
                                </div>
                            </div>

                            <!-- Title -->
                            <h2 class="text-2xl md:text-3xl font-bold text-center"
                                :class="alert.theme === 'dark' ? 'text-white' : 'text-[#1E2F4A]'">
                                {{ alert.title }}
                            </h2>
                        </div>

                        <!-- Scrollable Content -->
                        <div class="flex-1 overflow-y-auto overscroll-contain custom-scrollbar">
                            <div class="p-6 space-y-6">
                                <!-- Main Content -->
                                <div class="prose max-w-none"
                                     :class="[
                                         alert.theme === 'dark'
                                            ? 'prose-invert prose-p:text-[#BAD9FC] prose-headings:text-white prose-strong:text-white prose-a:text-[#328AF1]'
                                            : 'prose-p:text-[#1E2F4A] prose-headings:text-[#1E2F4A] prose-strong:text-[#1E2F4A] prose-a:text-[#328AF1]'
                                     ]">
                                    <div v-html="alert.html_content"></div>
                                </div>

                                <!-- Time Info -->
                                <div v-if="showTimeInfo(alert)"
                                     class="rounded-xl p-4 border"
                                     :class="[
                                         alert.theme === 'dark'
                                            ? 'bg-[#1E2F4A] border-[#328AF1]/20'
                                            : 'bg-[#F0F7FF] border-[#328AF1]/10'
                                     ]">
                                    <div class="flex items-center gap-4">
                                        <div class="relative flex-shrink-0">
                                            <component
                                                :is="LucideIcons.Clock"
                                                class="w-8 h-8"
                                                :class="getIconColorClass(alert)"
                                            />
                                            <div class="absolute inset-0 rounded-full animate-ping-slow"
                                                 :class="alert.theme === 'dark' ? 'bg-[#328AF1]/20' : 'bg-[#328AF1]/10'"></div>
                                        </div>
                                        <div>
                                            <p class="font-medium"
                                               :class="alert.theme === 'dark' ? 'text-white' : 'text-[#1E2F4A]'">
                                               {{ getTimeInfoLabel(alert) }}
                                            </p>
                                            <p :class="alert.theme === 'dark' ? 'text-[#BAD9FC]' : 'text-[#1E2F4A]/70'">
                                                {{ formatDateTime(getTimeInfoDate(alert)) }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Action Footer -->
                        <div v-if="alert.is_dismissible && alert.button_text"
                             class="flex-shrink-0 p-6 border-t"
                             :class="[
                                 alert.theme === 'dark'
                                    ? 'bg-[#1E2F4A]/50 border-[#328AF1]/20'
                                    : 'bg-white/50 border-[#328AF1]/10'
                             ]">
                            <button @click="dismissAlert(alert)"
                                    class="w-full h-14 relative group touch-manipulation active:scale-[0.98] transition-transform">
                                <!-- Button Background -->
                                <div class="absolute inset-0 bg-gradient-to-r from-[#328AF1] to-[#8B60ED] rounded-xl opacity-90
                                            group-hover:opacity-100 transition-opacity"></div>

                                <!-- Shine Effect -->
                                <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent
                                            -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                                <!-- Content -->
                                <div class="relative flex items-center justify-center gap-3">
                                    <component v-if="alert.button_icon" :is="getButtonIcon(alert)" class="w-5 h-5 text-white" />
                                    <span class="text-white font-semibold tracking-wide">
                                        {{ alert.button_text || 'Dismiss' }}
                                    </span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Toast Notification -->
            <div v-else
                 class="fixed top-safe-top inset-x-0 z-[9999] p-4 pointer-events-none">
                <div class="max-w-md mx-auto">
                    <div class="rounded-xl border shadow-lg backdrop-blur-sm pointer-events-auto animate-slide-down"
                         :class="[
                             alert.theme === 'dark'
                                ? 'bg-[#253D63] border-[#328AF1]/30'
                                : 'bg-white border-[#328AF1]/20'
                         ]">
                        <div class="p-4 flex gap-4">
                            <!-- Icon -->
                            <div class="flex-shrink-0">
                                <component
                                    :is="getAlertIcon(alert)"
                                    class="w-6 h-6"
                                    :class="getIconColorClass(alert)"
                                />
                            </div>

                            <!-- Content -->
                            <div class="flex-1 min-w-0">
                                <h3 class="font-semibold mb-1"
                                    :class="alert.theme === 'dark' ? 'text-white' : 'text-[#1E2F4A]'">
                                    {{ alert.title }}
                                </h3>
                                <div class="text-sm"
                                     :class="alert.theme === 'dark' ? 'text-[#BAD9FC]' : 'text-[#1E2F4A]/70'">
                                    <div v-html="alert.html_content"></div>
                                </div>
                            </div>

                            <!-- Close -->
                            <div v-if="alert.is_dismissible" class="flex-shrink-0">
                                <button @click="dismissAlert(alert)"
                                        class="p-1 transition-colors"
                                        :class="alert.theme === 'dark' ? 'text-[#BAD9FC] hover:text-white' : 'text-[#1E2F4A]/70 hover:text-[#1E2F4A]'">
                                    <component :is="LucideIcons.X" class="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </TransitionGroup>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import * as LucideIcons from 'lucide-vue-next';

const props = defineProps({
    alerts: {
        type: Array,
        required: true
    }
});

// Filter alerts to show only enabled ones and those that are in the valid time window
const activeAlerts = computed(() => {
    if (!props.alerts) return [];

    return props.alerts.filter(alert => {
        // Check if alert is enabled
        if (!alert.is_enabled) return false;

        const now = new Date();

        // Check time window if both start_at and end_at are set
        if (alert.start_at && alert.end_at) {
            const startDate = new Date(alert.start_at);
            const endDate = new Date(alert.end_at);
            return now >= startDate && now <= endDate;
        }

        // If only start_at is set, check if after start date
        if (alert.start_at && !alert.end_at) {
            const startDate = new Date(alert.start_at);
            return now >= startDate;
        }

        // If only end_at is set, check if before end date
        if (!alert.start_at && alert.end_at) {
            const endDate = new Date(alert.end_at);
            return now <= endDate;
        }

        // If no dates set but scheduled_at exists, use that
        if (alert.scheduled_at) {
            // For maintenance and warning, show before the scheduled time
            if (alert.type === 'maintenance' || alert.type === 'warning') {
                const scheduledDate = new Date(alert.scheduled_at);
                return now <= scheduledDate;
            }
        }

        // Default to showing the alert if no time constraints
        return true;
    });
});

const visibleAlerts = ref([]);

// Initialize visible alerts from active alerts
onMounted(() => {
    visibleAlerts.value = activeAlerts.value.filter(alert => {
        // Sort by display_order
        visibleAlerts.value.sort((a, b) => a.display_order - b.display_order);

        // Check if dismissed before
        const dismissedData = localStorage.getItem(`alert-dismissed-${alert.id}`);
        if (!dismissedData) return true;

        try {
            const parsed = JSON.parse(dismissedData);

            // If it has a scheduled_at date and it's different from the stored one,
            // show it again (it's a new occurrence)
            if (alert.scheduled_at && parsed.scheduled_at !== alert.scheduled_at) {
                return true;
            }

            // For alerts with start/end dates, check if they're new occurrences
            if ((alert.start_at && parsed.start_at !== alert.start_at) ||
                (alert.end_at && parsed.end_at !== alert.end_at)) {
                return true;
            }

            // If non-dismissible, always show
            if (!alert.is_dismissible) {
                return true;
            }

            // Otherwise, this alert was dismissed and shouldn't be shown
            return false;
        } catch (e) {
            console.error("Error parsing dismissed alert data", e);
            return true;
        }
    });
});

// Get the appropriate icon for the alert based on its configuration
const getAlertIcon = (alert) => {
    // If the alert has a custom icon and it exists in Lucide
    if (alert.icon && LucideIcons[alert.icon]) {
        return LucideIcons[alert.icon];
    }

    // Default icons based on alert type
    const icons = {
        info: LucideIcons.Info,
        warning: LucideIcons.AlertTriangle,
        error: LucideIcons.AlertOctagon,
        maintenance: LucideIcons.Clock
    };

    return icons[alert.type] || icons.info;
};

// Get the appropriate color class for the icon based on the alert type and theme
const getIconColorClass = (alert) => {
    if (alert.theme === 'dark') {
        // Dark theme colors
        const colors = {
            info: 'text-[#328AF1]',
            warning: 'text-[#FFC107]',
            error: 'text-[#F44336]',
            maintenance: 'text-[#9C27B0]'
        };
        return colors[alert.type] || colors.info;
    } else {
        // Light theme colors
        const colors = {
            info: 'text-[#0D47A1]',
            warning: 'text-[#E65100]',
            error: 'text-[#B71C1C]',
            maintenance: 'text-[#4A148C]'
        };
        return colors[alert.type] || colors.info;
    }
};

// Get the button icon component
const getButtonIcon = (alert) => {
    if (alert.button_icon && LucideIcons[alert.button_icon]) {
        return LucideIcons[alert.button_icon];
    }
    return LucideIcons.Eye;
};

// Format date and time for display
const formatDateTime = (datetime) => {
    if (!datetime) return '';

    try {
        const date = new Date(datetime);
        return new Intl.DateTimeFormat('en-US', {
            dateStyle: 'medium',
            timeStyle: 'short'
        }).format(date);
    } catch (e) {
        console.error("Error formatting date", e);
        return datetime;
    }
};

// Determine if time info should be shown
const showTimeInfo = (alert) => {
    return alert.scheduled_at || alert.start_at || alert.end_at;
};

// Get the appropriate label for the time info
const getTimeInfoLabel = (alert) => {
    if (alert.type === 'maintenance' && alert.scheduled_at) {
        return 'Scheduled for';
    }

    if (alert.start_at && alert.end_at) {
        return 'Active between';
    }

    if (alert.end_at) {
        return 'Available until';
    }

    if (alert.start_at) {
        return 'Available since';
    }

    return 'Scheduled for';
};

// Get the appropriate date for time info
const getTimeInfoDate = (alert) => {
    if (alert.type === 'maintenance' && alert.scheduled_at) {
        return alert.scheduled_at;
    }

    if (alert.end_at) {
        return alert.end_at;
    }

    if (alert.start_at) {
        return alert.start_at;
    }

    return alert.scheduled_at;
};

// Dismiss an alert
const dismissAlert = (alert) => {
    if (!alert.is_dismissible) return;

    // Remove from visible alerts
    visibleAlerts.value = visibleAlerts.value.filter(a => a.id !== alert.id);

    // Save dismissal in local storage
    localStorage.setItem(`alert-dismissed-${alert.id}`, JSON.stringify({
        id: alert.id,
        scheduled_at: alert.scheduled_at,
        start_at: alert.start_at,
        end_at: alert.end_at,
        dismissedAt: new Date().toISOString()
    }));
};
</script>

<style scoped>
/* Base Animations */
@keyframes slide-down {
    from {
        opacity: 0;
        transform: translateY(-100%);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes ping-slow {
    0%, 100% {
        transform: scale(1);
        opacity: 0.5;
    }
    50% {
        transform: scale(1.2);
        opacity: 0.2;
    }
}

/* Utility Classes */
.animate-slide-down {
    animation: slide-down 0.3s ease-out;
}

.animate-ping-slow {
    animation: ping-slow 2s ease-in-out infinite;
}

.top-safe-top {
    top: max(16px, env(safe-area-inset-top));
}

/* Scrollbar Styling */
.custom-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: rgba(50, 138, 241, 0.3) rgba(30, 47, 74, 0.5);
}

.custom-scrollbar::-webkit-scrollbar {
    width: 5px;
}

.custom-scrollbar::-webkit-scrollbar-track {
    background: rgba(30, 47, 74, 0.5);
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background: rgba(50, 138, 241, 0.3);
    border-radius: 2.5px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: rgba(50, 138, 241, 0.5);
}

/* Transitions */
.alert-enter-active,
.alert-leave-active {
    transition: all 0.3s ease-in-out;
}

.alert-enter-from,
.alert-leave-to {
    opacity: 0;
    transform: scale(0.95);
}

/* Mobile Optimization */
@media (max-width: 768px) {
    .prose {
        font-size: 0.9375rem;
    }
}

/* Reduced Motion */
@media (prefers-reduced-motion) {
    .animate-ping-slow,
    .group-hover\:translate-x-full {
        animation: none;
    }
}
</style>
