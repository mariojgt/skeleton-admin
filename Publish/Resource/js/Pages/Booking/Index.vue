<template>
    <Layout>
        <div class="lg:p-10 xl:grid-cols-12 lg:bg-base-200 rounded-box">
            <div
                class="card col-span-1 row-span-3 shadow-lg xl:col-span-2 bg-base-100"
            >
                <div class="overflow-x-auto">
                    <table class="table w-full">
                        <thead>
                            <tr>
                                <th>Monday</th>
                                <th>Tuesday</th>
                                <th>Wednesday</th>
                                <th>Thursday</th>
                                <th>Friday</th>
                                <th>Saturday</th>
                                <th>Sunday</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="text-center h-20" v-for="(days, key) in calendarData" :key="key" >
                                <th
                                    class="p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300"
                                    v-for="(item, index) in days"
                                    :key="index"
                                >
                                    <div
                                        class="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden"
                                    >
                                        <div class="top h-5 w-full">
                                            <div
                                                class="badge mx-2 badge-secondary"
                                            >
                                                {{ item.day }}
                                            </div>
                                        </div>
                                        <div
                                            id="movable-item"
                                            class="bottom flex-grow h-30 py-1 w-full cursor-pointer"
                                        >
                                            <!-- Item event -->
                                            <div
                                                class="event bg-purple-400 text-white rounded p-1 text-sm mb-1"
                                            >
                                                <span class="event-name">
                                                    {{ item.day_of_the_week }}
                                                </span>
                                                <span class="time">
                                                    {{ item.date }}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </Layout>
</template>

<script setup>
import { Inertia } from "@inertiajs/inertia";
import { onMounted, watch } from "vue";
import { Link } from "@inertiajs/inertia-vue3";
import Layout from "../../Layout/Backend.vue";

const props = defineProps({
    autenticator: {
        type: Object,
        default: () => ({}),
    },
    calendarDays: {
        type: Object,
        default: () => ({}),
        default: {},
    },
});

// Calendar build
let calendarData = $ref([]);

const buildCalendar = () => {
    let count    = 0;
    let daysPack = {};
    // Loop the calendar days and each 7 days to build the calendar
    for (const [key, value] of Object.entries(props.calendarDays)) {
        daysPack[key] = value;
        count++;
        if (count === 7) {
            calendarData.push(daysPack);
            daysPack = {};
            count = 0;
        }
    }
};

buildCalendar();

// Default SortableJS
import Sortable from "sortablejs";

onMounted(() => {
    let dragAndDropElements = document.querySelectorAll("#movable-item");
    for (const [key, value] of Object.entries(dragAndDropElements)) {
        Sortable.create(value, {
            group: {
                name: "shared",
                put: true,
            },
            fallbackOnBody: true,
            sort: false,
            animation: 150,
            onAdd: function (event) {
                console.log(event.item.innerText);
            },
        });
    }
});
</script>
