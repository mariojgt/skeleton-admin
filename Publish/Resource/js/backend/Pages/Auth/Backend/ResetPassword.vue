<template>
    <layout title="Backend Reset">
        <template v-slot:form>
            <div>
                <form @submit.prevent="submitForm">
                    <div class="px-5 py-7">
                        <input-field v-model="email" label="Email" type="email" name="email" id="email"
                            placeholder="Type your email" />

                        <input-password v-model="password" label="Password" name="password" id="password"
                            placeholder="Type your password" />

                        <input-password v-model="password_confirmation" label="Password Confirm"
                            name="password_confirmation" id="password_confirmation"
                            placeholder="Type your Password Confirmation" />

                        <div class="form-control pt-10">
                            <submit @click="submitForm" name="Reset" class="btn btn-secondary" />
                        </div>
                    </div>
                </form>
                <!-- <Link href="/about-us">Go to about us</Link> -->
            </div>
        </template>

        <template v-slot:links>
            <link-button name="Register" :link="registerLink" />
            <link-button name="Forgot password" :link="forgotPasswordLink" />
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
const forgotPasswordLink = route("skeleton.forgot-password");

// Import the from components
import {
    InputField,
    InputPassword,
    Submit,
    LinkButton,
} from "@mariojgt/masterui/packages/index";

let email = $ref("");
let password = $ref("");
let password_confirmation = $ref("");

const props = defineProps({
    token: {
        type: String,
        default: "",
    },
});

console.log(props);

const submitForm = () => {
    const form = {
        email: email,
        password: password,
        password_confirmation: password_confirmation,
        token: props.token,
    };
    router.post(route("skeleton.password.change"), form);
};
</script>
