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
                        <div class="w-screen max-w-md">
                            <SearchTab v-model="activeTab" @close="isOpen = false" />
                            <div
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
                                                    class="text-sm font-medium text-gray-400 mb-3"
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
                                                        class="px-4 py-1.5 rounded-full text-sm bg-gray-800/50 text-gray-300 hover:bg-gray-700 transition-colors"
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
                                                class="text-sm font-medium text-gray-400 mb-3"
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
                                                        class="flex items-center space-x-4 w-full"
                                                        @click="
                                                            openCourse(
                                                                result.slug
                                                            )
                                                        "
                                                    >
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
                                                class="text-sm font-medium text-gray-400 mb-3"
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
                                                        class="flex items-center space-x-4 w-full"
                                                        @click="
                                                            openProduct(
                                                                product.slug
                                                            )
                                                        "
                                                    >
                                                        <img
                                                            class="h-12 w-12 rounded-lg object-cover"
                                                            :src="
                                                                product.media[0]
                                                                    .url.default
                                                            "
                                                            :alt="product.title"
                                                        />
                                                        <div
                                                            class="flex-1 min-w-0"
                                                        >
                                                            <h4
                                                                class="text-base font-medium text-gray-200 truncate"
                                                                v-html="
                                                                    highlightSearch(
                                                                        product.name,
                                                                        searchQuery
                                                                    )
                                                                "
                                                            />
                                                            <p
                                                                class="text-sm text-gray-400 mt-1"
                                                            >
                                                                {{
                                                                    product.price
                                                                }}
                                                            </p>
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
import { debounce } from "lodash";
import icon from "@frontend_components/FrontEnd/Icons/dynamicIcon.vue";
import { api } from "../../../Boot/axios.js";
import { router } from "@inertiajs/vue3";
import SearchTab from "./SearchTab.vue";

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
</script>
