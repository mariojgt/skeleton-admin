<template>
    <div
        class="bg-[#1E2A42]/90 backdrop-blur-lg rounded-xl border-2 border-[#328AF1]/30 overflow-hidden rpg-capabilities-container">
        <!-- Magical Background Elements -->
        <div class="absolute inset-0">
            <!-- Fantasy grid pattern -->
            <div
                class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDUgTCA1IDAgTSAxNSAwIEwgMjAgNSBNIDAgMTUgTCA1IDIwIE0gMTUgMjAgTCAyMCAxNSIgc3Ryb2tlPSIjQkFEOUZDIiBzdHJva2Utd2lkdGg9IjAuNSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20 fantasy-grid">
            </div>

            <!-- Magical aura effect -->
            <div class="absolute inset-0 bg-gradient-to-t from-[#8B60ED]/10 to-transparent magical-aura"></div>

            <!-- RPG UI scanlines -->
            <div class="absolute inset-0 bg-scanlines opacity-5"></div>
        </div>

        <!-- Fantasy corner elements -->
        <div class="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#328AF1] opacity-50 corner-accent">
        </div>
        <div class="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#328AF1] opacity-50 corner-accent">
        </div>
        <div class="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#328AF1] opacity-50 corner-accent">
        </div>
        <div class="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#328AF1] opacity-50 corner-accent">
        </div>

        <!-- Header with RPG Styling -->
        <div class="relative px-4 py-3 border-b border-[#328AF1]/30 flex items-center justify-between z-10">
            <div class="rpg-quest-badge flex items-center gap-2">
                <KeySquare class="w-5 h-5 text-[#8B60ED]" />
                <h3 class="text-sm font-medium text-[#BAD9FC]">Adventurer's Capabilities</h3>
            </div>
            <div class="flex items-center gap-2">
                <span v-if="normalizedUserInfo?.level"
                    class="px-2 py-1 bg-[#8B60ED]/10 text-[#8B60ED] text-xs rounded-full border border-[#8B60ED]/30 rpg-badge">
                    Level {{ normalizedUserInfo?.level }}
                </span>
                <span v-if="normalizedUserInfo?.rank"
                    class="px-2 py-1 bg-[#F19A1A]/10 text-[#F19A1A] text-xs rounded-full border border-[#F19A1A]/30 rpg-badge">
                    {{ normalizedUserInfo?.rank.rank }}
                </span>
            </div>
        </div>

        <!-- Loading State -->
        <div v-if="loading" class="relative flex flex-col items-center justify-center py-12 z-10">
            <div
                class="w-16 h-16 border-4 border-t-[#8B60ED] border-r-[#328AF1] border-b-[#21C8F6] border-l-[#1AAB8B] border-t-4 rounded-full animate-spin">
            </div>
            <p class="mt-4 text-lg text-[#BAD9FC]">Loading capabilities...</p>
        </div>

        <!-- Subscription and Level Info -->
        <div v-else-if="normalizedUserInfo" class="relative z-10">
            <!-- Subscription Plan Card -->
            <div v-if="normalizedUserInfo.has_subscription" class="px-4 py-4 border-b border-[#328AF1]/20">
                <div class="flex items-center justify-between mb-3">
                    <div class="flex items-center gap-2">
                        <Crown class="w-5 h-5 text-[#F19A1A]" />
                        <h4 class="text-white font-medium">Active Subscription</h4>
                    </div>
                    <span class="text-sm text-[#BAD9FC]">
                        {{ normalizedUserInfo.subscription?.plan?.name }}
                    </span>
                </div>
                <div class="px-3 py-2 bg-[#253D63] rounded-lg flex items-center justify-between">
                    <div class="flex items-center gap-2">
                        <Calendar class="w-4 h-4 text-[#328AF1]" />
                        <span class="text-xs text-[#BAD9FC]">Renewal Date</span>
                    </div>
                    <span class="text-xs text-white">
                        {{ normalizedUserInfo.subscription.end_date_at }}
                    </span>
                </div>
            </div>

            <!-- XP Progress -->
            <div class="px-4 py-4 border-b border-[#328AF1]/20">
                <div class="flex items-center justify-between mb-3">
                    <div class="flex items-center gap-2">
                        <Zap class="w-5 h-5 text-[#F19A1A]" />
                        <h4 class="text-white font-medium">Experience Points</h4>
                    </div>
                    <span class="text-sm text-[#BAD9FC]">
                        {{ normalizedUserInfo.xp }} / {{ normalizedUserInfo.next_level_xp }} XP
                    </span>
                </div>
                <div class="h-2 w-full bg-[#253D63] rounded-full overflow-hidden">
                    <div class="h-full bg-gradient-to-r from-[#F19A1A] to-[#FFC73C]"
                        :style="{ width: `${(normalizedUserInfo.xp / normalizedUserInfo.next_level_xp) * 100}%` }"></div>
                </div>
                <div class="mt-2 text-xs text-[#BAD9FC]/70 text-center">
                    {{ Math.round((normalizedUserInfo.xp / normalizedUserInfo.next_level_xp) * 100) }}% to level {{ normalizedUserInfo.level + 1 }}
                </div>
            </div>

            <!-- Capabilities Section -->
            <div class="px-4 py-4">
                <div class="flex items-center justify-between mb-3">
                    <div class="flex items-center gap-2">
                        <KeySquare class="w-5 h-5 text-[#328AF1]" />
                        <h4 class="text-white font-medium">Your Capabilities</h4>
                    </div>
                    <button @click="refreshCapabilities"
                        class="w-6 h-6 flex items-center justify-center rounded-full bg-[#253D63] text-[#BAD9FC] hover:text-white transition-colors">
                        <RefreshCw class="w-3 h-3" />
                    </button>
                </div>

                <!-- No Capabilities Message -->
                <div v-if="!capabilities || capabilities.length === 0" class="py-6 text-center">
                    <div class="w-12 h-12 mx-auto mb-3 rounded-full bg-[#253D63] flex items-center justify-center">
                        <Key class="w-6 h-6 text-[#BAD9FC]/70" />
                    </div>
                    <p class="text-sm text-[#BAD9FC]">No capabilities found</p>
                    <p v-if="!normalizedUserInfo.has_subscription" class="text-xs text-[#BAD9FC]/70 mt-1">Subscribe to unlock
                        capabilities</p>
                </div>

                <!-- Capabilities List -->
                <div v-else class="space-y-4">
                    <div v-for="(capability, index) in capabilities" :key="index"
                        class="capability-item group p-3 bg-[#253D63] rounded-lg border border-[#328AF1]/20 hover:border-[#328AF1]/40 transition-all hover:bg-[#2A4265] cursor-pointer"
                        @click="capability.isExpanded = !capability.isExpanded">
                        <!-- Capability Header -->
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-3">
                                <div class="capability-icon-container w-8 h-8 rounded-lg flex items-center justify-center"
                                    :class="getCapabilityIconClass(capability.slug)">
                                    <component :is="getCapabilityIcon(capability.slug)" class="w-4 h-4 text-white" />
                                </div>
                                <div>
                                    <h5 class="text-sm font-medium text-white">{{ capability.name }}</h5>
                                    <div class="flex items-center gap-1 mt-0.5">
                                        <span class="text-xs text-[#BAD9FC]/70">
                                            {{ capability.isUnlimited ? 'Unlimited' :
                                                (capability.remaining === -1 ? 'Unlimited' :
                                                    `${capability.remaining} remaining`) }}
                                        </span>
                                        <span v-if="capability.nextReset && !capability.isUnlimited"
                                            class="text-xs text-[#BAD9FC]/50">
                                            • Resets in {{ formatTimeUntil(capability.nextReset) }}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <ChevronDown class="w-4 h-4 text-[#BAD9FC] transition-transform duration-300"
                                :class="{ 'rotate-180': capability.isExpanded }" />
                        </div>

                        <!-- Expanded Details -->
                        <Transition enter-active-class="transition duration-200 ease-out"
                            enter-from-class="transform scale-y-95 opacity-0"
                            enter-to-class="transform scale-y-100 opacity-100"
                            leave-active-class="transition duration-100 ease-in"
                            leave-from-class="transform scale-y-100 opacity-100"
                            leave-to-class="transform scale-y-95 opacity-0">
                            <div v-if="capability.isExpanded" class="mt-3 pt-3 border-t border-[#328AF1]/20">
                                <p class="text-xs text-[#BAD9FC] mb-2">{{ capability.description }}</p>

                                <!-- Usage Stats -->
                                <div v-if="!capability.isUnlimited && capability.usageLimit > 0" class="mt-3">
                                    <div class="flex items-center justify-between mb-1">
                                        <span class="text-xs text-[#BAD9FC]/70">Usage</span>
                                        <span class="text-xs text-[#BAD9FC]">
                                            {{ capability.usageCount }} / {{ capability.usageLimit }}
                                        </span>
                                    </div>
                                    <div class="h-1.5 w-full bg-[#1E2A42] rounded-full overflow-hidden">
                                        <div class="h-full"
                                            :class="getProgressBarClass(capability.usageCount, capability.usageLimit)"
                                            :style="{ width: `${Math.min((capability.usageCount / capability.usageLimit) * 100, 100)}%` }">
                                        </div>
                                    </div>
                                </div>

                                <!-- Unlimited Badge -->
                                <div v-else-if="capability.isUnlimited" class="mt-2 flex justify-center">
                                    <span
                                        class="px-2 py-1 bg-[#8B60ED]/10 text-[#8B60ED] text-xs rounded-full border border-[#8B60ED]/30">
                                        <Infinity class="w-3 h-3 inline-block mr-1" /> Unlimited Access
                                    </span>
                                </div>
                            </div>
                        </Transition>
                    </div>
                </div>
            </div>
        </div>

        <!-- No User Info State -->
        <div v-else class="relative py-8 text-center z-10">
            <div
                class="rpg-icon mx-auto mb-3 p-4 rounded-full bg-[#328AF1]/10 border border-[#328AF1]/30 animate-pulse-slow">
                <UserX size="48" class="text-[#BAD9FC] opacity-70" />
            </div>
            <p class="text-[#BAD9FC] text-sm font-medium">Not Logged In</p>
            <p class="text-[#BAD9FC]/60 text-xs mt-1">Log in to view your capabilities</p>
            <button @click="login"
                class="mt-4 px-4 py-2 bg-[#328AF1] text-white rounded-lg text-sm hover:bg-[#21C8F6] transition-colors">
                Log In
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, computed, inject, watch } from 'vue';
import { api } from "../../../Boot/axios.js";
import { usePage } from "@inertiajs/vue3";
import { startWindToast } from "@mariojgt/wind-notify/packages/index.js";
import {
    KeySquare,
    Key,
    Crown,
    Calendar,
    ChevronDown,
    Zap,
    RefreshCw,
    BookOpen,
    Download,
    Code,
    Infinity,
    UserX,
    Sparkles
} from 'lucide-vue-next';

