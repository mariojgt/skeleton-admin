<template>
    <Layout>
        <section class="bg-base-200 magicpattern">
    <div class="w-4/5 mx-auto pt-10">
        <carousel id-prefix="item" :item-count="2" :auto-play="false">
            <template #item1>
                <div class="flex flex-col lg:flex-row items-center fancy-border p-10 transform w-full">
                    <div class="w-full mb-6 lg:mb-0 lg:w-1/2">
                        <div class="w-full">
                            <div class="relative z-10" style="max-width: 100%">
                                <h1 class="text-color-h1 text-6xl lg:text-8xl mb-4">Your Path to</h1>
                                <div class="glitch text-4xl lg:text-5xl" data-text="Game Development">
                                    Game Development
                                </div>
                            </div>
                            <p class="mt-6 text-lg lg:text-xl leading-8 text-neutral font-bold">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit...
                            </p>
                            <button class="btn btn-accent btn-sm mt-4">Checkout</button>
                        </div>
                    </div>
                    <div class="flex items-center justify-center w-full lg:w-1/2">
                        <canvas id="test" ref="test" width="777" height="777" class="w-full h-full lg:max-w-3xl"></canvas>
                    </div>
                </div>
            </template>
            <template #item2>
                <div class="items-center lg:flex p-6 w-full">
                    <div class="flex items-center fancy-border p-10 transform w-full">
                        <div class="w-full lg:w-1/2">
                            <div class="w-full">
                                <div class="relative z-10" style="max-width: 100%">
                                    <h1 class="text-color-h1 text-8xl mb-4">Lets boost your</h1>
                                    <div class="glitch text-5xl" data-text="Skills">Skills</div>
                                </div>
                                <p class="mt-6 text-xl leading-8 text-neutral font-bold">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
                                    beatae error laborum ab amet sunt recusandae? Reiciendis natus
                                    perspiciatis optio.
                                </p>
                                <ActionButton class="mt-10" name="Start here" />
                            </div>
                        </div>
                        <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                            <canvas id="canvas-rocket" ref="canvas-rocket" width="777" height="777" class="w-full h-full lg:max-w-3xl"></canvas>
                        </div>
                    </div>
                </div>
            </template>
        </carousel>
    </div>
