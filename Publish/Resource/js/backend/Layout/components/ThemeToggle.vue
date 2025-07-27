<template>
  <div class="relative">
    <!-- Theme Toggle Button -->
    <button
      ref="toggleButton"
      class="btn btn-ghost btn-sm"
      :class="{ 'btn-active': isOpen }"
      :title="`Current theme: ${currentTheme} (Click to change)`"
      @click="toggleModal"
      @keydown="handleToggleKeydown"
    >
      <svg class="w-4 h-4 transition-transform duration-200" :class="{ 'rotate-180': isDarkMode }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path v-if="!isDarkMode" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
        <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
      </svg>
    </button>

    <!-- Theme Modal -->
    <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4" @click="closeModal">
      <!-- Backdrop -->
      <div class="fixed inset-0 bg-black/50 backdrop-blur-sm"></div>

      <!-- Modal Content -->
      <div
        ref="modalContent"
        class="relative w-full max-w-2xl bg-base-100 rounded-2xl shadow-2xl border"
        tabindex="-1"
        @click.stop
        @keydown="handleModalKeydown"
      >
        <!-- Header -->
        <div class="flex items-center justify-between p-6 border-b">
          <div>
            <h2 class="text-xl font-bold">Choose Theme</h2>
            <p class="text-sm text-base-content/70 mt-1">
              {{ filteredThemes.length }} themes available • Press / to search
            </p>
          </div>
          <button
            class="btn btn-ghost btn-sm btn-circle"
            title="Close (Esc)"
            @click="closeModal"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <!-- Search -->
        <div class="p-4 border-b bg-base-200/50">
          <div class="relative">
            <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-base-content/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
            <input
              ref="searchInput"
              v-model="searchQuery"
              type="text"
              placeholder="Search themes... (Press / to focus)"
              class="input input-bordered w-full pl-10 pr-10"
              @keydown="handleSearchKeydown"
            />
            <button
              v-if="searchQuery"
              class="absolute right-3 top-1/2 transform -translate-y-1/2 btn btn-ghost btn-xs btn-circle"
              title="Clear search (Ctrl+Backspace)"
              @click="clearSearch"
            >
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>

          <!-- Search hints -->
          <div class="flex items-center justify-between mt-2 text-xs text-base-content/60">
            <div class="flex items-center gap-3">
              <span class="flex items-center gap-1">
                <kbd class="kbd kbd-xs">↑↓</kbd> Navigate
              </span>
              <span class="flex items-center gap-1">
                <kbd class="kbd kbd-xs">Enter</kbd> Select
              </span>
              <span class="flex items-center gap-1">
                <kbd class="kbd kbd-xs">Esc</kbd> Close
              </span>
            </div>
            <div v-if="selectedIndex >= 0" class="text-primary">
              {{ selectedIndex + 1 }} of {{ filteredThemes.length }}
            </div>
          </div>
        </div>

        <!-- Themes Grid -->
        <div
          ref="themesContainer"
          class="max-h-96 overflow-y-auto p-4"
          @scroll="updateScrollIndicators"
        >
          <div v-if="filteredThemes.length === 0" class="text-center py-8 text-base-content/60">
            <svg class="w-12 h-12 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.529.901-6.172 2.379L4.34 19.86A9.959 9.959 0 0112 22c3.073 0 5.852-1.388 7.66-3.586L18.172 16.828z"/>
            </svg>
            <p class="font-medium">No themes found</p>
            <p class="text-sm mt-1">Try searching for something else</p>
          </div>

          <div v-else class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div
              v-for="(theme, index) in filteredThemes"
              :key="theme.name"
              :ref="el => setThemeRef(el, index)"
              :class="[
                'theme-card relative p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 group',
                index === selectedIndex
                  ? 'border-primary bg-primary/10 shadow-lg ring-2 ring-primary/20'
                  : 'border-base-300 hover:border-primary/50 hover:shadow-md',
                currentTheme === theme.name ? 'ring-2 ring-success/50 bg-success/5' : ''
              ]"
              :tabindex="index === selectedIndex ? 0 : -1"
              @click="selectTheme(theme.name)"
              @mouseenter="selectedIndex = index"
              @keydown="handleThemeKeydown($event, theme.name)"
            >
              <!-- Current Theme Indicator -->
              <div v-if="currentTheme === theme.name" class="absolute -top-2 -right-2 w-6 h-6 bg-success rounded-full flex items-center justify-center shadow-md">
                <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
              </div>

              <!-- Selection Indicator -->
              <div v-if="index === selectedIndex" class="absolute -top-1 -left-1 w-4 h-4 bg-primary rounded-full animate-pulse"></div>

              <!-- Theme Preview -->
              <div class="flex items-center gap-3 mb-3">
                <div class="flex gap-1">
                  <div
                    v-for="color in theme.colors"
                    :key="color"
                    class="w-4 h-4 rounded-full shadow-sm transition-transform group-hover:scale-110"
                    :style="{ backgroundColor: color }"
                  ></div>
                </div>
                <div class="flex-1">
                  <h3 class="font-semibold capitalize text-sm">{{ theme.name }}</h3>
                  <p class="text-xs text-base-content/70">{{ theme.description }}</p>
                </div>
              </div>

              <!-- Theme Demo Bar -->
              <div class="w-full h-2 rounded-full overflow-hidden bg-base-300">
                <div
                  class="h-full bg-gradient-to-r transition-all duration-300 group-hover:animate-pulse"
                  :style="{
                    background: `linear-gradient(90deg, ${theme.colors[0]} 0%, ${theme.colors[1]} 50%, ${theme.colors[2]} 100%)`
                  }"
                ></div>
              </div>

              <!-- Quick Preview on Hover -->
              <div class="absolute inset-0 bg-gradient-to-br from-transparent to-black/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"></div>
            </div>
          </div>
        </div>

        <!-- Footer Actions -->
        <div class="flex items-center justify-between p-4 border-t bg-base-200/30">
          <div class="flex items-center gap-4">
            <!-- System Theme Toggle -->
            <label class="flex items-center gap-2 cursor-pointer">
              <input
                v-model="useSystemTheme"
                type="checkbox"
                class="checkbox checkbox-sm checkbox-primary"
                @change="toggleSystemTheme"
              />
              <span class="text-sm">Auto (system)</span>
            </label>

            <!-- Quick Theme Buttons -->
            <div class="flex gap-1">
              <button
                class="btn btn-xs btn-outline"
                :class="{ 'btn-active': currentTheme === 'light' }"
                title="Light theme (Ctrl+1)"
                @click="selectTheme('light')"
              >
                Light
              </button>
              <button
                class="btn btn-xs btn-outline"
                :class="{ 'btn-active': currentTheme === 'dark' }"
                title="Dark theme (Ctrl+2)"
                @click="selectTheme('dark')"
              >
                Dark
              </button>
            </div>
          </div>

          <div class="flex items-center gap-2">
            <span class="text-xs text-base-content/60">
              {{ filteredThemes.length }} themes
            </span>
            <button class="btn btn-sm btn-primary" @click="closeModal">
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick, watch } from 'vue'
import { usePage } from '@inertiajs/vue3'

