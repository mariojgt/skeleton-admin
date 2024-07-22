<template>
    <Layout>
        <section class="bg-base-300 magicpattern py-8 px-4 mx-auto  lg:py-16 lg:px-6">
            <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-neutral">
                    Our News
                </h2>
                <p class="font-light text-neutral text-sm lg:text-xl">
                    Check out our latest news and articles, we have a lot of interesting topics for you.
                </p>
            </div>
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <postCard class="mt-4" v-for="(item, index) in props.blogPosts.data" :key="index" :record="item" />
                <Pagination :pagination="props.blogPosts.meta" />
            </div>
        </section>

        <hr class="theme-divider" />
        <section class="fancy-background02">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                    <h2
                        class="mb-4 text-4xl tracking-tight font-extrabold text-yellow-400"
                    >
                        Latest Lessons
                    </h2>
                    <p class="font-light lg:mb-16 sm:text-xl text-neutral">
                        Explore the whole collection of lessons and boost you
                        game development skills.
                    </p>
                </div>
                <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                    <CourseCardGrid
                        v-for="course in props.courses.data"
                        :key="course.id"
                        :record="course"
                    />
                </div>
            </div>
        </section>
    </Layout>
</template>

<script setup lang="ts" >
// Import the layout component using the root
import Layout from "@frontend_layout/App.vue";
import PostCard from "../../../../../Components/FrontEnd/Blog/PostCard.vue";
import Pagination from "@frontend_components/FrontEnd/Utility/Pagination.vue";
import CourseCardGrid from "@frontend_components/FrontEnd/Course/CourseCardGrid.vue";

const props = defineProps({
    blogPosts: {
        type: Object,
        default: () => ({}),
    },
    courses: {
        type: Object,
        default: () => ({}),
    }
});
</script>
