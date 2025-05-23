<template>
  <Link :href="link" class="group block h-full">
    <div
      class="bg-[#1E293B] rounded-lg overflow-hidden shadow-lg border transition-all duration-300 h-full"
      :style="{ borderColor: color + '33' }"
      @mouseover="$el.style.borderColor = color + '99'"
    >
      <div
        class="h-36 flex items-center justify-center bg-opacity-10"
        :style="{ background: 'linear-gradient(to right,' + color + '33,' + color + '1A)' }"
      >
        <div class="w-16 h-16 rounded-full bg-[#0F172A]/80 flex items-center justify-center group-hover:scale-110 transition-transform">
          <component :is="icon" class="w-8 h-8" :style="{ color: color }" />
        </div>
      </div>
      <div class="p-6 space-y-4">
        <h3 class="text-xl font-bold text-white">{{ name }}</h3>
        <p class="text-[#CBD5E1]">{{ description }}</p>
        <div class="pt-4 space-y-2">
          <FeatureItem
            v-for="(feature, i) in features"
            :key="i"
            :text="feature.text"
            :color="feature.color"
          />
        </div>
      </div>
    </div>
  </Link>
</template>

<script setup>
import { Link } from '@inertiajs/vue3';
import FeatureItem from './FeatureItem.vue';

defineProps({
  name: String,
  description: String,
  icon: Object,
  color: String,
  link: String,
  features: Array,
});
</script>
