<template>
    <!-- Individual Plan -->
    <div class="bg-dark-blue-400 p-2 rounded-lg shadow-lg">
        <div class="card-body">
            <div class="flex justify-end items-center mb-4">
                <!-- <div class="flex items-center gap-2">
                    <button class="btn btn-outline btn-sm text-gray-400" @click="showAnnual = false">
                        Monthly
                    </button>
                    <button class="btn btn-outline btn-sm text-gray-400" @click="showAnnual = true">
                        Yearly
                    </button>
                </div> -->
                <h2 class="text-xl font-bold" v-if="!showAnnual" >${{ props.plan.price }}</h2>
                <h2 class="text-xl font-bold" v-else >${{ props.plan.price * 12 }}</h2>
            </div>
            <h3 class="text-2xl font-semibold mb-4">{{ props.plan.name }}</h3>
            <p class="text-gray-400 mb-6">
                {{ props.plan.description }}
            </p>
            <button @click="selectPlan" class="btn btn-secondary w-full">Select Plan</button>
        </div>
    </div>
</template>

<script setup lang="ts">
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
});
</script>
