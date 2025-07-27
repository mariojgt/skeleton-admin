<template>
  <div class="relative">
    <!-- Search Button/Input -->
    <div class="relative">
      <button
        v-if="!isSearchOpen"
        class="btn btn-ghost btn-sm gap-2 text-base-content/70 bg-base-200 hover:bg-base-300 min-w-[200px] justify-start normal-case"
        @click="openSearch"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
        <span>Search...</span>
        <div class="ml-auto flex items-center gap-1">
          <kbd class="kbd kbd-xs">⌘</kbd>
          <kbd class="kbd kbd-xs">K</kbd>
        </div>
      </button>

      <div
        v-else
        class="input-group bg-base-100 shadow-lg border border-base-300 rounded-lg min-w-[320px]"
      >
        <div class="relative flex-1">
          <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-base-content/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
          <input
            ref="searchInput"
            v-model="searchQuery"
            placeholder="Search for pages, users, content..."
            class="input input-bordered w-full pl-10 pr-4 focus:outline-none focus:border-primary"
            @input="handleInput"
            @keydown.down.prevent="navigateDown"
            @keydown.up.prevent="navigateUp"
            @keydown.enter.prevent="selectItem"
            @keydown.esc="closeSearch"
          />
        </div>
        <button
          class="btn btn-ghost btn-square btn-sm"
          @click="closeSearch"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Custom Modal Overlay for Search Results -->
    <div
      v-if="isSearchOpen && searchQuery.length >= minChars"
      class="fixed inset-0 z-50 flex items-start justify-center pt-32 px-4"
      @click="closeSearch"
    >
      <!-- Backdrop -->
      <div class="fixed inset-0 bg-black/20 backdrop-blur-sm"></div>

      <!-- Search Results Modal -->
      <div
        class="relative w-full max-w-2xl card card-compact shadow-xl bg-base-100 border border-base-300 max-h-96 overflow-hidden"
        @click.stop
      >
        <!-- Search Results Header -->
        <div class="card-header p-4 border-b border-base-300 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <svg class="w-5 h-5 text-base-content/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
              <div>
                <h3 class="card-title text-lg">Search Results</h3>
                <p class="text-sm text-base-content/70">
                  {{ hasResults ? `Found ${totalItems} results` : 'No results found' }} for "{{ searchQuery }}"
                </p>
              </div>
            </div>
            <button
              class="btn btn-ghost btn-circle btn-xs"
              @click="closeSearch"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Search Results Content -->
        <div class="card-body p-0 overflow-y-auto max-h-80">
          <!-- Loading State -->
          <div v-if="isLoading" class="p-6 text-center">
            <div class="loading loading-spinner loading-md mx-auto"></div>
            <p class="text-sm text-base-content/60 mt-2">Searching...</p>
          </div>

          <!-- No Results -->
          <div v-else-if="!hasResults" class="p-8 text-center">
            <div class="avatar mb-4">
              <div class="w-16 rounded-full bg-base-200">
                <div class="w-full h-full flex items-center justify-center">
                  <svg class="w-8 h-8 text-base-content/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.441-1.036-5.877-2.709M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
              </div>
            </div>
            <p class="text-sm text-base-content/60 font-medium">No results found</p>
            <p class="text-xs text-base-content/40 mt-1">Try adjusting your search terms</p>
          </div>

          <!-- Results -->
          <div v-else>
            <div v-for="(category, categoryName) in searchResults.data" :key="categoryName">
              <!-- Category Header -->
              <div class="bg-base-200 px-4 py-3 border-b border-base-300 sticky top-0">
                <div class="flex items-center gap-3">
                  <div class="badge badge-primary badge-sm">
                    <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/>
                    </svg>
                  </div>
                  <span class="text-sm font-semibold">{{ categoryName }}</span>
                  <div class="badge badge-neutral badge-xs">
                    {{ category.search.length }}
                  </div>
                </div>
              </div>

              <!-- Category Items -->
              <div v-for="(item, index) in category.search" :key="index">
                <button
                  class="w-full flex items-center gap-3 px-4 py-3 hover:bg-base-200 transition-colors group border-b border-base-300 last:border-b-0 text-left"
                  :class="{ 'bg-primary/10 border-r-2 border-primary': selectedIndex === getGlobalIndex(categoryName, index) }"
                  @click="selectSearchResult(item)"
                >
                  <div class="flex-shrink-0">
                    <div class="avatar">
                      <div class="w-8 rounded-lg bg-base-300 group-hover:bg-primary transition-all duration-200">
                        <div class="w-full h-full flex items-center justify-center">
                          <svg class="w-4 h-4 text-base-content/60 group-hover:text-primary-content transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.441-1.036-5.877-2.709M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-base-content truncate">
                      {{ item.result }}
                    </p>
                    <div class="flex items-center gap-1 mt-1">
                      <svg class="w-3 h-3 text-base-content/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      <p class="text-xs text-base-content/50 truncate">
                        {{ item.last_route }}
                      </p>
                    </div>
                  </div>
                  <div class="flex-shrink-0">
                    <svg class="w-4 h-4 text-base-content/40 group-hover:text-base-content/60 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div class="border-t border-base-300 p-3 bg-base-200">
          <div class="flex items-center justify-between text-xs text-base-content/60">
            <div class="flex items-center gap-2">
              <kbd class="kbd kbd-xs">↑↓</kbd>
              <span>Navigate</span>
            </div>
            <div class="flex items-center gap-2">
              <kbd class="kbd kbd-xs">↵</kbd>
              <span>Select</span>
            </div>
            <div class="flex items-center gap-2">
              <kbd class="kbd kbd-xs">ESC</kbd>
              <span>Close</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import { api } from '../../Boot/axios.js' // Uncomment when you have real API
