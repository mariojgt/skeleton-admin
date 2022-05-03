<template>
  <menuSingle :menuItem="props.menuItem" v-if="!props.menuItem.collection" />
  <menuMultiple :menuItem="props.menuItem" v-else />
</template>

<script setup>

import menuSingle from "./MenuSingle.vue";
import menuMultiple from "./MenuMultiple.vue";


// Page props
const props = defineProps({
  menuItem: {
    type: Object,
    default: {},
  },
});
</script>
