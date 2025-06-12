<template>
  <div class="relative">
    <button
      @click="toggleDropdown"
      class="relative p-2 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
      :class="{ 'bg-slate-100 dark:bg-slate-800': isOpen }"
      title="Change theme"
      aria-expanded="false"
      aria-controls="theme-dropdown"
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

    <div
      v-if="isOpen"
      id="theme-dropdown"
      ref="dropdownRef"
      class="absolute right-0 top-full mt-2 w-80 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 z-50 overflow-hidden transform origin-top-right transition-all duration-200 ease-out"
      :class="{ 'scale-95 opacity-0': !isOpen, 'scale-100 opacity-100': isOpen }"
    >
      <div class="p-4 border-b border-slate-200 dark:border-slate-700 bg-gradient-to-r from-violet-50 to-purple-50 dark:from-slate-800 dark:to-slate-700">
        <h3 class="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-1">Choose Theme</h3>
        <p class="text-sm text-slate-500 dark:text-slate-400">Select your preferred color scheme</p>

        <div class="text-xs text-slate-400 dark:text-slate-500 mt-3 flex items-center justify-between">
          <span>{{ filteredThemes.length }} themes available</span>
          <span v-if="searchTerm && filteredThemes.length !== availableThemes.length">
            ({{ availableThemes.length }} total)
          </span>
        </div>
      </div>

      <div class="p-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-750">
        <div class="relative">
          <input
            type="text"
            v-model="searchTerm"
            placeholder="Search themes..."
            class="w-full pl-10 pr-4 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            @keydown.enter="handleSearchEnter"
          />
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg class="w-5 h-5 text-slate-400 dark:text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </div>
          <button
            v-if="searchTerm"
            @click="clearSearch"
            class="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 focus:outline-none"
            title="Clear search"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>

      <div
        ref="scrollContainer"
        class="relative max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-600 scrollbar-track-transparent py-2"
        @scroll="handleScroll"
      >
        <div
          v-if="showScrollIndicators.top"
          class="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-white dark:from-slate-800 to-transparent z-10 pointer-events-none"
        ></div>

        <div class="px-3 py-1">
          <div class="grid gap-2">
            <template v-if="filteredThemes.length > 0">
              <div
                v-for="(theme, index) in filteredThemes"
                :key="theme"
                :ref="el => setThemeRef(el, theme)"
                @click="changeTheme(theme)"
                class="relative group cursor-pointer rounded-lg border-2 transition-all duration-200 hover:shadow-md transform hover:scale-[1.02] focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500"
                :class="[
                  selectedTheme === theme
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 shadow-md'
                    : 'border-slate-200 dark:border-slate-600 hover:border-slate-300 dark:hover:border-slate-500',
                  { 'animate-pulse': highlightedTheme === theme }
                ]"
                tabindex="0"
                @keydown.enter="changeTheme(theme)"
                @keydown.space="changeTheme(theme)"
              >
                <div class="p-3">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-3">
                      <div class="flex space-x-1">
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
                        <div class="text-sm font-medium text-slate-900 dark:text-slate-100 capitalize">
                          {{ theme }}
                        </div>
                        <div class="text-xs text-slate-500 dark:text-slate-400">
                          {{ getThemeDescription(theme) }}
                        </div>
                      </div>
                    </div>

                    <div
                      v-if="selectedTheme === theme"
                      class="flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center animate-scale-in"
                    >
                      <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <div
                      v-else
                      class="flex-shrink-0 w-5 h-5 border-2 border-slate-300 dark:border-slate-600 rounded-full group-hover:border-slate-400 dark:group-hover:border-slate-500 transition-colors"
                    ></div>
                  </div>

                  <div class="mt-3 h-2 rounded-full overflow-hidden bg-slate-100 dark:bg-slate-700">
                    <div class="h-full flex">
                      <div class="flex-1 transition-all duration-300" :class="getThemeColors(theme).primary"></div>
                      <div class="flex-1 transition-all duration-300 delay-75" :class="getThemeColors(theme).secondary"></div>
                      <div class="flex-1 transition-all duration-300 delay-150" :class="getThemeColors(theme).accent"></div>
                      <div class="flex-1 bg-slate-300 dark:bg-slate-600 transition-all duration-300 delay-200"></div>
                    </div>
                  </div>
                </div>
              </div>
            </template>
            <div v-else class="p-4 text-center text-slate-500 dark:text-slate-400">
              No themes found for "{{ searchTerm }}".
            </div>
          </div>
        </div>

        <div
          v-if="showScrollIndicators.bottom"
          class="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-white dark:from-slate-800 to-transparent z-10 pointer-events-none"
        ></div>
      </div>

      <div class="border-t border-slate-200 dark:border-slate-700 p-4 bg-slate-50 dark:bg-slate-750">
        <div class="flex items-center justify-between mb-3">
          <span class="text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider">Quick Navigation</span>
          <div class="flex items-center space-x-2">
            <button
              @click="scrollToTheme('prev')"
              :disabled="!canScrollUp"
              class="p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              title="Previous theme"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"/>
              </svg>
            </button>
            <button
              @click="scrollToTheme('next')"
              :disabled="!canScrollDown"
              class="p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            class="px-3 py-1 text-xs rounded-full bg-slate-200 dark:bg-slate-600 hover:bg-slate-300 dark:hover:bg-slate-500 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {{ category.name }}
          </button>
        </div>
      </div>

      <div class="border-t border-slate-200 dark:border-slate-700 p-4">
        <label class="flex items-center space-x-3 cursor-pointer group">
          <input
            type="checkbox"
            v-model="useSystemTheme"
            @change="toggleSystemTheme"
            class="w-4 h-4 text-blue-600 bg-slate-100 border-slate-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-slate-800 focus:ring-2 dark:bg-slate-700 dark:border-slate-600 cursor-pointer"
          />
          <div class="flex-1">
            <div class="text-sm font-medium text-slate-900 dark:text-slate-100">
              Use system preference
            </div>
            <div class="text-xs text-slate-500 dark:text-slate-400">
              Automatically switch between light and dark themes
            </div>
          </div>
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted, nextTick, computed, watch } from 'vue'
import { usePage } from '@inertiajs/vue3' // Assuming you're still using Inertia.js

