<template>
    <reusable-modal
        :show="isOpen"
        @close="close"
        :isLarge="false"
        :showFooter="false"
        modalClass="fancy-background03"
    >
        <template #title>
            <header class="text-center md:px-12 text-neutral">
                <h2 class="text-4xl font-semibold">Log In</h2>
            </header>
        </template>
        <template #body>
            <form @submit.prevent="submitForm" class="rounded-lg">
                <div class="px-5 py-7">
                    <input-field
                        id="email"
                        v-model="form.email"
                        label="Email"
                        type="email"
                        name="email"
                        placeholder="Type your email"
                        messageClass="text-red-500 text-xl bg-primary mt-1 rounded-lg p-2 opacity-90"
                        labelClass="text-3xl font-bold text-left"
                        inputClass="w-full p-5 text-2xl input input-primary input-bordered"
                    />
                    <input-password
                        id="password"
                        v-model="form.password"
                        label="Password"
                        name="password"
                        placeholder="Type your password"
                        messageClass="text-red-500 text-xl bg-primary mt-1 rounded-lg p-2 opacity-90"
                        inputClass="w-full p-5 text-2xl input input-primary input-bordered"
                        showPasswordClass="absolute top-0 right-0 rounded-l-none btn btn-secondary"
                    />

                    <div class="form-control pt-10">
                        <button
                            type="submit"
                            class="btn btn-secondary w-full rounded-lg text-xl font-bold"
                        >
                            Login
                        </button>
                        <div class="mt-4 flex flex-1 justify-between">
                            <a
                                class="text-blue-100 font-bold text-xl hover:link"
                                href="#"
                                @click="forgotPassword"
                                >Forgot password!</a
                            >
                            <a
                                class="text-blue-100 font-bold text-xl hover:link"
                                href="#"
                                @click="register"
                                >Sign up!</a
                            >
                        </div>
                    </div>
                </div>
            </form>
        </template>
    </reusable-modal>
</template>

<script setup lang="ts">
import { useForm } from "@inertiajs/vue3";

// Import the from components
import {
    InputField,
    InputPassword,
    ReusableModal
} from "@mariojgt/masterui/packages/index";

const emit = defineEmits(["closeModal", "register", "forgotPassword", "isLoading"]);

const close = () => {
    emit("closeModal");
};

const register = () => {
    emit("register");
};

const forgotPassword = () => {
    emit("forgotPassword");
};

const form = useForm({
    email: "",
    password: "",
});

defineProps({
    isOpen: {
        type: Boolean,
        default: false,
    },
});

const submitForm = async () => {
    emit("isLoading", true);
    form.post(route("login.user"), {
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
