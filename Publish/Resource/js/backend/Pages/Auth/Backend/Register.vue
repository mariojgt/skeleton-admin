<template>
  <Layout :title="title">
    <template v-slot:form>
      <div class="space-y-6">
        <!-- Registration Form -->
        <div @submit.prevent="submitForm">
          <!-- Name Fields -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div class="form-control">
              <label class="label">
                <span class="label-text text-white font-medium">First Name</span>
              </label>
              <input
                v-model="firstName"
                type="text"
                name="first_name"
                class="input w-full bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-white/40 focus:bg-white/20 transition-all duration-200"
                placeholder="John"
                required
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text text-white font-medium">Last Name</span>
              </label>
              <input
                v-model="lastName"
                type="text"
                name="last_name"
                class="input w-full bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-white/40 focus:bg-white/20 transition-all duration-200"
                placeholder="Doe"
                required
              />
            </div>
          </div>

          <!-- Email Field -->
          <div class="form-control mb-4">
            <label class="label">
              <span class="label-text text-white font-medium">Email address</span>
            </label>
            <div class="relative">
              <input
                v-model="email"
                type="email"
                name="email"
                class="input w-full bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-white/40 focus:bg-white/20 transition-all duration-200"
                placeholder="john.doe@example.com"
                :class="{ 'border-red-400': emailError, 'border-green-400': email && !emailError }"
                required
                @blur="validateEmail"
              />
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="h-5 w-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
              </div>
              <!-- Email validation icon -->
              <div v-if="email" class="absolute inset-y-0 right-0 pr-3 flex items-center">
                <svg v-if="!emailError" class="h-5 w-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <svg v-else class="h-5 w-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </div>
            <label v-if="emailError" class="label">
              <span class="label-text-alt text-red-300">{{ emailError }}</span>
            </label>
          </div>

          <!-- Password Field -->
          <div class="form-control mb-4">
            <label class="label">
              <span class="label-text text-white font-medium">Password</span>
            </label>
            <div class="relative">
              <input
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                name="password"
                class="input w-full bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-white/40 focus:bg-white/20 transition-all duration-200"
                placeholder="Create a strong password"
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

          <!-- Password Confirmation -->
          <div class="form-control mb-4">
            <label class="label">
              <span class="label-text text-white font-medium">Confirm Password</span>
            </label>
            <div class="relative">
              <input
                v-model="passwordConfirmation"
                :type="showPasswordConfirm ? 'text' : 'password'"
                name="password_confirmation"
                class="input w-full bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-white/40 focus:bg-white/20 transition-all duration-200"
                :class="{ 'border-red-400': password && passwordConfirmation && password !== passwordConfirmation, 'border-green-400': password && passwordConfirmation && password === passwordConfirmation }"
                placeholder="Confirm your password"
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

          <!-- Submit Button -->
          <button
            @click="submitForm"
            :disabled="loading || !isFormValid"
            class="btn w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white border-none shadow-xl transform hover:scale-105 transition-all duration-200 disabled:hover:scale-100 disabled:opacity-50"
            :class="{ 'loading': loading }"
          >
            <span v-if="loading" class="loading loading-spinner loading-sm"></span>
            <span v-else class="flex items-center justify-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
              Create Account
            </span>
          </button>

          <!-- Terms Notice -->
          <div class="mt-4 text-center">
            <p class="text-white/60 text-xs">
              By creating an account, you agree to our
              <a href="#" class="text-white/80 hover:text-white underline">Terms of Service</a> and
              <a href="#" class="text-white/80 hover:text-white underline">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </template>

    <template v-slot:links>
      <div class="text-center">
        <span class="text-white/70 text-sm">Already have an account?</span>
        <Link
          class="btn btn-ghost text-white/70 hover:text-white hover:bg-white/10 border-white/20 transition-all duration-200 ml-2"
          href="/admin/login"
        >
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013 3v1" />
          </svg>
          Sign In
        </Link>
      </div>
    </template>
  </Layout>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Link, router } from "@inertiajs/vue3"
import Layout from "@backend_layout/Login.vue"

const props = defineProps({
  title: {
    type: String,
    default: "Backend Register",
  },
})

// Reactive state
const firstName = ref("")
const lastName = ref("")
const email = ref("")
const password = ref("")
const passwordConfirmation = ref("")
const showPassword = ref(false)
const showPasswordConfirm = ref(false)
const loading = ref(false)
const emailError = ref("")

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
  return firstName.value &&
         lastName.value &&
         email.value &&
         password.value &&
         passwordConfirmation.value &&
         password.value === passwordConfirmation.value &&
         !emailError.value
})

// Methods
const validateEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (email.value && !emailRegex.test(email.value)) {
    emailError.value = "Please enter a valid email address"
  } else {
    emailError.value = ""
  }
}

const submitForm = async () => {
  if (!isFormValid.value) return

  loading.value = true

  try {
    const form = {
      first_name: firstName.value,
      last_name: lastName.value,
      email: email.value,
      password: password.value,
      password_confirmation: passwordConfirmation.value,
    }

    router.post(route("skeleton.register.user"), form)
  } catch (error) {
    console.error('Registration error:', error)
  } finally {
    loading.value = false
  }
}
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

.form-control:nth-child(4) {
  animation-delay: 0.4s;
}

/* Grid animations */
.grid > .form-control:first-child {
  animation-delay: 0.1s;
}

.grid > .form-control:last-child {
  animation-delay: 0.2s;
}

/* Password strength bar animation */
.bg-red-400, .bg-yellow-400, .bg-blue-400, .bg-green-400 {
  transition: width 0.5s ease-out, background-color 0.3s ease;
}

/* Validation icons */
svg {
  transition: all 0.3s ease;
}

/* Hover effects for icons */
button:hover svg {
  filter: drop-shadow(0 2px 4px rgba(255, 255, 255, 0.1));
}

/* Requirements grid */
.grid {
  gap: 0.5rem;
}

/* Links styling */
a {
  transition: all 0.2s ease;
}

a:hover {
  text-decoration-color: rgba(255, 255, 255, 0.8);
}
</style>
