<template>
    <div
        class="items-center rounded-lg shadow sm:flex transform transition duration-500 hover:scale-110 cursor-pointer"
        :class="cardStyle"
        @click="openCourse"
    >
    <a v-if="record.media" href="#">
            <img
                class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                :src="record.media[0].url.default"
                :alt="record.media[0].alt"
            >
        </a>
        <div class="p-5">
            <h3 class="text-xl font-bold tracking-tight text-neutral">
                <a href="#">{{ record.title }}</a>
            </h3>
            <div
                class="mt-3 mb-4 text-neutral"
                v-html="record.short_description"
            />
            <ul class="flex space-x-4 sm:mt-0 justify-center">
                <li>
                    <a href="#" class="text-neutral flex gap-2">
                        <AcademicCapIcon class="w-5 h-5" />
                        70 lessons
                    </a>
                </li>
                <li>
                    <a href="#" class="text-neutral flex gap-2">
                        <ClockIcon class="w-5 h-5" />
                        2h 20m
                    </a>
                </li>
            </ul>
            <diff :dificult-level="record.difficulty_level" />
            <span
                v-if="record.card_style == 'new'"
                class="absolute top-0 left-0 m-2 py-1 px-3 bg-black bg-opacity-60 text-indigo-400 uppercase text-xs font-bold rounded shadow-md ring-1 ring-indigo-400 ring-opacity-50"
            >
                NEW
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { PropType, computed } from "vue";
import { AcademicCapIcon, ClockIcon } from "@heroicons/vue/24/solid";
import { router } from "@inertiajs/vue3";
import diff from "./DifficultLevel.vue";
import { course } from "../../../Types/types";

// Props
const props = defineProps({
    record: {
        type: Object as PropType<course>,
        default: () => ({}),
    },
});

// Create data computed property
const cardStyle = computed(() => {
    switch (props.record.card_style) {
        case "normal":
            return "lesson-series-01 master-shadow-lesson-01 border-2 border-indigo-200 border-animated-green";
        case "featured":
            return "lesson-series-02 master-shadow-lesson-02 border-2 border-red-300";
        case "popular":
            return "lesson-series-03 master-shadow-lesson-03 border-2 border-yellow-200 border-animated-orange";
        case "new":
            return "lesson-series-04 master-shadow-lesson-04 border-2 border-animated-pink";
        default:
            return "bg-base-100 border-2 border-neutral border-animated-blue";
    }
});

const openCourse = async () => {
    router.visit(route("course.view", props.record.slug));
};
</script>
