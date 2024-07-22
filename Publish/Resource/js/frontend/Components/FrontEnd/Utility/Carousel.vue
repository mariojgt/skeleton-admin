<template>
    <div :id="carouselId" class="relative w-full" :data-carousel="autoPlay.value ? 'slide' : 'static'">
        <!-- Carousel wrapper -->
        <div class="relative h-56 overflow-hidden rounded-lg md:h-screen">
            <div v-for="n in itemCount" :key="`${idPrefix}${n}`" :data-carousel-item="n === 1 ? 'active' : ''" class="hidden duration-700 ease-in-out">
                <slot :name="`${idPrefix}${n}`" />
            </div>
        </div>
        <!-- Slider indicators -->
        <div class="absolute z-30 flex -translate-x-1/2 bottom-28 left-1/2 space-x-3 rtl:space-x-reverse">
            <button v-for="n in itemCount" :key="`${idPrefix}${n}`" type="button" class="w-3 h-3 rounded-full" :aria-current="currentItem === n" :aria-label="`Slide ${n}`" :data-carousel-slide-to="n - 1" @click="navigateTo(n - 1)"></button>
        </div>
        <!-- Slider controls -->
        <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev @click="prevItem">
            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                </svg>
                <span class="sr-only">Previous</span>
            </span>
        </button>
        <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next @click="nextItem">
            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                </svg>
                <span class="sr-only">Next</span>
            </span>
        </button>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, toRefs } from "vue";
import { initFlowbite } from 'flowbite';

const props = defineProps({
    idPrefix: {
        type: String,
        required: true,
    },
    itemCount: {
        type: Number,
        required: true,
    },
    autoPlay: {
        type: Boolean,
        default: false,
    },
    interval: {
        type: Number,
        default: 5000,
    },
    carouselId: {
        type: String,
        default: "carousel",
    },
});

let { idPrefix, itemCount, autoPlay, interval, carouselId } = toRefs(props);
let currentItem = ref(1);
let carouselVisible = ref(false);

let intervalId = null;

const nextItem = () => {
    if (carouselVisible.value) {
        currentItem.value = (currentItem.value % itemCount.value) + 1;
        updateCarousel();
    }
};

const prevItem = () => {
    if (carouselVisible.value) {
        currentItem.value = (currentItem.value - 2 + itemCount.value) % itemCount.value + 1;
        updateCarousel();
    }
};

const navigateTo = (itemIndex) => {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
    currentItem.value = itemIndex + 1;
    updateCarousel();
};

const updateCarousel = () => {
    const carouselItems = document.querySelectorAll(`[data-carousel-item]`);
    carouselItems.forEach((item, index) => {
        if (index === currentItem.value - 1) {
            item.classList.remove('hidden');
            item.classList.add('block');
        } else {
            item.classList.remove('block');
            item.classList.add('hidden');
        }
    });
};

let observer = null;

onMounted(() => {
    if (autoPlay.value) {
        intervalId = setInterval(nextItem, interval.value);
    }
    const carouselElement = document.getElementById(carouselId.value);

    observer = new IntersectionObserver(
        (entries) => {
            if (entries[0].isIntersecting) {
                carouselVisible.value = true;
            } else {
                carouselVisible.value = false;
            }
        },
        { threshold: 0.1 }
    );

    if (carouselElement) observer.observe(carouselElement);

    initFlowbite();
});

onUnmounted(() => {
    if (intervalId) {
        clearInterval(intervalId);
    }
    if (observer) observer.disconnect();
});
</script>
