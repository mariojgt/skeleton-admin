<template>
  <div
        class="navbar sticky top-0 z-30 mb-2 shadow-lg bg-opacity-90 backdrop-blur transition-all duration-100 bg-base-100 text-base-content">
        <div class="flex-none">
            <button class="btn btn-square btn-ghost">
                <label for="my-drawer" class="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        class="inline-block w-6 h-6 stroke-current">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16">
                        </path>
                    </svg>
                </label>
            </button>
        </div>
        <div class="flex-1 hidden px-2 mx-2 lg:flex">
            <Link :href="homeRoute">
            <a href="/" aria-current="page" aria-label="Homepage" class="flex-0 btn btn-ghost px-2"
                data-svelte-h="svelte-pw6yxt">
                <div class="font-title inline-flex text-lg md:text-2xl"><span class="lowercase">Skeleton</span>-<span
                        class="text-primary">FRONTEND</span></div>
            </a>
            </Link>
        </div>
        <div class="flex-1 lg:flex-none">
            <div class="form-control p-6">
                <div class="relative">
                    <input type="text" placeholder="Search" class="w-full pr-16 input input-primary input-bordered" />
                    <button class="absolute top-0 right-0 rounded-l-none btn btn-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            class="inline-block w-6 h-6 stroke-current">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <div class="flex-none">
            <ThemeSwich />
        </div>
        <div class="flex-none">
            <notification />
        </div>
        <div class="flex-none">
            <div class="dropdown dropdown-end">
                <div tabindex="0">
                    <div class="avatar">
                        <div class="rounded-full w-10 h-10 m-1">
                            <img src="https://i.pravatar.cc/300" />
                        </div>
                    </div>
                </div>
                <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
                    <li>
                        <Link :href="profileLink">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            class="inline-block w-5 h-5 mr-2 stroke-current">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z">
                            </path>
                        </svg>
                        My Profile
                        </Link>
                    </li>
                    <li>
                        <Link :href="logoutRoute">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
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
import { watch, onMounted } from "vue";
import { Link } from "@inertiajs/vue3";
import logo from "../Global/UserLogo.vue";
import notification from "./Notifications.vue";
import ThemeSwich from "../Global/ThemeSwich.vue";

// Links
const profileLink = route("user.edit");
// Logout Route
const logoutRoute = route("logout.user");
// Home page route
const homeRoute = route("user.home");
</script>

<style></style>
