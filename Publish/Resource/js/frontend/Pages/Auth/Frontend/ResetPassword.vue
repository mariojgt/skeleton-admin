<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
    <Head :title="title" />

    <!-- Enhanced Background Pattern -->
    <div class="absolute inset-0 opacity-40">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.4),transparent_50%)]"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.3),transparent_50%)]"></div>
      <div class="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,#000_0deg,#7877c6_180deg,#10b981_270deg,#000_360deg)] opacity-20"></div>
    </div>

    <!-- Floating Elements -->
    <div class="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-emerald-400/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
    <div class="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

    <div class="relative z-10 w-full max-w-lg">
      <div class="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 shadow-2xl">

        <!-- Header -->
        <div class="text-center mb-8">
          <div class="w-20 h-20 bg-gradient-to-br from-emerald-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
            <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h1 class="text-3xl font-bold text-white mb-3 bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
            Reset Password
          </h1>
          <p class="text-slate-300 text-lg">Create a new secure password for your account</p>
        </div>

        <!-- Reset Password Form -->
        <form @submit.prevent="handlePasswordReset" class="space-y-6">

          <!-- Email Field (readonly) -->
          <div class="space-y-3">
            <label class="text-sm font-semibold text-slate-200 tracking-wide">Email Address</label>
            <div class="relative">
              <input
                v-model="form.email"
                type="email"
                class="w-full px-4 py-4 bg-white/5 border-2 border-white/10 rounded-xl text-slate-300 placeholder-slate-500 cursor-not-allowed opacity-70"
                placeholder="Email address"
                readonly
                tabindex="-1"
              />
              <div class="absolute right-4 top-1/2 -translate-y-1/2">
                <svg class="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
              </div>
            </div>
            <Transition name="slide-down">
              <p v-if="errors.email" class="text-sm text-red-300 font-medium">{{ errors.email }}</p>
            </Transition>
          </div>

          <!-- New Password Field -->
          <div class="space-y-3">
            <label class="text-sm font-semibold text-slate-200 tracking-wide">
              New Password
              <span class="text-red-400 ml-1">*</span>
            </label>
            <div class="relative">
              <input
                v-model="form.password"
                :type="showPassword ? 'text' : 'password'"
                :class="[
                  'w-full px-4 py-4 bg-white/5 border-2 rounded-xl text-white placeholder-slate-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400 pr-12',
                  errors.password ? 'border-red-400/60 bg-red-500/10' : 'border-white/20 hover:border-white/30'
                ]"
                placeholder="Enter your new password"
                autocomplete="new-password"
                required
                minlength="8"
              />
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10"
              >
                <svg v-if="showPassword" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                </svg>
                <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </button>
            </div>
            <Transition name="slide-down">
              <p v-if="errors.password" class="text-sm text-red-300 font-medium">{{ errors.password }}</p>
            </Transition>
            <p class="text-xs text-slate-400">Password must be at least 8 characters long</p>

            <!-- Password Strength Indicator -->
            <Transition name="slide-down">
              <div v-if="form.password" class="space-y-4 bg-white/5 border border-white/10 rounded-xl p-4">
                <div class="flex items-center gap-3">
                  <span class="text-sm font-medium text-slate-300">Strength:</span>
                  <div class="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      :class="[
                        'h-full transition-all duration-500',
                        passwordStrengthClass === 'weak' ? 'bg-red-400' :
                        passwordStrengthClass === 'medium' ? 'bg-yellow-400' : 'bg-emerald-400'
                      ]"
                      :style="{ width: passwordStrengthPercent + '%' }"
                    ></div>
                  </div>
                  <span :class="[
                    'text-sm font-semibold',
                    passwordStrengthClass === 'weak' ? 'text-red-300' :
                    passwordStrengthClass === 'medium' ? 'text-yellow-300' : 'text-emerald-300'
                  ]">
                    {{ passwordStrengthText }}
                  </span>
                </div>

                <!-- Password Requirements -->
                <div class="grid grid-cols-2 gap-2 text-xs">
                  <div class="flex items-center gap-2" :class="{ 'text-emerald-300': hasMinLength, 'text-slate-400': !hasMinLength }">
                    <span>{{ hasMinLength ? '✅' : '❌' }}</span>
                    <span>8+ characters</span>
                  </div>
                  <div class="flex items-center gap-2" :class="{ 'text-emerald-300': hasLowercase, 'text-slate-400': !hasLowercase }">
                    <span>{{ hasLowercase ? '✅' : '❌' }}</span>
                    <span>Lowercase letter</span>
                  </div>
                  <div class="flex items-center gap-2" :class="{ 'text-emerald-300': hasUppercase, 'text-slate-400': !hasUppercase }">
                    <span>{{ hasUppercase ? '✅' : '❌' }}</span>
                    <span>Uppercase letter</span>
                  </div>
                  <div class="flex items-center gap-2" :class="{ 'text-emerald-300': hasNumber, 'text-slate-400': !hasNumber }">
                    <span>{{ hasNumber ? '✅' : '❌' }}</span>
                    <span>Number</span>
                  </div>
                  <div class="flex items-center gap-2" :class="{ 'text-emerald-300': hasSpecialChar, 'text-slate-400': !hasSpecialChar }">
                    <span>{{ hasSpecialChar ? '✅' : '❌' }}</span>
                    <span>Special character</span>
                  </div>
                </div>
              </div>
            </Transition>
          </div>

          <!-- Confirm Password Field -->
          <div class="space-y-3">
            <label class="text-sm font-semibold text-slate-200 tracking-wide">
              Confirm New Password
              <span class="text-red-400 ml-1">*</span>
            </label>
            <div class="relative">
              <input
                v-model="form.password_confirmation"
                :type="showConfirmPassword ? 'text' : 'password'"
                :class="[
                  'w-full px-4 py-4 bg-white/5 border-2 rounded-xl text-white placeholder-slate-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400 pr-12',
                  errors.password_confirmation || passwordMismatch ? 'border-red-400/60 bg-red-500/10' :
                  passwordsMatch ? 'border-emerald-400/60 bg-emerald-500/10' : 'border-white/20 hover:border-white/30'
                ]"
                placeholder="Confirm your new password"
                autocomplete="new-password"
                required
              />
              <button
                type="button"
                @click="showConfirmPassword = !showConfirmPassword"
                class="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10"
              >
                <svg v-if="showConfirmPassword" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                </svg>
                <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </button>
            </div>
            <Transition name="slide-down">
              <p v-if="errors.password_confirmation" class="text-sm text-red-300 font-medium">{{ errors.password_confirmation }}</p>
              <p v-else-if="passwordMismatch && form.password_confirmation" class="text-sm text-red-300 font-medium">Passwords do not match</p>
              <p v-else-if="passwordsMatch && form.password_confirmation" class="text-sm text-emerald-300 font-medium">Passwords match ✅</p>
            </Transition>
          </div>

          <!-- Security Notice -->
          <div class="bg-emerald-500/10 border border-emerald-400/30 rounded-xl p-5 backdrop-blur-sm">
            <div class="flex gap-4">
              <div class="flex-shrink-0">
                <svg class="w-6 h-6 text-emerald-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.5-2A11.95 11.95 0 0012 2.5a11.95 11.95 0 00-8.5 3.5c0 7.18 9 13 9 13s9-5.82 9-13z" />
                </svg>
              </div>
              <div>
                <h3 class="text-sm font-semibold text-emerald-300 mb-2">Security Reminder</h3>
                <p class="text-sm text-slate-300 leading-relaxed">
                  Choose a strong, unique password that you haven't used elsewhere. Your password will be encrypted and stored securely using industry-standard practices.
                </p>
              </div>
            </div>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            :disabled="!canSubmit || processing"
            class="w-full bg-gradient-to-r from-emerald-500 to-purple-500 hover:from-emerald-600 hover:to-purple-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-emerald-400/30"
          >
            <span v-if="processing" class="flex items-center justify-center">
              <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Updating password...
            </span>
            <span v-else>Update Password</span>
          </button>
        </form>

        <!-- Footer Links -->
        <div class="mt-8 text-center text-sm text-slate-300">
          Remember your password?
          <Link :href="route('login')" class="text-blue-400 hover:text-blue-300 transition-colors font-semibold hover:underline ml-1">
            Back to sign in
          </Link>
        </div>
      </div>

      <!-- Security Tips -->
      <div class="mt-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
        <h3 class="text-xl font-bold text-white mb-6 text-center">🔐 Password Security Tips</h3>
        <div class="grid grid-cols-1 gap-4">
          <div class="flex items-center gap-4 group">
            <div class="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <span class="text-emerald-400 text-lg">🎯</span>
            </div>
            <div>
              <p class="text-sm font-semibold text-white">Use a unique password</p>
              <p class="text-xs text-slate-400">Never reuse passwords from other accounts</p>
            </div>
          </div>
          <div class="flex items-center gap-4 group">
            <div class="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <span class="text-blue-400 text-lg">🔤</span>
            </div>
            <div>
              <p class="text-sm font-semibold text-white">Mix character types</p>
              <p class="text-xs text-slate-400">Include uppercase, lowercase, numbers & symbols</p>
            </div>
          </div>
          <div class="flex items-center gap-4 group">
            <div class="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <span class="text-purple-400 text-lg">💭</span>
            </div>
            <div>
              <p class="text-sm font-semibold text-white">Consider a password manager</p>
              <p class="text-xs text-slate-400">Generate and store secure passwords safely</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { Head, Link, useForm } from '@inertiajs/vue3'