const props = defineProps({
    refreshTrigger: {
        type: Number,
        default: 0
    }
});

const emit = defineEmits(['login', 'subscribe']);
const route = inject('route');

// State
const loading = ref(true);
const userInfo = ref(null);
const capabilities = ref([]);

// Computed property to normalize userInfo access
const normalizedUserInfo = computed(() => {
  if (!userInfo.value) return null;

  // Check if the data is at userInfo.value.data
  if (userInfo.value.data) {
    return userInfo.value.data;
  }

  // Otherwise, return userInfo.value directly
  return userInfo.value;
});

// Get user info from the page props
const getUserInfo = () => {
    const pageProps = usePage().props;

    if (pageProps.isUserAuth && pageProps.authUserInfo) {
        userInfo.value = pageProps.authUserInfo;
        return true;
    }

    return false;
};

// Format date helper
const formatDate = (dateString) => {
    if (!dateString) return 'N/A';

    try {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return 'N/A';

        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    } catch (error) {
        return 'N/A';
    }
};

// Format time until helper
const formatTimeUntil = (dateString) => {
    if (!dateString) return '';

    try {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return '';

        const now = new Date();
        const diffInMs = date - now;

        if (diffInMs <= 0) return 'soon';

        const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diffInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        if (days > 0) {
            return `${days}d${hours > 0 ? ` ${hours}h` : ''}`;
        } else if (hours > 0) {
            return `${hours}h`;
        } else {
            return `<1h`;
        }
    } catch (error) {
        return '';
    }
};

