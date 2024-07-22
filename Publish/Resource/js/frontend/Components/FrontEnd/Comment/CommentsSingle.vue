<template>
    <article class="mt-5 bg-master-900 border border-accent rounded-lg p-5">
        <div class="flex items-center mb-4 space-x-4">
            <img
                v-if="props.comment?.user?.avatar"
                class="w-10 h-10 rounded-full"
                :src="props.comment.user.avatar"
                alt="User Avatar"
            >
            <img
                v-if="props.comment?.admin?.avatar"
                class="w-10 h-10 rounded-full"
                :src="props.comment.admin.avatar"
                alt="Admin Avatar"
            >
            <div class="space-y-1 font-medium text-white">
                <p>
                    {{ props.comment.user.full_name }}
                    <time
                        datetime="2014-08-16 19:00"
                        class="block text-sm text-neutral"
                        >Joined
                        {{
                            props.comment.user.create_at_diff
                                ? props.comment.user.create_at_diff
                                : props.comment.admin.create_at_diff
                        }}</time>
                </p>
            </div>
        </div>
        <h3 class="ml-2 text-lg font-semibold text-neutral">
            {{ props.comment.title }}
        </h3>
        <footer class="mb-5 text-sm text-neutral flex justify-between">
            <p>Posted {{ props.comment.created_at_diff }}</p>
            <div v-if="usePage().props.isUserAuth" class="flex justify-between">
                <div class="dropdown dropdown-left">
                    <label tabindex="0" class="btn btn-sm btn-primary m-1">
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
                                d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                            />
                        </svg>
                    </label>
                    <ul
                        tabindex="0"
                        class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 gap-2"
                    >
                        <li>
                            <a
                                class="btn btn-warning hover:btn-accent text-white hover:text-black"
                                @click="
                                    reportAbuseModal != true
                                        ? (reportAbuseModal = true)
                                        : (reportAbuseModal = false)
                                "
                            >
                                Report abuse
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
                                        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                                    />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a
                                class="btn btn-info hover:btn-accent text-white hover:text-black"
                                @click="
                                    replyCommentModal != true
                                        ? (replyCommentModal = true)
                                        : (replyCommentModal = false)
                                "
                            >
                                Reply
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
                                        d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                                    />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a
                                v-if="
                                    usePage().props.authUserInfo?.data?.id ===
                                        props.comment?.user?.id ||
                                    usePage().props.guard === 'admin'
                                "
                                class="btn btn-error hover:btn-accent text-white hover:text-black"
                                @click="deleteCommentModal = true"
                                >Delete
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
                                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                    />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
        <div class="text-white" v-html="props.comment.body" />
        <aside class="flex justify-between mt-5">
            <a
                v-if="
                    usePage().props.isUserAuth &&
                    usePage().props.guard === 'web'
                "
                class="btn btn-sm btn-primary hover:btn-accent text-white hover:text-black"
                :class="
                    props.comment.user_helpful_Comments
                        ? 'btn-success'
                        : 'btn-error'
                "
                @click="toogleHelpful"
            >
                Helpful
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                </svg>
            </a>
            <p class="mt-1 text-md text-neutral font-bold">
                {{ props.comment.is_helpful }} people found this helpful
            </p>
        </aside>
        <div
            v-if="replyCommentModal"
            class="master-shadow border rounded-lg mt-4"
        >
            <CommentEditor
                model-class="comment"
                comment-class="w-full"
                :model-id="props.comment.id"
                :key-editor="props.keyEditor"
                @fresh-comments="commentsRefresh"
            />
        </div>
    </article>

    <div
        v-for="(item, index) in props.comment.replies"
        :key="index"
        class="ml-10 mt-4"
    >
        <commentItem
            :comment="item"
            :key-editor="props.keyEditor"
            @fresh-comments="commentsRefresh"
        />
    </div>
    <!-- Modal delete comment -->
    <reusable-modal
        :show="deleteCommentModal"
        @close="deleteCommentModal = false"
        @confirm="deleteComment"
    >
        <template #title>
            <h3
                id="modal-title"
                class="text-lg leading-6 font-medium text-gray-900"
            >
                A you sure you want to delete this comment?
            </h3>
        </template>
        <template #body>
            <div class="mt-2">
                <p class="text-sm text-gray-500">
                    Are you sure you want to delete this comment? This action
                    cannot be undone.
                </p>
            </div>
        </template>
    </reusable-modal>
    <!-- Modal report abuse -->
    <reusable-modal
        :show="reportAbuseModal"
        @close="reportAbuseModal = false"
        @confirm="reportComment"
    >
        <template #title>
            <h3
                id="modal-title"
                class="text-lg leading-6 font-medium text-gray-900"
            >
                A you sure you want to report this comment?
            </h3>
        </template>
        <template #body>
            <div class="mt-2 space-y-2 bg-base-200 rounded-lg p-5">
                <p class="text-sm text-neutral font-bold mb-5">
                    Please describe the reason why you want to report this
                    comment.
                </p>
                <textarea
                    v-model="reportReason"
                    placeholder="Reason"
                    class="textarea textarea-bordered textarea-lg w-full"
                />
            </div>
        </template>
    </reusable-modal>
</template>

<script setup lang="ts">
import { api } from "../../../Boot/axios.js";
import CommentEditor from "@frontend_components/FrontEnd/Comment/Comment.vue";
import { ReusableModal } from "@mariojgt/masterui/packages/index";
import commentItem from "./CommentsSingle.vue";
import { useMessage } from "naive-ui";

const message = useMessage();

import { usePage } from "@inertiajs/vue3";
// Props
const props = defineProps({
    comment: {
        type: Object,
        default: () => {},
    },
    keyEditor: {
        type: String,
        default: null,
    },
});

const emit = defineEmits(["fresh-comments"]);

// Modal report abuse
let reportAbuseModal = $ref(false) as boolean;
let reportReason = $ref("") as string;

const reportComment = async () => {
    reportAbuseModal = false;

    await api
        .post(route("comment.report", props.comment.id), {
            reason: reportReason,
        })
        .then(function (response) {
            message.success(response.data.message);
        });

    commentsRefresh();
};

// Modal delete comment
let deleteCommentModal = $ref(false) as boolean;
const deleteComment = async () => {
    deleteCommentModal = false;
    // on submit we clear the comment
    await api
        .delete(route("comment.delete", props.comment.id))
        .then(function (response) {
            message.success(response.data.message);
        });
    commentsRefresh();
};

let replyCommentModal = $ref(false) as boolean;
const commentsRefresh = async () => {
    replyCommentModal = false;
    emit("fresh-comments");
};

const toogleHelpful = async () => {
    await api
        .post(route("mark.helpful", props.comment.id))
        .then(function (response) {
            message.success(response.data.message);
        });

    commentsRefresh();
};
</script>