const props = defineProps({
  title: {
    type: String,
    default: 'Reset Password - Skeleton Admin'
  },
  errors: {
    type: Object,
    default: () => ({})
  },
  token: {
    type: String,
    required: true
  },
  email: {
    type: String,
    default: ''
  }
})

const processing = ref(false)
const showPassword = ref(false)
const showConfirmPassword = ref(false)

const form = useForm({
  token: props.token,
  email: props.email,
  password: '',
  password_confirmation: ''
})

// Password validation computed properties
const hasMinLength = computed(() => form.password.length >= 8)
const hasLowercase = computed(() => /[a-z]/.test(form.password))
const hasUppercase = computed(() => /[A-Z]/.test(form.password))
const hasNumber = computed(() => /[0-9]/.test(form.password))
const hasSpecialChar = computed(() => /[^A-Za-z0-9]/.test(form.password))

const passwordMismatch = computed(() => {
  return form.password && form.password_confirmation &&
         form.password !== form.password_confirmation
})

const passwordsMatch = computed(() => {
  return form.password && form.password_confirmation &&
         form.password === form.password_confirmation
})

// Password strength calculation
const passwordStrength = computed(() => {
  if (!form.password) return 0

  let score = 0

  // Length checks
  if (hasMinLength.value) score += 1
  if (form.password.length >= 12) score += 1

  // Character variety checks
  if (hasLowercase.value) score += 1
  if (hasUppercase.value) score += 1
  if (hasNumber.value) score += 1
  if (hasSpecialChar.value) score += 1

  return score
})

const passwordStrengthPercent = computed(() => {
  return (passwordStrength.value / 6) * 100
})

const passwordStrengthClass = computed(() => {
  const strength = passwordStrength.value
  if (strength <= 2) return 'weak'
  if (strength <= 4) return 'medium'
  return 'strong'
})

const passwordStrengthText = computed(() => {
  const strength = passwordStrength.value
  if (strength <= 2) return 'Weak'
  if (strength <= 4) return 'Medium'
  return 'Strong'
})

const canSubmit = computed(() => {
  return form.password &&
         form.password_confirmation &&
         passwordsMatch.value &&
         passwordStrength.value >= 3 && // Require at least medium strength
         !processing.value
})

const handlePasswordReset = () => {
  if (processing.value || !canSubmit.value) return

  processing.value = true

  form.post(route('password.change.user'), {
    preserveScroll: true,
    onFinish: () => {
      processing.value = false
    }
  })
}

// Set email from URL params if available
onMounted(() => {
  const urlParams = new URLSearchParams(window.location.search)
  const emailParam = urlParams.get('email')
  if (emailParam && !form.email) {
    form.email = emailParam
  }
})
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>
