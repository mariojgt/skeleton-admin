<template>
    <div class="group relative bg-[#0F172A] backdrop-blur-sm rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-2"
        :class="[getProductBorderClass]">
        <!-- Pixel-Art Background Pattern -->
        <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDUgTCA1IDAgTSAxNSAwIEwgMjAgNSBNIDAgMTUgTCA1IDIwIE0gMTUgMjAgTCAyMCAxNSIgc3Ryb2tlPSIjQ0JENUUxIiBzdHJva2Utd2lkdGg9IjAuNSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-10"></div>

        <!-- Health Bar Glow Effect (Top) -->
        <div class="absolute inset-x-0 top-0 h-1 opacity-0 group-hover:opacity-100 transition-all duration-500">
            <div class="h-full pixel-bar" :class="[getHealthBarClass]"></div>
        </div>

        <!-- Pixel Art Corner Elements -->
        <div class="absolute top-0 left-0 w-4 h-4 pixel-corner-tl" :class="[getPixelCornerClass]"></div>
        <div class="absolute top-0 right-0 w-4 h-4 pixel-corner-tr" :class="[getPixelCornerClass]"></div>
        <div class="absolute bottom-0 left-0 w-4 h-4 pixel-corner-bl" :class="[getPixelCornerClass]"></div>
        <div class="absolute bottom-0 right-0 w-4 h-4 pixel-corner-br" :class="[getPixelCornerClass]"></div>

        <!-- Image Container with Game UI styling -->
        <div class="relative aspect-[4/3] overflow-hidden group">
            <a href="#" @click.prevent="openProduct" class="block w-full h-full">
                <!-- Main Image with CRT Scan Effect -->
                <div class="w-full h-full relative crt-effect">
                    <img class="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:filter group-hover:brightness-110"
                        :src="record.media[0]?.url?.default" :alt="record.name" />
                </div>

                <!-- Scanline Effect -->
                <div class="absolute inset-0 scanlines pointer-events-none"></div>

                <!-- Vignette Effect -->
                <div class="absolute inset-0 vignette pointer-events-none"></div>

                <!-- Pixel Overlay -->
                <div class="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 pixel-fade"></div>
            </a>

            <!-- Experience Level Badge -->
            <div class="absolute top-3 right-3 transform group-hover:translate-x-1 transition-transform duration-300">
                <span v-if="!record.free_with_subscription"
                    class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-bold shadow-lg border-2 pixel-badge"
                    :class="['bg-gradient-to-r from-[#F59E0B] to-[#F59E0B] text-white border-[#F59E0B]/30']">
                    <Sparkles class="w-4 h-4" />
                    <span class="hidden sm:inline">Epic</span> Loot
                </span>
                <span v-else
                    class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-bold shadow-lg border-2 pixel-badge"
                    :class="['bg-gradient-to-r from-[#8B5CF6] to-[#8B5CF6] text-white border-[#8B5CF6]/30']">
                    <Crown class="w-4 h-4" />
                    Legendary
                </span>
            </div>

            <!-- Interact Button with Game UI Styling -->
            <div
                class="absolute bottom-4 left-1/2 -translate-x-1/2 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10">
                <button @click="openProduct"
                    class="inline-flex items-center gap-2 px-6 py-2 rounded-md text-sm font-medium backdrop-blur-md text-white transition-colors duration-300 border-2 pixel-button"
                    :class="getInteractButtonClass">
                    <Eye class="w-4 h-4 text-white" />
                    Inspect Item
                </button>
            </div>
        </div>

        <!-- Content Section with Game UI Typography -->
        <div class="p-5 space-y-3 relative bg-[#1E293B]">
            <!-- Title with Pixel Font Styling -->
            <a href="#" @click.prevent="openProduct"
                class="block text-base sm:text-lg font-bold text-white hover:text-[#64FFDA] transition-colors duration-300 line-clamp-2">
                <span class="pixel-text">{{ record.name }}</span>
            </a>

            <!-- Resource/Capability Stats -->
            <div class="space-y-2 pt-2">
                <!-- Guild Member Status -->
                <div v-if="record.free_with_subscription"
                    class="stat-bar flex items-center text-sm text-[#8B5CF6] font-medium">
                    <div class="stat-icon w-6 h-6 flex items-center justify-center mr-2 bg-[#8B5CF6]/20 rounded-md pixel-icon">
                        <Crown class="w-4 h-4" />
                    </div>
                    Guild Member Item
                </div>

                <!-- Digital Resource Status -->
                <div v-else-if="record.type === 'Digital' && record.has_capability_access"
                    class="stat-bar flex items-center text-sm text-[#64FFDA] font-medium">
                    <div class="stat-icon w-6 h-6 flex items-center justify-center mr-2 bg-[#64FFDA]/20 rounded-md pixel-icon">
                        <Download class="w-4 h-4" />
                    </div>
                    <span class="flex items-center gap-1">
                        Digital Resource
                        <span class="inline-flex items-center px-2 py-0.5 bg-[#64FFDA]/10 rounded-md text-xs pixel-counter">
                            {{ remainingCapabilityDisplay }}
                        </span>
                    </span>
                </div>

                <!-- Project Template Status -->
                <div v-else-if="record.type === 'Project Templates' && record.has_capability_access"
                    class="stat-bar flex items-center text-sm text-[#64FFDA] font-medium">
                    <div class="stat-icon w-6 h-6 flex items-center justify-center mr-2 bg-[#64FFDA]/20 rounded-md pixel-icon">
                        <Code2 class="w-4 h-4" />
                    </div>
                    <span class="flex items-center gap-1">
                        Project Template
                        <span class="inline-flex items-center px-2 py-0.5 bg-[#64FFDA]/10 rounded-md text-xs pixel-counter">
                            {{ remainingCapabilityDisplay }}
                        </span>
                    </span>
                </div>

                <!-- Resource Depleted Warning -->
                <div v-else-if="record.is_out_of_usage"
                    class="stat-bar flex items-center text-sm text-[#F59E0B] font-medium">
                    <div class="stat-icon w-6 h-6 flex items-center justify-center mr-2 bg-[#F59E0B]/20 rounded-md pixel-icon">
                        <XOctagon class="w-4 h-4" />
                    </div>
                    Energy Depleted
                </div>

                <!-- Inventory Status -->
                <div v-if="record.is_purchase"
                    class="stat-bar flex items-center text-sm text-[#64FFDA] font-medium">
                    <div class="stat-icon w-6 h-6 flex items-center justify-center mr-2 bg-[#64FFDA]/20 rounded-md pixel-icon">
                        <Check class="w-4 h-4" />
                    </div>
                    In Your Inventory
                </div>
            </div>

            <!-- Game-like Status Banner -->
            <div v-if="record.show_capability_banner"
                class="p-3 rounded-md text-sm transition-transform hover:translate-y-1 duration-300 quest-banner"
                :class="getQuestBannerClass">
                <div class="flex items-start gap-3">
                    <div :class="getQuestIconClass">
                        <component :is="getQuestIcon" class="w-4 h-4 text-white" />
                    </div>
                    <div>
                        <p class="font-bold" :class="getQuestTextClass">{{ record.banner_info.title }}</p>
                        <p class="text-xs mt-1 opacity-80">{{ record.banner_info.description }}</p>
                    </div>
                </div>
            </div>

            <!-- Game UI Price and Action Section -->
            <div class="flex items-center justify-between pt-1">
                <!-- Price Display with 8-bit Styling -->
                <div class="space-y-1">
                    <p v-if="record.price > 0" class="flex flex-col">
                        <span class="text-xl sm:text-2xl font-extrabold text-[#64FFDA] pixel-price">
                            {{ makeMoney(record.price) }}
                        </span>
                        <span class="text-xs text-[#CBD5E1]/70">One-time purchase</span>
                    </p>
                    <p v-else class="text-xl sm:text-2xl font-extrabold text-[#64FFDA] flex items-center gap-2 pixel-price">
                        <Download class="w-5 h-5" />
                        Free
                    </p>
                </div>

                <!-- Purchase Button with Game UI Styling -->
                <button
                    v-if="(!usePage().props.authUserInfo?.data?.has_subscription || !record.free_with_subscription) && !record.is_purchase && !record.can_access"
                    @click="productCheckout"
                    class="relative inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-md font-semibold text-white transition-all duration-300 overflow-hidden group/btn action-button"
                    :class="[getActionButtonClass]">
                    <ShoppingCart class="relative h-4 w-4 sm:h-5 sm:w-5" />
                    <span class="relative text-sm sm:text-base">Purchase</span>
                </button>

                <!-- Download Button with Game UI Styling -->
                <button
                    v-else-if="record.can_access && !record.is_purchase"
                    @click="openProduct"
                    class="relative inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-md font-semibold text-white transition-all duration-300 overflow-hidden group/btn action-button bg-[#64FFDA] text-[#0F172A]">
                    <Download class="relative h-4 w-4 sm:h-5 sm:w-5" />
                    <span class="relative text-sm sm:text-base">Download</span>
                </button>

                <!-- View Button with Game UI Styling -->
                <button
                    v-else-if="record.is_purchase"
                    @click="openProduct"
                    class="relative inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-md font-semibold text-white transition-all duration-300 overflow-hidden group/btn action-button bg-[#8B5CF6]">
                    <Eye class="relative h-4 w-4 sm:h-5 sm:w-5" />
                    <span class="relative text-sm sm:text-base">View</span>
                </button>
            </div>
        </div>

        <!-- Experience Bar (Bottom) -->
        <div class="absolute bottom-0 left-0 w-full h-1.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 pixel-bar"
            :class="[getExpBarClass]"></div>
    </div>
