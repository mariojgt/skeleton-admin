<template>
    <div
        class="rounded-lg bg-dark-500 p-4 shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1"
    >
        <!-- Image Section -->
        <div class="relative h-56 w-full overflow-hidden rounded-lg">
            <a href="#" @click="openProduct">
                <img
                    class="mx-auto h-full object-cover transition duration-300 transform hover:scale-110 rounded-lg"
                    :src="record.media[0]?.url?.default"
                    :alt="record.name"
                />
                <ribbon v-if="!record.free_with_subscription" :top="true" :left="false" color="orange"> New </ribbon>
                <ribbon v-else :top="true" :left="false" color="green"> Premiun is<br>Free </ribbon>
            </a>
        </div>

        <!-- Title and Details -->
        <div class="pt-6">
            <a
                href="#"
                @click="openProduct"
                class="text-lg font-semibold leading-tight text-white hover:underline hover:text-purple-400 transition"
                >{{ record.name }}</a
            >

            <!-- Ratings and Stats -->
            <!-- <div class="mt-2 flex items-center gap-2">
                <div class="flex items-center text-yellow-400">
                    <svg
                        class="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M12 .587l3.668 7.57L24 9.423l-6 5.857 1.413 8.23L12 18.836 4.587 23.51 6 15.28 0 9.423l8.332-1.266z"
                        />
                    </svg>
                    <svg
                        class="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M12 .587l3.668 7.57L24 9.423l-6 5.857 1.413 8.23L12 18.836 4.587 23.51 6 15.28 0 9.423l8.332-1.266z"
                        />
                    </svg>
                </div>
                <p class="text-sm text-gray-400">(455 reviews)</p>
            </div> -->

            <!-- Pricing and Buttons -->
            <div class="mt-4 flex items-center justify-between gap-4">
                <p
                    class="text-2xl font-extrabold text-white"
                    v-if="record.price > 0"
                >
                    {{ makeMoney(record.price) }}
                </p>
                <p class="text-2xl font-extrabold text-white" v-else>Free</p>
                <button
                    type="button"
                    class="btn btn-secondary"
                    @click="productCheckout"
                    v-if="(!usePage().props.authUserInfo?.data?.has_subscription || !record.free_with_subscription) && !record.is_purchase"
                    >
                    Buy Now
                </button>
                <span
                    class="text-sm text-gray-400"
                    v-else
                >
                    <span v-if="record.free_with_subscription">
                        Free with Premium
                    </span>
                    <span v-else>
                        Purchased
                    </span>
                </span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { PropType, computed } from "vue";
import ribbon from "../Course/Ribbon.vue";
import { api } from "../../../Boot/axios.js";
import { AcademicCapIcon, ClockIcon } from "@heroicons/vue/24/solid";
import { router } from "@inertiajs/vue3";
import { course } from "../../../Types/types";
import { usePage } from "@inertiajs/vue3";
import { makeMoney } from "@frontend_components/../Composable/Money.js";

// Props
const props = defineProps({
    record: {
        type: Object as PropType<course>,
        default: () => ({}),
    },
    displayDifficulty: {
        type: Boolean,
        default: true,
    },
});

// Create data computed property
const cardStyle = computed(() => {
    switch (props.record.card_style) {
        case "normal":
            return "card card-normal";
        case "featured":
            return "card card-featured";
        case "popular":
            return "card card-popular";
        case "new":
            return "card card-new";
        default:
            return "card card-default";
    }
});

const openProduct = async () => {
    router.visit(route("store.view", props.record.slug));
};

const getSlotName = (index) => {
    return "auto-item" + (index + 1);
};

let displayLogin = $ref(false);
const emit = defineEmits(["loading", "displayLogin"]);

const productCheckout = async () => {
    if (usePage().props.isUserAuth) {
        emit("loading", true);
        // CHeck if is a free product
        api.post(route("stripe.product.checkout"), {
            products: [
                {
                    id: props.record.id,
                    quantity: 1,
                    type: "product",
                },
            ],
        })
            .then(function (response) {
                window.location.href = response.data.session;
            })
            .catch(function (error) {
                emit("loading", false);
            });
    } else {
        emit("displayLogin", true);
    }
};
</script>
