<template>
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2
                class="text-white text-6xl lg:text-8xl mb-4 font-extrabold drop-shadow-lg"
            >
                Store
            </h2>
            <p class="font-bold lg:mb-16 sm:text-xl text-neutral">
                Explore the whole collection of our store asset and resources
            </p>
        </div>
        <div class="container mx-auto p-6">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 m-2">
                <h1 class="text-2xl font-bold">All Categories</h1>
            </div>
            <div class="grid grid-cols-2 lg:grid-cols-5 gap-4">
                <div
                    v-for="(item, index) in usePage().props.storeCategories.data"
                    :key="index"
                    class="p-4 rounded-lg text-center hover:bg-dark-blue-400 cursor-pointer bg-primary"
                    @click="openCategorie(item.slug)"
                >
                    <div class="flex gap-2 justify-center">
                        <div
                            v-html="item.icon"
                            class="h-12 w-12 bg-white p-1 rounded-lg"
                        />
                        <h2 class="overflow-auto font-bold mt-3">
                            {{ item.name }}
                        </h2>
                    </div>
                    <p>
                        {{ item.product_count }} Products
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { PropType, computed } from "vue";
import { useForm, router, usePage } from "@inertiajs/vue3";

const topicForm = useForm({
    topic: "all",
});

const prop = defineProps({
    routeReload: {
        type: String,
        default: "home",
    }
});

const topicChange = (newTopic) => {
    topicForm.topic = newTopic;
    topicForm.get(route(prop.routeReload), {
        preserveState: true,
        preserveScroll: true,
        onSuccess: () => {
            // emit("isLoading", false);
            // emit("closeModal");
        },
        onError: () => {
            // emit("isLoading", false);
        },
    });
};

const openCategorie = (category) => {

    router.visit(route("store.index", {
        category: category
    }), {
        preserveState: true,
        preserveScroll: true,
    });
};

</script>
