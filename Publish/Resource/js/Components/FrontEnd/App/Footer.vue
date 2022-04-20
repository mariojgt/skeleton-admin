<template>
    <footer class="footer bottom-0 footer-center p-4 bg-base-300 text-base-content">
        <div>
            <p>Copyright © {{ currentYear }} - All right reserved by {{ usePage().props.value.app }}</p>
        </div>
    </footer>

</template>

<script setup>
import { watch, onMounted } from "vue";
import { usePage } from "@inertiajs/inertia-vue3";

const currentYear = new Date().getFullYear();

</script>

<style></style>
