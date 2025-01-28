# StoreCategories.vue
<template>
    <section class="relative py-16 px-4">
        <!-- Background Elements -->
        <div class="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-800/5"></div>
        <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIxMjEyMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-10"></div>

        <div class="relative max-w-7xl mx-auto">
            <!-- Header Section -->
            <div class="text-center mb-12">
                <h2 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 flex flex-col items-center gap-2">
                    Store
                    <div class="flex items-center gap-2 text-purple-400">
                        <Store class="h-8 w-8" />
                        <div class="h-1 w-24 bg-purple-400 rounded-full"></div>
                    </div>
                </h2>
                <p class="text-lg text-neutral-100 max-w-2xl mx-auto">
                    Explore the whole collection of our store assets and resources
                </p>
            </div>

            <!-- Categories Section -->
            <div class="mb-8 bg-dark-500/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                    <Tags class="h-6 w-6 text-purple-400" />
                    All Categories
                </h3>

                <!-- Categories Grid -->
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    <div
                        v-for="(item, index) in usePage().props.storeCategories.data"
                        :key="index"
                        @click="openCategorie(item.slug)"
                        class="group bg-dark-400/90 backdrop-blur-sm rounded-xl cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1 border border-gray-800/50 hover:border-purple-500/50 overflow-hidden"
                    >
                        <!-- Category Content -->
                        <div class="p-6 text-center">
                            <!-- Icon -->
                            <div
                                v-html="item.icon"
                                class="h-14 w-14 mx-auto bg-dark-300 p-3 rounded-xl mb-4 transition-colors duration-300 group-hover:bg-purple-500/10"
                            />

                            <!-- Category Info -->
                            <h3 class="font-bold text-white text-lg group-hover:text-purple-400 transition-colors duration-300 mb-2">
                                {{ item.name }}
                            </h3>

                            <!-- Product Count Badge -->
                            <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-dark-500 text-neutral-300 group-hover:bg-purple-500/10 transition-colors duration-300">
                                {{ item.product_count }} Products
                            </span>
                        </div>

                        <!-- Bottom Accent -->
                        <div class="h-1 w-full bg-gradient-to-r from-purple-500/50 to-pink-500/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { PropType, computed } from "vue";
import { useForm, router, usePage } from "@inertiajs/vue3";
import { Store, Tags } from 'lucide-vue-next';

const openCategorie = (category) => {
    router.visit(route("store.index", {
        category: category
    }), {
        preserveState: true,
        preserveScroll: true,
    });
};
</script>
