<template>
    <layout title="Frontend Reset">
        <template v-slot:form>
            <div>
                <form @submit.prevent="submitForm">
                    <div class="px-5 py-7">
                        <input-field v-model="email" label="Email" type="email" name="email" id="email"
                            placeholder="type your email" />

                        <input-password v-model="password" label="Password" name="password" id="password"
                            placeholder="type your password" />
                        <input-password v-model="password_confirmation" label="Password Confirm"
                            name="password_confirmation" id="password_confirmation"
                            placeholder="type your Password Confirmation" />

                        <div class="form-control pt-10">
                            <submit name="reset" @click="submitForm" />
                        </div>
                    </div>
                </form>
                <!-- <Link href="/about-us">Go to about us</Link> -->
            </div>
        </template>

        <template v-slot:links>
            <link-button name="Register" link="register" />
            <link-button name="Forgot password" link="forgot-password" />
        </template>
    </layout>
</template>

<script setup>
import { router } from "@inertiajs/vue3";
import { onMounted } from "vue";
import { Link } from "@inertiajs/vue3";
import Layout from "../../../Layout/Login.vue";

// Import the from components
import {
    InputField,
    Submit,
    InputPassword,
    LinkButton
} from "@mariojgt/masterui/packages/index";

let email = $ref("");
let password = $ref("");
let password_confirmation = $ref("");

const props = defineProps({
    token: {
        type: String,
        default: "",
    },
    email: {
        type: String,
        default: "",
    },
});

onMounted(() => {
    email = props.email;
});

const submitForm = () => {
    const form = {
        email: email,
        password: password,
        password_confirmation: password_confirmation,
        token: props.token,
    };
    router.post(route("password.change.user"), form);
};
</script>
