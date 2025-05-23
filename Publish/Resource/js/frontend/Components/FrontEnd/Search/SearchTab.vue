<template>
    <div class="bg-[#1E2A42]/90 backdrop-blur-sm border-b border-[#328AF1]/30 relative rpg-tab-container">
      <!-- Fantasy corner elements -->
      <div class="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#328AF1] opacity-50 corner-accent"></div>
      <div class="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#328AF1] opacity-50 corner-accent"></div>

      <!-- Magical background elements -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDUgTCA1IDAgTSAxNSAwIEwgMjAgNSBNIDAgMTUgTCA1IDIwIE0gMTUgMjAgTCAyMCAxNSIgc3Ryb2tlPSIjQkFEOUZDIiBzdHJva2Utd2lkdGg9IjAuNSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-10 fantasy-grid"></div>
      </div>

      <div class="px-2 py-3 sm:px-6 relative z-10">
        <!-- Mobile-friendly tabs layout with better spacing -->
        <div class="flex flex-wrap items-center justify-between">
          <!-- Scrollable Tabs Container -->
          <div class="flex items-center gap-1 sm:gap-6 overflow-x-auto hide-scrollbar pb-1 w-full pr-10">
            <!-- Search Tab -->
            <button
              class="rpg-tab flex items-center gap-1 min-w-max px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg transition-all duration-300 relative group flex-shrink-0"
              :class="modelValue === 'search'
                ? 'text-white bg-[#253D63] border-2 border-[#328AF1]/30 shadow-glow-blue'
                : 'text-[#BAD9FC] hover:text-white border-2 border-transparent'"
              @click="updateActiveTab('search')"
            >
              <Search class="w-4 h-4" />
              <span class="text-xs sm:text-sm font-medium">Search</span>
              <div
                class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#328AF1] to-[#8B60ED] transform origin-left transition-transform duration-300 scale-x-0 rpg-tab-indicator"
                :class="{ 'scale-x-100': modelValue === 'search' }"
              ></div>
            </button>

            <!-- Chat Tab -->
            <button
              class="rpg-tab flex items-center gap-1 min-w-max px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg transition-all duration-300 relative group flex-shrink-0"
              :class="modelValue === 'chat'
                ? 'text-white bg-[#253D63] border-2 border-[#8B60ED]/30 shadow-glow-purple'
                : 'text-[#BAD9FC] hover:text-white border-2 border-transparent'"
              @click="updateActiveTab('chat')"
            >
              <MessageSquare class="w-4 h-4" />
              <span class="text-xs sm:text-sm font-medium">AI</span>
              <div
                class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#8B60ED] to-[#B372BD] transform origin-left transition-transform duration-300 scale-x-0 rpg-tab-indicator"
                :class="{ 'scale-x-100': modelValue === 'chat' }"
              ></div>
            </button>

            <!-- My Usage Tab -->
            <button
              class="rpg-tab flex items-center gap-1 min-w-max px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg transition-all duration-300 relative group flex-shrink-0"
              :class="modelValue === 'dashboard'
                ? 'text-white bg-[#253D63] border-2 border-[#F19A1A]/30 shadow-glow-orange'
                : 'text-[#BAD9FC] hover:text-white border-2 border-transparent'"
              @click="updateActiveTab('dashboard')"
            >
              <KeySquare class="w-4 h-4" />
              <span class="text-xs sm:text-sm font-medium">Usage</span>
              <div
                class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#F19A1A] to-[#FFC73C] transform origin-left transition-transform duration-300 scale-x-0 rpg-tab-indicator"
                :class="{ 'scale-x-100': modelValue === 'capabilities' }"
              ></div>
            </button>

            <!-- Notifications Tab -->
            <button
              class="rpg-tab flex items-center gap-1 min-w-max px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg transition-all duration-300 relative group flex-shrink-0"
              :class="modelValue === 'notifications'
                ? 'text-white bg-[#253D63] border-2 border-[#1AAB8B]/30 shadow-glow-green'
                : 'text-[#BAD9FC] hover:text-white border-2 border-transparent'"
              @click="updateActiveTab('notifications')"
            >
              <Bell class="w-4 h-4" />
              <span class="text-xs sm:text-sm font-medium">Alerts</span>
              <div
                class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#1AAB8B] to-[#6EDCC4] transform origin-left transition-transform duration-300 scale-x-0 rpg-tab-indicator"
                :class="{ 'scale-x-100': modelValue === 'notifications' }"
              ></div>
            </button>
          </div>

          <!-- Close Button with RPG styling - positioned absolutely for mobile -->
          <button
            @click="$emit('close')"
            class="rpg-close-button absolute top-3 right-2 sm:relative sm:top-0 sm:right-0 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#253D63] text-[#BAD9FC] hover:text-white transition-colors duration-300 border border-[#328AF1]/30 group overflow-hidden"
          >
            <!-- Button shine effect -->
            <div class="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <X class="w-4 h-4 sm:w-5 sm:h-5 relative z-10" />
          </button>
        </div>
      </div>
    </div>
  </template>

  <script setup>
  import { Search, MessageSquare, Bell, X, KeySquare } from 'lucide-vue-next';

  const props = defineProps({
    modelValue: {
      type: String,
      default: 'search'
    }
  });

  const emit = defineEmits(['update:modelValue', 'close', 'tab-changed']);

  const updateActiveTab = (tab) => {
    emit('update:modelValue', tab);
    emit('tab-changed', tab);
  };
  </script>

  <style scoped>
  .rpg-tab-container {
    position: relative;
    overflow: hidden;
  }

  /* Fantasy Grid Animation */
  .fantasy-grid {
    animation: fantasy-grid-pulse 10s ease-in-out infinite;
  }

  @keyframes fantasy-grid-pulse {
    0%, 100% { opacity: 0.05; }
    50% { opacity: 0.15; }
  }

  /* Corner Accents Animation */
  .corner-accent {
    transition: all 0.5s ease;
  }

  .rpg-tab-container:hover .corner-accent {
    opacity: 0.8;
  }

  /* RPG Tab Styling */
  .rpg-tab {
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
  }

  .rpg-tab:hover {
    transform: translateY(-2px);
  }

  /* RPG Tab Indicator Animation */
  .rpg-tab-indicator {
    height: 2px;
    border-radius: 1px;
    box-shadow: 0 0 8px rgba(50, 138, 241, 0.6);
  }

  /* Close Button Glow */
  .rpg-close-button:hover {
    box-shadow: 0 0 10px rgba(50, 138, 241, 0.3);
  }

  /* Hide scrollbar */
  .hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }

  /* Glow effects */
  .shadow-glow-blue {
    box-shadow: 0 0 10px rgba(50, 138, 241, 0.2);
  }

  .shadow-glow-purple {
    box-shadow: 0 0 10px rgba(139, 96, 237, 0.2);
  }

  .shadow-glow-green {
    box-shadow: 0 0 10px rgba(26, 171, 139, 0.2);
  }

  .shadow-glow-orange {
    box-shadow: 0 0 10px rgba(241, 154, 26, 0.2);
  }
  </style>
