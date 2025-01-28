<template>
    <div class="relative z-10" :class="{ 'mb-12': !miniProfile }">
        <!-- Profile Container -->
        <div :class="[
            'bg-dark-500/90 backdrop-blur-sm border-opacity-50 transition-all duration-300',
            frameStyles.borderColor,
            miniProfile ? 'rounded-xl border-2' : 'rounded-3xl border-4',
            {
                'scale-[0.85] origin-left': miniProfile && !isMobile,
                'transform-none': miniProfile && isMobile
            }
        ]">
            <!-- Content Container -->
            <div class="relative shadow-2xl overflow-hidden"
                 :class="{
                     'p-8': !miniProfile && !isMobile,
                     'p-3': miniProfile && isMobile,
                     'p-4': (miniProfile && !isMobile) || (!miniProfile && isMobile)
                 }"
            >
                <!-- Background Effect -->
                <div class="absolute inset-0 opacity-20" :class="frameStyles.bgPattern"></div>

                <!-- User Profile Content -->
                <div class="relative z-10"
                     :class="[
                         'flex items-center gap-3',
                         {
                             'flex-col md:flex-row md:gap-6': !miniProfile,
                             'flex-row': miniProfile
                         }
                     ]"
                >
                    <!-- Avatar Section -->
                    <div class="relative flex-shrink-0">
                        <div class="avatar-frame relative">
                            <!-- Avatar Glow -->
                            <div class="absolute rounded-full"
                                 :class="[
                                     frameStyles.glowEffect,
                                     miniProfile ? '-inset-1' : '-inset-2'
                                 ]"
                            ></div>

                            <!-- Avatar Border Design -->
                            <div class="absolute rounded-full"
                                 :class="[
                                     frameStyles.borderDesign,
                                     miniProfile ? '-inset-0.5' : '-inset-1'
                                 ]"
                            ></div>

                            <!-- Avatar Container -->
                            <div class="relative rounded-full overflow-hidden"
                                @click="openAchievements"
                                 :class="[
                                     frameStyles.avatarBorder,
                                     {
                                         'w-32 h-32 border-4': !miniProfile && !isMobile,
                                         'w-24 h-24 border-3': !miniProfile && isMobile,
                                         'w-12 h-12 border-2': miniProfile && isMobile,
                                         'w-16 h-16 border-2': miniProfile && !isMobile
                                     }
                                 ]"
                            >
                                <img
                                    :src="userData.avatar"
                                    :alt="userData.full_name"
                                    class="w-full h-full object-cover filter brightness-110 contrast-125"
                                />
                            </div>

                            <!-- Level Badge -->
                            <div class="absolute rounded-full flex items-center justify-center font-bold shadow-lg border-2"
                                 :class="[
                                     frameStyles.levelBadge,
                                     {
                                         '-bottom-2 -right-2 w-10 h-10 text-lg': !miniProfile && !isMobile,
                                         '-bottom-1.5 -right-1.5 w-8 h-8 text-base': !miniProfile && isMobile,
                                         '-bottom-1 -right-1 w-5 h-5 text-xs': miniProfile
                                     }
                                 ]"
                            >
                                {{ userData.level }}
                            </div>

                            <!-- Rank Stars -->
                            <div v-if="userData.level >= 30"
                                 class="absolute left-1/2 transform -translate-x-1/2 -translate-y-full"
                                 :class="{
                                     '-top-2': !miniProfile,
                                     '-top-1': miniProfile
                                 }">
                                <div class="flex items-center gap-0.5">
                                    <Star v-for="i in rankStars.count"
                                          :key="i"
                                          :class="[
                                              rankStars.style,
                                              {
                                                  'w-4 h-4': !miniProfile,
                                                  'w-3 h-3': miniProfile
                                              }
                                          ]"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- User Details -->
                    <div class="flex flex-col min-w-0" :class="{ 'items-center md:items-start': !miniProfile }">
                        <!-- Full Profile Content -->
                        <div v-if="!miniProfile"
                             :class="[
                                 'w-full',
                                 isMobile ? 'text-center' : 'text-center md:text-left'
                             ]">
                            <h1 class="font-extrabold mb-4 truncate"
                                :class="[
                                    frameStyles.nameStyle,
                                    isMobile ? 'text-2xl' : 'text-2xl md:text-4xl'
                                ]">
                                {{ userData.full_name }}
                            </h1>

                            <!-- XP Progress -->
                            <div class="relative rounded-full overflow-hidden border-2 shadow-lg w-full"
                                 :class="[
                                     frameStyles.xpBackground,
                                     isMobile ? 'h-6' : 'h-6 md:h-8'
                                 ]">
                                <!-- XP Segments -->
                                <div class="absolute inset-0 flex">
                                    <div v-for="n in 5" :key="n"
                                         class="w-1/5 border-r opacity-50"
                                         :class="frameStyles.segmentBorder"
                                    ></div>
                                </div>

                                <!-- XP Fill -->
                                <div class="absolute inset-0 transform transition-transform duration-700 ease-out"
                                     :class="frameStyles.xpFill"
                                     :style="{
                                         transform: `scaleX(${(userData.xp / userData.next_level_xp) || 0})`,
                                         transformOrigin: 'left center'
                                     }"
                                >
                                    <!-- XP Glow -->
                                    <div class="absolute inset-0 animate-pulse"
                                         :class="frameStyles.xpGlow"
                                    ></div>
                                </div>

                                <!-- XP Shine Effect -->
                                <div class="absolute inset-0 pointer-events-none overflow-hidden">
                                    <div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-move-sparkle opacity-50"></div>
                                </div>

                                <!-- XP Text -->
                                <span class="absolute inset-0 flex items-center justify-center font-bold text-white drop-shadow-md z-10"
                                      :class="isMobile ? 'text-xs' : 'text-xs md:text-sm'">
                                    {{ userData.xp }} / {{ userData.next_level_xp }} XP
                                </span>
                            </div>
                        </div>

                        <!-- Mini Profile Content -->
                        <div v-else class="truncate">
                            <div class="text-sm font-medium truncate"
                                 :class="frameStyles.titleColor">
                                {{ userData.full_name }}
                            </div>
                            <div class="text-xs truncate mt-0.5"
                                 :class="frameStyles.titleColor">
                                {{ levelTitle }}
                            </div>
                        </div>

                        <!-- Level Title (Full Profile) -->
                        <div v-if="!miniProfile"
                             class="mt-2 font-medium"
                             :class="[
                                 frameStyles.titleColor,
                                 isMobile ? 'text-xs text-center' : 'text-xs md:text-sm text-center md:text-left'
                             ]">
                            {{ levelTitle }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref,onMounted,onUnmounted } from 'vue';
