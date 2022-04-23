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

      <div v-for="(item, index) in avaliableFields" :key="index">
        <div v-if="item.type == 'text'">
          <InputField
            type="text"
            v-model="avaliableFields[index].value"
            :label="item.label"
          />
        </div>
        <div v-else-if="item.type == 'email'">
          <InputField
            type="email"
            v-model="avaliableFields[index].value"
            :label="item.label"
          />
        </div>
      </div>

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

import { useMessage } from "naive-ui";

// Import the from components
import {
  InputField,
  InputPassword,
  Submit,
  LinkButton,
} from "@mariojgt/masterui/packages/index";

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

// This fuction will loop the columns and create the fields
const createFields = () => {
  avaliableFields = [];
  for (const [key, value] of Object.entries(props.columns)) {
    if (value.required) {
      avaliableFields.push({
        key: value.key,
        label: value.label,
        type: value.type,
        value: "",
      });
    }
  }
};

createFields();

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