// State
const isOpen = ref(false)
const selectedTheme = ref('light')
const useSystemTheme = ref(false)
const highlightedTheme = ref(null)
const scrollContainer = ref(null)
const dropdownRef = ref(null)
const themeRefs = reactive({})
const searchTerm = ref('') // New state for search term

// Scroll state
const showScrollIndicators = reactive({
  top: false,
  bottom: false
})

const canScrollUp = ref(false)
const canScrollDown = ref(false)

// Get available themes from props
const availableThemes = usePage().props.themes || ['light', 'dark', 'admin', 'corporate', 'synthwave', 'retro', 'cyberpunk', 'valentine', 'halloween', 'garden', 'forest', 'aqua', 'emerald', 'night', 'coffee', 'lemonade', 'dracula']

// Theme categories for quick navigation
const themeCategories = computed(() => [
  { name: 'Basic', themes: ['light', 'dark'] },
  { name: 'Professional', themes: ['admin', 'corporate'] },
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

// Watch for changes in filtered themes to update scroll state
watch(filteredThemes, () => {
  nextTick(() => {
    updateScrollState()
  })
}, { deep: true }) // Deep watch might be overkill, but ensures reactive elements are caught

// Methods
const setThemeRef = (el, theme) => {
  if (el) {
    themeRefs[theme] = el
  }
}

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    nextTick(() => {
      updateScrollState()
      scrollToSelectedTheme()
    })
  } else {
    searchTerm.value = '' // Clear search when closing
  }
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

  // Close dropdown after a brief delay
  setTimeout(() => {
    isOpen.value = false
    searchTerm.value = '' // Clear search after selecting
  }, 500);
}

