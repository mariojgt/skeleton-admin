<template>
    <footer :class="backgroundClass">
        <div class="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
            <div class="mx-auto max-w-md">
                <strong class="block text-center text-xl font-bold text-white sm:text-3xl">
                    Want us to email you with the latest blockbuster news?
                </strong>

                <form @submit.prevent="subscribeNewsletter" class="mt-6">
                    <div class="relative max-w-lg">
                        <label class="sr-only" for="email">Email</label>

                        <input
                            v-model="email"
                            class="text-black w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium"
                            :class="{ 'border-red-500': errors.email }"
                            id="email"
                            type="email"
                            placeholder="john@doe.com"
                        />

                        <button
                            type="submit"
                            :disabled="processing"
                            class="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-secondary px-5 py-3 text-sm font-medium text-white transition hover:bg-primary disabled:opacity-50"
                        >
                            {{ processing ? 'Subscribing...' : 'Subscribe' }}
                        </button>
                    </div>

                    <!-- Error Message -->
                    <p v-if="errors.email" class="mt-2 text-sm text-red-500">
                        {{ errors.email }}
                    </p>

                    <!-- Success Message -->
                    <p v-if="successMessage" class="mt-2 text-sm text-green-500">
                        {{ successMessage }}
                    </p>
                </form>
            </div>

            <!-- Rest of the footer content remains the same -->
            <!-- ... -->
        </div>
    </footer>
</template>

<script setup>
import { ref } from 'vue';
import { usePage, router } from "@inertiajs/vue3";
import { onMounted } from "vue";
import { Rive, Layout } from "@rive-app/canvas";
import logo from "@frontend_components/FrontEnd/Icons/logoSimple.vue";

// Props
const props = defineProps({
    backgroundClass: {
        type: String,
        default: "bg-dark-blue-100",
    },
});

// Reactive state
const email = ref('');
const errors = ref({});
const processing = ref(false);
const successMessage = ref('');
let appName = $ref("The Dev Realm");

// Newsletter subscription handler
const subscribeNewsletter = async () => {
    processing.value = true;
    errors.value = {};
    successMessage.value = '';

    try {
        const response = await router.post(route('newsletter.subscribe'), {
            email: email.value
        }, {
            preserveState: true,
            preserveScroll: true,
            onSuccess: (page) => {
                successMessage.value = 'Thank you for subscribing to our newsletter!';
                email.value = ''; // Clear the input
            },
            onError: (errors) => {
                errors.value = errors;
            },
            onFinish: () => {
                processing.value = false;
            }
        });
    } catch (error) {
        errors.value = {
            email: 'An error occurred while subscribing. Please try again.'
        };
        processing.value = false;
    }
};

// Mounted hook
onMounted(() => {
    if (usePage().props.app) {
        appName = usePage().props.app;
    }
});

const currentYear = new Date().getFullYear();
</script>
