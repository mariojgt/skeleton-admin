<template>
  <div class="relative">
    <button
      @click="toggleModal"
      class="btn btn-ghost btn-circle"
      :class="{ 'btn-active': isOpen }"
      title="Change theme"
    >
      <svg
        class="w-6 h-6 transition-transform duration-200"
        :class="{ 'rotate-180': selectedTheme === 'dark' }"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          v-if="selectedTheme === 'light'"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
        <path
          v-else
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
    </button>

    <!-- Custom Modal Overlay -->
    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 flex items-start justify-end pt-20 pr-4"
      @click="closeModal"
    >
      <!-- Backdrop -->
      <div class="fixed inset-0 bg-black/20 backdrop-blur-sm"></div>

      <!-- Modal Content -->
      <div
        class="relative w-80 card card-compact shadow-xl bg-base-100 border border-base-300"
        @click.stop
      >
        <!-- Header -->
        <div class="card-header p-4 border-b border-base-300 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div class="flex items-center justify-between">
            <div>
              <h3 class="card-title text-lg">Choose Theme</h3>
              <p class="text-sm text-base-content/70">Select your preferred color scheme</p>
              <div class="text-xs text-base-content/50 mt-2">
                {{ filteredThemes.length }} themes available
              </div>
            </div>
            <button
              @click="closeModal"
              class="btn btn-ghost btn-circle btn-xs"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Search -->
        <div class="p-4 border-b border-base-300 bg-base-200">
          <div class="form-control">
            <div class="input-group">
              <span class="bg-base-100">
                <svg class="w-5 h-5 text-base-content/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
              </span>
              <input
                type="text"
                v-model="searchTerm"
                placeholder="Search themes..."
                class="input input-bordered flex-1 focus:outline-none focus:border-primary"
                @keydown.enter="handleSearchEnter"
              />
              <button
                v-if="searchTerm"
                @click="clearSearch"
                class="btn btn-ghost btn-square"
                title="Clear search"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Themes List -->
        <div
          ref="scrollContainer"
          class="max-h-80 overflow-y-auto p-3"
          @scroll="handleScroll"
        >
          <div class="grid gap-2">
            <template v-if="filteredThemes.length > 0">
              <div
                v-for="(theme, index) in filteredThemes"
                :key="theme"
                :ref="el => setThemeRef(el, theme)"
                @click="changeTheme(theme)"
                class="card card-compact cursor-pointer border-2 transition-all duration-200 hover:shadow-md transform hover:scale-[1.02]"
                :class="[
                  selectedTheme === theme
                    ? 'border-primary bg-primary/10 shadow-md'
                    : 'border-base-300 hover:border-base-content/20',
                  { 'animate-pulse': highlightedTheme === theme }
                ]"
                tabindex="0"
                @keydown.enter="changeTheme(theme)"
                @keydown.space="changeTheme(theme)"
              >
                <div class="card-body p-3">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3">
                      <div class="flex gap-1">
                        <div
                          class="w-3 h-3 rounded-full transition-transform group-hover:scale-110"
                          :class="getThemeColors(theme).primary"
                        ></div>
                        <div
                          class="w-3 h-3 rounded-full transition-transform group-hover:scale-110 delay-75"
                          :class="getThemeColors(theme).secondary"
                        ></div>
                        <div
                          class="w-3 h-3 rounded-full transition-transform group-hover:scale-110 delay-150"
                          :class="getThemeColors(theme).accent"
                        ></div>
                      </div>

                      <div>
                        <div class="text-sm font-medium capitalize">
                          {{ theme }}
                        </div>
                        <div class="text-xs text-base-content/60">
                          {{ getThemeDescription(theme) }}
                        </div>
                      </div>
                    </div>

                    <div
                      v-if="selectedTheme === theme"
                      class="flex-shrink-0 w-5 h-5 bg-primary rounded-full flex items-center justify-center"
                    >
                      <svg class="w-3 h-3 text-primary-content" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <div
                      v-else
                      class="flex-shrink-0 w-5 h-5 border-2 border-base-300 rounded-full group-hover:border-base-content/40 transition-colors"
                    ></div>
                  </div>

                  <progress
                    class="progress progress-primary w-full mt-3"
                    :class="getThemeColors(theme).primary"
                    value="70"
                    max="100"
                  ></progress>
                </div>
              </div>
            </template>
            <div v-else class="p-4 text-center text-base-content/60">
              No themes found for "{{ searchTerm }}".
            </div>
          </div>
        </div>

        <!-- Quick Navigation -->
        <div class="border-t border-base-300 p-4 bg-base-200">
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs text-base-content/60 font-semibold uppercase tracking-wider">Quick Navigation</span>
            <div class="flex items-center gap-2">
              <button
                @click="scrollToTheme('prev')"
                :disabled="!canScrollUp"
                class="btn btn-ghost btn-xs btn-circle"
                :class="{ 'btn-disabled': !canScrollUp }"
                title="Previous theme"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"/>
                </svg>
              </button>
              <button
                @click="scrollToTheme('next')"
                :disabled="!canScrollDown"
                class="btn btn-ghost btn-xs btn-circle"
                :class="{ 'btn-disabled': !canScrollDown }"
                title="Next theme"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
            </div>
          </div>

          <div class="flex flex-wrap gap-2">
            <button
              v-for="category in themeCategories"
              :key="category.name"
              @click="scrollToCategory(category)"
              class="btn btn-outline btn-xs normal-case"
            >
              {{ category.name }}
            </button>
          </div>
        </div>

        <!-- System Theme Setting -->
        <div class="border-t border-base-300 p-4">
          <label class="label cursor-pointer">
            <div class="flex-1">
              <div class="label-text font-medium">
                Use system preference
              </div>
              <div class="label-text-alt text-base-content/60">
                Automatically switch between light and dark themes
              </div>
            </div>
            <input
              type="checkbox"
              v-model="useSystemTheme"
              @change="toggleSystemTheme"
              class="toggle toggle-primary"
            />
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted, nextTick, computed, watch } from 'vue'
import { usePage } from '@inertiajs/vue3'

