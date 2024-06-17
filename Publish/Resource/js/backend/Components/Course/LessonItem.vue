<template>
    <div
        class="flex flex-col p-2 border-2 hover:border-secondary shadow-md hover:shodow-lg rounded-2xl mt-3"
        :class="hasUpdates"
    >
        <div class="flex flex-col">
            <div class="flex items-center justify-between">
                <div class="flex items-center justify-start">
                    <div
                        class="w-16 h-16 rounded-2xl border border-primary text-neutral bg-secondary flex justify-center"
                    >
                        <h1 class="p-4 text-xl">
                            {{ lesson.order }}
                        </h1>
                    </div>
                    <div class="flex flex-col ml-3 p-5">
                        <div
                            class="font-medium leading-none text-neutral text-xl"
                        >
                            {{ lesson?.name }}
                        </div>
                        <p class="text-sm text-neutral leading-none mt-1">
                            5 start rating
                        </p>
                    </div>
                </div>
                <div
                    class="btn-group btn-group-horizontal lg:btn-group-horizontal"
                >
                    <button class="btn btn-accent" @click="suggestSlug">
                        Create Slug
                    </button>
                    <button class="btn btn-secondary" @click="toogleField">
                        Edit
                    </button>
                    <button class="btn btn-error" @click="lessonDelete(lesson)">
                        Delete
                    </button>
                </div>
            </div>
            <div v-if="isOpen" class="flex flex-col">
                <div class="mx-auto w-full rounded-2xl bg-base-300 p-2 mt-5">
                    <Disclosure>
                        <DisclosureButton
                            class="flex w-full justify-start rounded-lg bg-secondary px-4 py-2 text-left text-sm font-medium text-neutral hover:bg-primary focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                        >
                            <CogIcon
                                class="h-8 w-8 text-neutral"
                                aria-hidden="true"
                            />
                            <span class="text-lg">Lesson main settings</span>
                        </DisclosureButton>
                        <DisclosurePanel
                            class="px-4 pt-4 pb-2 bg-secondary rounded-lg mt-5"
                        >
                            <input-field
                                v-model="lesson.name"
                                type="text"
                                label="Lesson name"
                                @change="lessonUpdate"
                            />
                            <input-field
                                v-model="lesson.slug"
                                type="text"
                                label="Lesson slug"
                                @change="lessonUpdate"
                            />
                            <input-field
                                v-model="lesson.video_url"
                                type="text"
                                label="Video Link"
                                @change="lessonUpdate"
                            />
                            <input-field
                                v-model="lesson.lesson_duration"
                                type="text"
                                label="Lesson duration"
                                @change="lessonUpdate"
                            />
                        </DisclosurePanel>
                    </Disclosure>
                    <Disclosure as="div" class="mt-4">
                        <DisclosureButton
                            class="flex w-full justify-start rounded-lg bg-secondary px-4 py-2 text-left text-sm font-medium text-neutral hover:bg-primary focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                        >
                            <BookOpenIcon
                                class="h-8 w-8 text-neutral"
                                aria-hidden="true"
                            />
                            <span class="text-lg">Lesson description</span>
                        </DisclosureButton>
                        <DisclosurePanel
                            class="px-4 pt-4 pb-2 bg-secondary rounded-lg mt-5"
                        >
                            <Editor
                                v-model="lesson.description"
                                :api-key="props.editorApiKey"
                            />
                        </DisclosurePanel>
                    </Disclosure>
                    <Disclosure as="div" class="mt-4">
                        <DisclosureButton
                            class="flex w-full justify-start rounded-lg bg-secondary px-4 py-2 text-left text-sm font-medium text-neutral hover:bg-primary focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                            @click="loadReloadLessonsPoints"
                        >
                            <ClipboardDocumentListIcon
                                class="h-8 w-8 text-neutral"
                                aria-hidden="true"
                            />
                            <span class="text-lg">Leaning points</span>
                        </DisclosureButton>
                        <DisclosurePanel
                            class="px-4 pt-4 pb-2 bg-secondary rounded-lg mt-5"
                        >
                            <div class="flex justify-between mb-5">
                                <div class="flex justify-between">
                                    <h1
                                        class="text-5xl leading-6 font-bold text-neutral pr-5"
                                    >
                                        Learning points
                                    </h1>
                                    <button class="btn">
                                        <div class="badge badge-secondary">
                                            {{ lesson.lesson_duration }}
                                        </div>
                                        Lesson time
                                    </button>
                                </div>
                            </div>

                            <!-- Video section -->
                            <div
                                class="p-4 mx-auto bg-base-300 rounded-lg flex flex-col items-center"
                            >
                                <VimeoPlayer
                                    width="1200"
                                    height="600"
                                    :lesson-url="lesson.video_url"
                                    :lesson-id="lesson.id"
                                    :seek="lesson?.lesson_progress?.watch_time"
                                    class-video="mb-5"
                                    @video-lesson-points="lessonProgress"
                                />
                                <button
                                    class="btn mb-3 w-full btn-primary"
                                    @click="copyToClipboard"
                                >
                                    <div class="badge badge-secondary">
                                        {{ lessonProgressSeconds }}
                                    </div>
                                    Copy seconds to clipboard
                                </button>

                                <button
                                    class="btn btn-secondary w-full"
                                    @click="toogleNewLessonPointModal"
                                >
                                    <div class="badge badge-primary p-3">
                                        Add new entry
                                    </div>
                                </button>
                                <AddEditLearningPoint
                                    v-if="addLessonPointModal"
                                    class="mt-5"
                                    :lesson="lesson"
                                    :editor_key="props.editorApiKey"
                                    @update-lesson="loadReloadLessonsPoints"
                                />
                            </div>
                            <LessonItemContent
                                :lesson-points="lessonPoints"
                                :lesson="lesson"
                                :editor_key="props.editorApiKey"
                                @update-lesson="loadReloadLessonsPoints"
                            />
                        </DisclosurePanel>
                    </Disclosure>
                    <Disclosure as="div" class="mt-4">
                        <DisclosureButton
                            class="flex w-full justify-start rounded-lg bg-secondary px-4 py-2 text-left text-sm font-medium text-neutral hover:bg-primary focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                            @click="commentExapand"
                        >
                            <ClipboardDocumentListIcon
                                class="h-8 w-8 text-neutral"
                                aria-hidden="true"
                            />
                            <span class="text-lg">Lesson comments</span>
                        </DisclosureButton>
                        <DisclosurePanel
                            class="px-4 pt-4 pb-2 bg-secondary rounded-lg mt-5"
                        >
                            <div
                                v-for="(item, index) in comments"
                                v-if="comments"
                                :key="index"
                            >
                                <SingleComment
                                    :comment="item"
                                    :key-editor="props.editorApiKey"
                                    @fresh-comments="refreshComments"
                                />
                            </div>
                        </DisclosurePanel>
                    </Disclosure>
                </div>
                <button
                    class="btn bg-accent text-black hover:bg-success mt-5"
                    @click="$emit('save', lesson)"
                >
                    Save
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { api } from "../../Boot/axios.js";
import { watch, computed, ref } from "vue";
import {
    CogIcon,
    BookOpenIcon,
    ClipboardDocumentListIcon,
} from "@heroicons/vue/24/solid";
import SingleComment from "@frontend_components/FrontEnd/Comment/CommentsSingle.vue";
import VimeoPlayer from "@frontend_components/FrontEnd/VideoPlayer/Vimeo.vue";
import LessonItemContent from "./LessonItemContent.vue";
import { useMessage } from "naive-ui";
const message = useMessage();
import AddEditLearningPoint from "./AddEditLearningPoint.vue";
// Import the from components
import { InputField } from "@mariojgt/masterui/packages/index";
import Editor from "@backend_components/Editor/Editor.vue";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";

