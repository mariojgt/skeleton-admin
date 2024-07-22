<template>
    <Layout>
        <div class="px-5 py-7 w-full bg-base-100">
            <TabGroup>
                <TabList
                    class="flex space-x-1 rounded-xl bg-base-100 p-2 tabs font-bold"
                >
                    <Tab v-slot="{ selected }">
                        <a
                            class="tab tab-lg tab-bordered rounded-md bg-neutral"
                            :class="selected ? 'bg-primary text-black' : ''"
                            >Display Information</a
                        >
                    </Tab>
                    <Tab v-slot="{ selected }">
                        <a
                            class="tab tab-lg tab-bordered rounded-md bg-neutral"
                            :class="selected ? 'bg-primary text-black' : ''"
                            >Lesson</a
                        >
                    </Tab>
                </TabList>
                <TabPanels class="mt-2">
                    <TabPanel>
                        <div>
                            <h2
                                class="mb-4 text-4xl tracking-tight font-extrabold text-center text-neutral-content"
                            >
                                Edit {{ props.course.data.title }}
                            </h2>
                            <form
                                class="bg-base-100 backdrop-blur transition-all duration-100 shadow-md rounded px-8 pt-6 pb-8 mb-4"
                                @submit.prevent="submit"
                            >
                                <div class="w-full">
                                    <div
                                        class="mx-auto w-full rounded-2xl bg-base-300 p-2"
                                    >
                                        <Disclosure v-slot="{ open }">
                                            <DisclosureButton
                                                class="flex w-full justify-between rounded-lg bg-secondary p-2 text-left text-lg font-medium text-black hover:bg-primary mb-2"
                                            >
                                                <span>Course Information</span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke-width="1.5"
                                                    stroke="currentColor"
                                                    class="size-6"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                                    />
                                                </svg>
                                            </DisclosureButton>
                                            <DisclosurePanel
                                                class="px-4 pb-2 pt-4 text-sm"
                                            >
                                                <input-field
                                                    v-model="form.title"
                                                    type="text"
                                                    label="Title"
                                                />
                                                <input-field
                                                    v-model="form.slug"
                                                    type="text"
                                                    label="Slug"
                                                />
                                                <TextMultipleSelector
                                                    v-model="form.category_id"
                                                    :label="
                                                        props
                                                            .dynamicCategorySearch
                                                            .label
                                                    "
                                                    placeholder="search"
                                                    :model="
                                                        props
                                                            .dynamicCategorySearch
                                                            .model
                                                    "
                                                    :columns="
                                                        props
                                                            .dynamicCategorySearch
                                                            .columns
                                                    "
                                                    :single-mode="
                                                        props
                                                            .dynamicCategorySearch
                                                            .singleSearch
                                                    "
                                                    :load-data="
                                                        selected_category.data
                                                    "
                                                    :endpoint="
                                                        props
                                                            .dynamicCategorySearch
                                                            .endpoint
                                                    "
                                                />

                                                <Image
                                                    v-model="form.course_image"
                                                    label="image"
                                                    placeholder="search"
                                                    :load-data="
                                                        form.course_image
                                                    "
                                                    :endpoint="
                                                        props.image_search_endpoint
                                                    "
                                                />
                                            </DisclosurePanel>
                                        </Disclosure>
                                        <Disclosure v-slot="{ open }">
                                            <DisclosureButton
                                                class="flex w-full justify-between rounded-lg bg-secondary p-2 text-left text-lg font-medium text-black hover:bg-primary mb-2"
                                            >
                                                <span>Course Settings</span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke-width="1.5"
                                                    stroke="currentColor"
                                                    class="size-6"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                                    />
                                                </svg>
                                            </DisclosureButton>
                                            <DisclosurePanel
                                                class="px-4 pb-2 pt-4 text-sm bg-base-300"
                                            >
                                                <Toggle
                                                    v-model="form.is_free"
                                                    label="Is Free"
                                                />
                                                <Toggle
                                                    v-model="form.is_published"
                                                    label="Is published"
                                                />
                                                <Toggle
                                                    v-model="form.is_popular"
                                                    label="Is popular"
                                                />

                                                <SelectInput
                                                    v-model="form.card_style"
                                                    :options="
                                                        props.course_style_options
                                                    "
                                                    label="Card style"
                                                />

                                                <SelectInput
                                                    v-model="
                                                        form.difficulty_level
                                                    "
                                                    :options="
                                                        props.difficulty_level
                                                    "
                                                    label="Dificulty level"
                                                />
                                            </DisclosurePanel>
                                        </Disclosure>
                                        <Disclosure v-slot="{ open }">
                                            <DisclosureButton
                                                class="flex w-full justify-between rounded-lg bg-secondary p-2 text-left text-lg font-medium text-black hover:bg-primary"
                                            >
                                                <span>Course Description</span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke-width="1.5"
                                                    stroke="currentColor"
                                                    class="size-6"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                                    />
                                                </svg>
                                            </DisclosureButton>
                                            <DisclosurePanel
                                                class="px-4 pb-2 pt-4 text-sm bg-base-300"
                                            >
                                                <div>
                                                    <label class="label">
                                                        <span
                                                            class="block text-lg font-bold mb-2"
                                                            >Short
                                                            Description</span
                                                        >
                                                    </label>
                                                    <Editor
                                                        v-model="
                                                            form.short_description
                                                        "
                                                        :api-key="
                                                            props.editorKey
                                                        "
                                                        :init="{
                                                            plugins:
                                                                'lists link image table code help wordcount',
                                                        }"
                                                    />
                                                </div>
                                                <div>
                                                    <label class="label">
                                                        <span
                                                            class="block text-lg font-bold mb-2"
                                                            >Description</span
                                                        >
                                                    </label>
                                                    <Editor
                                                        v-model="form.content"
                                                        :api-key="
                                                            props.editorKey
                                                        "
                                                        :init="{
                                                            plugins:
                                                                'lists link image table code help wordcount',
                                                        }"
                                                    />
                                                </div>
                                            </DisclosurePanel>
                                        </Disclosure>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    class="btn btn-secondary mt-10 block w-full"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div class="bg-primary text-neutral-content p-4 rounded-lg">
                            <div class="flex justify-between">
                                <h2
                                    class="mb-4 text-4xl tracking-tight font-extrabold text-center"
                                >
                                    Sections
                                </h2>
                                <button
                                    class="btn btn-secondary"
                                    @click="addNewSection"
                                >
                                    Add
                                </button>
                            </div>
                        </div>
                        <draggable
                            v-model="courseSections.data"
                            :animation="300"
                            tag="div"
                            item-key="order"
                            @change="updateSectionOrder"
                        >
                            <template #item="{ element: item }">
                                <SectionItem
                                    :api-key="props.editorKey"
                                    :course="props.course"
                                    :section="item"
                                    @section-update="sectionUpdate"
                                    @save="saveSectionContent"
                                    @section-delete="sectionDelete"
                                    @lesson-delete="deleteLesson"
                                />
                            </template>
                        </draggable>
                    </TabPanel>
                </TabPanels>
            </TabGroup>
        </div>
    </Layout>