import { Star } from 'lucide-vue-next';
import { router } from "@inertiajs/vue3";

const props = defineProps({
    user: {
        type: Object,
        required: true
    },
    miniProfile: {
        type: Boolean,
        default: false
    }
});

// Add mobile detection
const isMobile = ref(false);

const checkMobile = () => {
    isMobile.value = window.innerWidth < 768;
};

onMounted(() => {
    checkMobile();
    window.addEventListener('resize', checkMobile);
});

onUnmounted(() => {
    window.removeEventListener('resize', checkMobile);
});

// Helper computed property to handle both data structures
const userData = computed(() => {
    return props.user?.data || props.user || {};
});

const frameStyles = computed(() => {
    const level = userData.value?.level || 1;

    // Poor (Gray) - Levels 1-5
    if (level <= 5) {
        return {
            borderColor: 'border-gray-600',
            glowEffect: 'bg-gradient-to-br from-gray-500/20 to-gray-700/20',
            borderDesign: 'border-2 border-gray-500/20',
            avatarBorder: 'border-gray-600',
            levelBadge: 'bg-gradient-to-br from-gray-500 to-gray-700 text-white/90',
            nameStyle: 'text-gray-300 font-normal',
            xpBackground: 'bg-gray-900/40 border-gray-700',
            xpFill: 'bg-gradient-to-r from-gray-500 to-gray-700',
            xpGlow: 'bg-gray-400/20',
            titleColor: 'text-gray-400',
            bgPattern: 'bg-game-pattern-common'
        };
    }

    // Common (White) - Levels 6-10
    if (level <= 10) {
        return {
            borderColor: 'border-neutral-300',
            glowEffect: 'bg-gradient-to-br from-neutral-300/30 to-neutral-400/30',
            borderDesign: 'border-2 border-neutral-300/30',
            avatarBorder: 'border-neutral-300',
            levelBadge: 'bg-gradient-to-br from-neutral-300 to-neutral-400 text-gray-800',
            nameStyle: 'text-neutral-100 font-medium',
            xpBackground: 'bg-neutral-900/40 border-neutral-700',
            xpFill: 'bg-gradient-to-r from-neutral-300 to-neutral-400',
            xpGlow: 'bg-neutral-300/30',
            titleColor: 'text-neutral-200',
            bgPattern: 'bg-game-pattern-common'
        };
    }

    // Uncommon Tier 1 (Light Green) - Levels 11-15
    if (level <= 15) {
        return {
            borderColor: 'border-green-500',
            glowEffect: 'bg-gradient-to-br from-green-400/30 to-green-600/30 animate-pulse',
            borderDesign: 'border-2 border-green-400/30',
            avatarBorder: 'border-green-500 animate-float glow-uncommon-1 float-uncommon-1',
            levelBadge: 'bg-gradient-to-br from-green-400 to-green-600 text-white',
            nameStyle: 'text-green-300 font-semibold',
            xpBackground: 'bg-green-900/40 border-green-700',
            xpFill: 'bg-gradient-to-r from-green-400 to-green-600',
            xpGlow: 'bg-green-400/30',
            titleColor: 'text-green-200',
            bgPattern: 'bg-game-pattern-uncommon'
        };
    }

    // Uncommon Tier 2 (Deep Green) - Levels 16-20
    if (level <= 20) {
        return {
            borderColor: 'border-green-600',
            glowEffect: 'bg-gradient-to-br from-green-500/40 to-green-700/40 animate-pulse',
            borderDesign: 'border-2 border-green-500/40 border-dashed',
            avatarBorder: 'border-green-600 animate-float glow-uncommon-2 float-uncommon-2',
            levelBadge: 'bg-gradient-to-br from-green-500 to-green-700 text-white shadow-lg',
            nameStyle: 'text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-500 font-bold',
            xpBackground: 'bg-green-900/50 border-green-800',
            xpFill: 'bg-gradient-to-r from-green-500 to-green-700',
            xpGlow: 'bg-green-500/40 animate-pulse',
            titleColor: 'text-green-300',
            bgPattern: 'bg-game-pattern-uncommon animate-pulse'
        };
    }

    // Rare Tier 1 (Light Blue) - Levels 21-25
    if (level <= 25) {
        return {
            borderColor: 'border-blue-500',
            glowEffect: 'bg-gradient-to-br from-blue-400/40 to-blue-600/40 animate-pulse',
            borderDesign: 'border-2 border-blue-400/40',
            avatarBorder: 'border-blue-500 animate-float glow-rare-1 shine-effect float-rare-1',
            levelBadge: 'bg-gradient-to-br from-blue-400 to-blue-600 text-white shadow-lg',
            nameStyle: 'text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400 font-bold',
            xpBackground: 'bg-blue-900/40 border-blue-700',
            xpFill: 'bg-gradient-to-r from-blue-400 to-blue-600',
            xpGlow: 'bg-blue-400/40',
            titleColor: 'text-blue-200',
            bgPattern: 'bg-game-pattern-rare'
        };
    }

    // Rare Tier 2 (Deep Blue) - Levels 26-30
    if (level <= 30) {
        return {
            borderColor: 'border-blue-600',
            glowEffect: 'bg-gradient-to-br from-blue-500/50 to-blue-700/50 animate-pulse',
            borderDesign: 'border-3 border-blue-500/50 border-double',
            avatarBorder: 'border-blue-600 animate-float glow-rare-2 shine-effect float-rare-2',
            levelBadge: 'bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-lg',
            nameStyle: 'text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-400 to-blue-300 font-bold',
            xpBackground: 'bg-blue-900/50 border-blue-800',
            xpFill: 'bg-gradient-to-r from-blue-500 to-blue-700',
            xpGlow: 'bg-blue-500/50 animate-pulse',
            titleColor: 'text-blue-300',
            bgPattern: 'bg-game-pattern-rare animate-pulse'
        };
    }

    // Epic (Purple) - Levels 31-40
    if (level <= 40) {
        return {
            borderColor: 'border-purple-500 border-opacity-90',
            glowEffect: 'bg-gradient-to-br from-purple-400/50 to-purple-600/50 animate-pulse',
            borderDesign: 'border-2 border-purple-400/50 border-opacity-90',
            avatarBorder: 'border-purple-500 animate-float',
            levelBadge: 'bg-gradient-to-br from-purple-400 to-purple-600 text-white shadow-lg',
            nameStyle: 'text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-purple-300 to-purple-200 font-bold',
            xpBackground: 'bg-purple-900/50 border-purple-700',
            xpFill: 'bg-gradient-to-r from-purple-400 to-purple-600',
            xpGlow: 'bg-purple-400/50 animate-pulse',
            titleColor: 'text-purple-200',
            bgPattern: 'bg-game-pattern-epic'
        };
    }

    // Legendary (Orange) - Levels 41-45
    if (level <= 45) {
        return {
            borderColor: 'border-orange-500 legendary-border',
            glowEffect: 'bg-gradient-to-br from-orange-400/60 to-orange-600/60 animate-pulse',
            borderDesign: 'border-2 border-orange-400/60 legendary-border',
            avatarBorder: 'border-orange-500 animate-float',
            levelBadge: 'bg-gradient-to-br from-orange-400 to-orange-600 text-white shadow-lg',
            nameStyle: 'text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-orange-300 to-orange-200 font-bold animate-pulse-slow',
            xpBackground: 'bg-orange-900/60 border-orange-700',
            xpFill: 'bg-gradient-to-r from-orange-400 to-orange-600',
            xpGlow: 'bg-orange-400/60 animate-pulse',
            titleColor: 'text-orange-200',
            bgPattern: 'bg-game-pattern-legendary'
        };
    }

    // Artifact (Gold/Red) - Levels 46-49
    if (level <= 49) {
        return {
            borderColor: 'border-amber-500 artifact-border',
            glowEffect: 'bg-gradient-conic from-amber-400/70 via-red-500/70 to-amber-400/70 animate-rotate-slow',
            borderDesign: 'border-2 border-amber-400/70 artifact-border',
            avatarBorder: 'border-amber-500 animate-float',
            levelBadge: 'bg-gradient-to-br from-amber-400 to-red-500 text-white shadow-lg',
            nameStyle: 'text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-red-300 to-amber-200 font-bold animate-pulse-slow',
            xpBackground: 'bg-amber-900/70 border-amber-700',
            xpFill: 'bg-gradient-conic from-amber-400 via-red-500 to-amber-400',
            xpGlow: 'bg-amber-400/70 animate-pulse',
            titleColor: 'text-amber-200',
            bgPattern: 'bg-game-pattern-artifact'
        };
    }

    // Heirloom/Mythic (Prismatic) - Level 50
    return {
        borderColor: 'border-fuchsia-500 mythic-border',
        glowEffect: 'bg-gradient-conic from-fuchsia-400/80 via-cyan-500/80 to-fuchsia-400/80 animate-rotate-slow',
        borderDesign: 'border-2 border-fuchsia-400/80 mythic-border',
        avatarBorder: 'border-fuchsia-500 animate-mythic-float',
        levelBadge: 'bg-gradient-conic from-fuchsia-400 via-cyan-500 to-fuchsia-400 text-white shadow-lg',
        nameStyle: 'text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-200 via-cyan-300 to-fuchsia-200 font-bold animate-prismatic',
        xpBackground: 'bg-fuchsia-900/80 border-fuchsia-700',
        xpFill: 'bg-gradient-conic from-fuchsia-400 via-cyan-500 to-fuchsia-400',
        xpGlow: 'bg-fuchsia-400/80 animate-pulse',
        titleColor: 'text-fuchsia-200',
        bgPattern: 'bg-game-pattern-mythic'
    };
});

