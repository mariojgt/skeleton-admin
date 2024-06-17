<template>
    <div class="w-full">
        <form class="flex-1" @submit.prevent="saveOrEditLessonPoint">
            <div
                class="flex flex-col p-10 rounded-lg"
                :class="
                    editingMode
                        ? 'bg-base-200 rounded-lg border border-accent'
                        : 'bg-base-200 rounded-lg border border-success'
                "
            >
                <div v-if="editingMode" class="mb-5">
                    <h1 class="card-title">
Edit Learning Point
</h1>
                </div>
                <div class="mb-5">
                    <input-field
                        v-model="lessonPointSeconds"
                        type="number"
                        placeholder="What second of the video you like to trigger this information?"
                        :label="
                            'Video Trigger Second' +
                            ' (' +
                            props.lesson.lesson_duration_normal +
                            ' seconds)'
                        "
                        required
                    />
                </div>
                <div class="mb-5">
                    <input-field
                        v-model="lessonPointTitle"
                        type="text"
                        label="Content Title"
                        required
                    />
                </div>
                <h2 class="card-title mb-5">
Lesson Content
</h2>
                <Editor
                    v-model="lessonPointContent"
                    :api-key="props.editorKey"
                    :edit-model-value="lessonEditValue"
                />
                <button class="btn btn-accent w-full mt-5" type="submit">
                    Save
                </button>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
import { api } from "../../Boot/axios.js";
import { watch } from "vue";
// Import the from components
import { InputField } from "@mariojgt/masterui/packages/index";
import Editor from "@backend_components/Editor/Editor.vue";

import { useMessage } from "naive-ui";
const message = useMessage();

const props = defineProps({
    lesson: {
        type: Object,
        default: null,
    },
    editLesson: {
        type: Object,
        default: null,
    },
    lessonLearningPoint: {
        type: Object,
        default: null,
    },
    editorKey: {
        type: String,
        default: null,
    },
    editingMode: {
        type: Boolean,
        default: false,
    },
});

let lessonPointSeconds = $ref(1) as string;
let lessonPointTitle = $ref("") as string;
let lessonPointContent = $ref("") as string;

const emit = defineEmits(["updateLesson"]);
const saveOrEditLessonPoint = async () => {
    if (
        parseInt(lessonPointSeconds) >
        parseInt(props.lesson.lesson_duration_normal)
    ) {
        message.error("The second is bigger than the video duration");
        return;
    }

    if (!lessonPointTitle) {
        message.error("Please add a title");
        return;
    }

    if (!lessonPointContent) {
        message.error("Please add a content");
        return;
    }

    let routeEndPoint = props.editingMode
        ? "gamedev.lesson.point.edit"
        : "gamedev.lesson.point.create";
    let editPropId = props.editingMode ? lessonEditId : props.lesson.id;

    await api
        .post(route(routeEndPoint, editPropId), {
            seconds: lessonPointSeconds,
            title: lessonPointTitle,
            content: lessonPointContent,
        })
        .then(function () {
            emit("updateLesson");
            message.success("Learning point saved");
        })
        .catch(function () {
            message.error("Something went wrong");
        });
};

let lessonEditValue = $ref("") as string;
let lessonEditId = $ref("") as string;

watch(
    () => props.editLesson,
    (value) => {
        if (value) {
            lessonEditId = value.id;
            lessonPointSeconds = value.seconds;
            lessonPointTitle = value.title;
            lessonEditValue = value.content;
        }
    }
);
</script>
