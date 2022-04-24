<template>
  <div class="form-control">
    <label class="label">
      <span class="label-text">{{ props.label }}</span>
    </label>
    <select
      class="select select-primary w-full"
      id="{{ props.id }}"
      :value="modelValue"
      @input="update"
    >
      <option v-for="(item, index) in props.options" :key="index" :value="index" >{{ item }}</option>
    </select>
  </div>

  <span class="invalid-feedback text-primary" role="alert">
    <strong>{{ errorMessage }}</strong>
  </span>
</template>

<script setup>
import { watch, onMounted, defineEmits } from "vue";
import { usePage } from "@inertiajs/inertia-vue3";

let errorMessage = $ref(null);

watch(
  () => usePage().props?.value?.errors,
  (v) => {
    if (usePage().props.value.errors[props.name]) {
      errorMessage = usePage().props.value.errors[props.name];
    }
  }
);

const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
  id: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  options: {
    type: Object,
    default: {},
  },
  modelValue: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:modelValue"]);

const update = (event) => {
    console.log('here');
  emit("update:modelValue", event.target.value);
};
</script>

<style></style>