</template>

<script setup lang="ts">
import { PropType, computed, inject } from "vue";
import { api } from "../../../Boot/axios.js";
import { router, usePage } from "@inertiajs/vue3";
import { course } from "../../../Types/types";
import { makeMoney } from "@frontend_components/../Composable/Money.js";
const route = inject('route');
import {
    ShoppingCart,
    Crown,
    Check,
    Download,
    Eye,
    Sparkles,
    Code2,
    XOctagon,
    AlertTriangle,
    RefreshCw,
    Zap
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

// Formatted remaining capability display
const remainingCapabilityDisplay = computed(() => {
    if (props.record.remaining_usage === -1) {
        return 'Unlimited';
    }

    return `${props.record.remaining_usage} left`;
});

// Game UI Border Styling
const getProductBorderClass = computed(() => {
    if (isPremium.value) return 'border-[#8B5CF6] hover:shadow-[#8B5CF6]/30';
    if (isFree.value) return 'border-[#64FFDA] hover:shadow-[#64FFDA]/30';
    if (isPurchased.value) return 'border-[#8B5CF6] hover:shadow-[#8B5CF6]/30';
    return 'border-[#F59E0B] hover:shadow-[#F59E0B]/30';
});

// Pixel Corner Classes
const getPixelCornerClass = computed(() => {
    if (isPremium.value) return 'pixel-corner-purple';
    if (isFree.value) return 'pixel-corner-teal';
    if (isPurchased.value) return 'pixel-corner-teal';
    return 'pixel-corner-amber';
});

// Health Bar Class (top)
const getHealthBarClass = computed(() => {
    if (isPremium.value) return 'bg-[#8B5CF6] pixel-bar-purple';
    if (isFree.value) return 'bg-[#64FFDA] pixel-bar-teal';
    if (isPurchased.value) return 'bg-[#8B5CF6] pixel-bar-purple';
    return 'bg-[#F59E0B] pixel-bar-amber';
});

// Experience Bar Class (bottom)
const getExpBarClass = computed(() => {
    if (isPremium.value) return 'bg-[#8B5CF6] pixel-bar-purple';
    if (isFree.value) return 'bg-[#64FFDA] pixel-bar-teal';
    if (isPurchased.value) return 'bg-[#8B5CF6] pixel-bar-purple';
    return 'bg-[#F59E0B] pixel-bar-amber';
});

// Quest Banner Styling (Game UI Status Banner)
const getQuestBannerClass = computed(() => {
    if (!props.record.banner_info) return '';

    switch (props.record.banner_info.type) {
        case 'depleted':
            return 'bg-[#F59E0B]/10 border border-[#F59E0B]/30 text-[#F59E0B] pixel-border-amber';
        case 'limited':
            return 'bg-[#64FFDA]/10 border border-[#64FFDA]/30 text-[#64FFDA] pixel-border-teal';
        case 'upgrade':
            return 'bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 text-[#8B5CF6] pixel-border-purple';
        default:
            return 'bg-[#64FFDA]/10 border border-[#64FFDA]/30 text-[#64FFDA] pixel-border-teal';
    }
});

// Quest Icon
const getQuestIcon = computed(() => {
    if (!props.record.banner_info) return Crown;

    switch (props.record.banner_info.type) {
        case 'depleted':
            return XOctagon;
        case 'limited':
            return Download;
        case 'upgrade':
            return Zap;
        default:
            return AlertTriangle;
    }
});

// Quest Icon Container Class
const getQuestIconClass = computed(() => {
    if (!props.record.banner_info) return '';

    switch (props.record.banner_info.type) {
        case 'depleted':
            return 'flex-shrink-0 w-8 h-8 rounded-md bg-[#F59E0B]/20 flex items-center justify-center pixel-border-amber';
        case 'limited':
            return 'flex-shrink-0 w-8 h-8 rounded-md bg-[#64FFDA]/20 flex items-center justify-center pixel-border-teal';
        case 'upgrade':
            return 'flex-shrink-0 w-8 h-8 rounded-md bg-[#8B5CF6]/20 flex items-center justify-center pixel-border-purple';
        default:
            return 'flex-shrink-0 w-8 h-8 rounded-md bg-[#64FFDA]/20 flex items-center justify-center pixel-border-teal';
    }
});

// Quest Text Class
const getQuestTextClass = computed(() => {
    if (!props.record.banner_info) return '';

    switch (props.record.banner_info.type) {
        case 'depleted':
            return 'text-[#F59E0B]';
        case 'limited':
            return 'text-[#64FFDA]';
        case 'upgrade':
            return 'text-[#8B5CF6]';
        default:
            return 'text-[#64FFDA]';
    }
});

// Action Button Style
const getActionButtonClass = computed(() => {
    if (isPremium.value) return 'bg-[#8B5CF6]';
    if (isFree.value) return 'bg-[#64FFDA] text-[#0F172A]';
    return 'bg-[#F59E0B]';
});

// Interactive Button Style
const getInteractButtonClass = computed(() => {
    if (isPremium.value) return 'border-[#8B5CF6] bg-[#8B5CF6]/40';
    if (isFree.value) return 'border-[#64FFDA] bg-[#64FFDA]/40';
    if (isPurchased.value) return 'border-[#8B5CF6] bg-[#8B5CF6]/40';
    return 'border-[#F59E0B] bg-[#F59E0B]/40';
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

<style scoped>
/* Game UI and Retro Video Game Elements */

/* CRT and Scanline Effects */
.crt-effect {
    position: relative;
    overflow: hidden;
}

.scanlines {
    background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0) 50%,
        rgba(0, 0, 0, 0.2) 50%,
        rgba(0, 0, 0, 0.2)
    );
    background-size: 100% 4px;
    opacity: 0;
    transition: opacity 0.3s;
}

.vignette {
    background: radial-gradient(
        circle at center,
        transparent 60%,
        rgba(0, 0, 0, 0.6) 100%
    );
    opacity: 0;
    transition: opacity 0.3s;
}

.group:hover .scanlines,
.group:hover .vignette {
    opacity: 0.3;
}

/* Pixel Art Elements */
.pixel-corner-tl {
    background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='none' stroke='%2364FFDA' stroke-width='2' d='M1 8h7v7'/%3E%3C/svg%3E");
}

.pixel-corner-tr {
    background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='none' stroke='%2364FFDA' stroke-width='2' d='M15 8h-7v7'/%3E%3C/svg%3E");
}

.pixel-corner-bl {
    background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='none' stroke='%2364FFDA' stroke-width='2' d='M1 8h7v-7'/%3E%3C/svg%3E");
}

.pixel-corner-br {
    background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='none' stroke='%2364FFDA' stroke-width='2' d='M15 8h-7v-7'/%3E%3C/svg%3E");
}

.pixel-corner-tl.pixel-corner-purple {
    background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='none' stroke='%238B5CF6' stroke-width='2' d='M1 8h7v7'/%3E%3C/svg%3E");
}

.pixel-corner-tr.pixel-corner-purple {
    background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='none' stroke='%238B5CF6' stroke-width='2' d='M15 8h-7v7'/%3E%3C/svg%3E");
}

.pixel-corner-bl.pixel-corner-purple {
    background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='none' stroke='%238B5CF6' stroke-width='2' d='M1 8h7v-7'/%3E%3C/svg%3E");
}

.pixel-corner-br.pixel-corner-purple {
    background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='none' stroke='%238B5CF6' stroke-width='2' d='M15 8h-7v-7'/%3E%3C/svg%3E");
}

.pixel-corner-tl.pixel-corner-amber {
    background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='none' stroke='%23F59E0B' stroke-width='2' d='M1 8h7v7'/%3E%3C/svg%3E");
}

.pixel-corner-tr.pixel-corner-amber {
    background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='none' stroke='%23F59E0B' stroke-width='2' d='M15 8h-7v7'/%3E%3C/svg%3E");
}

.pixel-corner-bl.pixel-corner-amber {
    background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='none' stroke='%23F59E0B' stroke-width='2' d='M1 8h7v-7'/%3E%3C/svg%3E");
}

.pixel-corner-br.pixel-corner-amber {
    background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='none' stroke='%23F59E0B' stroke-width='2' d='M15 8h-7v-7'/%3E%3C/svg%3E");
}

/* Health/EXP Bars with Pixel Style */
.pixel-bar {
    position: relative;
    overflow: hidden;
    box-shadow: 0 0 8px currentColor;
}

.pixel-bar::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(
        to right,
        rgba(255, 255, 255, 0.1) 0%,
        rgba(255, 255, 255, 0.1) 20%,
        rgba(255, 255, 255, 0.5) 20%,
        rgba(255, 255, 255, 0.5) 40%,
        rgba(255, 255, 255, 0.1) 40%,
        rgba(255, 255, 255, 0.1) 60%,
        rgba(255, 255, 255, 0.5) 60%,
        rgba(255, 255, 255, 0.5) 80%,
        rgba(255, 255, 255, 0.1) 80%,
        rgba(255, 255, 255, 0.1) 100%
    );
    background-size: 20px 100%;
    animation: bar-scroll 3s linear infinite;
}

