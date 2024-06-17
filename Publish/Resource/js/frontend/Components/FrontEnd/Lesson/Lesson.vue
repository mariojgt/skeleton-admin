<template>
    <section class="fancy-background03">
        <div class="mx-auto flex max-w-screen-xl flex-wrap lg:flex-nowrap">
            <div
                class="relative mx-auto basis-full items-center justify-between rounded-xl p-6 font-bold text-white md:flex lg:flex-1 lg:basis-0 bg-gradient-to-l from-frameworks-light to-frameworks"
            >
                <div class="flex-1 md:mx-[2.5rem] md:flex md:space-x-6">
                    <div
                        class="px-4 md:flex-1 md:px-0 flex flex-col justify-between"
                    >
                        <header class="mb-8">
                            <div class="flex items-center">
                                <button
                                    title="Want to favorite this lesson for future reference?"
                                    class="hidden rounded-full bg-white/10 md:flex md:items-center md:justify-center mr-4"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="w-10 h-10"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                                        />
                                    </svg>
                                </button>
                                <div>
                                    <h1
                                        class="text-2xl font-bold leading-tight widescreen:text-3xl"
                                    >
                                        {{ props.lesson.name }}
                                    </h1>
                                </div>
                            </div>
                        </header>
                        <div>
                            <dl
                                class="flex divide-x divide-solid divide-white/15 md:ml-1"
                            >
                                <div class="pr-5">
                                    <dt
                                        class="mb-2 font-cabin text-2xs font-medium text-white/75"
                                    >
                                        Episode
                                    </dt>
                                    <dd
                                        class="text-sm font-semibold text-white"
                                    >
                                        #{{ props.lesson.order }}
                                    </dd>
                                </div>
                                <div class="px-5">
                                    <dt
                                        class="mb-2 font-cabin text-2xs font-medium text-white/75"
                                    >
                                        Run Time
                                    </dt>
                                    <dd
                                        class="text-sm font-semibold text-white"
                                    >
                                        {{ props.lesson.lesson_duration }}
                                    </dd>
                                </div>
                                <div class="px-5 md:hidden xl:block">
                                    <dt
                                        class="mb-2 font-cabin text-2xs font-medium text-white/75"
                                    >
                                        Published
                                    </dt>
                                    <dd
                                        class="text-sm font-semibold text-white"
                                    >
                                        {{ props.lesson.created_diff }}
                                    </dd>
                                </div>
                                <div class="hidden px-5 xl:block">
                                    <dt
                                        class="mb-2 font-cabin text-2xs font-medium text-white/75"
                                    >
                                        Topic
                                    </dt>
                                    <dd
                                        class="text-sm font-semibold text-white"
                                    >
                                        <div class="badge badge-success gap-2">
                                            {{ props.lesson.topic }}
                                        </div>
                                    </dd>
                                </div>
                                <!----><!---->
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
// Props
const props = defineProps({
    lesson: {
        type: Object,
        default: () => ({}),
    },
});
</script>
