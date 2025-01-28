<template>
    <layout title="Backend Reset Password">
        <template v-slot:form>
            <form @submit.prevent="submitForm">
                <div class="w-full">
                    <input-field v-model="email" label="Email" type="email" name="email" id="email"
                        placeholder="Type your email" />

                    <div class="form-control pt-10">
                        <submit @click="submitForm" name="Request Password" class="btn btn-primary btn-wide" />
                    </div>
                </div>
            </form>
        </template>

        <template v-slot:links>
            <Link class="btn btn-primary" href="/admin/register">
                <span class="inline-block ml-1">Register</span>
            </Link>
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
        email: email,
    };
    router.post(route("skeleton.password-reset"), form);
};
</script>
