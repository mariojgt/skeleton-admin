# Navbar.vue
<template>
    <div class="relative">
        <!-- Background with gradient and pattern -->
        <div :class="[headerBackground, 'absolute inset-0 bg-gradient-to-r from-dark-600/98 to-dark-500/98 backdrop-blur-sm border-b border-gray-800/50']"></div>

        <!-- Navbar Content -->
        <div class="relative navbar z-30 flex justify-between items-center px-4 py-2">
            <!-- Logo and Branding -->
            <div class="flex items-center gap-3">
                <label for="my-drawer" class="flex items-center gap-4 cursor-pointer group">
                    <div class="relative">
                        <div class="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-25 group-hover:opacity-75 blur transition-opacity duration-300"></div>
                        <logo class="relative h-16 w-16 transform transition-all duration-500 group-hover:rotate-180" />
                    </div>
                    <span class="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 hidden lg:block">
                        The Dev Realm
                    </span>
                </label>
            </div>

            <!-- Right Side -->
            <div class="flex items-center gap-6">
                <!-- Theme Switch -->
                <ThemeSwich :disabled="true" />

                <!-- Not Authenticated -->
                <template v-if="!isAuth">
                    <button
                        @click="login"
                        class="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium transition-all duration-300"
                    >
                        Sign in
                    </button>
                    <button
                        @click="register"
                        class="px-4 py-2 rounded-lg bg-purple-500 hover:bg-purple-600 text-white font-medium transition-all duration-300"
                    >
                        Get Started for Free
                    </button>
                </template>

                <!-- Authenticated -->
                <template v-if="isAuth">
                    <!-- Search Component -->
                    <SearchSidebar ref="searchComponentRef" />

                    <!-- Notifications -->
                    <notification @open-notification="openNotification" />

                    <!-- User Profile Dropdown -->
                    <div class="dropdown dropdown-end">
                        <!-- Avatar with Level Frame -->
                        <div class="relative group cursor-pointer" tabindex="0">
                            <!-- Avatar Base -->
                            <div class="relative w-12 h-12 rounded-full overflow-hidden border-2 border-dark-500">
                                <img
                                    :src="usePage().props.authUserInfo.data.avatar"
                                    class="w-full h-full object-cover"
                                />
                            </div>

                            <!-- Level Ring - Positioned on top -->
                            <template v-if="userInfo.hasLevel">
                                <div class="absolute -inset-3 rounded-full">
                                    <svg class="w-full h-full" viewBox="0 0 100 100">
                                        <!-- Background Circle -->
                                        <circle
                                            cx="50" cy="50" r="45"
                                            stroke="rgba(0,0,0,0.5)"
                                            stroke-width="5"
                                            fill="none"
                                            class="text-dark-800"
                                        />
                                        <!-- Progress Background -->
                                        <circle
                                            cx="50" cy="50" r="45"
                                            stroke="currentColor"
                                            stroke-width="5"
                                            fill="none"
                                            class="text-blue-500/20"
                                        />
                                        <!-- Progress Bar -->
                                        <circle
                                            cx="50" cy="50" r="45"
                                            stroke="url(#gradient)"
                                            stroke-width="5"
                                            fill="none"
                                            :stroke-dasharray="circumference"
                                            :stroke-dashoffset="dashOffset"
                                            class="transform -rotate-90 origin-center transition-all duration-300"
                                        />
                                        <defs>
                                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" style="stop-color: rgb(59, 130, 246);" />
                                                <stop offset="100%" style="stop-color: rgb(168, 85, 247);" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>

                                <!-- Level Badge - Adjusted position and made more prominent -->
                                <div class="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-sm font-bold text-white shadow-lg border-2 border-dark-800">
                                    {{ userInfo.level }}
                                </div>
                            </template>
                        </div>

                        <!-- Dropdown Menu -->
                        <ul tabindex="0" class="p-2 shadow-lg menu dropdown-content bg-dark-200/90 backdrop-blur-sm rounded-xl border border-gray-800/50 w-72 mt-4">
                            <!-- User Info Section -->
                            <div class="p-4 border-b border-gray-800/50">
                                <div class="flex items-center gap-4">
                                    <!-- User Avatar -->
                                    <div class="w-16 h-16 rounded-lg overflow-hidden">
                                        <img
                                            :src="usePage().props.authUserInfo.data.avatar"
                                            class="w-full h-full object-cover"
                                        />
                                    </div>
                                    <!-- User Details -->
                                    <div class="flex-1">
                                        <div class="font-bold text-white text-lg">{{ usePage().props.authUserInfo.data.name }}</div>
                                        <template v-if="userInfo.hasLevel">
                                            <div class="text-sm text-gray-400">Level {{ userInfo.level }}</div>
                                            <div class="text-sm text-gray-400">{{ userInfo.currentXp }}/{{ userInfo.nextLevelXp }} XP to next level</div>
                                        </template>
                                        <div v-else class="text-sm text-gray-400">
                                            Free Account
                                        </div>
                                    </div>
                                </div>

                                <!-- XP Progress Bar -->
                                <template v-if="userInfo.hasLevel">
                                    <div class="mt-4 h-2 w-full bg-dark-500 rounded-full overflow-hidden">
                                        <div
                                            class="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300"
                                            :style="{ width: `${(userInfo.currentXp / userInfo.nextLevelXp) * 100}%` }"
                                        ></div>
                                    </div>
                                </template>
                            </div>

                            <!-- Navigation Links -->
                            <li>
                                <Link
                                    :href="profileLink"
                                    class="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-dark-300"
                                >
                                    <User class="w-5 h-5" />
                                    My Profile
                                </Link>
                            </li>
                            <li>
                                <Link
                                    :href="achievements"
                                    class="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-dark-300"
                                >
                                    <User class="w-5 h-5" />
                                    Achievements
                                </Link>
                            </li>
                            <li>
                                <Link
                                    :href="logoutRoute"
                                    class="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-dark-300"
                                >
                                    <LogOut class="w-5 h-5" />
                                    Logout
                                </Link>
                            </li>
                        </ul>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Link } from "@inertiajs/vue3";
