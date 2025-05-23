<template>
    <nav class="w-80 min-h-full bg-[#0F172A] bg-opacity-95 backdrop-blur-md border-r border-[#64FFDA]/20 relative overflow-hidden">
      <!-- Premium Background Elements -->
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzY0RkZEQSIgc3Ryb2tlLW9wYWNpdHk9IjAuMiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc>')] opacity-10"></div>

      <!-- Subtle Scanline Effect -->
      <div class="absolute inset-0 bg-scanline opacity-5 pointer-events-none"></div>

      <!-- Dynamic Accent Lighting -->
      <div class="absolute top-0 right-0 w-full h-64 bg-gradient-to-b from-[#64FFDA]/5 to-transparent"></div>
      <div class="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#8B5CF6]/5 to-transparent"></div>

      <!-- Header with Brand Logo -->
      <div class="relative px-6 pt-8 pb-4 mb-4">
        <h1 class="text-2xl font-gaming text-[#64FFDA] tracking-wider flex items-center">
          <Gamepad class="w-7 h-7 mr-3 text-[#64FFDA]" />
          <span class="text-gradient-brand">Realm <span class="text-[#8B5CF6]">Game Dev</span></span>
        </h1>
        <!-- Sleek Divider -->
        <div class="h-px bg-gradient-to-r from-[#64FFDA]/10 via-[#64FFDA]/50 to-[#64FFDA]/10 mt-4"></div>
      </div>

      <!-- Navigation Content -->
      <div class="relative px-4 space-y-1">
        <!-- Regular Nav Items with Better Visual Hierarchy -->
        <Link
          v-for="item in regularNavItems"
          :key="item.name"
          :href="item.route"
          class="group relative flex items-center gap-3 p-3 rounded-lg transition-all duration-200 overflow-hidden"
          :class="[
            item.isActive
              ? 'bg-[#1E293B] text-white'
              : 'text-[#CBD5E1] hover:bg-[#1E293B]/50 hover:text-white'
          ]"
        >
          <!-- Clean, Modern Hover State -->
          <div
            class="absolute inset-0 rounded-lg transition-opacity duration-200 opacity-0 group-hover:opacity-100"
            :class="{ 'opacity-100': item.isActive }"
          >
            <!-- Active state accent -->
            <div
              v-if="item.isActive"
              class="absolute left-0 top-0 h-full w-1 bg-gradient-to-b"
              :class="getItemAccentColor(item.name)">
            </div>
          </div>

          <!-- Modern Icon Container -->
          <div class="relative flex-shrink-0">
            <component
              :is="item.icon"
              class="w-5 h-5 transition-all duration-200"
              :class="[
                item.isActive
                  ? getItemIconColor(item.name)
                  : 'text-[#CBD5E1] group-hover:text-white'
              ]"
            />
          </div>

          <!-- Clean Typography -->
          <span
            class="text-md font-medium relative transition-all duration-200"
          >
            {{ item.name }}
          </span>

          <!-- Level Badge - Cleaner Implementation -->
          <div
            v-if="item.isActive"
            class="ml-auto bg-[#0F172A] px-2 py-0.5 rounded text-xs font-medium"
            :class="getItemTextColor(item.name)"
          >
            LVL {{ item.level }}
          </div>
        </Link>

        <!-- Divider before premium -->
        <div class="h-px bg-[#64FFDA]/10 my-4"></div>

        <!-- Premium Button with Modern Design -->
        <button
          @click.stop="openPricing"
          class="group relative w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-200 border border-[#F59E0B]/20 bg-[#1E293B]/40 hover:bg-[#1E293B]/60"
        >
          <!-- Modern Premium Effect -->
          <div class="absolute inset-0 rounded-lg transition-opacity duration-200 opacity-0 group-hover:opacity-100">
            <div class="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#F59E0B] to-[#FBBF24]"></div>
          </div>

          <!-- Premium Icon -->
          <div class="relative flex-shrink-0">
            <CreditCard class="w-5 h-5 text-[#F59E0B] group-hover:text-[#FBBF24] transition-colors duration-200" />
          </div>

          <!-- Premium Text -->
          <span class="text-md font-medium text-[#F59E0B] group-hover:text-[#FBBF24] transition-colors duration-200">
            Premium Access
          </span>

          <!-- Animated Badge -->
          <div class="ml-auto">
            <div class="relative px-2 py-0.5 bg-[#F59E0B]/20 rounded-full">
              <span class="text-xs font-medium text-[#F59E0B]">UPGRADE</span>
            </div>
          </div>
        </button>

        <!-- Recent Courses Section -->
        <div class="mt-8">
          <div class="text-sm font-medium text-[#CBD5E1] px-3 py-2">Recent Courses</div>

          <!-- Recent Course Cards -->
          <div class="space-y-2 mt-2">
            <div v-for="(course, index) in recentCourses" :key="index"
                 class="p-2 rounded-lg bg-[#1E293B]/50 hover:bg-[#1E293B] border border-[#64FFDA]/10 hover:border-[#64FFDA]/30 transition-all duration-200 cursor-pointer group">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded bg-[#0F172A] flex items-center justify-center">
                  <component :is="course.icon" class="w-5 h-5" :class="course.iconColor" />
                </div>
                <div class="flex-1 min-w-0">
                  <div class="text-sm font-medium text-white truncate">{{ course.title }}</div>
                  <div class="text-xs text-[#CBD5E1] flex items-center gap-1">
                    <Clock class="w-3 h-3" />
                    {{ course.progress }}% Complete
                  </div>
                </div>
                <div class="w-2 h-8 rounded-full bg-[#0F172A]">
                  <div class="h-full rounded-full transition-all duration-300"
                       :class="course.progressColor"
                       :style="{ height: `${course.progress}%` }"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </template>

  <script setup>
  import { Link, usePage, router } from "@inertiajs/vue3";
  import {
    Home, BookOpen, Store, Award,
    Newspaper, CreditCard, Clock, Trophy,
    Gamepad, Code, Brush, FileCode
  } from 'lucide-vue-next';
  import { computed, inject, ref } from 'vue';

  const route = inject('route');

  // Routes
  const homeRoute = route("home");
  const courses = route("course.index");
  const store = route("store.index");
  const news = route("news");

  const emit = defineEmits(["pricing"]);

  const openPricing = (event) => {
    event.preventDefault();
    event.stopPropagation();
    router.visit('/pricing');
  };

  // Current route for active state
  const currentRoute = computed(() => usePage().url);

  // Regular navigation items with premium styling
  const regularNavItems = computed(() => [
    {
      name: 'Home',
      icon: Home,
      route: homeRoute,
      isActive: currentRoute.value === homeRoute,
      level: 12
    },
    {
      name: 'Courses',
      icon: BookOpen,
      route: courses,
      isActive: currentRoute.value === courses,
      level: 8
    },
    {
      name: 'Store',
      icon: Store,
      route: store,
      isActive: currentRoute.value === store,
      level: 5
    },
    {
      name: 'News',
      icon: Newspaper,
      route: news,
      isActive: currentRoute.value === news,
      level: 3
    }
  ]);

  // Recent courses
  const recentCourses = [
    // {
    //   title: 'Unreal Engine 5 Mastery',
    //   progress: 75,
    //   icon: Code,
    //   iconColor: 'text-[#64FFDA]',
    //   progressColor: 'bg-[#64FFDA]'
    // },
    // {
    //   title: 'Advanced Game Architecture',
    //   progress: 45,
    //   icon: FileCode,
    //   iconColor: 'text-[#8B5CF6]',
    //   progressColor: 'bg-[#8B5CF6]'
    // },
    // {
    //   title: 'Game Art Fundamentals',
    //   progress: 90,
    //   icon: Brush,
    //   iconColor: 'text-[#F59E0B]',
    //   progressColor: 'bg-[#F59E0B]'
    // }
  ];

  // Color theme functions for different nav items
  const getItemAccentColor = (name) => {
    const colors = {
      'Home': 'from-[#64FFDA] to-[#10B981]',
      'Courses': 'from-[#8B5CF6] to-[#A78BFA]',
      'Store': 'from-[#10B981] to-[#34D399]',
      'News': 'from-[#F59E0B] to-[#FBBF24]'
    };
    return colors[name] || 'from-[#64FFDA] to-[#10B981]';
  };

  const getItemIconColor = (name) => {
    const colors = {
      'Home': 'text-[#64FFDA]',
      'Courses': 'text-[#8B5CF6]',
      'Store': 'text-[#10B981]',
      'News': 'text-[#F59E0B]'
    };
    return colors[name] || 'text-[#64FFDA]';
  };

  const getItemTextColor = (name) => {
    const colors = {
      'Home': 'text-[#64FFDA]',
      'Courses': 'text-[#8B5CF6]',
      'Store': 'text-[#10B981]',
      'News': 'text-[#F59E0B]'
    };
    return colors[name] || 'text-[#64FFDA]';
  };
  </script>

  <style scoped>
  /* Modern font */
  .font-gaming {
    font-family: 'Inter', 'Helvetica', sans-serif;
    letter-spacing: 0.05em;
  }

  /* Premium scanline effect */
  .bg-scanline {
    background: linear-gradient(
      to bottom,
      transparent 50%,
      rgba(0, 0, 0, 0.05) 50%
    );
    background-size: 100% 4px;
    animation: scanline 15s linear infinite;
  }

  /* Premium gradient text */
  .text-gradient-brand {
    background: linear-gradient(to bottom, #64FFDA, #10B981);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    text-shadow: 0 0 10px rgba(100, 255, 218, 0.2);
  }

  /* Clean scanline animation */
  @keyframes scanline {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 0 100%;
    }
  }
  </style>
