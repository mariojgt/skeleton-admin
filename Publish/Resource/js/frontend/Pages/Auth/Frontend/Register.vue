<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
    <Head :title="title" />

    <!-- Background Pattern -->
    <div class="fixed inset-0 opacity-30">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent)]"></div>
      <div class="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,#000_0deg,#7877c6_180deg,#000_360deg)] opacity-20"></div>
    </div>

    <div class="relative z-10 w-full max-w-lg">
      <div class="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">

        <!-- Header -->
        <div class="text-center mb-8">
          <div class="w-16 h-16 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
          </div>
          <h1 class="text-2xl font-semibold text-white mb-2">Create account</h1>
          <p class="text-slate-400">Join us today and get started</p>
        </div>

        <!-- Registration Form -->
        <form @submit.prevent="handleRegister" class="space-y-6">

          <!-- Name Fields -->
          <div class="grid grid-cols-2 gap-4">
            <div class="space-y-2">
              <label class="text-sm font-medium text-slate-300">First Name</label>
              <input
                v-model="form.first_name"
                type="text"
                :class="[
                  'w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-slate-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500',
                  errors.first_name ? 'border-red-500/50 bg-red-500/5' : 'border-white/10 hover:border-white/20'
                ]"
                placeholder="John"
                autocomplete="given-name"
              />
              <Transition name="slide-down">
                <p v-if="errors.first_name" class="text-sm text-red-400">{{ errors.first_name }}</p>
              </Transition>
            </div>

            <div class="space-y-2">
              <label class="text-sm font-medium text-slate-300">Last Name</label>
              <input
                v-model="form.last_name"
                type="text"
                :class="[
                  'w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-slate-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500',
                  errors.last_name ? 'border-red-500/50 bg-red-500/5' : 'border-white/10 hover:border-white/20'
                ]"
                placeholder="Doe"
                autocomplete="family-name"
              />
              <Transition name="slide-down">
                <p v-if="errors.last_name" class="text-sm text-red-400">{{ errors.last_name }}</p>
              </Transition>
            </div>
          </div>

          <!-- Username Field -->
          <div class="space-y-2">
            <label class="text-sm font-medium text-slate-300">Username</label>
            <div class="relative">
              <input
                v-model="form.username"
                type="text"
                :class="[
                  'w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-slate-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500',
                  errors.username ? 'border-red-500/50 bg-red-500/5' : 'border-white/10 hover:border-white/20'
                ]"
                placeholder="johndoe"
                autocomplete="username"
              />
              <div class="absolute right-3 top-1/2 -translate-y-1/2">
                <svg class="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
            <Transition name="slide-down">
              <p v-if="errors.username" class="text-sm text-red-400">{{ errors.username }}</p>
            </Transition>
          </div>

          <!-- Email Field -->
          <div class="space-y-2">
            <label class="text-sm font-medium text-slate-300">Email</label>
            <div class="relative">
              <input
                v-model="form.email"
                type="email"
                :class="[
                  'w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-slate-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500',
                  errors.email ? 'border-red-500/50 bg-red-500/5' : 'border-white/10 hover:border-white/20'
                ]"
                placeholder="john@example.com"
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

          <!-- Password Field -->
          <div class="space-y-2">
            <label class="text-sm font-medium text-slate-300">Password</label>
            <div class="relative">
              <input
                v-model="form.password"
                :type="showPassword ? 'text' : 'password'"
                :class="[
                  'w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-slate-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 pr-12',
                  errors.password ? 'border-red-500/50 bg-red-500/5' : 'border-white/10 hover:border-white/20'
                ]"
                placeholder="Create a strong password"
                autocomplete="new-password"
              />
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
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

            <!-- Password Strength -->
            <Transition name="slide-down">
              <div v-if="form.password" class="space-y-2">
                <div class="flex items-center gap-2">
                  <div class="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      :class="[
                        'h-full transition-all duration-300',
                        passwordStrengthClass === 'weak' ? 'bg-red-500' :
                        passwordStrengthClass === 'medium' ? 'bg-yellow-500' : 'bg-emerald-500'
                      ]"
                      :style="{ width: passwordStrengthPercent + '%' }"
                    ></div>
                  </div>
                  <span :class="[
                    'text-xs font-medium',
                    passwordStrengthClass === 'weak' ? 'text-red-400' :
                    passwordStrengthClass === 'medium' ? 'text-yellow-400' : 'text-emerald-400'
                  ]">
                    {{ passwordStrengthText }}
                  </span>
                </div>
              </div>
            </Transition>

            <Transition name="slide-down">
              <p v-if="errors.password" class="text-sm text-red-400">{{ errors.password }}</p>
            </Transition>
          </div>

          <!-- Confirm Password Field -->
          <div class="space-y-2">
            <label class="text-sm font-medium text-slate-300">Confirm Password</label>
            <div class="relative">
              <input
                v-model="form.password_confirmation"
                :type="showConfirmPassword ? 'text' : 'password'"
                :class="[
                  'w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-slate-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 pr-12',
                  errors.password_confirmation || passwordMismatch ? 'border-red-500/50 bg-red-500/5' :
                  passwordsMatch ? 'border-emerald-500/50 bg-emerald-500/5' : 'border-white/10 hover:border-white/20'
                ]"
                placeholder="Confirm your password"
                autocomplete="new-password"
              />
              <button
                type="button"
                @click="showConfirmPassword = !showConfirmPassword"
                class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
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
              <p v-if="errors.password_confirmation" class="text-sm text-red-400">{{ errors.password_confirmation }}</p>
              <p v-else-if="passwordMismatch && form.password_confirmation" class="text-sm text-red-400">Passwords do not match</p>
              <p v-else-if="passwordsMatch && form.password_confirmation" class="text-sm text-emerald-400">Passwords match ✓</p>
            </Transition>
          </div>

          <!-- Terms Checkbox -->
          <div class="space-y-2">
            <label class="flex items-start gap-3 cursor-pointer">
              <input
                v-model="form.terms"
                type="checkbox"
                class="w-5 h-5 mt-0.5 bg-white/5 border border-white/20 rounded text-emerald-500 focus:ring-emerald-500/50 focus:ring-2"
              />
              <span class="text-sm text-slate-300 leading-relaxed">
                I agree to the
                <Link href="#" class="text-emerald-400 hover:text-emerald-300 transition-colors">Terms of Service</Link>
                and
                <Link href="#" class="text-emerald-400 hover:text-emerald-300 transition-colors">Privacy Policy</Link>
              </span>
            </label>
            <Transition name="slide-down">
              <p v-if="!form.terms && formSubmitted" class="text-sm text-red-400">You must agree to the terms</p>
            </Transition>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            :disabled="processing || !canSubmit"
            class="w-full bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
          >
            <span v-if="processing" class="flex items-center justify-center">
              <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Creating account...
            </span>
            <span v-else>Create account</span>
          </button>
        </form>

        <!-- Divider -->
        <div class="flex items-center my-6">
          <div class="flex-1 border-t border-white/10"></div>
          <span class="px-4 text-slate-400 text-sm">or</span>
          <div class="flex-1 border-t border-white/10"></div>
        </div>

        <!-- Footer -->
        <div class="text-center text-sm text-slate-400">
          Already have an account?
          <Link :href="route('login')" class="text-emerald-400 hover:text-emerald-300 transition-colors font-medium">
            Sign in
          </Link>
        </div>
      </div>

      <!-- Benefits -->
      <div class="mt-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
        <h3 class="text-lg font-semibold text-white mb-4 text-center">Why join us?</h3>
        <div class="grid grid-cols-1 gap-4">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <p class="text-sm font-medium text-white">Lightning Fast</p>
              <p class="text-xs text-slate-400">Built for speed and performance</p>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg class="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div>
              <p class="text-sm font-medium text-white">Enterprise Security</p>
              <p class="text-xs text-slate-400">Bank-level encryption and protection</p>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg class="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div>
              <p class="text-sm font-medium text-white">24/7 Support</p>
              <p class="text-xs text-slate-400">Always here when you need us</p>
            </div>
          </div>
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
    default: 'Create Account'
  },
  errors: {
    type: Object,
    default: () => ({})
  }
})

const showPassword = ref(false)
const showConfirmPassword = ref(false)
const formSubmitted = ref(false)

const form = useForm({
  username: '',
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  password_confirmation: '',
  terms: false
})

// Password validation
const passwordStrength = computed(() => {
  const password = form.password
  if (!password) return 0

  let score = 0
  if (password.length >= 8) score += 1
  if (password.length >= 12) score += 1
  if (/[a-z]/.test(password)) score += 1
  if (/[A-Z]/.test(password)) score += 1
  if (/[0-9]/.test(password)) score += 1
  if (/[^A-Za-z0-9]/.test(password)) score += 1

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

const passwordMismatch = computed(() => {
  return form.password && form.password_confirmation && form.password !== form.password_confirmation
})

const passwordsMatch = computed(() => {
  return form.password && form.password_confirmation && form.password === form.password_confirmation
})

const canSubmit = computed(() => {
  return form.username && form.first_name && form.last_name && form.email &&
         form.password && passwordsMatch.value && form.terms
})

const handleRegister = () => {
  formSubmitted.value = true
  form.post(route('register.user'), {
    onFinish: () => form.reset('password', 'password_confirmation')
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
  line-height: 18px;
}
</style>
