<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
    <Head :title="title" />

    <!-- Background Pattern -->
    <div class="fixed inset-0 opacity-30">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent)]"></div>
      <div class="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,#000_0deg,#7877c6_180deg,#000_360deg)] opacity-20"></div>
    </div>

    <div class="relative z-10 w-full max-w-md">
      <div class="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">

        <!-- Header -->
        <div class="text-center mb-8">
          <div class="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h1 class="text-2xl font-semibold text-white mb-2">Forgot password?</h1>
          <p class="text-slate-400">No worries! Enter your email and we'll send you a reset link</p>
        </div>

        <!-- Reset Form -->
        <form @submit.prevent="handleReset" class="space-y-6">

          <!-- Email Field -->
          <div class="space-y-2">
            <label class="text-sm font-medium text-slate-300">Email address</label>
            <div class="relative">
              <input
                v-model="form.email"
                type="email"
                :class="[
                  'w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-slate-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500',
                  errors.email ? 'border-red-500/50 bg-red-500/5' : 'border-white/10 hover:border-white/20'
                ]"
                placeholder="Enter your email address"
                autocomplete="email"
              />
              <div class="absolute right-3 top-1/2 -translate-y-1/2">
                <svg class="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
              </div>
            </div>
            <Transition name="slide-down">
              <p v-if="errors.email" class="text-sm text-red-400">{{ errors.email }}</p>
            </Transition>
          </div>

          <!-- Info Card -->
          <div class="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
            <div class="flex gap-3">
              <div class="flex-shrink-0">
                <svg class="w-5 h-5 text-blue-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 class="text-sm font-medium text-blue-300 mb-1">What happens next?</h3>
                <p class="text-sm text-slate-400 leading-relaxed">
                  We'll send a secure link to your email that you can use to reset your password.
                  The link will expire in 60 minutes for security.
                </p>
              </div>
            </div>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            :disabled="processing || !canSubmit"
            class="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          >
            <span v-if="processing" class="flex items-center justify-center">
              <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending link...
            </span>
            <span v-else>Send reset link</span>
          </button>
        </form>

        <!-- Divider -->
        <div class="flex items-center my-6">
          <div class="flex-1 border-t border-white/10"></div>
          <span class="px-4 text-slate-400 text-sm">or</span>
          <div class="flex-1 border-t border-white/10"></div>
        </div>

        <!-- Footer Links -->
        <div class="space-y-3 text-center text-sm">
          <div class="text-slate-400">
            Remember your password?
            <Link :href="route('login')" class="text-blue-400 hover:text-blue-300 transition-colors font-medium">
              Back to sign in
            </Link>
          </div>
          <div class="text-slate-400">
            Don't have an account?
            <Link :href="route('register.user.form')" class="text-emerald-400 hover:text-emerald-300 transition-colors font-medium">
              Create account
            </Link>
          </div>
        </div>
      </div>

      <!-- Security Features -->
      <div class="mt-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
        <h3 class="text-lg font-semibold text-white mb-4 text-center">Secure reset process</h3>
        <div class="grid grid-cols-3 gap-4 text-center">
          <div class="space-y-2">
            <div class="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center mx-auto">
              <svg class="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div>
              <p class="text-sm font-medium text-white">Encrypted</p>
              <p class="text-xs text-slate-400">Secure tokens</p>
            </div>
          </div>
          <div class="space-y-2">
            <div class="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto">
              <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p class="text-sm font-medium text-white">Time-limited</p>
              <p class="text-xs text-slate-400">60 min expiry</p>
            </div>
          </div>
          <div class="space-y-2">
            <div class="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto">
              <svg class="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p class="text-sm font-medium text-white">Verified</p>
              <p class="text-xs text-slate-400">Email validation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { Head, Link, useForm } from '@inertiajs/vue3'

defineProps({
  title: {
    type: String,
    default: 'Forgot Password'
  },
  errors: {
    type: Object,
    default: () => ({})
  }
})

const form = useForm({
  email: ''
})

const canSubmit = computed(() => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return form.email && emailRegex.test(form.email)
})

const handleReset = () => {
  form.post(route('password-reset.user'))
}
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
