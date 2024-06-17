<!-- eslint-disable no-undef -->
<!-- eslint-disable no-undef -->
<template>
    <div
        class="rounded-lg p-5 cursor-pointer flex flex-col justify-end"
        :class="cardStyle"
    >
        <img :src="record.media[0].url.default" alt="mockup" />
        <h1
            class="max-w-2xl mb-4 text-lg md:text-3xl font-extrabold tracking-tight leading-none text-neutral"
        >
            {{ record.title }}
        </h1>
        <div class="flex flex-row justify-between">
            <div class="flex flex-row text-neutral">
                <AcademicCapIcon class="h-5 w-5 text-neutral" />
                <p class="ml-1">14 lessons</p>
            </div>
            <div class="flex flex-row text-neutral">
                <ClockIcon class="h-5 w-5 text-neutral" />
                <p class="ml-1">15 h</p>
            </div>
        </div>
        <button
            class="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white fancy-background04 rounded-lg group mt-5"
            @click="openCourse"
        >
            <span
                class="absolute w-0 h-0 transition-all duration-500 ease-out bg-primary rounded-full group-hover:w-full group-hover:h-56"
            />
            <span
                class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"
            />
            <span class="relative flex justify-between font-bold text-lg">
                <PlayIcon v-if="!mouseEnter" class="w-5 mr-4" />Start series
            </span>
        </button>
        <span
            v-if="record.card_style == 'new'"
            class="absolute top-0 left-0 m-2 py-1 px-3 bg-black bg-opacity-60 text-indigo-400 uppercase text-xs font-bold rounded shadow-md ring-1 ring-indigo-400 ring-opacity-50"
        >
            NEW
        </span>
    </div>
</template>

<script setup lang="ts">
import { PropType, computed } from "vue";
import { AcademicCapIcon, ClockIcon, PlayIcon } from "@heroicons/vue/24/solid";
import { router } from "@inertiajs/vue3";
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

let mouseEnter = $ref(false);
</script>