// State
const isOpen = ref(false)
const selectedTheme = ref('light')
const useSystemTheme = ref(false)
const highlightedTheme = ref(null)
const scrollContainer = ref(null)
const themeRefs = reactive({})
const searchTerm = ref('')

// Scroll state
const canScrollUp = ref(false)
const canScrollDown = ref(false)

// Get available themes from props
const availableThemes = usePage().props.themes || ['light', 'dark', 'cupcake', 'bumblebee', 'emerald', 'corporate', 'synthwave', 'retro', 'cyberpunk', 'valentine', 'halloween', 'garden', 'forest', 'aqua', 'lofi', 'pastel', 'fantasy', 'wireframe', 'black', 'luxury', 'dracula', 'cmyk', 'autumn', 'business', 'acid', 'lemonade', 'night', 'coffee', 'winter']

// Theme categories for quick navigation
const themeCategories = computed(() => [
  { name: 'Basic', themes: ['light', 'dark'] },
  { name: 'Professional', themes: ['corporate', 'business'] },
  { name: 'Vibrant', themes: ['synthwave', 'retro', 'cyberpunk', 'emerald', 'lemonade'] },
  { name: 'Seasonal', themes: ['valentine', 'halloween'] },
  { name: 'Nature', themes: ['garden', 'forest', 'aqua'] },
  { name: 'Dark Tones', themes: ['night', 'coffee', 'dracula'] }
])

// Computed property for filtered themes
const filteredThemes = computed(() => {
  if (!searchTerm.value) {
    return availableThemes
  }
  const query = searchTerm.value.toLowerCase()
  return availableThemes.filter(theme =>
    theme.toLowerCase().includes(query) ||
    getThemeDescription(theme).toLowerCase().includes(query)
  )
})

// Methods
const setThemeRef = (el, theme) => {
  if (el) {
    themeRefs[theme] = el
  }
}

const toggleModal = () => {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    nextTick(() => {
      updateScrollState()
      scrollToSelectedTheme()
    })
  } else {
    searchTerm.value = ''
  }
}

const closeModal = () => {
  isOpen.value = false
  searchTerm.value = ''
}

const changeTheme = (theme) => {
  const html = document.documentElement
  html.setAttribute('data-theme', theme)
  localStorage.setItem('theme-backend', theme)
  selectedTheme.value = theme
  useSystemTheme.value = false
  localStorage.setItem('use-system-theme', 'false')

  // Highlight the selected theme briefly
  highlightedTheme.value = theme
  setTimeout(() => {
    highlightedTheme.value = null
  }, 1000)

  // Close modal after a brief delay
  setTimeout(() => {
    closeModal()
  }, 500)
}

const scrollToSelectedTheme = () => {
  if (selectedTheme.value && themeRefs[selectedTheme.value] && scrollContainer.value) {
    const element = themeRefs[selectedTheme.value]
    const container = scrollContainer.value
    const elementTop = element.offsetTop
    const containerHeight = container.clientHeight
    const elementHeight = element.clientHeight

    const scrollTop = elementTop - (containerHeight / 2) + (elementHeight / 2)

    container.scrollTo({
      top: Math.max(0, scrollTop),
      behavior: 'smooth'
    })
  }
}

const scrollToTheme = (direction) => {
  if (!scrollContainer.value) return

  const currentThemes = filteredThemes.value
  const currentIndex = currentThemes.indexOf(selectedTheme.value)
  let targetIndex

  if (direction === 'next') {
    targetIndex = Math.min(currentIndex + 1, currentThemes.length - 1)
  } else {
    targetIndex = Math.max(currentIndex - 1, 0)
  }

  const targetTheme = currentThemes[targetIndex]
  if (targetTheme && themeRefs[targetTheme]) {
    const element = themeRefs[targetTheme]
    element.scrollIntoView({ behavior: 'smooth', block: 'center' })

    highlightedTheme.value = targetTheme
    setTimeout(() => {
      highlightedTheme.value = null
    }, 800)
    selectedTheme.value = targetTheme
  }
}

