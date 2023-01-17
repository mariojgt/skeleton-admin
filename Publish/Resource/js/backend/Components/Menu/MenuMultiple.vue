<template>
    <div class="dropdown dropdown-hover">
        <label tabindex="0" class="btn btn-ghost rounded-btn">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
            label name</label>
        <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Item 1</a></li>
            <li tabindex="0">
                <span>Parent</span>
                <ul class="bg-base-100">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                    <li><a>Submenu 3</a></li>
                </ul>
            </li>
            <li><a>Item 2</a></li>
        </ul>
    </div>
</template>

<script setup>
import { Link } from "@inertiajs/vue3";

// let routeLink = route(props.menuItem.route);

// Page props
const props = defineProps({
    menuItem: {
        type: Object,
        default: {},
    },
});
</script>
