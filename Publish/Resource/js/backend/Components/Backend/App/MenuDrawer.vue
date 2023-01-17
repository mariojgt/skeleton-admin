<template>
    <aside class="
      flex flex-col
      justify-start
      border-r border-base-200
      bg-base-300
      text-base-content
      w-80
    ">
        <div class="
        sticky
        inset-x-0
        top-0
        z-50
        hidden
        w-full
        py-1
        transition
        duration-200
        ease-in-out
        border-b
        lg:block
        border-base-200
        bg-base-300
      ">
            <div class="mx-auto space-x-1 navbar max-w-none">
                <div class="flex items-center flex-none">
                    <a href="#" aria-label="Homepage" class="px-2 flex-0 btn btn-ghost md:px-4 nuxt-link-active">
                        <div class="inline-block text-3xl font-title text-primary">
                            <span class="lowercase">Skeleton</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div>
            <ul class="menu flex flex-col p-4 pt-2">
                <li class="mt-4 menu-title"><span> New </span></li>
                <!-- Example below only for example -->
                <!-- <li>
                    <a href="#" class="capitalize">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        Home
                    </a>
                </li> -->
                <menu-item-handle v-for="(item, index) in menu" :key="index" :menuItem="item" />
            </ul>
        </div>
    </aside>
</template>

<script setup>
import { usePage } from "@inertiajs/vue3";
import { watch, onMounted } from "vue";
import menuItemHandle from "../../Menu/MenuHandle.vue";

const menu = usePage().props.navigation.data;
</script>

<style>
</style>
