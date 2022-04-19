<template>
    <Layout title="Register">
        <template v-slot:form>
            <div>
                <div class="px-5 py-7">
                    <input-field
                        v-model="fist_name"
                        label="First Name"
                        type="text"
                        name="name"
                        id="name"
                        placeholder="type your name"
                    />

                    <input-field
                        v-model="last_name"
                        label="Last Name"
                        type="text"
                        name="name"
                        id="name"
                        placeholder="type your name"
                    />

                    <input-field
                        v-model="email"
                        label="Email"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="type your email"
                    />

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

                    <submit @click="submitForm" name="Register" />
                </div>
                <!-- <Link href="/about-us">Go to about us</Link> -->
            </div>
        </template>

        <template v-slot:links>
            <LinkButton name="Login" :link="loginLink" />
        </template>
    </Layout>
</template>

<script setup>
import { Inertia } from "@inertiajs/inertia";
import { onMounted } from "vue";
import { Link } from "@inertiajs/inertia-vue3";
import Layout from "../../../Layout/Login";

// Page links
const loginLink       = route('skeleton.login');

// Import the from components
import InputField from "@mariojgt/masterui/packages/Input/index";
import InputPassword from "@mariojgt/masterui/packages/Password/index";
import Submit from "@mariojgt/masterui/packages/Submit/index";
import LinkButton from "@mariojgt/masterui/packages/Link/index";

let fist_name             = $ref("");
let last_name             = $ref("");
let email                 = $ref("");
let password              = $ref("");
let password_confirmation = $ref("");

const props = defineProps({
    title: {
        type: String,
        default: "mariojgt is heredude",
    },
});

// Send the form
const submitForm = () => {
    const form = {
        fist_name: fist_name,
        last_name: last_name,
        email: email,
        password: password,
        password_confirmation: password_confirmation,
    };
    Inertia.post(route('skeleton.register.user'), form);
};
</script>
