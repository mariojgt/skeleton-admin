<template>
  <div class="space-y-4">
    <label class="block text-sm font-medium text-slate-300">Profile Picture</label>

    <!-- Current Avatar Display -->
    <div class="flex items-center gap-6">
      <div class="relative">
        <img
          :src="currentAvatar || '/assets/avatars/default.png'"
          alt="Current avatar"
          class="w-20 h-20 rounded-xl object-cover border-2 border-white/20"
        />
        <button
          type="button"
          @click="openAvatarModal"
          class="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-500 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-colors shadow-lg"
        >
          <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </button>
      </div>
      <div>
        <p class="text-sm font-medium text-white">Change avatar</p>
        <p class="text-xs text-slate-400">Click the camera icon to select a new profile picture</p>
      </div>
    </div>

    <!-- Avatar Selection Modal -->
    <Teleport to="body">
      <div v-if="isModalOpen" class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div class="bg-slate-800/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 w-full max-w-2xl max-h-[80vh] overflow-y-auto shadow-2xl">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-xl font-semibold text-white">Choose Avatar</h3>
            <button @click="closeModal" class="text-slate-400 hover:text-white transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div v-if="loading" class="flex justify-center py-12">
            <svg class="animate-spin h-8 w-8 text-emerald-500" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>

          <div v-else class="grid grid-cols-6 sm:grid-cols-8 gap-4">
            <button
              v-for="avatar in availableAvatars"
              :key="avatar.id"
              @click="selectAvatar(avatar)"
              :class="[
                'aspect-square rounded-lg overflow-hidden border-2 transition-all duration-200 hover:scale-105',
                selectedAvatar?.id === avatar.id ? 'border-emerald-500 ring-2 ring-emerald-500/50' : 'border-white/20 hover:border-emerald-500/50'
              ]"
            >
              <img :src="avatar.path" :alt="avatar.name" class="w-full h-full object-cover" />
            </button>
          </div>

          <div class="flex justify-between items-center mt-6">
            <button
              @click="loadMoreAvatars"
              :disabled="loadingMore"
              class="text-sm text-emerald-400 hover:text-emerald-300 disabled:opacity-50 transition-colors"
            >
              <span v-if="loadingMore">Loading...</span>
              <span v-else>Load More</span>
            </button>

            <div class="flex gap-3">
              <button
                @click="closeModal"
                class="px-4 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors"
              >
                Cancel
              </button>
              <button
                @click="confirmSelection"
                :disabled="!selectedAvatar"
                class="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 text-white text-sm font-medium rounded-lg transition-colors"
              >
                Select Avatar
              </button>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import axios from 'axios'

const props = defineProps({
  modelValue: String
})

const emit = defineEmits(['update:modelValue'])

const isModalOpen = ref(false)
const availableAvatars = ref([])
const selectedAvatar = ref(null)
const loading = ref(false)
const loadingMore = ref(false)
const currentLimit = ref(24)

const currentAvatar = computed(() => props.modelValue)

const openAvatarModal = async () => {
  isModalOpen.value = true
  if (availableAvatars.value.length === 0) {
    await loadAvatars()
  }
}

const closeModal = () => {
  isModalOpen.value = false
  selectedAvatar.value = null
}

const loadAvatars = async (limit = 24) => {
  try {
    loading.value = true
    const response = await axios.get(route('avatars.list'), {
      params: { limit, random: true }
    })
    availableAvatars.value = response.data
  } catch (error) {
    console.error('Failed to load avatars:', error)
    // Fallback mock data
    availableAvatars.value = generateMockAvatars(limit)
  } finally {
    loading.value = false
  }
}

const loadMoreAvatars = async () => {
  try {
    loadingMore.value = true
    currentLimit.value += 24
    const response = await axios.get(route('avatars.list'), {
      params: { limit: currentLimit.value, random: true }
    })
    availableAvatars.value = response.data
  } catch (error) {
    console.error('Failed to load more avatars:', error)
    // Fallback mock data
    availableAvatars.value = generateMockAvatars(currentLimit.value)
  } finally {
    loadingMore.value = false
  }
}

const selectAvatar = (avatar) => {
  selectedAvatar.value = avatar
}

const confirmSelection = () => {
  if (selectedAvatar.value) {
    emit('update:modelValue', selectedAvatar.value.path)
    closeModal()
  }
}

// Mock avatar generator for fallback
const generateMockAvatars = (count) => {
  const avatars = []
  for (let i = 1; i <= count; i++) {
    avatars.push({
      id: `avatar-${i}`,
      name: `Avatar ${i}`,
      path: `https://api.dicebear.com/7.x/avataaars/svg?seed=${i}&backgroundColor=random`,
      extension: 'svg'
    })
  }
  return avatars
}
</script>
