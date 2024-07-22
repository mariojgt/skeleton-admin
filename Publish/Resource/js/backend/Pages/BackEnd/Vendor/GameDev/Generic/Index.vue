<template>
    <Layout>
      <Table
        :columns="props.columns"
        :model="props.model"
        :endpoint="props.endpoint"
        :endpoint-delete="props.endpointDelete"
        :endpoint-create="props.endpointCreate"
        :endpoint-edit="props.endpointEdit"
        :table-title="props.table_name"
        :permission="props.permission"
        :custom_edit_route="props.custom_edit_route"
      />
    </Layout>
  </template>

  <script setup>
  // Import the layout component using the root
  import Layout from "../../../../../Layout/App.vue";

  // Import the table component from the builder api
  import Table from "../../../../../../../../Builder/Table/Table.vue";

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
    table_name: {
      type: String,
      default: "",
    },
    custom_edit_route: {
      type: String,
      default: null,
    },
  });
  </script>
