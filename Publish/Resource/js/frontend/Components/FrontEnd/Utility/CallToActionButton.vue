<template>
    <div>
        <Link
            :href="link"
            class="w-full relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
        >
            <span
                class="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"
            />
            <span
                class="w-full relative px-6 py-2 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400 flex"
                :class="justifyCenter"
            >
                <slot>
                    <span class="relative text-white">{{ name }}</span>
                </slot>
            </span>
        </Link>
    </div>
</template>

<script setup lang="ts">
// import { ref, onMounted, onUnmounted, toRefs } from 'vue';
import { Link } from "@inertiajs/vue3";

defineProps({
    id: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
        default: "Button",
    },
    justifyCenter: {
        type: String,
        required: true,
        default: "justify-center",
    },
});
</script>
