<template>
  <div class="min-h-screen bg-gradient-to-br from-base-200 to-base-300">
    <!-- Command Palette Modal -->
    <div v-if="isCommandPaletteOpen" class="modal modal-open">
      <div class="modal-box max-w-lg">
        <div class="flex items-center gap-3 pb-4 border-b border-base-300">
          <svg class="w-5 h-5 text-base-content/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
          <input
            ref="commandInputRef"
            v-model="commandQuery"
            type="text"
            placeholder="Type a command or search..."
            class="input input-ghost flex-1 focus:outline-none"
            @keydown="handleCommandKeyDown"
          />
          <kbd class="kbd kbd-sm">ESC</kbd>
        </div>

        <div class="max-h-96 overflow-y-auto mt-4">
          <div v-if="filteredCommands.length === 0" class="text-center py-8 text-base-content/60">
            No commands found
          </div>
          <div v-else class="space-y-1">
            <button
              v-for="(command, index) in filteredCommands"
              :key="command.id"
              @click="executeCommand(command)"
              :class="[
                'w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors',
                index === selectedIndex ? 'bg-primary text-primary-content' : 'hover:bg-base-300'
              ]"
            >
              <component :is="command.icon" class="w-4 h-4" />
              <div class="flex-1">
                <div class="font-medium">{{ command.label }}</div>
                <div class="text-sm opacity-60">{{ command.description }}</div>
              </div>
              <div class="flex items-center gap-2">
                <kbd v-if="command.shortcut" class="kbd kbd-xs">{{ command.shortcut }}</kbd>
                <kbd v-if="getCustomShortcut(command.id)" class="kbd kbd-xs bg-success text-success-content">
                  {{ getCustomShortcut(command.id) }}
                </kbd>
              </div>
            </button>
          </div>
        </div>

        <div class="modal-action">
          <button @click="closeCommandPalette" class="btn btn-ghost btn-sm">Cancel</button>
          <button @click="openShortcutModal" class="btn btn-primary btn-sm">Set Shortcuts</button>
        </div>
      </div>
      <div class="modal-backdrop" @click="closeCommandPalette"></div>
    </div>

    <!-- Shortcut Settings Modal -->
    <div v-if="isShortcutModalOpen" class="modal modal-open">
      <div class="modal-box">
        <h3 class="font-bold text-lg mb-4">Keyboard Shortcuts</h3>

        <div class="space-y-3 max-h-96 overflow-y-auto">
          <div v-for="command in allCommands" :key="command.id" class="flex items-center gap-3 p-3 bg-base-100 rounded-lg">
            <component :is="command.icon" class="w-4 h-4" />
            <div class="flex-1">
              <div class="font-medium">{{ command.label }}</div>
              <div class="text-sm opacity-60">{{ command.description }}</div>
            </div>
            <div class="flex items-center gap-2">
              <kbd v-if="command.shortcut" class="kbd kbd-xs">{{ command.shortcut }}</kbd>
              <input
                :value="customShortcuts[command.id] || ''"
                @input="updateCustomShortcut(command.id, $event.target.value)"
                @keydown="captureShortcut($event, command.id)"
                type="text"
                placeholder="Custom shortcut"
                class="input input-bordered input-xs w-24 text-center"
              />
            </div>
          </div>
        </div>

        <div class="modal-action">
          <button @click="closeShortcutModal" class="btn btn-ghost">Close</button>
          <button @click="resetShortcuts" class="btn btn-warning">Reset All</button>
        </div>
      </div>
      <div class="modal-backdrop" @click="closeShortcutModal"></div>
    </div>

    <!-- Mobile Menu Overlay -->
    <div
      v-if="isMobileMenuOpen"
      class="fixed inset-0 z-50 lg:hidden"
      @click="closeMobileMenu"
    >
      <div class="fixed inset-0 bg-black/20 backdrop-blur-sm"></div>
      <nav class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm bg-base-100 shadow-xl">
        <div class="flex items-center justify-between p-6 border-b border-base-300">
          <div class="flex items-center space-x-3">
            <div class="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
              <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.84L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.84l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
              </svg>
            </div>
            <span class="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Skeleton Admin
            </span>
          </div>
          <button @click="closeMobileMenu" class="btn btn-ghost btn-circle btn-sm">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
        <MobileNavigation />
      </nav>
    </div>

    <!-- Desktop Sidebar -->
    <aside class="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-72 lg:flex-col">
      <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-base-100 px-6 pb-4 shadow-xl border-r border-base-300">
        <div class="flex h-20 shrink-0 items-center">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.84L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.84l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
              </svg>
            </div>
            <div>
              <div class="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Skeleton
              </div>
              <div class="text-sm text-base-content/60 font-medium">Admin Panel</div>
            </div>
          </div>
        </div>
        <DesktopNavigation />
      </div>
    </aside>

    <!-- Main Content -->
    <div class="lg:pl-72">
      <!-- Top Header -->
      <div class="navbar bg-base-100/80 backdrop-blur-md border-b border-base-300 shadow-sm sticky top-0 z-40">
        <!-- Mobile menu button -->
        <div class="navbar-start">
          <button
            @click="openMobileMenu"
            class="btn btn-ghost btn-square lg:hidden"
          >
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>

          <!-- Breadcrumbs -->
          <div class="flex flex-1 gap-x-4 ml-4" v-if="!homePage">
            <ModernBreadcrumb />
          </div>
        </div>

        <!-- Right side actions -->
        <div class="navbar-end">
          <div class="flex items-center gap-2">
            <!-- Command Palette Trigger -->
            <button
              @click="openCommandPalette"
              class="btn btn-ghost btn-sm tooltip tooltip-bottom"
              data-tip="Search (Press /)"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </button>

            <ModernSearch />
            <ThemeToggle />
            <ModernNotifications />
            <UserDropdown />
          </div>
        </div>
      </div>

      <!-- Page Content -->
      <main class="p-8 bg-base-100">
        <div class="mx-auto max-w-7xl">
          <FlashMessage />
          <slot />
        </div>
      </main>

      <!-- Footer -->
      <ModernFooter />
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted, nextTick, computed } from 'vue'
import { usePage } from '@inertiajs/vue3'
import FlashMessage from '@backend_components/Backend/Global/FlashMessage.vue'
import ModernBreadcrumb from './components/ModernBreadcrumb.vue'
import ModernSearch from './components/ModernSearch.vue'
import ThemeToggle from './components/ThemeToggle.vue'
import ModernNotifications from './components/ModernNotifications.vue'
import UserDropdown from './components/UserDropdown.vue'
import ModernFooter from './components/ModernFooter.vue'
import DesktopNavigation from './components/DesktopNavigation.vue'
import MobileNavigation from './components/MobileNavigation.vue'

