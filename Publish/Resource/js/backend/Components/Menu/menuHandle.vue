<template>
  <menuSingle :menuItem="props.menuItem" />
</template>

<script setup>

import menuSingle from "./MenuSingle.vue";


// Page props
const props = defineProps({
  menuItem: {
    type: Object,
    default: {},
  },
});
</script>
