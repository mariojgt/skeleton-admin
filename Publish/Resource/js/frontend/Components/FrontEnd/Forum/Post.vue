<template>
    <div
        class="fixed bottom-0 left-1/2 transform -translate-x-1/2 p-4 border border-gray-700 rounded-lg bg-dark-blue-100 text-white w-2/4"
    >
        <form v-if="usePage().props.isUserAuth" @submit.prevent="submitComment">
            <div :class="props.commentClass">
                <!-- Title -->
                <label for="commentTitle" class="text-xl font-bold">Add a Title</label>
                <input
                    id="commentTitle"
                    v-model="comment_title"
                    type="text"
                    placeholder="Enter a title"
                    class="input input-bordered w-full bg-gray-800 text-white mt-2"
                />

                <template v-if="!props.topitEdit" >
                    <!-- Channel Selector -->
                    <label for="channel" class="text-xl font-bold mb-2">Select Topic</label>
                    <select
                        id="channel"
                        v-model="selected_channel"
                        class="select select-bordered w-full bg-gray-800 text-white mt-2"
                    >
                        <option value="">Select Channel</option>
                        <option v-for="channel in categories" :key="channel.id" :value="channel.slug">
                            {{ channel.name }}
                        </option>
                    </select>
                </template>

                <!-- Comment Textarea -->
                <label for="comment" class="text-xl font-bold mb-2">Your Comment</label>
                <textarea
                    id="comment"
                    v-model="lesson_content"
                    placeholder="Write your comment here..."
                    class="textarea textarea-bordered w-full h-24 bg-gray-800 text-white mt-2"
                ></textarea>

                <!-- Buttons -->
                <div class="flex justify-between">
                    <h5 class="text-sm">Please follow the guidelines</h5>
                    <div class="mt-2 flex justify-end gap-3">
                        <button type="button" @click="close" class="btn btn-primary mt-2">
                            Cancel
                        </button>
                        <button type="button" @click="deleteComment" class="btn btn-primary mt-2">
                            Delete
                        </button>
                        <button type="submit" class="btn btn-secondary mt-2">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
import { api } from "../../../Boot/axios.js";
import { usePage } from "@inertiajs/vue3";
import { useMessage } from "naive-ui";
// import the watch function
import { onMounted } from "vue";
import { router } from '@inertiajs/vue3'

const message = useMessage();

// Props
const props = defineProps({
    commentClass: {
        type: String,
        default: "w-full rounded-lg",
    },
    categories: {
        type: Array,
        default: () => [],
    },
    topitEdit : {
        type: Object,
        default: () => {},
    },
});

// States
let lesson_content = $ref("");
let comment_title = $ref("");
let selected_channel = $ref("");

// Emits
const emit = defineEmits(["fresh-comments", "close"]);

// Functions
const submitComment = async () => {
    const form = {
        title: comment_title,
        content: lesson_content,
        category: selected_channel,
    };

    // Validate form
    if (comment_title === "" || lesson_content === "") {
        message.error("All fields are required");
        return;
    }

    try {
        let finalRoute = route("forum.thread.create");
        if (props.topitEdit?.id) {
            finalRoute = route("forum.thread.edit", props.topitEdit?.id);
        }

        const response = await api.post(finalRoute, form);
        message.success(response.data.message);
        lesson_content = "";
        comment_title = "";
        selected_channel = "";
        emit("fresh-comments");
        emit("close");
    } catch (error) {
        if (error.response?.data?.errors) {
            Object.values(error.response.data.errors).forEach((errMsg) => {
                message.error(errMsg[0]);
            });
        }
    }
};

const deleteComment = async () => {
    try {
        const response = await api.delete(route("forum.thread.edit", props.topitEdit?.id));
        message.success(response.data.message);
        // Rediretc the user to the home page
        router.visit(route("home"), { preserveScroll: 'errors' })
    } catch (error) {
        console.log(error);
        if (error.response?.data?.errors) {
            Object.values(error.response.data.errors).forEach((errMsg) => {
                message.error(errMsg[0]);
            });
        }
    }
};

const close = () => {
    emit("close");
};

// onmounted the topitEdit prop if valid we set the title and content
onMounted(() => {
    if (props.topitEdit) {
        lesson_content = props.topitEdit.content;
        comment_title = props.topitEdit.title;
    }
});
</script>
