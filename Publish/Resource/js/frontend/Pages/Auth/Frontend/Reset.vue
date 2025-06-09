<template>
  <Layout :title="title">
    <div class="auth-container">
      <div class="auth-card">
        <!-- Header -->
        <div class="auth-header">
          <div class="logo">
            <h1>🔐</h1>
          </div>
          <h2>Forgot Password?</h2>
          <p>No worries! Enter your email and we'll send you a reset link</p>
        </div>

        <!-- Reset Form -->
        <form @submit.prevent="handleReset" class="auth-form" novalidate>
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
                placeholder="Enter your registered email address"
                autocomplete="email"
                required
                @blur="validateEmail"
                @input="clearFieldError('email')"
              />
              <div class="input-icon">📧</div>
            </div>
            <Transition name="error">
              <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
            </Transition>
          </div>

          <!-- Info Message -->
          <div class="info-message">
            <div class="info-icon">ℹ️</div>
            <div class="info-text">
              <strong>What happens next?</strong>
              <p>We'll send a secure link to your email that you can use to reset your password. The link will expire in 60 minutes for security.</p>
            </div>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            class="btn-primary"
            :disabled="!canSubmit || processing"
          >
            <Transition name="spinner" mode="out-in">
              <span v-if="processing" class="spinner" key="spinner"></span>
              <span v-else key="text">Send Reset Link</span>
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
            <span>Remember your password?</span>
            <Link :href="route('user.login')" class="link">
              Back to Sign In
            </Link>
          </div>
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
        <h3>🛡️ Secure Reset Process</h3>
        <p>Your password reset is secured with industry-standard encryption and expires automatically.</p>
        <div class="security-features">
          <div class="security-feature">
            <span class="feature-icon">🕐</span>
            <span class="feature-text">60-minute expiry</span>
          </div>
          <div class="security-feature">
            <span class="feature-icon">🔒</span>
            <span class="feature-text">Encrypted tokens</span>
          </div>
          <div class="security-feature">
            <span class="feature-icon">📱</span>
            <span class="feature-text">Mobile friendly</span>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import { ref, reactive, computed, nextTick } from 'vue'
import { router, Link } from '@inertiajs/vue3'
import Layout from '../../../Layout/Login.vue'

export default {
  name: 'ForgotPassword',
  components: {
    Layout,
    Link
  },
  props: {
    title: {
      type: String,
      default: 'Forgot Password'
    },
    errors: {
      type: Object,
      default: () => ({})
    },
    status: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const processing = ref(false)
    const fieldErrors = ref({})
    const emailSent = ref(false)

    const form = reactive({
      email: ''
    })

    // Computed properties
    const isEmailValid = computed(() => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return form.email && emailRegex.test(form.email)
    })

    const canSubmit = computed(() => {
      return form.email && isEmailValid.value && !processing.value
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

    const handleReset = async () => {
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

      processing.value = true

      try {
        await router.post(route('password-reset.user'), {
          email: form.email.trim()
        }, {
          preserveScroll: true,
          onError: (errors) => {
            processing.value = false
            nextTick(() => {
              // Focus on email field if there's an error
              if (errors.email) {
                const emailField = document.getElementById('email')
                if (emailField) {
                  emailField.focus()
                }
              }
            })
          },
          onSuccess: () => {
            processing.value = false
            emailSent.value = true
            // Reset form after successful submission
            setTimeout(() => {
              form.email = ''
              emailSent.value = false
            }, 5000)
          }
        })
      } catch (error) {
        console.error('Password reset error:', error)
        processing.value = false
      }
    }

    return {
      form,
      processing,
      fieldErrors,
      emailSent,
      isEmailValid,
      canSubmit,
      validateEmail,
      clearFieldError,
      handleReset,
      errors: computed(() => ({ ...props.errors, ...fieldErrors.value }))
    }
  }
}
</script>

<style scoped>
.auth-container {
  width: 100%;
  max-width: 450px;
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
  line-height: 1.5;
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

.error-message {
  color: #e53e3e;
  font-size: 13px;
  margin-top: 6px;
  display: block;
  font-weight: 500;
}

/* Info Message */
.info-message {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
  border: 1px solid rgba(102, 126, 234, 0.1);
  border-radius: 12px;
  padding: 20px;
  margin: 24px 0;
  display: flex;
  gap: 16px;
}

.info-icon {
  font-size: 24px;
  flex-shrink: 0;
  margin-top: 2px;
}

.info-text {
  flex: 1;
}

.info-text strong {
  color: #2d3748;
  font-size: 14px;
  font-weight: 600;
  display: block;
  margin-bottom: 8px;
}

.info-text p {
  color: #4a5568;
  font-size: 13px;
  line-height: 1.5;
  margin: 0;
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
  margin-bottom: 16px;
  font-size: 15px;
  color: #718096;
}

.auth-links:last-child {
  margin-bottom: 0;
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
  margin-bottom: 12px;
  font-size: 18px;
  font-weight: 600;
}

.info-card p {
  color: #718096;
  font-size: 14px;
  margin-bottom: 20px;
  line-height: 1.5;
}

.security-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 12px;
}

.security-feature {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: rgba(102, 126, 234, 0.05);
  color: #667eea;
  padding: 12px 16px;
  border-radius: 12px;
  font-size: 13px;
  font-weight: 600;
  border: 1px solid rgba(102, 126, 234, 0.1);
}

.feature-icon {
  font-size: 16px;
}

.feature-text {
  white-space: nowrap;
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

  .info-message {
    flex-direction: column;
    text-align: center;
    gap: 12px;
  }

  .info-card {
    margin: 0 16px;
    padding: 20px;
  }

  .security-features {
    grid-template-columns: 1fr;
  }
}
</style>
