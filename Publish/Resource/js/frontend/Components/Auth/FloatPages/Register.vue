<template>
    <reusable-modal
        :show="isOpen"
        @close="close"
        :isLarge="true"
        :showFooter="false"
        modalClass="fancy-background03"
    >
        <template #title>
            <header class="text-center md:px-12 text-neutral">
                <h2 class="text-4xl font-semibold">Sign Up!</h2>
            </header>
        </template>
        <template #body>
            <form @submit.prevent="submitForm" class="rounded-lg">
                <div class="px-5 py-7">

                    <input-field
                        v-model="form.first_name"
                        label="First Name"
                        type="text"
                        name="first_name"
                        id="first_name"
                        placeholder="First Name"
                        :messageClass="messageClass"
                        :labelClass="labelClass"
                        :inputClass="inputClass"
                    />

                    <input-field
                        v-model="form.last_name"
                        label="Last Name"
                        type="text"
                        name="last_name"
                        id="last_name"
                        placeholder="Last Name"
                        :messageClass="messageClass"
                        :labelClass="labelClass"
                        :inputClass="inputClass"
                    />

                    <input-field
                        v-model="form.email"
                        label="Email"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        :messageClass="messageClass"
                        :labelClass="labelClass"
                        :inputClass="inputClass"
                    />

                    <input-password
                        v-model="form.password"
                        label="Password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        :messageClass="messageClass"
                        :labelClass="labelClass"
                        :inputClass="inputClass"
                        :showPasswordClass="showPasswordClass"
                    />
                    <div class="form-control pt-10">
                        <button
                            type="submit"
                            class="btn btn-secondary w-full rounded-lg text-xl font-bold"
                        >
                            Register
                        </button>
                        <div class="mt-4 flex flex-1 justify-center">
                            <a
                                class="text-blue-100 font-bold text-xl hover:link"
                                href="#"
                                @click="alreadyHaveAccount"
                                > Already Have an Account?</a
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

const messageClass =
    "text-red-500 text-xl bg-primary mt-1 rounded-lg p-2 opacity-90";
const labelClass = "text-3xl font-bold text-left";
const inputClass = "w-full p-5 text-2xl input input-primary input-bordered";
const showPasswordClass =
    "absolute top-0 right-0 rounded-l-none btn btn-secondary";
// Import the from components
import {
    InputField,
    InputPassword,
    ReusableModal,
} from "@mariojgt/masterui/packages/index";

const emit = defineEmits(["closeModal", "alreadyHaveAccount", "isLoading"]);

const close = () => {
    emit("closeModal");
};

const alreadyHaveAccount = () => {
    emit("alreadyHaveAccount");
};

const form = useForm({
    first_name: "",
    last_name: "",
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
    form.post(route("register.user"), {
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
