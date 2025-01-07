# SubscriptionCard.vue
<template>
    <div class="relative group">
        <!-- Animated Border -->
        <div
            class="absolute -inset-[2px] rounded-xl bg-gradient-to-r opacity-75 blur-sm transition-all duration-500 group-hover:opacity-100 group-hover:blur-md"
            :class="[
                isPopular
                    ? 'from-purple-500 via-blue-500 to-purple-500 animate-gradient-x'
                    : 'from-blue-500/50 to-purple-500/50'
            ]"
        ></div>

        <!-- Card Content -->
        <div
            class="relative rounded-xl backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-1"
            :class="[
                isPopular
                    ? 'bg-dark-400/90'
                    : 'bg-dark-500/90'
            ]"
        >
            <!-- Popular Badge -->
            <div
                v-if="isPopular"
                class="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium shadow-lg"
            >
                MOST POPULAR
            </div>

            <!-- Main Content -->
            <div class="p-6 xl:p-8">
                <!-- Header -->
                <div class="space-y-4">
                    <div class="flex items-center gap-3">
                        <Crown
                            v-if="isPopular"
                            class="w-6 h-6 text-purple-400"
                        />
                        <h3 class="text-2xl font-bold text-white">{{ plan.name }}</h3>
                    </div>

                    <!-- Price Section -->
                    <div class="p-4 rounded-lg bg-dark-300/50">
                        <div class="flex items-baseline gap-2">
                            <span class="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                {{ makeMoney(plan.price) }}
                            </span>
                            <span class="text-gray-400">
                                {{ plan.auto_renew ? '/month' : 'one-time' }}
                            </span>
                        </div>
                        <p class="mt-2 text-sm text-gray-400 flex items-center gap-2">
                            <Clock class="w-4 h-4" />
                            {{ plan.auto_renew ? 'Cancel anytime' : 'One time payment' }}
                        </p>
                    </div>
                </div>

                <!-- Features List -->
                <div class="mt-8 space-y-4">
                    <div class="prose prose-invert max-w-none">
                        <ul class="space-y-3">
                            <li
                                v-for="(feature, index) in parseFeatures(plan.description)"
                                :key="index"
                                class="flex items-start gap-3 text-gray-300"
                            >
                                <div class="flex-shrink-0 p-1 rounded-full bg-blue-500/10">
                                    <Check class="w-4 h-4 text-blue-400" />
                                </div>
                                <span>{{ feature }}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Action Button -->
                <button
                    @click="selectPlan"
                    class="mt-8 w-full px-6 py-4 rounded-lg font-medium text-white transition-all duration-300 relative group/btn overflow-hidden"
                    :class="[
                        isPopular
                            ? 'bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600'
                            : 'bg-dark-400 hover:bg-dark-300'
                    ]"
                >
                    <!-- Shine Effect -->
                    <div class="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover/btn:animate-shine"></div>

                    <span class="relative z-10 flex items-center justify-center gap-2">
                        <Rocket class="w-5 h-5" />
                        Get Started
                    </span>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { makeMoney } from "@frontend_components/../Composable/Money.js";
import { Crown, Clock, Check, Rocket } from 'lucide-vue-next';

const props = defineProps({
    plan: {
        type: Object,
        required: true
    },
    isPopular: {
        type: Boolean,
        default: false
    }
});

const emit = defineEmits(["selectPlan"]);

const selectPlan = () => {
    emit("selectPlan", props.plan);
};

// Parse features from HTML description
const parseFeatures = (description: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(description, 'text/html');
    const items = doc.querySelectorAll('li');
    return Array.from(items).map(item => item.textContent);
};
</script>

<style scoped>
@keyframes gradient-x {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

@keyframes shine {
    from {
        left: -100%;
    }
    to {
        left: 100%;
    }
}

.animate-gradient-x {
    background-size: 200% 100%;
    animation: gradient-x 4s linear infinite;
}

.animate-shine {
    animation: shine 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}
</style>
