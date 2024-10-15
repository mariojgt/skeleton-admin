<template>
    <div class="max-w-7xl mx-auto p-6">
        <!-- Header -->
        <div class="flex justify-between items-center py-4">
            <h1 class="text-2xl md:text-3xl font-bold text-white">
                Subscription Management
            </h1>
        </div>

        <!-- Subscription Details -->
        <div class="bg-dark-200 shadow rounded-lg p-6 mb-6">
            <h2 class="text-xl md:text-2xl font-bold mb-4">
                Current Subscription
            </h2>
            <div
                class="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 space-y-4 md:space-y-0"
            >
                <div v-if="usePage().props.authUserInfo?.data?.subscription?.plan" >
                    <p class="text-lg md:text-xl font-semibold">{{ usePage().props.authUserInfo.data.subscription.plan.name }}</p>
                    <p class="text-base md:text-lg">
                        Renews on:
                        <span class="text-accent">{{ usePage().props.authUserInfo?.data.subscription.renovation_at }}</span>
                    </p>
                </div>
                <div class="flex gap-2">
                    <!-- Uncomment if needed -->
                    <!-- <button class="btn btn-primary">
                                                Upgrade Plan
                                            </button> -->
                    <button class="btn btn-error text-white">
                        Cancel Subscription
                    </button>
                </div>
            </div>
            <hr class="my-4" />
            <div
                class="flex flex-col md:flex-row items-start md:items-center justify-between text-base md:text-lg space-y-4 md:space-y-0"
            >
                <p>
                    Next billing amount:
                    <span class="font-bold">${{ usePage().props.authUserInfo?.data.subscription.plan.price }}</span>
                </p>
                <button class="btn btn-primary">Manage Payment Method</button>
            </div>
        </div>

        <!-- Subscription History -->
        <div class="bg-dark-200 shadow rounded-lg p-6">
            <h2 class="text-xl md:text-2xl font-bold mb-4">
                Subscription History
            </h2>
            <div class="overflow-x-auto">
                <table class="table-auto min-w-full bg-dark-300">
                    <thead>
                        <tr class="text-left bg-dark-400">
                            <th class="py-2 px-4">Date</th>
                            <th class="py-2 px-4">Plan</th>
                            <th class="py-2 px-4">Amount</th>
                            <th class="py-2 px-4">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="py-2 px-4">Aug 20, 2024</td>
                            <td class="py-2 px-4">Pro Plan</td>
                            <td class="py-2 px-4">$29.99</td>
                            <td class="py-2 px-4">
                                <div class="badge badge-success">Paid</div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useForm, usePage } from "@inertiajs/vue3";
import { onMounted } from "vue";

// Import the from components
import {
    InputField,
    InputPassword,
    Submit,
} from "@mariojgt/masterui/packages/index";

const emit = defineEmits(["isLoading"]);

const form = useForm({
    password: "",
    password_confirmation: "",
    code: "",
});

// Page props
const props = defineProps({
    userInfo: {
        type: Object,
        default: {},
    },
    autenticatorInfo: {
        type: Object,
        default: () => ({}),
    },
});

let userInformation = $ref([]);
onMounted(() => {
    userInformation = props.userInfo;
});

// SubmitTheForm
const submitForm = () => {
    console.log("submitForm");
    emit("isLoading", true);

    form.patch(route("user.update-password", userInformation.id), {
        preserveState: true,
        onSuccess: () => {
            emit("isLoading", false);
        },
        onError: () => {
            emit("isLoading", false);
        },
    });
};
</script>
