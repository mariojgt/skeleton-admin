<template>
    <layout>
        <div class="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <!-- Profile Header -->
            <div class="mb-8 bg-dark-500/90 backdrop-blur-sm rounded-xl border border-gray-800/50 overflow-hidden">
                <div class="relative p-6">
                    <!-- Background Pattern -->
                    <div class="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
                    <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIxMjEyMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-10"></div>

                    <!-- Content -->
                    <div class="relative flex items-center gap-6">
                        <!-- User Avatar -->
                        <div class="relative">
                            <div class="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-75 blur"></div>
                            <div class="relative w-20 h-20 rounded-full overflow-hidden border-2 border-dark-400">
                                <img
                                    :src="props.user.data.avatar"
                                    :alt="props.user.data.name"
                                    class="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        <!-- User Info -->
                        <div>
                            <h1 class="text-2xl font-bold text-white">{{ props.user.data.name }}</h1>
                            <p class="text-gray-400">{{ props.user.data.email }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Tabs Section -->
            <div class="bg-dark-500/90 backdrop-blur-sm rounded-xl border border-gray-800/50 overflow-hidden">
                <TabGroup>
                    <div class="border-b border-gray-800/50">
                        <TabList class="flex items-center gap-1 px-4">
                            <!-- Main Tabs -->
                            <Tab v-slot="{ selected }">
                                <button
                                    class="relative px-4 py-3 text-sm font-medium transition-all duration-300"
                                    :class="selected ? 'text-blue-400' : 'text-gray-400 hover:text-white'"
                                >
                                    <div class="flex items-center gap-2">
                                        <User class="w-4 h-4" />
                                        Details
                                    </div>
                                    <!-- Active Indicator -->
                                    <div
                                        class="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left transition-transform duration-300"
                                        :class="selected ? 'scale-x-100' : 'scale-x-0'"
                                    ></div>
                                </button>
                            </Tab>

                            <Tab v-slot="{ selected }">
                                <button
                                    class="relative px-4 py-3 text-sm font-medium transition-all duration-300"
                                    :class="selected ? 'text-blue-400' : 'text-gray-400 hover:text-white'"
                                >
                                    <div class="flex items-center gap-2">
                                        <Shield class="w-4 h-4" />
                                        Security
                                    </div>
                                    <div
                                        class="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left transition-transform duration-300"
                                        :class="selected ? 'scale-x-100' : 'scale-x-0'"
                                    ></div>
                                </button>
                            </Tab>

                            <Tab v-slot="{ selected }">
                                <button
                                    class="relative px-4 py-3 text-sm font-medium transition-all duration-300"
                                    :class="selected ? 'text-blue-400' : 'text-gray-400 hover:text-white'"
                                >
                                    <div class="flex items-center gap-2">
                                        <KeyRound class="w-4 h-4" />
                                        2FA
                                    </div>
                                    <div
                                        class="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left transition-transform duration-300"
                                        :class="selected ? 'scale-x-100' : 'scale-x-0'"
                                    ></div>
                                </button>
                            </Tab>

                            <!-- Extra Links -->
                            <template v-for="(item, index) in extraLinks" :key="index">
                                <Link
                                    :href="item"
                                    class="relative px-4 py-3 text-sm font-medium text-gray-400 hover:text-white transition-all duration-300"
                                >
                                    {{ index }}
                                </Link>
                            </template>
                        </TabList>
                    </div>

                    <!-- Tab Panels -->
                    <TabPanels class="p-6">
                        <TabPanel>
                            <edit-details :user-info="props.user.data" />
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
        </div>
    </layout>
</template>

<script setup>
import { Link } from "@inertiajs/vue3";
import Layout from "../../../Layout/App.vue";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import { User, Shield, KeyRound } from 'lucide-vue-next';
import EditDetails from "./Components/EditDetails.vue";
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
