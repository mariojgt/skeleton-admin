<template>
  <Layout>
      <Table/>
  </Layout>
</template>

<script setup>
import { Inertia } from "@inertiajs/inertia";
import { onMounted } from "vue";
import { Link } from "@inertiajs/inertia-vue3";
import Layout from "../../../Layout/Backend.vue";

// Import the table component
import Table from "../../../Components/Backend/Reusable/table.vue";

const props = defineProps({
  autenticator: {
    type: Object,
    default: () => ({}),
  },
  admin: {
    type: Object,
    default: () => ({}),
    default: {},
  },
});
</script>
