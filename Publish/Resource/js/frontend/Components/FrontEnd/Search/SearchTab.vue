<template>
    <div class="bg-gray-900 border-b border-gray-800">
        <div class="flex items-center px-4 py-4 space-x-6">
            <!-- Search Tab -->
            <div
                class="relative flex items-center cursor-pointer"
                @click="updateActiveTab('search')"
            >
                <h2
                    class="text-lg font-medium transition-colors duration-150"
                    :class="
                        modelValue === 'search'
                            ? 'text-gray-200'
                            : 'text-gray-400 hover:text-gray-300'
                    "
                >
                    Search
                </h2>
                <div
                    v-if="modelValue === 'search'"
                    class="absolute -bottom-4 left-0 right-0 h-0.5 bg-blue-500"
                ></div>
            </div>

            <!-- Chat With Lary Tab -->
            <div
                class="relative flex items-center space-x-2 cursor-pointer group"
                @click="updateActiveTab('chat')"
            >
                <span class="text-gray-400 text-sm">//</span>
                <button
                    class="text-sm transition-colors duration-150"
                    :class="
                        modelValue === 'chat'
                            ? 'text-gray-200'
                            : 'text-gray-400 group-hover:text-gray-300'
                    "
                >
                    Chat with Bob
                </button>
                <div
                    v-if="modelValue === 'chat'"
                    class="absolute -bottom-4 left-0 right-0 h-0.5 bg-blue-500"
                ></div>
            </div>

            <!-- Notifications Tab -->
            <div
                class="relative flex items-center space-x-2 cursor-pointer group"
                @click="updateActiveTab('notifications')"
            >
                <span class="text-gray-400 text-sm">//</span>
                <button
                    class="text-sm transition-colors duration-150"
                    :class="
                        modelValue === 'notifications'
                            ? 'text-gray-200'
                            : 'text-gray-400 group-hover:text-gray-300'
                    "
                >
                    Notifications
                </button>
                <div
                    v-if="modelValue === 'notifications'"
                    class="absolute -bottom-4 left-0 right-0 h-0.5 bg-blue-500"
                ></div>
            </div>

            <!-- Close Button -->
            <div class="flex items-center justify-between">
                <button
                    @click="$emit('close')"
                    class="text-gray-400 hover:text-gray-200"
                >
                    <span class="sr-only">Close panel</span>
                    <svg
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';

// Props
const props = defineProps({
    modelValue: {
        type: String,
        default: 'search'
    },
    endpoint: {
        type: String,
        default: ''
    }
});

// Emits
const emit = defineEmits(['update:modelValue', 'close', 'tab-changed']);

// Method to update active tab
const updateActiveTab = (tab) => {
    emit('update:modelValue', tab);
    emit('tab-changed', tab);
};

// Optional: Watch for programmatic changes
// Uncomment if you need to perform actions when tab changes from outside
/*
watch(() => props.modelValue, (newTab) => {
    // Perform any actions needed when tab changes
    console.log('Tab changed to:', newTab);
});
*/
</script>
