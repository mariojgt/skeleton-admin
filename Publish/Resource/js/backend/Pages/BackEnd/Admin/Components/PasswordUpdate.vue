<template>
    <div>
        <div class="px-5 py-7">
            <form @submit.prevent="submitForm">
                <input-password v-model="password" label="Password" name="password" id="password"
                    placeholder="type your password" />

                <input-password v-model="password_confirmation" label="Password Confirm" name="password_confirmation"
                    id="password_confirmation" placeholder="type your Password Confirmation" />
                <input-field v-if="props.autenticatorInfo.is_enable" v-model="code" label="Two Factor Autenticator Code"
                    type="text" placeholder="type your code" />

                <div class="form-control pt-10">
                    <submit name="update" @click="submitForm" />
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { Inertia } from "@inertiajs/inertia";
import { onMounted } from "vue";
// Import the from components
import InputField from "@mariojgt/masterui/packages/Input/index";
import InputPassword from "@mariojgt/masterui/packages/Password/index";
import Submit from "@mariojgt/masterui/packages/Submit/index";
import LinkButton from "@mariojgt/masterui/packages/Link/index";

// FIelds Values
let password = $ref("");
let password_confirmation = $ref("");
let code = $ref("");

// Page props
const props = defineProps({
    adminInfo: {
        type: Object,
        default: {},
    },
    autenticatorInfo: {
        type: Object,
        default: () => ({}),
    },
});

let adminInformation = $ref([]);
onMounted(() => {
    adminInformation = props.adminInfo;
});

// SubmitTheForm
const submitForm = () => {
    const form = {
        password: password,
        password_confirmation: password_confirmation,
        code: code,
    };
    Inertia.patch(route("admin.update-password", adminInformation.id), form);
};
</script>
