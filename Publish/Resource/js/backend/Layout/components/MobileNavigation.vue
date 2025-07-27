<!-- MobileNavigation.vue -->
<template>
  <div class="flex flex-col h-full">
    <!-- Navigation Menu -->
    <nav class="flex-1 p-4 space-y-2 overflow-y-auto">
      <div v-for="(item, index) in menuItems" :key="index">
        <!-- Single Menu Item -->
        <div v-if="!item.children || item.children.length === 0">
          <Link
            :href="buildLinkClass(item.route)"
            class="btn btn-ghost justify-start h-auto py-3 px-4 text-base font-medium normal-case w-full"
            :class="isActive(item.route)
              ? 'btn-primary text-primary-content shadow-lg'
              : 'text-base-content hover:bg-base-200'"
            @click="$emit('close')"
          >
            <div
              class="w-6 h-6 mr-4 flex items-center justify-center"
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
            class="btn btn-ghost w-full justify-start h-auto py-3 px-4 text-base font-medium normal-case"
            :class="isSubmenuOpen(index)
              ? 'bg-base-200 text-base-content'
              : 'text-base-content hover:bg-base-200'"
            @click="toggleSubmenu(index)"
          >
            <div
              class="w-6 h-6 mr-4 flex items-center justify-center"
              v-html="item.icon"
            ></div>
            <span class="flex-1 text-left">{{ item.menu_label }}</span>
            <svg
              class="w-5 h-5 transition-transform duration-200"
              :class="{ 'rotate-90': isSubmenuOpen(index) }"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>

          <!-- Mobile Submenu -->
          <div
            v-if="isSubmenuOpen(index)"
            class="collapse collapse-open"
          >
            <div class="collapse-content pt-2 pb-0 pl-8 pr-0">
              <div class="space-y-1">
                <Link
                  v-for="(child, childIndex) in item.children"
                  :key="childIndex"
                  :href="buildLinkClass(child.route)"
                  class="btn btn-ghost btn-sm justify-start h-auto py-2.5 px-4 text-sm font-medium normal-case w-full"
                  :class="isActive(child.route)
                    ? 'btn-primary text-primary-content shadow-lg'
                    : 'text-base-content/80 hover:bg-base-200'"
                  @click="$emit('close')"
                >
                  <div
                    class="w-5 h-5 mr-3 flex items-center justify-center"
                    v-html="child.icon"
                  ></div>
                  <span class="flex-1 text-left">{{ child.menu_label }}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- Mobile Footer Actions -->
    <div class="border-t border-base-300 p-4">
      <div class="space-y-2">
        <button class="btn btn-ghost justify-start h-auto py-3 px-4 text-sm font-medium normal-case w-full text-base-content/80 hover:bg-base-200 hover:text-base-content">
          <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
          </svg>
          <span class="flex-1 text-left">Settings</span>
        </button>

        <button class="btn btn-ghost justify-start h-auto py-3 px-4 text-sm font-medium normal-case w-full text-base-content/80 hover:bg-base-200 hover:text-base-content">
          <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <span class="flex-1 text-left">Help & Support</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Link, usePage } from '@inertiajs/vue3'

// Emits
defineEmits(['close'])

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
