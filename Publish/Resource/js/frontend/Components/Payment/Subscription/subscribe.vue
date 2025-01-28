<template>
    <reusable-modal
        :show="isOpen"
        @close="close"
        :showFooter="false"
        modalClass="bg-dark-100 border border-gray-800/50 w-full max-w-7xl rounded-xl overflow-hidden"
        :showModalBox="false"
    >
        <template #title>
            <header class="relative text-center px-8 py-12 overflow-hidden">
                <!-- Background Elements -->
                <div class="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5"></div>
                <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIxMjEyMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-10"></div>

                <!-- Content -->
                <div class="relative">
                    <div class="flex justify-center mb-6">
                        <div class="relative">
                            <div class="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 opacity-25 blur-lg"></div>
                            <Crown class="w-16 h-16 text-blue-400" />
                        </div>
                    </div>

                    <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
                        Level Up Your Game Development Journey
                    </h2>
                    <p class="text-xl text-gray-300 max-w-2xl mx-auto">
                        Join thousands of developers who've transformed their skills with premium access.
                        Unlock everything you need to become a game development pro.
                    </p>
                </div>
            </header>
        </template>

        <template #body>
            <div class="p-8 space-y-8">
                <!-- Features Grid -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div class="flex items-start gap-4 p-4 rounded-lg bg-dark-500/50">
                        <div class="p-2 rounded-lg bg-blue-500/10">
                            <BookOpen class="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                            <h3 class="font-semibold text-white mb-1">All Courses</h3>
                            <p class="text-gray-400">Access our entire library of premium tutorials</p>
                        </div>
                    </div>
                    <div class="flex items-start gap-4 p-4 rounded-lg bg-dark-500/50">
                        <div class="p-2 rounded-lg bg-purple-500/10">
                            <Download class="w-6 h-6 text-purple-400" />
                        </div>
                        <div>
                            <h3 class="font-semibold text-white mb-1">Source Files</h3>
                            <p class="text-gray-400">Download project files and resources</p>
                        </div>
                    </div>
                    <div class="flex items-start gap-4 p-4 rounded-lg bg-dark-500/50">
                        <div class="p-2 rounded-lg bg-green-500/10">
                            <MessageCircle class="w-6 h-6 text-green-400" />
                        </div>
                        <div>
                            <h3 class="font-semibold text-white mb-1">Community</h3>
                            <p class="text-gray-400">Join our exclusive developer community</p>
                        </div>
                    </div>
                </div>

                <!-- Pricing Cards -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <subscription-card
                        v-for="(item, index) in usePage().props.subscriptionsProducts.data"
                        :key="index"
                        :plan="item"
                        :is-popular="index === 1"
                        @selectPlan="submitForm"
                    />
                </div>
                <!-- Trust Indicators and Terms -->
                <div class="mt-12 text-center space-y-6">
                    <!-- Trust Indicators -->
                    <div class="flex items-center justify-center gap-8 text-gray-400">
                        <div class="flex items-center gap-2">
                            <ShieldCheck class="w-5 h-5 text-blue-400" />
                            <span>Secure Payment</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <Clock class="w-5 h-5 text-purple-400" />
                            <span>Instant Access</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <Repeat class="w-5 h-5 text-green-400" />
                            <span>Cancel Anytime</span>
                        </div>
                    </div>

                    <!-- Terms and Conditions Links -->
                    <div class="text-sm text-gray-400">
                        <p class="flex items-center justify-center gap-2">
                            By subscribing, you agree to our
                            <a
                                href="/terms-of-service"
                                class="text-blue-400 hover:text-blue-300 underline transition-colors duration-200 inline-flex items-center gap-1"
                                target="_blank"
                            >
                                Terms of Service
                                <ExternalLink class="w-3 h-3" />
                            </a>
                            and
                            <a
                                href="/privacy-policy"
                                class="text-blue-400 hover:text-blue-300 underline transition-colors duration-200 inline-flex items-center gap-1"
                                target="_blank"
                            >
                                Privacy Policy
                                <ExternalLink class="w-3 h-3" />
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </template>
    </reusable-modal>
</template>

<script setup lang="ts">
import { usePage } from "@inertiajs/vue3";
import { ReusableModal } from "@mariojgt/masterui/packages/index";
import { api } from "../../../Boot/axios.js";
import SubscriptionCard from './subscribeCard.vue';
import {
    Crown, BookOpen, Download, MessageCircle,
    ShieldCheck, Clock, Repeat, ExternalLink
} from 'lucide-vue-next';

const props = defineProps({
    isOpen: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits(["closeModal"]);

const close = () => {
    emit("closeModal", "isLoading", "login");
};

const login = () => {
    emit("login");
};
const submitForm = (plan) => {
    // if the user authenticated if not show the login modal
    if (!usePage().props.isUserAuth) {
        login();
        return;
    }
    emit("isLoading", true);
    api.post(route("stripe.subscribe"), {
        plan_id: plan.id,
    })
    .then(function (response) {
        window.location.href = response.data.session;
    })
    .catch(function (error) {
        console.error('Subscription error:', error);
    });
};
</script>
