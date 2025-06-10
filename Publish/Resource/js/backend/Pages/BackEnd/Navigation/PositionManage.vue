<template>
  <Layout>
    <!-- Modern Page Header -->
    <div class="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
      <div class="px-4 sm:px-6 lg:px-8 py-6">
        <div class="flex items-center justify-between">
          <!-- Header Content -->
          <div class="flex items-center space-x-4">
            <div class="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
              </svg>
            </div>
            <div>
              <h1 class="text-2xl font-bold text-slate-900 dark:text-slate-100">
                Navigation Manager
              </h1>
              <p class="text-sm text-slate-600 dark:text-slate-400 mt-1">
                Drag and drop to reorder menu items and organize navigation structure
              </p>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex items-center space-x-3">
            <button
              @click="resetOrder"
              class="inline-flex items-center px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg shadow-sm bg-white dark:bg-slate-800 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-200"
            >
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
              </svg>
              Reset Order
            </button>

            <button
              @click="saveChanges"
              :disabled="isSaving"
              class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Instructions Panel -->
    <div class="bg-blue-50 dark:bg-blue-900/20 border-b border-blue-200 dark:border-blue-800">
      <div class="px-4 sm:px-6 lg:px-8 py-4">
        <div class="flex items-start space-x-3">
          <div class="flex-shrink-0">
            <svg class="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <div>
            <h3 class="text-sm font-medium text-blue-900 dark:text-blue-100">How to Use</h3>
            <div class="mt-2 text-sm text-blue-800 dark:text-blue-200">
              <ul class="list-disc list-inside space-y-1">
                <li>Drag menu items to reorder them within the same level</li>
                <li>Drop items into other containers to change parent relationships</li>
                <li>Changes are automatically saved when you drop an item</li>
                <li>Use the visual indicators to understand the hierarchy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex-1 bg-slate-50 dark:bg-slate-800/50">
      <div class="px-4 sm:px-6 lg:px-8 py-8">
        <div class="max-w-6xl mx-auto">

          <!-- Navigation Tree -->
          <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div class="p-6">
              <div class="flex items-center justify-between mb-6">
                <h2 class="text-lg font-semibold text-slate-900 dark:text-slate-100">
                  Menu Structure
                </h2>
                <div class="flex items-center space-x-4 text-sm text-slate-600 dark:text-slate-400">
                  <div class="flex items-center space-x-2">
                    <div class="w-3 h-3 bg-green-200 dark:bg-green-800 rounded-full border-2 border-green-400 dark:border-green-600"></div>
                    <span>Root Level</span>
                  </div>
                  <div class="flex items-center space-x-2">
                    <div class="w-3 h-3 bg-blue-200 dark:bg-blue-800 rounded-full border-2 border-blue-400 dark:border-blue-600"></div>
                    <span>Sub Menu</span>
                  </div>
                  <div class="flex items-center space-x-2">
                    <div class="w-3 h-3 bg-purple-200 dark:bg-purple-800 rounded-full border-2 border-purple-400 dark:border-purple-600"></div>
                    <span>Dragging</span>
                  </div>
                </div>
              </div>

              <!-- Sortable Menu Container -->
              <div
                id="menu-container"
                data-itemid=""
                class="space-y-4 min-h-[200px] p-4 border-2 border-dashed border-slate-200 dark:border-slate-600 rounded-xl transition-all duration-200"
                :class="{ 'border-green-400 bg-green-50 dark:bg-green-900/20': isDragOver }"
              >
                <ModernTreeItem
                  v-for="(item, index) in navigationItems"
                  :key="item.id"
                  :item="item"
                  :level="0"
                />

                <!-- Empty State -->
                <div v-if="navigationItems.length === 0" class="text-center py-12">
                  <div class="w-16 h-16 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg class="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
                    </svg>
                  </div>
                  <h3 class="text-lg font-medium text-slate-900 dark:text-slate-100 mb-2">No menu items yet</h3>
                  <p class="text-slate-600 dark:text-slate-400">Create your first menu item to get started</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Statistics Panel -->
          <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
              <div class="flex items-center">
                <div class="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl">
                  <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
                  </svg>
                </div>
                <div class="ml-4">
                  <p class="text-sm font-medium text-slate-600 dark:text-slate-400">Total Items</p>
                  <p class="text-2xl font-bold text-slate-900 dark:text-slate-100">{{ totalItems }}</p>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
              <div class="flex items-center">
                <div class="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                  <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                  </svg>
                </div>
                <div class="ml-4">
                  <p class="text-sm font-medium text-slate-600 dark:text-slate-400">Root Items</p>
                  <p class="text-2xl font-bold text-slate-900 dark:text-slate-100">{{ rootItems }}</p>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
              <div class="flex items-center">
                <div class="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl">
                  <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/>
                  </svg>
                </div>
                <div class="ml-4">
                  <p class="text-sm font-medium text-slate-600 dark:text-slate-400">Max Depth</p>
                  <p class="text-2xl font-bold text-slate-900 dark:text-slate-100">{{ maxDepth }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Auto-save indicator -->
    <div v-if="isSaving" class="fixed bottom-4 right-4 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 p-4">
      <div class="flex items-center space-x-3">
        <svg class="w-5 h-5 animate-spin text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
        </svg>
        <span class="text-sm font-medium text-slate-900 dark:text-slate-100">Saving changes...</span>
      </div>
    </div>
  </Layout>
</template>

<script setup>
import { ref, computed, onMounted, nextTick } from 'vue'
import { router } from '@inertiajs/vue3'
import Layout from '../../../Layout/App.vue'
import ModernTreeItem from './components/ModernTreeItem.vue'
import axios from 'axios'
import Sortable from 'sortablejs/modular/sortable.complete.esm.js'

// Props
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  navigation: {
    type: Object,
    default: () => ({})
  }
})

