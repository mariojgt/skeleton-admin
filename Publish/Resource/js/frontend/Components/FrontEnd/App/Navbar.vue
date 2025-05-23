<template>
    <div class="relative">
        <!-- Background with premium gradient and pattern -->
        <div :class="[headerBackground, 'absolute inset-0 bg-gradient-to-r from-[#0F172A]/98 to-[#1E293B]/98 backdrop-blur-sm border-b border-[#64FFDA]/20']"></div>

        <!-- Navbar Content -->
        <div class="relative navbar z-30 flex justify-between items-center px-4 py-2">
            <!-- Logo and Branding -->
            <div class="flex items-center gap-3">
                <label for="my-drawer" class="flex items-center gap-4 cursor-pointer group">
                    <div class="relative">
                        <div class="absolute -inset-2 bg-gradient-to-r from-[#64FFDA] to-[#8B5CF6] rounded-lg opacity-25 group-hover:opacity-75 blur transition-opacity duration-300"></div>
                        <logo class="relative h-16 w-16 transform transition-all duration-500 group-hover:rotate-180" />
                    </div>
                    <span class="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#64FFDA] to-[#8B5CF6] hidden lg:block">
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
                        class="px-4 py-2 rounded-lg bg-[#1E293B] border border-[#64FFDA]/30 text-[#64FFDA] font-medium hover:bg-[#0F172A] hover:border-[#64FFDA] transition-all duration-300"
                    >
                        Sign in
                    </button>
                    <button
                        @click="register"
                        class="px-4 py-2 rounded-lg bg-gradient-to-r from-[#64FFDA] to-[#10B981] text-[#0F172A] font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                    >
                        Get Premium Access
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
                            <div class="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#1E293B]">
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
                                            stroke="rgba(15, 23, 42, 0.5)"
                                            stroke-width="5"
                                            fill="none"
                                            class="text-[#0F172A]"
                                        />
                                        <!-- Progress Background -->
                                        <circle
                                            cx="50" cy="50" r="45"
                                            stroke="currentColor"
                                            stroke-width="5"
                                            fill="none"
                                            class="text-[#64FFDA]/20"
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
                                                <stop offset="0%" style="stop-color: rgb(100, 255, 218);" />
                                                <stop offset="100%" style="stop-color: rgb(139, 92, 246);" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>

                                <!-- Level Badge - Adjusted position and made more premium -->
                                <div class="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-r from-[#64FFDA] to-[#10B981] flex items-center justify-center text-sm font-bold text-[#0F172A] shadow-lg border-2 border-[#0F172A]">
                                    {{ userInfo.level }}
                                </div>
                            </template>
                        </div>

                        <!-- Dropdown Menu -->
                        <ul tabindex="0" class="p-2 shadow-lg menu dropdown-content bg-[#1E293B]/90 backdrop-blur-sm rounded-xl border border-[#64FFDA]/20 w-72 mt-4">
                            <!-- User Info Section -->
                            <div class="p-4 border-b border-[#64FFDA]/10">
                                <div class="flex items-center gap-4">
                                    <!-- User Avatar -->
                                    <div class="w-16 h-16 rounded-lg overflow-hidden border border-[#64FFDA]/20">
                                        <img
                                            :src="usePage().props.authUserInfo.data.avatar"
                                            class="w-full h-full object-cover"
                                        />
                                    </div>
                                    <!-- User Details -->
                                    <div class="flex-1">
                                        <div class="font-bold text-white text-lg">{{ usePage().props.authUserInfo.data.name }}</div>
                                        <template v-if="userInfo.hasLevel">
                                            <div class="text-sm text-[#CBD5E1]">Level {{ userInfo.level }}</div>
                                            <div class="text-sm text-[#CBD5E1]">{{ userInfo.currentXp }}/{{ userInfo.nextLevelXp }} XP to next level</div>
                                        </template>
                                        <div v-else class="text-sm text-[#CBD5E1]">
                                            Free Account
                                        </div>
                                    </div>
                                </div>

                                <!-- XP Progress Bar -->
                                <template v-if="userInfo.hasLevel">
                                    <div class="mt-4 h-2 w-full bg-[#0F172A] rounded-full overflow-hidden">
                                        <div
                                            class="h-full bg-gradient-to-r from-[#64FFDA] to-[#8B5CF6] rounded-full transition-all duration-300"
                                            :style="{ width: `${(userInfo.currentXp / userInfo.nextLevelXp) * 100}%` }"
                                        ></div>
                                    </div>
                                </template>
                            </div>

                            <!-- Navigation Links -->
                            <li>
                                <Link
                                    :href="profileLink"
                                    class="flex items-center gap-3 px-4 py-3 text-[#CBD5E1] hover:text-white hover:bg-[#0F172A]"
                                >
                                    <User class="w-5 h-5 text-[#64FFDA]" />
                                    My Profile
                                </Link>
                            </li>
                            <li>
                                <Link
                                    :href="achievements"
                                    class="flex items-center gap-3 px-4 py-3 text-[#CBD5E1] hover:text-white hover:bg-[#0F172A]"
                                >
                                    <Trophy class="w-5 h-5 text-[#F59E0B]" />
                                    Achievements
                                </Link>
                            </li>
                            <li>
                                <Link
                                    :href="logoutRoute"
                                    class="flex items-center gap-3 px-4 py-3 text-[#CBD5E1] hover:text-white hover:bg-[#0F172A]"
                                >
                                    <LogOut class="w-5 h-5 text-[#8B5CF6]" />
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
import { onMounted, ref, computed, inject } from "vue";
import logo from "@frontend_components/FrontEnd/Icons/logoSimple.vue";
import ThemeSwich from "@frontend_components/FrontEnd/Global/ThemeSwich.vue";
import { User, LogOut, Trophy } from 'lucide-vue-next';

// Inject the route globally provided
const route = inject('route');
let isAuth = $ref(false);

// Computed user info with level data
const userInfo = computed(() => {
    const userData = usePage().props.authUserInfo?.data || {};
    return {
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
        default: "bg-[#0F172A]",
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
