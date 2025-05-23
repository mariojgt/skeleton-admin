<template>
    <div class="flex items-start gap-2">
        <CheckCircle class="w-5 h-5 mt-0.5 flex-shrink-0" :class="'text-' + color" />
        <span class="text-sm text-[#CBD5E1]">{{ text }}</span>
    </div>
</template>

<script setup>
import { CheckCircle } from 'lucide-vue-next';

defineProps({
    text: String,
    color: String,
});
</script>
