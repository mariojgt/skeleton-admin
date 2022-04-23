<template>
  <!-- The button to open modal -->
  <label for="my-modal-5" class="btn btn-primary modal-button">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
    </svg>
  </label>

  <!-- Put this part before </body> tag -->
  <input type="checkbox" id="my-modal-5" class="modal-toggle" />
  <div class="modal text-center">
    <div class="modal-box w-11/12 max-w-5xl">
      <h3 class="font-bold text-lg">New</h3>

      <FormBuilder :columns="props.columns" @onFormUpdate="onFormUpdate" />

      <div class="modal-action">
        <label for="my-modal-5" class="btn btn-error">Close</label>
        <label for="my-modal-5" class="btn btn-success" @click="createNew"
          >Create</label
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
// Import the form builder
import FormBuilder from "./formbuilder.vue";

import { useMessage } from "naive-ui";

const message = useMessage();

const props = defineProps({
  columns: {
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

let avaliableFields = $ref([]);
const onFormUpdate = async (formData) => {
  avaliableFields = formData;
};

const emit = defineEmits(["onCreate"]);

const createNew = async () => {
  axios
    .post(props.endpoint, {
      model: props.model, // The model name encrypted
      data: avaliableFields, // Item we want to delete
    })
    .then(function (response) {
      message.success(response.data.message);
    })
    .catch(function (error) {
      for (const [key, value] of Object.entries(error.response.data.errors)) {
        message.error(value[0]);
      }
    });
  emit("onCreate");
};
</script>


