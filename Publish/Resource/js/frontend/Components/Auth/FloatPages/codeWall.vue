<template>
    <reusable-modal
        :show="isOpen"
        @close="close"
        :isLarge="true"
        :showFooter="false"
        modalClass="bg-primary"
        :showModalBox="false"
    >
        <template #title>
            <header class="text-center md:px-12 text-neutral">
                <h2 class="text-4xl font-semibold">Please enter the Authentication Code</h2>
            </header>
        </template>
        <template #body>
            <form v-if="!recoveryMode" @submit.prevent="submitForm" class="rounded-lg">
                <div class="px-5 py-7">
                    <input-field
                        v-model="form.code"
                        label="Code"
                        name="code"
                        id="code"
                        placeholder="Code"
                        :messageClass="messageClass"
                        :labelClass="labelClass"
                        :inputClass="inputClass"
                    />

                    <div class="form-control pt-10 gap-2">
                        <button
                            type="submit"
                            class="btn btn-secondary w-full rounded-lg text-xl font-bold"
                        >
                            Authenticate
                        </button>
                    </div>
                </div>
            </form>
            <form v-if="recoveryMode" @submit.prevent="submitFormRecovery" class="rounded-lg">
                <div class="px-5 py-7">
                    <input-field
                        v-model="form.code"
                        label="Recovered Code"
                        name="code"
                        id="code"
                        placeholder="Code"
                        :messageClass="messageClass"
                        :labelClass="labelClass"
                        :inputClass="inputClass"
                    />

                    <div class="form-control pt-10 gap-2">
                        <button
                            type="submit"
                            class="btn btn-secondary w-full rounded-lg text-xl font-bold"
                        >
                            Recover
                        </button>
                    </div>
                </div>
            </form>
            <button
                v-if="!recoveryMode"
                @click="enableRecoveryMode(true)"
                class="btn btn-accent w-full rounded-lg text-xl font-bold"
            >
                Forgot Code
            </button>
            <button
                v-if="recoveryMode"
                @click="enableRecoveryMode(false)"
                class="btn btn-accent w-full rounded-lg text-xl font-bold">
                Back
            </button>
        </template>
    </reusable-modal>
</template>

<script setup lang="ts">
import { useForm } from "@inertiajs/vue3";
import { useRecaptcha } from '../../../Composable/useRecaptcha';
const { getToken, isLoading, error } = useRecaptcha();

const messageClass = "text-white text-xl bg-error mt-1 rounded-lg p-2 opacity-90";
const labelClass = "text-3xl font-bold text-left";
const inputClass = "w-full p-5 text-2xl input input-primary input-bordered";
// Import the from components
import {
    InputField,
    ReusableModal,
} from "@mariojgt/masterui/packages/index";

defineProps({
    isOpen: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits(["closeModal"]);

const close = () => {
    emit("closeModal", "isLoading");
};

const form = useForm({
    code: "",
    recaptcha_token: "",
});

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