const scrollToCategory = (category) => {
  const firstThemeInCategory = category.themes.find(theme =>
    filteredThemes.value.includes(theme)
  )

  if (firstThemeInCategory && themeRefs[firstThemeInCategory]) {
    const element = themeRefs[firstThemeInCategory]
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })

    category.themes.forEach((theme, index) => {
      if (filteredThemes.value.includes(theme)) {
        setTimeout(() => {
          highlightedTheme.value = theme
          setTimeout(() => {
            if (highlightedTheme.value === theme) {
              highlightedTheme.value = null
            }
          }, 300)
        }, index * 100)
      }
    })
  }
}

const handleScroll = () => {
  updateScrollState()
}

const updateScrollState = () => {
  if (!scrollContainer.value) return

  const container = scrollContainer.value
  const scrollTop = container.scrollTop
  const scrollHeight = container.scrollHeight
  const clientHeight = container.clientHeight

  canScrollUp.value = scrollTop > 0
  canScrollDown.value = scrollTop < scrollHeight - clientHeight
}

const toggleSystemTheme = () => {
  if (useSystemTheme.value) {
    localStorage.setItem('use-system-theme', 'true')
    applySystemTheme()
  } else {
    localStorage.setItem('use-system-theme', 'false')
    const savedTheme = localStorage.getItem('theme-backend') || 'light'
    changeTheme(savedTheme)
  }
}

const applySystemTheme = () => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const theme = prefersDark ? 'dark' : 'light'
  const html = document.documentElement
  html.setAttribute('data-theme', theme)
  selectedTheme.value = theme
}

const getThemeColors = (theme) => {
  const themeColorMap = {
    light: {
      primary: 'bg-blue-500',
      secondary: 'bg-purple-500',
      accent: 'bg-pink-500'
    },
    dark: {
      primary: 'bg-slate-700',
      secondary: 'bg-slate-800',
      accent: 'bg-slate-600'
    },
    cupcake: {
      primary: 'bg-pink-400',
      secondary: 'bg-purple-400',
      accent: 'bg-yellow-400'
    },
  }
  return themeColorMap[theme] || themeColorMap.light
}

const getThemeDescription = (theme) => {
  const descriptions = {
    light: 'Clean and bright',
    dark: 'Easy on the eyes',
    cupcake: 'Sweet and colorful',
    bumblebee: 'Bright and energetic',
    emerald: 'Lush and vibrant',
    corporate: 'Business focused',
    synthwave: 'Retro futuristic',
    retro: 'Vintage vibes',
    cyberpunk: 'Neon and electric',
    valentine: 'Love and warmth',
    halloween: 'Spooky season',
    garden: 'Nature inspired',
    forest: 'Deep and natural',
    aqua: 'Ocean breeze',
    lofi: 'Calm and minimal',
    pastel: 'Soft and gentle',
    fantasy: 'Magical and dreamy',
    wireframe: 'Clean and simple',
    black: 'Bold and stark',
    luxury: 'Elegant and refined',
    dracula: 'Bold and moody',
    cmyk: 'Print inspired',
    autumn: 'Warm and cozy',
    business: 'Professional tone',
    acid: 'Bold and electric',
    lemonade: 'Fresh and cheerful',
    night: 'Calm and deep',
    coffee: 'Warm and earthy',
    winter: 'Cool and crisp'
  }
  return descriptions[theme] || 'Custom theme'
}

const loadThemeFromStorage = () => {
  const html = document.documentElement
  const savedTheme = localStorage.getItem('theme-backend')
  const savedSystemPref = localStorage.getItem('use-system-theme') === 'true'

  useSystemTheme.value = savedSystemPref

  if (savedSystemPref) {
    applySystemTheme()
  } else {
    const theme = savedTheme || 'light'
    html.setAttribute('data-theme', theme)
    selectedTheme.value = theme
  }
}

const clearSearch = () => {
  searchTerm.value = ''
  nextTick(() => {
    updateScrollState()
    scrollToSelectedTheme()
  })
}

const handleSearchEnter = () => {
  if (filteredThemes.value.length > 0) {
    changeTheme(filteredThemes.value[0])
  }
}

// Handle escape key
const handleEscape = (e) => {
  if (e.key === 'Escape' && isOpen.value) {
    closeModal()
  }
}

// Listen for system theme changes
const handleSystemThemeChange = (e) => {
  if (useSystemTheme.value) {
    applySystemTheme()
  }
}

// Watch for changes in filtered themes to update scroll state
watch(filteredThemes, () => {
  nextTick(() => {
    updateScrollState()
  })
}, { deep: true })

// Lifecycle
let mediaQuery

onMounted(() => {
  loadThemeFromStorage()
  document.addEventListener('keydown', handleEscape)

  mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  mediaQuery.addEventListener('change', handleSystemThemeChange)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape)
  if (mediaQuery) {
    mediaQuery.removeEventListener('change', handleSystemThemeChange)
  }
})
</script>
