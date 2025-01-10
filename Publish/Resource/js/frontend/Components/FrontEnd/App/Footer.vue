# ModernFooter.vue
<template>
    <footer :class="backgroundClass" class="relative overflow-hidden border-t border-gray-800/50">
        <!-- Background Elements -->
        <div class="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5"></div>
        <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIxMjEyMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-10"></div>

        <div class="relative mx-auto max-w-screen-xl px-4 py-16">
            <!-- Newsletter Section -->
            <div class="mx-auto max-w-xl mb-16">
                <div class="text-center space-y-4">
                    <h2 class="text-3xl font-bold text-white">
                        Level Up Your Game Dev Skills
                    </h2>
                    <p class="text-gray-400">
                        Subscribe to our newsletter for the latest tutorials, tips, and updates.
                    </p>
                </div>

                <form @submit.prevent="subscribeNewsletter" class="mt-6">
                    <div class="relative">
                        <label class="sr-only" for="email">Email</label>
                        <input
                            v-model="email"
                            class="w-full rounded-xl bg-dark-400/50 border border-gray-800/50 p-4 pe-32 text-sm font-medium text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                            :class="{ 'border-red-500 focus:border-red-500 focus:ring-red-500/20': errors.email }"
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                        />
                        <button
                            type="submit"
                            :disabled="processing"
                            class="absolute end-2 top-1/2 -translate-y-1/2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:from-blue-600 hover:to-purple-600 disabled:opacity-50"
                        >
                            <span class="flex items-center gap-2">
                                <Mail v-if="!processing" class="w-4 h-4" />
                                <Loader2 v-else class="w-4 h-4 animate-spin" />
                                {{ processing ? 'Subscribing...' : 'Subscribe' }}
                            </span>
                        </button>
                    </div>
                    <!-- Messages -->
                    <p v-if="errors.email" class="mt-2 text-sm text-red-400 flex items-center gap-1">
                        <AlertCircle class="w-4 h-4" />
                        {{ errors.email }}
                    </p>
                    <p v-if="successMessage" class="mt-2 text-sm text-green-400 flex items-center gap-1">
                        <CheckCircle class="w-4 h-4" />
                        {{ successMessage }}
                    </p>
                </form>
            </div>

            <!-- Footer Links -->
            <div class="grid grid-cols-1 gap-8 lg:grid-cols-4 mb-16">
                <!-- Column 1: Logo & About -->
                <div class="space-y-4">
                    <logo class="h-8 w-8" />
                    <p class="text-gray-400 max-w-xs">
                        Your journey to becoming a game developer starts here. Learn, create, and level up your skills.
                    </p>
                    <!-- Social Links -->
                    <div class="flex gap-4">
                        <a href="#" class="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                            <Youtube class="w-5 h-5" />
                        </a>
                        <a href="#" class="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                            <Twitter class="w-5 h-5" />
                        </a>
                        <a href="#" class="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                            <Github class="w-5 h-5" />
                        </a>
                        <a href="#" class="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                            <MessagesSquare class="w-5 h-5" /> <!-- Changed from Discord to MessagesSquare -->
                        </a>
                    </div>
                </div>

                <!-- Column 2: Quick Links -->
                <div>
                    <p class="font-bold text-white mb-4">Quick Links</p>
                    <ul class="space-y-2">
                        <li>
                            <a href="#" @click="openHome" class="text-gray-400 hover:text-blue-400 transition-colors duration-300">Home</a>
                        </li>
                        <li>
                            <a href="#" @click="openCourse" class="text-gray-400 hover:text-blue-400 transition-colors duration-300">Courses</a>
                        </li>
                        <li>
                            <a href="#" @click="openNews" class="text-gray-400 hover:text-blue-400 transition-colors duration-300">News</a>
                        </li>
                        <li>
                            <a href="#" @click="openForum" class="text-gray-400 hover:text-blue-400 transition-colors duration-300">Forum</a>
                        </li>
                    </ul>
                </div>

                <!-- Column 3: Resources -->
                <div>
                    <p class="font-bold text-white mb-4">Resources</p>
                    <ul class="space-y-2">
                        <li>
                            <a href="#" @click="openShop" class="text-gray-400 hover:text-blue-400 transition-colors duration-300">Shop</a>
                        </li>
                    </ul>
                </div>

                <!-- Column 4: Legal -->
                <div>
                    <p class="font-bold text-white mb-4">Legal</p>
                    <ul class="space-y-2">
                        <li>
                            <a href="#" @click="openPrivacy" class="text-gray-400 hover:text-blue-400 transition-colors duration-300">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" @click="openRoadmap" class="text-gray-400 hover:text-blue-400 transition-colors duration-300">Roadmap</a>
                        </li>
                        <li>
                            <a href="#" @click="openGuidelines" class="text-gray-400 hover:text-blue-400 transition-colors duration-300">Guidelines</a>
                        </li>
                        <li>
                            <a href="#" @click="openTerms" class="text-gray-400 hover:text-blue-400 transition-colors duration-300">Terms of Service</a>
                        </li>
                        <!-- <li>
                            <Link href="/terms" class="text-gray-400 hover:text-blue-400 transition-colors duration-300">Terms of Service</Link>
                        </li>
                        <li>
                            <Link href="/refund-policy" class="text-gray-400 hover:text-blue-400 transition-colors duration-300">Refund Policy</Link>
                        </li>
                        <li>
                            <Link href="/cookie-policy" class="text-gray-400 hover:text-blue-400 transition-colors duration-300">Cookie Policy</Link>
                        </li> -->
                    </ul>
                </div>
            </div>

            <!-- Bottom Bar -->
            <div class="border-t border-gray-800/50 pt-8">
                <div class="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p class="text-gray-400 text-sm">
                        © {{ currentYear }} {{ appName }}. All rights reserved.
                    </p>
                    <div class="flex items-center gap-2">
                        <Gamepad2 class="w-5 h-5 text-blue-400" />
                        <span class="text-gray-400 text-sm">Made with ♥ for Game Developers</span>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { ref } from 'vue';
import { Link, usePage, router } from "@inertiajs/vue3";
import { onMounted } from "vue";
import logo from "@frontend_components/FrontEnd/Icons/logoSimple.vue";
import { useRecaptcha } from '../../../Composable/useRecaptcha';
const { getToken, isLoading, error } = useRecaptcha();

// Update the imports at the top
import {
    Mail, Loader2, AlertCircle, CheckCircle,
    Youtube, Twitter, Github, MessagesSquare, // Changed Discord to MessagesSquare
    Gamepad2
} from 'lucide-vue-next';

const props = defineProps({
    backgroundClass: {
        type: String,
        default: "bg-dark-100",
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
        await router.post(route('newsletter.subscribe'), {
            email: email.value,
            recaptcha_token: await getToken('submit')
        }, {
            preserveState: true,
            preserveScroll: true,
            onSuccess: () => {
                successMessage.value = 'Thank you for subscribing to our newsletter!';
                email.value = '';
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

const openHome = () => {
    router.visit(route("home"));
};
const openCourse = () => {
    router.visit(route("course.index"));
};
const openNews = () => {
    router.visit(route("news"));
};
const openForum = () => {
    router.visit(route("forum.index"));
};
const openShop = () => {
    router.visit(route("store.index"));
};
const openPrivacy = () => {
    router.visit(route("privacy.policy"));
};
const openRoadmap = () => {
    router.visit(route("road.map"));
};
const openGuidelines = () => {
    router.visit(route("guide.line"));
};
const openTerms = () => {
    router.visit(route("terms.of.service"));
};
</script>