@keyframes bar-scroll {
    from { background-position: 0 0; }
    to { background-position: 20px 0; }
}

/* Pixel-style Badges */
.pixel-badge {
    position: relative;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    animation: badge-pulse 2s infinite;
}

@keyframes badge-pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}

/* Buttons with Pixel Art Style */
.pixel-button {
    position: relative;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.pixel-button::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border: 2px solid currentColor;
    opacity: 0.3;
    z-index: -1;
}

.action-button {
    position: relative;
    box-shadow: 0 4px 0 rgba(0, 0, 0, 0.3);
    transition: all 0.2s;
}

.action-button:active {
    transform: translateY(4px);
    box-shadow: 0 0 0 rgba(0, 0, 0, 0.3);
}

/* Stats Display (similar to character stats in RPGs) */
.stat-bar {
    position: relative;
    padding: 2px 0;
    transition: all 0.3s;
}

.stat-bar:hover {
    transform: translateX(4px);
}

.pixel-icon {
    position: relative;
    border: 1px solid currentColor;
}

.pixel-icon::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
        45deg,
        rgba(255, 255, 255, 0.1) 25%,
        transparent 25%,
        transparent 50%,
        rgba(255, 255, 255, 0.1) 50%,
        rgba(255, 255, 255, 0.1) 75%,
        transparent 75%
    );
    background-size: 4px 4px;
    opacity: 0.3;
}

