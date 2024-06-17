<template>
    <layout title="Frontend Login">
        <template #form>
            <div>
                <form @submit.prevent="submitForm">
                    <div class="px-5 py-7">
                        <input-field
                            id="email"
                            v-model="email"
                            label="Email"
                            type="email"
                            name="email"
                            placeholder="type your email"
                        />
                        <input-password
                            id="password"
                            v-model="password"
                            label="Password"
                            name="password"
                            placeholder="type your password"
                        />

                        <div class="form-control pt-10">
                            <submit @click="submitForm" />
                        </div>
                    </div>
                </form>
                <!-- <Link href="/about-us">Go to about us</Link> -->
            </div>
        </template>

        <template #links>
            <link-button name="Register" link="register" />
            <link-button name="Forgot password" link="forgot-password" />
        </template>
    </layout>
</template>

<script setup lang="ts">
import { router } from "@inertiajs/vue3";
import Layout from "../../../Layout/Login.vue";

// Import the from components
import {
    InputField,
    InputPassword,
    Submit,
    LinkButton,
} from "@mariojgt/masterui/packages/index";

let email = $ref("") as string;
let password = $ref("") as string;

defineProps({
    title: {
        type: String,
        default: "mariojgt is heredude",
    },
});

const submitForm = () => {
    const form = {
        email: email,
        password: password,
    };
    router.post(route("login.user"), form);
};
</script>
