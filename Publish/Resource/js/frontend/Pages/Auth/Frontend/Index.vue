<template>
  <Layout :title="title">
    <div class="auth-container">
      <div class="auth-card">
        <!-- Header -->
        <div class="auth-header">
          <div class="logo">
            <h1>🚀</h1>
          </div>
          <h2>Welcome Back</h2>
          <p>Sign in to your account to continue</p>
        </div>

        <!-- Login Form -->
        <form @submit.prevent="handleLogin" class="auth-form" novalidate>
          <!-- Email Field -->
          <div class="form-group">
            <label for="email" class="form-label">
              Email Address
              <span class="required">*</span>
            </label>
            <div class="input-wrapper">
              <input
                id="email"
                type="email"
                v-model="form.email"
                :class="['form-input', { 'error': errors.email, 'valid': isEmailValid }]"
                placeholder="Enter your email address"
                autocomplete="email"
                required
                @blur="validateEmail"
                @input="clearFieldError('email')"
              />
              <div class="input-icon">
                📧
              </div>
            </div>
            <Transition name="error">
              <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
            </Transition>
          </div>

          <!-- Password Field -->
          <div class="form-group">
            <label for="password" class="form-label">
              Password
              <span class="required">*</span>
            </label>
            <div class="input-wrapper">
              <input
                id="password"
                :type="showPassword ? 'text' : 'password'"
                v-model="form.password"
                :class="['form-input', { 'error': errors.password }]"
                placeholder="Enter your password"
                autocomplete="current-password"
                required
                @input="clearFieldError('password')"
              />
              <button
                type="button"
                @click="togglePassword"
                class="password-toggle"
                :title="showPassword ? 'Hide password' : 'Show password'"
              >
                <span v-if="showPassword">👁️</span>
                <span v-else>👁️‍🗨️</span>
              </button>
            </div>
            <Transition name="error">
              <span v-if="errors.password" class="error-message">{{ errors.password }}</span>
            </Transition>
          </div>

          <!-- Remember Me & Forgot Password -->
          <div class="form-options">
            <label class="checkbox-label">
              <input
                type="checkbox"
                v-model="form.remember"
                class="checkbox-input"
              />
              <span class="checkmark"></span>
              <span class="checkbox-text">Remember me</span>
            </label>

            <Link :href="route('forgot-password')" class="forgot-link">
              Forgot password?
            </Link>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            class="btn-primary"
            :disabled="!canSubmit || processing"
          >
            <Transition name="spinner" mode="out-in">
              <span v-if="processing" class="spinner" key="spinner"></span>
              <span v-else key="text">Sign In</span>
            </Transition>
          </button>
        </form>

        <!-- Divider -->
        <div class="divider">
          <span>or</span>
        </div>

        <!-- Footer Links -->
        <div class="auth-footer">
          <div class="auth-links">
            <span>Don't have an account?</span>
            <Link :href="route('register.user.form')" class="link">
              Create account
            </Link>
          </div>
        </div>
      </div>

      <!-- Additional Info Card -->
      <div class="info-card">
        <h3>🔐 Secure Login</h3>
        <p>Your data is protected with enterprise-grade security and encryption.</p>
      </div>
    </div>
  </Layout>
</template>

<script>
import { ref, reactive, computed, nextTick } from 'vue'
import { router, Link } from '@inertiajs/vue3'
import Layout from '../../../Layout/Login.vue'

export default {
  name: 'LoginIndex',
  components: {
    Layout,
    Link
  },
  props: {
    title: {
      type: String,
      default: 'Sign In'
    },
    errors: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const processing = ref(false)
    const showPassword = ref(false)
    const fieldErrors = ref({})

    const form = reactive({
      email: '',
      password: '',
      remember: false
    })

    // Computed properties
    const isEmailValid = computed(() => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return form.email && emailRegex.test(form.email)
    })

    const canSubmit = computed(() => {
      return form.email && form.password && !processing.value
    })

    // Methods
    const validateEmail = () => {
      if (form.email && !isEmailValid.value) {
        fieldErrors.value.email = 'Please enter a valid email address'
      } else {
        delete fieldErrors.value.email
      }
    }

    const clearFieldError = (field) => {
      if (fieldErrors.value[field]) {
        delete fieldErrors.value[field]
      }
    }

    const togglePassword = () => {
      showPassword.value = !showPassword.value
    }

    const handleLogin = async () => {
      if (processing.value || !canSubmit.value) return

      // Clear field errors
      fieldErrors.value = {}

      // Validate form
      if (!form.email) {
        fieldErrors.value.email = 'Email is required'
        return
      }

      if (!isEmailValid.value) {
        fieldErrors.value.email = 'Please enter a valid email address'
        return
      }

      if (!form.password) {
        fieldErrors.value.password = 'Password is required'
        return
      }

      processing.value = true

      try {
        await router.post(route('login.user'), {
          email: form.email.trim(),
          password: form.password,
          remember: form.remember
        }, {
          preserveScroll: true,
          onError: (errors) => {
            // Handle validation errors
            processing.value = false
            nextTick(() => {
              // Focus on first error field
              const firstErrorField = Object.keys(errors)[0]
              if (firstErrorField) {
                const element = document.getElementById(firstErrorField)
                if (element) {
                  element.focus()
                }
              }
            })
          },
          onSuccess: () => {
            // Success will be handled by redirect
            processing.value = false
          }
        })
      } catch (error) {
        console.error('Login error:', error)
        processing.value = false
      }
    }

    return {
      form,
      processing,
      showPassword,
      fieldErrors,
      isEmailValid,
      canSubmit,
      validateEmail,
      clearFieldError,
      togglePassword,
      handleLogin,
      errors: computed(() => ({ ...props.errors, ...fieldErrors.value }))
    }
  }
}
</script>

