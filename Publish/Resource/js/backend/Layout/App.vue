<template>
  <div class="min-h-screen bg-base-200">
    <!-- Command Palette Modal -->
    <div v-if="showCommandPalette" class="modal modal-open">
      <div class="modal-box max-w-2xl">
        <!-- Search Header -->
        <div class="flex items-center gap-3 pb-4 border-b">
          <svg class="w-5 h-5 text-base-content/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
          <input
            ref="searchInput"
            v-model="searchQuery"
            type="text"
            placeholder="Search for pages, actions..."
            class="input input-ghost flex-1 focus:outline-none"
            @keydown="handleKeyDown"
          />
          <kbd class="kbd kbd-sm">ESC</kbd>
        </div>

        <!-- Results -->
        <div ref="resultsContainer" class="max-h-96 overflow-y-auto mt-4">
          <div v-if="filteredCommands.length === 0" class="text-center py-8 text-base-content/60">
            <p>No results found</p>
            <p class="text-sm mt-1">Try searching for something else</p>
          </div>

          <div v-else class="space-y-1">
            <div
              v-for="(command, index) in filteredCommands"
              :key="command.id"
              :ref="el => setCommandRef(el, index)"
              :class="[
                'flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all duration-150',
                index === selectedIndex
                  ? 'bg-primary text-primary-content shadow-md'
                  : 'hover:bg-base-300'
              ]"
              @click="executeCommand(command)"
              @mouseenter="selectedIndex = index"
            >
              <div class="w-5 h-5 flex-shrink-0" v-html="command.icon"></div>
              <div class="flex-1 min-w-0">
                <div class="font-medium truncate">{{ command.title }}</div>
                <div class="text-sm opacity-70 truncate">{{ command.description }}</div>
              </div>
              <div v-if="command.shortcut" class="flex-shrink-0">
                <kbd class="kbd kbd-xs opacity-70">{{ command.shortcut }}</kbd>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div class="flex justify-between items-center pt-4 mt-4 border-t text-sm text-base-content/60">
          <div class="flex items-center gap-4">
            <span class="flex items-center gap-1">
              <kbd class="kbd kbd-xs">↑↓</kbd>
              Navigate
            </span>
            <span class="flex items-center gap-1">
              <kbd class="kbd kbd-xs">Enter</kbd>
              Select
            </span>
          </div>
          <button class="btn btn-ghost btn-sm" @click="closeCommandPalette">
            Close
          </button>
        </div>
      </div>
      <div class="modal-backdrop" @click="closeCommandPalette"></div>
    </div>

    <!-- Mobile Menu Overlay -->
    <div v-if="showMobileMenu" class="fixed inset-0 z-50 lg:hidden">
      <div class="fixed inset-0 bg-black/50" @click="closeMobileMenu"></div>
      <nav class="fixed top-0 left-0 bottom-0 w-80 bg-base-100 shadow-2xl">
        <!-- Mobile Header -->
        <div class="flex items-center justify-between p-6 border-b">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.84L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.84l-7-3z"/>
              </svg>
            </div>
            <span class="text-lg font-bold text-primary">Skeleton Admin</span>
          </div>
          <button class="btn btn-ghost btn-sm" @click="closeMobileMenu">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
        <!-- Mobile Navigation -->
        <MobileNavigation @close="closeMobileMenu" />
      </nav>
    </div>

    <!-- Desktop Sidebar -->
    <aside
      :class="[
        'hidden lg:fixed lg:inset-y-0 lg:w-72 lg:flex lg:flex-col transition-transform duration-300 z-30',
        sidebarHidden ? '-translate-x-full' : 'translate-x-0'
      ]"
    >
      <div class="flex flex-col h-full bg-base-100 border-r shadow-lg">
        <!-- Desktop Header -->
        <div class="flex items-center px-6 py-6 border-b">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.84L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.84l-7-3z"/>
              </svg>
            </div>
            <div>
              <div class="text-xl font-bold text-primary">Skeleton</div>
              <div class="text-xs text-base-content/60">Admin Panel</div>
            </div>
          </div>
        </div>
        <!-- Desktop Navigation -->
        <div class="flex-1 overflow-y-auto p-4">
          <DesktopNavigation />
        </div>
      </div>
    </aside>

    <!-- Main Content -->
    <div
      :class="[
        'min-h-screen transition-all duration-300',
        sidebarHidden ? 'lg:ml-0' : 'lg:ml-72'
      ]"
    >
      <!-- Top Header -->
      <header class="bg-base-100 border-b shadow-sm sticky top-0 z-20">
        <div class="flex items-center justify-between px-6 py-4">
          <!-- Left Side -->
          <div class="flex items-center gap-4">
            <!-- Sidebar Toggle (Desktop) -->
            <button
              class="btn btn-ghost btn-sm hidden lg:flex"
              @click="toggleSidebar"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>

            <!-- Mobile Menu Toggle -->
            <button
              class="btn btn-ghost btn-sm lg:hidden"
              @click="openMobileMenu"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>

            <!-- Page Title -->
            <h1 v-if="pageTitle" class="text-xl font-semibold hidden sm:block">{{ pageTitle }}</h1>
          </div>

          <!-- Right Side -->
          <div class="flex items-center gap-2">
            <!-- Regular Search -->
            <ModernSearch />

            <!-- Command Palette Trigger -->
            <button
              class="btn btn-ghost btn-sm"
              title="Quick search (Press /)"
              @click="openCommandPalette"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </button>

            <!-- Theme Toggle -->
            <ThemeToggle />

            <!-- Notifications -->
            <ModernNotifications />

            <!-- User Menu -->
            <UserDropdown />
          </div>
        </div>
      </header>

      <!-- Page Content -->
      <main class="p-6">
        <div class="max-w-7xl mx-auto">
          <!-- Flash Messages -->
          <FlashMessage v-if="$page.props.flash" />
          <!-- Page Content -->
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import { usePage } from '@inertiajs/vue3'
import FlashMessage from '@backend_components/Backend/Global/FlashMessage.vue'
import ModernSearch from './components/ModernSearch.vue'
import ModernNotifications from './components/ModernNotifications.vue'
import ThemeToggle from './components/ThemeToggle.vue'
import UserDropdown from './components/UserDropdown.vue'
import DesktopNavigation from './components/DesktopNavigation.vue'
import MobileNavigation from './components/MobileNavigation.vue'

