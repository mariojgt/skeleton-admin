<template>
    <div>
        <div class="px-5 py-7">
            <input-password
                v-model="password"
                label="Password"
                name="password"
                id="password"
                placeholder="type your password"
            />

            <input-password
                v-model="password_confirmation"
                label="Password Confirm"
                name="password_confirmation"
                id="password_confirmation"
                placeholder="type your Password Confirmation"
            />
            <input-field
                v-if="props.autenticatorInfo.is_enable"
                v-model="code"
                label="Two Factor Autenticator Code"
                type="text"
                placeholder="type your code"
            />

            <submit name="update" @click="submitForm" />
        </div>
    </div>
</template>

<script setup>
import { Inertia } from "@inertiajs/inertia";
import { onMounted } from "vue";
// Import the from components
import InputPassword from "../../../Components/Form/Password";
import InputField from "../../../Components/Form/Input";
import Submit from "../../../Components/Form/Submit";

// FIelds Values
let password              = $ref("");
let password_confirmation = $ref("");
let code                  = $ref("");

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
        password             : password,
        password_confirmation: password_confirmation,
        code                 : code,
    };
    Inertia.patch(route("admin.update-password", adminInformation.id), form);
};
</script>
