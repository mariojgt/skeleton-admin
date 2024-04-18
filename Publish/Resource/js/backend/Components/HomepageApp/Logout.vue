<template>
    <div class="rounded" @click="logout" >
        <div
            class="w-24 h-24 hover:bg-secondary hover:text-neutral-950 hover:border-l-neutral-950 mx-auto mb-2 rounded-lg hover:shadow-lg bg-base-100 border shadow-lg hover:scale-125 transition duration-500 cursor-pointer">
            <div class="p-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                </svg>
            </div>
        </div>
        <p class="text-center font-bold">Sing Out</p>
    </div>
</template>

<script setup>
import { router } from '@inertiajs/vue3';
const logoutRoute = route("skeleton.logout");

const logout = () => {
    router.get(logoutRoute);
}
</script>
