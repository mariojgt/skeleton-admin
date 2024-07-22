<template>
    <div class="flex justify-between items-center">
        <div class="flex items-center space-x-4">
            <img class="w-10 h-10 rounded-full" :src="admin.avatar" :alt="admin.full_name" />
            <span class="font-medium dark:text-white">
                {{ admin.full_name }}
            </span>
        </div>
        <a href="#" class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
            About me
            <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"></path>
            </svg>
        </a>
    </div>
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
