<template>
    <div
        class="card bg-base-300 border border-gray-300 shadow-xl"
        :data-itemid="props.itemId"
    >
        <div class="card-body">
            <h2 class="card-title">
                <div :html="props.icon" v-if="props.icon"></div>
                <!-- <component :is="DynamicIcon" v-if="DynamicIcon" /> -->
                {{ props.itemName }}
            </h2>
            <p v-if="props.subTitle">
                {{ props.subTitle }}
            </p>
            <p>Item id:{{ props.itemId }}</p>
            <div
                id="menu-item"
                class="grid w-full grid-cols-1 gap-4 p-7"
                :data-itemid="props.itemId"
            >
                <!-- This slot is where the other menus will be places -->
                <slot />
            </div>
            <div class="card-actions justify-end">
                <button class="btn btn-primary">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
                        />
                    </svg>
                    Move
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// Dynamic import the all icons to one variable
import { computed } from "vue";

/**
 * The component's data.
 */
const props = defineProps({
    // Menu item name
    itemId: {
        type: Number,
        default: 0,
    },
    // Menu item name
    itemName: {
        type: String,
        default: "Menu item name",
    },
    // Sub title just for display
    subTitle: {
        type: String,
        default: null,
    },
    // The icon name
    icon: {
        type: String,
        default: null,
    },
});

// Dynamic import the icon component with computed property
// const DynamicIcon = computed(() => {
//     // If menu item is not null
//     if (props.icon) {
//         // Return the icon component
//         return props.icon;
//     }
//     return null;
// });
</script>
