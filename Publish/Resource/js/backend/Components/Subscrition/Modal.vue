<template>
    <div
      class="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center"
      @click.self="close"
    >
      <div
        class="relative bg-base-100 rounded-lg max-w-2xl mx-auto my-8 w-full max-h-[90vh] overflow-auto shadow-xl"
        :class="sizeClass"
      >
        <div class="flex justify-between items-center p-4 border-b border-base-300">
          <h3 class="text-xl font-semibold">{{ title }}</h3>
          <button
            @click="close"
            class="btn btn-sm btn-ghost rounded-full"
            aria-label="Close"
          >
            <X class="w-5 h-5" />
          </button>
        </div>
        <div class="overflow-auto">
          <slot></slot>
        </div>
      </div>
    </div>
  </template>

  <script setup>
  import { computed } from 'vue';
  import { X } from 'lucide-vue-next';

  const props = defineProps({
    title: {
      type: String,
      default: 'Modal'
    },
    size: {
      type: String,
      default: 'lg',
      validator: (value) => ['sm', 'md', 'lg', 'xl', '2xl'].includes(value)
    }
  });

  const emit = defineEmits(['close']);

  const sizeClass = computed(() => {
    switch (props.size) {
      case 'sm': return 'max-w-sm';
      case 'md': return 'max-w-md';
      case 'lg': return 'max-w-lg';
      case 'xl': return 'max-w-xl';
      case '2xl': return 'max-w-2xl';
      default: return 'max-w-2xl';
    }
  });

  function close() {
    emit('close');
  }
  </script>
