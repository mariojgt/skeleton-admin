<template>
    <FlashMessage/>
    <auth-wraper :title="props.title" >
            <template v-slot:form >
                <slot name="form" />
            </template>
            <template v-slot:links >
                <slot name="links" />
            </template>
    </auth-wraper>
</template>

<script setup>
import { watch, onMounted } from "vue";
// Call the auth wrhaper compnent
import AuthWraper from "../Components/Auth/AuthWrap";
import FlashMessage from "../Components/Global/FlashMessage";

const props = defineProps({
    title: {
        type: String,
        default: "Title",
    },
});

</script>

<style>

</style>
