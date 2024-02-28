<template>
    <div class="rounded">
        <div class="w-24 h-24 hover:bg-secondary hover:text-white mx-auto mb-2 rounded-lg hover:shadow-lg bg-base-100 border shadow-lg hover:scale-125 transition duration-500 cursor-pointer" @click="navigateRoute" >
            <div class="p-1" v-html="props.menuItem.icon"/>
        </div>
        <p class="text-center font-bold">{{ props.menuItem.menu_label }}</p>
    </div>
</template>

<script setup lang="ts">
// Import the inersia script
import { Link, router } from "@inertiajs/vue3";
import { onMounted } from "vue";

let routeLink = null;

// Page props
const props = defineProps({
    menuItem: {
        type: Object,
        default: {},
    },
});

onMounted(() => {
    routeLink = route(props.menuItem.route);
})

const navigateRoute = async () => {
    router.get(routeLink);
};
</script>
