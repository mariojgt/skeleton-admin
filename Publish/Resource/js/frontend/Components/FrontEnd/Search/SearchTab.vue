<template>
    <div class="bg-dark-500/90 backdrop-blur-sm border-b border-gray-800/50">
        <div class="flex items-center justify-between px-4 py-3 sm:px-6">
            <!-- Tabs Container -->
            <div class="flex items-center gap-2 sm:gap-6 overflow-x-auto hide-scrollbar">
                <!-- Search Tab -->
                <button
                    class="flex items-center gap-2 min-w-max px-3 py-2 rounded-lg transition-all duration-300 relative group"
                    :class="modelValue === 'search' ? 'text-white bg-dark-400' : 'text-gray-400 hover:text-gray-300'"
                    @click="updateActiveTab('search')"
                >
                    <Search class="w-4 h-4" />
                    <span class="text-sm font-medium">Search</span>
                    <div
                        class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left transition-transform duration-300 scale-x-0"
                        :class="{ 'scale-x-100': modelValue === 'search' }"
                    ></div>
                </button>

                <!-- Chat Tab -->
                <button
                    class="flex items-center gap-2 min-w-max px-3 py-2 rounded-lg transition-all duration-300 relative group"
                    :class="modelValue === 'chat' ? 'text-white bg-dark-400' : 'text-gray-400 hover:text-gray-300'"
                    @click="updateActiveTab('chat')"
                >
                    <MessageSquare class="w-4 h-4" />
                    <span class="text-sm font-medium">Chat with Bob</span>
                    <div
                        class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left transition-transform duration-300 scale-x-0"
                        :class="{ 'scale-x-100': modelValue === 'chat' }"
                    ></div>
                </button>

                <!-- Notifications Tab -->
                <button
                    class="flex items-center gap-2 min-w-max px-3 py-2 rounded-lg transition-all duration-300 relative group"
                    :class="modelValue === 'notifications' ? 'text-white bg-dark-400' : 'text-gray-400 hover:text-gray-300'"
                    @click="updateActiveTab('notifications')"
                >
                    <Bell class="w-4 h-4" />
                    <span class="text-sm font-medium">Notifications</span>
                    <div
                        class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left transition-transform duration-300 scale-x-0"
                        :class="{ 'scale-x-100': modelValue === 'notifications' }"
                    ></div>
                </button>
            </div>

            <!-- Close Button -->
            <button
                @click="$emit('close')"
                class="flex items-center justify-center w-8 h-8 rounded-lg bg-dark-400 text-gray-400 hover:text-white transition-colors duration-300"
            >
                <X class="w-5 h-5" />
            </button>
        </div>
    </div>
</template>

<script setup>
import { Search, MessageSquare, Bell, X } from 'lucide-vue-next';

const props = defineProps({
    modelValue: {
        type: String,
        default: 'search'
    }
});

const emit = defineEmits(['update:modelValue', 'close', 'tab-changed']);

const updateActiveTab = (tab) => {
    emit('update:modelValue', tab);
    emit('tab-changed', tab);
};
</script>

<style scoped>
.hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
.hide-scrollbar::-webkit-scrollbar {
    display: none;
}
</style>
