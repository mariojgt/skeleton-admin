<template>
    <li>
        <span class="capitalize" @click="navigateRoute">
        <!-- <component :is="DynamicIcon" /> -->
        {{ props.menuItem.menu_label }}
        </span>
    </li>
</template>

<script setup lang="ts">
// Import the inersia script
import { Link, router } from "@inertiajs/vue3";
import { onMounted } from "vue";
// Dynamic import the all icons to one variable
// import * as icons from "@mariojgt/masterui/packages/Icons";

// Store the route link so we can redirect the user
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

// Dynamic import the icon component
// const DynamicIcon = icons[props.menuItem.icon];
const navigateRoute = async () => {
    router.get(routeLink);
};

</script>
