<template>
    <layout title="Backend Register">
        <template v-slot:form>
            <form @submit.prevent="submitForm">
                <div class="flex justify-between gap-4">
                    <input-field v-model="first_name" label="First Name" type="text" name="name" id="name"
                        placeholder="Type your name"  class="w-full" />
                    <input-field v-model="last_name" label="Last Name" type="text" name="name" id="name"
                        placeholder="Type your name" class="w-full" />
                </div>
                <input-field v-model="email" label="Email" type="email" name="email" id="email"
                    placeholder="Type your email" />

                <input-password v-model="password" label="Password" name="password" id="password"
                    placeholder="Type your password" />

                <input-password v-model="password_confirmation" label="Password Confirm" name="password_confirmation"
                    id="password_confirmation" placeholder="Type your Password Confirmation" />

                <div class="form-control pt-10">
                    <submit @click="submitForm" name="Register" class="btn btn-secondary" />
                </div>
            </form>
        </template>
        <template v-slot:links>
            <Link class="btn btn-primary" href="/admin/login">
                <span class="inline-block ml-1">Login</span>
            </Link>
        </template>
    </layout>
</template>

<script setup>
import { router } from "@inertiajs/vue3";
import { Link } from "@inertiajs/vue3";
import Layout from "@backend_layout/Login.vue";

// Import the from components
import {
    InputField,
    InputPassword,
    Submit
} from "@mariojgt/masterui/packages/index";

let first_name = $ref("");
let last_name = $ref("");
let email = $ref("");
let password = $ref("");
let password_confirmation = $ref("");

const props = defineProps({
    title: {
        type: String,
        default: "page Title",
    },
});

// Send the form
const submitForm = () => {
    const form = {
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password,
        password_confirmation: password_confirmation,
    };
    router.post(route("skeleton.register.user"), form);
};
</script>
