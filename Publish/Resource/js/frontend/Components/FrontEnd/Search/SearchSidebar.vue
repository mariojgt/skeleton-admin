<template>
    <div>
        <!-- RPG-styled search button -->
        <button @click="openSearch" tabindex="0" :class="props.buttonClass">
            <icon componentId="magnifier" class="size-6" />
        </button>

        <!-- Transition wrapper with enhanced RPG animation -->
        <Transition enter-active-class="duration-300 ease-out" enter-from-class="opacity-0" enter-to-class="opacity-100"
            leave-active-class="duration-200 ease-in" leave-from-class="opacity-100" leave-to-class="opacity-0">
            <!-- Backdrop with magical overlay -->
            <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm" style="z-index: 9999"
                @click="isOpen = false">
                <!-- Sidebar panel with enhanced RPG slide transition -->
                <Transition enter-active-class="transform transition ease-out duration-300"
                    enter-from-class="translate-x-full" enter-to-class="translate-x-0"
                    leave-active-class="transform transition ease-in duration-200" leave-from-class="translate-x-0"
                    leave-to-class="translate-x-full">
                    <div v-if="isOpen" class="fixed inset-y-0 right-0 max-w-full flex overflow-hidden" @click.stop>
                        <!-- RPG Panel Container with magical effects -->
                        <div class="w-screen max-w-5xl rpg-panel-container">
                            <!-- RPG-styled background elements -->
                            <div class="absolute inset-0">
                                <!-- Base gradients with fantasy feel -->
                                <div
                                    class="absolute inset-0 bg-gradient-to-br from-[#328AF1]/10 via-[#8B60ED]/10 to-[#21C8F6]/10">
                                </div>

                                <!-- Fantasy map grid pattern -->
                                <div
                                    class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDUgTCA1IDAgTSAxNSAwIEwgMjAgNSBNIDAgMTUgTCA1IDIwIE0gMTUgMjAgTCAyMCAxNSIgc3Ryb2tlPSIjQkFEOUZDIiBzdHJva2Utd2lkdGg9IjAuNSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20 fantasy-grid">
                                </div>

                                <!-- RPG magical particles -->
                                <div class="absolute inset-0 overflow-hidden">
                                    <div class="particles-container">
                                        <div v-for="i in 10" :key="i" class="particle absolute"
                                            :class="getParticleClass(i)" :style="getParticleStyle(i)">
                                        </div>
                                    </div>
                                </div>

                                <!-- RPG UI scanlines -->
                                <div class="absolute inset-0 bg-scanlines opacity-5"></div>

                                <!-- RPG magical aura effect -->
                                <div
                                    class="absolute inset-0 bg-gradient-to-t from-[#8B60ED]/10 to-transparent magical-aura">
                                </div>

                                <!-- Fantasy corner elements -->
                                <div
                                    class="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#328AF1] opacity-50 corner-accent">
                                </div>
                                <div
                                    class="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#328AF1] opacity-50 corner-accent">
                                </div>
                                <div
                                    class="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#328AF1] opacity-50 corner-accent">
                                </div>
                                <div
                                    class="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#328AF1] opacity-50 corner-accent">
                                </div>
                            </div>

                            <!-- RPG-styled Tabs -->
                            <SearchTab v-model="activeTab" @close="isOpen = false" />

                            <!-- Notification Tab -->
                            <notification v-if="activeTab === 'notifications'" />

                            <!-- Chat Tab -->
                            <div v-if="activeTab === 'chat'" class="h-full">
                                <template v-if="hasSubscription">
                                    <bobAI />
                                </template>
                                <template v-else>
                                    <div class="h-full flex items-center justify-center p-6">
                                        <div class="max-w-lg w-full">
                                            <!-- RPG-styled Premium Banner -->
                                            <div
                                                class="relative overflow-hidden rounded-xl bg-[#1E2A42]/90 border-2 border-[#328AF1]/30 rpg-premium-container">
                                                <!-- Decorative Background -->
                                                <div
                                                    class="absolute inset-0 bg-gradient-to-br from-[#328AF1]/10 via-[#8B60ED]/10 to-[#21C8F6]/10">
                                                </div>
                                                <div
                                                    class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDUgTCA1IDAgTSAxNSAwIEwgMjAgNSBNIDAgMTUgTCA1IDIwIE0gMTUgMjAgTCAyMCAxNSIgc3Ryb2tlPSIjQkFEOUZDIiBzdHJva2Utd2lkdGg9IjAuNSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20">
                                                </div>

                                                <!-- Fantasy corner elements -->
                                                <div
                                                    class="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#328AF1] opacity-50">
                                                </div>
                                                <div
                                                    class="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#328AF1] opacity-50">
                                                </div>
                                                <div
                                                    class="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#328AF1] opacity-50">
                                                </div>
                                                <div
                                                    class="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#328AF1] opacity-50">
                                                </div>

                                                <div class="relative p-8">
                                                    <!-- Header with RPG styling -->
                                                    <div class="text-center mb-6">
                                                        <div class="flex justify-center mb-4">
                                                            <div class="relative">
                                                                <!-- Glow Effect -->
                                                                <div
                                                                    class="absolute inset-0 bg-[#328AF1]/40 rounded-full blur-xl">
                                                                </div>
                                                                <div
                                                                    class="relative w-16 h-16 bg-gradient-to-br from-[#328AF1] to-[#8B60ED] rounded-full flex items-center justify-center rpg-float-slow">
                                                                    <Bot class="w-8 h-8 text-white" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h3 class="text-2xl font-bold text-white mb-2 drop-shadow-text">
                                                            Unlock Legendary AI Assistant
                                                        </h3>
                                                        <p class="text-[#BAD9FC] max-w-sm mx-auto">
                                                            Summon your personal AI companion to guide your game
                                                            development journey with powerful spells of code and
                                                            optimization.
                                                        </p>
                                                    </div>

                                                    <!-- Features Grid with RPG styling -->
                                                    <div class="grid grid-cols-2 gap-4 mb-8">
                                                        <div
                                                            class="flex items-center space-x-3 bg-[#253D63]/70 rounded-lg p-3 border border-[#328AF1]/20 rpg-feature-item group hover:-translate-y-1 transition-all">
                                                            <div
                                                                class="flex-shrink-0 w-8 h-8 bg-[#328AF1]/20 rounded-lg flex items-center justify-center group-hover:bg-[#328AF1]/30 transition-all">
                                                                <Code2 class="w-4 h-4 text-[#328AF1]" />
                                                            </div>
                                                            <span class="text-sm text-[#BAD9FC]">Code
                                                                Enchantments</span>
                                                        </div>
                                                        <div
                                                            class="flex items-center space-x-3 bg-[#253D63]/70 rounded-lg p-3 border border-[#8B60ED]/20 rpg-feature-item group hover:-translate-y-1 transition-all">
                                                            <div
                                                                class="flex-shrink-0 w-8 h-8 bg-[#8B60ED]/20 rounded-lg flex items-center justify-center group-hover:bg-[#8B60ED]/30 transition-all">
                                                                <Zap class="w-4 h-4 text-[#8B60ED]" />
                                                            </div>
                                                            <span class="text-sm text-[#BAD9FC]">Performance
                                                                Boosts</span>
                                                        </div>
                                                        <div
                                                            class="flex items-center space-x-3 bg-[#253D63]/70 rounded-lg p-3 border border-[#1AAB8B]/20 rpg-feature-item group hover:-translate-y-1 transition-all">
                                                            <div
                                                                class="flex-shrink-0 w-8 h-8 bg-[#1AAB8B]/20 rounded-lg flex items-center justify-center group-hover:bg-[#1AAB8B]/30 transition-all">
                                                                <Sparkles class="w-4 h-4 text-[#1AAB8B]" />
                                                            </div>
                                                            <span class="text-sm text-[#BAD9FC]">Wisdom Scrolls</span>
                                                        </div>
                                                        <div
                                                            class="flex items-center space-x-3 bg-[#253D63]/70 rounded-lg p-3 border border-[#F19A1A]/20 rpg-feature-item group hover:-translate-y-1 transition-all">
                                                            <div
                                                                class="flex-shrink-0 w-8 h-8 bg-[#F19A1A]/20 rounded-lg flex items-center justify-center group-hover:bg-[#F19A1A]/30 transition-all">
                                                                <MessagesSquare class="w-4 h-4 text-[#F19A1A]" />
                                                            </div>
                                                            <span class="text-sm text-[#BAD9FC]">Magic Insights</span>
                                                        </div>
                                                    </div>

                                                    <!-- RPG-Style CTA Button -->
                                                    <div class="text-center">
                                                        <a href="\"
                                                            class="rpg-button primary-button group relative px-6 py-3 bg-gradient-to-r from-[#328AF1] to-[#8B60ED] rounded-md overflow-hidden inline-flex items-center">
                                                            <!-- Button shine effect -->
                                                            <div
                                                                class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                                            </div>

                                                            <!-- Button overlay glow -->
                                                            <div
                                                                class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rpg-button-glow">
                                                            </div>

                                                            <!-- RPG button border frames -->
                                                            <div class="absolute inset-0 rpg-button-frame opacity-70">
                                                            </div>

                                                            <span
                                                                class="relative flex items-center justify-center gap-2 text-white font-bold">
                                                                <Crown class="w-5 h-5" />
                                                                <span>Unlock Premium Powers</span>
                                                                <ArrowRight
                                                                    class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>

                                                <!-- RPG Bottom Border -->
                                                <div
                                                    class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#328AF1] via-[#8B60ED] to-[#21C8F6] animate-gradient-shift">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </template>
                            </div>

                            <!-- Search Tab with RPG styling -->
                            <div v-else-if="activeTab === 'search'" class="h-full flex flex-col relative z-10">
                                <!-- Search input section with RPG styling -->
                                <div class="px-4 py-6 sm:px-6 border-b border-[#328AF1]/30 flex-shrink-0">
                                    <div class="mt-4">
                                        <!-- RPG Quest Badge -->
                                        <div
                                            class="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-[#328AF1]/10 rounded-lg border-2 border-[#328AF1]/20 rpg-quest-marker">
                                            <icon componentId="magnifier" class="size-5 text-[#328AF1]" />
                                            <span class="text-[#BAD9FC] font-medium">Knowledge Seeker</span>
                                            <span
                                                class="rpg-badge ml-1 px-1.5 py-0.5 bg-[#328AF1]/20 text-[#328AF1] rounded text-xs font-bold">QUEST</span>
                                        </div>

                                        <div
                                            class="relative rounded-lg bg-[#253D63]/50 border border-[#328AF1]/20 group hover:border-[#328AF1]/40 transition-all">
                                            <div class="absolute inset-y-0 left-3 flex items-center">
                                                <svg class="h-5 w-5 text-[#328AF1]" fill="none" stroke="currentColor"
                                                    viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                                </svg>
                                            </div>
                                            <input ref="searchInput" type="text" v-model="searchQuery"
                                                class="block w-full bg-transparent border-0 rounded-lg py-2 pl-10 pr-3 text-[#BAD9FC] placeholder-[#BAD9FC]/50 focus:outline-none focus:ring-2 focus:ring-[#328AF1]"
                                                placeholder="Seek knowledge..." />

                                            <!-- Subtle glow effect on focus -->
                                            <div
                                                class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#328AF1]/5 rounded-lg pointer-events-none">
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Scrollable content area with RPG styling -->
                                <div class="flex-1 overflow-y-auto rpg-scrollbar">
                                    <div class="px-4 py-6 sm:px-6">
                                        <!-- Suggested Searches with RPG styling -->
                                        <template v-for="(item, index) in suggestedSearches" :key="index">
                                            <div class="mb-8" v-if="item.length">
                                                <h3
                                                    class="text-lg text-white mb-3 font-bold drop-shadow-text flex items-center">
                                                    <span>Suggested {{ index }}</span>
                                                    <div
                                                        class="h-px flex-grow bg-gradient-to-r from-[#328AF1]/50 to-transparent ml-3">
                                                    </div>
                                                </h3>
                                                <div class="flex flex-wrap gap-2">
                                                    <button v-for="tag in item" :key="tag" @click="searchQuery = tag"
                                                        class="px-4 py-1.5 rounded-full font-bold text-sm bg-[#253D63]/70 text-[#BAD9FC] border border-[#328AF1]/20 hover:bg-[#328AF1]/20 hover:border-[#328AF1]/40 transition-all hover:scale-105 hover:shadow-glow-blue">
                                                        {{ tag }}
                                                    </button>
                                                </div>
                                            </div>
                                        </template>

                                        <!-- Courses Section with RPG styling -->
                                        <div v-if="courseSearch.length" class="mb-8">
                                            <h3
                                                class="text-lg text-white mb-3 font-bold drop-shadow-text flex items-center">
                                                <span>Courses</span>
                                                <div
                                                    class="h-px flex-grow bg-gradient-to-r from-[#328AF1]/50 to-transparent ml-3">
                                                </div>
                                            </h3>
                                            <div class="space-y-3">
                                                <div v-for="result in courseSearch" :key="result.id"
                                                    class="p-4 rounded-lg bg-[#253D63]/70 border border-[#328AF1]/20 hover:bg-[#253D63] hover:border-[#328AF1]/40 transition-all cursor-pointer group hover:-translate-y-1 rpg-search-item">
                                                    <button @click="openCourse(result.slug)" class="w-full">
                                                        <div class="flex items-center space-x-4 w-full">
                                                            <!-- Image with RPG-style frame -->
                                                            <div
                                                                class="relative h-12 w-12 rounded-lg overflow-hidden border border-[#328AF1]/30 group-hover:border-[#328AF1]/60 transition-all">
                                                                <div
                                                                    class="absolute inset-0 bg-gradient-to-br from-[#328AF1]/10 to-[#8B60ED]/10">
                                                                </div>
                                                                <img class="h-full w-full rounded-lg object-cover relative z-10"
                                                                    :src="result.media[0].url.default"
                                                                    :alt="result.title" />
                                                            </div>
                                                            <div class="flex-1 min-w-0">
                                                                <h4 class="text-base font-medium text-[#BAD9FC] group-hover:text-white transition-colors truncate"
                                                                    v-html="highlightSearch(result.title, searchQuery)" />
                                                            </div>
                                                        </div>
                                                    </button>

                                                    <!-- Hover glow effect -->
                                                    <div
                                                        class="absolute inset-0 bg-gradient-to-r from-[#328AF1]/5 to-[#8B60ED]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-lg">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Products Section with RPG styling -->
                                        <div v-if="productSearch.length" class="mb-8">
                                            <h3
                                                class="text-lg text-white mb-3 font-bold drop-shadow-text flex items-center">
                                                <span>Item</span>
                                                <div
                                                    class="h-px flex-grow bg-gradient-to-r from-[#328AF1]/50 to-transparent ml-3">
                                                </div>
                                            </h3>
                                            <div class="space-y-3">
                                                <div v-for="product in productSearch" :key="product.id"
                                                    class="p-4 rounded-lg bg-[#253D63]/70 border border-[#8B60ED]/20 hover:bg-[#253D63] hover:border-[#8B60ED]/40 transition-all cursor-pointer group hover:-translate-y-1 rpg-search-item">
                                                    <button class="w-full" @click="openProduct(product.slug)">
                                                        <div class="flex items-center space-x-4 w-full">
                                                            <!-- Image with RPG-style frame -->
                                                            <div
                                                                class="relative h-12 w-12 rounded-lg overflow-hidden border border-[#8B60ED]/30 group-hover:border-[#8B60ED]/60 transition-all">
                                                                <div
                                                                    class="absolute inset-0 bg-gradient-to-br from-[#8B60ED]/10 to-[#B372BD]/10">
                                                                </div>
                                                                <img class="h-full w-full rounded-lg object-cover relative z-10"
                                                                    :src="product.media[0].url.default"
                                                                    :alt="product.name" />
                                                            </div>
                                                            <h4 class="text-base font-medium text-[#BAD9FC] group-hover:text-white transition-colors truncate"
                                                                v-html="highlightSearch(product.name, searchQuery)" />
                                                        </div>
                                                    </button>

                                                    <!-- Hover glow effect -->
                                                    <div
                                                        class="absolute inset-0 bg-gradient-to-r from-[#8B60ED]/5 to-[#B372BD]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-lg">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Transition>
            </div>
        </Transition>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick, watch } from "vue";
