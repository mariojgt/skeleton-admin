<template>
    <header class="mb-4 lg:mb-6 not-format border-2 rounded p-2 bg-opacity-80 backdrop-blur transition-all fancy-border">
        <address class="flex items-center mb-6 not-italic">
            <div class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                <img class="mr-4 w-16 h-16 rounded-full" :src="admin.avatar" :alt="admin.full_name">
                <div>
                    <a href="#" rel="author" class="text-xl font-bold text-accent">{{ admin.full_name }}</a>
                    <p class="text-base font-light text-neutral">{{ admin.email }}</p>
                    <p class="text-base font-light text-neutral"><time pubdate="" datetime="2022-02-08"
                            title="February 8th, 2022">Feb. 8, 2022</time></p>
                </div>
            </div>
        </address>
    </header>
</template>

<script setup>
// Props
const props = defineProps({
    admin: {
        type: Object,
        default: () => ({})
    }
});
</script>
