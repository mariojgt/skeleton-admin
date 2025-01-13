<template>
    <div class="menu-item-container">
        <div
            class="ios-icon-wrapper"
            @click="navigateRoute"
        >
            <div class="ios-icon">
                <div class="icon-content" v-html="props.menuItem.icon" />
            </div>
            <div class="icon-reflection"></div>
        </div>
        <p class="icon-label">{{ props.menuItem.menu_label }}</p>
    </div>
</template>

<script setup lang="ts">
import { Link, router } from "@inertiajs/vue3";
import { onMounted } from "vue";

let routeLink = null;

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