const scrollToSelectedTheme = () => {
  if (selectedTheme.value && themeRefs[selectedTheme.value] && scrollContainer.value) {
    const element = themeRefs[selectedTheme.value]
    const container = scrollContainer.value
    const elementTop = element.offsetTop
    const containerHeight = container.clientHeight
    const elementHeight = element.clientHeight

    // Center the selected theme in the viewport
    const scrollTop = elementTop - (containerHeight / 2) + (elementHeight / 2)

    container.scrollTo({
      top: Math.max(0, scrollTop),
      behavior: 'smooth'
    })
  }
}

const scrollToTheme = (direction) => {
  if (!scrollContainer.value) return

  const currentThemes = filteredThemes.value // Use filtered themes for navigation
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

    // Briefly highlight the target theme
    highlightedTheme.value = targetTheme
    setTimeout(() => {
      highlightedTheme.value = null
    }, 800)
    selectedTheme.value = targetTheme; // Also update selected theme on navigation
  }
}

const scrollToCategory = (category) => {
  const firstThemeInCategory = category.themes.find(theme =>
    filteredThemes.value.includes(theme) // Use filtered themes
  )

  if (firstThemeInCategory && themeRefs[firstThemeInCategory]) {
    const element = themeRefs[firstThemeInCategory]
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })

    // Highlight all themes in the category briefly
    category.themes.forEach((theme, index) => {
      if (filteredThemes.value.includes(theme)) { // Use filtered themes
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

  showScrollIndicators.top = scrollTop > 10
  showScrollIndicators.bottom = scrollTop < scrollHeight - clientHeight - 10

  canScrollUp.value = scrollTop > 0
  canScrollDown.value = scrollTop < scrollHeight - clientHeight
}

const toggleSystemTheme = () => {
  if (useSystemTheme.value) {
    localStorage.setItem('use-system-theme', 'true')
    applySystemTheme()
  } else {
    localStorage.setItem('use-system-theme', 'false')
    // Revert to previously selected theme if system theme is deselected
    const savedTheme = localStorage.getItem('theme-backend') || 'light';
    changeTheme(savedTheme);
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
    admin: {
      primary: 'bg-indigo-600',
      secondary: 'bg-indigo-700',
      accent: 'bg-indigo-500'
    },
    corporate: {
      primary: 'bg-sky-600',
      secondary: 'bg-slate-700',
      accent: 'bg-gray-600'
    },
    synthwave: {
      primary: 'bg-fuchsia-500',
      secondary: 'bg-purple-600',
      accent: 'bg-cyan-400'
    },
    retro: {
      primary: 'bg-amber-500',
      secondary: 'bg-orange-600',
      accent: 'bg-red-500'
    },
    cyberpunk: {
      primary: 'bg-lime-400',
      secondary: 'bg-pink-500',
      accent: 'bg-fuchsia-600'
    },
    valentine: {
      primary: 'bg-rose-500',
      secondary: 'bg-pink-600',
      accent: 'bg-red-400'
    },
    halloween: {
      primary: 'bg-orange-600',
      secondary: 'bg-purple-700',
      accent: 'bg-green-600'
    },
    garden: {
      primary: 'bg-green-600',
      secondary: 'bg-emerald-700',
      accent: 'bg-lime-500'
    },
    forest: {
      primary: 'bg-green-800',
      secondary: 'bg-emerald-900',
      accent: 'bg-green-600'
    },
    aqua: {
      primary: 'bg-cyan-600',
      secondary: 'bg-blue-600',
      accent: 'bg-teal-500'
    },
    emerald: {
      primary: 'bg-emerald-500',
      secondary: 'bg-teal-600',
      accent: 'bg-lime-500'
    },
    night: {
      primary: 'bg-slate-900',
      secondary: 'bg-gray-900',
      accent: 'bg-indigo-900'
    },
    coffee: {
      primary: 'bg-amber-800',
      secondary: 'bg-yellow-800',
      accent: 'bg-stone-700'
    },
    lemonade: {
      primary: 'bg-yellow-300',
      secondary: 'bg-lime-300',
      accent: 'bg-pink-300'
    },
    dracula: {
      primary: 'bg-purple-900',
      secondary: 'bg-gray-900',
      accent: 'bg-red-700'
    }
  }
  return themeColorMap[theme] || themeColorMap.light
}

const getThemeDescription = (theme) => {
  const descriptions = {
    light: 'Clean and bright',
    dark: 'Easy on the eyes',
    admin: 'Professional look',
    corporate: 'Business focused',
    synthwave: 'Retro futuristic',
    retro: 'Vintage vibes',
    cyberpunk: 'Neon and electric',
    valentine: 'Love and warmth',
    halloween: 'Spooky season',
    garden: 'Nature inspired',
    forest: 'Deep and natural',
    aqua: 'Ocean breeze',
    emerald: 'Lush and vibrant',
    night: 'Calm and deep',
    coffee: 'Warm and earthy',
    lemonade: 'Fresh and cheerful',
    dracula: 'Bold and moody'
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

// Search functionality methods
const clearSearch = () => {
  searchTerm.value = ''
  nextTick(() => {
    updateScrollState();
    // Optionally scroll to selected theme after clearing search
    scrollToSelectedTheme();
  });
}

const handleSearchEnter = () => {
  if (filteredThemes.value.length > 0) {
    // If there's a search term and results, select the first one
    changeTheme(filteredThemes.value[0]);
  }
}

// Click outside handler
const handleClickOutside = (e) => {
  if (isOpen.value && dropdownRef.value && !dropdownRef.value.contains(e.target) && !e.target.closest('.relative')) {
    isOpen.value = false
    searchTerm.value = '' // Clear search when closing via outside click
  }
}

// Listen for system theme changes
const handleSystemThemeChange = (e) => {
  if (useSystemTheme.value) {
    applySystemTheme()
  }
}

// Keyboard navigation
const handleKeydown = (e) => {
  if (!isOpen.value) return

  switch (e.key) {
    case 'ArrowDown':
      e.preventDefault()
      // If search is active and first result is focused, move to next
      // Otherwise, navigate through all filtered themes
      if (e.target.tagName === 'INPUT' && filteredThemes.value.length > 0) {
        if (themeRefs[filteredThemes.value[0]]) {
          themeRefs[filteredThemes.value[0]].focus();
        }
      } else {
        scrollToTheme('next')
      }
      break
    case 'ArrowUp':
      e.preventDefault()
      scrollToTheme('prev')
      break
    case 'Escape':
      isOpen.value = false
      searchTerm.value = '' // Clear search on escape
      break
  }
}

// Lifecycle
let mediaQuery

onMounted(() => {
  loadThemeFromStorage()
  document.addEventListener('click', handleClickOutside)
  document.addEventListener('keydown', handleKeydown)

  // Listen for system color scheme changes
  mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  mediaQuery.addEventListener('change', handleSystemThemeChange)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  document.removeEventListener('keydown', handleKeydown)
  if (mediaQuery) {
    mediaQuery.removeEventListener('change', handleSystemThemeChange)
  }
})
</script>

<style scoped>
/* Custom scrollbar styles */
.scrollbar-thin {
  scrollbar-width: thin;
}

.scrollbar-thumb-slate-300::-webkit-scrollbar-thumb {
  background-color: rgb(203 213 225);
  border-radius: 9999px;
}

.dark .scrollbar-thumb-slate-600::-webkit-scrollbar-thumb {
  background-color: rgb(71 85 105);
}

.scrollbar-track-transparent::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar {
  width: 6px;
}

/* Animation for scale-in effect */
@keyframes scale-in {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

.animate-scale-in {
  animation: scale-in 0.2s ease-out;
}

/* Dropdown enter/leave animations */
.origin-top-right {
  transform-origin: top right;
}
</style>
