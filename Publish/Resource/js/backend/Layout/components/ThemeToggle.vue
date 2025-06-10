<template>
  <div class="relative">
    <!-- Theme Toggle Button -->
    <button
      @click="toggleDropdown"
      class="relative p-2 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all duration-200"
      :class="{ 'bg-slate-100 dark:bg-slate-800': isOpen }"
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

    <!-- Theme Dropdown -->
    <div
      v-if="isOpen"
      class="absolute right-0 top-full mt-2 w-72 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 z-50 overflow-hidden"
    >
      <!-- Header -->
      <div class="p-4 border-b border-slate-200 dark:border-slate-700 bg-gradient-to-r from-violet-50 to-purple-50 dark:from-slate-800 dark:to-slate-700">
        <h3 class="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-1">Choose Theme</h3>
        <p class="text-xs text-slate-500 dark:text-slate-400">Select your preferred color scheme</p>
      </div>

      <!-- Theme Options -->
      <div class="p-3">
        <div class="grid gap-2">
          <div
            v-for="theme in availableThemes"
            :key="theme"
            @click="changeTheme(theme)"
            class="relative group cursor-pointer rounded-lg border-2 transition-all duration-200 hover:shadow-md"
            :class="selectedTheme === theme
              ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
              : 'border-slate-200 dark:border-slate-600 hover:border-slate-300 dark:hover:border-slate-500'"
          >
            <div class="p-3">
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-3">
                  <!-- Theme Preview -->
                  <div class="flex space-x-1">
                    <div
                      class="w-3 h-3 rounded-full"
                      :class="getThemeColors(theme).primary"
                    ></div>
                    <div
                      class="w-3 h-3 rounded-full"
                      :class="getThemeColors(theme).secondary"
                    ></div>
                    <div
                      class="w-3 h-3 rounded-full"
                      :class="getThemeColors(theme).accent"
                    ></div>
                  </div>

                  <!-- Theme Info -->
                  <div>
                    <div class="text-sm font-medium text-slate-900 dark:text-slate-100 capitalize">
                      {{ theme }}
                    </div>
                    <div class="text-xs text-slate-500 dark:text-slate-400">
                      {{ getThemeDescription(theme) }}
                    </div>
                  </div>
                </div>

                <!-- Selected Indicator -->
                <div
                  v-if="selectedTheme === theme"
                  class="flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center"
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

              <!-- Theme Preview Bar -->
              <div class="mt-3 h-2 rounded-full overflow-hidden bg-slate-100 dark:bg-slate-700">
                <div class="h-full flex">
                  <div class="flex-1" :class="getThemeColors(theme).primary"></div>
                  <div class="flex-1" :class="getThemeColors(theme).secondary"></div>
                  <div class="flex-1" :class="getThemeColors(theme).accent"></div>
                  <div class="flex-1 bg-slate-300 dark:bg-slate-600"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- System Theme Option -->
      <div class="border-t border-slate-200 dark:border-slate-700 p-3">
        <label class="flex items-center space-x-3 cursor-pointer group">
          <input
            type="checkbox"
            v-model="useSystemTheme"
            @change="toggleSystemTheme"
            class="w-4 h-4 text-blue-600 bg-slate-100 border-slate-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-slate-800 focus:ring-2 dark:bg-slate-700 dark:border-slate-600"
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
import { ref, onMounted, onUnmounted } from 'vue'
import { usePage } from '@inertiajs/vue3'

// State
const isOpen = ref(false)
const selectedTheme = ref('light')
const useSystemTheme = ref(false)

// Get available themes from props
const availableThemes = usePage().props.themes || ['light', 'dark', 'admin', 'corporate', 'synthwave', 'retro', 'cyberpunk', 'valentine', 'halloween', 'garden', 'forest', 'aqua']

// Methods
const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const changeTheme = (theme) => {
  const html = document.documentElement
  html.setAttribute('data-theme', theme)
  localStorage.setItem('theme-backend', theme)
  selectedTheme.value = theme
  useSystemTheme.value = false
  localStorage.setItem('use-system-theme', 'false')
  isOpen.value = false
}

const toggleSystemTheme = () => {
  if (useSystemTheme.value) {
    localStorage.setItem('use-system-theme', 'true')
    applySystemTheme()
  } else {
    localStorage.setItem('use-system-theme', 'false')
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
      primary: 'bg-slate-600',
      secondary: 'bg-slate-700',
      accent: 'bg-slate-500'
    },
    admin: {
      primary: 'bg-indigo-500',
      secondary: 'bg-indigo-600',
      accent: 'bg-indigo-400'
    },
    corporate: {
      primary: 'bg-blue-600',
      secondary: 'bg-slate-600',
      accent: 'bg-gray-500'
    },
    synthwave: {
      primary: 'bg-pink-500',
      secondary: 'bg-purple-500',
      accent: 'bg-cyan-400'
    },
    retro: {
      primary: 'bg-yellow-500',
      secondary: 'bg-orange-500',
      accent: 'bg-red-500'
    },
    cyberpunk: {
      primary: 'bg-yellow-400',
      secondary: 'bg-pink-500',
      accent: 'bg-cyan-400'
    },
    valentine: {
      primary: 'bg-pink-500',
      secondary: 'bg-red-500',
      accent: 'bg-rose-400'
    },
    halloween: {
      primary: 'bg-orange-500',
      secondary: 'bg-purple-600',
      accent: 'bg-green-500'
    },
    garden: {
      primary: 'bg-green-500',
      secondary: 'bg-emerald-600',
      accent: 'bg-lime-400'
    },
    forest: {
      primary: 'bg-green-700',
      secondary: 'bg-emerald-800',
      accent: 'bg-green-500'
    },
    aqua: {
      primary: 'bg-cyan-500',
      secondary: 'bg-blue-500',
      accent: 'bg-teal-400'
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
    aqua: 'Ocean breeze'
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

// Click outside handler
const handleClickOutside = (e) => {
  if (!e.target.closest('.relative')) {
    isOpen.value = false
  }
}

// Listen for system theme changes
const handleSystemThemeChange = (e) => {
  if (useSystemTheme.value) {
    applySystemTheme()
  }
}

// Lifecycle
onMounted(() => {
  loadThemeFromStorage()
  document.addEventListener('click', handleClickOutside)

  // Listen for system color scheme changes
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  mediaQuery.addEventListener('change', handleSystemThemeChange)

  // Cleanup
  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
    mediaQuery.removeEventListener('change', handleSystemThemeChange)
  })
})
</script>
