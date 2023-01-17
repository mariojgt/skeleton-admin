<template>
    <div class="text-lg breadcrumbs p-5 bg-base-300" v-if="usePage().props.breadcrumb" >
        <ul>
            <li><a>Home</a></li>
            <li v-for="(item, index) in usePage().props.breadcrumb" :key="index" >
                <a :href="item.url" >{{ item.label }}</a>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { watch, onMounted } from "vue";
import { usePage } from "@inertiajs/vue3";


</script>
