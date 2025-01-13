<template>
    <reusable-modal
        :show="isOpen"
        @close="close"
        :isLarge="false"
        :showFooter="false"
        modalClass="bg-dark-500/95 backdrop-blur-sm border border-gray-800/50"
        :showModalBox="false"
    >
        <template #title>
            <header class="relative text-center px-8 py-6">
                <!-- Background Accent -->
                <div class="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>

                <h2 class="text-4xl font-bold text-white">Welcome Back</h2>
                <p class="mt-2 text-gray-400">Sign in to continue your journey</p>
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
                            placeholder="Enter your email"
                            class="w-full pl-10 pr-4 py-3 bg-dark-400/50 border border-gray-800/50 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300"
                        />
                    </div>
                </div>

                <!-- Password Field -->
                <div class="space-y-2">
                    <label for="password" class="block text-sm font-medium text-gray-300">Password</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Lock class="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            id="password"
                            v-model="form.password"
                            type="password"
                            placeholder="Enter your password"
                            class="w-full pl-10 pr-4 py-3 bg-dark-400/50 border border-gray-800/50 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300"
                        />
                    </div>
                </div>

                <!-- Action Buttons -->
                <div class="space-y-4">
                    <!-- Login Button -->
                    <button
                        type="submit"
                        class="group relative w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg transition-all duration-300 hover:from-blue-600 hover:to-purple-600"
                    >
                        <!-- Shine Effect -->
                        <div class="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine"></div>

                        <LogIn class="w-5 h-5" />
                        <span>Sign In</span>
                    </button>

                    <!-- GitHub Login -->
                    <button
                        type="button"
                        @click="socialLiteRegister('github')"
                        class="relative w-full flex items-center justify-center gap-2 px-4 py-3 bg-dark-400/50 hover:bg-dark-300/50 text-white font-medium rounded-lg border border-gray-800/50 transition-all duration-300"
                    >
                        <Github class="w-5 h-5" />
                        <span>Continue with GitHub</span>
                    </button>
                    <button
                        type="button"
                        @click="socialLiteRegister('google')"
                        class="relative w-full flex items-center justify-center gap-2 px-4 py-3 bg-dark-400/50 hover:bg-dark-300/50 text-white font-medium rounded-lg border border-gray-800/50 transition-all duration-300"
                    >
                        <svg class="w-5 h-5" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" xmlns:xlink="http://www.w3.org/1999/xlink" style="display: block;">
                            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                            <path fill="none" d="M0 0h48v48H0z"></path>
                        </svg>
                        <span>Continue with Google</span>
                    </button>
                </div>

                <!-- Links -->
                <div class="flex items-center justify-between pt-4 border-t border-gray-800/50">
                    <button
                        type="button"
                        @click="forgotPassword"
                        class="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-300"
                    >
                        Forgot Password?
                    </button>
                    <button
                        type="button"
                        @click="register"
                        class="text-sm text-gray-400 hover:text-purple-400 transition-colors duration-300"
                    >
                        Create Account
                    </button>
                </div>
            </form>
        </template>
    </reusable-modal>
</template>

<script setup lang="ts">
import { useForm, router } from "@inertiajs/vue3";
import { useRecaptcha } from '../../../Composable/useRecaptcha';
import { ReusableModal } from "@mariojgt/masterui/packages/index";
import {
    Mail, Lock, LogIn, Github,
} from 'lucide-vue-next';

const { getToken, isLoading, error } = useRecaptcha();

const emit = defineEmits(["closeModal", "register", "forgotPassword", "isLoading"]);

const form = useForm({
    email: "",
    password: "",
    recaptcha_token: ""
});

defineProps({
    isOpen: {
        type: Boolean,
        default: false,
    },
});

const close = () => {
    emit("closeModal");
};

const register = () => {
    emit("register");
};

const forgotPassword = () => {
    emit("forgotPassword");
};

const submitForm = async () => {
    form.recaptcha_token = await getToken('submit');
    emit("isLoading", true);
    form.post(route("login.user"), {
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

const socialLiteRegister = async (provider: string) => {
    window.location.href = route("social.redirect", provider);
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
