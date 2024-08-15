<template>
    <div
        class="navbar sticky top-0 z-30 shadow-lg bg-opacity-90 backdrop-blur transition-all duration-100 bg-base-100 text-base-content border-b border-primary">
        <div class="flex-none" v-if="!homePage" >
            <button class="btn btn-square btn-ghost">
                <label for="my-drawer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        class="inline-block w-6 h-6 stroke-current">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16">
                        </path>
                    </svg>
                </label>
            </button>
        </div>
        <div class="flex-1 hidden lg:flex">
            <Link :href="homeRoute">
            <a href="/" aria-current="page" aria-label="Homepage" class="flex-0 btn btn-ghost px-2"
                data-svelte-h="svelte-pw6yxt">
                <div class="font-title inline-flex text-lg md:text-2xl"><span class="lowercase">Skeleton </span>-<span
                        class="text-primary">Backend</span></div>
            </a>
            </Link>
        </div>
        <Search/>
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
                            <img :src="usePage().props.avatar" />
                            {{ usePage().props.avatar }}
                        </div>
                    </div>
                </div>
                <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
                    <li v-for="(item, index) in usePage().props.navbar.data" :key="index" >
                        <Link :href="route(item.route)">
                            <div v-html="item.icon"/>
                            {{ item.menu_label }}
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import route from 'ziggy-js';
import { watch, onMounted } from "vue";
import { Link } from "@inertiajs/vue3";
import notification from "./Notifications.vue";
import ThemeSwich from "../Global/ThemeSwich.vue";
import Search from "./Search.vue";
import { usePage } from "@inertiajs/vue3";

// Page props
const props = defineProps({
    homePage: {
        type: Boolean,
        default: false
    },
});

</script>

<style>
</style>
