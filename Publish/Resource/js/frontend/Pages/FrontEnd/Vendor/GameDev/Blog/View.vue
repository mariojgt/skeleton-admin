<template>
    <Layout>
        <section class="fancy-background05">
            <div class="mx-auto max-w-screen-2xl lg:py-16 lg:px-6 ">
                <div class="mx-auto text-center lg:mb-16 mb-8">
                    <h2 class="flex items-center justify-center text-center text-7xl font-extrabold mb-10 text-accent">
                        {{ blogPost.data.title }}
                    </h2>
                    <div class="font-light text-neutral sm:text-xl" v-html="blogPost.data.short_description"></div>
                </div>
                <article
                    class="mx-auto w-full format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                    <div v-html="blogPost.data.content" class="text-neutral" ></div>
                </article>
                <admin-card :admin="blogPost.data.admin" />
            </div>
        </section>
        <hr class="theme-divider" />
    </Layout>
</template>

<script setup>
// Import the layout component using the root
import Layout from "@frontend_layout/App.vue";
import AdminCard from "@frontend_components/FrontEnd/Admin/AdminCard.vue";
// import computed from vue
import { computed } from "vue";

const props = defineProps({
    blogPost: {
        type: Object,
        default: () => [],
    }
});

</script>