import lodash from 'lodash';
const { debounce } = lodash;
import icon from "@frontend_components/FrontEnd/Icons/dynamicIcon.vue";
import { api } from "../../../Boot/axios.js";
import { router, usePage, Link } from "@inertiajs/vue3";
import SearchTab from "./SearchTab.vue";
import notification from "./Notification.vue";
import bobAI from "./BobAI.vue";
import {
    Bot,
    Crown,
    ArrowRight,
    Code2,
    Zap,
    Sparkles,
    MessagesSquare
} from 'lucide-vue-next';

const hasSubscription = computed(() => {
    return usePage().props.authUserInfo?.data?.has_subscription || false;
});

const isOpen = ref(false);
const searchQuery = ref("");
const searchInput = ref(null);
let suggestedSearches = $ref([]);
let courseSearch = $ref([]);
let productSearch = $ref([]); // New ref for products
let activeTab = $ref("search");

// Props
const props = defineProps({
    buttonClass: {
        type: String,
        default: "m-1 btn btn-square btn-primary",
    },
    openNotification: {
        type: Function,
        default: () => { },
    },
});

// RPG-style particle generation functions
const getParticleClass = (index) => {
    const classes = [
        'bg-[#328AF1]/10',
        'bg-[#8B60ED]/10',
        'bg-[#21C8F6]/10',
        'bg-[#1AAB8B]/10'
    ];
    return classes[index % classes.length] + (index % 3 === 0 ? ' rpg-particle-star' : ' rounded-full');
};

