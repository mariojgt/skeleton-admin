<template>
  <div class="dropdown dropdown-right">
    <label tabindex="0" class="btn m-1">Menu Name</label>
    <ul
      tabindex="0"
      class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
    >
      <li><Link href="#" >Item 1</Link></li>
      <li><Link href="#" >Item 2</Link></li>
    </ul>
  </div>
</template>

<script setup>
import { Link } from "@inertiajs/inertia-vue3";

let routeLink = route(props.menuItem.route);

// Page props
const props = defineProps({
  menuItem: {
    type: Object,
    default: {},
  },
});
</script>
