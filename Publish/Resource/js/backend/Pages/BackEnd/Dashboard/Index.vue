<template>
  <Layout :homePage="true">
    <!-- Modern Dashboard Container -->
    <div class="min-h-screen bg-gradient-to-br from-base-200 via-base-100 to-base-300">
      <!-- Hero Section -->
      <div class="hero min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10">
        <!-- Background Elements -->
        <div class="absolute inset-0 overflow-hidden">
          <div class="absolute top-0 -left-4 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div class="absolute top-0 -right-4 w-72 h-72 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <div class="absolute -bottom-8 left-20 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <!-- Content -->
        <div class="hero-content text-center relative z-10">
          <div class="max-w-6xl">
            <!-- Welcome Header -->
            <div class="mb-12">
              <div class="avatar mb-6">
                <div class="w-20 rounded-2xl bg-gradient-to-r from-primary to-secondary shadow-2xl">
                  <div class="w-full h-full flex items-center justify-center">
                    <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.84L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.84l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Welcome to
                <span class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Admin Hub
                </span>
              </h1>
              <p class="text-xl text-base-content/70 max-w-2xl mx-auto">
                Your central command center for managing applications, users, and system operations with modern efficiency.
              </p>
            </div>

            <!-- Search Bar -->
            <div class="max-w-2xl mx-auto mb-8">
              <div class="form-control">
                <div class="relative">
                  <input
                    v-model="searchQuery"
                    type="text"
                    placeholder="Search applications, features, or tools..."
                    class="input input-bordered input-lg w-full pl-12 pr-20 bg-base-100/80 backdrop-blur-sm shadow-lg focus:shadow-xl transition-all duration-300"
                  />
                  <div class="absolute inset-y-0 left-0 flex items-center pl-4">
                    <svg class="w-5 h-5 text-base-content/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                    </svg>
                  </div>
                  <div class="absolute inset-y-0 right-0 flex items-center pr-4">
                    <div class="flex items-center space-x-1">
                      <kbd class="kbd kbd-sm">⌘</kbd>
                      <kbd class="kbd kbd-sm">K</kbd>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Category Tabs -->
            <div class="flex justify-center mb-12">
              <div class="tabs tabs-boxed bg-base-100/60 backdrop-blur-sm shadow-lg border border-base-300/50">
                <a
                  v-for="category in categories"
                  :key="category"
                  @click="setActiveCategory(category)"
                  class="tab transition-all duration-200"
                  :class="activeCategory === category ? 'tab-active' : ''"
                >
                  {{ category }}
                  <div
                    v-if="category !== 'All'"
                    class="badge badge-sm ml-2"
                    :class="activeCategory === category ? 'badge-primary' : 'badge-neutral'"
                  >
                    {{ getCategoryCount(category) }}
                  </div>
                </a>
              </div>
            </div>

            <!-- Stats Cards -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              <div class="stats shadow-lg bg-base-100/80 backdrop-blur-sm border border-base-300/50">
                <div class="stat">
                  <div class="stat-figure text-primary">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                    </svg>
                  </div>
                  <div class="stat-title">Total Apps</div>
                  <div class="stat-value text-primary">{{ menu.length }}</div>
                </div>
              </div>

              <div class="stats shadow-lg bg-base-100/80 backdrop-blur-sm border border-base-300/50">
                <div class="stat">
                  <div class="stat-figure text-secondary">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div class="stat-title">Categories</div>
                  <div class="stat-value text-secondary">{{ categories.length - 1 }}</div>
                </div>
              </div>

              <div class="stats shadow-lg bg-base-100/80 backdrop-blur-sm border border-base-300/50">
                <div class="stat">
                  <div class="stat-figure text-accent">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                  </div>
                  <div class="stat-title">Quick Access</div>
                  <div class="stat-value text-accent">{{ filteredMenu.length }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Apps Grid Section -->
      <div class="container mx-auto px-4 pb-12">
        <!-- Grid Container -->
        <div class="max-w-7xl mx-auto">
          <div v-if="filteredMenu.length === 0" class="hero min-h-96">
            <div class="hero-content text-center">
              <div class="max-w-md">
                <div class="avatar mb-6">
                  <div class="w-24 rounded-full bg-base-200">
                    <div class="w-full h-full flex items-center justify-center">
                      <svg class="w-12 h-12 text-base-content/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.441-1.036-5.877-2.709M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <h3 class="text-xl font-bold mb-2">No applications found</h3>
                <p class="text-base-content/70">Try adjusting your search or category filter</p>
              </div>
            </div>
          </div>

          <div v-else class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
            <ModernAppCard
              v-for="item in filteredMenu"
              :key="item.id"
              :menuItem="item"
              @click="navigateToApp(item)"
            />
          </div>

          <!-- Logout Section -->
          <div class="mt-12 flex justify-center">
            <ModernLogoutCard />
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { router, usePage } from '@inertiajs/vue3'
import Layout from '../../../Layout/App.vue'
import ModernAppCard from './ModernAppCard.vue'
import ModernLogoutCard from './ModernLogoutCard.vue'

// Types
interface MenuItem {
  id: number
  menu_label: string
  icon: string
  route: string
  category?: string
  description?: string
}

// Props
defineProps<{
  title?: string
  system_version?: Record<string, any>
}>()

// State
const searchQuery = ref('')
const activeCategory = ref('All')
const menu = computed(() => usePage().props.navigation.data as MenuItem[])

// Categories
const categories = computed(() => {
  const cats = menu.value.map(item => item.category || 'Other')
  return ['All', ...new Set(cats)]
})

// Filtered Menu Items
const filteredMenu = computed(() => {
  return menu.value.filter(item => {
    const matchesSearch = item.menu_label
      .toLowerCase()
      .includes(searchQuery.value.toLowerCase())
    const matchesCategory = activeCategory.value === 'All' ||
      item.category === activeCategory.value ||
      (activeCategory.value === 'Other' && !item.category)
    return matchesSearch && matchesCategory
  })
})

// Methods
const setActiveCategory = (category: string) => {
  activeCategory.value = category
}

const getCategoryCount = (category: string) => {
  if (category === 'All') return menu.value.length
  return menu.value.filter(item =>
    item.category === category ||
    (category === 'Other' && !item.category)
  ).length
}

const navigateToApp = (item: MenuItem) => {
  try {
    if (item.route.startsWith('http') || item.route.startsWith('/')) {
      window.location.href = item.route
    } else {
      window.location.href = route(item.route)
    }
  } catch (error) {
    console.warn(`Route '${item.route}' not found`, error)
  }
}

// Keyboard shortcuts
const handleKeydown = (e: KeyboardEvent) => {
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault()
    const searchInput = document.querySelector('input[type="text"]') as HTMLInputElement
    searchInput?.focus()
  }
}

// Lifecycle
onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>
