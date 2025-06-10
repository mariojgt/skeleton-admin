<template>
  <Layout>
    <!-- Modern Page Header -->
    <div class="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
      <div class="px-4 sm:px-6 lg:px-8 py-6">
        <div class="flex items-center justify-between">
          <!-- Header Content -->
          <div class="flex items-center space-x-4">
            <div class="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.414-5.414l1.414 1.414L9 12m-4-4l1.414-1.414M12 2l7 7-7 7"/>
              </svg>
            </div>
            <div>
              <h1 class="text-2xl font-bold text-slate-900 dark:text-slate-100">
                Edit Role: {{ roleInformation.name }}
              </h1>
              <p class="text-sm text-slate-600 dark:text-slate-400 mt-1">
                Manage role details and configure permissions
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
            Back to Roles
          </button>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
                ? 'text-purple-600 dark:text-purple-400 border-b-2 border-purple-600 dark:border-purple-400'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'"
            >
              <div class="flex items-center space-x-2">
                <component :is="tab.icon" class="w-5 h-5" />
                <span>{{ tab.name }}</span>
                <span
                  v-if="tab.badge"
                  class="ml-2 px-2 py-0.5 text-xs font-medium rounded-full"
                  :class="activeTab === index
                    ? 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400'
                    : 'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-400'"
                >
                  {{ tab.badge }}
                </span>
              </div>

              <!-- Active Tab Indicator -->
              <div
                v-if="activeTab === index"
                class="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full"
              ></div>
            </button>
          </nav>
        </div>

        <!-- Tab Content -->
        <div class="p-6">
          <!-- Role Details Tab -->
          <div v-show="activeTab === 0" class="space-y-8">
            <!-- Role Info Header -->
            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.414-5.414l1.414 1.414L9 12m-4-4l1.414-1.414M12 2l7 7-7 7"/>
                </svg>
              </div>
              <h3 class="mt-4 text-xl font-semibold text-slate-900 dark:text-slate-100">
                Role Configuration
              </h3>
              <p class="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                Configure the basic settings for this role
              </p>
            </div>

            <!-- Form -->
            <form @submit.prevent="submitForm" class="max-w-2xl mx-auto space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Role Name -->
                <div>
                  <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Role Name
                  </label>
                  <input
                    v-model="roleInformation.name"
                    type="text"
                    placeholder="Enter role name"
                    class="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-500 transition-colors duration-200"
                    required
                  />
                </div>

                <!-- Guard Name -->
                <div>
                  <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Guard Name
                  </label>
                  <input
                    v-model="roleInformation.guard_name"
                    type="text"
                    placeholder="Enter guard name"
                    class="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-500 transition-colors duration-200"
                    required
                  />
                </div>
              </div>

              <!-- Role Description -->
              <div>
                <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Description (Optional)
                </label>
                <textarea
                  v-model="roleInformation.description"
                  rows="3"
                  placeholder="Describe the purpose and responsibilities of this role"
                  class="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-500 transition-colors duration-200 resize-none"
                ></textarea>
              </div>

              <!-- Submit Button -->
              <div class="flex justify-end pt-6">
                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white hover:from-purple-600 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105"
                >
                  <svg v-if="isSubmitting" class="w-4 h-4 mr-2 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                  </svg>
                  <svg v-else class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  {{ isSubmitting ? 'Updating...' : 'Update Role' }}
                </button>
              </div>
            </form>
          </div>

          <!-- Permissions Tab -->
          <div v-show="activeTab === 1" class="space-y-8">
            <!-- Permissions Header -->
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-xl font-semibold text-slate-900 dark:text-slate-100">
                  Role Permissions
                </h3>
                <p class="text-sm text-slate-600 dark:text-slate-400 mt-1">
                  Configure what actions this role can perform
                </p>
              </div>

              <!-- Bulk Actions -->
              <div class="flex items-center space-x-3">
                <button
                  @click="selectAllPermissions"
                  class="inline-flex items-center px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-200"
                >
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  Select All
                </button>
                <button
                  @click="deselectAllPermissions"
                  class="inline-flex items-center px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-200"
                >
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                  Deselect All
                </button>
              </div>
            </div>

            <!-- Permissions Grid -->
            <div class="space-y-8">
              <div
                v-for="(permissionGroup, groupName) in permissions"
                :key="groupName"
                class="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-6 border border-slate-200 dark:border-slate-600"
              >
                <!-- Group Header -->
                <div class="flex items-center justify-between mb-6">
                  <div class="flex items-center space-x-3">
                    <div class="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
                      <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                      </svg>
                    </div>
                    <div>
                      <h4 class="text-lg font-semibold text-slate-900 dark:text-slate-100 capitalize">
                        {{ groupName }}
                      </h4>
                      <p class="text-sm text-slate-600 dark:text-slate-400">
                        {{ getGroupPermissionCount(groupName) }} permissions available
                      </p>
                    </div>
                  </div>

                  <!-- Group Toggle -->
                  <button
                    @click="toggleGroupPermissions(groupName)"
                    class="inline-flex items-center px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg text-sm font-medium transition-colors duration-200"
                    :class="isGroupFullySelected(groupName)
                      ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border-green-300 dark:border-green-700'
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700'"
                  >
                    <svg v-if="isGroupFullySelected(groupName)" class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <svg v-else class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                    </svg>
                    {{ isGroupFullySelected(groupName) ? 'Deselect All' : 'Select All' }}
                  </button>
                </div>

                <!-- Permissions Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  <div
                    v-for="permission in permissionGroup"
                    :key="permission.name"
                    class="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-600 hover:shadow-md transition-all duration-200"
                  >
                    <div class="flex items-center justify-between">
                      <div class="flex-1 min-w-0">
                        <h5 class="text-sm font-medium text-slate-900 dark:text-slate-100 truncate">
                          {{ formatPermissionName(permission.name) }}
                        </h5>
                        <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">
                          {{ permission.description || 'Standard permission' }}
                        </p>
                      </div>

                      <!-- Toggle Switch -->
                      <div class="ml-4 flex-shrink-0">
                        <button
                          @click="togglePermission(groupName, permission.name)"
                          class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                          :class="rolePer[groupName] && rolePer[groupName][permission.name]
                            ? 'bg-gradient-to-r from-purple-500 to-pink-600'
                            : 'bg-slate-200 dark:bg-slate-600'"
                        >
                          <span
                            class="inline-block h-4 w-4 transform rounded-full bg-white shadow-lg transition-transform duration-200"
                            :class="rolePer[groupName] && rolePer[groupName][permission.name] ? 'translate-x-6' : 'translate-x-1'"
                          ></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Permissions Summary -->
            <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-3">
                  <div class="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-sm font-medium text-blue-900 dark:text-blue-100">
                      Permissions Summary
                    </h4>
                    <p class="text-sm text-blue-700 dark:text-blue-300">
                      {{ selectedPermissionsCount }} of {{ totalPermissionsCount }} permissions selected
                    </p>
                  </div>
                </div>

                <div class="text-right">
                  <div class="text-2xl font-bold text-blue-900 dark:text-blue-100">
                    {{ Math.round((selectedPermissionsCount / totalPermissionsCount) * 100) }}%
                  </div>
                  <div class="text-xs text-blue-600 dark:text-blue-400">Coverage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Auto-save indicator -->
    <div v-if="isAutoSaving" class="fixed bottom-4 right-4 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 p-4">
      <div class="flex items-center space-x-3">
        <svg class="w-5 h-5 animate-spin text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
        </svg>
        <span class="text-sm font-medium text-slate-900 dark:text-slate-100">Auto-saving permissions...</span>
      </div>
    </div>
  </Layout>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { router } from '@inertiajs/vue3'
