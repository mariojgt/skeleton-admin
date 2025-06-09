<template>
  <Layout :title="title">
    <div class="auth-container">
      <div class="auth-card">
        <!-- Header -->
        <div class="auth-header">
          <div class="logo">
            <h1>🚀</h1>
          </div>
          <h2>Create Account</h2>
          <p>Join us today and get started</p>
        </div>

        <!-- Registration Form -->
        <form @submit.prevent="handleRegister" class="auth-form" novalidate>
          <!-- Username Field -->
          <div class="form-group">
            <label for="username" class="form-label">
              Username
              <span class="required">*</span>
            </label>
            <div class="input-wrapper">
              <input
                id="username"
                type="text"
                v-model="form.username"
                :class="['form-input', { 'error': errors.username, 'valid': isUsernameValid }]"
                placeholder="Choose a unique username"
                autocomplete="username"
                required
                @blur="validateUsername"
                @input="clearFieldError('username')"
              />
              <div class="input-icon">👤</div>
            </div>
            <Transition name="error">
              <span v-if="errors.username" class="error-message">{{ errors.username }}</span>
            </Transition>
          </div>

          <!-- Name Fields Row -->
          <div class="form-row">
            <!-- First Name Field -->
            <div class="form-group">
              <label for="first_name" class="form-label">
                First Name
                <span class="required">*</span>
              </label>
              <div class="input-wrapper">
                <input
                  id="first_name"
                  type="text"
                  v-model="form.first_name"
                  :class="['form-input', { 'error': errors.first_name, 'valid': isFirstNameValid }]"
                  placeholder="Your first name"
                  autocomplete="given-name"
                  required
                  @blur="validateFirstName"
                  @input="clearFieldError('first_name')"
                />
              </div>
              <Transition name="error">
                <span v-if="errors.first_name" class="error-message">{{ errors.first_name }}</span>
              </Transition>
            </div>

            <!-- Last Name Field -->
            <div class="form-group">
              <label for="last_name" class="form-label">
                Last Name
                <span class="required">*</span>
              </label>
              <div class="input-wrapper">
                <input
                  id="last_name"
                  type="text"
                  v-model="form.last_name"
                  :class="['form-input', { 'error': errors.last_name, 'valid': isLastNameValid }]"
                  placeholder="Your last name"
                  autocomplete="family-name"
                  required
                  @blur="validateLastName"
                  @input="clearFieldError('last_name')"
                />
              </div>
              <Transition name="error">
                <span v-if="errors.last_name" class="error-message">{{ errors.last_name }}</span>
              </Transition>
            </div>
          </div>

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
              <div class="input-icon">📧</div>
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
                placeholder="Create a strong password"
                autocomplete="new-password"
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
            </div>
          </div>

          <!-- Confirm Password Field -->
          <div class="form-group">
            <label for="password_confirmation" class="form-label">
              Confirm Password
              <span class="required">*</span>
            </label>
            <div class="input-wrapper">
              <input
                id="password_confirmation"
                :type="showConfirmPassword ? 'text' : 'password'"
                v-model="form.password_confirmation"
                :class="['form-input', { 'error': errors.password_confirmation || passwordMismatch, 'valid': passwordsMatch }]"
                placeholder="Confirm your password"
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
          </div>

          <!-- Terms Checkbox -->
          <div class="form-group checkbox-group">
            <label class="checkbox-label">
              <input
                type="checkbox"
                v-model="form.terms"
                class="checkbox-input"
                required
              />
              <span class="checkmark"></span>
              <span class="checkbox-text">
                I agree to the
                <Link href="#" class="link">Terms of Service</Link>
                and
                <Link href="#" class="link">Privacy Policy</Link>
              </span>
            </label>
            <Transition name="error">
              <span v-if="!form.terms && formSubmitted" class="error-message">You must agree to the terms</span>
            </Transition>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            class="btn-primary"
            :disabled="!canSubmit || processing"
          >
            <Transition name="spinner" mode="out-in">
              <span v-if="processing" class="spinner" key="spinner"></span>
              <span v-else key="text">Create Account</span>
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
            <span>Already have an account?</span>
            <Link :href="route('user.login')" class="link">
              Sign in
            </Link>
          </div>
        </div>
      </div>

      <!-- Additional Info Card -->
      <div class="info-card">
        <h3>🎉 Welcome to Skeleton Admin</h3>
        <p>Join thousands of users who trust our platform for their admin needs.</p>
        <div class="features">
          <div class="feature">✨ Modern Interface</div>
          <div class="feature">🔒 Secure & Reliable</div>
          <div class="feature">⚡ Lightning Fast</div>
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
  name: 'RegisterIndex',
  components: {
    Layout,
    Link
  },
  props: {
    title: {
      type: String,
      default: 'Create Account'
    },
    errors: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const processing = ref(false)
    const showPassword = ref(false)
    const showConfirmPassword = ref(false)
    const fieldErrors = ref({})
    const formSubmitted = ref(false)

    const form = reactive({
      username: '',
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      password_confirmation: '',
      terms: false
    })

    // Validation computed properties
    const isUsernameValid = computed(() => {
      return form.username && form.username.length >= 3 && /^[a-zA-Z0-9_]+$/.test(form.username)
    })

    const isFirstNameValid = computed(() => {
      return form.first_name && form.first_name.trim().length >= 2
    })

    const isLastNameValid = computed(() => {
      return form.last_name && form.last_name.trim().length >= 2
    })

    const isEmailValid = computed(() => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return form.email && emailRegex.test(form.email)
    })

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
      const password = form.password
      if (!password) return 0

      let score = 0

      // Length checks
      if (password.length >= 8) score += 1
      if (password.length >= 12) score += 1

      // Character variety checks
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

    const canSubmit = computed(() => {
      return isUsernameValid.value &&
             isFirstNameValid.value &&
             isLastNameValid.value &&
             isEmailValid.value &&
             form.password &&
             passwordsMatch.value &&
             form.terms &&
             !processing.value
    })

    // Methods
    const validateUsername = () => {
      if (form.username && !isUsernameValid.value) {
        if (form.username.length < 3) {
          fieldErrors.value.username = 'Username must be at least 3 characters'
        } else if (!/^[a-zA-Z0-9_]+$/.test(form.username)) {
          fieldErrors.value.username = 'Username can only contain letters, numbers, and underscores'
        }
      } else {
        delete fieldErrors.value.username
      }
    }

    const validateFirstName = () => {
      if (form.first_name && !isFirstNameValid.value) {
        fieldErrors.value.first_name = 'First name must be at least 2 characters'
      } else {
        delete fieldErrors.value.first_name
      }
    }

    const validateLastName = () => {
      if (form.last_name && !isLastNameValid.value) {
        fieldErrors.value.last_name = 'Last name must be at least 2 characters'
      } else {
        delete fieldErrors.value.last_name
      }
    }

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

    const toggleConfirmPassword = () => {
      showConfirmPassword.value = !showConfirmPassword.value
    }

    const handleRegister = async () => {
      formSubmitted.value = true

      if (processing.value || !canSubmit.value) return

      // Clear field errors
      fieldErrors.value = {}

      // Validate all fields
      validateUsername()
      validateFirstName()
      validateLastName()
      validateEmail()

      if (Object.keys(fieldErrors.value).length > 0) {
        return
      }

      processing.value = true

      try {
        await router.post(route('register.user'), {
          username: form.username.trim(),
          first_name: form.first_name.trim(),
          last_name: form.last_name.trim(),
          email: form.email.trim(),
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
          }
        })
      } catch (error) {
        console.error('Registration error:', error)
        processing.value = false
      }
    }

    return {
      form,
      processing,
      showPassword,
      showConfirmPassword,
      fieldErrors,
      formSubmitted,
      isUsernameValid,
      isFirstNameValid,
      isLastNameValid,
      isEmailValid,
      passwordMismatch,
      passwordsMatch,
      passwordStrengthPercent,
      passwordStrengthClass,
      passwordStrengthText,
      canSubmit,
      validateUsername,
      validateFirstName,
      validateLastName,
      validateEmail,
      clearFieldError,
      togglePassword,
      toggleConfirmPassword,
      handleRegister,
      errors: computed(() => ({ ...props.errors, ...fieldErrors.value }))
    }
  }
}
</script>

