<template>
    <Layout>
        <section class="fancy-background03">
            <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div class="mr-auto place-self-center lg:col-span-7">
                    <h1 class="text-color-h1 text-6xl lg:text-8xl mb-4">
                        Check Out this amazing courses
                    </h1>
                    <p class="max-w-2xl mb-6 font-bold lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 mt-10">
                        From checkout to global sales tax compliance, companies
                        around the world use Flowbite to simplify their payment
                        stack.
                    </p>
                </div>
                <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup">
                </div>
            </div>
        </section>
        <hr class="theme-divider">
        <section class="fancy-background02">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                    <h2 class="text-color-h1 text-5xl lg:text-7xl mb-4">
                        Latest Lessons
                    </h2>
                    <p class="font-light lg:mb-16 sm:text-xl text-neutral">
                        Explore the whole collection of lessons and boost you
                        game development skills.
                    </p>
                </div>
                <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                    <CourseCardGrid v-for="course in props.courses.data" :key="course.id" :record="course" />
                </div>
            </div>
        </section>
    </Layout>
</template>

<script setup lang="ts">
// Import the layout component using the root
import Layout from "@frontend_layout/App.vue";
import CourseCardGrid from "@frontend_components/FrontEnd/Course/CourseCardGrid.vue";

const props = defineProps({
    courses: {
        type: Object,
        default: () => ({}),
    },
});
</script>
