<template>
    <div>
        <menuSingle v-if="!props.menuItem.collection" :menu-item="props.menuItem" />
        <menuMultiple v-else :menu-item="props.menuItem" />
    </div>
</template>

<script setup lang="ts">

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