// More granular rank star calculation
const rankStars = computed(() => {
    const level = userData.value.level;
    if (level >= 48) return { count: 5, style: 'animate-sparkle-rotate text-yellow-400' };
    if (level >= 45) return { count: 5, style: 'animate-pulse-glow text-amber-400' };
    if (level >= 42) return { count: 4, style: 'animate-floating text-orange-400' };
    if (level >= 39) return { count: 4, style: 'text-rose-400' };
    if (level >= 36) return { count: 3, style: 'animate-pulse text-purple-400' };
    if (level >= 33) return { count: 3, style: 'text-fuchsia-400' };
    if (level >= 30) return { count: 2, style: 'text-pink-400' };
    return { count: 0, style: '' };
});

// More granular level titles
const levelTitle = computed(() => {
    const level = userData.value.level;
    switch (level) {
        case 1: return 'Awakened One';
        case 2: return 'Seeker of Knowledge';
        case 3: return 'Fledgling Adventurer';
        case 4: return 'Aspiring Hero';
        case 5: return 'Determined Spirit';
        case 6: return 'Bronze Initiate';
        case 7: return 'Iron Wayfarer';
        case 8: return 'Steel Aspirant';
        case 9: return 'Crystal Prospect';
        case 10: return 'Sapphire Pioneer';
        case 11: return 'Emerald Wanderer';
        case 12: return 'Ruby Pathfinder';
        case 13: return 'Diamond Seeker';
        case 14: return 'Twilight Voyager';
        case 15: return 'Dawn Herald';
        case 16: return 'Dusk Sentinel';
        case 17: return 'Celestial Walker';
        case 18: return '✧ Astral Nomad ✧';
        case 19: return '✦ Ethereal Guide ✦';
        case 20: return '⋆ Mystic Pathfinder ⋆';
        case 21: return '۞ Arcane Seeker ۞';
        case 22: return '✤ Eldrich Wayfarer ✤';
        case 23: return '❈ Planar Wanderer ❈';
        case 24: return '❋ Dimensional Scout ❋';
        case 25: return '✺ Void Tracker ✺';
        case 26: return '❂ Reality Shaper ❂';
        case 27: return '✾ Time Weaver ✾';
        case 28: return '❁ Cosmic Guide ❁';
        case 29: return '✽ Star Walker ✽';
        case 30: return '✬ Nova Seeker ✬';
        case 31: return '✫ Solar Knight ✫';
        case 32: return '⚝ Lunar Sage ⚝';
        case 33: return '✶ Stellar Mystic ✶';
        case 34: return '⚘ Celestial Sage ⚘';
        case 35: return '✵ Astral Sage ✵';
        case 36: return '⚜ Cosmic Elder ⚜';
        case 37: return '❧ Planar Master ❧';
        case 38: return '☙ Reality Master ☙';
        case 39: return '☬ Time Lord ☬';
        case 40: return '⚝ Void Master ⚝';
        case 41: return '✧ Dimensional Lord ✧';
        case 42: return '⚔ Ethereal Sovereign ⚔';
        case 43: return '☯ Celestial Emperor ☯';
        case 44: return '✵ Astral Sovereign ✵';
        case 45: return '⚡ Storm Lord ⚡';
        case 46: return '☄ Cosmic Emperor ☄';
        case 47: return '✺ Nova Lord ✺';
        case 48: return '⚝ Star Emperor ⚝';
        case 49: return '✴ Galaxy Sovereign ✴';
        case 50: return '★ Universal Legend ★';
        default: return 'Unknown Rank';
    }
});

