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
                    <div class="relative h-full md:h-auto flex flex-col bg-[#253D63] md:rounded-2xl overflow-hidden">
                        <!-- Animated Border Effect -->
                        <div class="absolute inset-px md:rounded-2xl bg-gradient-to-br from-[#328AF1] to-[#8B60ED] opacity-25" />
                        <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDUgTCA1IDAgTSAxNSAwIEwgMjAgNSBNIDAgMTUgTCA1IDIwIE0gMTUgMjAgTCAyMCAxNSIgc3Ryb2tlPSIjQkFEOUZDIiBzdHJva2Utd2lkdGg9IjAuNSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-5" />

                        <!-- Header Section -->
                        <div class="flex-shrink-0 relative px-6 pt-6 pb-4 border-b border-[#328AF1]/20">
                            <!-- Close Button for Mobile -->
                            <div v-if="alert.is_dismissible"
                                 class="absolute right-4 -top-4 md:top-4 z-20">
                                <button @click="dismissAlert(alert)"
                                        class="w-12 h-12 bg-[#1E2F4A] rounded-full border-2 border-[#328AF1]/30
                                               flex items-center justify-center touch-manipulation
                                               active:scale-95 transition-all duration-200
                                               hover:border-[#328AF1] group shadow-lg">
                                    <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
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
                                        class="w-16 h-16 md:w-20 md:h-20 text-[#328AF1]"
                                        strokeWidth="1.5"
                                    />
                                    <div class="absolute inset-0 bg-[#328AF1]/20 rounded-full animate-ping-slow"></div>
                                </div>
                            </div>

                            <!-- Title -->
                            <h2 class="text-2xl md:text-3xl font-bold text-center text-white">
                                {{ alert.title }}
                            </h2>
                        </div>

                        <!-- Scrollable Content -->
                        <div class="flex-1 overflow-y-auto overscroll-contain custom-scrollbar">
                            <div class="p-6 space-y-6">
                                <!-- Main Content -->
                                <div class="prose prose-invert max-w-none
                                            prose-p:text-[#BAD9FC] prose-headings:text-white
                                            prose-strong:text-white prose-a:text-[#328AF1]">
                                    <MarkdownRenderer :content="alert.html_content" />
                                </div>

                                <!-- Time Info -->
                                <div v-if="alert.scheduled_at"
                                     class="bg-[#1E2F4A] rounded-xl p-4 border border-[#328AF1]/20">
                                    <div class="flex items-center gap-4">
                                        <div class="relative flex-shrink-0">
                                            <Clock class="w-8 h-8 text-[#328AF1]" />
                                            <div class="absolute inset-0 bg-[#328AF1]/20 rounded-full animate-ping-slow"></div>
                                        </div>
                                        <div>
                                            <p class="text-white font-medium">
                                                {{ alert.type === 'info' ? 'Ends at' : 'Scheduled at' }}
                                            </p>
                                            <p class="text-[#BAD9FC]">
                                                {{ formatDateTime(alert.scheduled_at) }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Action Footer -->
                        <div v-if="alert.is_dismissible"
                             class="flex-shrink-0 p-6 bg-[#1E2F4A]/50 border-t border-[#328AF1]/20">
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
                                    <component :is="getButtonIcon(alert)" class="w-5 h-5 text-white" />
                                    <span class="text-white font-semibold tracking-wide">
                                        {{ alert.button_text }}
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
                    <div class="bg-[#253D63] rounded-xl border border-[#328AF1]/30 shadow-lg
                               backdrop-blur-sm pointer-events-auto animate-slide-down">
                        <div class="p-4 flex gap-4">
                            <!-- Icon -->
                            <div class="flex-shrink-0">
                                <component :is="getAlertIcon(alert)"
                                         class="w-6 h-6 text-[#328AF1]" />
                            </div>

                            <!-- Content -->
                            <div class="flex-1 min-w-0">
                                <h3 class="text-white font-semibold mb-1">{{ alert.title }}</h3>
                                <div class="text-[#BAD9FC] text-sm">
                                    <MarkdownRenderer :content="alert.html_content" />
                                </div>
                            </div>

                            <!-- Close -->
                            <div v-if="alert.is_dismissible" class="flex-shrink-0">
                                <button @click="dismissAlert(alert)"
                                        class="p-1 text-[#BAD9FC] hover:text-white transition-colors">
                                    <X class="w-5 h-5" />
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
    import { ref, onMounted } from 'vue';
    import * as LucideIcons from 'lucide-vue-next';
    import MarkdownRenderer from "../Comment/Markdown.vue";

    const props = defineProps({
        alerts: {
            type: Array,
            required: true
        }
    });

    const visibleAlerts = ref([]);

    // Initialize visible alerts from props
    onMounted(() => {
        visibleAlerts.value = props.alerts.filter(alert => {
            const dismissedData = localStorage.getItem(`alert-dismissed-${alert.id}`);
            if (!dismissedData) return true;

            const parsed = JSON.parse(dismissedData);
            // Show again if it's a new alert (different scheduled time)
            return parsed.scheduled_at !== alert.scheduled_at;
        });
    });

    const getAlertIcon = (alert) => {
        if (alert.icon && LucideIcons[alert.icon]) {
            return LucideIcons[alert.icon];
        }

        const icons = {
            info: LucideIcons.AlertCircle,
            warning: LucideIcons.AlertTriangle,
            error: LucideIcons.AlertOctagon,
            maintenance: LucideIcons.Clock
        };

        return icons[alert.type] || icons.info;
    };

    const getButtonIcon = (alert) => {
        if (alert.button_icon && LucideIcons[alert.button_icon]) {
            return LucideIcons[alert.button_icon];
        }
        return LucideIcons.Eye;
    };

    const formatDateTime = (datetime) => {
        const date = new Date(datetime);
        return new Intl.DateTimeFormat('en-US', {
            dateStyle: 'full',
            timeStyle: 'long'
        }).format(date);
    };

    const dismissAlert = (alert) => {
        if (!alert.is_dismissible) return;

        visibleAlerts.value = visibleAlerts.value.filter(a => a.id !== alert.id);

        localStorage.setItem(`alert-dismissed-${alert.id}`, JSON.stringify({
            id: alert.id,
            scheduled_at: alert.scheduled_at,
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
