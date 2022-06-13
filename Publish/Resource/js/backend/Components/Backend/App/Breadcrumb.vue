<template>
    <div class="text-sm breadcrumbs" v-if="usePage().props.value.breadcrumb" >
        <ul>
            <li><a>Home</a></li>
            <li v-for="(item, index) in usePage().props.value.breadcrumb" :key="index" >
                <a :href="item.url" >{{ item.label }}</a>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { watch, onMounted } from "vue";
import { usePage } from "@inertiajs/inertia-vue3";


</script>
