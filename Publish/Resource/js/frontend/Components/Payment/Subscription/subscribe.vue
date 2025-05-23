<template>
    <reusable-modal :show="isOpen" @close="close" :showFooter="false"
        modalClass="bg-[#1E2F4A] border border-[#328AF1]/20 w-full max-w-7xl rounded-xl overflow-hidden shadow-2xl"
        :showModalBox="false">
        <template #title>
            <header class="relative text-center px-8 py-12 overflow-hidden">
                <!-- Enhanced RPG Background -->
                <div class="absolute inset-0">
                    <!-- Base gradients with RPG feel -->
                    <div class="absolute inset-0 bg-gradient-to-br from-[#328AF1]/10 via-[#8B60ED]/10 to-[#21C8F6]/10">
                    </div>

                    <!-- RPG grid pattern -->
                    <div
                        class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDUgTCA1IDAgTSAxNSAwIEwgMjAgNSBNIDAgMTUgTCA1IDIwIE0gMTUgMjAgTCAyMCAxNSIgc3Ryb2tlPSIjQkFEOUZDIiBzdHJva2Utd2lkdGg9IjAuNSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-15">
                    </div>

                    <!-- Magic particles effect -->
                    <div class="absolute inset-0 overflow-hidden">
                        <div class="particles-container">
                            <div v-for="i in 8" :key="i" class="particle absolute rounded-full"
                                :class="getParticleClass(i)" :style="getParticleStyle(i)">
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Content with RPG styling -->
                <div class="relative">
                    <div class="flex justify-center mb-6">
                        <div class="relative">
                            <!-- Magical glow behind crown -->
                            <div
                                class="absolute -inset-4 bg-gradient-to-r from-[#328AF1] to-[#8B60ED] opacity-30 blur-lg">
                            </div>

                            <!-- RPG-styled crown/badge -->
                            <div class="p-4 rounded-full bg-[#253D63]/80 border border-[#328AF1]/30 shadow-xl">
                                <Crown class="w-12 h-12 text-[#328AF1]" />
                            </div>
                        </div>
                    </div>

                    <h2 class="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-text">
                        Level Up Your Game Development <span
                            class="text-transparent bg-clip-text bg-gradient-to-r from-[#328AF1] to-[#8B60ED] animate-gradient-x">Journey</span>
                    </h2>
                    <p class="text-xl text-[#BAD9FC] max-w-2xl mx-auto leading-relaxed">
                        Join thousands of developers who've transformed their skills with premium access.
                        Unlock everything you need to become a game development pro.
                    </p>
                </div>
            </header>
        </template>

        <template #body>
            <div class="p-8 space-y-8">
                <!-- Improved Billing Toggle UI -->
                <div class="flex justify-center mb-8">
                    <div
                        class="bg-[#1A253A]/80 border border-[#328AF1]/10 rounded-full p-1 flex items-center shadow-inner">
                        <!-- Monthly Button -->
                        <button @click="billingCycle = 'Months'"
                            class="relative px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ease-in-out"
                            :class="(billingCycle === 'Months')
                                ? 'bg-gradient-to-r from-[#328AF1] to-[#21C8F6] text-white shadow-md scale-105 ring-2 ring-[#328AF1]/40'
                                : 'text-[#BAD9FC] hover:text-white hover:bg-white/5'">
                            Monthly
                        </button>

                        <!-- Yearly Button -->
                        <button @click="billingCycle = 'Years'"
                            class="relative px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ease-in-out flex items-center gap-2"
                            :class="(billingCycle === 'Years')
                                ? 'bg-gradient-to-r from-[#8B60ED] to-[#B372BD] text-white shadow-md scale-105 ring-2 ring-[#8B60ED]/40'
                                : 'text-[#BAD9FC] hover:text-white hover:bg-white/5'">
                            Yearly
                            <span v-if="billingCycle === 'Years'"
                                class="bg-white/20 text-white text-xs px-2 py-0.5 rounded-full">
                                Save 20%
                            </span>
                        </button>
                    </div>
                </div>


                <!-- Features Grid with RPG styling -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div
                        class="feature-card group bg-[#253D63]/90 p-5 rounded-lg border border-[#328AF1]/20 hover:border-[#328AF1]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-blue">
                        <div class="flex items-start gap-4">
                            <div class="p-2 rounded-lg bg-gradient-to-br from-[#328AF1] to-[#21C8F6]">
                                <BookOpen class="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 class="font-semibold text-white mb-1">All Courses</h3>
                                <p class="text-[#BAD9FC]">Access our entire library of premium tutorials</p>
                            </div>
                        </div>
                    </div>

                    <div
                        class="feature-card group bg-[#253D63]/90 p-5 rounded-lg border border-[#8B60ED]/20 hover:border-[#8B60ED]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-purple">
                        <div class="flex items-start gap-4">
                            <div class="p-2 rounded-lg bg-gradient-to-br from-[#8B60ED] to-[#B372BD]">
                                <Download class="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 class="font-semibold text-white mb-1">Source Files</h3>
                                <p class="text-[#BAD9FC]">Download project files and resources</p>
                            </div>
                        </div>
                    </div>

                    <div
                        class="feature-card group bg-[#253D63]/90 p-5 rounded-lg border border-[#1AAB8B]/20 hover:border-[#1AAB8B]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-green">
                        <div class="flex items-start gap-4">
                            <div class="p-2 rounded-lg bg-gradient-to-br from-[#1AAB8B] to-[#6EDCC4]">
                                <MessageCircle class="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 class="font-semibold text-white mb-1">Community</h3>
                                <p class="text-[#BAD9FC]">Join our exclusive developer community</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Debugging info - remove in production -->
                <div v-if="debug" class="mb-6 p-4 bg-black/30 text-white rounded-lg">
                    <h3 class="font-bold mb-2">Debug Info:</h3>
                    <p>Billing Cycle: {{ billingCycle }}</p>
                    <p>Total Plans: {{ allPlans.length }}</p>
                    <p>Displayed Plans: {{ displayedPlans.length }}</p>
                    <div v-for="(plan, index) in allPlans" :key="index" class="mt-2 p-2 bg-black/20 rounded">
                        <p>Plan: {{ plan.name }} ({{ plan.auto_renew ? 'Subscription' : 'One-time' }})</p>
                        <p>Shown: {{ shouldShowPlan(plan) ? 'Yes' : 'No' }}</p>
                    </div>
                </div>

                <!-- Pricing Cards -->
                <div v-if="displayedPlans.length > 0" class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <subscription-card v-for="(item, index) in displayedPlans" :key="item.id" :plan="item"
                        :is-popular="getPopularIndex(displayedPlans) === index" :billing-cycle="billingCycle"
                        @selectPlan="submitForm" />
                </div>

                <!-- No Plans Message -->
                <div v-else class="text-center p-8 bg-[#253D63]/40 rounded-xl border border-[#328AF1]/20">
                    <div class="text-[#BAD9FC] mb-4">
                        <AlertCircle class="w-12 h-12 mx-auto mb-2" />
                        <h3 class="text-xl font-bold">No plans available</h3>
                    </div>
                    <p class="text-[#BAD9FC]/80">
                        There are no plans available for this billing cycle. Please try another option or contact
                        support.
                    </p>
                </div>

                <!-- Trust Indicators and Terms with RPG styling -->
                <div class="mt-12 text-center space-y-6">
                    <!-- Trust Indicators -->
                    <div class="flex flex-wrap items-center justify-center gap-6 text-[#BAD9FC]">
                        <div
                            class="flex items-center gap-2 bg-[#253D63]/60 px-4 py-2 rounded-lg border border-[#328AF1]/20">
                            <ShieldCheck class="w-5 h-5 text-[#328AF1]" />
                            <span>Secure Payment</span>
                        </div>
                        <div
                            class="flex items-center gap-2 bg-[#253D63]/60 px-4 py-2 rounded-lg border border-[#8B60ED]/20">
                            <Clock class="w-5 h-5 text-[#8B60ED]" />
                            <span>Instant Access</span>
                        </div>
                        <div
                            class="flex items-center gap-2 bg-[#253D63]/60 px-4 py-2 rounded-lg border border-[#1AAB8B]/20">
                            <Repeat class="w-5 h-5 text-[#1AAB8B]" />
                            <span>Cancel Anytime</span>
                        </div>
                    </div>

                    <!-- Terms and Conditions Links -->
                    <div class="text-sm text-[#BAD9FC]/80">
                        <p class="flex flex-wrap items-center justify-center gap-2">
                            By subscribing, you agree to our
                            <a href="/terms-of-service"
                                class="text-[#328AF1] hover:text-[#21C8F6] transition-colors duration-200 inline-flex items-center gap-1"
                                target="_blank">
                                Terms of Service
                                <ExternalLink class="w-3 h-3" />
                            </a>
                            and
                            <a href="/privacy-policy"
                                class="text-[#328AF1] hover:text-[#21C8F6] transition-colors duration-200 inline-flex items-center gap-1"
                                target="_blank">
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

