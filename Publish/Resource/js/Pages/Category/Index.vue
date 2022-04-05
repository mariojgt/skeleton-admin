<template>
    <Layout>
        <div class="lg:p-10 xl:grid-cols-12 lg:bg-base-200 rounded-box">
            <div class="flex justify-between p-5">
                <h2 class="my-4 text-4xl font-bold card-title">
                    Category
                </h2>

                <button
                    class="btn btn-primary btn-active"
                    role="button"
                    aria-pressed="true"
                >
                    New
                </button>
            </div>

            <div
                class="card col-span-1 row-span-3 shadow-lg xl:col-span-2 border-2 border-primary"
            >
                <!-- Nested Categories Start -->
                <ul class="divide-y divide-gray-200" id="item-parent">
                    <li
                        class="p-4 hover:bg-base-300 cursor-pointer"
                        id="item-children"
                        v-for="(item, index) in days"
                        :key="index"
                    >
                        {{ item }}
                    </li>
                </ul>
            </div>
        </div>
    </Layout>
</template>

<script setup>
import { Inertia } from "@inertiajs/inertia";
import { onMounted } from "vue";
import { Link } from "@inertiajs/inertia-vue3";
import Layout from "../../Layout/Backend.vue";

// FIelds Values
import CreateCategory from "./Components/Create.vue";

// Create a debuf arraywith saven days of the month starting from monday
const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];

const props = defineProps({
    autenticator: {
        type: Object,
        default: () => ({}),
    },
    admin: {
        type: Object,
        default: () => ({}),
        default: {},
    },
});

// Default SortableJS
import Sortable from "sortablejs";

onMounted(() => {
    // Build the parents
    let children = document.querySelectorAll("#item-children");
    buildShortable(children, "children");

    let parent = document.querySelectorAll("#item-parent");
    buildShortable(parent, "parent");
});

const buildShortable = (elements, group) => {
    for (const [key, value] of Object.entries(elements)) {
        Sortable.create(value, {
            group: {
                name: group,
                pull: true,
                put: true,
            },
            fallbackOnBody: true,
            invertSwap    : true,
            swapThreshold : 0.65,
            sort          : false,
            animation     : 150,
            ghostClass    : "bg-primary",       // Class name for the drop placeholder
            chosenClass   : "border-sky-500",   // Class name for the chosen item
            dragClass     : "bg-primary",       // Class name for the dragging item
        });
    }
};
</script>
