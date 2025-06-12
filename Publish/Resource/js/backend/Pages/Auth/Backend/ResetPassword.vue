<template>
  <Layout :title="title">
    <template v-slot:form>
      <div class="space-y-6">
        <!-- Reset Password Form -->
        <div @submit.prevent="submitForm">
          <!-- Email Field (readonly) -->
          <div class="form-control mb-4">
            <label class="label">
              <span class="label-text text-white font-medium">Email address</span>
            </label>
            <div class="relative">
              <input
                v-model="email"
                type="email"
                name="email"
                id="email"
                class="input w-full bg-white/5 border-white/10 text-white/60 placeholder-white/30 cursor-not-allowed"
                placeholder="Enter your email address"
                readonly
                required
              />
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="h-5 w-5 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
              </div>
              <div class="absolute inset-y-0 right-0 pr-3 flex items-center">
                <svg class="h-5 w-5 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
            </div>
          </div>

          <!-- New Password Field -->
          <div class="form-control mb-4">
            <label class="label">
              <span class="label-text text-white font-medium">New Password</span>
            </label>
            <div class="relative">
              <input
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                name="password"
                id="password"
                class="input w-full bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-white/40 focus:bg-white/20 transition-all duration-200"
                placeholder="Enter your new password"
                required
              />
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="h-5 w-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute inset-y-0 right-0 pr-3 flex items-center hover:scale-110 transition-transform duration-200"
              >
                <svg v-if="showPassword" class="h-5 w-5 text-white/40 hover:text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <svg v-else class="h-5 w-5 text-white/40 hover:text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                </svg>
              </button>
            </div>
          </div>

          <!-- Confirm New Password -->
          <div class="form-control mb-4">
            <label class="label">
              <span class="label-text text-white font-medium">Confirm New Password</span>
            </label>
            <div class="relative">
              <input
                v-model="passwordConfirmation"
                :type="showPasswordConfirm ? 'text' : 'password'"
                name="password_confirmation"
                id="password_confirmation"
                class="input w-full bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-white/40 focus:bg-white/20 transition-all duration-200"
                :class="{ 'border-red-400': password && passwordConfirmation && password !== passwordConfirmation, 'border-green-400': password && passwordConfirmation && password === passwordConfirmation }"
                placeholder="Confirm your new password"
                required
              />
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="h-5 w-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <button
                type="button"
                @click="showPasswordConfirm = !showPasswordConfirm"
                class="absolute inset-y-0 right-0 pr-3 flex items-center hover:scale-110 transition-transform duration-200"
              >
                <svg v-if="showPasswordConfirm" class="h-5 w-5 text-white/40 hover:text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <svg v-else class="h-5 w-5 text-white/40 hover:text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                </svg>
              </button>
            </div>
            <label v-if="password && passwordConfirmation && password !== passwordConfirmation" class="label">
              <span class="label-text-alt text-red-300">Passwords do not match</span>
            </label>
          </div>

          <!-- Password Strength Indicator -->
          <transition name="slide-fade" mode="out-in">
            <div v-if="password" class="mb-6">
              <div class="flex items-center justify-between mb-2">
                <span class="text-white/70 text-sm">Password strength</span>
                <span class="text-sm font-medium" :class="passwordStrengthColor">{{ passwordStrengthText }}</span>
              </div>
              <div class="w-full bg-white/20 rounded-full h-2">
                <div
                  class="h-2 rounded-full transition-all duration-500 ease-out"
                  :class="passwordStrengthBarColor"
                  :style="{ width: passwordStrength + '%' }"
                ></div>
              </div>

              <!-- Password Requirements -->
              <div class="mt-3 grid grid-cols-2 gap-2 text-xs">
                <div class="flex items-center space-x-2">
                  <svg :class="password.length >= 8 ? 'text-green-400' : 'text-white/40'" class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span :class="password.length >= 8 ? 'text-green-300' : 'text-white/60'">8+ characters</span>
                </div>
                <div class="flex items-center space-x-2">
                  <svg :class="/[A-Z]/.test(password) ? 'text-green-400' : 'text-white/40'" class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span :class="/[A-Z]/.test(password) ? 'text-green-300' : 'text-white/60'">Uppercase</span>
                </div>
                <div class="flex items-center space-x-2">
                  <svg :class="/[a-z]/.test(password) ? 'text-green-400' : 'text-white/40'" class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span :class="/[a-z]/.test(password) ? 'text-green-300' : 'text-white/60'">Lowercase</span>
                </div>
                <div class="flex items-center space-x-2">
                  <svg :class="/\d/.test(password) ? 'text-green-400' : 'text-white/40'" class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span :class="/\d/.test(password) ? 'text-green-300' : 'text-white/60'">Number</span>
                </div>
              </div>
            </div>
          </transition>

          <!-- Security Notice -->
          <div class="mb-6">
            <div class="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-4">
              <div class="flex items-start space-x-3">
                <svg class="w-5 h-5 text-yellow-300 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                <div>
                  <div class="font-semibold text-yellow-300 text-sm">Security Notice</div>
                  <div class="text-yellow-200/80 text-sm mt-1">
                    Choose a strong password that you haven't used elsewhere. After resetting, you'll be automatically signed in.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Submit Button -->
          <button
            @click="submitForm"
            :disabled="loading || !isFormValid"
            class="btn w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white border-none shadow-xl transform hover:scale-105 transition-all duration-200 disabled:hover:scale-100 disabled:opacity-50"
            :class="{ 'loading': loading }"
          >
            <span v-if="loading" class="loading loading-spinner loading-sm"></span>
            <span v-else class="flex items-center justify-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Reset Password
            </span>
          </button>

          <!-- Token Expiry Warning -->
          <div class="mt-4 text-center">
            <p class="text-white/50 text-xs">
              This reset link expires in <span class="text-white/70 font-semibold">{{ timeRemaining }}</span>
            </p>
          </div>
        </div>
      </div>
    </template>

    <template v-slot:links>
      <div class="text-center">
        <Link
          class="btn btn-ghost text-white/70 hover:text-white hover:bg-white/10 border-white/20 transition-all duration-200"
          href="/admin/login"
        >
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013 3v1" />
          </svg>
          Back to Sign In
        </Link>
      </div>
    </template>
  </Layout>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { Link, router } from "@inertiajs/vue3"