<script setup>
import { usePage } from "@inertiajs/vue3";
import { ReusableModal } from "@mariojgt/masterui/packages/index";
import { api } from "../../../Boot/axios.js";
import SubscriptionCard from './subscribeCard.vue';
import {
    Crown, BookOpen, Download, MessageCircle,
    ShieldCheck, Clock, Repeat, ExternalLink,
    AlertCircle
} from 'lucide-vue-next';
import { inject, ref, computed } from "vue";

const route = inject('route');
const props = defineProps({
    isOpen: {
        type: Boolean,
        default: false,
    },
    debug: {
        type: Boolean,
        default: false, // Enable for debugging
    }
});

const emit = defineEmits(["closeModal", "isLoading", "login"]);

const close = () => {
    emit("closeModal", "isLoading", "login");
};

const login = () => {
    emit("login");
};

// Add billing cycle state
const billingCycle = ref('Months');

// Get all plans from props
const allPlans = computed(() => {
    return usePage().props.subscriptionsProducts?.data || [];
});

// Filter function to determine if a plan should be shown based on the billing cycle
const shouldShowPlan = (plan) => {

    if (plan.duration_type === billingCycle.value) {
        return true;
    }

    return false;
};

// Process plans based on billing cycle
const displayedPlans = computed(() => {
    // First filter plans based on billing cycle
    const filteredPlans = allPlans.value.filter(shouldShowPlan);

    // Then transform the pricing based on billing cycle
    return filteredPlans.map(plan => {
        const processedPlan = { ...plan };
        processedPlan.displayPrice = plan.price;
        processedPlan.originalPrice = null;
        processedPlan.billingPeriod = plan.auto_renew ? 'month' : 'one-time';

        return processedPlan;
    });
});

