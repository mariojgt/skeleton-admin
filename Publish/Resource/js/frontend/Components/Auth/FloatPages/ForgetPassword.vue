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
                        <KeyRound class="w-12 h-12 text-blue-400 relative" />
                    </div>
                    <h2 class="text-3xl font-bold text-white">Password Reset</h2>
                    <p class="mt-2 text-gray-400 max-w-sm">
                        Enter your email address and we'll send you a link to reset your password
                    </p>
                </div>
            </header>
        </template>

        <template #body>
            <form @submit.prevent="submitForm" class="p-6 space-y-6">
                <!-- Email Field -->
                <div class="space-y-2">
                    <label for="email" class="block text-sm font-medium text-gray-300">Email Address</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Mail class="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            id="email"
                            v-model="form.email"
                            type="email"
                            placeholder="Enter your registered email"
                            class="w-full pl-10 pr-4 py-3 bg-dark-400/50 border border-gray-800/50 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300"
                        />
                    </div>
                </div>

                <!-- Action Buttons -->
                <div class="space-y-4">
                    <!-- Reset Button -->
                    <button
                        type="submit"
                        class="group relative w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg transition-all duration-300 hover:from-blue-600 hover:to-purple-600"
                    >
                        <!-- Shine Effect -->
                        <div class="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine"></div>

                        <Send class="w-5 h-5" />
                        <span>Send Reset Link</span>
                    </button>

                    <!-- Info Box -->
                    <div class="p-4 bg-dark-400/30 rounded-lg">
                        <div class="flex items-start gap-3">
                            <Info class="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                            <p class="text-sm text-gray-400">
                                Make sure to check your spam folder if you don't receive the email within a few minutes. The reset link will be valid for 60 minutes.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Back to Login -->
                <div class="flex justify-center pt-4 border-t border-gray-800/50">
                    <button
                        @click="close"
                        class="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2"
                    >
                        <ArrowLeft class="w-4 h-4" />
                        Back to login
                    </button>
                </div>
            </form>
        </template>
    </reusable-modal>
</template>

<script setup lang="ts">
import { useForm } from "@inertiajs/vue3";
import { useRecaptcha } from '../../../Composable/useRecaptcha';
import { ReusableModal } from "@mariojgt/masterui/packages/index";
import {
    KeyRound, Mail, Send, Info,
    ArrowLeft
} from 'lucide-vue-next';

const { getToken, isLoading, error } = useRecaptcha();

const emit = defineEmits(["closeModal"]);

const form = useForm({
    email: "",
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
    form.post(route("password-reset.user"), {
        preserveState: true,
        onSuccess: () => {
            emit("isLoading", false);
            emit("closeModal");
        },
        onError: () => {
            emit("isLoading", false);
        },
    });
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
