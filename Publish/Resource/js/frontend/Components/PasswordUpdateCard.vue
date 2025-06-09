<template>
  <div class="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
    <div class="flex items-center gap-4 mb-8">
      <div class="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center">
        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      </div>
      <div>
        <h2 class="text-xl font-semibold text-white">Security</h2>
        <p class="text-slate-400">Update your password and security settings</p>
      </div>
    </div>

    <form @submit.prevent="updatePassword" class="space-y-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- New Password -->
        <div class="space-y-2">
          <label class="text-sm font-medium text-slate-300">New Password</label>
          <div class="relative">
            <input
              v-model="passwordForm.password"
              :type="showPassword ? 'text' : 'password'"
              :class="[
                'w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-slate-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 pr-12',
                passwordForm.errors.password ? 'border-red-500/50 bg-red-500/5' : 'border-white/10 hover:border-white/20'
              ]"
              placeholder="Enter new password"
              autocomplete="new-password"
            />
            <button
              type="button"
              @click="showPassword = !showPassword"
              class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
            >
              <svg v-if="showPassword" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
              </svg>
              <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </button>
          </div>
          <Transition name="slide-down">
            <p v-if="passwordForm.errors.password" class="text-sm text-red-400">{{ passwordForm.errors.password }}</p>
          </Transition>
        </div>

        <!-- Confirm Password -->
        <div class="space-y-2">
          <label class="text-sm font-medium text-slate-300">Confirm Password</label>
          <input
            v-model="passwordForm.password_confirmation"
            :type="showPassword ? 'text' : 'password'"
            :class="[
              'w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-slate-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500',
              'border-white/10 hover:border-white/20'
            ]"
            placeholder="Confirm new password"
            autocomplete="new-password"
          />
        </div>
      </div>

      <!-- 2FA Code if enabled -->
      <div v-if="requiresTwoFactor" class="space-y-2">
        <label class="text-sm font-medium text-slate-300">2FA Code</label>
        <input
          v-model="passwordForm.code"
          type="text"
          :class="[
            'w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-slate-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500',
            passwordForm.errors.code ? 'border-red-500/50 bg-red-500/5' : 'border-white/10 hover:border-white/20'
          ]"
          placeholder="Enter 6-digit code"
          maxlength="6"
        />
        <Transition name="slide-down">
          <p v-if="passwordForm.errors.code" class="text-sm text-red-400">{{ passwordForm.errors.code }}</p>
        </Transition>
      </div>

      <div class="flex justify-end">
        <button
          type="submit"
          :disabled="passwordForm.processing || !passwordForm.password || !passwordForm.password_confirmation"
          class="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 disabled:opacity-50 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-orange-500/50"
        >
          <span v-if="passwordForm.processing" class="flex items-center">
            <svg class="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Updating...
          </span>
          <span v-else>Update Password</span>
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useForm } from '@inertiajs/vue3'

const props = defineProps({
  user: Object
})

const showPassword = ref(false)

const passwordForm = useForm({
  password: '',
  password_confirmation: '',
  code: ''
})

const requiresTwoFactor = computed(() => {
  return props.user.data?.two_factor_enabled || false
})

const updatePassword = () => {
  passwordForm.patch(route('user.update-password', props.user.data.id), {
    preserveScroll: true,
    onSuccess: () => {
      passwordForm.reset()
      showPassword.value = false
    }
  })
}
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>
