<template>
    <!--Pricing Card-->
    <div
        class="flex flex-col mx-auto max-w-sm bg-dark-300 hover:bg-dark-700 rounded-lg transform hover:scale-105 transition-transform duration-300"
    >
        <div
            v-if="props.isPopular"
            class="uppercase bg-gradient-to-r from-teal-600 to-violet-600 rounded-t-2xl p-3 text-center text-white"
        >
            MOST POPULAR
        </div>
        <div v-else class="bg-gradient-to-r from-indigo-600 to-violet-600 rounded-t-2xl p-3 text-center text-white">
            GOOD VALUE
        </div>
        <div class="p-6 xl:py-9 xl:px-12">
            <h3 class="font-manrope text-2xl font-bold mb-3">{{ props.plan.name }}</h3>
            <div class="flex justify-center mb-6">
                <span
                    class="font-manrope mr-2 text-6xl font-semibold text-white"
                    >{{ makeMoney(props.plan.price) }}</span
                >
            </div>
            <p v-if="!props.plan.auto_renew" class="text-xl text-gray-100">One Time Payment</p>
            <p v-else class="text-xl text-gray-100">Monthly (cancel anytime)</p>
            <!--List-->
            <div v-html="props.plan.description"></div>
            <button @click="selectPlan" class="btn btn-secondary w-full mt-5">Select Plan</button>
            <!--List End-->
        </div>
    </div>
    <!--Pricing Card-->
</template>

<script setup lang="ts">
import { makeMoney } from "@frontend_components/../Composable/Money.js";
const emit = defineEmits(["selectPlan"]);
const selectPlan = () => {
    // event to update the table
    emit("selectPlan", props.plan);
};

let showAnnual = $ref(false);

const props = defineProps({
    plan: {
        type: Object,
        default: () => {},
    },
    isPopular: {
        type: Boolean,
        default: false,
    },
});
</script>
