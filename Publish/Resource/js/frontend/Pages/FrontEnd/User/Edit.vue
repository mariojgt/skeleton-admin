<template>
    <Layout :backgroundFooterClass="'bg-[#253D63]'" :headerBackground="'bg-[#253D63]'">
        <div class="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <!-- Profile Header -->
            <div class="mb-8 relative overflow-hidden rounded-xl border border-[#BAD9FC]/20 bg-gradient-to-br from-[#253D63] to-[#1E2F4A]">
                <div class="relative p-6">
                    <!-- Tech Pattern Background -->
                    <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDUgTCA1IDAgTSAxNSAwIEwgMjAgNSBNIDAgMTUgTCA1IDIwIE0gMTUgMjAgTCAyMCAxNSIgc3Ryb2tlPSIjQkFEOUZDIiBzdHJva2Utd2lkdGg9IjAuNSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-10"></div>

                    <!-- Content -->
                    <div class="relative flex items-center gap-8">
                        <!-- User Avatar with Tech Frame -->
                        <div class="relative group">
                            <div class="absolute -inset-1 bg-gradient-to-r from-[#328AF1] via-[#637BFF] to-[#8B60ED] rounded-xl opacity-75 blur group-hover:opacity-100 transition duration-300"></div>
                            <div class="relative rounded-xl overflow-hidden border-2 border-[#BAD9FC]/30">
                                <div class="w-28 h-28">
                                    <img
                                        :src="props.user.data.avatar"
                                        :alt="props.user.data.name"
                                        class="w-full h-full object-cover"
                                    />
                                </div>
                                <!-- Tech Level Indicator -->
                                <div class="absolute -bottom-1 -right-1 bg-[#328AF1] text-white px-3 py-1 text-xs font-medium rounded-lg flex items-center gap-1">
                                    <Terminal class="w-3 h-3" />
                                    <span>Tech Lvl {{ userLevel }}</span>
                                </div>
                            </div>
                        </div>

                        <!-- User Info -->
                        <div class="space-y-3">
                            <div class="space-y-1">
                                <h1 class="text-2xl font-bold text-white flex items-center gap-2">
                                    {{ props.user.data.name }}
                                    <Badge class="w-4 h-4 text-[#F19A1A]" />
                                </h1>
                                <div class="flex items-center gap-2 text-[#BAD9FC]">
                                    <Code2 class="w-4 h-4" />
                                    <span>{{ props.user.data.email }}</span>
                                </div>
                            </div>

                            <!-- Tech Progress Bar -->
                            <div class="space-y-2">
                                <div class="flex items-center justify-between text-sm">
                                    <span class="text-[#BAD9FC]">Progress</span>
                                    <span class="text-[#1AAB8B]">{{ experiencePercentage }}%</span>
                                </div>
                                <div class="w-72 h-2 bg-[#253D63] rounded-full overflow-hidden">
                                    <div
                                        class="h-full bg-gradient-to-r from-[#328AF1] to-[#21C8F6] transition-all duration-300"
                                        :style="{ width: `${experiencePercentage}%` }"
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Tabs Section -->
            <div class="rounded-xl border border-[#BAD9FC]/20 bg-gradient-to-br from-[#253D63] to-[#1E2F4A] overflow-hidden">
                <TabGroup>
                    <div class="border-b border-[#BAD9FC]/10">
                        <TabList class="flex items-center gap-1 px-4">
                            <!-- Main Tabs -->
                            <Tab v-slot="{ selected }">
                                <button
                                    class="relative px-6 py-4 text-sm font-medium transition-all duration-300"
                                    :class="selected ? 'text-[#328AF1]' : 'text-[#BAD9FC] hover:text-white'"
                                >
                                    <div class="flex items-center gap-3">
                                        <Settings2 :class="selected ? 'animate-spin-slow' : ''" class="w-5 h-5" />
                                        Profile Settings
                                    </div>
                                    <div
                                        class="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#328AF1] to-[#21C8F6] transform origin-left transition-transform duration-300"
                                        :class="selected ? 'scale-x-100' : 'scale-x-0'"
                                    ></div>
                                </button>
                            </Tab>

                            <Tab v-slot="{ selected }">
                                <button
                                    class="relative px-6 py-4 text-sm font-medium transition-all duration-300"
                                    :class="selected ? 'text-[#F44881]' : 'text-[#BAD9FC] hover:text-white'"
                                >
                                    <div class="flex items-center gap-3">
                                        <ShieldCheck :class="selected ? 'animate-pulse' : ''" class="w-5 h-5" />
                                        Security
                                    </div>
                                    <div
                                        class="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#EC454F] to-[#F44881] transform origin-left transition-transform duration-300"
                                        :class="selected ? 'scale-x-100' : 'scale-x-0'"
                                    ></div>
                                </button>
                            </Tab>

                            <Tab v-slot="{ selected }">
                                <button
                                    class="relative px-6 py-4 text-sm font-medium transition-all duration-300"
                                    :class="selected ? 'text-[#1AAB8B]' : 'text-[#BAD9FC] hover:text-white'"
                                >
                                    <div class="flex items-center gap-3">
                                        <Fingerprint :class="selected ? 'animate-pulse' : ''" class="w-5 h-5" />
                                        Authentication
                                    </div>
                                    <div
                                        class="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#1AAB8B] to-[#6EDCC4] transform origin-left transition-transform duration-300"
                                        :class="selected ? 'scale-x-100' : 'scale-x-0'"
                                    ></div>
                                </button>
                            </Tab>

                            <!-- Extra Links -->
                            <template v-for="(item, index) in extraLinks" :key="index">
                                <Link
                                    :href="item"
                                    class="relative px-6 py-4 text-sm font-medium text-[#BAD9FC] hover:text-white transition-all duration-300"
                                >
                                    {{ index }}
                                </Link>
                            </template>
                        </TabList>
                    </div>

                    <!-- Tab Panels -->
                    <TabPanels class="p-6 bg-gradient-to-b from-transparent to-[#1E2F4A]">
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
    </Layout>
</template>

<script setup>
import { Link } from "@inertiajs/vue3";
import Layout from "../../../Layout/App.vue";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import {
    Settings2,
    ShieldCheck,
    Fingerprint,
    Terminal,
    Badge,
    Code2
} from 'lucide-vue-next';
import EditDetails from "./Components/EditDetails.vue";
import PasswordUpdate from "./Components/PasswordUpdate.vue";
import AutenticatorManager from "./Components/AutenticatorManager.vue";
import { ref, computed } from 'vue';

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

// User tech stats
const userLevel = ref(42);
const experiencePercentage = ref(75);
</script>

<style>
@keyframes spin-slow {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

.animate-spin-slow {
    animation: spin-slow 3s linear infinite;
}
</style>