// Props
const props = defineProps({
  title: String
})

// Refs
const searchInput = ref(null)
const resultsContainer = ref(null)
const commandRefs = ref([])

// State
const showCommandPalette = ref(false)
const showMobileMenu = ref(false)
const sidebarHidden = ref(false)
const searchQuery = ref('')
const selectedIndex = ref(0)

// Computed
const pageTitle = computed(() => props.title || usePage().props.title || 'Dashboard')

const menuItems = computed(() => usePage().props.navigation?.data || [])

const allCommands = computed(() => {
  const commands = []

  // Process navigation items
  const processNavItem = (item, parentLabel = '') => {
    if (!item.children || item.children.length === 0) {
      commands.push({
        id: `nav-${item.menu_label.toLowerCase().replace(/\s+/g, '-')}`,
        title: parentLabel ? `${parentLabel} → ${item.menu_label}` : item.menu_label,
        description: `Navigate to ${item.menu_label}`,
        icon: item.icon || '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>',
        action: () => navigateToRoute(item.route),
        shortcut: generateShortcut(item.menu_label)
      })
    } else {
      item.children.forEach(child => {
        processNavItem(child, item.menu_label)
      })
    }
  }

  menuItems.value.forEach(item => processNavItem(item))

  // Add quick actions
  commands.push(
    {
      id: 'toggle-theme',
      title: 'Toggle Theme',
      description: 'Switch between light and dark mode',
      icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>',
      action: toggleTheme,
      shortcut: 'Ctrl+T'
    },
    {
      id: 'toggle-sidebar',
      title: 'Toggle Sidebar',
      description: 'Show or hide the navigation sidebar',
      icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>',
      action: toggleSidebar,
      shortcut: 'Ctrl+B'
    }
  )

  return commands
})

const filteredCommands = computed(() => {
  if (!searchQuery.value.trim()) {
    return allCommands.value.slice(0, 10) // Show first 10 items when no search
  }

  const query = searchQuery.value.toLowerCase()
  return allCommands.value.filter(command =>
    command.title.toLowerCase().includes(query) ||
    command.description.toLowerCase().includes(query)
  )
})

// Methods
const setCommandRef = (el, index) => {
  if (el) {
    commandRefs.value[index] = el
  }
}

const generateShortcut = (label) => {
  const words = label.split(' ')
  return words.length === 1
    ? `G ${label.charAt(0).toUpperCase()}`
    : `G ${words.map(w => w.charAt(0).toUpperCase()).join('')}`
}

const navigateToRoute = (routeName) => {
  try {
    window.location.href = route(routeName)
  } catch (error) {
    console.warn(`Route ${routeName} not found`)
    window.location.href = routeName
  }
}

