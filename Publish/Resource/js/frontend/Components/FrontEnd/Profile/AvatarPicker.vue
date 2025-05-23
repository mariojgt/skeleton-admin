<template>
    <div class="fixed inset-0 bg-dark-900/80 backdrop-blur-sm flex items-center justify-center z-50" v-if="isOpen">
        <div
            class="bg-dark-500/90 backdrop-blur-sm rounded-xl border border-gray-800/50 w-full max-w-xl max-h-[80vh] overflow-hidden">
            <!-- Header Section -->
            <div class="relative p-4 text-center border-b border-gray-800/50">
                <div class="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
                <h2 class="text-xl font-bold text-white">Choose Avatar</h2>
                <button @click="closeModal"
                    class="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
                    <X class="w-5 h-5" />
                </button>
            </div>

            <!-- Search Section -->
            <div class="p-4 border-b border-gray-800/50">
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search class="w-5 h-5 text-gray-400" />
                    </div>
                    <input v-model="searchQuery" type="text" placeholder="Search avatars..."
                        class="w-full pl-10 pr-4 py-2 bg-dark-400/50 border border-gray-800/50 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300" />
                </div>
            </div>

            <!-- Avatars Grid -->
            <div class="p-4 overflow-y-auto max-h-[60vh]">
                <div v-if="isLoading" class="flex justify-center items-center py-10">
                    <div class="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
                </div>

                <div v-else-if="filteredAvatars.length === 0" class="text-center py-10 text-gray-400">
                    No avatars found matching your search
                </div>

                <div v-else class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                    <div v-for="avatar in filteredAvatars" :key="avatar.id" @click="selectAvatar(avatar.path)"
                        class="group relative cursor-pointer">
                        <div class="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-0 blur transition-opacity duration-300 group-hover:opacity-75"
                            :class="{ 'opacity-75': selectedAvatar === avatar.path }"></div>

                        <div class="relative rounded-lg overflow-hidden border-2 border-dark-400 aspect-square transition-transform duration-300 group-hover:scale-105"
                            :class="{ 'border-blue-500': selectedAvatar === avatar.path }">
                            <img :src="avatar.path" :alt="avatar.name" class="w-full h-full object-cover" />

                            <div class="absolute inset-0 bg-dark-500/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                :class="{ 'opacity-100': selectedAvatar === avatar.path }">
                                <Check v-if="selectedAvatar === avatar.path" class="w-8 h-8 text-blue-500" />
                                <Plus v-else class="w-6 h-6 text-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Action Buttons -->
            <div class="p-4 border-t border-gray-800/50 flex justify-end space-x-3">
                <button @click="closeModal"
                    class="px-4 py-2 bg-dark-400/70 hover:bg-dark-400 text-gray-300 font-medium rounded-lg transition-colors duration-300">
                    Cancel
                </button>

                <button @click="confirmSelection" :disabled="!selectedAvatar"
                    class="group relative flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg transition-all duration-300 hover:from-blue-600 hover:to-purple-600 disabled:opacity-50 disabled:cursor-not-allowed">
                    <!-- Shine Effect -->
                    <div
                        class="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine">
                    </div>
                    <Check class="w-5 h-5" />
                    <span>Apply</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, inject, watch } from 'vue';
import { Check, Plus, Search, X } from 'lucide-vue-next';
import axios from 'axios';
const route = inject('route');

const props = defineProps({
    isOpen: {
        type: Boolean,
        default: false
    },
    currentAvatar: {
        type: String,
        default: ''
    }
});

const emit = defineEmits(['close', 'select']);

const avatars = ref([]);
const isLoading = ref(true);
const searchQuery = ref('');
const selectedAvatar = ref('');

// Load initial avatars when modal opens
watch(() => props.isOpen, (newVal) => {
    if (newVal) {
        loadAvatars();
        selectedAvatar.value = props.currentAvatar;
    }
});

// Filter avatars based on search query
const filteredAvatars = computed(() => {
    if (!searchQuery.value) return avatars.value;
    const query = searchQuery.value.toLowerCase();
    return avatars.value.filter(avatar =>
        avatar.name.toLowerCase().includes(query)
    );
});

async function loadAvatars() {
    isLoading.value = true;
    try {
        const response = await axios.get(route('avatars.list'));
        avatars.value = response.data;
    } catch (error) {
        console.error('Failed to load avatars:', error);
    } finally {
        isLoading.value = false;
    }
}

function selectAvatar(path) {
    selectedAvatar.value = path;
}

function confirmSelection() {
    if (selectedAvatar.value) {
        emit('select', selectedAvatar.value);
        closeModal();
    }
}

function closeModal() {
    emit('close');
    searchQuery.value = '';
}
</script>
