<template>
    <svg fill="#53b1c8" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M0 0h16v12h-2v4H2v-4H0V0zm2 2v8h2v4h1v-2h2v2h2v-2h2v2h1v-4h2V2H2zm6 6l1.414 1.414-.707.707L8 9.414l-.707.707-.707-.707L8 8zm2-3h2v2h-2V5zM4 5h2v2H4V5z" fill-rule="evenodd"></path> </g></svg>
</template>

<script setup>
import { watch, onMounted } from "vue";

const props = defineProps({
    width: {
        type: Number,
        default: 163,
    },
    height: {
        type: Number,
        default: 124,
    },
    full: {
        type: String,
        default: "true",
    },
});
</script>

<style></style>
