<!-- DesktopNavigation.vue -->
<template>
  <nav class="flex flex-1 flex-col space-y-2">
    <div v-for="(item, index) in menuItems" :key="index">
      <!-- Single Menu Item -->
      <div v-if="!item.children || item.children.length === 0">
        <Link
          :href="buildLinkClass(item.route)"
          class="btn btn-ghost justify-start h-auto py-3 px-3 text-sm font-medium normal-case"
          :class="isActive(item.route)
            ? 'btn-primary text-primary-content shadow-lg'
            : 'text-base-content hover:bg-base-200'"
        >
          <div
            class="w-6 h-6 mr-3 flex items-center justify-center"
            v-html="item.icon"
          ></div>
          <span class="flex-1 text-left">{{ item.menu_label }}</span>
          <div
            v-if="item.badge"
            class="badge badge-sm ml-2"
            :class="isActive(item.route)
              ? 'badge-neutral badge-outline'
              : 'badge-primary'"
          >
            {{ item.badge }}
          </div>
        </Link>
      </div>

      <!-- Collapsible Menu Item -->
      <div v-else>
        <button
          class="btn btn-ghost w-full justify-start h-auto py-3 px-3 text-sm font-medium normal-case"
          :class="isSubmenuOpen(index)
            ? 'bg-base-200 text-base-content'
            : 'text-base-content hover:bg-base-200'"
          @click="toggleSubmenu(index)"
        >
          <div
            class="w-6 h-6 mr-3 flex items-center justify-center"
            v-html="item.icon"
          ></div>
          <span class="flex-1 text-left">{{ item.menu_label }}</span>
          <svg
            class="w-4 h-4 transition-transform duration-200"
            :class="{ 'rotate-90': isSubmenuOpen(index) }"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>

        <!-- Submenu -->
        <div
          v-if="isSubmenuOpen(index)"
          class="collapse collapse-open"
        >
          <div class="collapse-content pt-1 pb-0 pl-6 pr-0">
            <div class="border-l-2 border-base-300 pl-4 space-y-1">
              <Link
                v-for="(child, childIndex) in item.children"
                :key="childIndex"
                :href="buildLinkClass(child.route)"
                class="btn btn-ghost btn-sm justify-start h-auto py-2 px-3 text-sm font-medium normal-case w-full"
                :class="isActive(child.route)
                  ? 'btn-primary text-primary-content shadow-lg'
                  : 'text-base-content/80 hover:bg-base-200 hover:text-base-content'"
              >
                <div
                  class="w-5 h-5 mr-3 flex items-center justify-center"
                  v-html="child.icon"
                ></div>
                <span class="flex-1 text-left">{{ child.menu_label }}</span>
                <div
                  v-if="child.badge"
                  class="badge badge-xs ml-2"
                  :class="isActive(child.route)
                    ? 'badge-neutral badge-outline'
                    : 'badge-primary'"
                >
                  {{ child.badge }}
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Quick Actions Section -->
    <div class="divider divider-start">
      <span class="text-xs font-semibold text-base-content/60 uppercase tracking-wider">
        Quick Actions
      </span>
    </div>

    <div class="space-y-2">
      <button class="btn btn-ghost justify-start h-auto py-2 px-3 text-sm font-medium normal-case w-full text-base-content/80 hover:bg-base-200 hover:text-base-content">
        <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
        </svg>
        <span class="flex-1 text-left">Create New</span>
      </button>

      <button class="btn btn-ghost justify-start h-auto py-2 px-3 text-sm font-medium normal-case w-full text-base-content/80 hover:bg-base-200 hover:text-base-content">
        <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
        </svg>
        <span class="flex-1 text-left">Analytics</span>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { Link, usePage } from '@inertiajs/vue3'

// State
const openSubmenus = ref(new Set())

// Get menu items from page props
const menuItems = usePage().props.navigation?.data || []

// Methods
const toggleSubmenu = (index) => {
  if (openSubmenus.value.has(index)) {
    openSubmenus.value.delete(index)
  } else {
    openSubmenus.value.add(index)
  }
}

const isSubmenuOpen = (index) => {
  return openSubmenus.value.has(index)
}

const isActive = (route) => {
  return window.location.pathname === route
}

const buildLinkClass = (routeLink) => {
  return route(routeLink);
}
</script>
