<template>
    <div class="space-y-8">
        <!-- Security Header -->
        <div class="text-center">
            <div
                class="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
            </div>
            <h3 class="mt-4 text-xl font-semibold text-slate-900 dark:text-slate-100">
                Update Password
            </h3>
            <p class="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                Ensure your account is using a long, random password to stay secure
            </p>
        </div>

        <!-- Password Strength Indicator -->
        <div v-if="password" class="bg-slate-50 dark:bg-slate-800 rounded-lg p-4">
            <div class="flex items-center justify-between mb-2">
                <span class="text-sm font-medium text-slate-700 dark:text-slate-300">Password Strength</span>
                <span class="text-sm font-medium" :class="passwordStrengthColor">{{ passwordStrengthText }}</span>
            </div>
            <div class="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                <div class="h-2 rounded-full transition-all duration-300"
                    :class="passwordStrengthColor.replace('text-', 'bg-')"
                    :style="{ width: passwordStrengthPercentage + '%' }"></div>
            </div>
            <div class="mt-3 space-y-2">
                <div class="flex items-center text-xs"
                    :class="password.length >= 8 ? 'text-green-600' : 'text-slate-500'">
                    <svg class="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    At least 8 characters
                </div>
                <div class="flex items-center text-xs"
                    :class="/[A-Z]/.test(password) ? 'text-green-600' : 'text-slate-500'">
                    <svg class="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    One uppercase letter
                </div>
                <div class="flex items-center text-xs"
                    :class="/[0-9]/.test(password) ? 'text-green-600' : 'text-slate-500'">
                    <svg class="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    One number
                </div>
                <div class="flex items-center text-xs"
                    :class="/[^A-Za-z0-9]/.test(password) ? 'text-green-600' : 'text-slate-500'">
                    <svg class="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    One special character
                </div>
            </div>
        </div>

        <!-- Form -->
        <form @submit.prevent="submitForm" class="space-y-6">
            <!-- Current Password (if updating own password) -->
            <div v-if="isOwnProfile">
                <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Current Password
                </label>
                <div class="relative">
                    <input v-model="currentPassword" :type="showCurrentPassword ? 'text' : 'password'"
                        placeholder="Enter your current password"
                        class="w-full px-4 py-3 pr-12 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-500 transition-colors duration-200"
                        required />
                    <button type="button" @click="showCurrentPassword = !showCurrentPassword"
                        class="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-slate-600">
                        <svg v-if="showCurrentPassword" class="w-5 h-5" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                        </svg>
                        <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                    </button>
                </div>
            </div>

            <!-- New Password -->
            <div>
                <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    New Password
                </label>
                <div class="relative">
                    <input v-model="password" :type="showPassword ? 'text' : 'password'"
                        placeholder="Enter new password"
                        class="w-full px-4 py-3 pr-12 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-500 transition-colors duration-200"
                        required />
                    <button type="button" @click="showPassword = !showPassword"
                        class="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-slate-600">
                        <svg v-if="showPassword" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                        </svg>
                        <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Confirm Password -->
            <div>
                <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Confirm New Password
                </label>
                <div class="relative">
                    <input v-model="password_confirmation" :type="showConfirmPassword ? 'text' : 'password'"
                        placeholder="Confirm your new password"
                        class="w-full px-4 py-3 pr-12 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-500 transition-colors duration-200"
                        :class="password && password_confirmation && password !== password_confirmation ? 'border-red-300 focus:ring-red-500' : ''"
                        required />
                    <button type="button" @click="showConfirmPassword = !showConfirmPassword"
                        class="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-slate-600">
                        <svg v-if="showConfirmPassword" class="w-5 h-5" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                        </svg>
                        <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                    </button>
                </div>
                <div v-if="password && password_confirmation && password !== password_confirmation"
                    class="mt-2 text-sm text-red-600">
                    Passwords do not match
                </div>
            </div>

            <!-- 2FA Code (if enabled) -->
            <div v-if="autenticatorInfo.is_enable"
                class="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                <div class="flex items-center mb-3">
                    <svg class="w-5 h-5 text-yellow-600 dark:text-yellow-400 mr-2" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span class="text-sm font-medium text-yellow-800 dark:text-yellow-200">Two-Factor Authentication
                        Required</span>
                </div>
                <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Authentication Code
                </label>
                <input v-model="code" type="text" placeholder="Enter your 6-digit code" maxlength="6"
                    class="w-full px-4 py-3 border border-yellow-300 dark:border-yellow-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-500 transition-colors duration-200"
                    required />
            </div>

            <!-- Submit Button -->
            <div class="flex justify-end pt-6">
                <button type="submit" :disabled="isSubmitting || !isFormValid"
                    class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-500 to-pink-600 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white hover:from-red-600 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105">
                    <svg v-if="isSubmitting" class="w-4 h-4 mr-2 animate-spin" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <svg v-else class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    {{ isSubmitting ? 'Updating...' : 'Update Password' }}
                </button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { router } from '@inertiajs/vue3'

// Props
const props = defineProps({
    adminInfo: {
        type: Object,
        default: () => ({})
    },
    autenticatorInfo: {
        type: Object,
        default: () => ({})
    }
})

// State
const currentPassword = ref('')
const password = ref('')
const password_confirmation = ref('')
const code = ref('')
const adminInformation = ref({})
const isSubmitting = ref(false)

// Password visibility toggles
const showCurrentPassword = ref(false)
const showPassword = ref(false)
const showConfirmPassword = ref(false)

// Computed
const isOwnProfile = computed(() => {
    // Add logic to determine if user is editing their own profile
    return true // For now, assume it's always own profile
})

const passwordStrength = computed(() => {
    if (!password.value) return 0

    let strength = 0
    if (password.value.length >= 8) strength += 25
    if (/[A-Z]/.test(password.value)) strength += 25
    if (/[0-9]/.test(password.value)) strength += 25
    if (/[^A-Za-z0-9]/.test(password.value)) strength += 25

    return strength
})

const passwordStrengthText = computed(() => {
    if (passwordStrength.value === 0) return 'Very Weak'
    if (passwordStrength.value <= 25) return 'Weak'
    if (passwordStrength.value <= 50) return 'Fair'
    if (passwordStrength.value <= 75) return 'Good'
    return 'Strong'
})

const passwordStrengthColor = computed(() => {
    if (passwordStrength.value === 0) return 'text-slate-400'
    if (passwordStrength.value <= 25) return 'text-red-500'
    if (passwordStrength.value <= 50) return 'text-yellow-500'
    if (passwordStrength.value <= 75) return 'text-blue-500'
    return 'text-green-500'
})

const passwordStrengthPercentage = computed(() => passwordStrength.value)

const isFormValid = computed(() => {
    if (!password.value || !password_confirmation.value) return false
    if (password.value !== password_confirmation.value) return false
    if (isOwnProfile.value && !currentPassword.value) return false
    if (props.autenticatorInfo.is_enable && !code.value) return false
    return true
})

// Lifecycle
onMounted(() => {
    adminInformation.value = { ...props.adminInfo }
})

// Methods
const submitForm = async () => {
    if (!isFormValid.value) return

    isSubmitting.value = true

    try {
        const form = {
            password: password.value,
            password_confirmation: password_confirmation.value,
            code: code.value
        }

        if (isOwnProfile.value) {
            form.current_password = currentPassword.value
        }

        await router.patch(route('admin.update-password', adminInformation.value.id), form)

        // Reset form on success
        currentPassword.value = ''
        password.value = ''
        password_confirmation.value = ''
        code.value = ''

    } finally {
        isSubmitting.value = false
    }
}
</script>
