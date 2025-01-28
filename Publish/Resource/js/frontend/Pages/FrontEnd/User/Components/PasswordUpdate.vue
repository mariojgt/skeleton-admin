<template>
    <div class="bg-dark-500/90 backdrop-blur-sm rounded-xl border border-gray-800/50 overflow-hidden">
        <!-- Header Section -->
        <div class="relative p-6 text-center border-b border-gray-800/50">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>

            <div class="relative">
                <div class="inline-flex items-center gap-3 mb-4">
                    <div class="relative">
                        <div class="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur"></div>
                        <Lock class="w-10 h-10 text-blue-400 relative" />
                    </div>
                    <h2 class="text-2xl font-bold text-white">Update Password</h2>
                </div>
                <p class="text-gray-400">Ensure your account stays secure with a strong password</p>
            </div>
        </div>

        <!-- Form Section -->
        <form @submit.prevent="submitForm" class="p-6 space-y-6">
            <!-- Password Requirements -->
            <div class="bg-dark-400/30 rounded-lg p-4">
                <div class="flex items-start gap-3">
                    <Shield class="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <div class="space-y-2">
                        <p class="text-sm text-gray-300">Password requirements:</p>
                        <ul class="text-sm text-gray-400 space-y-1">
                            <li class="flex items-center gap-2">
                                <CheckCircle class="w-4 h-4 text-green-400" />
                                Minimum 8 characters
                            </li>
                            <li class="flex items-center gap-2">
                                <CheckCircle class="w-4 h-4 text-green-400" />
                                Mix of uppercase & lowercase letters
                            </li>
                            <li class="flex items-center gap-2">
                                <CheckCircle class="w-4 h-4 text-green-400" />
                                At least one number and symbol
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- New Password -->
            <div class="space-y-2">
                <label for="password" class="block text-sm font-medium text-gray-300">New Password</label>
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Key class="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                        id="password"
                        v-model="form.password"
                        :type="showPassword ? 'text' : 'password'"
                        placeholder="Enter new password"
                        class="w-full pl-10 pr-20 py-3 bg-dark-400/50 border border-gray-800/50 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300"
                    />
                    <button
                        type="button"
                        @click="showPassword = !showPassword"
                        class="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                        <component
                            v-if="showPassword"
                            :is="EyeOff"
                            class="w-5 h-5 text-gray-400 hover:text-gray-300 transition-colors duration-300"
                        />
                        <component
                            v-else
                            :is="Eye"
                            class="w-5 h-5 text-gray-400 hover:text-gray-300 transition-colors duration-300"
                        />
                    </button>
                </div>
            </div>

            <!-- Confirm Password -->
            <div class="space-y-2">
                <label for="password_confirmation" class="block text-sm font-medium text-gray-300">Confirm Password</label>
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <KeyRound class="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                        id="password_confirmation"
                        v-model="form.password_confirmation"
                        :type="showConfirmPassword ? 'text' : 'password'"
                        placeholder="Confirm new password"
                        class="w-full pl-10 pr-20 py-3 bg-dark-400/50 border border-gray-800/50 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300"
                    />
                    <button
                        type="button"
                        @click="showConfirmPassword = !showConfirmPassword"
                        class="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                        <component
                            v-if="showConfirmPassword"
                            :is="EyeOff"
                            class="w-5 h-5 text-gray-400 hover:text-gray-300 transition-colors duration-300"
                        />
                        <component
                            v-else
                            :is="Eye"
                            class="w-5 h-5 text-gray-400 hover:text-gray-300 transition-colors duration-300"
                        />
                    </button>
                </div>
            </div>

            <!-- 2FA Code (if enabled) -->
            <template v-if="props.autenticatorInfo.is_enable">
                <div class="space-y-2">
                    <label for="code" class="block text-sm font-medium text-gray-300">2FA Code</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <ShieldCheck class="w-5 h-5 text-gray-400" />
                        </div>
                        <input
                            id="code"
                            v-model="form.code"
                            type="text"
                            placeholder="Enter your 2FA code"
                            class="w-full pl-10 pr-4 py-3 bg-dark-400/50 border border-gray-800/50 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300"
                        />
                    </div>
                </div>
            </template>

            <!-- Submit Button -->
            <button
                type="submit"
                class="group relative w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg transition-all duration-300 hover:from-blue-600 hover:to-purple-600"
            >
                <!-- Shine Effect -->
                <div class="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine"></div>

                <Save class="w-5 h-5" />
                <span>Update Password</span>
            </button>
        </form>
    </div>
</template>

<script setup>
import { useForm } from "@inertiajs/vue3";
import { ref, onMounted } from "vue";
import {
    Lock, Key, KeyRound, Shield,
    ShieldCheck, CheckCircle, Eye,
    EyeOff, Save
} from 'lucide-vue-next';

const emit = defineEmits(["isLoading"]);

const form = useForm({
    password: "",
    password_confirmation: "",
    code: "",
});

const props = defineProps({
    userInfo: {
        type: Object,
        default: {},
    },
    autenticatorInfo: {
        type: Object,
        default: () => ({}),
    },
});

const showPassword = ref(false);
const showConfirmPassword = ref(false);

let userInformation = $ref([]);

onMounted(() => {
    userInformation = props.userInfo;
});

const submitForm = () => {
    emit("isLoading", true);
    form.patch(route("user.update-password", userInformation.id), {
        preserveState: true,
        onSuccess: () => {
            emit("isLoading", false);
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
