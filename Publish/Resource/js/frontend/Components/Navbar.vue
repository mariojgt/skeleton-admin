<template>
  <nav class="navbar bg-base-200 shadow-lg">
    <div class="navbar-start">
      <Link :href="route('home')" class="btn btn-ghost text-xl font-bold">
        {{ $page.props.app }}
      </Link>
    </div>

    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li><Link :href="route('home')" class="btn btn-ghost">Home</Link></li>
        <li><Link :href="route('dashboard')" class="btn btn-ghost">Dashboard</Link></li>
      </ul>
    </div>

    <div class="navbar-end gap-2">
      <!-- Notifications -->
      <NotificationDropdown />

      <!-- User Menu -->
      <div class="dropdown dropdown-end" v-if="usePage().props.user">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img
              :src="usePage().props.user.data.avatar || '/assets/avatars/default.png'"
              :alt="usePage().props.user.data.username"
              class="rounded-full"
            />
          </div>
        </div>
        <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          <li class="menu-title">
            <span>{{ $page.props.auth.user.first_name }} {{ $page.props.auth.user.last_name }}</span>
          </li>
          <li><Link :href="route('user.edit')" class="gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Profile
          </Link></li>
          <li><Link :href="route('logout.user')" method="post" class="gap-2 text-error">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Logout
          </Link></li>
        </ul>
      </div>

      <!-- Login/Register for guests -->
      <div v-else class="gap-2">
        <Link :href="route('login')" class="btn btn-primary btn-sm">Login</Link>
        <Link :href="route('register.user.form')" class="btn btn-outline btn-sm">Register</Link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { Link, usePage } from '@inertiajs/vue3'
import NotificationDropdown from './NotificationDropdown.vue'
</script>
