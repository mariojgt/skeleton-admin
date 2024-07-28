<template>
    <div class="px-5 py-7 bg-dark-200 rounded-lg shadow-2xl">
        <form @submit.prevent="submitForm">
            <input-password
                v-model="form.password"
                label="Password"
                name="password"
                id="password"
                placeholder="Type your password"
                messageClass="text-white text-xl bg-error mt-1 rounded-lg p-2 opacity-90"
                inputClass="w-full p-5 text-2xl input input-primary input-bordered"
                showPasswordClass="absolute top-0 right-0 rounded-l-none btn btn-secondary"
                labelClass="text-3xl font-bold text-left"
            />

            <input-password
                v-model="form.password_confirmation"
                label="Password Confirm"
                name="password_confirmation"
                id="password_confirmation"
                placeholder="Type your Password Confirmation"
                messageClass="text-white text-xl bg-error mt-1 rounded-lg p-2 opacity-90"
                inputClass="w-full p-5 text-2xl input input-primary input-bordered"
                showPasswordClass="absolute top-0 right-0 rounded-l-none btn btn-secondary"
                labelClass="text-3xl font-bold text-left"
            />
            <input-field
                v-if="props.autenticatorInfo.is_enable"
                v-model="form.code"
                label="Two Factor Autenticator Code"
                type="text"
                placeholder="type your code"
            />

            <submit class="btn btn-secondary" name="Update" @click="submitForm" />
        </form>
    </div>
</template>

<script setup>
import { useForm } from "@inertiajs/vue3";
import { onMounted } from "vue";

// Import the from components
import {
    InputField,
    InputPassword,
    Submit,
} from "@mariojgt/masterui/packages/index";

const emit = defineEmits(["isLoading"]);

const form = useForm({
    password: "",
    password_confirmation: "",
    code: "",
});

// Page props
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

let userInformation = $ref([]);
onMounted(() => {
    userInformation = props.userInfo;
});

// SubmitTheForm
const submitForm = () => {
    console.log("submitForm");
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