const getParticleStyle = (index) => {
    const size = 4 + Math.floor(Math.random() * 8);
    const left = Math.floor(Math.random() * 100);
    const top = Math.floor(Math.random() * 100);
    const delay = Math.floor(Math.random() * 5);
    const duration = 15 + Math.floor(Math.random() * 20);

    return {
        width: `${size}px`,
        height: `${size}px`,
        left: `${left}%`,
        top: `${top}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`
    };
};

const openSearch = () => {
    isOpen.value = true;
    nextTick(() => {
        searchInput.value?.focus();
        debouncedSearch();
    });
};

const handleKeydown = (event) => {
    if (
        event.key === "/" &&
        !["INPUT", "TEXTAREA"].includes(document.activeElement?.tagName)
    ) {
        event.preventDefault();
        openSearch();
    }
    if (event.key === "Escape" && isOpen.value) {
        isOpen.value = false;
    }
};

onMounted(() => {
    document.addEventListener("keydown", handleKeydown);
});

onUnmounted(() => {
    document.removeEventListener("keydown", handleKeydown);
});

const highlightSearch = (text, searchInput) => {
    if (!searchInput || !text) return text;
    const escapedSearchString = searchInput.replace(
        /[.*+?^${}()|[\]\\]/g,
        "\\$&"
    );
    return text.replace(
        new RegExp(escapedSearchString, "gi"),
        (match) => `<span class="text-[#328AF1] font-bold">${match}</span>`
    );
};

