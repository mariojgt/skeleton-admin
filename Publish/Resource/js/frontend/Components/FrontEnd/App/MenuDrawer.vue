<template>
    <nav class="w-80 min-h-full bg-dark-900/95 backdrop-blur-md border-r border-cyan-900/30 relative overflow-hidden">
        <!-- Animated Background with Pixels/Grid -->
        <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzBjNDg2MyIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc>')] opacity-10">
        </div>

        <!-- Scanline Effect -->
        <div class="absolute inset-0 bg-scanline opacity-5 pointer-events-none"></div>

        <!-- Header with Logo/Title -->
        <div class="relative px-6 pt-8 pb-4 mb-2">
            <h1 class="text-2xl font-gaming text-cyan-400 tracking-wider flex items-center">
                <Zap class="w-7 h-7 mr-3" />
                <span class="text-gradient-gaming">The Dev <span class="text-cyan-300">Realm</span></span>
            </h1>
            <div class="h-px bg-gradient-to-r from-cyan-500/10 via-cyan-400/50 to-cyan-500/10 mt-4 mb-2"></div>
        </div>

        <!-- Navigation Content -->
        <div class="relative px-6 space-y-2">
            <!-- Regular Nav Items -->
            <Link
                v-for="item in regularNavItems"
                :key="item.name"
                :href="item.route"
                class="group relative flex items-center gap-4 p-3 rounded-md transition-all duration-300 overflow-hidden"
                :class="[
                    item.isActive
                        ? 'bg-cyan-900/20 text-cyan-300 shadow-neon-cyan'
                        : 'text-gray-400 hover:bg-dark-700/40 hover:text-cyan-200'
                ]"
            >
                <!-- Background Animation -->
                <div
                    class="absolute inset-0 rounded-md transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                    :class="{ 'opacity-100': item.isActive }"
                >
                    <!-- Animated gradient border -->
                    <div class="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-purple-500/20 opacity-0 group-hover:opacity-100"
                         :class="{ 'opacity-100 animate-pulse-slow': item.isActive }"></div>

                    <!-- Hover effect -->
                    <div class="absolute inset-0 bg-gradient-to-r from-cyan-900/30 via-cyan-800/10 to-cyan-900/30 opacity-0 group-hover:opacity-100"></div>
                </div>

                <!-- Icon Container with Glow -->
                <div class="relative">
                    <div
                        class="absolute inset-0 rounded-md transition-all duration-300"
                        :class="item.isActive ? 'bg-cyan-500/30 blur-md animate-pulse-slow' : 'bg-transparent group-hover:bg-cyan-500/20 group-hover:blur-md'"
                    ></div>
                    <component
                        :is="item.icon"
                        class="w-5 h-5 relative z-10 transition-all duration-300"
                        :class="item.isActive ? 'text-cyan-300 scale-110' : 'text-gray-400 group-hover:text-cyan-300 group-hover:scale-110'"
                    />
                </div>

                <!-- Text with Pixel Font Effect -->
                <span
                    class="text-md font-medium font-gaming relative z-10 tracking-wide transition-all duration-300"
                    :class="item.isActive ? 'text-cyan-300' : 'group-hover:text-cyan-300'"
                >
                    {{ item.name }}
                </span>

                <!-- Active Indicator - Energy Bar -->
                <div v-if="item.isActive" class="absolute -right-6 top-0 h-full w-1.5 bg-gradient-to-b from-cyan-400 via-cyan-300 to-blue-500 opacity-80 transition-all duration-300 rounded-l animate-pulse-slow"></div>

                <!-- XP Level Indicator (only for active items) -->
                <div v-if="item.isActive" class="ml-auto relative bg-dark-800/80 px-2 py-0.5 rounded text-xs font-mono text-cyan-300 border border-cyan-500/30">
                    LVL {{ item.level }}
                </div>
            </Link>

            <!-- Premium Button (Styled as Special Item) -->
            <button
                @click.stop="openPricing"
                class="group relative w-full flex items-center gap-4 p-3 mt-6 rounded-md transition-all duration-300 text-gray-300 hover:text-amber-300 overflow-hidden border border-amber-500/20"
            >
                <!-- Premium Background Effect with Animation -->
                <div class="absolute inset-0 rounded-md transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                    <div class="absolute inset-0 bg-gradient-to-r from-amber-900/30 via-amber-600/10 to-amber-900/30"></div>
                    <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(251,191,36,0.2)_0%,_transparent_70%)] group-hover:animate-pulse-slow"></div>
                </div>

                <!-- Icon Container with Gold Effect -->
                <div class="relative">
                    <div class="absolute inset-0 bg-amber-500/0 group-hover:bg-amber-500/30 rounded-full blur-md transition-all duration-300 group-hover:animate-pulse"></div>
                    <Crown class="w-5 h-5 relative z-10 transition-colors duration-300 text-amber-400 group-hover:text-amber-300" />
                </div>

                <!-- Treasure Text -->
                <span class="text-md font-gaming relative z-10 transition-colors duration-300 text-amber-400 group-hover:text-amber-300">
                    PREMIUM ACCESS
                </span>

                <!-- Animated Indicator (Coin/Treasure) -->
                <div class="ml-auto relative">
                    <div class="absolute -inset-2 bg-amber-500/20 rounded-full blur-md animate-ping opacity-75"></div>
                    <div class="relative w-3 h-3 rounded-full bg-gradient-to-b from-amber-300 to-amber-500 flex items-center justify-center">
                        <div class="w-1 h-1 rounded-full bg-amber-200"></div>
                    </div>
                </div>
            </button>

            <!-- Player Stats Preview -->
            <!-- <div class="mt-8 pt-6 border-t border-cyan-900/30">
                <div class="flex items-center mb-3">
                    <Gamepad2 class="w-4 h-4 text-cyan-500 mr-2" />
                    <h3 class="text-xs text-cyan-500 font-gaming tracking-wider">PLAYER STATS</h3>
                </div>


                <div class="space-y-3">
                    <div>
                        <div class="flex justify-between text-xs mb-1">
                            <span class="text-gray-400">XP</span>
                            <span class="text-cyan-400 font-mono">1250/2000</span>
                        </div>
                        <div class="h-2 bg-dark-800 rounded-full overflow-hidden">
                            <div class="h-full w-3/5 bg-gradient-to-r from-cyan-600 to-cyan-400 rounded-full"></div>
                        </div>
                    </div>

                    <div>
                        <div class="flex justify-between text-xs mb-1">
                            <span class="text-gray-400">TUTORIALS</span>
                            <span class="text-green-400 font-mono">24/56</span>
                        </div>
                        <div class="h-2 bg-dark-800 rounded-full overflow-hidden">
                            <div class="h-full w-2/5 bg-gradient-to-r from-green-600 to-green-400 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div> -->
        </div>
    </nav>
