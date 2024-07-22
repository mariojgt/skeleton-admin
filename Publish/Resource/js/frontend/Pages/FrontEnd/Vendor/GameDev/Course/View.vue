<template>
    <Layout :show-header="!sideBarOpen">
        <!-- Drawer component -->
        <transition name="slide">
            <div
                v-show="sideBarOpen"
                class="fixed overflow-y-auto top-0 left-0 z-40 p-4 w-full max-w-xs h-screen fancy-background05 master-shadow-lesson-02"
                :class="{
                    'transform translate-x-[width-of-sidebar] transition-transform duration-300':
                        sideBarOpen,
                }"
                tabindex="-1"
                aria-labelledby="drawer-label"
                aria-hidden="true"
            >
                <div class="flex flex-col">
                    <h4
                        id="drawer-label"
                        class="mb-1.5 leading-none text-xl font-semibold text-neutral"
                    >
                        {{ props.course.title }}
                    </h4>
                </div>
                <button
                    type="button"
                    data-drawer-dismiss="readProductDrawer"
                    aria-controls="readProductDrawer"
                    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    @click="sideBarOpen = false"
                >
                    <svg
                        aria-hidden="true"
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                    <span class="sr-only">Close menu</span>
                </button>

                <div class="w-full pt-5">
                    <div class="mx-auto w-full max-w-md rounded-2xl p-2">
                        <Disclosure
                            v-slot="{ open }"
                            v-for="(item, index) in props.sections.data"
                            :key="index"
                        >
                            <DisclosureButton
                                class="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md w-full my-3"
                            >
                                <span
                                    class="h-full bg-gradient-to-br from-[#e92eb7] via-[#3f1043] to-[#f78a38] group-hover:from-[#f78a38] group-hover:via-[#3f1043] group-hover:to-[#e92eb7] absolute w-full"
                                ></span>
                                <span
                                    class="relative px-6 py-3 w-full transition-all ease-out rounded-md group-hover:bg-opacity-0 duration-400 text-left"
                                    :class="
                                        open ? 'bg-opacity-0' : 'bg-gray-900'
                                    "
                                >
                                    <div class="relative flex justify-between">
                                        <div
                                            class="text-white font-bold text-sm"
                                        >
                                            {{ item.name }}
                                        </div>
                                        <div class="flex justify-normal">
                                            <div class="badge badge-accent">
                                                {{ item.children.length }}
                                            </div>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke-width="1.5"
                                                stroke="currentColor"
                                                class="w-6 h-6 transform transition-transform duration-200 ml-3 text-neutral"
                                                :class="{ 'rotate-90': open }"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </span>
                            </DisclosureButton>
                            <DisclosurePanel>
                                <ul class="w-full">
                                    <li
                                        class="w-full hover:scale-110 text-neutral hover:font-comic fancy-border relative inline-flex items-center px-5 py-3 overflow-hidden text-lg font-medium border-2 border-primary hover:text-white group hover:bg-accent my-1 justify-start"
                                        v-for="(item, index) in item.children"
                                        :key="index"
                                        @click="changeLesson(item.id)"
                                    >
                                        <span
                                            class="absolute left-0 block w-full h-0 transition-all bg-secondary opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"
                                        ></span>
                                        <span
                                            class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke-width="1.5"
                                                stroke="currentColor"
                                                class="w-6 h-6 group-hover:block hidden"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                                                />
                                            </svg>
                                        </span>
                                        <div
                                            class="relative flex items-center space-x-4 flex-grow"
                                        >
                                            <div class="flex-shrink-0">
                                                <p
                                                    class="text-sm font-medium truncate"
                                                >
                                                    {{ item.name }}
                                                </p>
                                                <div class="flex justify-start">
                                                    <span
                                                        class="mr-3 inline-flex items-center"
                                                    >
                                                        <svg
                                                            width="15"
                                                            viewBox="0 0 10 10"
                                                            class="text-grey-600/75"
                                                        >
                                                            <g
                                                                fill="none"
                                                                fill-rule="evenodd"
                                                            >
                                                                <g>
                                                                    <g>
                                                                        <g>
                                                                            <g>
                                                                                <path
                                                                                    class="fill-current"
                                                                                    d="M5 2C2.25 2 0 4.25 0 7s2.25 5 5 5 5-2.25 5-5-2.25-5-5-5zm2.282 6.923L4.615 7.318v-3.01h.77v2.608l2.307 1.355-.41.652z"
                                                                                    transform="translate(-978.000000, -378.000000) translate(330.000000, 364.000000) translate(444.000000, 8.000000) translate(204.000000, 4.000000)"
                                                                                ></path>
                                                                            </g>
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </svg>
                                                        <span
                                                            class="ml-1 text-3xs text-grey-600/75 text-3xs font-semibold"
                                                            >{{
                                                                item.lesson_duration
                                                            }}</span
                                                        ></span
                                                    >
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </DisclosurePanel>
                        </Disclosure>
                    </div>
                </div>
            </div>
        </transition>
        <section
            class="bg-base-100 fancy-background04"
            v-if="props.current_lesson?.data"
        >
            <div class="py-8 px-4 mx-auto max-w-screen-2xl lg:py-16">
                <!-- Video section -->
                <VimeoPlayer
                    v-if="props.current_lesson.data.player_type === 'vimeo'"
                    :lessonUrl="props.current_lesson.data.video_url"
                    :lesson-id="props.current_lesson.data.id"
                    :seek="
                        props.current_lesson.data?.lesson_progress?.watch_time
                    "
                    @video-running="trackUserPogress"
                    @video-pause="trackUserPogress"
                    @video-ended="
                        trackUserPogress($event);
                        lessonCompleted($event);
                    "
                    @video-start="trackUserPogress"
                    @video-lesson-points="lessonProgress"
                />

                <Youtube
                    v-if="props.current_lesson.data.player_type === 'youtube'"
                    :videoId="props.current_lesson.data.video_id"
                    :lesson-id="props.current_lesson.data.id"
                    :seek="
                        props.current_lesson.data?.lesson_progress?.watch_time
                    "
                    @video-running="trackUserPogress"
                    @video-pause="trackUserPogress"
                    @video-ended="
                        trackUserPogress($event);
                        lessonCompleted($event);
                    "
                    @video-start="trackUserPogress"
                    @video-lesson-points="lessonProgress"
                />
                <!-- Lesson points -->
                <div
                    v-if="lessonContent"
                    class="my-5 border bg-base-100 border-accent rounded"
                >
                    <div
                        class="max-w-7xl px-10 py-6 mx-auto rounded-lg shadow-md"
                    >
                        <div class="flex items-center justify-between">
                            <div class="flex justify-between gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-6 h-6 text-white"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                <span class="text-lg font-bold text-neutral">
                                    {{ lessonContent.seconds }}s
                                </span>
                            </div>
                            <a
                                class="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500"
                                target="_blank"
                                >Close</a
                            >
                        </div>
                        <div class="mt-2">
                            <a
                                class="text-2xl font-bold text-neutral hover:underline"
                                target="_blank"
                            >
                                {{ lessonContent.title }}
                            </a>
                            <div
                                v-html="lessonContent.content"
                                class="mt-10 fancy-editor"
                            ></div>
                        </div>
                    </div>
                </div>
                <div
                    class=""
                >
                    <h1 class="text-color-h1 text-8xl mb-10">
                        {{ props.current_lesson.data.name }}
                    </h1>
                    <div
                        class="mb-8 text-lg font-normal text-neutral fancy-editor"
                        v-html="props.current_lesson.data.description"
                    ></div>
                </div>
            </div>
        </section>
        <section class="bg-base-100 fancy-background03" v-else>
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
                <div class="card lg:card-side glass-border shadow-xl">
                    <figure>
                        <img
                            :src="props.course.media[0]['url']['default']"
                            :alt="props.course.media[0]['alt']"
                        />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title font-bold text-5xl mb-5">
                            {{ props.course.title }}
                        </h2>
                        <div
                            class="text-lg bg-primary rounded p-3"
                            v-html="props.course.short_description"
                        ></div>
                        <div class="card-actions justify-end mt-3">
                            <a
                                @click="playSeries"
                                href="#"
                                class="inline-flex items-center justify-center h-16 px-10 py-0 text-xl font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-white-600 border-solid rounded-full cursor-pointer select-none hover:text-primary hover:bg-accent hover:border-secondary focus:shadow-xs focus:no-underline"
                            >
                                <div class="flex justify-between">
                                    <div class="mt-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="w-6 h-6"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                                            />
                                        </svg>
                                    </div>
                                    Start Series
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="fixed bottom-4 right-4 z-50" v-if="!sideBarOpen">
            <button
                id="toggleMenu"
                class="btn btn-primary btn-lg btn-circle"
                @click="sideBarOpen = true"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                    />
                </svg>
            </button>
        </div>
        <hr class="theme-divider" />
        <LessonDisplay
            v-if="props.current_lesson?.data"
            :lesson="props.current_lesson?.data"
        />
        <hr class="theme-divider" />
        <section
            class="fancy-background03 p-10"
            v-if="props.current_lesson?.data"
        >
            <div
                class="mx-auto lg:w-full sm:py-16 lg:px-6 bg-base-100 bg-opacity-50 backdrop-blur transition-all duration-100 border rounded-3xl  border-primary"
            >
                <div
                    class="glitch text-6xl mb-4"
                    data-text="Discuss this lesson"
                >
                    Discuss this lesson
                </div>

                <div
                    v-if="props.comments?.data"
                    v-for="(item, index) in props.comments.data"
                    :key="index"
                >
                    <SingleComment
                        :comment="item"
                        @fresh-comments="refreshComments"
                        :keyEditor="props.editor_key"
                    />
                </div>

                <div
                    v-if="
                        usePage().props.isUserAuth && props.current_lesson?.data
                    "
                >
                    <CommentEditor
                        v-if="props.current_lesson.data && postCommentToogle"
                        model-class="lesson"
                        :model-id="props.current_lesson.data.id"
                        :keyEditor="props.editor_key"
                        @fresh-comments="refreshComments"
                    />
                    <button
                        class="btn btn-accent block w-full my-10"
                        @click="postCommentToogle = !postCommentToogle"
                    >
                        Post a comment
                    </button>
                </div>
                <p class="ml-auto text-lg text-neutral">
                    Remember, contributions to this topic should follow our
                    <a href="#" class="text-master-500 hover:underline"
                        >Community Guidelines</a
                    >.
                </p>
            </div>
        </section>
        <hr class="theme-divider" />
        <InstructorDisplay :admin="props.course_instructor?.data" />
        <hr class="theme-divider" />
    </Layout>
