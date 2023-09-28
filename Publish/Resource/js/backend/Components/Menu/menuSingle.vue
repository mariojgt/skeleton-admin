<template>
    <li>
        <Link :href="routeLink" class="capitalize font-bold">
        <!-- <component :is="DynamicIcon" /> -->
        {{ props.menuItem.menu_label }}
        </Link>
    </li>
</template>

<script setup>
// Import the inersia script
import { Link } from "@inertiajs/vue3";
// Dynamic import the all icons to one variable
// import * as icons from "@mariojgt/masterui/packages/Icons";

// Store the route link so we can redirect the user
let routeLink = route(props.menuItem.route);

// Page props
const props = defineProps({
    menuItem: {
        type: Object,
        default: {},
    },
});

// Dynamic import the icon component
// const DynamicIcon = icons[props.menuItem.icon];

</script>
