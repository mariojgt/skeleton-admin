<template>
  <Layout :title="title">
    <div class="auth-container">
      <div class="auth-card">
        <!-- Header -->
        <div class="auth-header">
          <div class="logo">
            <h1>🔑</h1>
          </div>
          <h2>Reset Password</h2>
          <p>Enter your new password below</p>
        </div>

        <!-- Reset Password Form -->
        <form @submit.prevent="handlePasswordReset" class="auth-form" novalidate>
          <!-- Email Field (readonly) -->
          <div class="form-group">
            <label for="email" class="form-label">Email Address</label>
            <div class="input-wrapper">
              <input
                id="email"
                type="email"
                v-model="form.email"
                :class="['form-input', 'readonly-input']"
                placeholder="Email address"
                readonly
                tabindex="-1"
              />
              <div class="input-icon">📧</div>
            </div>
            <Transition name="error">
              <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
            </Transition>
          </div>

          <!-- New Password Field -->
          <div class="form-group">
            <label for="password" class="form-label">
              New Password
              <span class="required">*</span>
            </label>
            <div class="input-wrapper">
              <input
                id="password"
                :type="showPassword ? 'text' : 'password'"
                v-model="form.password"
                :class="['form-input', { 'error': errors.password }]"
                placeholder="Enter your new password"
                autocomplete="new-password"
                required
                minlength="8"
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
            <small class="password-hint">Password must be at least 8 characters long</small>

            <!-- Password Strength Indicator -->
            <div v-if="form.password" class="password-strength">
              <div class="strength-label">Password Strength:</div>
              <div class="strength-bar">
                <div
                  class="strength-fill"
                  :class="passwordStrengthClass"
                  :style="{ width: passwordStrengthPercent + '%' }"
                ></div>
              </div>
              <div class="strength-text" :class="passwordStrengthClass">
                {{ passwordStrengthText }}
              </div>

              <!-- Password Requirements -->
              <div class="password-requirements">
                <div class="requirement" :class="{ 'met': hasMinLength }">
                  <span class="requirement-icon">{{ hasMinLength ? '✅' : '❌' }}</span>
                  <span>At least 8 characters</span>
                </div>
                <div class="requirement" :class="{ 'met': hasLowercase }">
                  <span class="requirement-icon">{{ hasLowercase ? '✅' : '❌' }}</span>
                  <span>One lowercase letter</span>
                </div>
                <div class="requirement" :class="{ 'met': hasUppercase }">
                  <span class="requirement-icon">{{ hasUppercase ? '✅' : '❌' }}</span>
                  <span>One uppercase letter</span>
                </div>
                <div class="requirement" :class="{ 'met': hasNumber }">
                  <span class="requirement-icon">{{ hasNumber ? '✅' : '❌' }}</span>
                  <span>One number</span>
                </div>
                <div class="requirement" :class="{ 'met': hasSpecialChar }">
                  <span class="requirement-icon">{{ hasSpecialChar ? '✅' : '❌' }}</span>
                  <span>One special character</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Confirm Password Field -->
          <div class="form-group">
            <label for="password_confirmation" class="form-label">
              Confirm New Password
              <span class="required">*</span>
            </label>
            <div class="input-wrapper">
              <input
                id="password_confirmation"
                :type="showConfirmPassword ? 'text' : 'password'"
                v-model="form.password_confirmation"
                :class="['form-input', { 'error': errors.password_confirmation || passwordMismatch, 'valid': passwordsMatch }]"
                placeholder="Confirm your new password"
                autocomplete="new-password"
                required
                @input="clearFieldError('password_confirmation')"
              />
              <button
                type="button"
                @click="toggleConfirmPassword"
                class="password-toggle"
                :title="showConfirmPassword ? 'Hide password' : 'Show password'"
              >
                <span v-if="showConfirmPassword">👁️</span>
                <span v-else>👁️‍🗨️</span>
              </button>
            </div>
            <Transition name="error">
              <span v-if="errors.password_confirmation" class="error-message">{{ errors.password_confirmation }}</span>
              <span v-else-if="passwordMismatch && form.password_confirmation" class="error-message">Passwords do not match</span>
            </Transition>
            <Transition name="success">
              <span v-if="passwordsMatch && form.password_confirmation" class="success-message">Passwords match ✅</span>
            </Transition>
          </div>

          <!-- Security Notice -->
          <div class="security-notice">
            <div class="notice-icon">🛡️</div>
            <div class="notice-text">
              <strong>Security Reminder:</strong>
              <p>Choose a strong, unique password that you haven't used elsewhere. Your password will be encrypted and stored securely.</p>
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
              <span v-else key="text">Update Password</span>
            </Transition>
          </button>
        </form>

        <!-- Footer Links -->
        <div class="auth-footer">
          <div class="auth-links">
            <span>Remember your password?</span>
            <Link :href="route('login')" class="link">
              Back to Sign In
            </Link>
          </div>
        </div>
      </div>

      <!-- Additional Info Card -->
      <div class="info-card">
        <h3>🔐 Password Security Tips</h3>
        <div class="security-tips">
          <div class="tip">
            <span class="tip-icon">🎯</span>
            <span class="tip-text">Use a unique password you haven't used before</span>
          </div>
          <div class="tip">
            <span class="tip-icon">🔤</span>
            <span class="tip-text">Mix uppercase, lowercase, numbers & symbols</span>
          </div>
          <div class="tip">
            <span class="tip-icon">📏</span>
            <span class="tip-text">Make it at least 12 characters long</span>
          </div>
          <div class="tip">
            <span class="tip-icon">💭</span>
            <span class="tip-text">Consider using a passphrase or password manager</span>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import { ref, reactive, computed, onMounted, nextTick } from 'vue'
