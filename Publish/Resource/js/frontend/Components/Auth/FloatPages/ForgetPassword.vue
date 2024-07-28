<template>
    <reusable-modal
        :show="isOpen"
        @close="close"
        :isLarge="true"
        :showFooter="false"
        modalClass="bg-primary"
    >
        <template #title>
            <header class="text-center md:px-12 text-neutral">
                <h2 class="text-4xl font-semibold">Forgot Your Password?</h2>
            </header>
        </template>
        <template #body>
            <form @submit.prevent="submitForm" class="rounded-lg">
                <div class="px-5 py-7">

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

                    <div class="form-control pt-10">
                        <button
                            type="submit"
                            class="btn btn-secondary w-full rounded-lg text-xl font-bold"
                        >
                            Reset
                        </button>
                    </div>
                </div>
            </form>
        </template>
    </reusable-modal>
</template>

<script setup lang="ts">
import { useForm } from "@inertiajs/vue3";

const messageClass = "text-white text-xl bg-error mt-1 rounded-lg p-2 opacity-90";
const labelClass = "text-3xl font-bold text-left";
const inputClass = "w-full p-5 text-2xl input input-primary input-bordered";
// Import the from components
import {
    InputField,
    ReusableModal,
} from "@mariojgt/masterui/packages/index";

const emit = defineEmits(["closeModal"]);

const close = () => {
    emit("closeModal", "isLoading");
};

const form = useForm({
    email: ""
});

defineProps({
    isOpen: {
        type: Boolean,
        default: false,
    },
});

const submitForm = () => {
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
