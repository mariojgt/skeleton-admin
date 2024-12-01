<template>
    <section>
        <button :class="props.postBtnClass" @click="openPostBox">
            New Discussion
        </button>
        <teleport to="body">
            <transition name="fade">
                <ForumEditor
                    v-if="newForumToogle"
                    :model-class="props.modelClass"
                    :model-id="props.modelId"
                    @fresh-comments="refreshComments"
                    @close="newForumToogle = false"
                    :categories="props.categories"
                />
            </transition>
        </teleport>
    </section>
</template>

<script setup>
import { router, usePage } from "@inertiajs/vue3";
import ForumEditor from "@frontend_components/FrontEnd/Forum/Post.vue";
import SingleComment from "@frontend_components/FrontEnd/Comment/CommentsSingle.vue";

let newForumToogle = $ref(false);

const props = defineProps({
    modelId: {
        type: Number,
        required: true,
    },
    modelClass: {
        type: String,
        required: true,
    },
    categories: {
        type: Array,
        default: () => [],
    },
    postBtnClass: {
        type: String,
        default: "w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-2 px-4 rounded-lg mb-6",
    },
});

const refreshComments = () => {
    setTimeout(() => {
        router.reload({ only: ["comments"] });
    }, 1000);
};

const emit = defineEmits(["displayLogin"]);

const openPostBox = () => {
    // check if the user is log in if no send a event to the parent component to open the login modal
    if (!usePage().props.isUserAuth) {
        emit("displayLogin", true);
        return;
    }
    newForumToogle = !newForumToogle;
};


</script>
