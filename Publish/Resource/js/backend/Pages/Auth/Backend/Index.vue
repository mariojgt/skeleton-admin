<template>
    <layout title="Backend Login">
        <template v-slot:form>
            <form @submit.prevent="submitForm">
                <div class="w-full">
                    <input-field v-model="email" label="Email" type="email" name="email" id="email"
                        placeholder="Type your email" />

                    <submit @click="submitForm" class="btn btn-primary btn-wide" />
                </div>
                <!-- <Link href="/about-us">Go to about us</Link> -->
            </form>
        </template>
        <template v-slot:links>
            <Link class="btn btn-primary" href="/admin/register">
                <span class="inline-block ml-1">Register</span>
            </Link>
            <Link class="btn btn-primary" href="/admin/forgot-password">
                <span class="inline-block ml-1">Forgot password</span>
            </Link>
        </template>
    </layout>
</template>

<script setup>
import { Link, router } from "@inertiajs/vue3";
import Layout from "@backend_layout/Login.vue";

// Import the from components
import {
    InputField,
    InputPassword,
    Submit
} from "@mariojgt/masterui/packages/index";

let email = $ref("");

const props = defineProps({
    title: {
        type: String,
        default: "mariojgt is heredude",
    },
});

const submitForm = () => {
    const form = {
        email: email
    };
    router.post(route('skeleton.login.magic'), form);
};
</script>
