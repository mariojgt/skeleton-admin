<template>
    <form
        v-if="usePage().props.isUserAuth"
        class="pt-10"
        @submit.prevent="submitComment"
    >
        <div :class="props.commentClass">
            <input-field
                id="comment_title"
                v-model="comment_title"
                label="Comment Title"
                required="true"
                type="text"
                name="comment_title"
                placeholder="Title"
                class="mx-5 mb-5"
            />
            <div class="px-4 py-2">
                <label for="comment" class="text-xl font-bold">Your comment</label>
                <Editor v-model="lesson_comment" :apiKey="keyEditor" />
            </div>
            <div class="flex items-center justify-end px-3 py-2">
                <button type="submit" class="btn btn-success">
                    Post comment
                </button>
            </div>
        </div>
    </form>
</template>

<script setup lang="ts">
import { api } from "../../../Boot/axios.js";
import { usePage } from "@inertiajs/vue3";
import Editor from "@backend_components/Editor/Editor.vue";
import { InputField } from "@mariojgt/masterui/packages/index";
import { useMessage } from "naive-ui";

const message = useMessage();

// Props
const props = defineProps({
    modelClass: {
        type: String,
        default: "",
    },
    modelId: {
        type: Number,
        default: 0,
    },
    keyEditor: {
        type: String,
        default: null,
    },
    commentClass: {
        type: String,
        default: "w-full mb-4 fancy-border rounded-lg bg-secondary",
    },
});

let lesson_comment = $ref("");
let comment_title = $ref("");
const emit = defineEmits(["fresh-comments"]);

// craete the submitComment
const submitComment = async () => {
    const form = {
        title: comment_title,
        comment: lesson_comment,
        model: props.modelClass,
        model_id: props.modelId,
    };

    await api
        .post(route("comment.add"), form)
        .then(function (response) {
            message.success(response.data.message);
        });

    lesson_comment = "";
    comment_title = "";
    emit("fresh-comments");
};
</script>
