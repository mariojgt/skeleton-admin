<template>
  <Layout :title="title">
    <div class="container mx-auto px-4 py-8 max-w-6xl">
      <!-- Header -->
      <div class="card bg-base-100 shadow-xl mb-8">
        <div class="card-body">
          <div class="flex flex-col lg:flex-row items-center gap-6">
            <!-- Avatar Section -->
            <div class="avatar">
              <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 relative">
                <img
                  :src="currentAvatar"
                  :alt="user.full_name"
                  @error="handleAvatarError"
                />
                <button
                  @click="showAvatarModal = true"
                  class="btn btn-circle btn-sm btn-primary absolute -bottom-2 -right-2"
                  title="Change Avatar"
                >
                  📷
                </button>
              </div>
            </div>

            <!-- User Info -->
            <div class="text-center lg:text-left flex-1">
              <h1 class="text-3xl font-bold">{{ user.full_name }}</h1>
              <p class="text-base-content/70">{{ user.email }}</p>
              <p class="text-base-content/60">@{{ user.username }}</p>

              <!-- 2FA Status -->
              <div class="mt-4">
                <div v-if="autenticator.is_enable" class="badge badge-success gap-2">
                  🔒 2FA Enabled
                </div>
                <div v-else class="badge badge-warning gap-2">
                  🔓 2FA Disabled
                </div>
              </div>
            </div>

            <!-- Quick Actions -->
            <div class="flex gap-2">
              <Link :href="route('logout.user')" class="btn btn-outline btn-error">
                🚪 Logout
              </Link>
            </div>
          </div>
        </div>
      </div>

      <!-- Main Content with Tabs -->
      <div class="card bg-base-100 shadow-xl">
        <!-- Tab Navigation -->
        <div class="tabs tabs-lifted">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            @click="activeTab = tab.id"
            :class="['tab tab-lifted', { 'tab-active': activeTab === tab.id }]"
          >
            {{ tab.icon }} {{ tab.label }}
          </button>
        </div>

        <!-- Tab Content -->
        <div class="card-body bg-base-100 rounded-box">
          <!-- Profile Tab -->
          <div v-show="activeTab === 'profile'" class="space-y-6">
            <div class="text-center lg:text-left">
              <h2 class="text-2xl font-bold">Profile Information</h2>
              <p class="text-base-content/70">Update your personal information and preferences.</p>
            </div>

            <form @submit.prevent="updateProfile" class="space-y-4">
              <!-- Name Fields -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">First Name <span class="text-error">*</span></span>
                  </label>
                  <input
                    type="text"
                    v-model="profileForm.first_name"
                    :class="['input input-bordered', { 'input-error': errors.first_name }]"
                    placeholder="Enter your first name"
                    required
                  />
                  <label v-if="errors.first_name" class="label">
                    <span class="label-text-alt text-error">{{ errors.first_name }}</span>
                  </label>
                </div>

                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Last Name <span class="text-error">*</span></span>
                  </label>
                  <input
                    type="text"
                    v-model="profileForm.last_name"
                    :class="['input input-bordered', { 'input-error': errors.last_name }]"
                    placeholder="Enter your last name"
                    required
                  />
                  <label v-if="errors.last_name" class="label">
                    <span class="label-text-alt text-error">{{ errors.last_name }}</span>
                  </label>
                </div>
              </div>

              <!-- Username -->
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Username <span class="text-error">*</span></span>
                </label>
                <input
                  type="text"
                  v-model="profileForm.username"
                  :class="['input input-bordered', { 'input-error': errors.username }]"
                  placeholder="Choose a unique username"
                  required
                />
                <label v-if="errors.username" class="label">
                  <span class="label-text-alt text-error">{{ errors.username }}</span>
                </label>
              </div>

              <!-- Email -->
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email Address <span class="text-error">*</span></span>
                </label>
                <input
                  type="email"
                  v-model="profileForm.email"
                  :class="['input input-bordered', { 'input-error': errors.email }]"
                  placeholder="Enter your email address"
                  required
                />
                <label v-if="errors.email" class="label">
                  <span class="label-text-alt text-error">{{ errors.email }}</span>
                </label>
              </div>

              <!-- Submit Button -->
              <div class="card-actions justify-end">
                <button
                  type="submit"
                  :class="['btn btn-primary', { 'loading': profileProcessing }]"
                  :disabled="profileProcessing"
                >
                  <span v-if="!profileProcessing">💾 Update Profile</span>
                </button>
              </div>
            </form>
          </div>

          <!-- Security Tab -->
          <div v-show="activeTab === 'security'" class="space-y-8">
            <div class="text-center lg:text-left">
              <h2 class="text-2xl font-bold">Security Settings</h2>
              <p class="text-base-content/70">Manage your password and two-factor authentication.</p>
            </div>

            <!-- Password Update -->
            <div class="card bg-base-200">
              <div class="card-body">
                <h3 class="card-title">🔐 Change Password</h3>

                <form @submit.prevent="updatePassword" class="space-y-4">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="form-control">
                      <label class="label">
                        <span class="label-text">New Password <span class="text-error">*</span></span>
                      </label>
                      <div class="join">
                        <input
                          :type="showPassword ? 'text' : 'password'"
                          v-model="passwordForm.password"
                          :class="['input input-bordered join-item flex-1', { 'input-error': errors.password }]"
                          placeholder="Enter new password"
                          required
                        />
                        <button
                          type="button"
                          @click="showPassword = !showPassword"
                          class="btn btn-outline join-item"
                        >
                          {{ showPassword ? '👁️' : '👁️‍🗨️' }}
                        </button>
                      </div>
                      <label v-if="errors.password" class="label">
                        <span class="label-text-alt text-error">{{ errors.password }}</span>
                      </label>
                    </div>

                    <div class="form-control">
                      <label class="label">
                        <span class="label-text">Confirm Password <span class="text-error">*</span></span>
                      </label>
                      <div class="join">
                        <input
                          :type="showPasswordConfirm ? 'text' : 'password'"
                          v-model="passwordForm.password_confirmation"
                          :class="['input input-bordered join-item flex-1', { 'input-error': errors.password_confirmation }]"
                          placeholder="Confirm new password"
                          required
                        />
                        <button
                          type="button"
                          @click="showPasswordConfirm = !showPasswordConfirm"
                          class="btn btn-outline join-item"
                        >
                          {{ showPasswordConfirm ? '👁️' : '👁️‍🗨️' }}
                        </button>
                      </div>
                      <label v-if="errors.password_confirmation" class="label">
                        <span class="label-text-alt text-error">{{ errors.password_confirmation }}</span>
                      </label>
                    </div>
                  </div>

                  <!-- 2FA Code if enabled -->
                  <div v-if="autenticator.is_enable" class="form-control">
                    <label class="label">
                      <span class="label-text">2FA Verification Code <span class="text-error">*</span></span>
                    </label>
                    <input
                      type="text"
                      v-model="passwordForm.code"
                      :class="['input input-bordered w-full max-w-xs', { 'input-error': errors.code }]"
                      placeholder="Enter 6-digit code"
                      maxlength="6"
                      required
                    />
                    <label v-if="errors.code" class="label">
                      <span class="label-text-alt text-error">{{ errors.code }}</span>
                    </label>
                  </div>

                  <div class="card-actions justify-end">
                    <button
                      type="submit"
                      :class="['btn btn-primary', { 'loading': passwordProcessing }]"
                      :disabled="passwordProcessing"
                    >
                      <span v-if="!passwordProcessing">🔄 Update Password</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <!-- 2FA Section -->
            <div class="card bg-base-200">
              <div class="card-body">
                <h3 class="card-title">🛡️ Two-Factor Authentication</h3>

                <!-- 2FA Disabled State -->
                <div v-if="!autenticator.is_enable" class="space-y-4">
                  <div class="alert alert-info">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <div>
                      <h4 class="font-bold">Enable 2FA for Better Security</h4>
                      <p>Add an extra layer of protection to your account.</p>
                    </div>
                  </div>

                  <div v-if="showQRCode" class="space-y-4">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div class="text-center">
                        <img :src="autenticator.codeinfo.qr_code" alt="QR Code" class="w-64 mx-auto rounded-lg shadow-lg" />
                      </div>

                      <div class="space-y-4">
                        <h4 class="font-bold text-lg">Setup Instructions:</h4>
                        <div class="steps steps-vertical lg:steps-horizontal">
                          <div class="step step-primary">Install authenticator app</div>
                          <div class="step step-primary">Scan QR code</div>
                          <div class="step step-primary">Enter verification code</div>
                        </div>

                        <form @submit.prevent="enable2FA" class="space-y-4">
                          <div class="form-control">
                            <label class="label">
                              <span class="label-text">Verification Code <span class="text-error">*</span></span>
                            </label>
                            <input
                              type="text"
                              v-model="twofaForm.code"
                              :class="['input input-bordered w-full max-w-xs', { 'input-error': errors.code }]"
                              placeholder="Enter 6-digit code"
                              maxlength="6"
                              required
                            />
                            <label v-if="errors.code" class="label">
                              <span class="label-text-alt text-error">{{ errors.code }}</span>
                            </label>
                          </div>

                          <div class="flex gap-2">
                            <button type="button" @click="showQRCode = false" class="btn btn-outline">
                              Cancel
                            </button>
                            <button
                              type="submit"
                              :class="['btn btn-primary', { 'loading': twofaProcessing }]"
                              :disabled="twofaProcessing"
                            >
                              <span v-if="!twofaProcessing">✅ Enable 2FA</span>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>

                  <button
                    v-else
                    @click="showQRCode = true"
                    class="btn btn-primary"
                  >
                    🔐 Enable 2FA
                  </button>
                </div>

                <!-- 2FA Enabled State -->
                <div v-else class="space-y-4">
                  <div class="alert alert-success">
                    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 class="font-bold">2FA is Active!</h4>
                      <p>Your account is protected with two-factor authentication.</p>
                    </div>
                  </div>

                  <!-- Backup Codes -->
                  <div class="collapse collapse-arrow bg-base-100">
                    <input type="checkbox" />
                    <div class="collapse-title text-xl font-medium">
                      🔑 Backup Codes
                    </div>
                    <div class="collapse-content">
                      <div class="alert alert-warning mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.728-.833-2.498 0L3.316 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                        <div>
                          <p>Save these codes safely. Each can only be used once!</p>
                        </div>
                      </div>

                      <div class="grid grid-cols-2 md:grid-cols-3 gap-2">
                        <div
                          v-for="(code, index) in autenticator.backup_codes"
                          :key="index"
                          class="kbd kbd-sm"
                        >
                          {{ code }}
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Disable 2FA -->
                  <div class="space-y-2">
                    <button
                      @click="showDisableForm = !showDisableForm"
                      class="btn btn-error btn-outline btn-sm"
                    >
                      ❌ Disable 2FA
                    </button>

                    <div v-if="showDisableForm" class="card bg-error/10 border border-error/20">
                      <div class="card-body">
                        <form @submit.prevent="disable2FA" class="space-y-4">
                          <div class="form-control">
                            <label class="label">
                              <span class="label-text">Verification Code <span class="text-error">*</span></span>
                            </label>
                            <input
                              type="text"
                              v-model="disableForm.code"
                              :class="['input input-bordered w-full max-w-xs', { 'input-error': errors.code }]"
                              placeholder="Enter 6-digit code to disable"
                              maxlength="6"
                              required
                            />
                            <label v-if="errors.code" class="label">
                              <span class="label-text-alt text-error">{{ errors.code }}</span>
                            </label>
                          </div>

                          <div class="flex gap-2">
                            <button type="button" @click="showDisableForm = false" class="btn btn-outline btn-sm">
                              Cancel
                            </button>
                            <button
                              type="submit"
                              :class="['btn btn-error btn-sm', { 'loading': disableProcessing }]"
                              :disabled="disableProcessing"
                            >
                              <span v-if="!disableProcessing">🔓 Disable 2FA</span>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Extra Links Tab -->
          <div v-show="activeTab === 'links' && extraLinks?.length" class="space-y-6">
            <div class="text-center lg:text-left">
              <h2 class="text-2xl font-bold">Quick Links</h2>
              <p class="text-base-content/70">Access additional features and tools.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <a
                v-for="link in extraLinks"
                :key="link.url"
                :href="link.url"
                class="card bg-base-200 hover:bg-base-300 transition-all duration-200 hover:shadow-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div class="card-body">
                  <div class="text-4xl mb-2">{{ link.icon || '🔗' }}</div>
                  <h3 class="card-title text-lg">{{ link.title }}</h3>
                  <p class="text-sm text-base-content/70">{{ link.description }}</p>
                  <div class="card-actions justify-end">
                    <div class="text-primary">→</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Avatar Selection Modal -->
    <dialog :class="['modal', { 'modal-open': showAvatarModal }]">
      <div class="modal-box w-11/12 max-w-2xl">
        <div class="flex justify-between items-center mb-4">
          <h3 class="font-bold text-lg">Choose Avatar</h3>
          <button @click="closeAvatarModal" class="btn btn-sm btn-circle btn-ghost">✕</button>
        </div>

        <div v-if="loadingAvatars" class="flex flex-col items-center justify-center py-8">
          <span class="loading loading-spinner loading-lg"></span>
          <p class="mt-4">Loading avatars...</p>
        </div>

        <div v-else class="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 max-h-96 overflow-y-auto">
          <div
            v-for="avatar in availableAvatars"
            :key="avatar.id"
            @click="selectAvatar(avatar.path)"
            :class="['avatar cursor-pointer hover:scale-110 transition-transform',
                     { 'ring-2 ring-primary': selectedAvatar === avatar.path }]"
          >
            <div class="w-16 rounded-full">
              <img
                :src="avatar.path"
                :alt="avatar.name"
                @error="handleAvatarError"
              />
            </div>
          </div>
        </div>

        <div class="modal-action">
          <button @click="closeAvatarModal" class="btn btn-outline">Cancel</button>
          <button
            @click="updateAvatar"
            :class="['btn btn-primary', { 'loading': avatarProcessing }]"
            :disabled="!selectedAvatar || avatarProcessing"
          >
            <span v-if="!avatarProcessing">💾 Update Avatar</span>
          </button>
        </div>
      </div>
      <div class="modal-backdrop" @click="closeAvatarModal"></div>
    </dialog>
  </Layout>