// Simple icon components (you can replace with your preferred icon library)
const HomeIcon = { template: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>' }
const UsersIcon = { template: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/></svg>' }
const AnalyticsIcon = { template: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>' }
const ReportsIcon = { template: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>' }
const ProductsIcon = { template: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>' }
const CalendarIcon = { template: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>' }
const MessagesIcon = { template: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>' }
const SecurityIcon = { template: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>' }
const DatabaseIcon = { template: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/></svg>' }
const SettingsIcon = { template: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>' }
const ZapIcon = { template: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>' }

// Props
const props = defineProps({
  homePage: {
    type: Boolean,
    default: false
  }
})

// State
const isMobileMenuOpen = ref(false)
const isCommandPaletteOpen = ref(false)
const isShortcutModalOpen = ref(false)
const commandQuery = ref('')
const selectedIndex = ref(0)
const customShortcuts = ref({})
const commandInputRef = ref(null)

// Navigation items
const navigationItems = [
  { id: 'dashboard', label: 'Dashboard', icon: HomeIcon, href: '/dashboard', shortcut: 'g d', description: 'Main dashboard' },
  { id: 'users', label: 'Users', icon: UsersIcon, href: '/users', shortcut: 'g u', description: 'User management' },
  { id: 'analytics', label: 'Analytics', icon: AnalyticsIcon, href: '/analytics', shortcut: 'g a', description: 'View analytics' },
  { id: 'reports', label: 'Reports', icon: ReportsIcon, href: '/reports', shortcut: 'g r', description: 'Generate reports' },
  { id: 'products', label: 'Products', icon: ProductsIcon, href: '/products', shortcut: 'g p', description: 'Product catalog' },
  { id: 'calendar', label: 'Calendar', icon: CalendarIcon, href: '/calendar', shortcut: 'g c', description: 'Calendar view' },
  { id: 'messages', label: 'Messages', icon: MessagesIcon, href: '/messages', shortcut: 'g m', description: 'Messages center' },
  { id: 'security', label: 'Security', icon: SecurityIcon, href: '/security', shortcut: 'g s', description: 'Security settings' },
  { id: 'database', label: 'Database', icon: DatabaseIcon, href: '/database', shortcut: 'g b', description: 'Database management' },
  { id: 'settings', label: 'Settings', icon: SettingsIcon, href: '/settings', shortcut: 'g e', description: 'System settings' },
]

// Quick actions
const quickActions = [
  { id: 'new-user', label: 'Create New User', icon: UsersIcon, action: () => console.log('Creating user...'), shortcut: 'n u', description: 'Add a new user' },
  { id: 'new-report', label: 'Generate Report', icon: ReportsIcon, action: () => console.log('Generating report...'), shortcut: 'n r', description: 'Create a new report' },
  { id: 'backup', label: 'Backup Database', icon: DatabaseIcon, action: () => console.log('Backing up...'), shortcut: 'b d', description: 'Backup the database' },
  { id: 'toggle-theme', label: 'Toggle Theme', icon: ZapIcon, action: () => console.log('Toggling theme...'), shortcut: 't t', description: 'Switch between light and dark theme' },
]

const allCommands = [...navigationItems, ...quickActions]

// Computed
const filteredCommands = computed(() => {
  if (!commandQuery.value) return allCommands

  return allCommands.filter(command =>
    command.label.toLowerCase().includes(commandQuery.value.toLowerCase()) ||
    command.description.toLowerCase().includes(commandQuery.value.toLowerCase()) ||
    command.shortcut.includes(commandQuery.value.toLowerCase())
  )
})

// Methods
const openMobileMenu = () => {
  isMobileMenuOpen.value = true
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const openCommandPalette = () => {
  isCommandPaletteOpen.value = true
  nextTick(() => {
    commandInputRef.value?.focus()
  })
}

const closeCommandPalette = () => {
  isCommandPaletteOpen.value = false
  commandQuery.value = ''
  selectedIndex.value = 0
}

const openShortcutModal = () => {
  isShortcutModalOpen.value = true
}

const closeShortcutModal = () => {
  isShortcutModalOpen.value = false
}

const executeCommand = (command) => {
  if (command.href) {
    window.location.href = command.href
  } else if (command.action) {
    command.action()
  }
  closeCommandPalette()
}

const handleCommandKeyDown = (event) => {
  if (event.key === 'ArrowDown') {
    event.preventDefault()
    selectedIndex.value = (selectedIndex.value + 1) % filteredCommands.value.length
  } else if (event.key === 'ArrowUp') {
    event.preventDefault()
    selectedIndex.value = (selectedIndex.value - 1 + filteredCommands.value.length) % filteredCommands.value.length
  } else if (event.key === 'Enter') {
    event.preventDefault()
    if (filteredCommands.value[selectedIndex.value]) {
      executeCommand(filteredCommands.value[selectedIndex.value])
    }
  } else if (event.key === 'Escape') {
    closeCommandPalette()
  }
}

const handleGlobalKeyDown = (event) => {
  // Open command palette with /
  if (event.key === '/' && !isCommandPaletteOpen.value && !event.target.matches('input, textarea')) {
    event.preventDefault()
    openCommandPalette()
  }

  // Handle custom shortcuts
  const shortcutKey = `${event.ctrlKey ? 'ctrl+' : ''}${event.shiftKey ? 'shift+' : ''}${event.altKey ? 'alt+' : ''}${event.key}`

  if (customShortcuts.value[shortcutKey] && !event.target.matches('input, textarea')) {
    event.preventDefault()
    const command = allCommands.find(cmd => cmd.id === customShortcuts.value[shortcutKey])
    if (command) executeCommand(command)
  }
}

const updateCustomShortcut = (commandId, shortcut) => {
  if (shortcut) {
    customShortcuts.value[shortcut] = commandId
  }
  saveShortcuts()
}

const captureShortcut = (event, commandId) => {
  event.preventDefault()
  const shortcut = `${event.ctrlKey ? 'ctrl+' : ''}${event.shiftKey ? 'shift+' : ''}${event.altKey ? 'alt+' : ''}${event.key}`

  if (event.key !== 'Tab' && event.key !== 'Enter' && event.key !== 'Escape') {
    updateCustomShortcut(commandId, shortcut)
    event.target.value = shortcut
  }
}

const getCustomShortcut = (commandId) => {
  return Object.keys(customShortcuts.value).find(key => customShortcuts.value[key] === commandId)
}

const saveShortcuts = () => {
  localStorage.setItem('adminShortcuts', JSON.stringify(customShortcuts.value))
}

const loadShortcuts = () => {
  const saved = localStorage.getItem('adminShortcuts')
  if (saved) {
    customShortcuts.value = JSON.parse(saved)
  }
}

const resetShortcuts = () => {
  customShortcuts.value = {}
  localStorage.removeItem('adminShortcuts')
}

// Update page title
const updatePageTitle = (newTitle) => {
  document.title = newTitle || 'Skeleton Admin'
}

// Lifecycle
onMounted(() => {
  loadShortcuts()
  document.addEventListener('keydown', handleGlobalKeyDown)

  setTimeout(() => {
    updatePageTitle(usePage().props.title)
  }, 500)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleGlobalKeyDown)
})

// Watch for title changes
watch(() => usePage().props.title, updatePageTitle)

// Watch command query to reset selected index
watch(commandQuery, () => {
  selectedIndex.value = 0
})
</script>