</template>

<script setup lang="ts">
// Import the layout component using the root
import Layout from "@backend_layout/App.vue";
import SectionItem from "@backend_components/Course/SectionItem.vue";
import {
    TabGroup,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from "@headlessui/vue";
import { router } from "@inertiajs/vue3";
import { watch, onMounted } from "vue";
// Default SortableJS
import draggable from "vuedraggable";
// Import the from components
import {
    InputField,
    SelectInput,
    TextMultipleSelector,
    Image,
    Toggle,
} from "@mariojgt/masterui/packages/index";

import Editor from "@backend_components/Editor/Editor.vue";

const props = defineProps({
    course: {
        type: Object,
        default: () => [],
    },
    editorKey: {
        type: String,
        default: null,
    },
    edit_route: {
        type: String,
        default: null,
    },
    dynamicCategorySearch: {
        type: Object,
        default: () => [],
    },
    selected_category: {
        type: Object,
        default: () => [],
    },
    lessons: {
        type: Object,
        default: () => [],
    },
    sections: {
        type: Object,
        default: () => [],
    },
    course_style_options: {
        type: Array,
        default: () => [],
    },
    difficulty_level: {
        type: Array,
        default: () => [],
    },
    image_search_endpoint: {
        type: String,
        default: null,
    },
});

watch(
    () => props.sections,
    (value) => {
        courseSections = value;
    }
);

onMounted(() => {
    courseSections = props.sections;
});

const form = $ref({
    title: props.course.data.title,
    slug: props.course.data.slug,
    content: props.course.data.content,
    is_published: props.course.data.is_published,
    is_popular: props.course.data.is_popular,
    is_free: props.course.data.is_free,
    category_id: props.course.data.category_id,
    card_style: props.course.data.card_style,
    difficulty_level: props.course.data.difficulty_level,
    short_description: props.course.data.short_description,
    course_image: props.course.data.media,
});

const submit = async () => {
    router.post(route("gamedev.course.edit.post", props.course.data.id), form);
};

// Sections
let courseSections = $ref([]);

const addNewSection = async () => {
    router.post(
        route("gamedev.section.store", props.course.data.id),
        {
            title:
                "Section " +
                (courseSections.data?.length
                    ? courseSections.data.length + 1
                    : 1),
            order: courseSections.data?.length
                ? courseSections.data.length + 1
                : 1,
        },
        { preserveState: true }
    );
};

// This function is just to ward the user that the lesson has been updated and need to be saved
const sectionUpdate = async (section) => {
    let courseSections = section;
    for (let index = 0; index < section.length; index++) {
        if (courseSections[index].id == lesson.id) {
            courseSections[index].updated = true;
        }
    }
};

const saveSectionContent = async (section) => {
    // Find the lesson bases in the id and add a key that we goin to use to warn the user that the lesson has been updated
    let tempArray = section;
    for (let index = 0; index < section.length; index++) {
        if (tempArray[index].id == lesson.id) {
            tempArray[index].updated = false;
        }
    }
    router.post(route("gamedev.update.section", section.id), {
        section: section,
    });
};

const sectionDelete = async (section) => {
    router.delete(route("gamedev.delete.section", section.id), {
        section: section,
    });
};

const deleteLesson = async (lesson) => {
    router.delete(route("gamedev.update.delete", lesson.id), {
        lesson: lesson,
    });
};
</script>