// Dynamically determine the popular plan index based on filtered plans
const getPopularIndex = (plans) => {
    if (plans.length === 0) return -1;
    if (plans.length === 1) return 0;

    // If we have 3 or more plans, middle one is popular
    if (plans.length >= 3) return 1;

    // For 2 plans, choose the more expensive one as popular
    return plans[0].displayPrice > plans[1].displayPrice ? 0 : 1;
};

const submitForm = (plan) => {
    // If the user is not authenticated, show the login modal
    if (!usePage().props.isUserAuth) {
        login();
        return;
    }

    emit("isLoading", true);

    // Pass the billing cycle along with the plan ID
    api.post(route("stripe.subscribe"), {
        plan_id: plan.id,
        billing_cycle: billingCycle.value,
    })
        .then(function (response) {
            window.location.href = response.data.session;
        })
        .catch(function (error) {
            console.error('Subscription error:', error);
        }).finally(() => {
            isLoading = false
        });
};

// Enhanced particle effects
const getParticleClass = (index) => {
    const classes = [
        'bg-[#328AF1]/20',
        'bg-[#8B60ED]/20',
        'bg-[#21C8F6]/20',
        'bg-[#1AAB8B]/20',
        'bg-[#F19A1A]/20'
    ];
    return classes[index % classes.length];
};

const getParticleStyle = (index) => {
    const size = 4 + Math.floor(Math.random() * 8);
    const left = Math.floor(Math.random() * 100);
    const top = Math.floor(Math.random() * 100);
    const delay = Math.floor(Math.random() * 5);
    const duration = 15 + Math.floor(Math.random() * 20);

    return {
        width: `${size}px`,
        height: `${size}px`,
        left: `${left}%`,
        top: `${top}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        opacity: 0.2 + Math.random() * 0.3
    };
};
</script>

<style scoped>
/* RPG Styling for the Modal */
@keyframes gradient-x {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}

.animate-gradient-x {
    background-size: 200% auto;
    animation: gradient-x 6s ease infinite;
}

/* Particle effect */
.particle {
    position: absolute;
    filter: blur(1px);
    animation: particle-float linear infinite;
}

@keyframes particle-float {
    0% {
        transform: translateY(0) translateX(0);
    }

    25% {
        transform: translateY(-20px) translateX(10px);
    }

    50% {
        transform: translateY(-30px) translateX(-10px);
    }

    75% {
        transform: translateY(-10px) translateX(-20px);
    }

    100% {
        transform: translateY(0) translateX(0);
    }
}

/* Text shadow for RPG feel */
.drop-shadow-text {
    text-shadow: 0 0 10px rgba(50, 138, 241, 0.5);
}

/* Enhanced glow effects with brand colors */
.shadow-glow-blue {
    box-shadow: 0 0 20px rgba(50, 138, 241, 0.3);
}

.shadow-glow-purple {
    box-shadow: 0 0 20px rgba(139, 96, 237, 0.3);
}

.shadow-glow-green {
    box-shadow: 0 0 20px rgba(26, 171, 139, 0.3);
}

/* Feature card styling */
.feature-card {
    transition: all 0.3s ease;
}

/* Mobile optimizations */
@media (max-width: 640px) {
    .header {
        padding: 6rem 1rem 4rem;
    }

    .particles-container {
        opacity: 0.5;
    }
}

/* Tablet optimizations */
@media (min-width: 641px) and (max-width: 1024px) {
    .feature-card {
        padding: 1rem;
    }
}
</style>
