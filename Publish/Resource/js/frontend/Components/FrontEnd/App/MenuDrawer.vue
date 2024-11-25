<template>
    <ul class="menu p-5 w-80 min-h-full bg-primary text-base-content">
        <!-- <li class=""></li> -->
        <li class="hover:bg-secondary rounded-lg" >
            <Link :href="homeRoute">
                <icon componentId="home" />
                <span class="text-3xl">Home</span>
            </Link>
        </li>
        <li class="hover:bg-secondary rounded-lg mt-5" >
            <Link :href="courses">
                <icon componentId="book" />
                <span class="text-3xl">Courses</span>
            </Link>
        </li>
        <li class="hover:bg-secondary rounded-lg mt-5" >
            <Link :href="store" >
                <icon componentId="store" />
                <span class="text-3xl">Store</span>
            </Link>
        </li>
        <li class="hover:bg-secondary rounded-lg mt-5" >
            <Link :href="news">
                <icon componentId="newspaper" />
                <span class="text-3xl" >News</span>
            </Link>
        </li>
        <li class="hover:bg-secondary rounded-lg mt-5" >
            <a @click="openPricing">
                <icon componentId="pricing" />
                <span class="text-3xl" >Pricing</span>
            </a>
        </li>
    </ul>
</template>

<script setup>
import icon from "@frontend_components/FrontEnd/Icons/dynamicIcon.vue";
import { watch, onMounted } from "vue";
import { Link } from "@inertiajs/vue3";

// Home page route
const homeRoute = route("home");
const courses = route("course.index");
const store = route("store.index");
const news = route("news");


const emit = defineEmits(["pricing"]);

const openPricing = () => {
    emit("pricing");
};

</script>

<style>
</style>
