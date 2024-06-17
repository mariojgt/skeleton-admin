<template>
    <article class="p-6 bg-opacity-50 backdrop-blur transition-all duration-100 hover:border-secondary rounded-lg border-2 border-primary master-shadow">
        <div class="flex justify-between items-center mb-5 text-gray-500">
            <category :record="record.category" />
            <span class="text-sm text-neutral">{{ record.created_at_human }}</span>
        </div>
        <h2 class="mb-2 text-2xl font-bold tracking-tight text-accent">
            <Link :href="'/news/view/' + record.slug">
                {{ record.title }}
            </Link>
        </h2>
        <div class="pb-5 text-neutral" v-html="record.short_description"></div>
        <admin-simple-card :admin="record.admin" />
    </article>
</template>

<script setup>
import AdminSimpleCard from "../Admin/AdminSimpleDisplay.vue";
import Category from "./Category.vue";
import { Link } from '@inertiajs/vue3'
// Props
const props = defineProps({
    record: {
        type: Object,
        default: () => ({})
    }
});
</script>