import notification from "./Notifications.vue";
import { usePage } from "@inertiajs/vue3";
import SearchSidebar from '@frontend_components/FrontEnd/Search/SearchSidebar.vue';
import { onMounted, ref, computed } from "vue";
import logo from "@frontend_components/FrontEnd/Icons/logoSimple.vue";
import ThemeSwich from "@frontend_components/FrontEnd/Global/ThemeSwich.vue";
import { User, LogOut } from 'lucide-vue-next';

let isAuth = $ref(false);

// Computed user info with level data
const userInfo = computed(() => {
    const userData = usePage().props.authUserInfo?.data || {};
    return {
        // hasLevel: userData.has_subscription || false,
        hasLevel: true,
        level: usePage().props.authUserInfo.data.level || 25,
        currentXp: usePage().props.authUserInfo.data.xp || 50,
        nextLevelXp: usePage().props.authUserInfo.data.next_level_xp || 100,
    };
});

// Progress circle calculations
const circumference = computed(() => 2 * Math.PI * 45);
const dashOffset = computed(() => {
    if (!userInfo.value.hasLevel) return 0;
    const progress = userInfo.value.currentXp / userInfo.value.nextLevelXp;
    return circumference.value * (1 - progress);
});

// Props
const props = defineProps({
    headerBackground: {
        type: String,
        default: "magicpattern",
    },
});

// Emits
const emit = defineEmits(["login", "register"]);

// Methods
const login = () => {
    emit("login");
};

const register = () => {
    emit("register");
};

const searchComponentRef = $ref(null);

const openNotification = () => {
    searchComponentRef.openNotifications();
};

// Routes
const profileLink = route("user.edit");
const achievements = route("profile.achievements");
const logoutRoute = route("logout.user");

// Lifecycle
onMounted(() => {
    if (usePage().props.isUserAuth) {
        isAuth = usePage().props.isUserAuth;
    }
});
</script>
