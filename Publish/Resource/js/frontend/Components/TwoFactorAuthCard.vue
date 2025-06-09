<template>
  <div class="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
    <div class="flex items-center gap-3 mb-6">
      <div class="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      </div>
      <div>
        <h3 class="text-lg font-semibold text-white">Two-Factor Auth</h3>
        <p class="text-sm text-slate-400">Enhanced security</p>
      </div>
    </div>

    <!-- 2FA Enabled State -->
    <div v-if="autenticator.is_enable" class="space-y-4">
      <div class="flex items-center justify-between p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
        <div class="flex items-center gap-2">
          <svg class="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
          <span class="text-sm font-medium text-emerald-300">2FA Active</span>
        </div>
      </div>

      <!-- Backup Codes -->
      <div class="space-y-3">
        <p class="text-sm text-slate-300 font-medium">Backup Codes</p>
        <div class="bg-slate-900/50 rounded-lg p-3 max-h-32 overflow-y-auto border border-slate-700">
          <div class="grid grid-cols-1 gap-1 text-xs font-mono">
            <div v-for="(code, index) in autenticator.backup_codes" :key="index" class="text-slate-300 py-1">
              {{ code }}
            </div>
          </div>
        </div>
        <p class="text-xs text-slate-400">Save these codes in a safe place. You can use them if you lose access to your authenticator.</p>
      </div>

      <!-- Disable 2FA -->
      <form @submit.prevent="disable2FA" class="space-y-3">
        <input
          v-model="twoFAForm.code"
          type="text"
          placeholder="Enter 2FA code to disable"
          :class="[
            'w-full px-3 py-2 bg-white/5 border rounded-lg text-white placeholder-slate-400 text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500',
            twoFAForm.errors.code ? 'border-red-500/50 bg-red-500/5' : 'border-white/10 hover:border-white/20'
          ]"
          maxlength="6"
        />
        <Transition name="slide-down">
          <p v-if="twoFAForm.errors.code" class="text-sm text-red-400">{{ twoFAForm.errors.code }}</p>
        </Transition>
        <button
          type="submit"
          :disabled="twoFAForm.processing || !twoFAForm.code"
          class="w-full bg-red-500/20 hover:bg-red-500/30 disabled:opacity-50 text-red-400 font-medium py-2 px-4 rounded-lg transition-colors border border-red-500/30"
        >
          <span v-if="twoFAForm.processing" class="flex items-center justify-center">
            <svg class="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Disabling...
          </span>
          <span v-else>Disable 2FA</span>
        </button>
      </form>
    </div>

    <!-- 2FA Setup State -->
    <div v-else class="space-y-4">
      <div class="flex items-center justify-between p-3 bg-orange-500/10 border border-orange-500/20 rounded-lg">
        <div class="flex items-center gap-2">
          <svg class="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
          </svg>
          <span class="text-sm font-medium text-orange-300">2FA Disabled</span>
        </div>
      </div>

      <!-- QR Code Setup -->
      <div class="text-center space-y-3">
        <div class="bg-white p-3 rounded-lg inline-block">
          <div
            v-html="autenticator.codeinfo?.qr_code"
            class="w-32 h-32 mx-auto"
          ></div>
        </div>
        <p class="text-xs text-slate-400">Scan with authenticator app</p>
        <p class="text-xs text-slate-500 font-mono">
          Secret: {{ autenticator.codeinfo?.secret || 'Loading...' }}
        </p>
      </div>

      <!-- Enable 2FA -->
      <form @submit.prevent="enable2FA" class="space-y-3">
        <input
          v-model="twoFAForm.code"
          type="text"
          placeholder="Enter code from app"
          :class="[
            'w-full px-3 py-2 bg-white/5 border rounded-lg text-white placeholder-slate-400 text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500',
            twoFAForm.errors.code ? 'border-red-500/50 bg-red-500/5' : 'border-white/10 hover:border-white/20'
          ]"
          maxlength="6"
        />
        <Transition name="slide-down">
          <p v-if="twoFAForm.errors.code" class="text-sm text-red-400">{{ twoFAForm.errors.code }}</p>
        </Transition>
        <button
          type="submit"
          :disabled="twoFAForm.processing || !twoFAForm.code"
          class="w-full bg-purple-500/20 hover:bg-purple-500/30 disabled:opacity-50 text-purple-400 font-medium py-2 px-4 rounded-lg transition-colors border border-purple-500/30"
        >
          <span v-if="twoFAForm.processing" class="flex items-center justify-center">
            <svg class="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Enabling...
          </span>
          <span v-else>Enable 2FA</span>
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { useForm } from '@inertiajs/vue3'

const props = defineProps({
  autenticator: Object
})

const twoFAForm = useForm({
  code: ''
})

const enable2FA = () => {
  twoFAForm.post(route('user.2fa.enable'), {
    preserveScroll: true,
    onSuccess: () => {
      twoFAForm.reset()
    }
  })
}

const disable2FA = () => {
  twoFAForm.patch(route('user.remove-autenticator'), {
    preserveScroll: true,
    onSuccess: () => {
      twoFAForm.reset()
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
