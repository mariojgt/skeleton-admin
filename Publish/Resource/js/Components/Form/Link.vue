<template>
    <Link :href="'/' + link" method="get" class="btn btn-primary">
        <span class="inline-block ml-1">{{ props.name }}</span>
    </Link>
</template>

<script setup>
import { watch, onMounted, defineEmits } from "vue";
import { Link } from "@inertiajs/inertia-vue3";

const props = defineProps({
    name: {
        type: String,
        default: "Add you link name here",
    },
    link: {
        type: String,
        default: "login",
    },
});
</script>

<style></style>
