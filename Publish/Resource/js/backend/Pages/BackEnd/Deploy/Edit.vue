<template>
    <Layout>
        <n-card
            title="User Profile"
            :class="'col-span-1 row-span-3 shadow-lg xl:col-span-2 bg-base-300'"
        >
            <TabGroup>
                <TabList class="flex space-x-1 rounded-xl p-1 tabs">
                    <Tab v-slot="{ selected }">
                        <a
                            class="tab tab-lg tab-bordered"
                            :class="selected ? 'tab-active' : ''"
                            >Deploy Information</a
                        >
                    </Tab>
                    <Tab v-slot="{ selected }">
                        <a
                            class="tab tab-lg tab-bordered"
                            :class="selected ? 'tab-active' : ''"
                            >Last Deployment</a
                        >
                    </Tab>
                </TabList>
                <TabPanels class="mt-2">
                    <TabPanel>
                        <form @submit.prevent="submitForm">
                            <input-field
                                v-model="deployInformation.name"
                                label="Name"
                                type="text"
                                placeholder="Name"
                            />
                            <input-field
                                v-model="deployInformation.repository_url"
                                label="Repository URL"
                                type="text"
                                placeholder="Repository URL"
                            />
                            <input-field
                                v-model="deployInformation.branch"
                                label="Branch"
                                type="text"
                                placeholder="Branch"
                            />
                            <input-field
                                v-model="deployInformation.secret_token"
                                label="secret_token"
                                type="text"
                                placeholder="secret_token"
                                required="true"
                            />
                            <div class="form-control pt-10">
                                <button
                                    @click="genereteToken"
                                    type="button"
                                    class="btn btn-primary"
                                >
                                    Generate Token
                                </button>
                            </div>
                            <Toggle
                                v-model="deployInformation.is_active"
                                label="Is Active"
                            />
                            <Chips
                                v-model="deployInformation.deployment_commands"
                                label="Deployment Commands"
                            />
                            <input-field
                                v-model="deployInformation.deployment_path"
                                label="deployment_path"
                                type="text"
                                placeholder="deployment_path"
                                required="true"
                            />
                            <div class="form-control pt-10">
                                <submit name="update" @click="submitForm" />
                                <!-- <submit name="Test Deployment" /> -->
                            </div>
                        </form>
                    </TabPanel>
                    <TabPanel>
                        <DeployTable :deployments="deploymentLogs.data" @viewDeployment="deployment = $event" />
                        <DeployStatus :deployment="deployment" v-if="deployment" />
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
import Layout from "../../../Layout/App.vue";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import DeployTable from "./DeployTable.vue";
import DeployStatus from "./DeployStatus.vue";
import {
    InputField,
    LinkButton,
    InputPassword,
    Submit,
    SelectInput,
    Toggle,
    Chips,
} from "@mariojgt/masterui/packages/index";

const props = defineProps({
    deploy: {
        type: Object,
        default: () => ({}),
    },
    deploymentLogs: {
        type: Array,
        default: () => [],
    },
});

let deployInformation = $ref({});

onMounted(() => {
    deployInformation = props.deploy;
});


let deployment = $ref(null);
// SubmitTheForm
const submitForm = () => {
    const form = {
        name: deployInformation.name,
        repository_url: deployInformation.repository_url,
        branch: deployInformation.branch,
        secret_token: deployInformation.secret_token,
        is_active: deployInformation.is_active,
        deployment_commands: deployInformation.deployment_commands,
        deployment_path: deployInformation.deployment_path,
    };
    router.post(route("admin.deploy.update", deployInformation.id), form);
};

const genereteToken = () => {
    deployInformation.secret_token =
        Math.random().toString(36).substring(2).toUpperCase() +
        Math.random().toString(36).substring(2).toUpperCase();
};
</script>