// State
const navigationItems = ref([])
const isDragOver = ref(false)
const isSaving = ref(false)
const hasChanges = ref(false)

// Computed
const totalItems = computed(() => {
  const countItems = (items) => {
    let count = items.length
    items.forEach(item => {
      if (item.children && item.children.length > 0) {
        count += countItems(item.children)
      }
    })
    return count
  }
  return countItems(navigationItems.value)
})

const rootItems = computed(() => navigationItems.value.length)

const maxDepth = computed(() => {
  const getDepth = (items, depth = 1) => {
    let maxDepth = depth
    items.forEach(item => {
      if (item.children && item.children.length > 0) {
        const childDepth = getDepth(item.children, depth + 1)
        maxDepth = Math.max(maxDepth, childDepth)
      }
    })
    return maxDepth
  }
  return navigationItems.value.length > 0 ? getDepth(navigationItems.value) : 0
})

// Methods
const initializeSortable = async () => {
  await nextTick()

  const containers = document.querySelectorAll('[data-sortable]')

  containers.forEach(container => {
    Sortable.create(container, {
      group: 'navigation',
      animation: 200,
      fallbackOnBody: true,
      swapThreshold: 0.65,
      ghostClass: 'sortable-ghost',
      chosenClass: 'sortable-chosen',
      dragClass: 'sortable-drag',

      onStart: () => {
        isDragOver.value = true
      },

      onEnd: (evt) => {
        isDragOver.value = false
        handleDrop(evt)
      }
    })
  })
}

const handleDrop = async (evt) => {
  const itemEl = evt.item
  const parentContainer = evt.to

  const parentId = parentContainer.dataset.itemid || null
  const itemId = itemEl.dataset.itemid
  const sortOrder = evt.newIndex + 1

  if (!itemId) return

  isSaving.value = true

  try {
    const response = await axios.put(route('admin.api.navigation.update', itemId), {
      parent_id: parentId,
      item_id: itemId,
      sort_order: sortOrder
    })

    console.log('Navigation updated successfully:', response.data)

    // Show success feedback
    showNotification('Navigation updated successfully', 'success')

    setTimeout(() => {
      isSaving.value = false
    }, 1000)

  } catch (error) {
    console.error('Failed to update navigation:', error)
    isSaving.value = false

    // Show error feedback
    showNotification('Failed to update navigation. Please check the console for details.', 'error')

    // Optionally reload the page to revert changes
    if (confirm('There was an error saving changes. Would you like to reload the page to restore the original order?')) {
      window.location.reload()
    }
  }
}

const updateLocalNavigation = (itemId, parentId, sortOrder) => {
  // This would update the local navigationItems state
  // Implementation depends on your data structure
  console.log('Updated item:', { itemId, parentId, sortOrder })
}

const handleItemUpdate = (data) => {
  // Handle updates from child components
  console.log('Item updated:', data)
  hasChanges.value = true
}

const resetOrder = async () => {
  if (confirm('Are you sure you want to reset the navigation order? This will restore the original order.')) {
    try {
      await axios.post(route('admin.api.navigation.reset'))
      router.reload()
    } catch (error) {
      console.error('Failed to reset navigation:', error)
    }
  }
}

const saveChanges = async () => {
  try {
    await axios.post(route('admin.api.navigation.save'))
    hasChanges.value = false
  } catch (error) {
    console.error('Failed to save changes:', error)
  }
}

// Lifecycle
onMounted(async () => {
  navigationItems.value = props.navigation.data || []

  // Initialize sortable after component is mounted
  setTimeout(() => {
    initializeSortable()
  }, 500)
})
</script>