// Get capability icon
const getCapabilityIcon = (slug) => {
    const iconMap = {
        'access_premium_courses': BookOpen,
        'download_digital_resources': Download,
        'download_lesson_resources': Download,
        'project_templates': Code,
        'default': KeySquare
    };

    return iconMap[slug] || iconMap.default;
};

// Get capability icon background class
const getCapabilityIconClass = (slug) => {
    const classMap = {
        'access_premium_courses': 'bg-gradient-to-br from-[#8B60ED] to-[#B372BD] shadow-[0_0_10px_rgba(139,96,237,0.3)]',
        'download_digital_resources': 'bg-gradient-to-br from-[#328AF1] to-[#21C8F6] shadow-[0_0_10px_rgba(50,138,241,0.3)]',
        'download_lesson_resources': 'bg-gradient-to-br from-[#1AAB8B] to-[#6EDCC4] shadow-[0_0_10px_rgba(26,171,139,0.3)]',
        'project_templates': 'bg-gradient-to-br from-[#F19A1A] to-[#FFC73C] shadow-[0_0_10px_rgba(241,154,26,0.3)]',
        'default': 'bg-gradient-to-br from-[#328AF1] to-[#8B60ED] shadow-[0_0_10px_rgba(50,138,241,0.3)]'
    };

    return classMap[slug] || classMap.default;
};

