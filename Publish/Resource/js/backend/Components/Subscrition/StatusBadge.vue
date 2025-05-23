<template>
    <span class="px-2 py-1 text-xs font-medium rounded-full" :class="badgeClass">
      {{ statusLabel }}
    </span>
  </template>

  <script setup>
  import { computed } from 'vue';

  const props = defineProps({
    status: {
      type: String,
      required: true
    }
  });

  const statusLabel = computed(() => {
    // Capitalize first letter of status
    return props.status.charAt(0).toUpperCase() + props.status.slice(1);
  });

  const badgeClass = computed(() => {
    switch (props.status.toLowerCase()) {
      case 'active':
        return 'bg-success/20 text-success';
      case 'pending':
        return 'bg-warning/20 text-warning';
      case 'cancelled':
        return 'bg-error/20 text-error';
      case 'expired':
        return 'bg-base-300 text-base-content';
      case 'trialing':
        return 'bg-info/20 text-info';
      case 'suspended':
        return 'bg-orange-500/20 text-orange-500';
      default:
        return 'bg-base-300 text-base-content';
    }
  });
  </script>
