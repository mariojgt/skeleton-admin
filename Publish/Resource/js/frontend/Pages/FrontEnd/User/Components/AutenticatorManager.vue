<template>
    <div class="max-w-lg mx-auto p-6 bg-dark-blue-300 rounded-lg shadow-lg space-y-6">
        <h2 class="text-center text-2xl font-semibold text-white">
            Two-Factor Authentication
        </h2>

        <div v-if="!props.autenticatorInfo.is_enable" class="space-y-6">
            <div class="text-center">
                <div class="p-4 bg-dark-200 rounded-lg inline-block">
                    <div v-html="props.autenticatorInfo.codeinfo.qr_code"></div>
                </div>
                <p class="text-sm text-gray-400 mt-4">
                    Scan this QR code to set up two-factor authentication. You can also enter the code manually:
                    <span class="text-white font-semibold">{{ props.autenticatorInfo.codeinfo.secret }}</span>
                </p>
            </div>

            <form @submit.prevent="submitForm" class="space-y-4">
                <inputField
                    v-model="code"
                    label="Authentication Code"
                    type="text"
                    name="code"
                    placeholder="Enter code"
                    labelClass="block text-white font-medium mb-2"
                    inputClass="w-full p-3 rounded-lg bg-gray-900 text-white placeholder-gray-500"
                />
                <button type="submit" class="w-full btn btn-secondary py-2">Activate</button>
            </form>
        </div>

        <div v-else>
            <h3 class="text-xl font-medium text-white text-center">
                Backup Codes
            </h3>
            <p class="text-center text-gray-400 mb-4">
                Save these backup codes to access your account if you lose access to your authenticator.
            </p>

            <div class="overflow-x-auto bg-gray-700 rounded-lg p-4">
                <table class="w-full text-left text-gray-200">
                    <thead>
                        <tr>
                            <th class="py-2">Code</th>
                            <th class="py-2">Used</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in autenticatorInfo.backup_codes" :key="index">
                            <td class="py-2">{{ item.code }}</td>
                            <td class="py-2">{{ item.used ? 'Yes' : 'No' }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="flex flex-col sm:flex-row gap-3 mt-6">
                <button class="w-full sm:w-auto btn btn-primary" @click="printCodes">Download CSV</button>
                <button class="w-full sm:w-auto btn btn-secondary" @click="toggleModal">Remove Authenticator</button>
            </div>
        </div>

        <!-- Modal for Removal Confirmation -->
        <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div class="bg-gray-800 rounded-lg p-6 max-w-sm w-full text-center space-y-4">
                <h4 class="text-lg font-semibold text-white">Confirm Removal</h4>
                <inputField
                    v-model="code"
                    label="Enter Code"
                    type="text"
                    name="code"
                    placeholder="Code to confirm"
                    inputClass="w-full p-3 rounded-lg bg-gray-900 text-white placeholder-gray-500"
                />
                <div class="flex gap-4 justify-center">
                    <button class="btn btn-primary" @click="removeAuthenticator">Confirm</button>
                    <button class="btn" @click="toggleModal">Cancel</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { router } from "@inertiajs/vue3";
import { InputField } from "@mariojgt/masterui/packages/index";

// Page props
const props = defineProps({
    userInfo: Object,
    autenticatorInfo: Object,
});

let code = ref("");
let showModal = ref(false);

// Form submission
const submitForm = () => {
    router.post(route("user.2fa.enable"), { code: code.value });
};

// Remove authenticator
const removeAuthenticator = () => {
    router.post(route("castle.unlock.backup.code"), { code: code.value });
    toggleModal();
};

// Download codes
const printCodes = () => {
    const content = props.autenticatorInfo.backup_codes.map(
        (item) => `${item.code},${item.used ? 'Yes' : 'No'}`
    ).join('\n');
    const blob = new Blob([content], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'backup_codes.csv';
    link.click();
    URL.revokeObjectURL(url);
};

// Toggle modal visibility
const toggleModal = () => {
    showModal.value = !showModal.value;
};
</script>
