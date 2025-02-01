# LoadingScreen.vue
<template>
  <div v-if="isLoading" class="fixed inset-0 z-[9999] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
    <!-- Backdrop Layer -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Abstract shapes -->
      <div v-for="n in 3" :key="`shape-${n}`"
        class="absolute blur-3xl opacity-30 animate-float"
        :class="[
          n === 1 ? 'bg-blue-500/20 top-1/4 -left-20 w-96 h-96' :
          n === 2 ? 'bg-purple-500/20 bottom-1/4 -right-20 w-96 h-96' :
          'bg-cyan-500/20 top-1/2 left-1/2 w-80 h-80'
        ]"
      />
    </div>

    <!-- Main Content -->
    <div class="relative h-full flex flex-col items-center justify-center px-4">
      <!-- Decorative Grid Lines -->
      <div class="absolute inset-0 grid grid-cols-8 gap-4 opacity-5">
        <div v-for="n in 8" :key="`grid-${n}`" class="h-full w-px bg-gradient-to-b from-transparent via-white to-transparent" />
      </div>

      <!-- Central Icon Composition -->
      <div class="relative mb-16 scale-in">
        <!-- Main Logo -->
        <div class="relative">
          <Command
            class="w-32 h-32 text-blue-500/80 animate-pulse"
            strokeWidth={1}
          />
          <Cpu
            class="absolute inset-0 w-32 h-32 text-purple-500/80 animate-spin-slow"
            strokeWidth={1}
          />
          <Hexagon
            class="absolute inset-0 w-32 h-32 text-cyan-500/80 animate-reverse-spin"
            strokeWidth={1}
          />
        </div>

        <!-- Orbiting Icons -->
        <div class="absolute -inset-8">
          <div class="relative w-full h-full animate-spin-slower">
            <div class="absolute grid grid-cols-2 gap-32">
              <Server class="w-8 h-8 text-blue-400" />
              <Database class="w-8 h-8 text-purple-400" />
              <Workflow class="w-8 h-8 text-cyan-400" />
              <Layers class="w-8 h-8 text-blue-400" />
            </div>
          </div>
        </div>
      </div>

      <!-- Game Title -->
      <h1 class="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 animate-gradient-x mb-12 tracking-tighter">
        Loading Game...
      </h1>

      <!-- Progress Bar System -->
      <div class="w-full max-w-md space-y-2 mb-8">
        <!-- Main Progress -->
        <div class="relative h-1 bg-slate-800/50 rounded-full overflow-hidden">
          <div class="absolute h-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 transition-all duration-300"
            :style="{ width: `${progress}%` }">
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine"></div>
          </div>
        </div>

        <!-- Loading Status -->
        <div class="flex justify-between items-center text-sm">
          <div class="flex items-center space-x-2 text-slate-400">
            <Loader2 class="w-4 h-4 animate-spin" />
            <span>{{ loadingTips[currentTip] }}</span>
          </div>
          <span class="text-blue-400 font-mono">{{ progress }}%</span>
        </div>
      </div>

      <!-- System Status Icons -->
      <div class="flex space-x-8 mb-8">
        <div v-for="(status, index) in systemStatus"
          :key="index"
          class="flex flex-col items-center space-y-2"
        >
          <component
            :is="status.icon"
            class="w-6 h-6"
            :class="progress > status.activeAfter ? 'text-green-400' : 'text-slate-600'"
          />
          <span class="text-xs text-slate-400">{{ status.label }}</span>
        </div>
      </div>

      <!-- "Press Any Key" Prompt -->
      <transition name="fade">
        <div v-if="progress === 100"
          class="absolute bottom-12 left-0 right-0 text-center">
          <div class="inline-flex items-center space-x-2 text-blue-400 text-xl animate-bounce">
            <ArrowRight class="w-6 h-6" />
            <span>Press Any Key to Start</span>
            <ArrowLeft class="w-6 h-6" />
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import {
  Command,
  Cpu,
  Hexagon,
  Server,
  Database,
  Workflow,
  Layers,
  Loader2,
  ArrowRight,
  ArrowLeft,
  Shield,
  Wifi,
  HardDrive,
  Zap
} from 'lucide-vue-next';

// Props
const props = defineProps({
  isLoading: {
    type: Boolean,
    default: false,
  }
});

// State
const progress = ref(0);
const currentTip = ref(0);

// System status indicators
const systemStatus = [
  { icon: Shield, label: 'Security', activeAfter: 25 },
  { icon: Wifi, label: 'Network', activeAfter: 50 },
  { icon: HardDrive, label: 'Storage', activeAfter: 75 },
  { icon: Zap, label: 'Power', activeAfter: 90 }
];

// Loading tips
const loadingTips = [
  "Initializing Core Systems...",
  "Establishing Neural Links...",
  "Synchronizing Data Streams...",
  "Calibrating Quantum Matrix...",
  "Loading Enhanced Graphics...",
  "Optimizing Network Protocols..."
];

// Intervals
let progressInterval;
let tipInterval;

// Lifecycle hooks
onMounted(() => {
  // Progress animation
  progressInterval = setInterval(() => {
    if (progress.value < 100) {
      progress.value += 1;
    }
  }, 50);

  // Rotate tips
  tipInterval = setInterval(() => {
    currentTip.value = (currentTip.value + 1) % loadingTips.length;
  }, 3000);
});

onUnmounted(() => {
  clearInterval(progressInterval);
  clearInterval(tipInterval);
});
</script>

<style scoped>
@keyframes spin-slow {
  to {
    transform: rotate(360deg);
  }
}

@keyframes spin-slower {
  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 8s linear infinite;
}

.animate-spin-slower {
  animation: spin-slower 15s linear infinite;
}

.animate-reverse-spin {
  animation: spin-slow 12s linear infinite reverse;
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(10px, -10px);
  }
}

.animate-float {
  animation: float 8s ease-in-out infinite;
}

@keyframes gradient-x {
  0%, 100% {
    background-size: 200% 100%;
    background-position: left center;
  }
  50% {
    background-position: right center;
  }
}

.animate-gradient-x {
  animation: gradient-x 8s linear infinite;
}

@keyframes shine {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.animate-shine {
  animation: shine 2s infinite;
}

.scale-in {
  animation: scale-in 0.5s ease-out;
}

@keyframes scale-in {
  0% {
    transform: scale(0.9);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
