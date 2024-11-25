<template>
    <reusable-modal
        :show="isOpen"
        @close="close"
        :showFooter="false"
        modalClass="bg-dark-100 border border-dark-300 border-animated-blue w-full max-w-7xl"
        :showModalBox="false"
    >
        <template #title>
            <header class="text-center md:px-12 text-neutral">
                <h2 class="text-4xl md:text-6xl font-semibold mb-5">
                    Upgrade to a Subscription?
                </h2>
                <small class="text-lg">
                    It takes less than a minute, and just might be the best
                    decision you'll make all day. But you can always do this
                    later, if you prefer.
                </small>
            </header>
        </template>

        <template #body>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                <template
                    v-for="(item, index) in usePage().props
                        .subscriptionsProducts.data"
                    :key="index"
                >
                    <singleCard :plan="item" @selectPlan="submitForm" :is-popular="index === 1" />
                </template>
            </div>
        </template>
    </reusable-modal>
</template>

<script setup lang="ts">
import { useForm, usePage, router } from "@inertiajs/vue3";

const messageClass =
    "text-white text-xl bg-error mt-1 rounded-lg p-2 opacity-90";
const labelClass = "text-3xl font-bold text-left";
const inputClass = "w-full p-5 text-2xl input input-primary input-bordered";
// Import the from components
import { InputField, ReusableModal } from "@mariojgt/masterui/packages/index";
import singleCard from "./subscribeCard.vue";
import { api } from "../../../Boot/axios.js";

defineProps({
    isOpen: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits(["closeModal"]);

const close = () => {
    emit("closeModal", "isLoading");
};

const form = useForm({
    code: "",
});

const submitForm = (plan) => {
    // emit("isLoading", true);
    api.post(route("stripe.subscribe"), {
        plan_id: plan.id,
    })
    .then(function (response) {
        window.location.href = response.data.session;
    })
    .catch(function (error) {
        // emit("isLoading", true);
    });
};

let recoveryMode = $ref(false);

const enableRecoveryMode = (enable: boolean = false) => {
    recoveryMode = enable;
};
</script>
