<template>
  <div class="space-y-8">
    <!-- 2FA Setup (Not Enabled) -->
    <div v-if="!autenticator.is_enable" class="space-y-6">
      <!-- Header -->
      <div class="text-center">
        <div class="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.414-5.414l1.414 1.414L9 12m-4-4l1.414-1.414M12 2l7 7-7 7"/>
          </svg>
        </div>
        <h3 class="mt-4 text-xl font-semibold text-slate-900 dark:text-slate-100">
          Enable Two-Factor Authentication
        </h3>
        <p class="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
          Add an extra layer of security to your account by enabling two-factor authentication
        </p>
      </div>

      <!-- Setup Instructions -->
      <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
        <h4 class="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">Setup Instructions</h4>
        <ol class="space-y-3 text-sm text-blue-800 dark:text-blue-200">
          <li class="flex items-start">
            <span class="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">1</span>
            Install an authenticator app on your mobile device (Google Authenticator, Authy, etc.)
          </li>
          <li class="flex items-start">
            <span class="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">2</span>
            Scan the QR code below with your authenticator app
          </li>
          <li class="flex items-start">
            <span class="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">3</span>
            Enter the 6-digit code from your app to complete setup
          </li>
        </ol>
      </div>

      <!-- QR Code and Setup Form -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- QR Code -->
        <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-6 text-center">
          <h4 class="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">Scan QR Code</h4>
          <div class="inline-block p-4 bg-white rounded-lg shadow-sm border">
            <div v-html="autenticator.codeinfo?.qr_code"></div>
          </div>

          <!-- Manual Entry Option -->
          <div class="mt-6 p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
            <p class="text-sm text-slate-600 dark:text-slate-400 mb-2">Can't scan? Enter this code manually:</p>
            <div class="flex items-center justify-center space-x-2">
              <code class="px-3 py-2 bg-slate-100 dark:bg-slate-600 rounded text-sm font-mono text-slate-900 dark:text-slate-100 break-all">
                {{ autenticator.codeinfo?.secret }}
              </code>
              <button
                @click="copySecret"
                class="p-2 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
                title="Copy to clipboard"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Verification Form -->
        <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
          <h4 class="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">Verify Setup</h4>
          <form @submit.prevent="submitForm" class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Authentication Code
              </label>
              <input
                v-model="code"
                type="text"
                placeholder="Enter 6-digit code"
                maxlength="6"
                class="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-500 transition-colors duration-200 text-center text-lg font-mono tracking-widest"
                required
              />
              <p class="mt-2 text-xs text-slate-500 dark:text-slate-400">
                Enter the 6-digit code shown in your authenticator app
              </p>
            </div>

            <button
              type="submit"
              :disabled="isSubmitting || code.length !== 6"
              class="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              <svg v-if="isSubmitting" class="w-4 h-4 mr-2 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
              </svg>
              <svg v-else class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              {{ isSubmitting ? 'Activating...' : 'Activate 2FA' }}
            </button>
          </form>
        </div>
      </div>
    </div>

    <!-- 2FA Enabled - Backup Codes Management -->
    <div v-else class="space-y-6">
      <!-- Header -->
      <div class="text-center">
        <div class="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.414-5.414l1.414 1.414L9 12m-4-4l1.414-1.414M12 2l7 7-7 7"/>
          </svg>
        </div>
        <h3 class="mt-4 text-xl font-semibold text-slate-900 dark:text-slate-100">
          Two-Factor Authentication Enabled
        </h3>
        <p class="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
          Your account is protected with two-factor authentication
        </p>
      </div>

      <!-- Status Card -->
      <div class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <svg class="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <div class="ml-3">
            <h4 class="text-sm font-medium text-green-800 dark:text-green-200">
              Two-factor authentication is active
            </h4>
            <p class="text-sm text-green-600 dark:text-green-300 mt-1">
              Your account has an extra layer of security enabled
            </p>
          </div>
        </div>
      </div>

      <!-- Backup Codes -->
      <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
        <div class="px-6 py-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50">
          <div class="flex items-center justify-between">
            <div>
              <h4 class="text-lg font-semibold text-slate-900 dark:text-slate-100">Backup Codes</h4>
              <p class="text-sm text-slate-600 dark:text-slate-400 mt-1">
                Use these codes if you lose access to your authenticator app
              </p>
            </div>
            <div class="flex items-center space-x-3">
              <button
                @click="generateNewCodes"
                class="inline-flex items-center px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg shadow-sm bg-white dark:bg-slate-800 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-200"
              >
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                </svg>
                Regenerate
              </button>
              <button
                @click="downloadCodes"
                class="inline-flex items-center px-3 py-2 bg-blue-500 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white hover:bg-blue-600 transition-colors duration-200"
              >
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                Download
              </button>
            </div>
          </div>
        </div>

        <div class="p-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              v-for="(code, index) in autenticator.backup_codes"
              :key="index"
              class="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700 rounded-lg"
            >
              <code class="text-sm font-mono text-slate-900 dark:text-slate-100">{{ code.code }}</code>
              <div class="flex items-center space-x-2">
                <span
                  class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium"
                  :class="code.used ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400' : 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'"
                >
                  {{ code.used ? 'Used' : 'Available' }}
                </span>
                <button
                  @click="copyCode(code.code)"
                  class="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                  title="Copy code"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Disable 2FA -->
      <div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
        <div class="flex items-start">
          <div class="flex-shrink-0">
            <svg class="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
            </svg>
          </div>
          <div class="ml-3 flex-1">
            <h4 class="text-sm font-medium text-red-800 dark:text-red-200">
              Disable Two-Factor Authentication
            </h4>
            <p class="text-sm text-red-600 dark:text-red-300 mt-1 mb-4">
              This will remove the extra security layer from your account. Only disable if you're sure you want to proceed.
            </p>
            <button
              @click="showDisableModal = true"
              class="inline-flex items-center px-4 py-2 bg-red-500 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white hover:bg-red-600 transition-colors duration-200"
            >
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
              Disable 2FA
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Disable 2FA Modal -->
    <div v-if="showDisableModal" class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div class="bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 max-w-md w-full">
        <div class="p-6">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Disable Two-Factor Authentication
            </h3>
          </div>

          <p class="text-sm text-slate-600 dark:text-slate-400 mb-6">
            Enter your authentication code to confirm disabling two-factor authentication.
          </p>

          <div class="mb-6">
            <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Authentication Code
            </label>
            <input
              v-model="disableCode"
              type="text"
              placeholder="Enter 6-digit code"
              maxlength="6"
              class="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-500 transition-colors duration-200 text-center text-lg font-mono tracking-widest"
            />
          </div>

          <div class="flex items-center justify-end space-x-3">
            <button
              @click="showDisableModal = false; disableCode = ''"
              class="px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              @click="removeAuthenticator"
              :disabled="isDisabling || disableCode.length !== 6"
              class="inline-flex items-center px-4 py-2 bg-red-500 border border-transparent rounded-lg text-sm font-medium text-white hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              <svg v-if="isDisabling" class="w-4 h-4 mr-2 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
              </svg>
              {{ isDisabling ? 'Disabling...' : 'Disable 2FA' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { router } from '@inertiajs/vue3'

// Props
const props = defineProps({
  adminInfo: {
    type: Object,
    default: () => ({})
  },
  autenticator: {
    type: Object,
    default: () => ({})
  }
})

// State
const code = ref('')
const disableCode = ref('')
const adminInformation = ref({})
const isSubmitting = ref(false)
const isDisabling = ref(false)
const showDisableModal = ref(false)

// Lifecycle
onMounted(() => {
  adminInformation.value = { ...props.adminInfo }
})

// Methods
const submitForm = async () => {
  if (code.value.length !== 6) return

  isSubmitting.value = true

  try {
    const form = { code: code.value }
    await router.post(route('admin.2fa.enable'), form)
    code.value = ''
  } finally {
    isSubmitting.value = false
  }
}

const removeAuthenticator = async () => {
  if (disableCode.value.length !== 6) return

  isDisabling.value = true

  try {
    const form = { code: disableCode.value }
    await router.patch(route('admin.remove-autenticator'), form)
    showDisableModal.value = false
    disableCode.value = ''
  } finally {
    isDisabling.value = false
  }
}

const copySecret = async () => {
  try {
    await navigator.clipboard.writeText(props.autenticator.codeinfo?.secret)
    // You could show a toast notification here
  } catch (err) {
    console.error('Failed to copy secret:', err)
  }
}

const copyCode = async (codeText) => {
  try {
    await navigator.clipboard.writeText(codeText)
    // You could show a toast notification here
  } catch (err) {
    console.error('Failed to copy code:', err)
  }
}

const downloadCodes = () => {
  const csvContent = "data:text/csv;charset=utf-8," +
    "Code,Status\n" +
    Object.values(props.autenticator.backup_codes)
      .map(code => `${code.code},${code.used ? 'Used' : 'Available'}`)
      .join('\n')

  const encodedUri = encodeURI(csvContent)
  const link = document.createElement('a')
  link.setAttribute('href', encodedUri)
  link.setAttribute('download', '2fa-backup-codes.csv')
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

const generateNewCodes = async () => {
  if (confirm('This will invalidate all existing backup codes. Continue?')) {
    try {
      await router.post(route('admin.2fa.regenerate-codes'))
    } catch (err) {
      console.error('Failed to regenerate codes:', err)
    }
  }
}
</script>