const openCommandPalette = () => {
  showCommandPalette.value = true
  searchQuery.value = ''
  selectedIndex.value = 0

  nextTick(() => {
    searchInput.value?.focus()
  })
}

const closeCommandPalette = () => {
  showCommandPalette.value = false
  searchQuery.value = ''
  selectedIndex.value = 0
}

const openMobileMenu = () => {
  showMobileMenu.value = true
}

const closeMobileMenu = () => {
  showMobileMenu.value = false
}

const toggleSidebar = () => {
  sidebarHidden.value = !sidebarHidden.value
  localStorage.setItem('skeleton-sidebar-hidden', sidebarHidden.value)
}

const toggleTheme = () => {
  const html = document.documentElement
  const currentTheme = html.getAttribute('data-theme')
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
  html.setAttribute('data-theme', newTheme)
  localStorage.setItem('skeleton-theme', newTheme)
}

const executeCommand = (command) => {
  closeCommandPalette()
  command.action()
}

const scrollToSelected = () => {
  nextTick(() => {
    const selectedElement = commandRefs.value[selectedIndex.value]
    if (selectedElement && resultsContainer.value) {
      const container = resultsContainer.value
      const element = selectedElement

      const containerTop = container.scrollTop
      const containerBottom = containerTop + container.clientHeight
      const elementTop = element.offsetTop
      const elementBottom = elementTop + element.clientHeight

      if (elementTop < containerTop) {
        container.scrollTop = elementTop
      } else if (elementBottom > containerBottom) {
        container.scrollTop = elementBottom - container.clientHeight
      }
    }
  })
}

const handleKeyDown = (event) => {
  switch (event.key) {
    case 'ArrowDown':
      event.preventDefault()
      if (filteredCommands.value.length > 0) {
        selectedIndex.value = (selectedIndex.value + 1) % filteredCommands.value.length
        scrollToSelected()
      }
      break

    case 'ArrowUp':
      event.preventDefault()
      if (filteredCommands.value.length > 0) {
        selectedIndex.value = selectedIndex.value === 0
          ? filteredCommands.value.length - 1
          : selectedIndex.value - 1
        scrollToSelected()
      }
      break

    case 'Enter':
      event.preventDefault()
      if (filteredCommands.value[selectedIndex.value]) {
        executeCommand(filteredCommands.value[selectedIndex.value])
      }
      break

    case 'Escape':
      closeCommandPalette()
      break
  }
}

const handleGlobalKeyDown = (event) => {
  // Don't trigger shortcuts when typing in inputs
  if (event.target.matches('input, textarea, [contenteditable]')) {
    return
  }

  // Open command palette with /
  if (event.key === '/') {
    event.preventDefault()
    openCommandPalette()
  }

  // Handle Ctrl shortcuts
  if (event.ctrlKey || event.metaKey) {
    switch (event.key) {
      case 'k':
        event.preventDefault()
        openCommandPalette()
        break
      case 't':
        event.preventDefault()
        toggleTheme()
        break
      case 'b':
        event.preventDefault()
        toggleSidebar()
        break
    }
  }
}

// Load saved preferences
const loadPreferences = () => {
  // Load sidebar state
  const savedSidebar = localStorage.getItem('skeleton-sidebar-hidden')
  if (savedSidebar !== null) {
    sidebarHidden.value = savedSidebar === 'true'
  }

  // Load theme
  const savedTheme = localStorage.getItem('skeleton-theme')
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme)
  }
}

// Reset selected index when search changes
const resetSelection = () => {
  selectedIndex.value = 0
}

// Lifecycle
onMounted(() => {
  loadPreferences()
  document.addEventListener('keydown', handleGlobalKeyDown)

  // Set page title
  if (pageTitle.value) {
    document.title = `${pageTitle.value} - Skeleton Admin`
  }
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleGlobalKeyDown)
})

// Watch search query changes
const searchQueryWatcher = computed(() => searchQuery.value)
const filteredCommandsWatcher = computed(() => filteredCommands.value.length)

// Reset selection when search changes
let searchTimeout
const debouncedReset = () => {
  clearTimeout(searchTimeout)
  searchTimeout = setTimeout(resetSelection, 100)
}

// Watch for changes
const unwatchSearch = computed(() => {
  searchQueryWatcher.value // Access to make it reactive
  debouncedReset()
})

const unwatchFiltered = computed(() => {
  filteredCommandsWatcher.value // Access to make it reactive
  if (selectedIndex.value >= filteredCommands.value.length) {
    selectedIndex.value = Math.max(0, filteredCommands.value.length - 1)
  }
})
</script>
