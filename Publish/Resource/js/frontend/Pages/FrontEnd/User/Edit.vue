<template>
    <layout>
        <div class="p-4 bg-dark-300 shadow-2xl m-10 rounded-lg">
            <TabGroup>
                <TabList class="flex space-x-1 rounded-xl p-1 tabs">
                    <Tab v-slot="{ selected }">
                        <a
                            class="btn btn-primary"
                            :class="selected ? 'bg-secondary' : ''"
                            >Deatils</a
                        >
                    </Tab>
                    <Tab v-slot="{ selected }">
                        <a
                            class="btn btn-primary"
                            :class="selected ? 'bg-secondary' : ''"
                            >Security</a
                        >
                    </Tab>
                    <Tab v-slot="{ selected }">
                        <a
                            class="btn btn-primary"
                            :class="selected ? 'bg-secondary' : ''"
                            >2fa</a
                        >
                    </Tab>
                    <template v-for="(item, index) in extraLinks">
                        <Link
                            class="btn btn-primary"
                            :href="item"
                            :class="selected ? 'bg-secondary' : ''"
                            >{{ index }}
                        </Link>
                    </template>
                </TabList>
                <TabPanels class="mt-2">
                    <TabPanel>
                        <edit-deatils :user-info="props.user.data" />
                    </TabPanel>
                    <TabPanel>
                        <password-update
                            :user-info="props.user.data"
                            :autenticator-info="props.autenticator"
                        />
                    </TabPanel>
                    <TabPanel>
                        <autenticator-manager
                            :user-info="props.user.data"
                            :autenticator-info="props.autenticator"
                        />
                    </TabPanel>
                </TabPanels>
            </TabGroup>
        </div>
    </layout>
</template>

<script setup>
import { Link } from "@inertiajs/vue3";
import Layout from "../../../Layout/App.vue";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";

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
    },
    extraLinks: {
        type: Object,
        default: () => ({}),
    },
});
</script>
