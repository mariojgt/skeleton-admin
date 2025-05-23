<template>
    <div>
      <!-- RPG-Styled Hero Header Section -->
      <div class="relative mb-16 text-center">
        <!-- Magical Background Elements -->
        <div class="absolute inset-0">
          <div class="absolute inset-0 bg-gradient-to-r from-[#64FFDA]/10 to-[#8B5CF6]/10"></div>
          <div class="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#64FFDA]/10 rounded-full blur-3xl"></div>

          <!-- RPG Rune Pattern -->
          <div class="absolute inset-0 opacity-5"
               style="background-image: url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 10 L40 20 L30 30 L20 20 Z M10 30 L20 40 L10 50 L0 40 Z M50 30 L60 40 L50 50 L40 40 Z\' fill=\'none\' stroke=\'%2364FFDA\' stroke-width=\'0.3\'/%3E%3C/svg%3E');
                      background-size: 60px 60px;"></div>
        </div>

        <!-- Content -->
        <div class="relative">
          <!-- RPG Badges -->
          <div class="flex justify-center gap-4 mb-6">
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#64FFDA]/10 text-[#64FFDA] border border-[#64FFDA]/30">
              <Scroll class="h-4 w-4" />
              <span class="text-sm font-medium">Ancient Scrolls</span>
            </div>
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#8B5CF6]/10 text-[#8B5CF6] border border-[#8B5CF6]/30">
              <Package class="h-4 w-4" />
              <span class="text-sm font-medium">Magical Artifacts</span>
            </div>
          </div>

          <!-- Main Title with RPG Styling -->
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Rare &amp; Legendary
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#64FFDA] to-[#8B5CF6] animate-gradient"
                  style="animation: gradient-shift 8s ease infinite; background-size: 200% 200%;">
              Treasures
            </span>
          </h1>

          <!-- Description with RPG Styling -->
          <p class="max-w-2xl mx-auto text-lg text-[#CBD5E1] mb-8">
            Venture into our merchant's collection of rare code scrolls, magical assets, and
            enchanted developer tools. Enhance your journey with these powerful artifacts.
          </p>
        </div>
      </div>

      <!-- Featured Categories Section with RPG Styling -->
      <div class="mb-12">
        <!-- Section Header with RPG Styling -->
        <div class="flex items-center justify-between mb-8">
          <div class="flex items-center gap-3">
            <div class="p-2 bg-[#64FFDA]/10 rounded-lg border border-[#64FFDA]/30">
              <Compass class="h-6 w-6 text-[#64FFDA]" />
            </div>
            <h2 class="text-2xl font-bold text-white">Merchant's Wares</h2>
          </div>

          <!-- View All Link with RPG Styling -->
          <button
            @click="openCategorie('all')"
            class="flex items-center gap-2 text-[#64FFDA] hover:text-white transition-colors duration-300"
          >
            <span>Browse All</span>
            <ArrowRight class="h-4 w-4" />
          </button>
        </div>

        <!-- Topics Grid with RPG Styling -->
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          <button
            v-for="category in usePage().props.storeCategories.data"
            :key="category.id"
            @click="openCategorie(category.slug)"
            :class="[
              'group relative p-4 rounded-lg transition-all duration-300',
              'bg-[#1E293B] backdrop-blur-sm border-2',
              'hover:shadow-lg hover:shadow-[#64FFDA]/10 hover:-translate-y-1',
              selectedTopic === category.slug
                ? 'border-[#64FFDA]/50 bg-[#64FFDA]/10'
                : 'border-[#8B5CF6]/30'
            ]"
          >
            <!-- RPG Corner Elements -->
            <div class="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 opacity-50 transition-opacity duration-300 group-hover:opacity-80"
                 :class="selectedTopic === category.slug ? 'border-[#64FFDA]' : 'border-[#8B5CF6]'"></div>
            <div class="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 opacity-50 transition-opacity duration-300 group-hover:opacity-80"
                 :class="selectedTopic === category.slug ? 'border-[#64FFDA]' : 'border-[#8B5CF6]'"></div>
            <div class="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 opacity-50 transition-opacity duration-300 group-hover:opacity-80"
                 :class="selectedTopic === category.slug ? 'border-[#64FFDA]' : 'border-[#8B5CF6]'"></div>
            <div class="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 opacity-50 transition-opacity duration-300 group-hover:opacity-80"
                 :class="selectedTopic === category.slug ? 'border-[#64FFDA]' : 'border-[#8B5CF6]'"></div>

            <!-- RPG Background Pattern -->
            <div class="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>

            <!-- Topic Content with RPG Styling -->
            <div class="relative flex flex-col items-center gap-3">
              <!-- Icon with RPG Styling -->
              <div
                class="p-2 rounded-lg transition-colors duration-300"
                :class="selectedTopic === category.slug ? 'bg-[#64FFDA]/10' : 'bg-[#0F172A] group-hover:bg-[#64FFDA]/10'"
                v-html="category.icon"
              ></div>

              <!-- Title with RPG Styling -->
              <span class="text-sm font-medium transition-colors duration-300"
                    :class="selectedTopic === category.slug ? 'text-[#64FFDA]' : 'text-[#CBD5E1] group-hover:text-[#64FFDA]'">
                {{ category.name }}
              </span>

              <!-- RPG Count Badge -->
              <span class="absolute -top-2 -right-2 px-2 py-1 text-xs font-bold rounded-full border"
                    :class="selectedTopic === category.slug
                      ? 'bg-[#64FFDA]/20 text-[#64FFDA] border-[#64FFDA]/30'
                      : 'bg-[#8B5CF6]/20 text-[#8B5CF6] border-[#8B5CF6]/30'">
                {{ category.product_count }}
              </span>
            </div>

            <!-- RPG Bottom Accent -->
            <div
              class="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
              :class="selectedTopic === category.slug
                ? 'bg-gradient-to-r from-[#64FFDA] to-[#10B981]'
                : 'bg-gradient-to-r from-[#8B5CF6] to-[#8B5CF6]'"
            ></div>
          </button>
        </div>

        <!-- Active Filters with RPG Styling -->
        <div v-if="selectedTopic" class="mt-6 flex items-center gap-2">
          <span class="text-sm text-[#CBD5E1]/70">Active Filter:</span>
          <button
            @click="openCategorie('all')"
            class="inline-flex items-center gap-2 px-3 py-1 rounded-lg text-sm font-medium bg-[#64FFDA]/10 text-[#64FFDA] hover:bg-[#64FFDA]/20 transition-colors duration-300 border border-[#64FFDA]/30"
          >
            {{ selectedTopic }}
            <X class="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  </template>

  <script setup lang="ts">
  import { ref, inject } from 'vue';
  import { router, usePage } from '@inertiajs/vue3';
  import { Compass, ArrowRight, X, Package, Scroll } from 'lucide-vue-next';

  const route = inject('route');
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

  <style scoped>
  @keyframes gradient-shift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  /* RPG Elements Styling */
  .animate-gradient {
    animation: gradient-shift 8s ease infinite;
    background-size: 200% 200%;
  }

  /* Hover Effects */
  .hover-glow:hover {
    box-shadow: 0 0 15px rgba(100, 255, 218, 0.3);
  }

  /* Responsive Typography */
  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }

    h2 {
      font-size: 1.75rem;
    }
  }
  </style>
