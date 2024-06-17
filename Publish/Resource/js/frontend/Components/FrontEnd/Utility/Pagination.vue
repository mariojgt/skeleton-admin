<template>
    <div class="pagination-container">
      <nav class="flex flex-col md:flex-row items-center justify-between mb-4 text-white">
        <div class="mb-2 md:mb-0">
          <span class="text-sm md:text-base">
            Showing {{ pagination.from }} to {{ pagination.to }} of {{ pagination.total }} results
          </span>
        </div>
      </nav>
      <nav class="flex items-center justify-center w-full">
        <!-- Mobile layout -->
        <div class="join flex md:hidden w-full justify-between px-4">
            <button
            :disabled="!links[0].url"
            :class="{
                'btn join-item': true,
                'cursor-not-allowed text-gray-500': !links[0].url,
                'text-white bg-purple-700 hover:bg-purple-800': links[0].url
            }"
            @click="links[0].url && $inertia.get(links[0].url)"
            v-html="links[0].label"
            >
            </button>
             <button @click="links[1].url && $inertia.get(links[1].url)" :disabled="!links[1].url" class="btn join-item" v-html="links[1].label"></button>
            <button class="btn join-item">Page {{ pagination.current_page }}</button>
            <button
            :disabled="!links[links.length - 1].url"
            :class="{
                'btn join-item': true,
                'cursor-not-allowed text-gray-500': !links[links.length - 1].url,
                'text-white bg-purple-700 hover:bg-purple-800': links[links.length - 1].url
            }"
            @click="links[links.length - 1].url && $inertia.get(links[links.length - 1].url)"
            v-html="links[links.length - 1].label"
            >
            </button>
        </div>
        <!-- Desktop layout -->
        <div class="join hidden md:flex">
          <button
            v-for="link in links"
            :key="link.label"
            :disabled="!link.url"
            :class="{
              'btn btn-lg join-item': true,
              'btn-active': link.active,
              'cursor-not-allowed text-gray-500': !link.url,
              'text-white bg-secondary hover:bg-primary': link.url && !link.active,
              'text-white bg-primary': link.active
            }"
            v-html="link.label"
            @click="link.url && $inertia.get(link.url)"
          ></button>
        </div>
      </nav>
    </div>
  </template>

  <script setup>
  import { computed, toRefs } from 'vue';

  const props = defineProps({
    pagination: {
      type: Object,
      required: true,
    },
  });

  const { pagination } = toRefs(props);

  const links = computed(() => pagination.value.links);
  </script>

  <style scoped>

  </style>
