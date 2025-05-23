<template>
    <reusable-modal
      :show="isOpen"
      @close="close"
      :isLarge="false"
      :showFooter="false"
      modalClass="bg-[#1E2F4A] border border-[#328AF1]/30 rounded-lg overflow-hidden"
      :showModalBox="false"
      closeOnClick
      :showClose="true"
    >
      <template #title>
        <header class="relative text-center px-8 py-6 overflow-hidden">
          <!-- Gaming-themed background elements -->
          <div class="absolute inset-0">
            <!-- Base gradient background -->
            <div class="absolute inset-0 bg-gradient-to-br from-[#328AF1]/10 via-[#8B60ED]/10 to-[#21C8F6]/10"></div>

            <!-- Subtle grid pattern -->
            <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDUgTCA1IDAgTSAxNSAwIEwgMjAgNSBNIDAgMTUgTCA1IDIwIE0gMTUgMjAgTCAyMCAxNSIgc3Ryb2tlPSIjQkFEOUZDIiBzdHJva2Utd2lkdGg9IjAuNSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-10"></div>
          </div>

          <div class="flex flex-col items-center">
            <!-- Key icon with gaming-style glow -->
            <div class="relative mb-4">
              <div class="absolute -inset-3 bg-[#328AF1]/30 rounded-full blur-md"></div>
              <div class="relative p-2 rounded-full bg-[#328AF1]/10 border border-[#328AF1]/30">
                <KeyRound class="w-10 h-10 text-[#328AF1]" />
              </div>
            </div>

            <h2 class="text-3xl font-bold text-white">Password Recovery</h2>
            <p class="mt-2 text-[#BAD9FC] max-w-sm">
              Enter your email address and we'll send you a magical link to reset your password
            </p>
          </div>

          <!-- Divider -->
          <div class="h-px bg-gradient-to-r from-[#328AF1]/10 via-[#328AF1]/30 to-[#328AF1]/10 mt-6"></div>
        </header>
      </template>

      <template #body>
        <form @submit.prevent="submitForm" class="p-6 space-y-6">
          <!-- Email Field with gaming styling -->
          <div class="space-y-2">
            <label for="email" class="block text-sm font-medium text-[#BAD9FC]">Email Address</label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail class="h-5 w-5 text-[#328AF1]" />
              </div>
              <input
                id="email"
                v-model="form.email"
                type="email"
                placeholder="Enter your registered email"
                class="w-full pl-10 pr-4 py-3 bg-[#253D63] border border-[#328AF1]/30 rounded-lg text-white placeholder-[#BAD9FC]/50 focus:ring-2 focus:ring-[#328AF1]/50 focus:border-[#328AF1] transition-all duration-300 cursor-text"
              />
            </div>
          </div>

          <!-- Action Buttons with gaming styling -->
          <div class="space-y-4">
            <!-- Reset Button with game-themed styling -->
            <button
              type="submit"
              class="group relative w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-[#328AF1] to-[#8B60ED] text-white font-medium rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer"
            >
              <!-- Shine Effect -->
              <div class="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine"></div>

              <Send class="w-5 h-5" />
              <span>Send Recovery Scroll</span>
            </button>

            <!-- Info Box with gaming theme -->
            <div class="p-4 bg-[#253D63]/70 rounded-lg border border-[#328AF1]/20">
              <div class="flex items-start gap-3">
                <ScrollText class="w-5 h-5 text-[#328AF1] flex-shrink-0 mt-0.5" />
                <p class="text-sm text-[#BAD9FC]">
                  Check your inbox (and spam folder) if you don't receive the email within a few minutes. The recovery link will be valid for 60 minutes.
                </p>
              </div>
            </div>
          </div>

          <!-- Back to Login with gaming theme -->
          <div class="flex justify-center pt-4 border-t border-[#328AF1]/20">
            <a
              @click="close"
              class="text-sm text-[#BAD9FC] hover:text-[#328AF1] transition-colors duration-300 flex items-center gap-2 cursor-pointer"
            >
              <ArrowLeft class="w-4 h-4" />
              Return to Login Portal
            </a>
          </div>
        </form>
      </template>
    </reusable-modal>
  </template>

  <script setup>
  import { useForm } from "@inertiajs/vue3";
  import { useRecaptcha } from '../../../Composable/useRecaptcha';
  import { ReusableModal } from "@mariojgt/masterui/packages/index";
  import {
    KeyRound, Mail, Send, ScrollText,
    ArrowLeft
  } from 'lucide-vue-next';
  import { inject } from "vue";
  const route = inject('route');

  const { getToken, isLoading, error } = useRecaptcha();

  const emit = defineEmits(["closeModal"]);

  const form = useForm({
    email: "",
    recaptcha_token: "",
  });

  defineProps({
    isOpen: {
      type: Boolean,
      default: false,
    },
  });

  const close = () => {
    emit("closeModal", "isLoading");
  };

  const submitForm = async () => {
    form.recaptcha_token = await getToken('submit');
    emit("isLoading", true);
    form.post(route("password-reset.user"), {
      preserveState: true,
      onSuccess: () => {
        emit("isLoading", false);
        emit("closeModal");
      },
      onError: () => {
        emit("isLoading", false);
      },
    });
  };
  </script>

  <style scoped>
  @keyframes shine {
    from {
      left: -100%;
    }
    to {
      left: 100%;
    }
  }

  .animate-shine {
    animation: shine 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }

  /* Add cursor pointer to all interactive elements by default */
  button,
  a,
  input[type="submit"],
  .cursor-pointer,
  label[for] {
    cursor: pointer;
  }

  input.cursor-text {
    cursor: text;
  }
  </style>