import Layout from '../../../Layout/App.vue'

// Props
const props = defineProps({
  role: {
    type: Object,
    default: () => ({})
  },
  permissions: {
    type: Object,
    default: () => ({})
  },
  rolePermissions: {
    type: Object,
    default: () => ({})
  }
})

// State
const activeTab = ref(0)
const roleInformation = ref({})
const rolePer = ref({})
const isSubmitting = ref(false)
const isAutoSaving = ref(false)

// Tab configuration
const tabs = computed(() => [
  {
    id: 'details',
    name: 'Details',
    icon: 'svg'
  },
  {
    id: 'permissions',
    name: 'Permissions',
    icon: 'svg',
    badge: selectedPermissionsCount.value
  }
])

// Computed properties
const totalPermissionsCount = computed(() => {
  return Object.values(props.permissions).reduce((total, group) => total + group.length, 0)
})

const selectedPermissionsCount = computed(() => {
  let count = 0
  for (const group in rolePer.value) {
    for (const permission in rolePer.value[group]) {
      if (rolePer.value[group][permission]) {
        count++
      }
    }
  }
  return count
})

// Lifecycle
onMounted(() => {
  roleInformation.value = { ...props.role }
  rolePer.value = { ...props.rolePermissions }
})

// Methods
const goBack = () => {
  window.history.back()
}

const submitForm = async () => {
  isSubmitting.value = true

  try {
    const form = {
      name: roleInformation.value.name,
      guard_name: roleInformation.value.guard_name,
      description: roleInformation.value.description
    }

    await router.patch(route('admin.role.update', roleInformation.value.id), form)
  } finally {
    isSubmitting.value = false
  }
}

const autoSubmitPermissions = async () => {
  isAutoSaving.value = true

  try {
    const form = { permissions: rolePer.value }
    await router.patch(route('admin.role.perm.update', roleInformation.value.id), form)

    setTimeout(() => {
      isAutoSaving.value = false
    }, 1000)
  } catch (error) {
    isAutoSaving.value = false
  }
}

const togglePermission = (groupName, permissionName) => {
  if (!rolePer.value[groupName]) {
    rolePer.value[groupName] = {}
  }

  rolePer.value[groupName][permissionName] = !rolePer.value[groupName][permissionName]
  autoSubmitPermissions()
}

const toggleGroupPermissions = (groupName) => {
  const isFullySelected = isGroupFullySelected(groupName)

  if (!rolePer.value[groupName]) {
    rolePer.value[groupName] = {}
  }

  props.permissions[groupName].forEach(permission => {
    rolePer.value[groupName][permission.name] = !isFullySelected
  })

  autoSubmitPermissions()
}

const selectAllPermissions = () => {
  for (const groupName in props.permissions) {
    if (!rolePer.value[groupName]) {
      rolePer.value[groupName] = {}
    }

    props.permissions[groupName].forEach(permission => {
      rolePer.value[groupName][permission.name] = true
    })
  }

  autoSubmitPermissions()
}

const deselectAllPermissions = () => {
  for (const groupName in props.permissions) {
    if (!rolePer.value[groupName]) {
      rolePer.value[groupName] = {}
    }

    props.permissions[groupName].forEach(permission => {
      rolePer.value[groupName][permission.name] = false
    })
  }

  autoSubmitPermissions()
}

const isGroupFullySelected = (groupName) => {
  if (!rolePer.value[groupName]) return false

  return props.permissions[groupName].every(permission =>
    rolePer.value[groupName][permission.name]
  )
}

const getGroupPermissionCount = (groupName) => {
  return props.permissions[groupName]?.length || 0
}

const formatPermissionName = (name) => {
  return name.split('.').pop().replace(/[_-]/g, ' ')
    .replace(/\b\w/g, l => l.toUpperCase())
}
</script>
