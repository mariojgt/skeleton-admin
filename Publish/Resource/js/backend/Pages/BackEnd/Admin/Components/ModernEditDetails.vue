<!-- ModernEditDetails.vue Component -->
<template>
    <div class="space-y-8">
        <!-- Profile Header -->
        <div class="text-center">
            <div class="relative inline-block">
                <div class="w-24 h-24 rounded-full overflow-hidden ring-4 ring-slate-200 dark:ring-slate-700 shadow-xl">
                    <img :src="adminInformation.avatar || '/default-avatar.png'" :alt="adminInformation.first_name"
                        class="w-full h-full object-cover" />
                </div>
                <button
                    class="absolute bottom-0 right-0 w-8 h-8 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg transition-colors duration-200">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </button>
            </div>
            <h3 class="mt-4 text-lg font-semibold text-slate-900 dark:text-slate-100">
                {{ adminInformation.first_name }} {{ adminInformation.last_name }}
            </h3>
            <p class="text-sm text-slate-600 dark:text-slate-400">{{ adminInformation.email }}</p>
        </div>

        <!-- Form -->
        <form @submit.prevent="submitForm" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- First Name -->
                <div>
                    <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        First Name
                    </label>
                    <input v-model="adminInformation.first_name" type="text" placeholder="Enter first name"
                        class="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-500 transition-colors duration-200" />
                </div>

                <!-- Last Name -->
                <div>
                    <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Last Name
                    </label>
                    <input v-model="adminInformation.last_name" type="text" placeholder="Enter last name"
                        class="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-500 transition-colors duration-200" />
                </div>
            </div>

            <!-- Email -->
            <div>
                <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Email Address
                </label>
                <input v-model="adminInformation.email" type="email" placeholder="Enter email address"
                    class="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-500 transition-colors duration-200" />
            </div>
            <!-- Role -->
            <div v-if="adminInformation.role?.id">
                <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Role
                </label>
                <select v-model="adminInformation.role.id"
                    class="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 transition-colors duration-200">
                    <option value="">Select a role</option>

                    <option v-for="(item, index) in roles" :key="index"
                        :value="index">
                        {{ item }}
                    </option>
                </select>
            </div>

            <!-- Submit Button -->
            <div class="flex justify-end pt-6">
                <button type="submit" :disabled="isSubmitting"
                    class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105">
                    <svg v-if="isSubmitting" class="w-4 h-4 mr-2 animate-spin" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <svg v-else class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {{ isSubmitting ? 'Updating...' : 'Update Profile' }}
                </button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { router } from '@inertiajs/vue3'

// Props
const props = defineProps({
    adminInfo: {
        type: Object,
        default: () => ({})
    },
    roles: {
        type: Object,
        default: () => ({})
    }
})

// State
const adminInformation = ref({})
const isSubmitting = ref(false)

// Lifecycle
onMounted(() => {
    adminInformation.value = { ...props.adminInfo }
})

// Methods
const submitForm = async () => {
    isSubmitting.value = true

    try {
        const form = {
            first_name: adminInformation.value.first_name,
            last_name: adminInformation.value.last_name,
            email: adminInformation.value.email,
            role: adminInformation.value.role.id
        }

        await router.patch(route('admin.update', adminInformation.value.id), form)
    } finally {
        isSubmitting.value = false
    }
}
</script>
