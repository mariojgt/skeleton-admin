<!-- resources/js/Components/AlertSystem.vue -->
<template>
    <TransitionGroup
        name="alert"
        tag="div"
        class="relative z-[9999]"
    >
        <template v-for="alert in visibleAlerts" :key="alert.id">
            <!-- Full Screen Alert -->
            <div
                v-if="alert.is_full_screen"
                class="fixed inset-0 z-[9999] bg-dark-500/90 backdrop-blur-md flex items-center justify-center p-4 overflow-hidden"
            >
                <div
                    class="bg-dark-400 rounded-2xl shadow-2xl border border-yellow-500/30 max-w-2xl w-full p-8 relative animate-bounce-in transform transition-all duration-500 ease-in-out"
                >
                    <!-- Close Button -->
                    <div v-if="alert.is_dismissible" class="absolute top-4 right-4">
                        <button
                            @click="dismissAlert(alert)"
                            class="text-gray-400 hover:text-white transition-colors duration-300 group"
                        >
                            <X class="w-8 h-8 group-hover:rotate-90 transition-transform" />
                        </button>
                    </div>

                    <div class="flex flex-col items-center space-y-6">
                        <!-- Icon -->
                        <div class="relative">
                            <component
                                :is="getAlertIcon(alert)"
                                class="w-24 h-24 text-yellow-400 animate-pulse"
                                strokeWidth="1.5"
                            />
                            <div
                                class="absolute inset-0 bg-yellow-500/30 rounded-full animate-ping-slow opacity-75"
                            ></div>
                        </div>

                        <!-- Content -->
                        <div class="text-center space-y-4">
                            <h2 class="text-4xl font-bold text-white tracking-tight">
                                {{ alert.title }}
                            </h2>
                            <!-- <div
                                 class="text-xl text-gray-300"
                                 v-html="alert.html_content"
                            ></div> -->
                            <MarkdownRenderer :content="alert.html_content" />
                        </div>

                        <!-- Additional Info Box -->
                        <div v-if="alert.scheduled_at" class="bg-dark-500 rounded-xl p-4 border border-yellow-500/20 shadow-inner">
                            <div class="flex items-center space-x-4">
                                <Clock class="w-8 h-8 text-yellow-400" />
                                <div>
                                    <p class="text-lg font-semibold text-white">
                                        Scheduled Time
                                    </p>
                                    <p class="text-gray-400">
                                        {{ formatDateTime(alert.scheduled_at) }}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- Action Button -->
                        <div class="flex space-x-4 w-full justify-center">
                            <button
                                v-if="alert.is_dismissible"
                                @click="dismissAlert(alert)"
                                class="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition-colors duration-300 flex items-center space-x-2"
                            >
                                <component
                                    :is="getButtonIcon(alert)"
                                    class="w-5 h-5"
                                />
                                <span>{{ alert.button_text }}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Toast Alert (non-full screen) -->
            <div
                v-else
                class="fixed inset-x-0 top-4 z-[9999] flex justify-center px-4"
            >
                <div class="max-w-2xl w-full">
                    <div
                        class="bg-dark-400 rounded-lg shadow-lg border border-yellow-500/30 p-4 relative animate-bounce-in"
                    >
                        <!-- Rest of your existing toast alert design -->
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
@keyframes bounce-in {
    0% {
        opacity: 0;
        transform: scale(0.3) translateY(50px);
    }
    50% {
        opacity: 0.9;
        transform: scale(1.05);
    }
    70% {
        opacity: 1;
        transform: scale(0.95);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
}

@keyframes ping-slow {
    0%, 100% {
        transform: scale(1);
        opacity: 0.75;
    }
    50% {
        transform: scale(1.2);
        opacity: 0.5;
    }
}

.animate-bounce-in {
    animation: bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.animate-ping-slow {
    animation: ping-slow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.alert-enter-active,
.alert-leave-active {
    transition: all 0.5s ease;
}

.alert-enter-from,
.alert-leave-to {
    opacity: 0;
    transform: translateY(-30px);
}
</style>
