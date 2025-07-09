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
    <div class="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-emerald-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
    <div class="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

    <div class="relative z-10 w-full max-w-md">
      <div class="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 shadow-2xl">

        <!-- Header -->
        <div class="text-center mb-8">
          <div class="w-20 h-20 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
            <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h1 class="text-3xl font-bold text-white mb-3 bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
            Welcome back
          </h1>
          <p class="text-slate-300 text-lg">Sign in to your Skeleton Admin account</p>
        </div>

        <!-- Login Form -->
        <form @submit.prevent="handleLogin" class="space-y-6">

          <!-- Email Field -->
          <div class="space-y-3">
            <label class="text-sm font-semibold text-slate-200 tracking-wide">Email Address</label>
            <div class="relative group">
              <input
                v-model="form.email"
                type="email"
                :class="[
                  'w-full px-4 py-4 bg-white/5 border-2 rounded-xl text-white placeholder-slate-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400 group-hover:bg-white/10',
                  errors.email ? 'border-red-400/60 bg-red-500/10' : 'border-white/20 hover:border-white/30'
                ]"
                placeholder="Enter your email address"
                autocomplete="email"
              />
              <div class="absolute right-4 top-1/2 -translate-y-1/2">
                <svg class="w-5 h-5 text-slate-400 group-hover:text-slate-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
              </div>
            </div>
            <Transition name="slide-down">
              <p v-if="errors.email" class="text-sm text-red-300 font-medium">{{ errors.email }}</p>
            </Transition>
          </div>

          <!-- Password Field -->
          <div class="space-y-3">
            <label class="text-sm font-semibold text-slate-200 tracking-wide">Password</label>
            <div class="relative group">
              <input
                v-model="form.password"
                :type="showPassword ? 'text' : 'password'"
                :class="[
                  'w-full px-4 py-4 bg-white/5 border-2 rounded-xl text-white placeholder-slate-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400 pr-12 group-hover:bg-white/10',
                  errors.password ? 'border-red-400/60 bg-red-500/10' : 'border-white/20 hover:border-white/30'
                ]"
                placeholder="Enter your password"
                autocomplete="current-password"
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
          </div>

          <!-- Remember Me & Forgot Password -->
          <div class="flex items-center justify-between">
            <label class="flex items-center cursor-pointer group">
              <input
                v-model="form.remember"
                type="checkbox"
                class="w-4 h-4 bg-white/10 border-2 border-white/30 rounded text-emerald-500 focus:ring-emerald-400/50 focus:ring-2 transition-all"
              />
              <span class="ml-3 text-sm text-slate-300 group-hover:text-white transition-colors">Remember me</span>
            </label>
            <Link :href="route('forgot-password')" class="text-sm text-emerald-400 hover:text-emerald-300 transition-colors font-medium hover:underline">
              Forgot password?
            </Link>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            :disabled="processing || !canSubmit"
            class="w-full bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-emerald-400/30"
          >
            <span v-if="processing" class="flex items-center justify-center">
              <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Signing in...
            </span>
            <span v-else>Sign in to Dashboard</span>
          </button>
        </form>

        <!-- Divider -->
        <div class="flex items-center my-8">
          <div class="flex-1 border-t border-white/20"></div>
          <span class="px-6 text-slate-400 text-sm font-medium">OR</span>
          <div class="flex-1 border-t border-white/20"></div>
        </div>

        <!-- Magic Link -->
        <form @submit.prevent="sendMagicLink" class="mb-6">
          <div class="flex gap-3">
            <input
              v-model="magicLinkForm.email"
              type="email"
              class="flex-1 px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400 transition-all"
              placeholder="Email for magic link"
            />
            <button
              type="submit"
              :disabled="magicLinkForm.processing || !magicLinkForm.email"
              class="px-6 py-3 bg-blue-500/30 hover:bg-blue-500/40 disabled:opacity-50 text-blue-300 text-sm font-medium rounded-lg transition-all border border-blue-400/30 hover:border-blue-400/50"
            >
              Send Link
            </button>
          </div>
        </form>

        <!-- Footer -->
        <div class="text-center text-sm text-slate-300">
          Don't have an account?
          <Link :href="route('register.user.form')" class="text-emerald-400 hover:text-emerald-300 transition-colors font-semibold hover:underline ml-1">
            Create account
          </Link>
        </div>
      </div>

      <!-- Features -->
      <div class="mt-8 grid grid-cols-3 gap-4">
        <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center group hover:bg-white/10 transition-all">
          <div class="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
            <svg class="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <p class="text-sm text-slate-200 font-semibold">Secure</p>
          <p class="text-xs text-slate-400">Enterprise-grade security</p>
        </div>
        <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center group hover:bg-white/10 transition-all">
          <div class="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
            <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <p class="text-sm text-slate-200 font-semibold">Fast</p>
          <p class="text-xs text-slate-400">Lightning performance</p>
        </div>
        <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center group hover:bg-white/10 transition-all">
          <div class="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
            <svg class="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p class="text-sm text-slate-200 font-semibold">Reliable</p>
          <p class="text-xs text-slate-400">99.9% uptime</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Head, Link, useForm } from '@inertiajs/vue3'

defineProps({
  title: {
    type: String,
    default: 'Sign In - Skeleton Admin'
  },
  errors: {
    type: Object,
    default: () => ({})
  }
})

const showPassword = ref(false)

const form = useForm({
  email: '',
  password: '',
  remember: false
})

const magicLinkForm = useForm({
  email: ''
})

const canSubmit = computed(() => {
  return form.email && form.password
})

const handleLogin = () => {
  form.post(route('login.user'), {
    onFinish: () => form.reset('password')
  })
}

const sendMagicLink = () => {
  magicLinkForm.post(route('skeleton.login.magic'), {
    onSuccess: () => magicLinkForm.reset()
  })
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

/* Custom checkbox styling */
input[type="checkbox"] {
  appearance: none;
  -webkit-appearance: none;
}

input[type="checkbox"]:checked {
  background: linear-gradient(135deg, #10b981, #3b82f6);
  border-color: #10b981;
}

input[type="checkbox"]:checked::after {
  content: '✓';
  display: block;
  text-align: center;
  color: white;
  font-size: 12px;
  font-weight: bold;
  line-height: 14px;
}
</style>
