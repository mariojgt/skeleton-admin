<template>
    <section class="fancy-background03 ">
        <div
            class="panel relative transition-colors duration-300 dark px-8 rounded-xl flex w-full flex-wrap py-0 lg:flex-nowrap "
        >
            <div
                class="relative mx-auto basis-full items-center justify-between py-6 font-bold text-white md:flex md:justify-center lg:flex-1 lg:basis-0 max-w-screen-2xl"
            >
                <div
                    class="pointer-events-none absolute bottom-0 left-1/2 right-0 top-0 hidden -translate-x-1/2 transform opacity-10 mix-blend-luminosity md:block"
                ></div>
                <a
                    class="hidden h-12 w-12 flex-1 flex-shrink-0 items-center justify-center rounded-full bg-card-600 transition-all hover:bg-master-900 2xl:flex 2xl:flex-none cursor-pointer"
                    title="Previous Episode"
                    data-js="previous-episode-button"
                    disabled="false"
                    @click="previousEpisode"
                    ><svg
                        width="40"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                        class="text-white"
                    >
                        <path
                            clip-rule="evenodd"
                            d="M25 1v24H1V1h24z"
                            stroke="#000"
                            stroke-opacity=".012"
                            stroke-width=".514"
                        ></path>
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M16.704 4.764c.605.605.606 1.587 0 2.193L10.676 13l6.03 6.043a1.552 1.552 0 0 1-2.196 2.193l-7.387-7.388a1.2 1.2 0 0 1 0-1.697l7.387-7.387a1.552 1.552 0 0 1 2.195 0z"
                            fill="#fff"
                        ></path></svg
                ></a>
                <div class="flex-1 md:flex md:space-x-6 2xl:mx-[2.5rem]">
                    <div
                        class="px-4 md:flex-1 md:px-0 flex flex-col justify-between"
                    >
                        <header class="mb-8">
                            <div class="flex items-center">
                                <button
                                    title="Want to favorite this lesson for future reference?"
                                    class="hidden rounded-full transition-colors duration-200 md:flex md:items-center md:justify-center bg-card-600 mr-4 hover:bg-red-700"
                                    @click="likeVideo"
                                >
                                    <svg viewBox="0 0 32 32" width="50">
                                        <g
                                            stroke="none"
                                            stroke-width="1.2"
                                            class="fill-current"
                                            fill-rule="evenodd"
                                        >
                                            <path
                                                class="fill-current"
                                                d="M13.6196,11.2 C11.6246857,11.2 10.4,12.85425 10.4,14.2106375 C10.4,17.143925 13.9170286,19.8671 16.4,21.6 C18.8829714,19.86645 22.4,17.143925 22.4,14.2106375 C22.4,12.8541363 21.1758971,11.2 19.1804,11.2 C18.0661143,11.2 17.1138286,12.042335 16.4,12.8420625 C15.6854857,12.0422538 14.73392,11.2 13.6196,11.2 Z"
                                            ></path>
                                        </g>
                                    </svg>
                                </button>
                                <div>
                                    <h1
                                        class="text-2xl font-bold leading-tight widescreen:text-[30px]"
                                    >
                                    {{ props.lesson.name }}
                                    </h1>
                                </div>
                            </div>
                        </header>
                        <div>
                            <dl
                                class="flex divide-x divide-solid divide-grey-600/15 md:ml-1"
                            >
                                <div class="px-5">
                                    <dt
                                        class="mb-2 font-grotesk text-2xs font-medium text-grey-600/60"
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
                                        class="mb-2 font-grotesk text-2xs font-medium text-grey-600/60"
                                    >
                                        Published
                                    </dt>
                                    <dd
                                        class="text-sm font-semibold text-white"
                                    >
                                    {{ props.lesson.created_diff }}
                                    </dd>
                                </div>
                                <!----><!----><!---->
                            </dl>
                        </div>
                    </div>
                    <div
                        class="mx-auto mt-8 flex flex-wrap items-center gap-2 self-center md:mt-0 md:max-w-2xs lg:mx-0 xl:max-w-[200px]"
                    >
                        <div class="flex-1" style="flex-basis: 180px">
                            <a
                                class="btn flex-center btn-primary py-4"
                                ><!----><svg
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 191.667 191.667"
                                    xml:space="preserve"
                                    width="15"
                                    class="mr-[11px] flex-shrink-0 text-current"
                                >
                                    <path
                                        d="M95.833,0C42.991,0,0,42.99,0,95.833s42.991,95.834,95.833,95.834s95.833-42.991,95.833-95.834S148.676,0,95.833,0z   M150.862,79.646l-60.207,60.207c-2.56,2.56-5.963,3.969-9.583,3.969c-3.62,0-7.023-1.409-9.583-3.969l-30.685-30.685  c-2.56-2.56-3.97-5.963-3.97-9.583c0-3.621,1.41-7.024,3.97-9.584c2.559-2.56,5.962-3.97,9.583-3.97c3.62,0,7.024,1.41,9.583,3.971  l21.101,21.1l50.623-50.623c2.56-2.56,5.963-3.969,9.583-3.969c3.62,0,7.023,1.409,9.583,3.969  C156.146,65.765,156.146,74.362,150.862,79.646z"
                                        class="fill-current"
                                    ></path></svg
                                ><!----><span
                                    class="inline-block flex-shrink-0 text-wrap"
                                >
                                    Mark as Complete
                                </span></a
                            >
                        </div>
                        <div class="flex-1" style="flex-basis: 180px">
                            <a
                                class="btn flex-center btn-secondary py-4"
                                ><svg
                                    width="12"
                                    viewBox="0 0 8 10"
                                    class="fill-current mr-[11px] inline-block flex-shrink-0 scale-75"
                                >
                                    <path
                                        fill-rule="nonzero"
                                        d="M7.092 0H.941C.44 0 0 .389 0 .849v8.583c0 .154.045.282.119.381a.469.469 0 0 0 .38.187c.143 0 .295-.06.435-.173l2.753-2.204a.54.54 0 0 1 .334-.108.54.54 0 0 1 .334.108l2.743 2.203a.683.683 0 0 0 .425.174C7.765 10 8 9.824 8 9.432V.849C8 .389 7.593 0 7.092 0z"
                                    ></path></svg
                                ><!----><!----><span
                                    class="inline-block flex-shrink-0 text-wrap"
                                >
                                    Add to Watchlist
                                </span></a
                            >
                        </div>
                    </div>
                </div>
                <a
                    class="hidden h-12 w-12 flex-1 flex-shrink-0 items-center justify-center rounded-full bg-card-600 transition-all 2xl:flex 2xl:flex-none hover:bg-master-900 cursor-pointer"
                    title="Next Episode: Implementing Feedback: Part 2"
                    data-js="next-episode-button"
                    disabled="false"
                    @click="nextEpisode"
                    ><svg
                        width="40"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                        class="text-white"
                    >
                        <path
                            clip-rule="evenodd"
                            d="M1 25V1h24v24H1z"
                            stroke="#000"
                            stroke-opacity=".012"
                            stroke-width=".514"
                        ></path>
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M9.296 21.236a1.552 1.552 0 0 1 0-2.193L15.324 13l-6.03-6.043a1.552 1.552 0 0 1 2.196-2.193l7.387 7.388a1.2 1.2 0 0 1 0 1.697l-7.387 7.387a1.552 1.552 0 0 1-2.195 0z"
                            fill="#fff"
                        ></path></svg
                ></a>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const props = defineProps({
    lesson: {
        type: Object,
        default: () => ({}),
    },
});

const emit = defineEmits(["video-like", "next-episode", "previous-episode"]);

const likeVideo = () => {
    emit("video-like", props.lesson.id);
};

const nextEpisode = () => {
    emit("next-episode", props.lesson.id);
};

const previousEpisode = () => {
    emit("previous-episode", props.lesson.id);
};
</script>
