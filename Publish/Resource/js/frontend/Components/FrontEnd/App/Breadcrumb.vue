<template>
    <div v-if="usePage().props.breadcrumb" >
        <hr class="theme-divider" />
        <nav :class="backgroundClass" class="breadcrumb-nav w-full flex justify-center items-left py-3" aria-label="Breadcrumb">
            <ol class="flex items-center ">
                <li>
                    <Link href="/" class="breadcrumb-link flex items-center hover:text-neutral transition-colors duration-300 ease-in-out text-4xl">
                        <svg aria-hidden="true" class="breadcrumb-icon w-8 h-8 mr-2 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                        </svg>
                        Home
                    </Link>
                </li>
                <li v-for="(item, index) in usePage().props.breadcrumb" :key="index" class="breadcrumb-item flex items-center ml-4">
                    <svg aria-hidden="true" class="breadcrumb-separator w-6 h-6 mr-2 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>

                    <Link :href="item.url" class="breadcrumb-link hover:text-accent text-4xl transition-colors duration-300 ease-in-out">{{ item.label }}</Link>
                </li>
            </ol>
        </nav>
    </div>
</template>

<script setup>
import { watch, onMounted } from "vue";
import { usePage } from "@inertiajs/vue3";
import { Link } from '@inertiajs/vue3'

const props = defineProps({
    backgroundClass: {
        type: String,
        default: "magicpattern",
    },
});
</script>
