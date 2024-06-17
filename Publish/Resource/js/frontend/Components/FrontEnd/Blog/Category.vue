<template>
    <div
        class="ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full bg-white text-gray-700 border">
        <div class="w-5 h-5" v-html="record?.icon?.svg"></div>
        {{ record?.name }}
    </div>
</template>

<script setup>
// Props
const props = defineProps({
    record: {
        type: Object,
        default: () => ({})
    }
});
</script>