<style scoped>
.auth-container {
  width: 100%;
  max-width: 420px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.auth-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.1),
    0 8px 16px rgba(0, 0, 0, 0.05);
  padding: 48px 40px;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;
}

.auth-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
}

/* Header */
.auth-header {
  text-align: center;
  margin-bottom: 40px;
}

.logo h1 {
  font-size: 56px;
  margin-bottom: 16px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.auth-header h2 {
  color: #1a202c;
  margin-bottom: 8px;
  font-size: 32px;
  font-weight: 700;
  letter-spacing: -0.5px;
}

.auth-header p {
  color: #718096;
  font-size: 16px;
  font-weight: 400;
}

/* Form */
.auth-form {
  margin-bottom: 32px;
}

.form-group {
  margin-bottom: 24px;
}

.form-label {
  display: block;
  margin-bottom: 8px;
  color: #2d3748;
  font-weight: 600;
  font-size: 14px;
}

.required {
  color: #e53e3e;
  margin-left: 2px;
}

.input-wrapper {
  position: relative;
}

.form-input {
  width: 100%;
  padding: 14px 16px;
  padding-right: 48px;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  font-size: 16px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  background-color: #f7fafc;
  outline: none;
}

.form-input:focus {
  border-color: #667eea;
  background-color: white;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  transform: translateY(-1px);
}

.form-input.error {
  border-color: #e53e3e;
  background-color: #fed7d7;
}

.form-input.valid {
  border-color: #38a169;
  background-color: #f0fff4;
}

.input-icon {
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 18px;
  opacity: 0.6;
  pointer-events: none;
}

.password-toggle {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  opacity: 0.6;
  transition: all 0.2s;
  padding: 4px;
  border-radius: 6px;
}

.password-toggle:hover {
  opacity: 1;
  background-color: rgba(102, 126, 234, 0.1);
}

.error-message {
  color: #e53e3e;
  font-size: 13px;
  margin-top: 6px;
  display: block;
  font-weight: 500;
}

/* Form Options */
.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 24px 0 32px 0;
  flex-wrap: wrap;
  gap: 12px;
}

.checkbox-label {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  color: #4a5568;
  gap: 8px;
}

.checkbox-input {
  display: none;
}

.checkmark {
  width: 20px;
  height: 20px;
  border: 2px solid #cbd5e0;
  border-radius: 6px;
  position: relative;
  transition: all 0.2s;
  background-color: white;
}

.checkbox-input:checked + .checkmark {
  background-color: #667eea;
  border-color: #667eea;
}

.checkbox-input:checked + .checkmark::after {
  content: '✓';
  color: white;
  font-size: 14px;
  font-weight: bold;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.checkbox-text {
  font-weight: 500;
}

.forgot-link {
  color: #667eea;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.2s;
  padding: 4px 8px;
  border-radius: 6px;
}

.forgot-link:hover {
  color: #5a67d8;
  background-color: rgba(102, 126, 234, 0.1);
}

/* Button */
.btn-primary {
  width: 100%;
  padding: 16px 24px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  position: relative;
  overflow: hidden;
}

.btn-primary::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%);
  opacity: 0;
  transition: opacity 0.3s;
}

.btn-primary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 12px 24px rgba(102, 126, 234, 0.4);
}

.btn-primary:hover:not(:disabled)::before {
  opacity: 1;
}

.btn-primary:active:not(:disabled) {
  transform: translateY(0);
}

.btn-primary:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

.btn-primary > * {
  position: relative;
  z-index: 1;
}

.spinner {
  width: 20px;
  height: 20px;
  border: 2px solid transparent;
  border-top: 2px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Divider */
.divider {
  text-align: center;
  margin: 24px 0;
  position: relative;
}

.divider::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background: #e2e8f0;
}

.divider span {
  background: rgba(255, 255, 255, 0.95);
  color: #718096;
  padding: 0 16px;
  font-size: 14px;
  position: relative;
}

/* Footer */
.auth-footer {
  text-align: center;
}

.auth-links {
  font-size: 15px;
  color: #718096;
}

.link {
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  margin-left: 6px;
  transition: all 0.2s;
  padding: 2px 4px;
  border-radius: 4px;
}

.link:hover {
  color: #5a67d8;
  background-color: rgba(102, 126, 234, 0.1);
}

/* Info Card */
.info-card {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 16px;
  padding: 24px;
  text-align: center;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.info-card h3 {
  color: #2d3748;
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: 600;
}

.info-card p {
  color: #718096;
  font-size: 14px;
  margin: 0;
  line-height: 1.5;
}

/* Transitions */
.error-enter-active, .error-leave-active {
  transition: all 0.3s ease;
}

.error-enter-from {
  opacity: 0;
  transform: translateY(-8px);
}

.error-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}

.spinner-enter-active, .spinner-leave-active {
  transition: all 0.2s ease;
}

.spinner-enter-from, .spinner-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

/* Mobile Responsiveness */
@media (max-width: 480px) {
  .auth-card {
    padding: 32px 24px;
    margin: 16px;
    border-radius: 16px;
  }

  .auth-header h2 {
    font-size: 28px;
  }

  .logo h1 {
    font-size: 48px;
  }

  .form-options {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .info-card {
    margin: 0 16px;
    padding: 20px;
  }
}
</style>