// Refs
const toggleButton = ref(null)
const modalContent = ref(null)
const searchInput = ref(null)
const themesContainer = ref(null)
const themeRefs = ref([])

// State
const isOpen = ref(false)
const currentTheme = ref('light')
const useSystemTheme = ref(false)
const searchQuery = ref('')
const selectedIndex = ref(0)

// Comprehensive theme definitions
const allThemes = [
  { name: 'light', description: 'Clean and bright', colors: ['#3b82f6', '#8b5cf6', '#06b6d4'] },
  { name: 'dark', description: 'Easy on the eyes', colors: ['#1f2937', '#374151', '#4b5563'] },
  { name: 'cupcake', description: 'Sweet and playful', colors: ['#65c3c8', '#ef9fbc', '#eeaf3a'] },
  { name: 'bumblebee', description: 'Bright and energetic', colors: ['#e0a82e', '#f9d71c', '#181830'] },
  { name: 'emerald', description: 'Fresh and natural', colors: ['#66cc8a', '#377cfb', '#ea5234'] },
  { name: 'corporate', description: 'Professional and clean', colors: ['#4b6bfb', '#7b92b2', '#67cba0'] },
  { name: 'synthwave', description: 'Retro futuristic', colors: ['#e779c1', '#58c7f3', '#f3cc30'] },
  { name: 'retro', description: 'Vintage vibes', colors: ['#ef9995', '#a4cbb4', '#dc8850'] },
  { name: 'cyberpunk', description: 'Neon and electric', colors: ['#ff7598', '#75d1f0', '#fde047'] },
  { name: 'valentine', description: 'Love and romance', colors: ['#e96d7b', '#a991f7', '#88dbdd'] },
  { name: 'halloween', description: 'Spooky season', colors: ['#f28c18', '#6d3a9c', '#51a800'] },
  { name: 'garden', description: 'Nature inspired', colors: ['#5c7f67', '#ecf4e7', '#fae5a3'] },
  { name: 'forest', description: 'Deep woods', colors: ['#1eb854', '#1fd65f', '#b91c1c'] },
  { name: 'aqua', description: 'Ocean breeze', colors: ['#09ecf3', '#966fb3', '#ffe999'] },
  { name: 'lofi', description: 'Calm and minimal', colors: ['#0d0d0d', '#1a1a1a', '#262626'] },
  { name: 'pastel', description: 'Soft and gentle', colors: ['#d1c1d7', '#f6cbd1', '#b4e7ce'] },
  { name: 'fantasy', description: 'Magical and dreamy', colors: ['#6e0b75', '#009d9e', '#c148ac'] },
  { name: 'wireframe', description: 'Clean and simple', colors: ['#b8b8b8', '#b8b8b8', '#b8b8b8'] },
  { name: 'black', description: 'Bold and stark', colors: ['#343232', '#343232', '#343232'] },
  { name: 'luxury', description: 'Elegant and refined', colors: ['#ffffff', '#331800', '#d99330'] },
  { name: 'dracula', description: 'Bold and moody', colors: ['#ff79c6', '#bd93f9', '#50fa7b'] },
  { name: 'cmyk', description: 'Print inspired', colors: ['#45d9f7', '#f471b5', '#f9e71e'] },
  { name: 'autumn', description: 'Warm and cozy', colors: ['#8c0327', '#d85251', '#7c2d12'] },
  { name: 'business', description: 'Professional tone', colors: ['#1c4ed8', '#be185d', '#059669'] },
  { name: 'acid', description: 'Bold and electric', colors: ['#ff00ff', '#ffff00', '#00ffff'] },
  { name: 'lemonade', description: 'Fresh and cheerful', colors: ['#519903', '#fbbf24', '#ca8a04'] },
  { name: 'night', description: 'Calm darkness', colors: ['#38bdf8', '#818cf8', '#c084fc'] },
  { name: 'coffee', description: 'Warm and earthy', colors: ['#db8865', '#263e3f', '#10161a'] },
  { name: 'winter', description: 'Cool and crisp', colors: ['#047aed', '#463aa1', '#c148ac'] }
]

