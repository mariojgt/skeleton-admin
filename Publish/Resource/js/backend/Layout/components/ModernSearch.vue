<template>
  <div class="relative" ref="searchContainer">
    <!-- Search Button/Input -->
    <div class="relative">
      <button
        v-if="!isSearchOpen"
        @click="openSearch"
        class="flex items-center space-x-2 px-4 py-2 text-sm text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-all duration-200 min-w-[200px] justify-start"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
        <span>Search...</span>
        <div class="ml-auto flex items-center space-x-1">
          <kbd class="px-1.5 py-0.5 text-xs font-semibold text-slate-500 bg-slate-200 dark:bg-slate-700 dark:text-slate-400 rounded">⌘</kbd>
          <kbd class="px-1.5 py-0.5 text-xs font-semibold text-slate-500 bg-slate-200 dark:bg-slate-700 dark:text-slate-400 rounded">K</kbd>
        </div>
      </button>

      <div
        v-else
        class="flex items-center space-x-2 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 min-w-[320px]"
      >
        <div class="relative flex-1">
          <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
          <input
            ref="searchInput"
            v-model="searchQuery"
            @input="handleInput"
            @keydown.down.prevent="navigateDown"
            @keydown.up.prevent="navigateUp"
            @keydown.enter.prevent="selectItem"
            @keydown.esc="closeSearch"
            placeholder="Search for pages, users, content..."
            class="w-full pl-10 pr-4 py-3 bg-transparent border-0 focus:ring-0 focus:outline-none text-slate-900 dark:text-slate-100 placeholder-slate-500"
          />
        </div>
        <button
          @click="closeSearch"
          class="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 rounded-lg transition-colors"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Search Results Dropdown -->
    <div
      v-if="isSearchOpen && searchQuery.length >= minChars"
      class="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 z-50 max-h-96 overflow-hidden"
    >
      <!-- Loading State -->
      <div v-if="isLoading" class="p-6 text-center">
        <div class="inline-flex items-center space-x-2 text-slate-500">
          <svg class="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
          </svg>
          <span class="text-sm">Searching...</span>
        </div>
      </div>

      <!-- No Results -->
      <div v-else-if="!hasResults" class="p-6 text-center">
        <div class="w-12 h-12 mx-auto mb-3 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center">
          <svg class="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.441-1.036-5.877-2.709M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </div>
        <p class="text-sm text-slate-500 dark:text-slate-400">No results found</p>
        <p class="text-xs text-slate-400 dark:text-slate-500 mt-1">Try adjusting your search terms</p>
      </div>

      <!-- Results -->
      <div v-else class="overflow-y-auto max-h-80">
        <div v-for="(category, categoryName) in searchResults.data" :key="categoryName">
          <!-- Category Header -->
          <div class="sticky top-0 bg-slate-50 dark:bg-slate-900 px-4 py-2 border-b border-slate-200 dark:border-slate-700">
            <div class="flex items-center space-x-2">
              <div class="w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-600 rounded flex items-center justify-center">
                <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/>
                </svg>
              </div>
              <span class="text-sm font-semibold text-slate-700 dark:text-slate-300">{{ categoryName }}</span>
              <span class="text-xs text-slate-500 bg-slate-200 dark:bg-slate-700 px-2 py-0.5 rounded-full">
                {{ category.search.length }}
              </span>
            </div>
          </div>

          <!-- Category Items -->
          <div v-for="(item, index) in category.search" :key="index">
            <Link
              :href="item.route"
              @click="closeSearch"
              class="flex items-center space-x-3 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors group"
              :class="{ 'bg-blue-50 dark:bg-blue-900/20 border-r-2 border-blue-500': selectedIndex === getGlobalIndex(categoryName, index) }"
            >
              <div class="flex-shrink-0">
                <div class="w-8 h-8 bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 rounded-lg flex items-center justify-center group-hover:from-blue-500 group-hover:to-purple-600 transition-all duration-200">
                  <svg class="w-4 h-4 text-slate-600 dark:text-slate-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.441-1.036-5.877-2.709M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-slate-900 dark:text-slate-100 truncate">
                  {{ item.result }}
                </p>
                <div class="flex items-center space-x-1 mt-1">
                  <svg class="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <p class="text-xs text-slate-500 dark:text-slate-400 truncate">
                    {{ item.last_route }}
                  </p>
                </div>
              </div>
              <div class="flex-shrink-0">
                <svg class="w-4 h-4 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="border-t border-slate-200 dark:border-slate-700 p-3 bg-slate-50 dark:bg-slate-900">
        <div class="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <div class="flex items-center space-x-2">
            <kbd class="px-1.5 py-0.5 bg-slate-200 dark:bg-slate-700 rounded">↑↓</kbd>
            <span>Navigate</span>
          </div>
          <div class="flex items-center space-x-2">
            <kbd class="px-1.5 py-0.5 bg-slate-200 dark:bg-slate-700 rounded">↵</kbd>
            <span>Select</span>
          </div>
          <div class="flex items-center space-x-2">
            <kbd class="px-1.5 py-0.5 bg-slate-200 dark:bg-slate-700 rounded">ESC</kbd>
            <span>Close</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import { Link } from '@inertiajs/vue3'
