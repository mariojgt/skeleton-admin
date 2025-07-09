<template>
  <App :title="title">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">

        <!-- Main Profile Section -->
        <div class="lg:col-span-2 space-y-8">

          <!-- Profile Information Card -->
          <div class="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
            <div class="flex items-center gap-4 mb-8">
              <div class="w-12 h-12 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h2 class="text-xl font-semibold text-white">Profile Information</h2>
                <p class="text-slate-400">Update your personal details and preferences</p>
              </div>
            </div>

            <!-- Avatar Section -->
            <AvatarSelector v-model="profileForm.avatar" />

            <!-- Profile Form -->
            <form @submit.prevent="updateProfile" class="space-y-6 mt-8">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Username -->
                <div class="space-y-2">
                  <label class="text-sm font-medium text-slate-300">Username</label>
                  <input
                    v-model="profileForm.username"
                    type="text"
                    :class="[
                      'w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-slate-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500',
                      profileForm.errors.username ? 'border-red-500/50 bg-red-500/5' : 'border-white/10 hover:border-white/20'
                    ]"
                    placeholder="Enter username"
                  />
                  <Transition name="slide-down">
                    <p v-if="profileForm.errors.username" class="text-sm text-red-400">{{ profileForm.errors.username }}</p>
                  </Transition>
                </div>

                <!-- Email -->
                <div class="space-y-2">
                  <label class="text-sm font-medium text-slate-300">Email</label>
                  <input
                    v-model="profileForm.email"
                    type="email"
                    :class="[
                      'w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-slate-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500',
                      profileForm.errors.email ? 'border-red-500/50 bg-red-500/5' : 'border-white/10 hover:border-white/20'
                    ]"
                    placeholder="Enter email"
                  />
                  <Transition name="slide-down">
                    <p v-if="profileForm.errors.email" class="text-sm text-red-400">{{ profileForm.errors.email }}</p>
                  </Transition>
                </div>

                <!-- First Name -->
                <div class="space-y-2">
                  <label class="text-sm font-medium text-slate-300">First Name</label>
                  <input
                    v-model="profileForm.first_name"
                    type="text"
                    :class="[
                      'w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-slate-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500',
                      profileForm.errors.first_name ? 'border-red-500/50 bg-red-500/5' : 'border-white/10 hover:border-white/20'
                    ]"
                    placeholder="Enter first name"
                  />
                  <Transition name="slide-down">
                    <p v-if="profileForm.errors.first_name" class="text-sm text-red-400">{{ profileForm.errors.first_name }}</p>
                  </Transition>
                </div>

                <!-- Last Name -->
                <div class="space-y-2">
                  <label class="text-sm font-medium text-slate-300">Last Name</label>
                  <input
                    v-model="profileForm.last_name"
                    type="text"
                    :class="[
                      'w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-slate-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500',
                      profileForm.errors.last_name ? 'border-red-500/50 bg-red-500/5' : 'border-white/10 hover:border-white/20'
                    ]"
                    placeholder="Enter last name"
                  />
                  <Transition name="slide-down">
                    <p v-if="profileForm.errors.last_name" class="text-sm text-red-400">{{ profileForm.errors.last_name }}</p>
                  </Transition>
                </div>
              </div>

              <div class="flex justify-end">
                <button
                  type="submit"
                  :disabled="profileForm.processing"
                  class="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 disabled:opacity-50 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                >
                  <span v-if="profileForm.processing" class="flex items-center">
                    <svg class="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Updating...
                  </span>
                  <span v-else>Update Profile</span>
                </button>
              </div>
            </form>
          </div>

          <!-- Password Update Card -->
          <PasswordUpdateCard :user="user" />
        </div>

        <!-- Sidebar -->
        <div class="space-y-6">
          <!-- Two-Factor Authentication Card -->
          <TwoFactorAuthCard :autenticator="autenticator" />

          <!-- Extra Links Card -->
          <div v-if="extraLinks && extraLinks.length > 0" class="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-white">Quick Links</h3>
                <p class="text-sm text-slate-400">Helpful resources</p>
              </div>
            </div>

            <div class="space-y-2">
              <a
                v-for="link in extraLinks"
                :key="link.url"
                :href="link.url"
                :target="link.external ? '_blank' : '_self'"
                class="flex items-center justify-between p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors group"
              >
                <span class="text-sm text-slate-300 group-hover:text-white">{{ link.name }}</span>
                <svg v-if="link.external" class="w-4 h-4 text-slate-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                <svg v-else class="w-4 h-4 text-slate-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          <!-- Account Stats Card -->
          <div class="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
            <h3 class="text-lg font-semibold text-white mb-4">Account Stats</h3>
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <span class="text-sm text-slate-400">Member since</span>
                <span class="text-sm text-white font-medium">{{ formatDate(user.created_at) }}</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-sm text-slate-400">Last login</span>
                <span class="text-sm text-white font-medium">{{ formatDate(user.updated_at) }}</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-sm text-slate-400">Security level</span>
                <span :class="[
                  'text-sm font-medium',
                  autenticator.is_enable ? 'text-emerald-400' : 'text-orange-400'
                ]">
                  {{ autenticator.is_enable ? 'High' : 'Medium' }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </App>
</template>

<script setup>
import { useForm } from '@inertiajs/vue3'
import App from '../../../Layout/App.vue'
import AvatarSelector from '../../../Components/AvatarSelector.vue'
import PasswordUpdateCard from '../../../Components/PasswordUpdateCard.vue'
import TwoFactorAuthCard from '../../../Components/TwoFactorAuthCard.vue'

const props = defineProps({
  user: Object,
  autenticator: Object,
  extraLinks: Array,
  title: {
    type: String,
    default: 'Edit Profile'
  }
})

const profileForm = useForm({
  username: props.user.data.username,
  email: props.user.data.email,
  first_name: props.user.data.first_name,
  last_name: props.user.data.last_name,
  avatar: props.user.data.avatar
})

const updateProfile = () => {
  profileForm.patch(route('user.update', props.user.data.id), {
    preserveScroll: true
  })
}

const formatDate = (dateString) => {
  if (!dateString) return 'Unknown'
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
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
