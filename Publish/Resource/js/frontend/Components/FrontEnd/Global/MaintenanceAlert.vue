<template>
    <div
        v-if="isVisible"
        class="fixed inset-0 z-[9999] bg-dark-500/90 backdrop-blur-md flex items-center justify-center p-4 overflow-hidden"
    >
        <div
            class="bg-dark-400 rounded-2xl shadow-2xl border border-yellow-500/30 max-w-2xl w-full p-8 relative animate-bounce-in transform transition-all duration-500 ease-in-out"
        >
            <div class="absolute top-4 right-4">
                <button
                    @click="dismissAlert"
                    class="text-gray-400 hover:text-white transition-colors duration-300 group"
                >
                    <X class="w-8 h-8 group-hover:rotate-90 transition-transform" />
                </button>
            </div>

            <div class="flex flex-col items-center space-y-6">
                <div class="relative">
                    <AlertTriangle
                        class="w-24 h-24 text-yellow-400 animate-pulse"
                        strokeWidth="1.5"
                    />
                    <div
                        class="absolute inset-0 bg-yellow-500/30 rounded-full animate-ping-slow opacity-75"
                    ></div>
                </div>

                <div class="text-center space-y-4">
                    <h2 class="text-4xl font-bold text-white tracking-tight">
                        Maintenance Ahead
                    </h2>
                    <p class="text-xl text-gray-300">
                        {{ props.maintenanceInfo.reason }}
                    </p>
                </div>

                <div class="bg-dark-500 rounded-xl p-4 border border-yellow-500/20 shadow-inner">
                    <div class="flex items-center space-x-4">
                        <Clock class="w-8 h-8 text-yellow-400" />
                        <div>
                            <p class="text-lg font-semibold text-white">
                                Scheduled Maintenance
                            </p>
                            <p class="text-gray-400">
                                {{ props.maintenanceInfo.scheduledAt }}
                            </p>
                        </div>
                    </div>
                </div>

                <div class="flex space-x-4 w-full justify-center">
                    <button
                        @click="dismissAlert"
                        class="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition-colors duration-300 flex items-center space-x-2"
                    >
                        <Eye class="w-5 h-5" />
                        <span>I Understand</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import {
    AlertTriangle,
    X,
    Clock,
    Eye
} from 'lucide-vue-next';

const props = defineProps({
    maintenanceInfo: {
        type: Object,
        required: true
    }
});

// Visibility state
const isVisible = ref(true);

// Method to dismiss the alert
const dismissAlert = () => {
    // Store dismissal in localStorage to prevent showing again
    localStorage.setItem('maintenance-alert-dismissed', JSON.stringify({
        reason: props.maintenanceInfo.reason,
        scheduledAt: props.maintenanceInfo.scheduledAt,
        dismissedAt: new Date().toISOString()
    }));

    // Hide the alert with a fade-out animation
    isVisible.value = false;
};

// Check if alert should be shown when component mounts
onMounted(() => {
    // Check localStorage to see if this maintenance alert has been dismissed
    const dismissedAlert = localStorage.getItem('maintenance-alert-dismissed');

    if (dismissedAlert) {
        const parsedDismissedAlert = JSON.parse(dismissedAlert);
        // You can add logic here to determine if the alert should be shown again
        // For example, only hide if it's the same maintenance event
        if (parsedDismissedAlert.reason === props.maintenanceInfo.reason &&
            parsedDismissedAlert.scheduledAt === props.maintenanceInfo.scheduledAt) {
            isVisible.value = false;
        }
    }
});
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
</style>
