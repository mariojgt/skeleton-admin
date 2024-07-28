<template>
    <div class="text-center min-h-screen skeleton-bg flex justify-center">
        <div class="p-20 w-1/3">
            <!-- <div class="text-center lg:text-left">
                <h1 class="text-5xl font-bold">{{ props.title }}</h1>
                <p class="py-6">
                    Welcome to the backend login, in here you have a complete different
                    application controllers and routes, Thank you for download
                    skeleton-admin please don't forget to share this package, now go and
                    create your amazing application.
                </p>
            </div> -->
            <div class="card flex-shrink-0 w-full bg-base-300 border border-primary opacity-85 shadow-primary">
                <div class="card-body text-center">
                    <div class="avatar justify-center">
                        <div class="w-32 rounded">
                            <adminLogo />
                        </div>
                    </div>
                    <slot name="form" />
                    <div class="flex flex-col gap-2 p-3" >
                        <slot name="links" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { watch, onMounted } from "vue";
import { usePage } from "@inertiajs/vue3";

import adminLogo from "@backend_components/Backend/Global/AdminLogo.vue";

const props = defineProps({
    title: {
        type: String,
        default: "",
    },
});
</script>

<style>
</style>
