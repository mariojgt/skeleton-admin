<template>
    <div class="text-lg breadcrumbs p-3 bg-primary text-neutral-50 mb-3 font-bold rounded-2xl" v-if="usePage().props.breadcrumb">
        <ul>
            <li><a>Home</a></li>
            <li v-for="(item, index) in usePage().props.breadcrumb" :key="index">
                <a :href="item.url">{{ item.label }}</a>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { usePage } from "@inertiajs/vue3";

</script>
