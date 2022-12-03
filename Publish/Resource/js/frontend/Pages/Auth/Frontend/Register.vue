<template>
    <layout title="Frontend Register">
        <template v-slot:form>
            <div>
                <form @submit.prevent="submitForm">
                    <div class="px-5 py-7">
                        <input-field v-model="first_name" label="First Name" type="text" name="first_name"
                            id="first_name" placeholder="type your First Name" />

                        <input-field v-model="last_name" label="Last Name" type="text" name="last_name" id="last_name"
                            placeholder="type your Last Name" />

                        <input-field v-model="email" label="Email" type="email" name="email" id="email"
                            placeholder="type your email" />

                        <input-password v-model="password" label="Password" name="password" id="password"
                            placeholder="type your password" />

                        <input-password v-model="password_confirmation" label="Password Confirm"
                            name="password_confirmation" id="password_confirmation"
                            placeholder="type your Password Confirmation" />

                        <div class="form-control pt-10">
                            <submit name="Register" @click="submitForm" />
                        </div>
                    </div>
                </form>
                <!-- <Link href="/about-us">Go to about us</Link> -->
            </div>
        </template>

        <template v-slot:links>
            <link-button name="Login" link="login" />
            <link-button name="Forgot password" link="forgot-password" />
        </template>
    </layout>
</template>

<script setup>
import { Inertia } from "@inertiajs/inertia";
import { onMounted } from "vue";
import { Link } from "@inertiajs/inertia-vue3";
import Layout from "../../../Layout/Login.vue";

// Import the from components
import {
    InputField,
    InputPassword,
    Submit,
    LinkButton,
} from "@mariojgt/masterui/packages/index";

let first_name = $ref("");
let last_name = $ref("");
let email = $ref("");
let password = $ref("");
let password_confirmation = $ref("");

const props = defineProps({
    title: {
        type: String,
        default: "mariojgt is heredude",
    },
});

const submitForm = () => {
    const form = {
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password,
        password_confirmation: password_confirmation,
    };
    Inertia.post(route("register.user"), form);
};
</script>