// import debounce from 'lodash/debounce' // Uncomment when you have lodash

// Simple debounce function (replace with lodash when available)
const debounce = (func, wait) => {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Props
const props = defineProps({
  minChars: {
    type: Number,
    default: 2
  },
  debounceTime: {
    type: Number,
    default: 300
  }
})

// State
const searchQuery = ref('')
const searchResults = ref({ status: false, data: {} })
const isLoading = ref(false)
const isSearchOpen = ref(false)
const selectedIndex = ref(0)
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

    // Mock search for demo - replace with your actual API call
    await new Promise(resolve => setTimeout(resolve, 500)) // Simulate API delay

    // Filter mock data based on search query
    const query = searchQuery.value.toLowerCase()
    const mockData = {
      'Pages': [
        { result: 'Dashboard Overview', route: '/dashboard', last_route: '/admin/dashboard' },
        { result: 'User Management', route: '/users', last_route: '/admin/users' },
        { result: 'Analytics Reports', route: '/analytics', last_route: '/admin/analytics' },
        { result: 'Settings Panel', route: '/settings', last_route: '/admin/settings' },
        { result: 'Profile Settings', route: '/profile', last_route: '/admin/profile' }
      ],
      'Users': [
        { result: 'John Doe', route: '/users/1', last_route: '/admin/users/1' },
        { result: 'Jane Smith', route: '/users/2', last_route: '/admin/users/2' },
        { result: 'Admin User', route: '/users/3', last_route: '/admin/users/3' }
      ],
      'Settings': [
        { result: 'System Configuration', route: '/settings', last_route: '/admin/settings' },
        { result: 'User Permissions', route: '/settings/permissions', last_route: '/admin/settings/permissions' },
        { result: 'Security Settings', route: '/settings/security', last_route: '/admin/settings/security' }
      ]
    }

    // Filter results based on search query
    const filteredData = {}
    Object.entries(mockData).forEach(([category, items]) => {
      const filtered = items.filter(item =>
        item.result.toLowerCase().includes(query) ||
        item.route.toLowerCase().includes(query)
      )
      if (filtered.length > 0) {
        filteredData[category] = { search: filtered }
      }
    })

    searchResults.value = {
      status: Object.keys(filteredData).length > 0,
      data: filteredData
    }

    const response = await api.get(
      route('admin.api.search', { search: searchQuery.value })
    )
    searchResults.value = response.data
  } catch (error) {
    console.error('Search error:', error)
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

const selectSearchResult = (item) => {
  if (item.route) {
    window.location.href = item.route
  }
  closeSearch()
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
        selectSearchResult(item)
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

  if (e.key === 'Escape' && isSearchOpen.value) {
    closeSearch()
  }
}

// Lifecycle
onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
//   debouncedSearch.cancel()
})
</script>
