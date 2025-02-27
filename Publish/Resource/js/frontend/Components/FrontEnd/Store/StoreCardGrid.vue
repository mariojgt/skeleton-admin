# ProductCard.vue
<template>
    <div
        class="group relative bg-[#1E2A42]/90 backdrop-blur-sm rounded-xl overflow-hidden border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
        :class="[getProductBorderClass]"
    >
        <!-- RPG Corner Elements -->
        <div class="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 opacity-50 group-hover:opacity-80 transition-opacity duration-500" :class="[getCornerClass]"></div>
        <div class="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 opacity-50 group-hover:opacity-80 transition-opacity duration-500" :class="[getCornerClass]"></div>
        <div class="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 opacity-50 group-hover:opacity-80 transition-opacity duration-500" :class="[getCornerClass]"></div>
        <div class="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 opacity-50 group-hover:opacity-80 transition-opacity duration-500" :class="[getCornerClass]"></div>

        <!-- Magical Glow Effect -->
        <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div class="absolute inset-0 blur-md" :class="[getGlowClass]"></div>
        </div>

        <!-- Image Section with RPG Styling -->
        <div class="relative aspect-[4/3] overflow-hidden group">
            <a href="#" @click.prevent="openProduct" class="block w-full h-full">
                <!-- Main Image -->
                <img
                    class="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    :src="record.media[0]?.url?.default"
                    :alt="record.name"
                />

                <!-- RPG Rune Corners on Image -->
                <div class="absolute top-0 left-0 w-6 h-6" :style="getRuneCornerStyle('topLeft')"></div>
                <div class="absolute top-0 right-0 w-6 h-6" :style="getRuneCornerStyle('topRight')"></div>
                <div class="absolute bottom-0 left-0 w-6 h-6" :style="getRuneCornerStyle('bottomLeft')"></div>
                <div class="absolute bottom-0 right-0 w-6 h-6" :style="getRuneCornerStyle('bottomRight')"></div>

                <!-- Magical Shine Effect -->
                <div class="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <!-- RPG Gradient Overlay -->
                <div class="absolute inset-0 bg-gradient-to-t from-[#1E2A42] via-[#1E2A42]/50 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300"></div>
            </a>

            <!-- RPG Status Ribbons -->
            <div
                v-if="!record.free_with_subscription"
                class="absolute top-3 right-3 transform group-hover:translate-x-2 transition-transform duration-300"
            >
                <span class="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-sm font-bold shadow-lg border"
                      :class="[
                        'bg-gradient-to-r from-[#F19A1A] to-[#FFC73C] text-white border-[#F19A1A]/30'
                      ]">
                    <Sparkles class="w-4 h-4" />
                    New Artifact
                </span>
            </div>
            <div
                v-else
                class="absolute top-3 right-3 transform group-hover:translate-x-2 transition-transform duration-300"
            >
                <span class="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-sm font-bold shadow-lg border"
                      :class="[
                        'bg-gradient-to-r from-[#8B60ED] to-[#B372BD] text-white border-[#8B60ED]/30'
                      ]">
                    <Crown class="w-4 h-4" />
                    Legendary
                </span>
            </div>

            <!-- Quick Preview Button with RPG Styling -->
            <div class="absolute bottom-4 left-1/2 -translate-x-1/2 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <button
                    @click="openProduct"
                    class="inline-flex items-center gap-2 px-6 py-2 rounded-lg text-sm font-medium bg-[#328AF1]/20 backdrop-blur-sm text-white hover:bg-[#328AF1]/30 transition-colors duration-300 border border-[#328AF1]/30"
                >
                    <Eye class="w-4 h-4 text-[#328AF1]" />
                    Examine Item
                </button>
            </div>
        </div>

        <!-- Content Section with RPG Typography -->
        <div class="p-6 space-y-4 relative">
            <!-- Title with RPG Styling -->
            <a
                href="#"
                @click.prevent="openProduct"
                class="block text-lg font-bold text-white hover:text-[#F19A1A] transition-colors duration-300 line-clamp-2"
            >
                {{ record.name }}
            </a>

            <!-- Price and Action Section with RPG Styling -->
            <div class="flex items-center justify-between">
                <!-- RPG Price Display -->
                <div class="space-y-1">
                    <p v-if="record.price > 0" class="flex flex-col">
                        <span class="text-2xl font-extrabold bg-gradient-to-r from-[#F19A1A] to-[#FFC73C] bg-clip-text text-transparent">
                            {{ makeMoney(record.price) }}
                        </span>
                        <span class="text-xs text-[#BAD9FC]/70">One-time treasure</span>
                    </p>
                    <p v-else class="text-2xl font-extrabold text-[#1AAB8B] flex items-center gap-2">
                        <Download class="w-5 h-5" />
                        Free
                    </p>
                    <span
                        v-if="record.free_with_subscription"
                        class="inline-flex items-center text-sm text-[#8B60ED] font-medium"
                    >
                        <Crown class="w-4 h-4 mr-1" />
                        Free for Guild Members
                    </span>
                    <span
                        v-if="record.is_purchase"
                        class="inline-flex items-center text-sm text-[#1AAB8B] font-medium"
                    >
                        <Check class="w-4 h-4 mr-1" />
                        In Your Inventory
                    </span>
                </div>

                <!-- RPG Action Button -->
                <button
                    v-if="(!usePage().props.authUserInfo?.data?.has_subscription || !record.free_with_subscription) && !record.is_purchase"
                    @click="productCheckout"
                    class="relative inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold text-white transition-all duration-300 overflow-hidden group/btn"
                    :class="[getActionButtonClass]"
                >
                    <!-- RPG Button Hover Effect -->
                    <div class="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>

                    <!-- RPG Button Corner Decorations -->
                    <div class="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/50"></div>
                    <div class="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/50"></div>

                    <ShoppingCart class="relative h-5 w-5" />
                    <span class="relative">Purchase</span>
                </button>
            </div>
        </div>

        <!-- RPG Bottom Accent Line -->
        <div
            class="absolute bottom-0 left-0 w-full h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
            :class="[getAccentClass]"
        ></div>
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

