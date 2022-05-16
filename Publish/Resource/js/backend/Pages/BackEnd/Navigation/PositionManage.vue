<template>
  <Layout>

    <div
      class="
        bg-base-100
        text-base-content
        rounded-box
        col-span-3
        row-span-4
        mx-2
        grid
        w-72
        flex-shrink-0
        shadow-xl
        xl:mx-0 xl:w-auto xl:place-self-stretch
        svelte-1n6ue57
      "
    >
      <div class="grid w-full grid-cols-1 gap-4 p-4" id="menu-item">
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">Menu name!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Move</button>
            </div>
          </div>
        </div>
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">Menu name!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Move</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script setup>
import { Inertia } from "@inertiajs/inertia";
import { onMounted } from "vue";
import { Link } from "@inertiajs/inertia-vue3";
import Layout from "../../../Layout/App.vue";

// Default SortableJS
// import Sortable from 'sortablejs';
// Core SortableJS (without default plugins)
// import Sortable from 'sortablejs/modular/sortable.core.esm.js';
// Complete SortableJS (with all plugins)
import Sortable from "sortablejs/modular/sortable.complete.esm.js";

setTimeout(() => {
  // Get all elements by id and make them sortable
  const el = document.querySelectorAll("#menu-item");
  for (const [key, value] of Object.entries(el)) {
    const sortableItem = Sortable.create(value, {
      group: {
        name: "shared",
        pull: true,
        put: true,
      },
      // sort: '{{ $sort ?? false }}',
      sort: true,
      ghostClass: "bordered", // Class name for the drop placeholder
      chosenClass: "bordered", // Class name for the chosen item
      dragClass: "bordered", // Class name for the dragging item
      animation: 150,
      fallbackOnBody: true,
      swapThreshold: 0.65,

      // Called when dragging element changes position
      onChange: function (/**Event*/ evt) {
        console.log(evt.newIndex);
        // evt.newIndex; // most likely why this event is used is to get the dragging element's current index
        // same properties as onEnd
      },
    });
  }
}, 500);

const props = defineProps({
  endpoint: {
    type: String,
    default: "",
  },
  columns: {
    type: Object,
    default: () => ({}),
  },
  model: {
    type: String,
    default: "",
  },
  endpointDelete: {
    type: String,
    default: "",
  },
  endpointCreate: {
    type: String,
    default: "",
  },
  endpointEdit: {
    type: String,
    default: "",
  },
  permission: {
    type: String,
    default: "",
  },
});
</script>
