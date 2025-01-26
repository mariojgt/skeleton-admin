<template>
    <Layout :homePage="true">
      <div class="h-screen skeleton-bg2">
        <div class="container mx-auto px-4 pt-6">
          <div class="form-control mb-6">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search apps..."
              class="input input-bordered w-full"
            />
          </div>

          <div class="tabs tabs-boxed bg-base-200/50 mb-6 overflow-x-auto">
            <button
              v-for="category in categories"
              :key="category"
              @click="setActiveCategory(category)"
              class="tab"
              :class="{ 'tab-active': activeCategory === category }"
            >
              {{ category }}
            </button>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <MenuApp
              v-for="item in filteredMenu"
              :key="item.id"
              :menuItem="item"
              class="card hover:scale-105 transition-transform"
            />
            <LogoutApp class="col-span-full" />
          </div>
        </div>
      </div>
    </Layout>
  </template>

  <script setup lang="ts">
  import { ref, computed } from 'vue'
  import { router, usePage } from '@inertiajs/vue3'
  import Layout from '../../../Layout/App.vue'
  import MenuApp from '../../../Components/Menu/AppMenuSingle.vue'
  import LogoutApp from '../../../Components/HomepageApp/Logout.vue'

  // Types
  interface MenuItem {
    id: number
    menu_label: string
    icon: string
    route: string
    category?: string
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
        item.category === activeCategory.value
      return matchesSearch && matchesCategory
    })
  })

  // Methods
  const setActiveCategory = (category: string) => {
    activeCategory.value = category
  }
  </script>