// Determine product theme colors based on type
const isPremium = computed(() => props.record.free_with_subscription);
const isFree = computed(() => props.record.price === 0);
const isPurchased = computed(() => props.record.is_purchase);

// RPG Border Styling
const getProductBorderClass = computed(() => {
    if (isPremium.value) return 'border-[#8B60ED]/30 hover:border-[#8B60ED]/60 hover:shadow-[0_10px_25px_rgba(139,96,237,0.3)]';
    if (isFree.value) return 'border-[#1AAB8B]/30 hover:border-[#1AAB8B]/60 hover:shadow-[0_10px_25px_rgba(26,171,139,0.3)]';
    if (isPurchased.value) return 'border-[#328AF1]/30 hover:border-[#328AF1]/60 hover:shadow-[0_10px_25px_rgba(50,138,241,0.3)]';
    return 'border-[#F19A1A]/30 hover:border-[#F19A1A]/60 hover:shadow-[0_10px_25px_rgba(241,154,26,0.3)]';
});

// RPG Corner Class
const getCornerClass = computed(() => {
    if (isPremium.value) return 'border-[#8B60ED]';
    if (isFree.value) return 'border-[#1AAB8B]';
    if (isPurchased.value) return 'border-[#328AF1]';
    return 'border-[#F19A1A]';
});

// RPG Glow Effect
const getGlowClass = computed(() => {
    if (isPremium.value) return 'bg-gradient-to-br from-[#8B60ED]/10 to-[#B372BD]/10';
    if (isFree.value) return 'bg-gradient-to-br from-[#1AAB8B]/10 to-[#6EDCC4]/10';
    if (isPurchased.value) return 'bg-gradient-to-br from-[#328AF1]/10 to-[#21C8F6]/10';
    return 'bg-gradient-to-br from-[#F19A1A]/10 to-[#FFC73C]/10';
});

// RPG Rune Corner Patterns
const getRuneCornerStyle = (position) => {
    let color;
    if (isPremium.value) {
        color = '%238B60ED'; // #8B60ED URL encoded (legendary)
    } else if (isFree.value) {
        color = '%231AAB8B'; // #1AAB8B URL encoded (free)
    } else if (isPurchased.value) {
        color = '%23328AF1'; // #328AF1 URL encoded (owned)
    } else {
        color = '%23F19A1A'; // #F19A1A URL encoded (new)
    }

    const patterns = {
        topLeft: `background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath d='M8 8 L24 8 M8 8 L8 24 M12 12 L20 20 M20 12 L12 20' stroke='${color}' stroke-width='1' fill='none' opacity='0.7'/%3E%3C/svg%3E")`,
        topRight: `background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath d='M8 8 L24 8 M24 8 L24 24 M12 12 L20 20 M20 12 L12 20' stroke='${color}' stroke-width='1' fill='none' opacity='0.7'/%3E%3C/svg%3E")`,
        bottomLeft: `background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath d='M8 24 L24 24 M8 8 L8 24 M12 12 L20 20 M20 12 L12 20' stroke='${color}' stroke-width='1' fill='none' opacity='0.7'/%3E%3C/svg%3E")`,
        bottomRight: `background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath d='M8 24 L24 24 M24 8 L24 24 M12 12 L20 20 M20 12 L12 20' stroke='${color}' stroke-width='1' fill='none' opacity='0.7'/%3E%3C/svg%3E")`
    };

    return patterns[position];
};

// RPG Action Button
const getActionButtonClass = computed(() => {
    if (isPremium.value) return 'bg-gradient-to-r from-[#8B60ED] to-[#B372BD] shadow-lg shadow-[#8B60ED]/20';
    if (isFree.value) return 'bg-gradient-to-r from-[#1AAB8B] to-[#6EDCC4] shadow-lg shadow-[#1AAB8B]/20';
    return 'bg-gradient-to-r from-[#F19A1A] to-[#FFC73C] shadow-lg shadow-[#F19A1A]/20';
});

// RPG Accent Line
const getAccentClass = computed(() => {
    if (isPremium.value) return 'bg-gradient-to-r from-[#8B60ED] to-[#B372BD]';
    if (isFree.value) return 'bg-gradient-to-r from-[#1AAB8B] to-[#6EDCC4]';
    if (isPurchased.value) return 'bg-gradient-to-r from-[#328AF1] to-[#21C8F6]';
    return 'bg-gradient-to-r from-[#F19A1A] to-[#FFC73C]';
});

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
