<template>
    <layout title="Frontend Reset">
        <hr class="theme-divider" />
        <section class="fancy-background03">
            <div class="grid max-w-screen-xl px-4 py-8 mx-auto">
                <!-- <div class="mr-auto place-self-center lg:col-span-7">
                    <h1 class="text-color-h1 text-6xl lg:text-8xl mb-4">
                        Check Out this amazing courses
                    </h1>
                    <p class="max-w-2xl mb-6 font-bold lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 mt-10">
                        From checkout to global sales tax compliance, companies
                        around the world use Flowbite to simplify their payment
                        stack.
                    </p>
                </div>
                <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup">
                </div> -->
                <form class="mt-2" @submit.prevent="submitForm">
                    <div class="px-5 py-7">
                        <input-field
                            id="email"
                            v-model="form.email"
                            label="Email"
                            type="email"
                            name="email"
                            placeholder="Type your email"
                            messageClass="text-red-500 text-xl bg-primary mt-1 rounded-lg p-2 opacity-90"
                            labelClass="text-3xl font-bold text-left"
                            inputClass="w-full p-5 text-2xl input input-primary input-bordered"
                        />
                        <input-password
                            id="password"
                            v-model="form.password"
                            label="Password"
                            name="password"
                            placeholder="Type your password"
                            labelClass="text-3xl font-bold text-left"
                            messageClass="text-red-500 text-xl bg-primary mt-1 rounded-lg p-2 opacity-90"
                            inputClass="w-full p-5 text-2xl input input-primary input-bordered"
                            showPasswordClass="absolute top-0 right-0 rounded-l-none btn btn-secondary"
                        />

                        <div class="form-control pt-10">
                            <submit name="reset" @click="submitForm" />
                        </div>
                    </div>
                </form>
            </div>
        </section>
    </layout>
</template>

<script setup lang="ts" >
import { useForm } from "@inertiajs/vue3";
import Layout from "@frontend_layout/App.vue";

// Import the from components
import {
    InputField,
    InputPassword,
    Submit
} from "@mariojgt/masterui/packages/index";

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

const form = useForm({
    email: props.email,
    token: props.token,
    password: "",
});

const submitForm = () => {
    form.post(route("password.change.user"), {
        preserveState: true,
        onSuccess: () => {
            // emit("isLoading", false);
            // emit("closeModal");
        },
        onError: () => {
            // emit("isLoading", false);
        },
    });
};
</script>