/* Pixel Counter for Resource Stats */
.pixel-counter {
    border: 1px solid currentColor;
    font-family: monospace;
    letter-spacing: 1px;
}

/* Pixel Text Effects */
.pixel-text {
    position: relative;
    display: inline-block;
    text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.5);
    letter-spacing: 0.5px;
}

.pixel-text::after {
    content: attr(data-text);
    position: absolute;
    left: 2px;
    top: 2px;
    color: rgba(0, 0, 0, 0.3);
    z-index: -1;
}

/* Pixel Price Display */
.pixel-price {
    position: relative;
    font-family: monospace;
    letter-spacing: 1px;
    text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.5);
    animation: price-pulse 3s ease-in-out infinite;
}

@keyframes price-pulse {
    0%, 100% { opacity: 0.9; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.05); }
}

/* Pixel Borders for Banners */
.pixel-border-teal {
    position: relative;
    border-style: solid;
    box-shadow: 0 0 10px rgba(100, 255, 218, 0.2);
}

.pixel-border-purple {
    position: relative;
    border-style: solid;
    box-shadow: 0 0 10px rgba(139, 92, 246, 0.2);
}

.pixel-border-amber {
    position: relative;
    border-style: solid;
    box-shadow: 0 0 10px rgba(245, 158, 11, 0.2);
}

/* Quest Banner (Game UI Status Banner) */
.quest-banner {
    position: relative;
    overflow: hidden;
}

.quest-banner::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.1),
        transparent
    );
    animation: quest-pulse 3s infinite;
}

@keyframes quest-pulse {
    0% { left: -100%; }
    50% { left: 100%; }
    100% { left: 100%; }
}

/* Pixel Fade for Image Overlay */
.pixel-fade {
    image-rendering: pixelated;
    background-size: 100% 100%;
}

/* Mobile Optimizations */
@media (max-width: 640px) {
    .scanlines, .vignette {
        display: none; /* Disable effects on mobile for better performance */
    }

    .pixel-bar::after {
        animation: none;
    }

    .action-button:active {
        transform: none;
    }
}
</style>
