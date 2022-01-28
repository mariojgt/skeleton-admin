<template>
    <Layout>
        <div class="lg:p-10 xl:grid-cols-12 lg:bg-base-200 rounded-box">
            <div
                class="card col-span-1 row-span-3 shadow-lg xl:col-span-2 bg-base-100"
            >
                <n-card title="User Profile">
                    <n-tabs
                        type="card"
                        tab-style="min-width: 80px;"
                        class="tabs"
                    >
                        <n-tab-pane name="basic-info" tab="Basic Profile">
                            <EditDeatils :admin-info="props.admin.data" />
                        </n-tab-pane>
                        <n-tab-pane
                            name="password update"
                            tab="Password Update"
                        >
                            <PasswordUpdate :admin-info="props.admin.data" />
                        </n-tab-pane>
                        <n-tab-pane
                            name="2fa autenticator"
                            tab="2 steps autenticator"
                        >
                            <AutenticatorManager
                                :admin-info="props.admin.data"
                                :autenticator-info="props.autenticator"
                            />
                        </n-tab-pane>
                    </n-tabs>
                </n-card>
            </div>
        </div>
    </Layout>
</template>

<script setup>
import { Inertia } from "@inertiajs/inertia";
import { onMounted } from "vue";
import { Link } from "@inertiajs/inertia-vue3";
import Layout from "../../Layout/App";

// Tab Content
import EditDeatils from "./Components/EditDetails.vue";
import PasswordUpdate from "./Components/PasswordUpdate.vue";
import AutenticatorManager from "./Components/AutenticatorManager.vue";

const props = defineProps({
    autenticator: {
        type: Object,
        default: () => ({}),
    },
    admin: {
        type: Object,
        default: () => ({}),default: {},
    },
});
</script>
