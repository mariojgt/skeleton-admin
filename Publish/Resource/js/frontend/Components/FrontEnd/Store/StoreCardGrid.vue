# ProductCard.vue
<template>
    <div
        class="group relative bg-dark-500/90 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1"
    >
        <!-- Image Section -->
        <div class="relative aspect-[4/3] overflow-hidden">
            <a href="#" @click.prevent="openProduct" class="block w-full h-full">
                <img
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    :src="record.media[0]?.url?.default"
                    :alt="record.name"
                />
                <!-- Overlay gradient -->
                <div class="absolute inset-0 bg-gradient-to-t from-dark-500 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>

            <!-- Status Ribbons -->
            <div v-if="!record.free_with_subscription" class="absolute top-3 right-3">
                <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-orange-500 text-white shadow-lg">
                    New
                </span>
            </div>
            <div v-else class="absolute top-3 right-3">
                <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-green-500 text-white shadow-lg">
                    Free with Premium
                </span>
            </div>
        </div>

        <!-- Content Section -->
        <div class="p-6 space-y-4">
            <!-- Title -->
            <a
                href="#"
                @click.prevent="openProduct"
                class="block text-lg font-bold text-white hover:text-purple-400 transition-colors duration-300 line-clamp-2"
            >
                {{ record.name }}
            </a>

            <!-- Price and Action Section -->
            <div class="flex items-center justify-between">
                <!-- Price Display -->
                <div class="space-y-1">
                    <p v-if="record.price > 0" class="text-2xl font-extrabold text-white">
                        {{ makeMoney(record.price) }}
                    </p>
                    <p v-else class="text-2xl font-extrabold text-green-400">
                        Free
                    </p>
                    <span v-if="record.free_with_subscription" class="text-sm text-purple-400 font-medium">
                        Free with Premium
                    </span>
                    <span v-if="record.is_purchase" class="text-sm text-green-400 font-medium">
                        Purchased
                    </span>
                </div>

                <!-- Action Button -->
                <button
                    v-if="(!usePage().props.authUserInfo?.data?.has_subscription || !record.free_with_subscription) && !record.is_purchase"
                    @click="productCheckout"
                    class="inline-flex items-center gap-2 px-6 py-2 rounded-lg font-semibold bg-purple-500 text-white hover:bg-purple-600 transition-colors duration-300 shadow-lg hover:shadow-purple-500/25"
                >
                    <ShoppingCart class="h-5 w-5" />
                    Buy Now
                </button>
            </div>
        </div>

        <!-- Bottom Accent Line -->
        <div
            class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
        ></div>
    </div>
</template>

<script setup lang="ts">
import { PropType, computed } from "vue";
import { api } from "../../../Boot/axios.js";
import { router, usePage } from "@inertiajs/vue3";
import { course } from "../../../Types/types";
import { makeMoney } from "@frontend_components/../Composable/Money.js";
import { ShoppingCart } from 'lucide-vue-next';

const props = defineProps({
    record: {
        type: Object as PropType<course>,
        required: true,
        default: () => ({}),
    }
});

const emit = defineEmits(["loading", "displayLogin"]);

const openProduct = () => {
    router.visit(route("store.view", props.record.slug));
};

const productCheckout = async () => {
    if (usePage().props.isUserAuth) {
        emit("loading", true);
        try {
            const response = await api.post(route("stripe.product.checkout"), {
                products: [
                    {
                        id: props.record.id,
                        quantity: 1,
                        type: "product",
                    },
                ],
            });
            window.location.href = response.data.session;
        } catch (error) {
            emit("loading", false);
        }
    } else {
        emit("displayLogin", true);
    }
};
</script>