let isOpen = $ref(false);
let comments = $ref([]);

const toogleField = async () => {
    isOpen = !isOpen;
};

const props = defineProps({
    lesson: {
        type: Object,
        default: null,
    },
    lessonKey: {
        type: Number,
        default: null,
    },
    editorApiKey: {
        type: String,
        default: null,
    },
});

// Create data computed property
const hasUpdates = computed(() => {
    if (props.lesson?.updated) {
        return "border-error bg-warning";
    } else {
        return "border-success bg-base-100";
    }
});

// trigger event start
// Create a event that we goin to trigger on the store
const emit = defineEmits(["save", "lessonUpdate", "lessonDelete"]);

const lessonUpdate = async () => {
    emit("lessonUpdate", props.lesson);
};

const lessonDelete = async () => {
    emit("lessonDelete", props.lesson);
};

// watch lesson description changes
watch(
    () => props.lesson.description,
    async (newValue, oldValue) => {
        if (newValue !== oldValue) {
            props.lesson.updated = true;
            lessonUpdate();
        }
    }
);

// watch lesson learning points changes
watch(
    () => props.lesson.learning_points,
    async (newValue, oldValue) => {
        if (newValue !== oldValue) {
            props.lesson.updated = true;
            lessonUpdate();
        }
    }
);

// Create a function that will transform the name to a slug
const suggestSlug = async () => {
    props.lesson.slug = slugify(props.lesson.name);
    lessonUpdate();
};
// Create the slugify function
const slugify = (text) => {
    return text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, "-") // Replace spaces with -
        .replace(/[^\w-]+/g, "") // Remove all non-word chars
        .replace(/--+/g, "-") // Replace multiple - with single -
        .replace(/^-+/, "") // Trim - from start of text
        .replace(/-+$/, ""); // Trim - from end of text
};

const commentExapand = async () => {
    await api
        .get(route("gamedev.course.lesson.comments", props.lesson.id))
        .then(function (response) {
            comments = response.data.comments;
            // message.success('asdasdasd');
        })
        .catch(function (error) {});
};

const refreshComments = async () => {
    setTimeout(() => {
        commentExapand();
    }, 1000);
};

// Add new lesson point modal
let addLessonPointModal = $ref(false);
let lessonProgressSeconds = $ref(0);

const toogleNewLessonPointModal = async () => {
    if (addLessonPointModal) {
        addLessonPointModal = false;
    } else {
        addLessonPointModal = true;
    }
};

const lessonProgress = async (progress) => {
    // Remove the last fraction of the number
    progress = progress.toString().split(".")[0];
    lessonProgressSeconds = progress;
};

const copyToClipboard = async () => {
    let text = lessonProgressSeconds;
    if (navigator.clipboard) {
        try {
            await navigator.clipboard.writeText(text);
            message.success("Copied to clipboard");
        } catch (err) {
            console.error("Failed to copy: ", err);
        }
    } else {
        // Fallback for browsers that don't support navigator.clipboard
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.top = "0";
        textarea.style.left = "0";
        textarea.style.position = "fixed";
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();

        try {
            const successful = document.execCommand("copy");
            if (successful) {
                message.success("Copied to clipboard");
            } else {
                message.error("Failed to copy");
            }
        } catch (err) {
            console.error("Fallback copy method failed: ", err);
        }

        document.body.removeChild(textarea);
    }
};

let lessonPoints = $ref([]);
const loadReloadLessonsPoints = async () => {
    await api
        .get(route("gamedev.lesson.point.index", props.lesson.id))
        .then(function (response) {
            lessonPoints = response.data.data;
        });
};
</script>
