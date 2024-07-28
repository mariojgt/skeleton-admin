<template>
    <div class="px-5 py-7 bg-dark-200 rounded-lg shadow-2xl">
        <div class="grid">
            <div class="avatar justify-center">
                <div class="mb-8 rounded-full w-24 h-24">
                    <img :src="userInformation.avatar" />
                </div>
            </div>
        </div>
        <form @submit.prevent="submitForm">
            <input-field
                v-model="userInformation.first_name"
                label="First Name"
                type="text"
                placeholder="type your first name"
                messageClass="text-white text-xl bg-error mt-1 rounded-lg p-2 opacity-90"
                inputClass="w-full p-5 text-2xl input input-primary input-bordered"
                labelClass="text-3xl font-bold text-left"
            />
            <input-field
                v-model="userInformation.last_name"
                label="Last Name"
                type="text"
                placeholder="type your last name"
                messageClass="text-white text-xl bg-error mt-1 rounded-lg p-2 opacity-90"
                inputClass="w-full p-5 text-2xl input input-primary input-bordered"
                labelClass="text-3xl font-bold text-left"
            />
            <input-field
                v-model="userInformation.email"
                label="Email"
                type="email"
                placeholder="type your email"
                messageClass="text-white text-xl bg-error mt-1 rounded-lg p-2 opacity-90"
                inputClass="w-full p-5 text-2xl input input-primary input-bordered"
                labelClass="text-3xl font-bold text-left"
            />

            <submit class="btn btn-secondary" name="Update" @click="submitForm" />
        </form>
    </div>
</template>

<script setup>
import { useForm } from "@inertiajs/vue3";
import { onMounted } from "vue";

// Import the from components
import { InputField, Submit } from "@mariojgt/masterui/packages/index";

// FIelds Values
const emit = defineEmits(["isLoading"]);

// Page props
const props = defineProps({
    userInfo: {
        type: Object,
        default: {},
    },
});

let userInformation = $ref([]);
onMounted(() => {
    userInformation = props.userInfo;
});

const form = useForm({
    first_name: userInformation.first_name,
    last_name: userInformation.last_name,
    email: userInformation.email,
});

// SubmitTheForm
const submitForm = () => {
    emit("isLoading", true);
    form.first_name = userInformation.first_name;
    form.last_name = userInformation.last_name;
    form.email = userInformation.email;

    form.patch(route("user.update", userInformation.id), {
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
