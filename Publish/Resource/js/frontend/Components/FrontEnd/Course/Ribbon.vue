<template>
    <div class="ribbon ribbon-blue" :class="ribbonPosition, ribbonColor" ><span><slot>Loren</slot></span></div>
</template>

<script setup lang="ts">
// Vue js imports
import { onMounted, computed } from "vue";
const props = defineProps({
  top: {
    type: Boolean,
    default: true,
  },
  left: {
    type: Boolean,
    default: true,
  },
  color: {
    type: String,
    default: "green",
  },
});

const ribbonPosition = computed(() => {
    let position = "ribbon-";
    if (props.top) {
        position += "top";
    } else {
        position += "bottom";
    }
    if (props.left) {
        position += "-left";
    } else {
        position += "-right";
    }
    return position;
});

const ribbonColor = computed(() => {
    return "ribbon-" + props.color;
});
</script>
