<template>
    <section class="mt-3 bg-dark-100 rounded-lg">
        <button @click="newForumToogle = !newForumToogle" class="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-2 px-4 rounded-lg mb-6">
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

const newForumToogle = $ref(false);

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
});

const refreshComments = () => {
    setTimeout(() => {
        router.reload({ only: ["comments"] });
    }, 1000);
};
</script>