import { api } from '../../Boot/axios.js'
import debounce from 'lodash/debounce'

// Props
const props = withDefaults(defineProps(), {
  minChars: 2,
  debounceTime: 300
})

// State
const searchQuery = ref('')
const searchResults = ref({ status: false, data: {} })
const isLoading = ref(false)
const isSearchOpen = ref(false)
const selectedIndex = ref(0)
const searchContainer = ref(null)
const searchInput = ref(null)

// Computed
const hasResults = computed(() => {
  return searchResults.value.status && Object.keys(searchResults.value.data).length > 0
})

const totalItems = computed(() => {
  if (!hasResults.value) return 0
  return Object.values(searchResults.value.data).reduce((total, category) => {
    return total + category.search.length
  }, 0)
})

// Methods
const debouncedSearch = debounce(async () => {
  if (searchQuery.value.length < props.minChars) {
    searchResults.value = { status: false, data: {} }
    isLoading.value = false
    return
  }

  try {
    isLoading.value = true
    const response = await api.get(
      route('admin.api.search', { search: searchQuery.value })
    )
    searchResults.value = response.data
  } catch (error) {
    searchResults.value = { status: false, data: {} }
  } finally {
    isLoading.value = false
  }
}, props.debounceTime)

const handleInput = () => {
  selectedIndex.value = 0
  debouncedSearch()
}

const openSearch = async () => {
  isSearchOpen.value = true
  await nextTick()
  searchInput.value?.focus()
}

const closeSearch = () => {
  isSearchOpen.value = false
  searchQuery.value = ''
  searchResults.value = { status: false, data: {} }
  selectedIndex.value = 0
}

const getGlobalIndex = (categoryName, itemIndex) => {
  let globalIndex = 0
  for (const [catName, category] of Object.entries(searchResults.value.data)) {
    if (catName === categoryName) {
      return globalIndex + itemIndex
    }
    globalIndex += category.search.length
  }
  return -1
}

const navigateDown = () => {
  if (!hasResults.value) return
  selectedIndex.value = (selectedIndex.value + 1) % totalItems.value
}

const navigateUp = () => {
  if (!hasResults.value) return
  selectedIndex.value = selectedIndex.value <= 0 ? totalItems.value - 1 : selectedIndex.value - 1
}

const selectItem = () => {
  if (!hasResults.value || selectedIndex.value === -1) return

  let currentIndex = 0
  for (const category of Object.values(searchResults.value.data)) {
    for (const item of category.search) {
      if (currentIndex === selectedIndex.value) {
        window.location.href = item.route
        closeSearch()
        return
      }
      currentIndex++
    }
  }
}

// Keyboard shortcuts
const handleKeydown = (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault()
    if (isSearchOpen.value) {
      closeSearch()
    } else {
      openSearch()
    }
  }
}

// Click outside
const handleClickOutside = (e) => {
  if (searchContainer.value && !searchContainer.value.contains(e.target)) {
    closeSearch()
  }
}

// Lifecycle
onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
  document.removeEventListener('click', handleClickOutside)
  debouncedSearch.cancel()
})
</script>
