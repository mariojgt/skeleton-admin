<template>
    <Layout>
        <n-card title="User Profile" :class="'col-span-1 row-span-3 shadow-lg xl:col-span-2 bg-base-300'">
            <TabGroup>
                <TabList class="flex space-x-1 rounded-xl p-1 tabs">
                    <Tab v-slot="{ selected }">
                        <a class="tab tab-lg tab-bordered" :class="selected ? 'tab-active' : ''">Deatils</a>
                    </Tab>
                    <Tab v-slot="{ selected }">
                        <a class="tab tab-lg tab-bordered" :class="selected ? 'tab-active' : ''">Permissions</a>
                    </Tab>
                </TabList>
                <TabPanels class="mt-2">
                    <TabPanel>
                        <form @submit.prevent="submitForm">
                            <input-field v-model="roleInformation.name" label="Name" type="text"
                                placeholder="Name" />
                            <input-field v-model="roleInformation.guard_name" label="Guard Name" type="text"
                                placeholder="type your Guard Name" />
                            <div class="form-control pt-10">
                                <submit name="update" @click="submitForm" />
                            </div>
                        </form>
                    </TabPanel>
                    <TabPanel>
                        <div v-for="(item, index) in props.permissions" :key="index">
                            <div class="flex flex-col mb-7">
                                <h3 class="text-2xl font-bold">{{ index }}</h3>
                                <div class="flex justify-between" >
                                    <div v-for="(itemLoop, key) in item" :key="key">
                                        <Toogle
                                            @change="autoSubmitPer"
                                            v-model="rolePer[index][itemLoop.name]"
                                            :label="itemLoop.name"
                                            type="text"
                                            placeholder="type your Guard Name"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
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
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import {
    InputField,
    LinkButton,
    InputPassword,
    Submit,
    SelectInput,
    Toogle,
} from "@mariojgt/masterui/packages/index";

const props = defineProps({
    role: {
        type: Object,
        default: () => ({}),
    },
    permissions: {
        type: Object,
        default: () => ({}),
    },
    rolePermissions: {
        type: Object,
        default: () => ({}),
    },
});

let roleInformation = $ref([]);
let rolePer = $ref([]);

onMounted(() => {
    roleInformation = props.role;
    rolePer = props.rolePermissions;
});

// SubmitTheForm
const submitForm = () => {
    const form = {
        name: roleInformation.name,
        guard_name: roleInformation.guard_name,
    };
    router.patch(route("admin.role.update", roleInformation.id), form);
};

const autoSubmitPer = () => {
    const form = {
        permissions: rolePer,
    };
    router.patch(route("admin.role.perm.update", roleInformation.id), form);
};
</script>
