# ProductCard.vue
<template>
    <div
        class="group relative bg-dark-500/90 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1"
    >
        <!-- Hover Glow Effect -->
        <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div class="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-2xl"></div>
        </div>

        <!-- Image Section with Enhanced Effects -->
        <div class="relative aspect-[4/3] overflow-hidden group">
            <a href="#" @click.prevent="openProduct" class="block w-full h-full">
                <!-- Main Image -->
                <img
                    class="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    :src="record.media[0]?.url?.default"
                    :alt="record.name"
                />

                <!-- Shine Effect -->
                <div class="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <!-- Bottom Gradient -->
                <div class="absolute inset-0 bg-gradient-to-t from-dark-500 via-dark-500/50 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300"></div>
            </a>

            <!-- Enhanced Status Ribbons -->
            <div
                v-if="!record.free_with_subscription"
                class="absolute top-3 right-3 transform group-hover:translate-x-2 transition-transform duration-300"
            >
                <span class="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg">
                    <Sparkles class="w-4 h-4 mr-1" />
                    New
                </span>
            </div>
            <div
                v-else
                class="absolute top-3 right-3 transform group-hover:translate-x-2 transition-transform duration-300"
            >
                <span class="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold bg-gradient-to-r from-green-400 to-emerald-500 text-white shadow-lg">
                    <Crown class="w-4 h-4 mr-1" />
                    Premium
                </span>
            </div>

            <!-- Quick Preview Button -->
            <div class="absolute bottom-4 left-1/2 -translate-x-1/2 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <button
                    @click="openProduct"
                    class="inline-flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors duration-300"
                >
                    <Eye class="w-4 h-4" />
                    Quick Preview
                </button>
            </div>
        </div>

        <!-- Content Section with Enhanced Typography -->
        <div class="p-6 space-y-4 relative">
            <!-- Title with Hover Effect -->
            <a
                href="#"
                @click.prevent="openProduct"
                class="block text-lg font-bold text-white hover:text-purple-400 transition-colors duration-300 line-clamp-2"
            >
                {{ record.name }}
            </a>

            <!-- Price and Action Section -->
            <div class="flex items-center justify-between">
                <!-- Enhanced Price Display -->
                <div class="space-y-1">
                    <p v-if="record.price > 0" class="flex flex-col">
                        <span class="text-2xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            {{ makeMoney(record.price) }}
                        </span>
                        <span class="text-xs text-neutral-400">One-time purchase</span>
                    </p>
                    <p v-else class="text-2xl font-extrabold text-green-400 flex items-center gap-2">
                        <Download class="w-5 h-5" />
                        Free
                    </p>
                    <span
                        v-if="record.free_with_subscription"
                        class="inline-flex items-center text-sm text-purple-400 font-medium"
                    >
                        <Crown class="w-4 h-4 mr-1" />
                        Free with Premium
                    </span>
                    <span
                        v-if="record.is_purchase"
                        class="inline-flex items-center text-sm text-green-400 font-medium"
                    >
                        <Check class="w-4 h-4 mr-1" />
                        Purchased
                    </span>
                </div>

                <!-- Enhanced Action Button -->
                <button
                    v-if="(!usePage().props.authUserInfo?.data?.has_subscription || !record.free_with_subscription) && !record.is_purchase"
                    @click="productCheckout"
                    class="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105"
                >
                    <ShoppingCart class="h-5 w-5" />
                    Buy Now
                </button>
            </div>
        </div>

        <!-- Enhanced Bottom Accent Line -->
        <div class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
    </div>
</template>

<script setup lang="ts">
import { PropType, computed } from "vue";
import { api } from "../../../Boot/axios.js";
import { router, usePage } from "@inertiajs/vue3";
import { course } from "../../../Types/types";
import { makeMoney } from "@frontend_components/../Composable/Money.js";
import {
    ShoppingCart,
    Crown,
    Check,
    Download,
    Eye,
    Sparkles
} from 'lucide-vue-next';

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
