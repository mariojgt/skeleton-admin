<!-- eslint-disable no-undef -->
<template>
    <a
        class="relative rounded-lg cursor-pointer flex flex-col justify-end duration-300 text-neutral hover:transform hover:scale-105"
        :class="cardStyle"
        href="#"
        @click="openCourse"
    >
        <ribbon :top="true" :left="false" color="orange" v-if="record.is_free">
            <div class="text-black font-bold">Free</div>
        </ribbon>
        <ribbon :top="true" :left="false" color="green" v-else >
            Premium
        </ribbon>

        <img :src="record.media[0].url.default" alt="mockup" />

        <div class="mt-5 p-2" >
            <div class="flex flex-row justify-between">
                <div class="flex flex-row">
                    <AcademicCapIcon class="h-5 w-5 text-neutral" />
                    <p class="ml-1">{{ record.lessons }} lessons</p>
                </div>
                <div class="flex flex-row">
                    <ClockIcon class="h-5 w-5 text-neutral" />
                    <p class="ml-1">{{ record.course_length }}</p>
                </div>
            </div>
            <h1
                class="max-w-2xl mt-2 text-lg md:text-3xl font-extrabold tracking-tight leading-none text-left"
            >
                {{ record.title }}
            </h1>
        </div>
        <diff v-if="displayDifficulty" :dificult-level="record.difficulty_level" />
        <!-- <button
            class="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter bg-primary rounded-lg group mt-5"
        >
            <span
                class="absolute w-0 h-0 transition-all duration-500 ease-out bg-secondary rounded-full group-hover:w-full group-hover:h-56"
            />
            <span
                class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"
            />
            <span class="relative flex justify-between font-bold text-lg">
                <PlayIcon v-if="!mouseEnter" class="w-5 mr-4" />Play
            </span>
        </button> -->
        <span
            v-if="record.card_style == 'new'"
            class="absolute top-0 left-0 m-2 ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-master-200 text-black rounded-full"
        >
            NEW
        </span>
    </a>
</template>

<script setup lang="ts">
import { PropType, computed } from "vue";
import { AcademicCapIcon, ClockIcon, PlayIcon } from "@heroicons/vue/24/solid";
import { router } from "@inertiajs/vue3";
import { course } from "../../../Types/types";
import diff from "./DifficultLevel.vue";
import ribbon from "./Ribbon.vue";

// Props
const props = defineProps({
    record: {
        type: Object as PropType<course>,
        default: () => ({}),
    },
    displayDifficulty: {
        type: Boolean,
        default: true,
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
