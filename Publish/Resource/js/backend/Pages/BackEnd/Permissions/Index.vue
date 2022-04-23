<template>
  <Layout>
    <Table
      :columns="props.columns"
      :model="props.model"
      :endpoint="props.endpoint"
      :endpoint-delete="props.endpointDelete"
      :endpoint-create="props.endpointCreate"
      :endpoint-edit="props.endpointEdit"
    />
  </Layout>
</template>

<script setup>
import { Inertia } from "@inertiajs/inertia";
import { onMounted } from "vue";
import { Link } from "@inertiajs/inertia-vue3";
import Layout from "../../../Layout/Backend.vue";

// Import the table component
import Table from "./Table/Table.vue";

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
});
</script>