</template>

<script setup lnag="ts">
// Import the layout component using the root
import { api } from "../../../../../Boot/axios.js";
import Layout from "@frontend_layout/App.vue";
import CommentEditor from "@frontend_components/FrontEnd/Comment/Comment.vue";
import SingleComment from "@frontend_components/FrontEnd/Comment/CommentsSingle.vue";
import InstructorDisplay from "@frontend_components/FrontEnd/Admin/InstructorDisplay.vue";
import LessonDisplay from "@frontend_components/FrontEnd/Lesson/Lesson.vue";
import VimeoPlayer from "@frontend_components/FrontEnd/VideoPlayer/Vimeo.vue";
import Youtube from "@frontend_components/FrontEnd/VideoPlayer/YouTube.vue";
import confetti from "canvas-confetti";
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
} from "@headlessui/vue";
import { onMounted } from "vue";
import { router, usePage } from "@inertiajs/vue3";

const props = defineProps({
    course: {
        type: Object,
        required: true,
    },
    course_instructor: {
        type: Object,
        required: true,
    },
    sections: {
        type: Array,
        required: true,
    },
    current_lesson: {
        type: Object,
        required: true,
    },
    editor_key: {
        type: String,
        required: true,
    },
    comments: {
        type: Array,
        required: true,
    },
});

