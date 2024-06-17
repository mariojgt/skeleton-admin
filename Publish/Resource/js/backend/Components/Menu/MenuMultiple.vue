<template>
    <li class="dropdown dropdown-hover">
        <label tabindex="0" class="capitalize font-bold">
            {{ props.menuItem.menu_label }}</label>
        <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
            <li>
                <Link :href="routeLink" class="capitalize font-bold">{{ props.menuItem.menu_label }}</Link>
            </li>
            <li tabindex="0">
                <ul class="bg-base-100">
                    <li v-for="(item, index) in props.menuItem.collection" :key="index">
                        <Link :href="makeRoute(item.route)" class="capitalize font-bold">{{ item.menu_label }}</Link>
                    </li>
                </ul>
            </li>
        </ul>
    </li>
</template>

<script setup>
import { Link } from "@inertiajs/vue3";
import { computed } from "vue";
// let routeLink = route(props.menuItem.route);

// Page props
const props = defineProps({
    menuItem: {
        type: Object,
        default: {},
    },
});

// Store the route link so we can redirect the user
let routeLink = route(props.menuItem.route);

// Normal function
const makeRoute = (routeString) => {
    return route(routeString);
};
</script>