</section>

        <hr class="theme-divider-3 master-shadow-lesson-03" />
        <section>
            <div class="container px-6 mx-auto mt-10 mb-10">
                <!-- <h1 class="flex items-center justify-center text-center text-8xl font-extrabold text-transparent bg-clip-text bg-accent mt-10 mg-5 opacity-95 ">
                    Popular Courses
                    <heart color="#fa0a36" class="mr-2" size="80" />
                </h1> -->

                <div
                    class="flex items-center justify-center text-center font-extrabold mb-10"
                >
                    <div class="glitch text-8xl" data-text="Popular Courses">
                        Popular Courses
                    </div>
                </div>

                <div
                    class="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4 container"
                >
                <CourseCardGrid
                    v-for="course in props.courses.data"
                    :key="course.id"
                    :record="course"
                    :displayDifficulty="false"
                />
                </div>
            </div>
        </section>

        <!-- <div
            class="relative isolate overflow-hidden fancy-background03 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0"
        >
            <div
                class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10"
            >
                <div
                    class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
                >
                    <div class="lg:pr-4">
                        <div class="lg:max-w-lg">
                            <p class="text-neutral font-semibold leading-7">
                                Deploy faster
                            </p>
                            <h1
                                class="mt-2 text-3xl font-bold tracking-tight text-neutral sm:text-4xl"
                            >
                                A better workflow
                            </h1>
                            <p class="mt-6 text-xl leading-8 text-neutral">
                                Aliquet nec orci mattis amet quisque ullamcorper
                                neque, nibh sem. At arcu, sit dui mi, nibh dui,
                                diam eget aliquam. Quisque id at vitae feugiat
                                egestas.
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden"
                >
                    <img
                        class="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                        src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                        alt=""
                    >
                </div>
                <div
                    class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
                >
                    <div class="lg:pr-4">
                        <div
                            class="max-w-xl text-base leading-7 text-neutral lg:max-w-lg"
                        >
                            <p>
                                Faucibus commodo massa rhoncus, volutpat.
                                Dignissim sed eget risus enim. Mattis mauris
                                semper sed amet vitae sed turpis id. Id dolor
                                praesent donec est. Odio penatibus risus viverra
                                tellus varius sit neque erat velit. Faucibus
                                commodo massa rhoncus, volutpat. Dignissim sed
                                eget risus enim. Mattis mauris semper sed amet
                                vitae sed turpis id.
                            </p>
                            <ul
                                role="list"
                                class="mt-8 space-y-8 text-gray-600"
                            >
                                <li class="flex gap-x-3">
                                    <svg
                                        class="mt-1 h-5 w-5 flex-none text-secondary"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                    <span class="text-neutral"><strong
                                            class="font-semibold text-accent"
                                            >Push to deploy.</strong>
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Maiores impedit
                                        perferendis suscipit eaque, iste dolor
                                        cupiditate blanditiis ratione.</span>
                                </li>
                                <li class="flex gap-x-3">
                                    <svg
                                        class="mt-1 h-5 w-5 flex-none text-secondary"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                    <span class="text-neutral"><strong
                                            class="font-semibold text-accent"
                                            >SSL certificates.</strong>
                                        Anim aute id magna aliqua ad ad non
                                        deserunt sunt. Qui irure qui lorem
                                        cupidatat commodo.</span>
                                </li>
                                <li class="flex gap-x-3">
                                    <svg
                                        class="mt-1 h-5 w-5 flex-none text-secondary"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z"
                                        />
                                        <path
                                            fill-rule="evenodd"
                                            d="M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                    <span class="text-neutral"><strong
                                            class="font-semibold text-accent"
                                            >Database backups.</strong>
                                        Ac tincidunt sapien vehicula erat auctor
                                        pellentesque rhoncus. Et magna sit morbi
                                        lobortis.</span>
                                </li>
                            </ul>
                            <p class="mt-8">
                                Et vitae blandit facilisi magna lacus commodo.
                                Vitae sapien duis odio id et. Id blandit
                                molestie auctor fermentum dignissim. Lacus diam
                                tincidunt ac cursus in vel. Mauris varius
                                vulputate et ultrices hac adipiscing egestas.
                                Iaculis convallis ac tempor et ut. Ac lorem vel
                                integer orci.
                            </p>
                            <h2
                                class="mt-16 text-2xl font-bold tracking-tight text-neutral"
                            >
                                No server? No problem.
                            </h2>
                            <p class="mt-6">
                                Id orci tellus laoreet id ac. Dolor, aenean leo,
                                ac etiam consequat in. Convallis arcu ipsum urna
                                nibh. Pharetra, euismod vitae interdum mauris
                                enim, consequat vulputate nibh. Maecenas
                                pellentesque id sed tellus mauris, ultrices
                                mauris. Tincidunt enim cursus ridiculus mi.
                                Pellentesque nam sed nullam sed diam turpis
                                ipsum eu a sed convallis diam.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
        <hr class="theme-divider-3 master-shadow-lesson-03" />
        <section class="fancy-background02">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                    <h2
                        class="mb-4 text-7xl tracking-tight font-extrabold text-yellow-400"
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
        <hr class="theme-divider-3 master-shadow-lesson-03" />
        <section class="fancy-background04">
            <div class="container px-6 py-16 mx-auto">
                <!-- <carousel
                    id-prefix="auto-item"
                    :item-count="props.sliders.data.length"
                    :auto-play="false"
                >
                    <template
                        v-for="(slider, index) in props.sliders.data"
                        :key="index"
                        #[getSlotName(index)]="{ index }"
                    >
                        <div class="items-center flex p-6">
                            <div
                                class="flex flex-col lg:flex-row items-center fancy-border p-10 transform"
                            >
                                <div class="">
                                    <div class="w-full">
                                        <div
                                            class="relative z-10"
                                            style="max-width: 675px"
                                        >
                                            <h1
                                                class="text-color-h1 text-8xl mb-4"
                                            >
                                                {{ slider.title }}
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2"
                                >
                                    <div v-html="slider.body" />
                                </div>
                            </div>
                        </div>
                    </template>
                </carousel> -->
            </div>
        </section>
        <hr class="theme-divider-3 master-shadow-lesson-03" />
        <section class="fancy-background03">
            <div class="container mx-auto p-5">
                <div class="text-center">
                    <h2
                        class="mt-10 text-4xl font-bold tracking-tight text-master-200 sm:text-6xl"
                    >
                        LATEST NEWS
                    </h2>
                    <p class="font-light sm:text-xl text-neutral mt-1">
                        Explore the latest news and updates from the game
                        development world.
                    </p>
                </div>
                <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                    <PostCard
                        v-for="(item, index) in props.blogPosts.data"
                        :key="index"
                        :record="item"
                        class="mt-4 bg-primary hover:shadow-master-900 bg-opacity-90"
                    />
                </div>
                <Pagination :pagination="props.blogPosts.meta" />
            </div>
        </section>
    </Layout>
</template>

<script setup lang="ts">
// Import the layout component using the root
import Layout from "@frontend_layout/App.vue";
import Carousel from "@frontend_components/FrontEnd/Utility/Carousel.vue";
import ActionButton from "@frontend_components/FrontEnd/Utility/CallToActionButton.vue";
import CourseCardGrid from "@frontend_components/FrontEnd/Course/CourseCardGrid.vue";
import logo from "@frontend_components/FrontEnd/Icons/logo.vue";
import PostCard from "@frontend_components/FrontEnd//Blog/PostCard.vue";
import { onMounted } from "vue";
import { Rive } from "@rive-app/canvas";

// Check if there is a flash message and display it
onMounted(() => {
    new Rive({
        canvas: document.getElementById("canvas-rocket"),
        src: "/vendor/Animations/rocket_demo.riv",
        autoplay: true,
    });

    new Rive({
        canvas: document.getElementById("test"),
        src: "/vendor/Animations/test.riv",
        autoplay: true,
    });
});

const props = defineProps({
    courses: {
        type: Object,
        default: () => ({}),
    },
    sliders: {
        type: Object,
        default: () => ({}),
    },
    blogPosts: {
        type: Object,
        default: () => ({}),
    },
});

const getSlotName = (index) => {
    return "auto-item" + (index + 1);
};
</script>

<style></style>
