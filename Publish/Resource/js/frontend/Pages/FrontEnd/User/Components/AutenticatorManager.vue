<template>
    <div class="max-w-2xl mx-auto">
        <!-- Main Container -->
        <div class="bg-dark-500/90 backdrop-blur-sm rounded-xl border border-gray-800/50 overflow-hidden">
            <!-- Header Section -->
            <div class="relative p-6 text-center border-b border-gray-800/50">
                <div class="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>

                <div class="relative">
                    <div class="inline-flex items-center gap-3 mb-4">
                        <div class="relative">
                            <div class="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur"></div>
                            <Shield class="w-10 h-10 text-blue-400 relative" />
                        </div>
                        <h2 class="text-2xl font-bold text-white">Two-Factor Authentication</h2>
                    </div>
                    <p class="text-gray-400">
                        {{ !props.autenticatorInfo.is_enable
                            ? 'Enhance your account security with 2FA authentication'
                            : 'Manage your two-factor authentication settings and backup codes'
                        }}
                    </p>
                </div>
            </div>

            <!-- Content Section -->
            <div class="p-6">
                <!-- Setup 2FA Section -->
                <div v-if="!props.autenticatorInfo.is_enable" class="space-y-8">
                    <!-- QR Code -->
                    <div class="flex flex-col items-center">
                        <div class="p-4 bg-white rounded-xl">
                            <div v-html="props.autenticatorInfo.codeinfo.qr_code"></div>
                        </div>
                        <div class="mt-4 text-center max-w-md">
                            <p class="text-gray-400 mb-2">
                                Scan this QR code with your authenticator app or enter the code manually:
                            </p>
                            <div class="bg-dark-400/50 px-4 py-2 rounded-lg font-mono text-sm text-blue-400 break-all">
                                {{ props.autenticatorInfo.codeinfo.secret }}
                            </div>
                        </div>
                    </div>

                    <!-- Activation Form -->
                    <form @submit.prevent="submitForm" class="space-y-6">
                        <div class="space-y-2">
                            <label class="block text-sm font-medium text-gray-300">
                                Authentication Code
                            </label>
                            <div class="relative">
                                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Key class="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    v-model="code"
                                    type="text"
                                    placeholder="Enter the 6-digit code"
                                    class="w-full pl-10 pr-4 py-3 bg-dark-400/50 border border-gray-800/50 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            class="group relative w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg transition-all duration-300 hover:from-blue-600 hover:to-purple-600"
                        >
                            <div class="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine"></div>
                            <Shield class="w-5 h-5" />
                            <span>Activate 2FA</span>
                        </button>
                    </form>
                </div>

                <!-- Manage 2FA Section -->
                <div v-else class="space-y-8">
                    <!-- Backup Codes -->
                    <div class="space-y-4">
                        <div class="flex items-center justify-between">
                            <h3 class="text-xl font-bold text-white">Backup Codes</h3>
                            <div class="flex gap-2">
                                <button
                                    @click="printCodes"
                                    class="flex items-center gap-2 px-4 py-2 bg-dark-400/50 hover:bg-dark-300/50 text-gray-300 hover:text-white rounded-lg transition-all duration-300"
                                >
                                    <Download class="w-4 h-4" />
                                    Download CSV
                                </button>
                            </div>
                        </div>

                        <!-- Codes Table -->
                        <div class="bg-dark-400/30 rounded-lg overflow-hidden">
                            <div class="overflow-x-auto">
                                <table class="w-full text-left">
                                    <thead class="border-b border-gray-800/50">
                                        <tr>
                                            <th class="px-6 py-3 text-sm font-medium text-gray-400">Code</th>
                                            <th class="px-6 py-3 text-sm font-medium text-gray-400">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-gray-800/30">
                                        <tr v-for="(item, index) in autenticatorInfo.backup_codes"
                                            :key="index"
                                            class="hover:bg-dark-300/30 transition-colors duration-200"
                                        >
                                            <td class="px-6 py-4 font-mono text-gray-300">{{ item.code }}</td>
                                            <td class="px-6 py-4">
                                                <span
                                                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                                                    :class="item.used
                                                        ? 'bg-red-500/20 text-red-400'
                                                        : 'bg-green-500/20 text-green-400'"
                                                >
                                                    {{ item.used ? 'Used' : 'Available' }}
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <!-- Disable 2FA -->
                    <div class="pt-6 border-t border-gray-800/50">
                        <button
                            @click="toggleModal"
                            class="flex items-center gap-2 px-4 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-lg transition-all duration-300"
                        >
                            <Shield class="w-4 h-4" />
                            Disable 2FA
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Disable 2FA Modal -->
        <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center">
            <!-- Backdrop -->
            <div class="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>

            <!-- Modal Content -->
            <div class="relative w-full max-w-md bg-dark-500 rounded-xl border border-gray-800/50 shadow-2xl">
                <div class="p-6 space-y-6">
                    <div class="text-center">
                        <AlertTriangle class="w-12 h-12 text-red-400 mx-auto mb-4" />
                        <h3 class="text-xl font-bold text-white mb-2">Disable 2FA Authentication</h3>
                        <p class="text-gray-400">Please enter your authentication code to confirm disabling 2FA.</p>
                    </div>

                    <div class="space-y-4">
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Key class="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                v-model="code"
                                type="text"
                                placeholder="Enter authentication code"
                                class="w-full pl-10 pr-4 py-3 bg-dark-400/50 border border-gray-800/50 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-red-500/50 focus:border-transparent transition-all duration-300"
                            />
                        </div>

                        <div class="flex gap-3">
                            <button
                                @click="removeAuthenticator"
                                class="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition-colors duration-300"
                            >
                                Disable 2FA
                            </button>
                            <button
                                @click="toggleModal"
                                class="flex-1 px-4 py-3 bg-dark-400 hover:bg-dark-300 text-gray-300 font-medium rounded-lg transition-colors duration-300"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { router } from "@inertiajs/vue3";
import {
    Shield, Key, Download,
    AlertTriangle
} from 'lucide-vue-next';

const props = defineProps({
    userInfo: Object,
    autenticatorInfo: Object,
});

let code = ref("");
let showModal = ref(false);

const submitForm = () => {
    router.post(route("user.2fa.enable"), { code: code.value });
};

const removeAuthenticator = () => {
    router.post(route("castle.unlock.backup.code"), { code: code.value });
    toggleModal();
};

const printCodes = () => {
    const content = props.autenticatorInfo.backup_codes
        .map(item => `${item.code},${item.used ? 'Yes' : 'No'}`)
        .join('\n');
    const blob = new Blob([content], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'backup_codes.csv';
    link.click();
    URL.revokeObjectURL(url);
};

const toggleModal = () => {
    showModal.value = !showModal.value;
    if (!showModal.value) code.value = "";
};
</script>

<style scoped>
@keyframes shine {
    from { left: -100%; }
    to { left: 100%; }
}

.animate-shine {
    animation: shine 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}
</style>