const openAchievements = () => {
    router.visit(route("profile.achievements", { user: userData.value.username }));
};
</script>

<style scoped>
@reference "../../../../../css/frontend/app.css";

/* Base animations */
@keyframes floating {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
}

@keyframes pulse-glow {
    0%, 100% { opacity: 0.5; filter: blur(8px); }
    50% { opacity: 0.8; filter: blur(12px); }
}

@keyframes sparkle {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
}

@keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

@keyframes pattern-shift {
    0% { background-position: 0 0; }
    100% { background-position: 64px 64px; }
}

/* Level-specific float animations */
@keyframes float-uncommon-1 {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-3px); }
}

@keyframes float-uncommon-2 {
    0%, 100% {
        transform: translateY(0);
        filter: brightness(1);
    }
    50% {
        transform: translateY(-4px);
        filter: brightness(1.1);
    }
}

@keyframes float-rare-1 {
    0%, 100% {
        transform: translateY(0);
        filter: brightness(1);
    }
    50% {
        transform: translateY(-5px);
        filter: brightness(1.2);
    }
}

@keyframes float-rare-2 {
    0%, 100% {
        transform: translateY(0) rotate(0deg);
        filter: brightness(1);
    }
    50% {
        transform: translateY(-6px) rotate(1deg);
        filter: brightness(1.3);
    }
}

