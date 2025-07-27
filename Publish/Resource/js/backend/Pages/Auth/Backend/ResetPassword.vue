<template>
  <Layout title="Backend Reset Password">
    <template #form>
      <form @submit.prevent="submitForm">
        <div class="space-y-4">
          <!-- Email Field -->
          <input-field
            id="email"
            v-model="email"
            label="Email"
            type="email"
            name="email"
            placeholder="Enter your email address"
          />

          <!-- New Password Field -->
          <input-password
            id="password"
            v-model="password"
            label="New Password"
            name="password"
            placeholder="Enter your new password"
          />

          <!-- Password Confirmation Field -->
          <input-password
            id="password_confirmation"
            v-model="password_confirmation"
            label="Confirm New Password"
            name="password_confirmation"
            placeholder="Confirm your new password"
          />

          <!-- Submit Button -->
          <div class="pt-6">
            <Submit
              name="Reset Password"
              class="btn btn-primary w-full"
              :disabled="!isFormValid || isLoading"
              @click="submitForm"
            >
              <span v-if="!isLoading">Reset Password</span>
              <span v-else class="loading loading-spinner loading-sm mr-2">Resetting...</span>
            </Submit>
          </div>
        </div>
      </form>
    </template>

    <template #links>
      <div class="flex flex-col sm:flex-row gap-3 justify-center items-center mt-6">
        <Link class="btn btn-outline btn-sm" href="/admin/login">
          <span>Back to Login</span>
        </Link>
        <Link class="btn btn-outline btn-sm" href="/admin/register">
          <span>Create Account</span>
        </Link>
      </div>
    </template>
  </Layout>
</template>

<script setup>
import { ref, computed } from 'vue'
import { router, Link } from "@inertiajs/vue3"
import Layout from "@backend_layout/Login.vue"

// Import the form components
import {
  InputField,
  InputPassword,
  Submit
} from "@mariojgt/masterui/packages/index"

// State
const email = ref("")
const password = ref("")
const password_confirmation = ref("")
const isLoading = ref(false)

// Props
const props = defineProps({
  token: {
    type: String,
    default: ""
  },
  title: {
    type: String,
    default: "Reset Password"
  }
})

// Computed
const isFormValid = computed(() => {
  return email.value &&
         password.value &&
         password_confirmation.value &&
         password.value === password_confirmation.value &&
         password.value.length >= 8 // Minimum password length
})

// Methods
const submitForm = () => {
  if (!isFormValid.value || isLoading.value) return

  isLoading.value = true

  const form = {
    email: email.value,
    password: password.value,
    password_confirmation: password_confirmation.value,
    token: props.token
  }

  router.post(route("skeleton.password.change"), form, {
    onFinish: () => {
      isLoading.value = false
    },
    onError: (errors) => {
      isLoading.value = false
      console.log('Password reset errors:', errors)
    },
    onSuccess: () => {
      // Password reset successful, user will be redirected
    }
  })
}
</script>
