# StoreTopic.vue
<template>
  <div>
    <!-- Hero Header Section -->
    <div class="relative mb-16 text-center">
      <!-- Background Elements -->
      <div class="absolute inset-0 opacity-30">
        <div class="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10"></div>
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <!-- Content -->
      <div class="relative">
        <!-- Badges -->
        <div class="flex justify-center gap-4 mb-6">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 text-purple-400 backdrop-blur-sm">
            <Code class="h-4 w-4" />
            <span class="text-sm font-medium">Premium Source Code</span>
          </div>
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 backdrop-blur-sm">
            <Package class="h-4 w-4" />
            <span class="text-sm font-medium">Digital Assets</span>
          </div>
        </div>

        <!-- Main Title -->
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Discover Premium
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Digital Resources</span>
        </h1>

        <!-- Description -->
        <p class="max-w-2xl mx-auto text-lg text-neutral-300 mb-8">
          Explore our curated collection of high-quality source code, digital assets, and developer tools.
          Build faster with battle-tested components and professional resources.
        </p>

        <!-- Stats -->
        <!-- <div class="flex justify-center gap-8">
          <div class="text-center">
            <div class="text-2xl font-bold text-white mb-1">{{ usePage().props.storeCategories.data.length }}+</div>
            <div class="text-sm text-neutral-400">Categories</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-white mb-1">15+</div>
            <div class="text-sm text-neutral-400">Products</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-white mb-1">100+</div>
            <div class="text-sm text-neutral-400">Downloads</div>
          </div>
        </div> -->
      </div>
    </div>

    <!-- Featured Categories Section -->
    <div class="mb-12">
      <!-- Section Header -->
      <div class="flex items-center justify-between mb-8">
        <div class="flex items-center gap-3">
          <div class="p-2 bg-purple-500/10 rounded-lg">
            <Compass class="h-6 w-6 text-purple-400" />
          </div>
          <h2 class="text-2xl font-bold text-white">Featured Topics</h2>
        </div>

        <!-- View All Link -->
        <button
          @click="openCategorie('all')"
          class="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300"
        >
          <span>View All</span>
          <ArrowRight class="h-4 w-4" />
        </button>
      </div>

      <!-- Topics Grid -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        <button
          v-for="category in usePage().props.storeCategories.data"
          :key="category.id"
          @click="openCategorie(category.slug)"
          :class="[
            'group relative p-4 rounded-xl transition-all duration-300',
            'bg-dark-400/90 backdrop-blur-sm border border-gray-800/50',
            'hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1',
            'hover:border-purple-500/50',
            selectedTopic === category.slug ? 'border-purple-500 bg-purple-500/10' : ''
          ]"
        >
          <!-- Background Pattern -->
          <div class="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>

          <!-- Topic Content -->
          <div class="relative flex flex-col items-center gap-3">
            <!-- Icon -->
            <div
              class="p-2 bg-dark-300 rounded-lg group-hover:bg-purple-500/10 transition-colors duration-300"
              v-html="category.icon"
            ></div>

            <!-- Title -->
            <span class="text-sm font-medium text-white group-hover:text-purple-400 transition-colors duration-300">
              {{ category.name }}
            </span>

            <!-- Count Badge -->
            <span class="absolute -top-2 -right-2 px-2 py-1 text-xs font-medium rounded-full bg-purple-500/20 text-purple-300">
              {{ category.product_count }}
            </span>
          </div>

          <!-- Bottom Accent -->
          <div
            class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500/50 to-pink-500/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
          ></div>
        </button>
      </div>

      <!-- Active Filters -->
      <div v-if="selectedTopic" class="mt-6 flex items-center gap-2">
        <span class="text-sm text-neutral-400">Active Filter:</span>
        <button
          @click="openCategorie('all')"
          class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium bg-purple-500/10 text-purple-400 hover:bg-purple-500/20 transition-colors duration-300"
        >
          {{ selectedTopic }}
          <X class="h-4 w-4" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { router, usePage } from '@inertiajs/vue3';
import { Compass, ArrowRight, X, Code, Package } from 'lucide-vue-next';

const props = defineProps({
  routeReload: {
    type: String,
    required: true
  }
});

// State
const selectedTopic = ref('');

// Using the original openCategorie function
const openCategorie = (category) => {
  selectedTopic.value = category !== 'all' ? category : '';
  router.visit(route("store.index", {
    category: category
  }), {
    preserveState: true,
    preserveScroll: true,
  });
};
</script>