// Get progress bar class
const getProgressBarClass = (used, limit) => {
    const percentage = (used / limit) * 100;

    if (percentage >= 90) {
        return 'bg-gradient-to-r from-[#F06060] to-[#F19A1A]';
    } else if (percentage >= 75) {
        return 'bg-gradient-to-r from-[#F19A1A] to-[#FFC73C]';
    } else if (percentage >= 50) {
        return 'bg-gradient-to-r from-[#1AAB8B] to-[#6EDCC4]';
    } else {
        return 'bg-gradient-to-r from-[#328AF1] to-[#21C8F6]';
    }
};

// Fetch user capabilities
const fetchCapabilities = async () => {
    if (!normalizedUserInfo.value) return;

    loading.value = true;

    try {
        const response = await api.get(route("user.api.capabilities"));

        // Process capabilities
        capabilities.value = response.data.capabilities.map(capability => {
            return {
                ...capability,
                isExpanded: false,
                isUnlimited: capability.usage_limit === -1 || capability.is_unlimited
            };
        });
    } catch (error) {
        console.error("Failed to fetch capabilities", error);
        startWindToast('error', "Failed to load capabilities", 'error');
        capabilities.value = [];
    } finally {
        loading.value = false;
    }
};

// Refresh capabilities
const refreshCapabilities = () => {
    // For development, use mock data
    // In production, use fetchCapabilities()
    // mockFetchCapabilities();
    fetchCapabilities();
};

// Login handler
const login = () => {
    emit('login');
};

// Subscribe handler
const subscribe = () => {
    emit('subscribe');
};

// Watch for refresh trigger
watch(() => props.refreshTrigger, () => {
    refreshCapabilities();
});

// Lifecycle hooks
onMounted(() => {
    const isLoggedIn = getUserInfo();

    if (isLoggedIn) {
        // For development, use mock data
        // In production, use fetchCapabilities()
        fetchCapabilities();
    } else {
        loading.value = false;
    }
});
</script>

<style scoped>
/* RPG UI and Magical Effects */
.rpg-capabilities-container {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3), 0 0 15px rgba(50, 138, 241, 0.2);
    transition: all 0.3s ease;
    transform: translateY(0);
    position: relative;
}

.rpg-capabilities-container:hover {
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(50, 138, 241, 0.3);
}

/* Fantasy grid animation */
.fantasy-grid {
    animation: fantasy-grid-pulse 10s ease-in-out infinite;
}

@keyframes fantasy-grid-pulse {

    0%,
    100% {
        opacity: 0.1;
    }

    50% {
        opacity: 0.3;
    }
}

/* Magical Aura */
.magical-aura {
    opacity: 0.5;
    animation: magical-pulse 5s ease-in-out infinite;
}

@keyframes magical-pulse {

    0%,
    100% {
        opacity: 0.5;
    }

    50% {
        opacity: 0.8;
    }
}

/* Fantasy Corner Accents */
.corner-accent {
    transition: all 0.5s ease;
}

.rpg-capabilities-container:hover .corner-accent {
    opacity: 0.8;
}

/* RPG Badge with Shine Animation */
.rpg-badge {
    position: relative;
    overflow: hidden;
}

.rpg-badge::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transform: translateX(-100%);
    animation: rpg-badge-shine 3s infinite;
}

@keyframes rpg-badge-shine {
    100% {
        transform: translateX(100%);
    }
}

/* Capability Item Effects */
.capability-item {
    position: relative;
    transition: all 0.2s ease;
}

.capability-item:hover {
    transform: translateX(2px);
}

.capability-icon-container {
    transition: all 0.2s ease;
}

.capability-item:hover .capability-icon-container {
    transform: scale(1.05);
}

/* RPG UI scanlines */
.bg-scanlines {
    background-image: linear-gradient(0deg,
            transparent 0%,
            rgba(50, 138, 241, 0.05) 50%,
            transparent 100%);
    background-size: 100% 4px;
}

/* Empty State RPG Icon Animation */
@keyframes pulse-slow {

    0%,
    100% {
        opacity: 1;
        transform: scale(1);
    }

    50% {
        opacity: 0.7;
        transform: scale(0.95);
    }
}

.animate-pulse-slow {
    animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Mobile optimizations */
@media (max-width: 640px) {
    .capability-item:hover {
        transform: none;
    }
}
</style>
