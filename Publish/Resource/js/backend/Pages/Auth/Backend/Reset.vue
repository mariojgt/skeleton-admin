<template>
    <layout title="Backend Reset Password">
        <template v-slot:form>
            <form @submit.prevent="submitForm">
                <div class="w-full">
                    <input-field v-model="email" label="Email" type="email" name="email" id="email"
                        placeholder="Type your email" />

                    <div class="form-control pt-10">
                        <submit @click="submitForm" name="Request Password" class="btn btn-secondary" />
                    </div>
                </div>
            </form>
        </template>

        <template v-slot:links>
            <link-button name="Register" :link="registerLink" />
            <link-button name="Login" :link="loginLink" />
        </template>
    </layout>
</template>

<script setup>
import { router } from "@inertiajs/vue3";
import { onMounted } from "vue";
import { Link } from "@inertiajs/vue3";
import Layout from "@backend_layout/Login.vue";

// Page links
const registerLink = route("skeleton.register");
const loginLink = route("skeleton.login");

// Import the from components
import {
    InputField,
    InputPassword,
    Submit,
    LinkButton,
} from "@mariojgt/masterui/packages/index";

let email = $ref("");
let password = $ref("");

const props = defineProps({
    title: {
        type: String,
        default: "mariojgt is heredude",
    },
});

const submitForm = () => {
    const form = {
        email: email,
    };
    router.post(route("skeleton.password-reset"), form);
};
</script>
