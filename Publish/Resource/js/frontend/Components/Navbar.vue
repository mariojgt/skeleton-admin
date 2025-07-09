<template>
  <nav class="navbar bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 shadow-lg sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div class="flex justify-between items-center h-16">

        <!-- Logo/Brand -->
        <div class="flex items-center">
          <Link :href="route('home')" class="flex items-center space-x-2 text-white hover:text-green-400 transition-colors">
            <div class="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-sm">{{ $page.props.app.charAt(0) }}</span>
            </div>
            <span class="text-xl font-bold">{{ $page.props.app }}</span>
          </Link>
        </div>

        <!-- Center Navigation (Desktop) -->
        <div class="hidden lg:flex items-center space-x-1">
          <Link
            :href="route('home')"
            class="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-all duration-200"
          >
            Home
          </Link>
          <Link
            :href="route('dashboard')"
            class="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-all duration-200"
          >
            Dashboard
          </Link>
        </div>

        <!-- Right Side -->
        <div class="flex items-center space-x-4">

          <!-- Notifications -->
          <NotificationDropdown />

          <!-- User Menu (Authenticated) -->
          <div class="relative" v-if="usePage().props.user">
            <div class="dropdown dropdown-end">
              <div
                tabindex="0"
                role="button"
                class="btn btn-ghost btn-circle hover:bg-slate-800 transition-colors"
              >
                <div class="w-8 h-8 rounded-full overflow-hidden ring-2 ring-slate-700 hover:ring-green-500 transition-all">
                  <img
                    :src="usePage().props.user.data.avatar || '/assets/avatars/default.png'"
                    :alt="usePage().props.user.data.username"
                    class="w-full h-full object-cover"
                  />
                </div>
              </div>

              <ul
                tabindex="0"
                class="dropdown-content menu bg-slate-800 border border-slate-700 rounded-xl z-[1] w-56 p-2 shadow-xl mt-2"
              >
                <li class="menu-title px-4 py-2">
                  <div class="flex flex-col">
                    <span class="text-white font-semibold text-sm">
                      {{ usePage().props.user.data.first_name }} {{ usePage().props.user.data.last_name }}
                    </span>
                    <span class="text-slate-400 text-xs">
                      {{ usePage().props.user.data.username }}
                    </span>
                  </div>
                </li>

                <div class="divider my-1"></div>

                <li>
                  <Link
                    :href="route('user.edit')"
                    class="flex items-center gap-3 px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
                  >
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Profile Settings
                  </Link>
                </li>

                <li>
                  <Link
                    :href="route('logout.user')"
                    method="post"
                    class="flex items-center gap-3 px-4 py-2 text-red-400 hover:text-red-300 hover:bg-slate-700 rounded-lg transition-colors"
                  >
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    Sign Out
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <!-- Login/Register (Guest) -->
          <div v-else class="flex items-center space-x-3">
            <Link
              :href="route('login')"
              class="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              Sign In
            </Link>
            <Link
              :href="route('register.user.form')"
              class="px-4 py-2 text-sm font-medium bg-green-600 hover:bg-green-500 text-white rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Get Started
            </Link>
          </div>

          <!-- Mobile menu button -->
          <div class="lg:hidden">
            <button
              @click="mobileMenuOpen = !mobileMenuOpen"
              class="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-show="mobileMenuOpen" class="lg:hidden border-t border-slate-800 mt-2 pt-4 pb-2">
        <div class="flex flex-col space-y-2">
          <Link
            :href="route('home')"
            class="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            @click="mobileMenuOpen = false"
          >
            Home
          </Link>
          <Link
            :href="route('dashboard')"
            class="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            @click="mobileMenuOpen = false"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { Link, usePage } from '@inertiajs/vue3'
import NotificationDropdown from './NotificationDropdown.vue'
import { ref } from 'vue'

const mobileMenuOpen = ref(false)
</script>
