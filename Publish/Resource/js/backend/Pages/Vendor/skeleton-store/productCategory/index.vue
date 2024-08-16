<template>
    <Layout>
        <Table
            :columns="props.columns"
            :model="props.model"
            :endpoint="props.endpoint"
            :endpoint-delete="props.endpointDelete"
            :endpoint-create="props.endpointCreate"
            :endpoint-edit="props.endpointEdit"
            :table-title="'Product Category'"
            :permission="props.permission"
            :custom_edit_route="props.custom_edit_route"
        />
    </Layout>
</template>

<script setup>
import { router } from "@inertiajs/vue3";
import { onMounted } from "vue";
import { Link } from "@inertiajs/vue3";
import Layout from "@backend_layout/App.vue";

// Import the table component from the builder api
import Table from "../../../../../../../Builder/Table/Table.vue";

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
    custom_edit_route: {
        type: String,
        default: "",
    },
});
</script>
