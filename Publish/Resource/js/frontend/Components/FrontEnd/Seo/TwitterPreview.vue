<template>
    <div class="border dark:border-gray-700 rounded-xl overflow-hidden w-full max-w-[500px] font-sans bg-white dark:bg-gray-900 shadow-lg">
        <!-- Image Section -->
        <div v-if="seo.twitter.image" class="relative w-full h-[250px] bg-gray-100 dark:bg-gray-800">
            <img
                :src="seo.twitter.image"
                :alt="seo.twitter.title"
                class="w-full h-full object-cover"
            />
        </div>

        <!-- Content Section -->
        <div class="p-3 space-y-1">
            <!-- Website Domain -->
            <div class="text-sm text-gray-500 dark:text-gray-400">
                {{ extractDomain(seo.og.url) }}
            </div>

            <!-- Title -->
            <div class="font-bold text-gray-900 dark:text-white leading-tight">
                {{ truncate(seo.twitter.title, 70) }}
            </div>

            <!-- Description -->
            <div class="text-sm text-gray-500 dark:text-gray-400">
                {{ truncate(seo.twitter.description, 125) }}
            </div>

            <!-- Twitter Card Type Indicator -->
            <div class="flex items-center pt-2 text-xs text-gray-500 dark:text-gray-400">
                <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"/>
                </svg>
                {{ seo.twitter.card === 'summary_large_image' ? 'Summary with large image' : 'Summary' }}
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    seo: {
        type: Object,
        required: true,
        default: () => ({
            twitter: {
                card: 'summary_large_image',
                title: '',
                description: '',
                image: ''
            },
            og: {
                url: ''
            }
        })
    }
});

// Helper function to truncate text
const truncate = (text, length) => {
    if (!text) return '';
    return text.length > length ? text.substring(0, length) + '...' : text;
};

// Helper function to extract domain from URL
const extractDomain = (url) => {
    if (!url) return '';
    try {
        const domain = new URL(url).hostname;
        return domain.replace('www.', '');
    } catch {
        return url;
    }
};
</script>
