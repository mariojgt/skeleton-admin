<template>
  <Layout title="Backend Login">
    <template #form>
      <form @submit.prevent="submitForm">
        <div class="space-y-4">
          <!-- Email Input Field -->
          <input-field
            id="email"
            v-model="email"
            label="Email"
            type="email"
            name="email"
            placeholder="Type your email"
          />

          <!-- Submit Button -->
          <div class="pt-2">
            <Submit
              class="btn btn-primary w-full"
              :disabled="!email || isLoading"
              @click="submitForm"
            >
              <span v-if="!isLoading">Send Magic Link</span>
              <span v-else class="loading loading-spinner loading-sm mr-2">Sending...</span>
            </Submit>
          </div>
        </div>
      </form>
    </template>

    <template #links>
      <div class="flex flex-col sm:flex-row gap-3 justify-center items-center mt-6">
        <Link class="btn btn-outline btn-sm" href="/admin/register">
          <span>Register</span>
        </Link>
        <Link class="btn btn-outline btn-sm" href="/admin/forgot-password">
          <span>Forgot Password</span>
        </Link>
      </div>
    </template>
  </Layout>
</template>

<script setup>
import { ref } from 'vue'
import { Link, router } from "@inertiajs/vue3"
import Layout from "@backend_layout/Login.vue"

// Import the form components
import {
  InputField,
  InputPassword,
  Submit
} from "@mariojgt/masterui/packages/index"

// State
const email = ref("")
const isLoading = ref(false)

// Props
const props = defineProps({
  title: {
    type: String,
    default: "Backend Login"
  }
})

// Methods
const submitForm = () => {
  if (!email.value || isLoading.value) return

  isLoading.value = true

  const form = {
    email: email.value
  }

  router.post(route('skeleton.login.magic'), form, {
    onFinish: () => {
      isLoading.value = false
    },
    onError: (errors) => {
      isLoading.value = false
      console.log('Login errors:', errors)
    }
  })
}
</script>
