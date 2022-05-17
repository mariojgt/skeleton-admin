<template>
    <Layout>
        <div class="
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
      ">
            <div class="grid w-full grid-cols-1 gap-4 p-4" id="menu-item">
                <TreeItem :parentId="1">
                    <TreeItem icon="home" :parentId="2" />
                    <TreeItem icon="home" :parentId="3" />
                </TreeItem>
                <TreeItem icon="home" :parentId="4" />
                <TreeItem icon="home" :parentId="5" />
            </div>
        </div>
    </Layout>
</template>

<script setup>
import { Inertia } from "@inertiajs/inertia";
import { onMounted } from "vue";
import { Link } from "@inertiajs/inertia-vue3";
import Layout from "../../../Layout/App.vue";

// Import the menu item
import TreeItem from "../../../Components/TreeItem/Item.vue";

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
            ghostClass: "bg-primary",   // Class name for the drop placeholder
            chosenClass: "bg-primary",   // Class name for the chosen item
            dragClass: "bg-primary",   // Class name for the dragging item
            animation: 150,
            fallbackOnBody: true,
            swapThreshold: 0.65,

            // Called when dragging element changes position
            onChange: function (/**Event*/ evt) {
                // console.log(evt);
                // evt.newIndex; // most likely why this event is used is to get the dragging element's current index
                // same properties as onEnd
            },
            // Element dragging ended
            onEnd: function (/**Event*/evt) {
                var itemEl = evt.item;  // dragged HTMLElement
                evt.to;    // target list
                evt.from;  // previous list
                evt.oldIndex;  // element's old index within old parent
                evt.newIndex;  // element's new index within new parent
                evt.oldDraggableIndex; // element's old index within old parent, only counting draggable elements
                evt.newDraggableIndex; // element's new index within new parent, only counting draggable elements
                evt.clone // the clone element
                evt.pullMode;  // when item is in another sortable: `"clone"` if cloning, `true` if moving
                // Get the atribute of the element data-itemid
                const parentId  = evt.to.dataset.itemid;
                const itemId    = itemEl.dataset.itemid;
                const sortOrder = evt.newIndex + 1;
                console.log('Parent id:' + parentId);
                console.log('Current item id:' + itemId);
                console.log('Sort Order:' + sortOrder);
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
