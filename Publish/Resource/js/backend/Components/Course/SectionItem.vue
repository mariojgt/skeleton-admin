<template>
    <div
        class="flex flex-col p-2 border shadow-md rounded-2xl mt-3"
        :class="hasUpdates"
    >
        <div class="flex flex-col">
            <div class="flex items-center justify-between">
                <div class="flex items-center justify-start">
                    <div
                        class="w-16 h-16 rounded-2xl border border-primary text-neutral bg-secondary flex justify-center"
                    >
                        <h1 class="p-4 text-xl">
                            {{ section.order }}
                        </h1>
                    </div>
                    <div class="flex flex-col ml-3 p-5">
                        <div
                            class="font-bold leading-none text-primary text-xl"
                        >
                            {{ section?.name }}
                        </div>
                    </div>
                </div>
                <div
                    class="flex items-center justify-between space-x-2 p-2 bg-neutral rounded-2xl gap-2"
                >
                    <button class="btn btn-success">Preview</button>
                    <button class="btn btn-secondary" @click="toogleField">
                        Edit
                    </button>
                    <button
                        class="btn btn-error"
                        @click="sectionDelete(section)"
                    >
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
                            <span class="text-lg">section main settings</span>
                        </DisclosureButton>
                        <DisclosurePanel
                            class="px-4 pt-4 pb-2 bg-base-100 rounded-lg mt-5 border border-primary"
                        >
                            <input-field
                                v-model="section.name"
                                type="text"
                                label="section name"
                                @change="sectionUpdate"
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
                            <span class="text-lg">Lessons</span>
                        </DisclosureButton>
                        <DisclosurePanel
                            class="px-4 pt-4 pb-2 border rounded-lg mt-5"
                        >
                            <section class="bg-base-300 rounded-lg">
                                <div class="py-8 lg:py-16 px-4 mx-auto w-full">
                                    <div class="flex justify-between">
                                        <h2
                                            class="mb-4 text-4xl tracking-tight font-extrabold text-center text-primary"
                                        >
                                            Lesson Structure
                                        </h2>
                                        <div class="flex justify-between">
                                            <button
                                                class="btn btn-primary"
                                                @click="addLessonModal = true"
                                            >
                                                Add
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <draggable
                                    v-model="lessons"
                                    :animation="300"
                                    tag="div"
                                    item-key="order"
                                    @change="updateOrder"
                                >
                                    <template #item="{ element: item }">
                                        <LessonItem
                                            :apiKey="props.apiKey"
                                            :lesson="item"
                                            @lesson-update="lessonUpdate"
                                            @save="saveContent"
                                            @lesson-delete="lessonDelete"
                                        />
                                    </template>
                                </draggable>
                            </section>
                        </DisclosurePanel>
                    </Disclosure>
                </div>
                <button
                    class="btn bg-success text-neutral hover:bg-secondary mt-5"
                    @click="$emit('save', section)"
                >
                    Save
                </button>
            </div>
        </div>
        <reusable-modal
            :show="addLessonModal"
            @close="addLessonModal = false"
            @confirm="addNewLesson"
        >
            <template #title>
                <h3
                        class="text-lg text-left font-bold text-primary"
                    >
                    Add new lesson
                </h3>
            </template>
            <template #body>
                <div class="mt-2">
                    <input-field
                        v-model="lessonVideoUrl"
                        type="text"
                        label="Video Id"
                    />
                    <SelectInput
                        v-model="lessonVideoType"
                        :options="
                            {
                                youtube: 'Youtube',
                                vimeo: 'Vimeo',
                            }
                        "
                        label="Video Type"
                    />
                </div>
            </template>
        </reusable-modal>
    </div>
</template>

<script setup lang="ts">
import { watch, onMounted, computed, ref} from "vue";
import { CogIcon, BookOpenIcon } from "@heroicons/vue/24/solid";
import draggable from "vuedraggable";
import LessonItem from "@backend_components/Course/LessonItem.vue";
import { router } from "@inertiajs/vue3";
import { InputField, ReusableModal, SelectInput } from "@mariojgt/masterui/packages/index";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";

let isOpen = $ref(false);
let addLessonModal = $ref(false);

const toogleField = async () => {
    isOpen = !isOpen;
};

const props = defineProps({
    course: {
        type: Object,
        default: null,
    },
    section: {
        type: Object,
        default: null,
    },
    sectionKey: {
        type: Number,
        default: null,
    },
    apiKey: {
        type: String,
        default: null,
    },
});

// Create data computed property
const hasUpdates = computed(() => {
    if (props.section?.updated) {
        return "border-error";
    } else {
        return "border-primary";
    }
});

// trigger event start
// Create a event that we goin to trigger on the store
const emit = defineEmits([
    "save",
    "sectionUpdate",
    "sectionDelete",
    "lessonUpdate",
    "lessonDelete",
]);

const sectionUpdate = async () => {
    emit("sectionUpdate", props.section);
};

const sectionDelete = async () => {
    emit("sectionDelete", props.section);
};

let lessons = $ref([]);

// Update the order
const updateOrder = async (event) => {
    // loop the array and update the order
    let tempArray = lessons;
    for (let index = 0; index < lessons.length; index++) {
        tempArray[index].order = index + 1;
    }
    lessons = tempArray;

    router.post(route("gamedev.lesson.sync", props.section.id), {
        lessons: lessons,
    });
};

let lessonVideoUrl = $ref("");
let lessonVideoType = $ref("vimeo");

// Add new lesson
const addNewLesson = async () => {
    addLessonModal = false;
    router.post(
        route("gamedev.lesson.store", props.section.id),
        {
            title:
                "Lesson " +
                (lessons.length + 1) +
                " " +
                props.section.name.toLowerCase(),
            video_url: lessonVideoUrl,
            video_type: lessonVideoType,
            order: lessons.length + 1,
        },
        { preserveState: true }
    );
};

const saveContent = async (lesson) => {
    // Find the lesson bases in the id and add a key that we goin to use to warn the user that the lesson has been updated
    let tempArray = lessons;
    for (let index = 0; index < lessons.length; index++) {
        if (tempArray[index].id == lesson.id) {
            tempArray[index].updated = false;
        }
    }
    router.post(route("gamedev.update.lesson", lesson.id), {
        lesson: lesson,
    });
    emit("lessonUpdate", lesson);
};

// This function is just to ward the user that the lesson has been updated and need to be saved
const lessonUpdate = async (lesson) => {
    // Find the lesson bases in the id and add a key that we goin to use to warn the user that the lesson has been updated
    let tempArray = lessons;
    for (let index = 0; index < lessons.length; index++) {
        if (tempArray[index].id == lesson.id) {
            tempArray[index].updated = true;
        }
    }
};

const lessonDelete = async (lesson) => {
    emit("lessonDelete", lesson);
};

onMounted(() => {
    // console.log(props.section);
    lessons = props.section.children;
});

watch(
    () => props.section,
    (value) => {
        console.log("watch");
        lessons = value.children;
    }
);
</script>
