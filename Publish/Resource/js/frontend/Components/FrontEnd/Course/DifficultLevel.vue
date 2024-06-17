<template>
    <div class="w-full text-center mt-6">
        <div class="mb-2 text-2xs font-semibold text-white">
            Dificult level {{ props.dificultLevel }}
        </div>
        <div class="flex justify-center space-x-1 is-intermediate">
            <span class="inline-block h-2 flex-1 " :class="props.dificultLevel == 'beginner' ? 'bg-white' : 'bg-black'" />
            <span class="inline-block h2 flex-1 " :class="props.dificultLevel == 'intermediate' ? 'bg-white' : 'bg-black'" />
            <span class="inline-block h2 flex-1 " :class="props.dificultLevel == 'advanced' ? 'bg-white' : 'bg-black'" />
        </div>
    </div>
</template>

<script setup lang="ts">

// Props
const props = defineProps({
    dificultLevel: {
        type: String,
        default: 'intermediate'
    }
});

</script>
