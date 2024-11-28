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
    if (comment_title === "" || lesson_content === "" || selected_channel === "") {
        message.error("All fields are required");
        return;
    }

    try {
        const response = await api.post(route("forum.thread.create"), form);
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

const close = () => {
    emit("close");
};
</script>
