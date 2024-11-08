<template>
    <div :class="headerBackground" class="navbar top-0 z-30 shadow-lg flex justify-between items-center p-2">
        <!-- Logo and Branding -->
        <div class="flex items-center rounded-md">
            <label for="my-drawer" class="flex items-center cursor-pointer">
                <logo class="h-20 w-20 hover:transform hover:scale-110 transition-transform hover:rotate-180" />
                <span class="text-3xl font-bold text-white hidden lg:block">The Dev Realm</span>
            </label>
        </div>

        <!-- Navigation Links (Hidden on Mobile) -->
        <!-- <div class="hidden lg:flex space-x-4">
            <Link :href="homeRoute" class="text-white hover:text-gray-300">Home</Link>
            <Link :href="gamesRoute" class="text-white hover:text-gray-300">Games</Link>
            <Link :href="contactRoute" class="text-white hover:text-gray-300">Contact</Link>
        </div> -->

        <!-- Search Bar -->
        <!-- <div class="relative w-64">
            <label class="sr-only" for="search">Search</label>
            <input class="h-8 w-full rounded-full border-none bg-white px-4 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" id="search" type="search" placeholder="Search website..." />
            <button type="button" class="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-600 transition hover:text-gray-700">
                <span class="sr-only">Search</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </button>
        </div> -->
        <div class="flex items-center space-x-4">
            <ThemeSwich :disabled="true" />
            <template v-if="!isAuth" >
                <button class="btn btn-primary btn-md" @click="login">Sign in</button>
                <button class="btn btn-secondary btn-md" @click="register">Get Started or Free</button>
            </template>
            <template v-if="isAuth">
                <SearchSidebar ref="searchComponentRef" />
                <notification @open-notification="openNotification" />
                <div class="dropdown dropdown-end">
                    <div tabindex="0">
                        <div class="avatar">
                            <div class="rounded-full w-10 h-10 m-1">
                                <img :src="usePage().props.authUserInfo.data.avatar" />
                            </div>
                        </div>
                    </div>
                    <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <Link :href="profileLink">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 mr-2 stroke-current">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                </svg>
                                My Profile
                            </Link>
                        </li>
                        <li>
                            <Link :href="logoutRoute">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                                </svg>
                                Logout
                            </Link>
                        </li>
                    </ul>
                </div>
            </template>
        </div>
    </div>
</template>

<script setup>
import { Link } from "@inertiajs/vue3";
import notification from "./Notifications.vue";
import { usePage } from "@inertiajs/vue3";
import SearchSidebar from '@frontend_components/FrontEnd/Search/SearchSidebar.vue';
import { onMounted, ref } from "vue";
import logo from "@frontend_components/FrontEnd/Icons/logoSimple.vue";
import ThemeSwich from "@frontend_components/FrontEnd/Global/ThemeSwich.vue";

let isAuth = $ref(false);
// Check if there is a flash message and display it
onMounted(() => {
    if (usePage().props.isUserAuth) {
        isAuth = usePage().props.isUserAuth;
    }
});

const props = defineProps({
    headerBackground: {
        type: String,
        default: "magicpattern",
    },
});

const emit = defineEmits(["login", "register"]);

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

// Links
const homeRoute = route("home");
// const gamesRoute = route("games");
// const contactRoute = route("contact");
const profileLink = route("user.edit");
const logoutRoute = route("logout.user");
</script>

<style>
</style>
