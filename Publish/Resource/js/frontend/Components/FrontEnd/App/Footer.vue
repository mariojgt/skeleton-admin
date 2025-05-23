# ModernFooter.vue
<template>
    <footer :class="backgroundClass" class="relative overflow-hidden border-t border-[#64FFDA]/20">
        <!-- Premium Background Elements -->
        <div class="absolute inset-0 bg-gradient-to-br from-[#64FFDA]/5 to-[#8B5CF6]/5"></div>
        <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzY0RkZEQSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2Utb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-10"></div>

        <div class="relative mx-auto max-w-screen-xl px-4 py-16">
            <!-- Newsletter Section -->
            <div class="mx-auto max-w-xl mb-16">
                <div class="text-center space-y-4">
                    <h2 class="text-3xl font-bold text-white">
                        Advance Your Game Development Skills
                    </h2>
                    <p class="text-[#CBD5E1]">
                        Subscribe to our newsletter for exclusive tutorials, industry insights, and premium content.
                    </p>
                </div>

                <form @submit.prevent="subscribeNewsletter" class="mt-6">
                    <div class="relative">
                        <label class="sr-only" for="email">Email</label>
                        <input
                            v-model="email"
                            class="w-full rounded-xl bg-[#1E293B]/50 border border-[#64FFDA]/30 p-4 pe-32 text-sm font-medium text-white placeholder-[#94A3B8] focus:border-[#64FFDA] focus:ring-2 focus:ring-[#64FFDA]/20 transition-all duration-300"
                            :class="{ 'border-red-500 focus:border-red-500 focus:ring-red-500/20': errors.email }"
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                        />
                        <button
                            type="submit"
                            :disabled="processing"
                            class="absolute end-2 top-1/2 -translate-y-1/2 rounded-lg bg-gradient-to-r from-[#64FFDA] to-[#10B981] px-5 py-2.5 text-sm font-medium text-[#0F172A] transition-all duration-300 hover:shadow-lg hover:-translate-y-px disabled:opacity-50"
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
                    <p class="text-[#CBD5E1] max-w-xs">
                        Transform your game development skills with our premium courses. Industry-proven techniques, complete projects, professional assets.
                    </p>
                    <!-- Social Links -->
                    <div class="flex gap-4">
                        <a href="#" class="text-[#CBD5E1] hover:text-[#64FFDA] transition-colors duration-300">
                            <Youtube class="w-5 h-5" />
                        </a>
                        <a href="#" class="text-[#CBD5E1] hover:text-[#64FFDA] transition-colors duration-300">
                            <Twitter class="w-5 h-5" />
                        </a>
                        <a href="#" class="text-[#CBD5E1] hover:text-[#64FFDA] transition-colors duration-300">
                            <Github class="w-5 h-5" />
                        </a>
                        <a href="#" class="text-[#CBD5E1] hover:text-[#64FFDA] transition-colors duration-300">
                            <MessagesSquare class="w-5 h-5" />
                        </a>
                    </div>
                </div>

                <!-- Column 2: Quick Links -->
                <div>
                    <p class="font-bold text-white mb-4">Quick Links</p>
                    <ul class="space-y-3">
                        <li>
                            <a href="#" @click="openHome" class="text-[#CBD5E1] hover:text-[#64FFDA] transition-colors duration-300 flex items-center gap-2">
                                <div class="w-1.5 h-1.5 rounded-full bg-[#64FFDA]"></div>
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" @click="openCourse" class="text-[#CBD5E1] hover:text-[#64FFDA] transition-colors duration-300 flex items-center gap-2">
                                <div class="w-1.5 h-1.5 rounded-full bg-[#64FFDA]"></div>
                                Courses
                            </a>
                        </li>
                        <li>
                            <a href="#" @click="openNews" class="text-[#CBD5E1] hover:text-[#64FFDA] transition-colors duration-300 flex items-center gap-2">
                                <div class="w-1.5 h-1.5 rounded-full bg-[#64FFDA]"></div>
                                News
                            </a>
                        </li>
                        <li>
                            <a href="#" @click="openForum" class="text-[#CBD5E1] hover:text-[#64FFDA] transition-colors duration-300 flex items-center gap-2">
                                <div class="w-1.5 h-1.5 rounded-full bg-[#64FFDA]"></div>
                                Forum
                            </a>
                        </li>
                    </ul>
                </div>

                <!-- Column 3: Resources -->
                <div>
                    <p class="font-bold text-white mb-4">Resources</p>
                    <ul class="space-y-3">
                        <li>
                            <a href="#" @click="openShop" class="text-[#CBD5E1] hover:text-[#64FFDA] transition-colors duration-300 flex items-center gap-2">
                                <div class="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]"></div>
                                Shop
                            </a>
                        </li>
                        <li>
                            <a href="#" @click="openContact" class="text-[#CBD5E1] hover:text-[#64FFDA] transition-colors duration-300 flex items-center gap-2">
                                <div class="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]"></div>
                                Contact
                            </a>
                        </li>
                        <li>
                            <a href="#" @click="openPricing" class="text-[#CBD5E1] hover:text-[#64FFDA] transition-colors duration-300 flex items-center gap-2">
                                <div class="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]"></div>
                                Pricing
                            </a>
                        </li>
                        <li>
                            <a href="#" @click="openLeaderboard" class="text-[#CBD5E1] hover:text-[#64FFDA] transition-colors duration-300 flex items-center gap-2">
                                <div class="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]"></div>
                                Leaderboard
                            </a>
                        </li>
                    </ul>
                </div>

                <!-- Column 4: Legal -->
                <div>
                    <p class="font-bold text-white mb-4">Legal</p>
                    <ul class="space-y-3">
                        <li>
                            <a href="#" @click="openPrivacy" class="text-[#CBD5E1] hover:text-[#64FFDA] transition-colors duration-300 flex items-center gap-2">
                                <div class="w-1.5 h-1.5 rounded-full bg-[#F59E0B]"></div>
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="#" @click="openRoadmap" class="text-[#CBD5E1] hover:text-[#64FFDA] transition-colors duration-300 flex items-center gap-2">
                                <div class="w-1.5 h-1.5 rounded-full bg-[#F59E0B]"></div>
                                Roadmap
                            </a>
                        </li>
                        <li>
                            <a href="#" @click="openGuidelines" class="text-[#CBD5E1] hover:text-[#64FFDA] transition-colors duration-300 flex items-center gap-2">
                                <div class="w-1.5 h-1.5 rounded-full bg-[#F59E0B]"></div>
                                Guidelines
                            </a>
                        </li>
                        <li>
                            <a href="#" @click="openTerms" class="text-[#CBD5E1] hover:text-[#64FFDA] transition-colors duration-300 flex items-center gap-2">
                                <div class="w-1.5 h-1.5 rounded-full bg-[#F59E0B]"></div>
                                Terms of Service
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Premium Courses Highlight -->
            <div class="mb-16 p-6 bg-[#1E293B] rounded-xl border border-[#64FFDA]/20 shadow-lg">
                <div class="flex flex-col md:flex-row gap-8 items-center">
                    <div class="w-full md:w-1/2 space-y-4">
                        <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-[#64FFDA]/10 rounded-lg border border-[#64FFDA]/20">
                            <Trophy class="w-4 h-4 text-[#64FFDA]" />
                            <span class="text-[#CBD5E1] font-medium text-sm">Premium Game Development</span>
                        </div>

                        <h3 class="text-2xl font-bold text-white">Take Your Skills to the Next Level</h3>

                        <p class="text-[#CBD5E1]">
                            Unlock unlimited access to all courses, premium assets, and expert mentorship.
                        </p>

                        <button @click="openPricing" class="premium-button mt-2 px-6 py-3 bg-gradient-to-r from-[#64FFDA] to-[#10B981] rounded-md text-[#0F172A] font-bold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2">
                            View Pricing
                            <CreditCard class="w-4 h-4" />
                        </button>
                    </div>

                    <div class="w-full md:w-1/2 grid grid-cols-2 gap-4">
                        <div class="p-4 bg-[#0F172A] rounded-lg border border-[#64FFDA]/10 hover:border-[#64FFDA]/30 transition-all hover:-translate-y-1">
                            <div class="flex items-start gap-3 mb-2">
                                <div class="p-2 rounded-lg bg-gradient-to-r from-[#64FFDA]/20 to-[#10B981]/20">
                                    <Book class="w-5 h-5 text-[#64FFDA]" />
                                </div>
                                <div class="text-white font-medium">20+ Premium Courses</div>
                            </div>
                            <div class="text-sm text-[#CBD5E1]">
                                Comprehensive, in-depth learning paths
                            </div>
                        </div>

                        <div class="p-4 bg-[#0F172A] rounded-lg border border-[#8B5CF6]/10 hover:border-[#8B5CF6]/30 transition-all hover:-translate-y-1">
                            <div class="flex items-start gap-3 mb-2">
                                <div class="p-2 rounded-lg bg-gradient-to-r from-[#8B5CF6]/20 to-[#A78BFA]/20">
                                    <FileCode class="w-5 h-5 text-[#8B5CF6]" />
                                </div>
                                <div class="text-white font-medium">Source Code Access</div>
                            </div>
                            <div class="text-sm text-[#CBD5E1]">
                                Complete project repositories
                            </div>
                        </div>

                        <div class="p-4 bg-[#0F172A] rounded-lg border border-[#F59E0B]/10 hover:border-[#F59E0B]/30 transition-all hover:-translate-y-1">
                            <div class="flex items-start gap-3 mb-2">
                                <div class="p-2 rounded-lg bg-gradient-to-r from-[#F59E0B]/20 to-[#FBBF24]/20">
                                    <MessageSquare class="w-5 h-5 text-[#F59E0B]" />
                                </div>
                                <div class="text-white font-medium">Expert Mentorship</div>
                            </div>
                            <div class="text-sm text-[#CBD5E1]">
                                Personal guidance and support
                            </div>
                        </div>

                        <div class="p-4 bg-[#0F172A] rounded-lg border border-[#10B981]/10 hover:border-[#10B981]/30 transition-all hover:-translate-y-1">
                            <div class="flex items-start gap-3 mb-2">
                                <div class="p-2 rounded-lg bg-gradient-to-r from-[#10B981]/20 to-[#34D399]/20">
                                    <Boxes class="w-5 h-5 text-[#10B981]" />
                                </div>
                                <div class="text-white font-medium">Premium Assets</div>
                            </div>
                            <div class="text-sm text-[#CBD5E1]">
                                Professional-grade game resources
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bottom Bar -->
            <div class="border-t border-[#64FFDA]/10 pt-8">
                <div class="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p class="text-[#CBD5E1] text-sm">
                        © {{ currentYear }} Premium Game Dev. All rights reserved.
                    </p>
                    <div class="flex items-center gap-2">
                        <Gamepad class="w-5 h-5 text-[#64FFDA]" />
                        <span class="text-[#CBD5E1] text-sm">Crafted with excellence for game developers</span>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { ref, inject } from 'vue';
import { Link, usePage, router } from "@inertiajs/vue3";
import { onMounted } from "vue";
import logo from "@frontend_components/FrontEnd/Icons/logoSimple.vue";
import { useRecaptcha } from '../../../Composable/useRecaptcha';
const { getToken, isLoading, error } = useRecaptcha();

const route = inject('route');
// Update the imports at the top
import {
    Mail, Loader2, AlertCircle, CheckCircle, Book,
    Youtube, Twitter, Github, MessagesSquare,
    Gamepad, CreditCard, Trophy, Boxes, FileCode
} from 'lucide-vue-next';

const props = defineProps({
    backgroundClass: {
        type: String,
        default: "bg-[#0F172A]",
    },
});

// Reactive state
const email = ref('');
const errors = ref({});
const processing = ref(false);
const successMessage = ref('');
let appName = $ref("Premium Game Dev");

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
const openContact = () => {
    router.visit(route("contact.index"));
};
const openPricing = () => {
    router.visit(route("pricing"));
};
const openLeaderboard = () => {
    router.visit(route("leaderboard"));
};
</script>

<style scoped>
/* Premium button styling */
.premium-button {
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.premium-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
}
</style>
