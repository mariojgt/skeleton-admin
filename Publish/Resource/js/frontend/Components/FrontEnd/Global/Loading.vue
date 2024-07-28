<template>
    <reusable-modal
        :show="isLoading"
        @close="close"
        :isLarge="false"
        :showFooter="false"
        :showHeader="false"
        modalClass="mb-4 lg:mb-6 not-format border-2 rounded p-2 bg-opacity-10 backdrop-blur transition-all border-animated-pink"
    >
        <template #body>
            <div class="text-center">
                <div class="loader mx-auto"></div>
                <p class="mt-4 text-3xl font-mono uppercase tracking-widest">Loading...</p>
            </div>
        </template>
    </reusable-modal>
</template>

<script setup>
import { ReusableModal } from "@mariojgt/masterui/packages/index";

const props = defineProps({
  isLoading: {
    type: Boolean,
    default: false,
  }
});

// trigger event start
// Create a event that we goin to trigger on the store
const emit = defineEmits(["update:reload"]);
const updateMethod = async () => {
    // event to update the table
    emit("update:reload");
};
// trigger event end

// reciver event start
const reloadData = async () => {
    console.log('reload me');
};
// reciver event end
</script>
