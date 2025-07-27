<template>
  <Layout title="Backend Register">
    <template #form>
      <form @submit.prevent="submitForm">
        <div class="space-y-4">
          <!-- Name Fields Row -->
          <div class="flex flex-col sm:flex-row gap-4">
            <input-field
              id="first_name"
              v-model="first_name"
              label="First Name"
              type="text"
              name="first_name"
              placeholder="Type your first name"
              class="w-full"
            />
            <input-field
              id="last_name"
              v-model="last_name"
              label="Last Name"
              type="text"
              name="last_name"
              placeholder="Type your last name"
              class="w-full"
            />
          </div>

          <!-- Email Field -->
          <input-field
            id="email"
            v-model="email"
            label="Email"
            type="email"
            name="email"
            placeholder="Type your email"
          />

          <!-- Password Field -->
          <input-password
            id="password"
            v-model="password"
            label="Password"
            name="password"
            placeholder="Type your password"
          />

          <!-- Password Confirmation Field -->
          <input-password
            id="password_confirmation"
            v-model="password_confirmation"
            label="Confirm Password"
            name="password_confirmation"
            placeholder="Confirm your password"
          />

          <!-- Submit Button -->
          <div class="pt-6">
            <Submit
              name="Register"
              class="btn btn-primary w-full"
              :disabled="!isFormValid || isLoading"
              @click="submitForm"
            >
              <span v-if="!isLoading">Register</span>
              <span v-else class="loading loading-spinner loading-sm mr-2">Creating Account...</span>
            </Submit>
          </div>
        </div>
      </form>
    </template>

    <template #links>
      <div class="flex justify-center mt-6">
        <Link class="btn btn-outline btn-sm" href="/admin/login">
          <span>Already have an account? Login</span>
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
const first_name = ref("")
const last_name = ref("")
const email = ref("")
const password = ref("")
const password_confirmation = ref("")
const isLoading = ref(false)

// Props
const props = defineProps({
  title: {
    type: String,
    default: "Backend Register"
  }
})

// Computed
const isFormValid = computed(() => {
  return first_name.value &&
         last_name.value &&
         email.value &&
         password.value &&
         password_confirmation.value &&
         password.value === password_confirmation.value
})

// Methods
const submitForm = () => {
  if (!isFormValid.value || isLoading.value) return

  isLoading.value = true

  const form = {
    first_name: first_name.value,
    last_name: last_name.value,
    email: email.value,
    password: password.value,
    password_confirmation: password_confirmation.value
  }

  router.post(route("skeleton.register.user"), form, {
    onFinish: () => {
      isLoading.value = false
    },
    onError: (errors) => {
      isLoading.value = false
      console.log('Registration errors:', errors)
    },
    onSuccess: () => {
      // Registration successful, user will be redirected
    }
  })
}
</script>