</template>

<script>
import { ref, reactive, computed, onMounted, watch } from 'vue'
import { router, Link } from '@inertiajs/vue3'
import Layout from '../../../Layout/App.vue'

export default {
  name: 'UserProfileEdit',
  components: {
    Layout,
    Link
  },
  props: {
    title: {
      type: String,
      default: 'Profile Settings'
    },
    user: {
      type: Object,
      required: true
    },
    autenticator: {
      type: Object,
      required: true
    },
    extraLinks: {
      type: Array,
      default: () => []
    },
    errors: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const activeTab = ref('profile')
    const showPassword = ref(false)
    const showPasswordConfirm = ref(false)
    const showQRCode = ref(false)
    const showDisableForm = ref(false)
    const showAvatarModal = ref(false)
    const loadingAvatars = ref(false)
    const availableAvatars = ref([])
    const selectedAvatar = ref('')
    const currentAvatar = ref(props.user.avatar || '/assets/avatars/default.png')

    // Processing states
    const profileProcessing = ref(false)
    const passwordProcessing = ref(false)
    const twofaProcessing = ref(false)
    const disableProcessing = ref(false)
    const avatarProcessing = ref(false)

    // Forms
    const profileForm = reactive({
      first_name: props.user.first_name || '',
      last_name: props.user.last_name || '',
      username: props.user.username || '',
      email: props.user.email || '',
      avatar: props.user.avatar || ''
    })

    const passwordForm = reactive({
      password: '',
      password_confirmation: '',
      code: ''
    })

    const twofaForm = reactive({
      code: ''
    })

    const disableForm = reactive({
      code: ''
    })

    // Tabs configuration
    const tabs = computed(() => {
      const defaultTabs = [
        { id: 'profile', label: 'Profile', icon: '👤' },
        { id: 'security', label: 'Security', icon: '🔒' }
      ]

      if (props.extraLinks?.length) {
        defaultTabs.push({ id: 'links', label: 'Quick Links', icon: '🔗' })
      }

      return defaultTabs
    })

    // Methods
    const updateProfile = async () => {
      profileProcessing.value = true

      try {
        await router.patch(route('user.update', props.user.id), profileForm, {
          preserveScroll: true,
          onSuccess: () => {
            profileProcessing.value = false
          },
          onError: () => {
            profileProcessing.value = false
          }
        })
      } catch (error) {
        console.error('Profile update error:', error)
        profileProcessing.value = false
      }
    }

    const updatePassword = async () => {
      passwordProcessing.value = true

      try {
        await router.patch(route('user.update-password', props.user.id), passwordForm, {
          preserveScroll: true,
          onSuccess: () => {
            passwordProcessing.value = false
            passwordForm.password = ''
            passwordForm.password_confirmation = ''
            passwordForm.code = ''
          },
          onError: () => {
            passwordProcessing.value = false
          }
        })
      } catch (error) {
        console.error('Password update error:', error)
        passwordProcessing.value = false
      }
    }

    const enable2FA = async () => {
      twofaProcessing.value = true

      try {
        await router.post(route('user.2fa.enable'), { code: twofaForm.code }, {
          preserveScroll: true,
          onSuccess: () => {
            twofaProcessing.value = false
            showQRCode.value = false
            twofaForm.code = ''
          },
          onError: () => {
            twofaProcessing.value = false
          }
        })
      } catch (error) {
        console.error('2FA enable error:', error)
        twofaProcessing.value = false
      }
    }

    const disable2FA = async () => {
      disableProcessing.value = true

      try {
        await router.patch(route('user.remove-autenticator'), { code: disableForm.code }, {
          preserveScroll: true,
          onSuccess: () => {
            disableProcessing.value = false
            showDisableForm.value = false
            disableForm.code = ''
          },
          onError: () => {
            disableProcessing.value = false
          }
        })
      } catch (error) {
        console.error('2FA disable error:', error)
        disableProcessing.value = false
      }
    }

    const loadAvatars = async () => {
      loadingAvatars.value = true

      try {
        const response = await fetch(route('avatars.list') + '?limit=50&random=true')
        if (response.ok) {
          availableAvatars.value = await response.json()
        }
      } catch (error) {
        console.error('Error loading avatars:', error)
      } finally {
        loadingAvatars.value = false
      }
    }

    const selectAvatar = (avatarPath) => {
      selectedAvatar.value = avatarPath
    }

    const updateAvatar = async () => {
      if (!selectedAvatar.value) return

      avatarProcessing.value = true

      try {
        profileForm.avatar = selectedAvatar.value
        await router.patch(route('user.update', props.user.id), { avatar: selectedAvatar.value }, {
          preserveScroll: true,
          onSuccess: () => {
            currentAvatar.value = selectedAvatar.value
            closeAvatarModal()
            avatarProcessing.value = false
          },
          onError: () => {
            avatarProcessing.value = false
          }
        })
      } catch (error) {
        console.error('Avatar update error:', error)
        avatarProcessing.value = false
      }
    }

    const closeAvatarModal = () => {
      showAvatarModal.value = false
      selectedAvatar.value = ''
    }

    const handleAvatarError = (event) => {
      event.target.src = '/assets/avatars/default.png'
    }

    // Watch for avatar modal opening
    watch(() => showAvatarModal.value, (newValue) => {
      if (newValue && availableAvatars.value.length === 0) {
        loadAvatars()
      }
    })

    onMounted(() => {
      // Set initial avatar if available
      if (props.user.avatar) {
        currentAvatar.value = props.user.avatar
      }
    })

    return {
      activeTab,
      tabs,
      showPassword,
      showPasswordConfirm,
      showQRCode,
      showDisableForm,
      showAvatarModal,
      loadingAvatars,
      availableAvatars,
      selectedAvatar,
      currentAvatar,
      profileProcessing,
      passwordProcessing,
      twofaProcessing,
      disableProcessing,
      avatarProcessing,
      profileForm,
      passwordForm,
      twofaForm,
      disableForm,
      updateProfile,
      updatePassword,
      enable2FA,
      disable2FA,
      selectAvatar,
      updateAvatar,
      closeAvatarModal,
      handleAvatarError
    }
  }
}
</script>