/* Mobile optimized animations */
@media (max-width: 768px) {
    @keyframes floating {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-3px); }
    }

    @keyframes pulse-glow {
        0%, 100% { opacity: 0.6; filter: blur(6px); }
        50% { opacity: 0.8; filter: blur(8px); }
    }
}

/* Mobile Performance Optimizations */
@media (max-width: 768px) {
    .animate-pulse,
    .animate-float,
    .animate-sparkle-rotate,
    .animate-prismatic {
        animation-duration: 4s;
    }

    .gradient-effect {
        background-size: 200% 200%;
    }

    .bg-pattern-mobile {
        background-size: 12px 12px;
    }
}

/* Touch Optimization */
@media (hover: hover) {
    .hover-effect:hover {
        transform: translateY(-1px);
        transition: transform 0.2s ease;
    }
}

/* Shine animations */
@keyframes shine {
    0% { transform: translateX(-200%) rotate(45deg); }
    100% { transform: translateX(200%) rotate(45deg); }
}

/* Background patterns */
.bg-game-pattern-common {
    background-image: radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px);
    background-size: 16px 16px;
}

.bg-game-pattern-uncommon {
    background-image:
        radial-gradient(circle, rgba(34, 197, 94, 0.1) 1px, transparent 1px),
        radial-gradient(circle, rgba(34, 197, 94, 0.05) 2px, transparent 2px);
    background-size: 16px 16px, 32px 32px;
}

