<template>
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
    <div v-else-if="item.type == 'date'">
      <InputField
        type="date"
        v-model="avaliableFields[index].value"
        :label="item.label"
      />
    </div>
    <div v-else-if="item.type == 'timestamp'">
      <InputField
        type="datetime-local"
        v-model="avaliableFields[index].value"
        :label="item.label"
      />
    </div>
  </div>
</template>
<script setup >
// Import vue watch
import { watch } from "vue";

// Import the from components
import {
  InputField,
  InputPassword,
  Submit,
  LinkButton,
} from "@mariojgt/masterui/packages/index";

const props = defineProps({
  columns: {
    type: Array,
    default: () => [],
  },
  modelValue: {
    type: Array,
    default: () => [],
  },
  editMode: {
    type: String,
    default: "false",
  },
});

let avaliableFields = $ref([]);

// This fuction will loop the columns and create the fields
const createFields = () => {
  avaliableFields = [];
  for (const [key, value] of Object.entries(props.columns)) {
    if (props.editMode == "false") {
      if (value.canCreate) {
        // Create mode
        avaliableFields.push({
          key: value.key,
          label: value.label,
          type: value.type,
          value: "",
        });
      }
    } else {
      // Edit mode
      if (value.canEdit) {
        // Variable that will hold the final value after the cast
        let finalValue = null;

        switch (value.type) {
          case "date":
            // Cast the value to date
            const tempDate = props.modelValue[value.key].split("/");
            finalValue = new Date(
              tempDate[2] + "/" + tempDate[1] + "/" + tempDate[0]
            );
            // Format to yyyy-mm-dd
            finalValue = finalValue.toISOString().split("T")[0];
            break;
          case "timestamp":
            // Cast to a temp date
            const tempTime = props.modelValue[value.key].split("/");
            // Cast to datetime-local
            finalValue = new Date(
              tempDate[2] + "/" + tempDate[1] + "/" + tempDate[0]
            )
              .toISOString()
              .substr(0, 16);
            break;
          default:
            // Cast to string
            finalValue = props.modelValue[value.key];
            break;
        }

        avaliableFields.push({
          key: value.key,
          label: value.label,
          type: value.type,
          value: finalValue,
        });
      }
    }
  }
};

// Call the fuction to build the fields
createFields();

const emit = defineEmits(["onFormUpdate"]);

// Debounce
let debounce = $ref(null);

// Watch any change in the avaliable fields
watch(
  () => avaliableFields,
  () => {
    // Clear any existing debounce event
    clearTimeout(debounce);
    // Update and log the counts after 500 miliseconds
    debounce = setTimeout(function () {
      emit("onFormUpdate", avaliableFields);
    }, 500);
  },
  { deep: true }
);
</script>


