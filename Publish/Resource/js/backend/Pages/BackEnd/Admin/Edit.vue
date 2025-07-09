<template>
  <Layout>
    <!-- Modern Page Header -->
    <div class="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
      <div class="px-4 sm:px-6 lg:px-8 py-6">
        <div class="flex items-center justify-between">
          <!-- Header Content -->
          <div class="flex items-center space-x-4">
            <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
            </div>
            <div>
              <h1 class="text-2xl font-bold text-slate-900 dark:text-slate-100">
                User Profile
              </h1>
              <p class="text-sm text-slate-600 dark:text-slate-400 mt-1">
                Manage user details, security settings, and authentication
              </p>
            </div>
          </div>

          <!-- Back Button -->
          <button
            @click="goBack"
            class="inline-flex items-center px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg shadow-sm bg-white dark:bg-slate-800 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-200"
          >
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
            </svg>
            Back
          </button>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden">

        <!-- Tab Navigation -->
        <div class="border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50">
          <nav class="flex space-x-8 px-6" aria-label="Tabs">
            <button
              v-for="(tab, index) in tabs"
              :key="tab.id"
              @click="activeTab = index"
              class="relative py-4 px-1 text-sm font-medium transition-all duration-200"
              :class="activeTab === index
                ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'"
            >
              <div class="flex items-center space-x-2">
                <component :is="tab.icon" class="w-5 h-5" />
                <span>{{ tab.name }}</span>
              </div>

              <!-- Active Tab Indicator -->
              <div
                v-if="activeTab === index"
                class="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
              ></div>
            </button>
          </nav>
        </div>

        <!-- Tab Content -->
        <div class="p-6">
          <div v-show="activeTab === 0">
            <ModernEditDetails
              :admin-info="admin.data"
              :roles="roles"
            />
          </div>

          <div v-show="activeTab === 1">
            <ModernPasswordUpdate
              :admin-info="admin.data"
              :autenticator-info="autenticator"
            />
          </div>

          <div v-show="activeTab === 2">
            <ModernAuthenticatorManager
              :admin-info="admin.data"
              :autenticator="autenticator"
            />
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script setup>
import { ref } from 'vue'
import { router } from '@inertiajs/vue3'
import Layout from '../../../Layout/App.vue'

// Components
import ModernEditDetails from './Components/ModernEditDetails.vue'
import ModernPasswordUpdate from './Components/ModernPasswordUpdate.vue'
import ModernAuthenticatorManager from './Components/ModernAuthenticatorManager.vue'

// Icons for tabs
const UserIcon = 'svg'
const LockIcon = 'svg'
const ShieldIcon = 'svg'

// Props
const props = defineProps({
  autenticator: {
    type: Object,
    default: () => ({})
  },
  admin: {
    type: Object,
    default: () => ({})
  },
  roles: {
    type: Object,
    default: () => ({})
  }
})

// State
const activeTab = ref(0)

// Tab configuration
const tabs = [
  {
    id: 'details',
    name: 'Details',
    icon: 'svg' // UserIcon component would go here
  },
  {
    id: 'security',
    name: 'Security',
    icon: 'svg' // LockIcon component would go here
  },
  {
    id: '2fa',
    name: '2FA',
    icon: 'svg' // ShieldIcon component would go here
  }
]

// Methods
const goBack = () => {
  window.history.back()
}
</script>