</template>

<script setup>
import { Link, usePage } from "@inertiajs/vue3";
import {
    Home, BookOpen, Store,
    Newspaper, Crown,
    Trophy, Gamepad2, Zap
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

// Regular navigation items with gaming elements
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
    },
]);
</script>

<style scoped>
/* Gaming Font - add @font-face or import if you have a specific gaming font */
.font-gaming {
  font-family: 'Oxanium', 'Rajdhani', sans-serif;
  letter-spacing: 0.05em;
}

/* Scanline effect */
.bg-scanline {
  background: linear-gradient(
    to bottom,
    transparent 50%,
    rgba(0, 0, 0, 0.1) 50%
  );
  background-size: 100% 4px;
  animation: scanline 10s linear infinite;
}

/* Text gradient for gaming look */
.text-gradient-gaming {
  background: linear-gradient(to bottom, #4fe0ff, #38bdf8);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 0 0 10px rgba(56, 189, 248, 0.3);
}

/* Neon shadow for active items */
.shadow-neon-cyan {
  box-shadow: 0 0 5px rgba(8, 145, 178, 0.5),
              inset 0 0 10px rgba(6, 182, 212, 0.3);
}

/* Slower pulse animation */
@keyframes pulse-slow {
  0%, 100% {
    opacity: 0.8;
  }
  50% {
    opacity: 0.4;
  }
}

.animate-pulse-slow {
  animation: pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Scanline animation */
@keyframes scanline {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 0 100%;
  }
}

/* Dark theme custom colors */
.bg-dark-900 {
  background-color: #0c1117;
}

.bg-dark-800 {
  background-color: #131c27;
}

.bg-dark-700 {
  background-color: #192231;
}
</style>
