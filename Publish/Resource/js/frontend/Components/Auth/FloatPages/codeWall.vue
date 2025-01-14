<template>
    <reusable-modal
        :show="isOpen"
        @close="close"
        :isLarge="false"
        :showFooter="false"
        modalClass="bg-dark-500/95 backdrop-blur-sm border border-gray-800/50"
        :showModalBox="false"
        closeOnClick
        :showClose="true"
    >
        <template #title>
            <header class="relative text-center px-8 py-6">
                <!-- Background Accent -->
                <div class="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>

                <div class="flex flex-col items-center">
                    <div class="relative mb-4">
                        <div class="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur"></div>
                        <Shield class="w-12 h-12 text-blue-400 relative" />
                    </div>
                    <h2 class="text-3xl font-bold text-white">Two-Factor Authentication</h2>
                    <p class="mt-2 text-gray-400 max-w-sm">
                        {{ recoveryMode ? 'Enter your backup recovery code' : 'Enter the authentication code from your authenticator app' }}
                    </p>
                </div>
            </header>
        </template>

        <template #body>
            <div class="p-6 space-y-6">
                <!-- Regular 2FA Form -->
                <form v-if="!recoveryMode" @submit.prevent="submitForm" class="space-y-6">
                    <div class="space-y-2">
                        <label for="code" class="block text-sm font-medium text-gray-300">Authentication Code</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <KeyRound class="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                id="code"
                                v-model="form.code"
                                type="text"
                                placeholder="Enter your 6-digit code"
                                class="w-full pl-10 pr-4 py-3 bg-dark-400/50 border border-gray-800/50 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300"
                            />
                        </div>
                    </div>

                    <!-- Authenticate Button -->
                    <button
                        type="submit"
                        class="group relative w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg transition-all duration-300 hover:from-blue-600 hover:to-purple-600"
                    >
                        <div class="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine"></div>
                        <Unlock class="w-5 h-5" />
                        <span>Authenticate</span>
                    </button>
                </form>

                <!-- Recovery Code Form -->
                <form v-if="recoveryMode" @submit.prevent="submitFormRecovery" class="space-y-6">
                    <div class="space-y-2">
                        <label for="recovery-code" class="block text-sm font-medium text-gray-300">Recovery Code</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Key class="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                id="recovery-code"
                                v-model="form.code"
                                type="text"
                                placeholder="Enter your recovery code"
                                class="w-full pl-10 pr-4 py-3 bg-dark-400/50 border border-gray-800/50 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300"
                            />
                        </div>
                    </div>

                    <!-- Recover Button -->
                    <button
                        type="submit"
                        class="group relative w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg transition-all duration-300 hover:from-purple-600 hover:to-pink-600"
                    >
                        <div class="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine"></div>
                        <KeyRound class="w-5 h-5" />
                        <span>Recover Access</span>
                    </button>
                </form>

                <!-- Info Box -->
                <div class="p-4 bg-dark-400/30 rounded-lg">
                    <div class="flex items-start gap-3">
                        <Info class="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <p class="text-sm text-gray-400">
                            {{ recoveryMode
                                ? 'Recovery codes are single-use emergency codes. Make sure to generate new ones after using them.'
                                : 'Use the authentication code from your authenticator app. The code refreshes every 30 seconds.'
                            }}
                        </p>
                    </div>
                </div>

                <!-- Toggle Mode Button -->
                <button
                    @click="enableRecoveryMode(!recoveryMode)"
                    class="w-full px-4 py-3 bg-dark-400/50 hover:bg-dark-300/50 text-gray-300 hover:text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                    <component :is="recoveryMode ? 'ArrowLeft' : 'Key'" class="w-4 h-4" />
                    {{ recoveryMode ? 'Back to Authentication' : 'Use Recovery Code' }}
                </button>
            </div>
        </template>
    </reusable-modal>
</template>

<script setup lang="ts">
import { useForm } from "@inertiajs/vue3";
import { useRecaptcha } from '../../../Composable/useRecaptcha';
import { ReusableModal } from "@mariojgt/masterui/packages/index";
import {
    Shield, KeyRound, Key, Info,
    Unlock, ArrowLeft
} from 'lucide-vue-next';

const { getToken, isLoading, error } = useRecaptcha();

const emit = defineEmits(["closeModal"]);

const form = useForm({
    code: "",
    recaptcha_token: "",
});

defineProps({
    isOpen: {
        type: Boolean,
        default: false,
    },
});

const close = () => {
    emit("closeModal", "isLoading");
};

const submitForm = async () => {
    form.recaptcha_token = await getToken('submit');
    emit("isLoading", true);
    form.post(route("castle.validate"), {
        preserveState: false,
        onSuccess: () => {
            emit("isLoading", false);
            emit("closeModal");
        },
        onError: () => {
            emit("isLoading", false);
        },
    });
};

const submitFormRecovery = () => {
    emit("isLoading", true);
    form.post(route("castle.unlock.backup.code"), {
        preserveState: false,
        onSuccess: () => {
            emit("isLoading", false);
            emit("closeModal");
        },
        onError: () => {
            emit("isLoading", false);
        },
    });
};

let recoveryMode = $ref(false);

const enableRecoveryMode = (enable: boolean = false) => {
    recoveryMode = enable;
};
</script>

<style scoped>
@keyframes shine {
    from {
        left: -100%;
    }
    to {
        left: 100%;
    }
}

.animate-shine {
    animation: shine 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}
</style>