<style scoped>
.auth-container {
  width: 100%;
  max-width: 480px;
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
  margin-bottom: 20px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 20px;
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
  font-size: 12px;
  margin-top: 6px;
  display: block;
  font-weight: 500;
}

/* Password Strength Indicator */
.password-strength {
  margin-top: 12px;
}

.strength-label {
  font-size: 12px;
  color: #4a5568;
  margin-bottom: 6px;
  font-weight: 500;
}

.strength-bar {
  width: 100%;
  height: 6px;
  background-color: #e2e8f0;
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 6px;
}

.strength-fill {
  height: 100%;
  border-radius: 3px;
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

/* Checkbox */
.checkbox-group {
  margin: 24px 0;
}

.checkbox-label {
  display: flex;
  align-items: flex-start;
  cursor: pointer;
  font-size: 14px;
  color: #4a5568;
  line-height: 1.5;
  gap: 12px;
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
  flex-shrink: 0;
  margin-top: 2px;
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
  margin-bottom: 12px;
  font-size: 18px;
  font-weight: 600;
}

.info-card p {
  color: #718096;
  font-size: 14px;
  margin-bottom: 16px;
  line-height: 1.5;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 8px;
}

.feature {
  background: rgba(102, 126, 234, 0.1);
  color: #667eea;
  padding: 8px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
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
@media (max-width: 600px) {
  .form-row {
    grid-template-columns: 1fr;
    gap: 20px;
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

  .info-card {
    margin: 0 16px;
    padding: 20px;
  }

  .features {
    grid-template-columns: 1fr;
  }
}
</style>