watch(searchQuery, () => {
    debouncedSearch();
});

const debouncedSearch = debounce(async () => {
    try {
        const response = await api.post(route("app.search"), {
            q: searchQuery.value,
        });
        suggestedSearches = response.data.suggestions;
        courseSearch = response.data.courses;
        productSearch = response.data.products; // Add products to the search results
    } catch (error) {
        console.error("Search error:", error);
    }
}, 300);

const openCourse = (slug) => {
    router.visit(route("course.view", slug));
    isOpen.value = false;
};

const openProduct = (slug) => {
    router.visit(route("store.view", slug));
    isOpen.value = false;
};

// Method to programmatically toggle notifications
const openNotifications = () => {
    isOpen.value = true;
    activeTab = "notifications";
    debouncedSearch();
};

// Expose the toggle method to parent components
defineExpose({
    openNotifications
});
</script>

<style scoped>
/* RPG Panel Container */
.rpg-panel-container {
    background-color: #1E2A42;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.5), 0 0 15px rgba(50, 138, 241, 0.2);
    border-left: 2px solid rgba(50, 138, 241, 0.3);
    position: relative;
    overflow: hidden;
}

/* Fantasy Grid Animation */
.fantasy-grid {
    animation: fantasy-grid-pulse 10s ease-in-out infinite;
}

