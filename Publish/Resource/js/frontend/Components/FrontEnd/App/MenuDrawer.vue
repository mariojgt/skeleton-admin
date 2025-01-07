# GameNav.vue
<template>
    <nav class="w-80 min-h-full bg-dark-500/90 backdrop-blur-sm border-r border-gray-800/50 relative overflow-hidden">
        <!-- Animated Background Grid -->
        <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIxMjEyMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc>')] opacity-5"></div>

        <!-- Navigation Content -->
        <div class="relative p-6 space-y-3">
            <!-- Regular Nav Items -->
            <Link
                v-for="item in regularNavItems"
                :key="item.name"
                :href="item.route"
                class="group relative flex items-center gap-4 p-4 rounded-lg transition-all duration-300"
                :class="[
                    item.isActive
                        ? 'bg-blue-500/20 text-blue-400 shadow-[inset_0_0_20px_rgba(59,130,246,0.15)]'
                        : 'text-gray-400 hover:bg-dark-400/50 hover:text-white'
                ]"
            >
                <!-- Background Glow -->
                <div
                    class="absolute inset-0 rounded-lg transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                    :class="{ 'opacity-100': item.isActive }"
                >
                    <div class="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
                    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent"></div>
                </div>

                <!-- Icon Container -->
                <div class="relative">
                    <div
                        class="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/20 rounded-lg blur-md transition-all duration-300"
                        :class="{ 'bg-blue-500/20': item.isActive }"
                    ></div>
                    <component
                        :is="item.icon"
                        class="w-6 h-6 relative z-10"
                        :class="item.isActive ? 'text-blue-400' : 'text-gray-400 group-hover:text-blue-400'"
                    />
                </div>

                <!-- Text -->
                <span
                    class="text-lg font-medium relative z-10 transition-all duration-300"
                    :class="item.isActive ? 'text-blue-400' : 'group-hover:text-blue-400'"
                >
                    {{ item.name }}
                </span>

                <!-- Active Indicator -->
                <div class="absolute -right-6 top-0 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 opacity-0 transition-all duration-300 rounded-l"
                    :class="{ 'opacity-100': item.isActive }">
                </div>
            </Link>

            <!-- Premium Button (Separated to prevent navigation) -->
            <button
                @click.stop="openPricing"
                class="group relative w-full flex items-center gap-4 p-4 rounded-lg transition-all duration-300 text-gray-400 hover:text-purple-400"
            >
                <!-- Premium Background Effect -->
                <div class="absolute inset-0 rounded-lg transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                    <div class="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10"></div>
                    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"></div>
                </div>

                <!-- Icon Container -->
                <div class="relative">
                    <div class="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/20 rounded-lg blur-md transition-all duration-300"></div>
                    <Crown class="w-6 h-6 relative z-10 transition-colors duration-300 group-hover:text-purple-400" />
                </div>

                <!-- Text -->
                <span class="text-lg font-medium relative z-10 transition-colors duration-300 group-hover:text-purple-400">
                    Premium
                </span>

                <!-- Special Premium Indicator -->
                <div class="ml-auto relative">
                    <div class="absolute -inset-1 bg-purple-500/20 rounded-full blur animate-pulse"></div>
                    <div class="relative w-2 h-2 rounded-full bg-purple-400"></div>
                </div>
            </button>
        </div>
    </nav>
</template>

<script setup>
import { Link, usePage } from "@inertiajs/vue3";
import {
    Home, BookOpen, Store,
    Newspaper, Crown
} from 'lucide-vue-next';
import { computed } from 'vue';

// Routes
const homeRoute = route("home");
const courses = route("course.index");
const store = route("store.index");
const news = route("news");

const emit = defineEmits(["pricing"]);

const openPricing = (event) => {
    event.preventDefault();
    event.stopPropagation();
    emit("pricing");
};

// Current route for active state
const currentRoute = computed(() => usePage().url);

// Regular navigation items (excluding Premium)
const regularNavItems = computed(() => [
    {
        name: 'Home',
        icon: Home,
        route: homeRoute,
        isActive: currentRoute.value === homeRoute
    },
    {
        name: 'Courses',
        icon: BookOpen,
        route: courses,
        isActive: currentRoute.value === courses
    },
    {
        name: 'Store',
        icon: Store,
        route: store,
        isActive: currentRoute.value === store
    },
    {
        name: 'News',
        icon: Newspaper,
        route: news,
        isActive: currentRoute.value === news
    }
]);
</script>
