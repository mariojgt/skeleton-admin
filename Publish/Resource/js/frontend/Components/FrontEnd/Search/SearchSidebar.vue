<template>
    <div>
        <button @click="openSearch" tabindex="0" :class="props.buttonClass">
            <icon componentId="magnifier" class="size-6" />
        </button>

        <!-- Transition wrapper -->
        <Transition
            enter-active-class="duration-300 ease-out"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="duration-200 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
        >
            <!-- Backdrop -->
            <div
                v-if="isOpen"
                class="fixed inset-0 bg-black bg-opacity-50"
                style="z-index: 9999"
                @click="isOpen = false"
            >
                <!-- Sidebar panel with slide transition -->
                <Transition
                    enter-active-class="transform transition ease-out duration-300"
                    enter-from-class="translate-x-full"
                    enter-to-class="translate-x-0"
                    leave-active-class="transform transition ease-in duration-200"
                    leave-from-class="translate-x-0"
                    leave-to-class="translate-x-full"
                >
                    <div
                        v-if="isOpen"
                        class="fixed inset-y-0 right-0 max-w-full flex overflow-hidden bg-gray-900 shadow-xl"
                        @click.stop
                    >
                        <div class="w-screen max-w-5xl">
                            <SearchTab v-model="activeTab" @close="isOpen = false" />
                            <notification v-if="activeTab === 'notifications'" />
                            <div v-if="activeTab === 'chat'" class="h-full">
                                <template v-if="hasSubscription">
                                <bobAI />
                                </template>
                                <template v-else>
                                <div class="h-full flex items-center justify-center p-6">
                                    <div class="max-w-lg w-full">
                                    <!-- Premium Banner -->
                                    <div class="relative overflow-hidden rounded-2xl bg-dark-500/50 border border-gray-800/50">
                                        <!-- Decorative Background -->
                                        <div class="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5"></div>
                                        <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIxMjEyMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-10"></div>

                                        <div class="relative p-8">
                                        <!-- Header -->
                                        <div class="text-center mb-6">
                                            <div class="flex justify-center mb-4">
                                            <div class="relative">
                                                <!-- Glow Effect -->
                                                <div class="absolute inset-0 bg-blue-500/20 rounded-full blur-xl"></div>
                                                <div class="relative w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                                                <Bot class="w-8 h-8 text-white" />
                                                </div>
                                            </div>
                                            </div>
                                            <h3 class="text-2xl font-bold text-white mb-2">
                                            Unlock AI Game Development Assistant
                                            </h3>
                                            <p class="text-gray-400 max-w-sm mx-auto">
                                            Get personalized help with coding, optimization, and best practices from our advanced AI assistant.
                                            </p>
                                        </div>

                                        <!-- Features Grid -->
                                        <div class="grid grid-cols-2 gap-4 mb-8">
                                            <div class="flex items-center space-x-3 bg-dark-400/30 rounded-lg p-3">
                                            <div class="flex-shrink-0 w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
                                                <Code2 class="w-4 h-4 text-blue-400" />
                                            </div>
                                            <span class="text-sm text-gray-300">Code Examples & Review</span>
                                            </div>
                                            <div class="flex items-center space-x-3 bg-dark-400/30 rounded-lg p-3">
                                            <div class="flex-shrink-0 w-8 h-8 bg-purple-500/10 rounded-lg flex items-center justify-center">
                                                <Zap class="w-4 h-4 text-purple-400" />
                                            </div>
                                            <span class="text-sm text-gray-300">Performance Tips</span>
                                            </div>
                                            <div class="flex items-center space-x-3 bg-dark-400/30 rounded-lg p-3">
                                            <div class="flex-shrink-0 w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                                                <Sparkles class="w-4 h-4 text-emerald-400" />
                                            </div>
                                            <span class="text-sm text-gray-300">Best Practices</span>
                                            </div>
                                            <div class="flex items-center space-x-3 bg-dark-400/30 rounded-lg p-3">
                                            <div class="flex-shrink-0 w-8 h-8 bg-amber-500/10 rounded-lg flex items-center justify-center">
                                                <MessagesSquare class="w-4 h-4 text-amber-400" />
                                            </div>
                                            <span class="text-sm text-gray-300">Code analysis & Suggestions</span>
                                            </div>
                                        </div>

                                        <!-- CTA Button -->
                                        <div class="text-center">
                                            <a
                                            href="\"
                                            class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 group"
                                            >
                                            <div class="flex items-center space-x-2">
                                                <Crown class="w-5 h-5" />
                                                <span>Upgrade to Premium</span>
                                                <ArrowRight class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                                            </div>
                                            </a>
                                        </div>
                                        </div>

                                        <!-- Bottom Pattern -->
                                        <div
                                        class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"
                                        style="background-size: 200% 100%;"
                                        ></div>
                                    </div>
                                    </div>
                                </div>
                                </template>
                            </div>
                            <div
                            v-else-if="activeTab === 'search'"
                                class="h-full flex flex-col bg-gray-900 shadow-xl"
                            >
                                <!-- Search input section -->
                                <div
                                    class="px-4 py-6 sm:px-6 border-b border-gray-800 flex-shrink-0"
                                >
                                    <div class="mt-4">
                                        <div
                                            class="relative rounded-lg bg-gray-800/50"
                                        >
                                            <div
                                                class="absolute inset-y-0 left-3 flex items-center"
                                            >
                                                <svg
                                                    class="h-5 w-5 text-gray-500"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                                    />
                                                </svg>
                                            </div>
                                            <input
                                                ref="searchInput"
                                                type="text"
                                                v-model="searchQuery"
                                                class="block w-full bg-transparent border-0 rounded-lg py-2 pl-10 pr-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                placeholder="Search..."
                                            />
                                        </div>
                                    </div>
                                </div>

                                <!-- Scrollable content area -->
                                <div class="flex-1 overflow-y-auto">
                                    <div class="px-4 py-6 sm:px-6">
                                        <!-- Suggested Searches -->
                                        <template
                                            v-for="(
                                                item, index
                                            ) in suggestedSearches"
                                            :key="index"
                                        >
                                            <div
                                                class="mb-8"
                                                v-if="item.length"
                                            >
                                                <h3
                                                    class="text-lg text-white mb-3 font-bold"
                                                >
                                                    Suggested {{ index }}
                                                </h3>
                                                <div
                                                    class="flex flex-wrap gap-2"
                                                >
                                                    <button
                                                        v-for="tag in item"
                                                        :key="tag"
                                                        @click="
                                                            searchQuery = tag
                                                        "
                                                        class="px-4 py-1.5 rounded-full font-bold text-sm bg-gray-800/50 text-gray-300 hover:bg-blue-700 transition-colors"
                                                    >
                                                        {{ tag }}
                                                    </button>
                                                </div>
                                            </div>
                                        </template>

                                        <!-- Courses Section -->
                                        <div
                                            v-if="courseSearch.length"
                                            class="mb-8"
                                        >
                                            <h3
                                                class="text-lg text-white mb-3 font-bold"
                                            >
                                                Courses
                                            </h3>
                                            <div class="space-y-2">
                                                <div
                                                    v-for="result in courseSearch"
                                                    :key="result.id"
                                                    class="p-4 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors cursor-pointer"
                                                >
                                                    <button
                                                        @click="
                                                            openCourse(
                                                                result.slug
                                                            )
                                                        "
                                                    >
                                                    <div class="flex items-center space-x-4 w-full">
                                                        <img
                                                            class="h-12 w-12 rounded-lg object-cover"
                                                            :src="
                                                                result.media[0]
                                                                    .url.default
                                                            "
                                                            :alt="result.title"
                                                        />
                                                        <div
                                                            class="flex-1 min-w-0"
                                                        >
                                                            <h4
                                                                class="text-base font-medium text-gray-200 truncate"
                                                                v-html="
                                                                    highlightSearch(
                                                                        result.title,
                                                                        searchQuery
                                                                    )
                                                                "
                                                            />
                                                        </div>
                                                    </div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Products Section -->
                                        <div
                                            v-if="productSearch.length"
                                            class="mb-8"
                                        >
                                            <h3
                                                class="text-lg text-white mb-3 font-bold"
                                            >
                                                Products
                                            </h3>
                                            <div class="space-y-2">
                                                <div
                                                    v-for="product in productSearch"
                                                    :key="product.id"
                                                    class="p-4 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors cursor-pointer"
                                                >
                                                    <button
                                                        class="w-full"
                                                        @click="
                                                            openProduct(
                                                                product.slug
                                                            )
                                                        "
                                                    >
                                                    <div class="flex items-center space-x-4 w-full">
                                                        <img
                                                            class="h-12 w-12 rounded-lg object-cover"
                                                            :src="
                                                                product.media[0]
                                                                    .url.default
                                                            "
                                                            :alt="product.title"
                                                        />
                                                        <h4
                                                            class="text-base font-medium text-gray-200 truncate"
                                                            v-html="
                                                                highlightSearch(
                                                                    product.name,
                                                                    searchQuery
                                                                )
                                                            "
                                                        />
                                                    </div>
                                                    </button>
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
        default: () => {},
    },
});

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
        (match) => `<span class="text-blue-500 font-bold">${match}</span>`
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
