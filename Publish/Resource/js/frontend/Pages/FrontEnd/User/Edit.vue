<template>
    <layout>
        <n-card title="User Profile" :class="'card col-span-1 row-span-3 shadow-lg xl:col-span-2 bg-dark'">
            <n-tabs type="card" tab-style="min-width: 80px;" class="tabs"
                :pane-class="'bg-base-300 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md'">
                <n-tab-pane name="basic-info" tab="Basic Profile">
                    <edit-deatils :user-info="props.user.data" />
                </n-tab-pane>
                <n-tab-pane name="password update" tab="Password Update">
                    <password-update :user-info="props.user.data" :autenticator-info="props.autenticator" />
                </n-tab-pane>
                <n-tab-pane name="2fa autenticator" tab="2 steps autenticator">
                    <autenticator-manager :user-info="props.user.data"
                                :autenticator-info="props.autenticator" />
                </n-tab-pane>
            </n-tabs>
        </n-card>
    </layout>
</template>

<script setup>
import { Inertia } from "@inertiajs/inertia";
import { onMounted } from "vue";
import { Link } from "@inertiajs/inertia-vue3";
import Layout from "../../../Layout/App.vue";

// Tab Content
import EditDeatils from "./Components/EditDetails.vue";
import PasswordUpdate from "./Components/PasswordUpdate.vue";
import AutenticatorManager from "./Components/AutenticatorManager.vue";

const props = defineProps({
    autenticator: {
        type: Object,
        default: () => ({}),
    },
    user: {
        type: Object,
        default: () => ({}),
        default: {},
    },
});
</script>