.bg-game-pattern-uncommon-elite {
    background-image:
        linear-gradient(45deg, rgba(34, 197, 94, 0.1) 25%, transparent 25%),
        linear-gradient(-45deg, rgba(34, 197, 94, 0.1) 25%, transparent 25%);
    background-size: 24px 24px;
    animation: pattern-shift 30s linear infinite;
}

.bg-game-pattern-rare {
    background-image:
        radial-gradient(circle, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
        radial-gradient(circle, rgba(59, 130, 246, 0.05) 2px, transparent 2px);
    background-size: 20px 20px, 36px 36px;
}

.bg-game-pattern-rare-elite {
    background-image:
        linear-gradient(45deg, rgba(59, 130, 246, 0.12) 25%, transparent 25%),
        linear-gradient(-45deg, rgba(59, 130, 246, 0.12) 25%, transparent 25%);
    background-size: 32px 32px;
    animation: pattern-shift 30s linear infinite;
}

/* Animation classes */
.animate-float {
    animation: floating 3s ease-in-out infinite;
}

.animate-pulse {
    animation: pulse-glow 2s ease-in-out infinite;
}

.animate-sparkle {
    animation: sparkle 3s linear infinite;
}

.animate-rotate {
    animation: rotate 8s linear infinite;
}

/* Level frame effects */
.level-frame {
    position: relative;
    border-width: 2px;
    border-style: solid;
    transition: all 0.3s ease;
}

.level-frame::before {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: inherit;
    background: inherit;
    opacity: 0.5;
    filter: blur(8px);
}

/* Glow effects */
.glow-uncommon-1::after {
    content: '';
    position: absolute;
    inset: -2px;
    background: radial-gradient(circle, rgba(34, 197, 94, 0.3) 0%, transparent 70%);
    animation: pulse-glow 2s ease-in-out infinite;
    border-radius: inherit;
    z-index: -1;
}

.glow-uncommon-2::after {
    content: '';
    position: absolute;
    inset: -2px;
    background: radial-gradient(circle, rgba(22, 163, 74, 0.4) 0%, transparent 70%);
    animation: pulse-glow 3s ease-in-out infinite;
    border-radius: inherit;
    z-index: -1;
}

.glow-rare-1::after {
    content: '';
    position: absolute;
    inset: -3px;
    background: radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%);
    animation: pulse-glow 3s ease-in-out infinite;
    border-radius: inherit;
    z-index: -1;
}

.glow-rare-2::after {
    content: '';
    position: absolute;
    inset: -3px;
    background: radial-gradient(circle, rgba(37, 99, 235, 0.5) 0%, transparent 70%);
    animation: pulse-glow 4s ease-in-out infinite;
    border-radius: inherit;
    z-index: -1;
}

/* Shine effects */
.shine-effect::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
        45deg,
        transparent 45%,
        rgba(255, 255, 255, 0.1) 48%,
        rgba(255, 255, 255, 0.3) 50%,
        rgba(255, 255, 255, 0.1) 52%,
        transparent 55%
    );
    animation: shine 3s infinite;
    z-index: 1;
}

/* XP bar */
.xp-bar {
    position: relative;
    overflow: hidden;
    border-radius: 9999px;
}

.xp-progress {
    position: absolute;
    inset: 0;
    transform-origin: left;
    transition: transform 0.7s ease-out;
}

