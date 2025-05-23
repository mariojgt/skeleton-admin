<template>
    <div>
        <!-- Floating toggle button -->
        <button
            v-if="inDebugMode"
            @click="togglePanel"
            class="fixed bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow-lg z-50"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>
        </button>


         <!-- Debug Panel -->
         <div v-if="isPanelOpen && inDebugMode"
            class="fixed bottom-16 right-4 w-[600px] bg-dark-blue-400 rounded-lg shadow-xl z-50 max-h-[80vh] overflow-auto"
        >
            <div class="p-4">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-lg font-bold dark:text-white">SEO Preview</h2>
                    <div class="flex gap-2">
                        <!-- Tab buttons -->
                        <button
                            v-for="tab in tabs"
                            :key="tab.id"
                            @click="currentTab = tab.id"
                            :class="[
                                'px-3 py-1 rounded-md text-sm',
                                currentTab === tab.id
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                            ]"
                        >
                            {{ tab.name }}
                        </button>
                        <!-- Close button -->
                        <button @click="togglePanel" class="text-gray-500 hover:text-gray-700 dark:text-gray-400">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                <!-- Tab Content -->
                <div v-show="currentTab === 'previews'" class="space-y-6">
                    <!-- Twitter Preview -->
                    <div class="space-y-2">
                        <h3 class="text-sm font-semibold dark:text-white">Twitter Card Preview</h3>
                        <TwitterPreview :seo="seoData" />
                    </div>

                    <!-- Google Preview (from previous version) -->
                    <div class="space-y-2">
                        <h3 class="text-sm font-semibold dark:text-white">Google Search Preview</h3>
                        <div class="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                            <div class="space-y-1">
                                <div class="text-blue-600 text-lg hover:underline cursor-pointer">
                                    {{ seoData.title }}
                                </div>
                                <div class="text-green-600 text-sm">
                                    {{ isBrowser ? window.location.origin : 'example.com' }}
                                </div>
                                <div class="text-sm text-gray-600 dark:text-gray-300">
                                    {{ seoData.meta.description }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Meta Tags Tab (from previous version) -->
                <div v-show="currentTab === 'meta'" class="space-y-4">
                    <!-- Your existing meta tags sections here -->
                        <div class="space-y-4">
                            <!-- Basic Meta -->
                            <div class="border-t pt-4 dark:border-gray-600">
                                <h3 class="font-semibold mb-2 dark:text-white">
                                    Basic Meta Tags
                                </h3>
                                <div class="space-y-2 text-sm">
                                    <div
                                        v-for="(value, key) in seoData.meta"
                                        :key="key"
                                        class="flex"
                                    >
                                        <span class="font-mono text-blue-500 mr-2"
                                            >{{ key }}:</span
                                        >
                                        <span class="dark:text-gray-300">{{
                                            value
                                        }}</span>
                                    </div>
                                </div>
                            </div>

                            <!-- Open Graph -->
                            <div class="border-t pt-4 dark:border-gray-600">
                                <h3 class="font-semibold mb-2 dark:text-white">
                                    Open Graph
                                </h3>
                                <div class="space-y-2 text-sm">
                                    <div
                                        v-for="(value, key) in seoData.og"
                                        :key="key"
                                        class="flex"
                                    >
                                        <span class="font-mono text-blue-500 mr-2"
                                            >og:{{ key }}:</span
                                        >
                                        <span class="dark:text-gray-300">{{
                                            value
                                        }}</span>
                                    </div>
                                </div>
                            </div>

                            <!-- Twitter -->
                            <div class="border-t pt-4 dark:border-gray-600">
                                <h3 class="font-semibold mb-2 dark:text-white">
                                    Twitter Card
                                </h3>
                                <div class="space-y-2 text-sm">
                                    <div
                                        v-for="(value, key) in seoData.twitter"
                                        :key="key"
                                        class="flex"
                                    >
                                        <span class="font-mono text-blue-500 mr-2"
                                            >twitter:{{ key }}:</span
                                        >
                                        <span class="dark:text-gray-300">{{
                                            value
                                        }}</span>
                                    </div>
                                </div>
                            </div>

                            <!-- JSON-LD -->
                            <div class="border-t pt-4 dark:border-gray-600">
                                <h3 class="font-semibold mb-2 dark:text-white">
                                    JSON-LD
                                </h3>
                                <pre
                                    class="text-xs dark:text-gray-300 bg-dark-100 p-2 rounded-lg"
                                >{{ JSON.stringify(seoData.jsonLd, null, 2) }}</pre>

                            </div>
                        </div>
                    <!-- Rest of your meta sections... -->
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, watch, ref, computed } from "vue";
import { usePage } from "@inertiajs/vue3";
import TwitterPreview from './TwitterPreview.vue';

