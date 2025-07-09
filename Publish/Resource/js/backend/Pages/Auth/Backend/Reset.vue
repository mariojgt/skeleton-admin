<template>
  <Layout :title="title">
    <template v-slot:form>
      <div class="space-y-6">
        <!-- Reset Password Form -->
        <div @submit.prevent="submitForm">
          <!-- Email Field -->
          <div class="form-control mb-6">
            <label class="label">
              <span class="label-text text-white font-medium">Email address</span>
            </label>
            <div class="relative">
              <input
                v-model="email"
                type="email"
                name="email"
                id="email"
                class="input w-full bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-white/40 focus:bg-white/20 transition-all duration-200"
                placeholder="Enter your email address"
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

          <!-- Info Alert -->
          <div class="mb-6">
            <div class="bg-blue-500/20 border border-blue-500/30 rounded-lg p-4">
              <div class="flex items-start space-x-3">
                <svg class="w-5 h-5 text-blue-300 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <div class="font-semibold text-blue-300 text-sm">Password Reset Instructions</div>
                  <div class="text-blue-200/80 text-sm mt-1">
                    We'll send you a secure link to reset your password. The link will be valid for 15 minutes.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Submit Button -->
          <button
            @click="submitForm"
            :disabled="loading || !isFormValid"
            class="btn w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white border-none shadow-xl transform hover:scale-105 transition-all duration-200 disabled:hover:scale-100 disabled:opacity-50"
            :class="{ 'loading': loading }"
          >
            <span v-if="loading" class="loading loading-spinner loading-sm"></span>
            <span v-else class="flex items-center justify-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              Send Reset Link
            </span>
          </button>

          <!-- Success State -->
          <transition name="slide-fade" mode="out-in">
            <div v-if="emailSent" class="mt-6">
              <div class="bg-green-500/20 border border-green-500/30 rounded-lg p-4">
                <div class="flex items-start space-x-3">
                  <svg class="w-5 h-5 text-green-300 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div class="font-semibold text-green-300 text-sm">Email Sent Successfully!</div>
                    <div class="text-green-200/80 text-sm mt-1">
                      Check your inbox for the password reset link. If you don't see it, check your spam folder.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </transition>

          <!-- Resend Timer -->
          <transition name="slide-fade" mode="out-in">
            <div v-if="emailSent && resendTimer > 0" class="mt-4 text-center">
              <p class="text-white/60 text-sm">
                Didn't receive the email? You can request another in
                <span class="text-white font-semibold">{{ resendTimer }}s</span>
              </p>
            </div>
          </transition>

          <!-- Resend Button -->
          <transition name="slide-fade" mode="out-in">
            <div v-if="emailSent && resendTimer === 0" class="mt-4 text-center">
              <button
                @click="resendEmail"
                :disabled="loading"
                class="btn btn-ghost btn-sm text-white/70 hover:text-white hover:bg-white/10 border-white/20 transition-all duration-200"
              >
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Resend Reset Link
              </button>
            </div>
          </transition>

          <!-- Help Text -->
          <div class="mt-6 text-center">
            <p class="text-white/50 text-xs">
              Having trouble? Contact our
              <a href="#" class="text-white/70 hover:text-white underline">support team</a>
            </p>
          </div>
        </div>
      </div>
    </template>

    <template v-slot:links>
      <div class="flex flex-col space-y-3">
        <Link
          class="btn btn-ghost text-white/70 hover:text-white hover:bg-white/10 border-white/20 transition-all duration-200"
          href="/admin/login"
        >
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013 3v1" />
          </svg>
          Back to Sign In
        </Link>
        <Link
          class="btn btn-ghost text-white/70 hover:text-white hover:bg-white/10 border-white/20 transition-all duration-200"
          href="/admin/register"
        >
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
          </svg>
          Create Account
        </Link>
      </div>
    </template>
  </Layout>
</template>

<script setup>
import { ref, computed, onUnmounted } from 'vue'
import { Link, router } from "@inertiajs/vue3"
import Layout from "@backend_layout/Login.vue"

const props = defineProps({
  title: {
    type: String,
    default: "Backend Reset Password",
  },
})

// Reactive state
const email = ref("")
const loading = ref(false)
const emailError = ref("")
const emailSent = ref(false)
const resendTimer = ref(0)
let timerInterval = null

// Computed properties
const isFormValid = computed(() => {
  return email.value && !emailError.value
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

const startResendTimer = () => {
  resendTimer.value = 60 // 60 seconds
  timerInterval = setInterval(() => {
    resendTimer.value--
    if (resendTimer.value <= 0) {
      clearInterval(timerInterval)
    }
  }, 1000)
}

const submitForm = async () => {
  if (!isFormValid.value) return

  loading.value = true

  try {
    const form = {
      email: email.value,
    }

    router.post(route("skeleton.password-reset"), form, {
      onSuccess: () => {
        emailSent.value = true
        startResendTimer()
      },
      onError: (errors) => {
        if (errors.email) {
          emailError.value = errors.email
        }
      }
    })
  } catch (error) {
    console.error('Password reset error:', error)
  } finally {
    loading.value = false
  }
}

const resendEmail = async () => {
  emailSent.value = false
  await submitForm()
}

// Cleanup
onUnmounted(() => {
  if (timerInterval) {
    clearInterval(timerInterval)
  }
})
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

/* Alert styling */
.bg-blue-500\/20 {
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.bg-green-500\/20 {
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

/* Timer animation */
.text-white.font-semibold {
  transition: all 0.3s ease;
}

/* Success message animation */
@keyframes successPulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

.bg-green-500\/20 {
  animation: successPulse 0.6s ease-out;
}

/* Resend button hover effect */
.btn-ghost:hover {
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

/* Icon hover effects */
svg {
  transition: all 0.3s ease;
}

button:hover svg {
  filter: drop-shadow(0 2px 4px rgba(255, 255, 255, 0.1));
}

/* Link styling */
a {
  transition: all 0.2s ease;
}

a:hover {
  text-decoration-color: rgba(255, 255, 255, 0.8);
}

/* Responsive improvements */
@media (max-width: 640px) {
  .btn {
    padding: 0.75rem 1.5rem;
  }
}
</style>