import { router, Link, usePage } from '@inertiajs/vue3'
import Layout from '../../../Layout/Login.vue'

export default {
  name: 'ResetPassword',
  components: {
    Layout,
    Link
  },
  props: {
    title: {
      type: String,
      default: 'Reset Password'
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
  },
  setup(props) {
    const page = usePage()
    const processing = ref(false)
    const showPassword = ref(false)
    const showConfirmPassword = ref(false)
    const fieldErrors = ref({})

    const form = reactive({
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

    // Methods
    const clearFieldError = (field) => {
      if (fieldErrors.value[field]) {
        delete fieldErrors.value[field]
      }
    }

    const togglePassword = () => {
      showPassword.value = !showPassword.value
    }

    const toggleConfirmPassword = () => {
      showConfirmPassword.value = !showConfirmPassword.value
    }

    const handlePasswordReset = async () => {
      if (processing.value || !canSubmit.value) return

      // Clear field errors
      fieldErrors.value = {}

      // Validate form
      if (!form.password) {
        fieldErrors.value.password = 'Password is required'
        return
      }

      if (!hasMinLength.value) {
        fieldErrors.value.password = 'Password must be at least 8 characters long'
        return
      }

      if (!form.password_confirmation) {
        fieldErrors.value.password_confirmation = 'Please confirm your password'
        return
      }

      if (passwordMismatch.value) {
        fieldErrors.value.password_confirmation = 'Passwords do not match'
        return
      }

      processing.value = true

      try {
        await router.post(route('password.change.user'), {
          token: form.token,
          email: form.email,
          password: form.password,
          password_confirmation: form.password_confirmation
        }, {
          preserveScroll: true,
          onError: (errors) => {
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
            processing.value = false
            // Success will be handled by redirect
          }
        })
      } catch (error) {
        console.error('Password reset error:', error)
        processing.value = false
      }
    }

    // Set email from URL params if available
    onMounted(() => {
      const urlParams = new URLSearchParams(window.location.search)
      const emailParam = urlParams.get('email')
      if (emailParam && !form.email) {
        form.email = emailParam
      }
    })

    return {
      form,
      processing,
      showPassword,
      showConfirmPassword,
      fieldErrors,
      hasMinLength,
      hasLowercase,
      hasUppercase,
      hasNumber,
      hasSpecialChar,
      passwordMismatch,
      passwordsMatch,
      passwordStrengthPercent,
      passwordStrengthClass,
      passwordStrengthText,
      canSubmit,
      clearFieldError,
      togglePassword,
      toggleConfirmPassword,
      handlePasswordReset,
      errors: computed(() => ({ ...props.errors, ...fieldErrors.value }))
    }
  }
}
</script>

<style scoped>
.auth-container {
  width: 100%;
  max-width: 520px;
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

.readonly-input {
  background-color: #edf2f7 !important;
  color: #4a5568;
  cursor: not-allowed;
  opacity: 0.8;
}

.readonly-input:focus {
  border-color: #cbd5e0 !important;
  box-shadow: none !important;
  transform: none !important;
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
  font-size: 12px;
  margin-top: 6px;
  display: block;
  font-weight: 500;
}

.success-message {
  color: #38a169;
  font-size: 12px;
  margin-top: 6px;
  display: block;
  font-weight: 500;
}

.password-hint {
  color: #718096;
  font-size: 12px;
  margin-top: 6px;
  display: block;
}

/* Password Strength Indicator */
.password-strength {
  margin-top: 16px;
  padding: 16px;
  background: rgba(102, 126, 234, 0.02);
  border-radius: 12px;
  border: 1px solid rgba(102, 126, 234, 0.1);
}

.strength-label {
  font-size: 12px;
  color: #4a5568;
  margin-bottom: 8px;
  font-weight: 600;
}

.strength-bar {
  width: 100%;
  height: 8px;
  background-color: #e2e8f0;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 8px;
}

.strength-fill {
  height: 100%;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.strength-fill.weak {
  background: linear-gradient(90deg, #fc8181, #e53e3e);
}

.strength-fill.medium {
  background: linear-gradient(90deg, #f6ad55, #dd6b20);
}

.strength-fill.strong {
  background: linear-gradient(90deg, #68d391, #38a169);
}

.strength-text {
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 12px;
}

.strength-text.weak {
  color: #e53e3e;
}

.strength-text.medium {
  color: #dd6b20;
}

.strength-text.strong {
  color: #38a169;
}

/* Password Requirements */
.password-requirements {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 6px;
}

.requirement {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  color: #718096;
  transition: color 0.2s;
}

.requirement.met {
  color: #38a169;
}

.requirement-icon {
  font-size: 12px;
  width: 16px;
  text-align: center;
}

/* Security Notice */
.security-notice {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
  border: 1px solid rgba(102, 126, 234, 0.1);
  border-radius: 12px;
  padding: 20px;
  margin: 24px 0;
  display: flex;
  gap: 16px;
}

.notice-icon {
  font-size: 24px;
  flex-shrink: 0;
  margin-top: 2px;
}

.notice-text {
  flex: 1;
}

.notice-text strong {
  color: #2d3748;
  font-size: 14px;
  font-weight: 600;
  display: block;
  margin-bottom: 8px;
}

.notice-text p {
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
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.info-card h3 {
  color: #2d3748;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
}

.security-tips {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.tip {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px 16px;
  background: rgba(102, 126, 234, 0.05);
  border-radius: 10px;
  border: 1px solid rgba(102, 126, 234, 0.1);
}

.tip-icon {
  font-size: 16px;
  flex-shrink: 0;
  margin-top: 1px;
}

.tip-text {
  font-size: 13px;
  color: #4a5568;
  line-height: 1.4;
  font-weight: 500;
}

/* Transitions */
.error-enter-active, .error-leave-active,
.success-enter-active, .success-leave-active {
  transition: all 0.3s ease;
}

.error-enter-from, .success-enter-from {
  opacity: 0;
  transform: translateY(-8px);
}

.error-leave-to, .success-leave-to {
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
@media (max-width: 600px) {
  .password-requirements {
    grid-template-columns: 1fr;
  }
}

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

  .security-notice {
    flex-direction: column;
    text-align: center;
    gap: 12px;
  }

  .info-card {
    margin: 0 16px;
    padding: 20px;
  }
}
</style>