.xp-shine {
    position: absolute;
    top: 0;
    left: -100%;
    width: 50%;
    height: 100%;
    background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.2),
        transparent
    );
    animation: sparkle 2s linear infinite;
}

/* Badge */
.badge {
    position: relative;
    overflow: hidden;
    border-radius: 9999px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
}

.badge::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
        45deg,
        transparent,
        rgba(255, 255, 255, 0.1),
        transparent
    );
    animation: rotate 4s linear infinite;
}

/* Additional utility classes */
.text-shadow {
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.border-glow {
    box-shadow: 0 0 10px var(--glow-color, rgba(255, 255, 255, 0.3));
}

.transition-all {
    transition: all 0.3s ease;
}

/* Missing Animations */
@keyframes sparkle-rotate {
    0% { transform: rotate(0deg) scale(1); }
    50% { transform: rotate(180deg) scale(1.2); }
    100% { transform: rotate(360deg) scale(1); }
}

@keyframes move-sparkle {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
}

@keyframes rotate-slow {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

@keyframes pulse-slow {
    0%, 100% { opacity: 0.7; }
    50% { opacity: 1; }
}

@keyframes prismatic {
    0% { filter: hue-rotate(0deg) brightness(1); }
    50% { filter: hue-rotate(180deg) brightness(1.2); }
    100% { filter: hue-rotate(360deg) brightness(1); }
}

@keyframes mythic-float {
    0%, 100% {
        transform: translateY(0) scale(1);
        filter: hue-rotate(0deg);
    }
    50% {
        transform: translateY(-5px) scale(1.02);
        filter: hue-rotate(180deg);
    }
}

/* Missing Classes */
.legendary-border {
    box-shadow: 0 0 15px rgba(249, 115, 22, 0.5);
    animation: pulse-slow 2s ease-in-out infinite;
}

.artifact-border {
    box-shadow: 0 0 20px rgba(245, 158, 11, 0.6);
    animation: pulse-slow 3s ease-in-out infinite;
}

.mythic-border {
    box-shadow: 0 0 25px rgba(217, 70, 239, 0.7);
    animation: prismatic 4s ease-in-out infinite;
}

.animate-prismatic {
    animation: prismatic 6s linear infinite;
}

.animate-rotate-slow {
    animation: rotate-slow 8s linear infinite;
}

.animate-pulse-slow {
    animation: pulse-slow 3s ease-in-out infinite;
}

.animate-sparkle-rotate {
    animation: sparkle-rotate 4s ease-in-out infinite;
}

.animate-move-sparkle {
    animation: move-sparkle 3s linear infinite;
}

/* Missing Background Patterns */
.bg-game-pattern-epic {
    background-image:
        radial-gradient(circle at center, rgba(147, 51, 234, 0.15) 0%, transparent 50%),
        radial-gradient(circle at center, rgba(147, 51, 234, 0.1) 0%, transparent 35%);
    background-size: 48px 48px, 32px 32px;
    background-position: 0 0, 16px 16px;
}

.bg-game-pattern-legendary {
    background-image:
        linear-gradient(45deg, rgba(249, 115, 22, 0.15) 25%, transparent 25%),
        linear-gradient(-45deg, rgba(249, 115, 22, 0.1) 25%, transparent 25%);
    background-size: 48px 48px;
    animation: pattern-shift 20s linear infinite;
}

.bg-game-pattern-artifact {
    background-image:
        linear-gradient(45deg, rgba(245, 158, 11, 0.2) 25%, transparent 25%),
        radial-gradient(circle at center, rgba(245, 158, 11, 0.15) 0%, transparent 50%);
    background-size: 64px 64px, 48px 48px;
    animation: pattern-shift 30s linear infinite;
}

.bg-game-pattern-mythic {
    background-image:
        linear-gradient(45deg, rgba(217, 70, 239, 0.2) 25%, transparent 25%),
        radial-gradient(circle at center, rgba(217, 70, 239, 0.15) 0%, transparent 50%),
        radial-gradient(circle at center, rgba(34, 211, 238, 0.1) 0%, transparent 35%);
    background-size: 64px 64px, 48px 48px, 32px 32px;
    animation: prismatic 30s linear infinite;
}

/* Animation utility class referenced in rankStars */
.animate-floating {
    animation: floating 3s ease-in-out infinite;
}
</style>