// Computed
const isDarkMode = computed(() => {
  const darkThemes = ['dark', 'synthwave', 'halloween', 'forest', 'black', 'luxury', 'dracula', 'business', 'night', 'coffee']
  return darkThemes.includes(currentTheme.value)
})

const filteredThemes = computed(() => {
  if (!searchQuery.value.trim()) {
    return allThemes
  }

  const query = searchQuery.value.toLowerCase()
  return allThemes.filter(theme =>
    theme.name.toLowerCase().includes(query) ||
    theme.description.toLowerCase().includes(query)
  )
})

// Methods
const setThemeRef = (el, index) => {
  if (el) {
    themeRefs.value[index] = el
  }
}

const toggleModal = () => {
  if (isOpen.value) {
    closeModal()
  } else {
    openModal()
  }
}

const openModal = () => {
  isOpen.value = true
  selectedIndex.value = Math.max(0, filteredThemes.value.findIndex(t => t.name === currentTheme.value))

  nextTick(() => {
    modalContent.value?.focus()
    scrollToSelected()
  })
}

const closeModal = () => {
  isOpen.value = false
  searchQuery.value = ''
  selectedIndex.value = 0
  nextTick(() => {
    toggleButton.value?.focus()
  })
}

const selectTheme = (themeName) => {
  currentTheme.value = themeName
  useSystemTheme.value = false
  applyTheme(themeName)
  saveThemePreference(themeName)

  // Brief feedback
  const themeIndex = filteredThemes.value.findIndex(t => t.name === themeName)
  if (themeIndex >= 0) {
    selectedIndex.value = themeIndex
  }

  // Auto-close after selection
  setTimeout(() => {
    closeModal()
  }, 300)
}

const applyTheme = (themeName) => {
  document.documentElement.setAttribute('data-theme', themeName)
}

const saveThemePreference = (themeName) => {
  localStorage.setItem('skeleton-theme', themeName)
  localStorage.setItem('skeleton-use-system-theme', useSystemTheme.value.toString())
}