@keyframes fantasy-grid-pulse {

    0%,
    100% {
        opacity: 0.1;
    }

    50% {
        opacity: 0.3;
    }
}

/* Magical Aura */
.magical-aura {
    opacity: 0.5;
    animation: magical-pulse 5s ease-in-out infinite;
}

@keyframes magical-pulse {

    0%,
    100% {
        opacity: 0.5;
    }

    50% {
        opacity: 0.8;
    }
}

/* Corner Accents Animation */
.corner-accent {
    transition: all 0.5s ease;
}

.rpg-panel-container:hover .corner-accent {
    opacity: 0.8;
}

/* RPG Quest Badge with Pulse Effect */
.rpg-quest-marker {
    position: relative;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(50, 138, 241, 0.2);
    transition: all 0.3s ease;
}

.rpg-quest-marker:hover {
    box-shadow: 0 0 15px rgba(50, 138, 241, 0.4);
}

/* RPG Badge with Shine Animation */
.rpg-badge {
    position: relative;
    overflow: hidden;
}

.rpg-badge::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transform: translateX(-100%);
    animation: rpg-badge-shine 3s infinite;
}

@keyframes rpg-badge-shine {
    100% {
        transform: translateX(100%);
    }
}

/* RPG Feature Item Animation */
.rpg-feature-item {
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
}