const sideBarOpen = $ref(true);
const postCommentToogle = $ref(false);

const changeLesson = async (lessonId) => {
    // Change the lesson and only request to laod the current_lesson variable
    router.get(
        route("course.view", { slug: props.course.slug, lesson: lessonId }),
        {
            // Make sure 'id' key is present
            preserveState: true,
            preserveScroll: true,
            only: ["current_lesson"],
        }
    );
};

const refreshComments = () => {
    setTimeout(() => {
        router.reload({ only: ["comments"] });
    }, 1000);
};

// Video information sync
const trackUserPogress = async (videoRunTime) => {
    // Only track if the user is authenticated
    if (usePage().props.isUserAuth) {
        // on submit we clear the comment
        await router.post(
            route("track.lesson.progress", {
                lesson: props.current_lesson.data.id,
            }),
            {
                progress: videoRunTime,
            },
            {
                preserveState: true,
                preserveScroll: true,
                only: ["current_lesson"],
            }
        );
    }
};

// Little effect when the user completes a lesson
const lessonCompleted = async (videoRunTime) => {
    confetti({
        particleCount: 100,
        spread: 100,
        origin: { y: 0.6 },
    });
};

let lessonProgressRunTime = $ref(null);
let lessonContent = $ref(null);

const lessonProgress = async (videoRunTime) => {
    if (usePage().props.isUserAuth) {
        lessonProgressRunTime = videoRunTime;
        await api
            .post(
                route(
                    "track.lesson.points.progress",
                    props.current_lesson.data.id
                ),
                {
                    seconds: lessonProgressRunTime,
                }
            )
            .then(function (response) {
                if (response.data.status) {
                    lessonContent = response.data.lessonPoint;
                }
                // emit("updateLesson");
                // message.success('Learning point saved');
            });
    }
};

/**
 * Plays the course series.
 * @async
 * @function playSeries
 * @returns {Promise<void>}
 */
const playSeries = async () => {
    if (props.sections?.data[0]?.children[0]?.id) {
        changeLesson(props.sections.data[0].children[0].id);
    }
};
</script>

<style>
/* Starting state (element is added to the DOM) */
.slide-enter-active,
.slide-leave-active {
    transition: transform 0.3s ease-in-out;
}

.slide-enter,
.slide-leave-to {
    /* .slide-leave-active in <2.6 */
    transform: translateX(-100%);
}
</style>