const loadThemePreference = () => {
  const savedTheme = localStorage.getItem('skeleton-theme')
  const savedSystemPref = localStorage.getItem('skeleton-use-system-theme') === 'true'

  useSystemTheme.value = savedSystemPref

  if (savedSystemPref) {
    applySystemTheme()
  } else if (savedTheme) {
    currentTheme.value = savedTheme
    applyTheme(savedTheme)
  }
}

const toggleSystemTheme = () => {
  if (useSystemTheme.value) {
    applySystemTheme()
  } else {
    applyTheme(currentTheme.value)
  }
  saveThemePreference(currentTheme.value)
}

const applySystemTheme = () => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const systemTheme = prefersDark ? 'dark' : 'light'
  currentTheme.value = systemTheme
  applyTheme(systemTheme)
}

const clearSearch = () => {
  searchQuery.value = ''
  selectedIndex.value = 0
  nextTick(() => {
    searchInput.value?.focus()
  })
}

const scrollToSelected = () => {
  nextTick(() => {
    const selectedElement = themeRefs.value[selectedIndex.value]
    if (selectedElement && themesContainer.value) {
      selectedElement.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      })
    }
  })
}

const navigateThemes = (direction) => {
  const maxIndex = filteredThemes.value.length - 1

  if (direction === 'up') {
    selectedIndex.value = selectedIndex.value > 0 ? selectedIndex.value - 1 : maxIndex
  } else if (direction === 'down') {
    selectedIndex.value = selectedIndex.value < maxIndex ? selectedIndex.value + 1 : 0
  }

  scrollToSelected()
}

// Keyboard handlers
const handleToggleKeydown = (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    toggleModal()
  }
}

const handleModalKeydown = (event) => {
  switch (event.key) {
    case 'Escape':
      closeModal()
      break
    case 'ArrowUp':
      event.preventDefault()
      navigateThemes('up')
      break
    case 'ArrowDown':
      event.preventDefault()
      navigateThemes('down')
      break
    case 'Enter':
      event.preventDefault()
      if (filteredThemes.value[selectedIndex.value]) {
        selectTheme(filteredThemes.value[selectedIndex.value].name)
      }
      break
    case '/':
      if (event.target === modalContent.value) {
        event.preventDefault()
        searchInput.value?.focus()
      }
      break
  }

  // Quick theme shortcuts
  if (event.ctrlKey) {
    switch (event.key) {
      case '1':
        event.preventDefault()
        selectTheme('light')
        break
      case '2':
        event.preventDefault()
        selectTheme('dark')
        break
      case 'Backspace':
        event.preventDefault()
        clearSearch()
        break
    }
  }
}

const handleSearchKeydown = (event) => {
  switch (event.key) {
    case 'Escape':
      if (searchQuery.value) {
        clearSearch()
      } else {
        closeModal()
      }
      break
    case 'ArrowUp':
      event.preventDefault()
      navigateThemes('up')
      break
    case 'ArrowDown':
      event.preventDefault()
      navigateThemes('down')
      break
    case 'Enter':
      event.preventDefault()
      if (filteredThemes.value[selectedIndex.value]) {
        selectTheme(filteredThemes.value[selectedIndex.value].name)
      }
      break
  }
}

const handleThemeKeydown = (event, themeName) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    selectTheme(themeName)
  }
}

const handleGlobalKeydown = (event) => {
  // Don't trigger when typing in inputs
  if (event.target.matches('input, textarea, [contenteditable]')) {
    return
  }

  // Global theme shortcuts
  if (event.ctrlKey || event.metaKey) {
    switch (event.key) {
      case 't':
        if (event.shiftKey) {
          event.preventDefault()
          toggleModal()
        }
        break
    }
  }
}

const updateScrollIndicators = () => {
  // Could add scroll indicators here if needed
}

// System theme change listener
const handleSystemThemeChange = () => {
  if (useSystemTheme.value) {
    applySystemTheme()
  }
}

// Watchers
watch(searchQuery, () => {
  selectedIndex.value = 0
})

watch(filteredThemes, () => {
  if (selectedIndex.value >= filteredThemes.value.length) {
    selectedIndex.value = Math.max(0, filteredThemes.value.length - 1)
  }
})

// Lifecycle
let mediaQuery

onMounted(() => {
  loadThemePreference()
  document.addEventListener('keydown', handleGlobalKeydown)

  // Listen for system theme changes
  mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  mediaQuery.addEventListener('change', handleSystemThemeChange)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleGlobalKeydown)
  if (mediaQuery) {
    mediaQuery.removeEventListener('change', handleSystemThemeChange)
  }
})
</script>
