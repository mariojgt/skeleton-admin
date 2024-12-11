<template>
    <section class="mt-3 bg-dark-100 rounded-lg">
        <button :class="props.postBtnClass" @click="openPostBox">
            <slot>New Dicussion</slot>
        </button>
        <teleport to="body">
            <transition name="fade">
                <ForumEditor
                    v-if="newForumToogle"
                    @fresh-comments="refreshComments"
                    @close="newForumToogle = false"
                    :categories="props.categories"
                    :topitEdit="props.topitEdit"
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
    categories: {
        type: Array,
        default: () => [],
    },
    postBtnClass: {
        type: String,
        default: "w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-2 px-4 rounded-lg mb-6",
    },
    topitEdit : {
        type: Object,
        default: () => {},
    },
});

const refreshComments = () => {
    setTimeout(() => {
        router.reload({ only: ["blogPost"] });
    }, 300);
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
