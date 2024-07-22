<template>
    <div
        :class="usePage().props.background ?? 'bg-base-300'"
        class="navbar top-0 z-30 shadow-lg"
    >
        <div class="flex rounded-lg p-5 fancy-border">
            <!-- {{-- Trigger the side menu --}} -->
            <span
                class="tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)]"
                data-tip="Menu"
            >
                <label for="my-drawer" class="flex items-center cursor-pointer">
                    <logo class="h-20" />
                    <span
                        class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white hidden lg:flex"
                        >The Dev Realm</span
                    >
                </label>
            </span>
        </div>
        <div class="flex-1 hidden px-2 mx-2 lg:flex">
            <!-- <Link :href="homeRoute" class="bg-accent" >
                <span class="text-lg text-primary font-bold"> skeleton frontend </span>
            </Link> -->
        </div>
        <div class="relative">
            <label class="sr-only" for="search"> Search </label>
            <input
                class="h-12 w-full rounded-full border-none bg-white pe-10 ps-4 text-sm shadow-sm sm:w-56"
                id="search"
                type="search"
                placeholder="Search website..."
            />

            <button
                type="button"
                class="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
            >
                <span class="sr-only">Search</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
            </button>
        </div>
        <div class="flex-none">
            <ThemeSwich />
        </div>
        <div class="flex-none" v-if="isAuth">
            <notification />
        </div>
        <div class="flex-none" v-if="isAuth">
            <div class="dropdown dropdown-end">
                <div tabindex="0">
                    <div class="avatar">
                        <div class="rounded-full w-10 h-10 m-1">
                            <img src="https://i.pravatar.cc/300" />
                        </div>
                    </div>
                </div>
                <ul
                    tabindex="0"
                    class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
                >
                    <li>
                        <Link :href="profileLink">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                class="inline-block w-5 h-5 mr-2 stroke-current"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                ></path>
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                ></path>
                            </svg>
                            My Profile
                        </Link>
                    </li>
                    <li>
                        <Link :href="logoutRoute">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                />
                            </svg>
                            Logout
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Link } from "@inertiajs/vue3";
import notification from "./Notifications.vue";
import { usePage } from "@inertiajs/vue3";

import { onMounted } from "vue";
import logo from "@frontend_components/FrontEnd/Icons/logo.vue";
import ThemeSwich from "@frontend_components/FrontEnd/Global/ThemeSwich.vue";

let isAuth = $ref(false);
// Check if there is a flash message and display it
onMounted(() => {
    if (usePage().props.isUserAuth) {
        isAuth = usePage().props.isUserAuth;
    }
});

// Links
const profileLink = route("user.edit");
// Logout Route
const logoutRoute = route("logout.user");
</script>

<style></style>
