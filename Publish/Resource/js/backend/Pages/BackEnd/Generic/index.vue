<template>
    <Layout>
        <Table
            :columns="props.columns"
            :model="props.model"
            :endpoint="props.endpoint"
            :endpoint-delete="props.endpointDelete"
            :endpoint-create="props.endpointCreate"
            :endpoint-edit="props.endpointEdit"
            :table-title="props.title"
            :permission="props.permission"
            :custom_edit_route="props.custom_edit_route"
            :custom_point_route="props.custom_point_route"
            :custom_action_name="props.custom_action_name"
        />
    </Layout>
</template>

<script setup>
import Layout from "@backend_layout/App.vue";

// Import the table component from the builder api
import Table from "@builder/Table.vue";

const props = defineProps({
    title: {
        type: String,
        default: "",
    },
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
    custom_edit_route: {
        type: String,
        default: "",
    },
    custom_action_name: {
        type: String,
        default: "",
    },
    custom_point_route: {
        type: String,
        default: "",
    },
});
</script>