.rpg-feature-item::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent);
    transform: translateX(-100%);
    animation: rpg-feature-shine 5s infinite;
}

@keyframes rpg-feature-shine {
    100% {
        transform: translateX(100%);
    }
}

/* RPG Search Item Animation */
.rpg-search-item {
    position: relative;
    transition: all 0.3s ease;
}

/* RPG Button Styling */
.rpg-button {
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.rpg-button:hover {
    transform: translateY(-2px);
}

.primary-button:hover {
    box-shadow: 0 10px 25px rgba(50, 138, 241, 0.3);
}

.rpg-button-glow {
    background: radial-gradient(circle at center, rgba(50, 138, 241, 0.4) 0%, transparent 70%);
}

/* RPG Button Frame Decorations */
.rpg-button-frame::before,
.rpg-button-frame::after {
    content: "";
    position: absolute;
    width: 8px;
    height: 8px;
    border: 2px solid rgba(139, 96, 237, 0.5);
}

.rpg-button-frame::before {
    top: -1px;
    left: -1px;
    border-right: none;
    border-bottom: none;
}

.rpg-button-frame::after {
    bottom: -1px;
    right: -1px;
    border-left: none;
    border-top: none;
}

/* Custom RPG Scrollbar */
.rpg-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: #328AF1 #1E2A42;
}

.rpg-scrollbar::-webkit-scrollbar {
    width: 6px;
}

.rpg-scrollbar::-webkit-scrollbar-track {
    background: #1E2A42;
    border-radius: 3px;
}

.rpg-scrollbar::-webkit-scrollbar-thumb {
    background: #328AF1;
    border-radius: 3px;
    border: 1px solid rgba(50, 138, 241, 0.3);
}

.rpg-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #8B60ED;
}

/* RPG Premium Container */
.rpg-premium-container {
    transition: all 0.3s ease;
}

.rpg-premium-container:hover {
    box-shadow: 0 0 30px rgba(50, 138, 241, 0.2);
    transform: translateY(-5px);
}

/* Glow Effect */
.shadow-glow-blue {
    box-shadow: 0 0 15px rgba(50, 138, 241, 0.3);
}

/* Drop Shadow Text */
.drop-shadow-text {
    text-shadow: 0 0 10px rgba(50, 138, 241, 0.5);
}

/* Animated Gradient */
.animate-gradient-shift {
    background-size: 200% 200%;
    animation: gradient-shift 8s ease infinite;
}

@keyframes gradient-shift {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}

/* RPG UI scanlines */
.bg-scanlines {
    background-image: linear-gradient(0deg,
            transparent 0%,
            rgba(50, 138, 241, 0.05) 50%,
            transparent 100%);
    background-size: 100% 4px;
}

/* RPG Particle Effects */
.rpg-particle-star {
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
}

.particle {
    opacity: 0.6;
    position: absolute;
    animation: rpg-particle-float linear infinite;
}

@keyframes rpg-particle-float {
    0% {
        transform: translateY(0) translateX(0) rotate(0deg);
    }

    25% {
        transform: translateY(-20px) translateX(10px) rotate(90deg);
    }

    50% {
        transform: translateY(-30px) translateX(-10px) rotate(180deg);
    }

    75% {
        transform: translateY(-10px) translateX(-20px) rotate(270deg);
    }

    100% {
        transform: translateY(0) translateX(0) rotate(360deg);
    }
}

/* Floating Animation */
.rpg-float-slow {
    animation: float 8s ease-in-out infinite;
}

@keyframes float {
    0% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-10px);
    }

    100% {
        transform: translateY(0px);
    }
}

/* Mobile optimizations */
@media (max-width: 640px) {
    .rpg-search-item:hover {
        transform: none;
    }

    .rpg-feature-item:hover {
        transform: none;
    }
}
</style>
