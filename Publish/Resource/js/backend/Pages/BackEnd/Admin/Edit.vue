<template>
    <Layout>
        <n-card title="User Profile" :class="'card col-span-1 row-span-3 shadow-lg xl:col-span-2 bg-base-300'">
            <TabGroup>
                <TabList class="flex space-x-1 rounded-xl p-1 tabs">
                    <Tab v-slot="{ selected }">
                        <a class="tab tab-lg tab-bordered" :class="selected ? 'tab-active' :''">Tab 1</a>
                    </Tab>
                    <Tab v-slot="{ selected }">
                        <a class="tab tab-lg tab-bordered" :class="selected ? 'tab-active' :''">Tab 2</a>
                    </Tab>
                    <Tab v-slot="{ selected }">
                        <a class="tab tab-lg tab-bordered" :class="selected ? 'tab-active' :''">Tab 3</a>
                    </Tab>
                </TabList>
                <TabPanels class="mt-2">
                    <TabPanel>
                        <EditDeatils :admin-info="props.admin.data" :roles="props.roles" />
                    </TabPanel>
                    <TabPanel>
                        <PasswordUpdate :admin-info="props.admin.data" :autenticator-info="props.autenticator" />
                    </TabPanel>
                    <TabPanel>
                        <AutenticatorManager :admin-info="props.admin.data" :autenticator-info="props.autenticator" />
                    </TabPanel>
                </TabPanels>
            </TabGroup>
        </n-card>
    </Layout>
</template>

<script setup>
import { router } from "@inertiajs/vue3";
import { onMounted } from "vue";
import { Link } from "@inertiajs/vue3";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
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
    admin: {
        type: Object,
        default: () => ({}), default: {},
    },
    roles: {
        type: Object,
        default: () => ({}), default: {},
    },
});
</script>
