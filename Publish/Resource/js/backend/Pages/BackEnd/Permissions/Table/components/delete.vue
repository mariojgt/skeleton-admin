<template>
  <!-- The button to open modal -->
  <label :for="'my-modal-' + props.id" class="btn btn-error modal-button">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
      />
    </svg>
  </label>

  <!-- Put this part before </body> tag -->
  <input type="checkbox" :id="'my-modal-' + props.id" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box w-11/12 max-w-5xl ">
      <label
        :for="'my-modal-' + props.id"
        class="btn btn-sm btn-circle absolute right-2 top-2"
        >✕</label
      >

      <h3 class="text-lg font-bold">This action cannot be undone.</h3>
      <p class="py-4">Are you sure you want to delete this item?</p>
      <div class="modal-action">
        <label :for="'my-modal-' + props.id" class="btn btn-success"
          >Close!</label
        >
        <label
          :for="'my-modal-' + props.id"
          @click="deleteItem"
          class="btn btn-error"
          >Delete</label
        >
      </div>
    </div>
  </div>
</template>
<script setup >
// Import vue watch
import { watch } from "vue";
// Import axios
import axios from "axios";

import { useMessage, useNotification } from "naive-ui";
const message = useMessage();

const props = defineProps({
  id: {
    type: Array,
    default: () => [],
  },
  model: {
    type: String,
    default: () => [],
  },
  endpoint: {
    type: String,
    default: () => [],
  },
});

const emit = defineEmits(["onDelete"]);

const deleteItem = async () => {
  axios
    .post(props.endpoint, {
      model: props.model, // The model name encrypted
      id: props.id, // Item we want to delete
    })
    .then(function (response) {
      message.success(response.data.message);
    })
    .catch(function (error) {
      for (const [key, value] of Object.entries(error.response.data.errors)) {
        message.error(value[0]);
      }
    });
  emit("onDelete");
};
</script>


