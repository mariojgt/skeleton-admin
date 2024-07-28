<template>
    <layout title="Frontend Reset Password">
        <template v-slot:form>
            <div>
                <form @submit.prevent="submitForm">
                    <div class="px-5 py-7">
                        <input-field v-model="email" label="Email" type="email" name="email" id="email"
                            placeholder="type your email" />

                        <div class="form-control pt-10">
                            <submit @click="submitForm" />
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

<script setup lang="ts" >
import { router } from "@inertiajs/vue3";
import Layout from "@frontend_layout/App.vue";

// Import the from components
// Import the from components
import {
    InputField,
    Submit,
    LinkButton,
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
    router.post(route("password-reset.user"), form);
};
</script>