const props = defineProps({
    seo: {
        type: Object,
        default: () => ({
            title: '',
            meta: {
                description: '',
                keywords: '',
                author: '',
                robots: 'index, follow'
            },
            og: {
                title: '',
                description: '',
                image: '',
                url: '',
                type: 'website',
                site_name: ''
            },
            twitter: {
                card: 'summary_large_image',
                title: '',
                description: '',
                image: '',
                site: ''
            },
            jsonLd: {}
        })
    },
    inDebugMode: {
        type: Boolean,
        default: false,
    },
});

// Add computed property to check if we're in browser environment
const isBrowser = computed(() => typeof window !== 'undefined');

// Use a computed property to ensure we always have valid SEO data
const seoData = computed(() => props.seo || {
    title: '',
    meta: {
        description: '',
        keywords: '',
        author: '',
        robots: 'index, follow'
    },
    og: {
        title: '',
        description: '',
        image: '',
        url: '',
        type: 'website',
        site_name: ''
    },
    twitter: {
        card: 'summary_large_image',
        title: '',
        description: '',
        image: '',
        site: ''
    },
    jsonLd: {}
});

const isPanelOpen = ref(false);
const currentTab = ref('previews');

const tabs = [
    { id: 'previews', name: 'Previews' },
    { id: 'meta', name: 'Meta Tags' }
];

const togglePanel = () => {
    isPanelOpen.value = !isPanelOpen.value;
};

// Function to update meta tags - only run in browser environment
const updateMetaTags = (seo) => {
    if (!isBrowser.value) return;

    // Update basic meta tags
    document.title = seo.title;

    // Update meta tags
    updateOrCreateMetaTag("description", seo.meta.description);
    updateOrCreateMetaTag("keywords", seo.meta.keywords);
    updateOrCreateMetaTag("author", seo.meta.author);
    updateOrCreateMetaTag("robots", seo.meta.robots);

    // Update OpenGraph tags
    updateOrCreateMetaTag("og:title", seo.og.title);
    updateOrCreateMetaTag("og:description", seo.og.description);
    updateOrCreateMetaTag("og:image", seo.og.image);
    updateOrCreateMetaTag("og:url", seo.og.url);
    updateOrCreateMetaTag("og:type", seo.og.type);
    updateOrCreateMetaTag("og:site_name", seo.og.site_name);

    // Update Twitter tags
    updateOrCreateMetaTag("twitter:card", seo.twitter.card);
    updateOrCreateMetaTag("twitter:title", seo.twitter.title);
    updateOrCreateMetaTag("twitter:description", seo.twitter.description);
    updateOrCreateMetaTag("twitter:image", seo.twitter.image);
    updateOrCreateMetaTag("twitter:site", seo.twitter.site);

    // Update JSON-LD
    updateJsonLd(seo.jsonLd);
};

// Helper function to update or create meta tags - only for browser
const updateOrCreateMetaTag = (name, content) => {
    if (!isBrowser.value || !content) return;

    let meta = document.querySelector(
        `meta[name="${name}"], meta[property="${name}"]`
    );
    if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(name.startsWith("og:") ? "property" : "name", name);
        document.head.appendChild(meta);
    }
    meta.setAttribute("content", content);
};

// Helper function to update JSON-LD - only for browser
const updateJsonLd = (jsonLd) => {
    if (!isBrowser.value) return;

    let script = document.querySelector('script[type="application/ld+json"]');
    if (!script) {
        script = document.createElement("script");
        script.type = "application/ld+json";
        document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(jsonLd);
};

// Watch for changes in the SEO prop
watch(
    () => props.seo,
    (newSeo) => {
        if (newSeo && isBrowser.value) {
            updateMetaTags(newSeo);
        }
    },
    { deep: true }
);

// Initial setup - only run in browser
onMounted(() => {
    if (props.seo && isBrowser.value) {
        updateMetaTags(props.seo);
    }
});
</script>
