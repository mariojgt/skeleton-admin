<template>
    <div
        :id="carouselId"
        class="carousel w-full transform scale-100 lg:scale-105"
    >
        <div
            v-for="n in itemCount"
            :id="`${idPrefix}${n}`"
            :key="`${idPrefix}${n}`"
            class="carousel-item w-full"
        >
            <slot :name="`${idPrefix}${n}`" />
        </div>
    </div>
    <div class="flex justify-center w-full py-2 gap-2 mt-10">
        <a
            v-for="n in itemCount"
            :key="`${idPrefix}${n}`"
            :href="`#${idPrefix}${n}`"
            class="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white fancy-background04 rounded-lg group mt-5 border border-accent"
            @click="navigateTo(n - 1)"
        >
            <span
                class="absolute w-0 h-0 transition-all duration-500 ease-out bg-secondary rounded-full group-hover:w-full group-hover:h-56"
            />
            <span
                class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"
            />
            <span class="relative flex justify-between font-bold text-lg">
                {{ n }}
            </span>
        </a>
    </div>
</template>

<script setup lamng="ts">
import { ref, onMounted, onUnmounted, toRefs } from "vue";

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

// Function to move to the next item
const nextItem = () => {
    if (carouselVisible.value) {
        currentItem.value = (currentItem.value % itemCount.value) + 1;
        window.location.hash = idPrefix.value + currentItem.value;
    }
};

const navigateTo = (itemIndex) => {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
    currentItem.value = itemIndex + 1;
};

let observer = null;

onMounted(() => {
    // Start autoplay
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
});

onUnmounted(() => {
    // Clear interval when component is unmounted
    if (intervalId) {
        clearInterval(intervalId);
    }
    if (observer) observer.disconnect();
});
</script>