import Layout from "@backend_layout/Login.vue"

const props = defineProps({
  token: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: "Backend Reset",
  },
})

// Reactive state
const email = ref("")
const password = ref("")
const passwordConfirmation = ref("")
const showPassword = ref(false)
const showPasswordConfirm = ref(false)
const loading = ref(false)
const timeRemaining = ref("15 minutes")
let countdownInterval = null

// Password strength calculation
const passwordStrength = computed(() => {
  const pass = password.value
  let score = 0

  if (pass.length >= 8) score += 25
  if (pass.length >= 12) score += 25
  if (/[a-z]/.test(pass) && /[A-Z]/.test(pass)) score += 25
  if (/\d/.test(pass)) score += 15
  if (/[^A-Za-z0-9]/.test(pass)) score += 10

  return Math.min(score, 100)
})

const passwordStrengthText = computed(() => {
  const strength = passwordStrength.value
  if (strength < 25) return 'Weak'
  if (strength < 50) return 'Fair'
  if (strength < 75) return 'Good'
  return 'Strong'
})

const passwordStrengthColor = computed(() => {
  const strength = passwordStrength.value
  if (strength < 25) return 'text-red-400'
  if (strength < 50) return 'text-yellow-400'
  if (strength < 75) return 'text-blue-400'
  return 'text-green-400'
})

const passwordStrengthBarColor = computed(() => {
  const strength = passwordStrength.value
  if (strength < 25) return 'bg-red-400'
  if (strength < 50) return 'bg-yellow-400'
  if (strength < 75) return 'bg-blue-400'
  return 'bg-green-400'
})

const isFormValid = computed(() => {
  return email.value &&
         password.value &&
         passwordConfirmation.value &&
         password.value === passwordConfirmation.value &&
         password.value.length >= 8
})

// Methods
const submitForm = async () => {
  if (!isFormValid.value) return

  loading.value = true

  try {
    const form = {
      email: email.value,
      password: password.value,
      password_confirmation: passwordConfirmation.value,
      token: props.token,
    }

    router.post(route("skeleton.password.change"), form)
  } catch (error) {
    console.error('Password reset error:', error)
  } finally {
    loading.value = false
  }
}

const startCountdown = () => {
  // Simulate 15-minute countdown
  let minutes = 15
  let seconds = 0

  countdownInterval = setInterval(() => {
    if (seconds === 0) {
      if (minutes === 0) {
        timeRemaining.value = "expired"
        clearInterval(countdownInterval)
        return
      }
      minutes--
      seconds = 59
    } else {
      seconds--
    }

    timeRemaining.value = `${minutes}m ${seconds}s`
  }, 1000)
}

// Lifecycle
onMounted(() => {
  startCountdown()

  // Get email from URL params if available
  const urlParams = new URLSearchParams(window.location.search)
  const emailParam = urlParams.get('email')
  if (emailParam) {
    email.value = emailParam
  }
})

onUnmounted(() => {
  if (countdownInterval) {
    clearInterval(countdownInterval)
  }
})

console.log('Token:', props.token)
</script>

<style scoped>
/* Slide fade transition */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-in;
}

.slide-fade-enter-from {
  transform: translateY(-10px);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}

/* Enhanced input styles */
.input {
  padding-left: 2.5rem;
  transition: all 0.2s ease;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.input:focus {
  transform: translateY(-1px);
  box-shadow: 0 10px 25px rgba(255, 255, 255, 0.1);
}

/* Readonly input styling */
.input[readonly] {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.1);
  cursor: not-allowed;
}

/* Button enhancements */
.btn {
  transition: all 0.3s ease;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.btn:active {
  transform: translateY(0);
}

.btn:disabled {
  transform: none;
  box-shadow: none;
}

/* Loading state */
.loading {
  pointer-events: none;
}

/* Custom animations */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.form-control {
  animation: fadeIn 0.6s ease-out;
}

.form-control:nth-child(1) {
  animation-delay: 0.1s;
}

.form-control:nth-child(2) {
  animation-delay: 0.2s;
}

.form-control:nth-child(3) {
  animation-delay: 0.3s;
}

/* Password strength bar animation */
.bg-red-400, .bg-yellow-400, .bg-blue-400, .bg-green-400 {
  transition: width 0.5s ease-out, background-color 0.3s ease;
}

/* Alert styling */
.bg-yellow-500\/20 {
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

/* Requirements grid */
.grid {
  gap: 0.5rem;
}

/* Icon hover effects */
svg {
  transition: all 0.3s ease;
}

button:hover svg {
  filter: drop-shadow(0 2px 4px rgba(255, 255, 255, 0.1));
}

/* Countdown animation */
.text-white\/70.font-semibold {
  transition: all 0.3s ease;
}

/* Responsive improvements */
@media (max-width: 640px) {
  .btn {
    padding: 0.75rem 1.5rem;
  }

  .grid-cols-2 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}
</style>
