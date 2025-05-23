<template>
    <reusable-modal
      :show="isOpen"
      @close="close"
      :isLarge="false"
      :showFooter="false"
      modalClass="bg-[#0F172A] border border-[#64FFDA]/20 rounded-lg overflow-hidden"
      :showModalBox="false"
      closeOnClick
      :showClose="true"
    >
      <template #title>
        <header class="text-center px-6 py-6">
          <!-- Simple, elegant header -->
          <div class="mb-4 inline-flex justify-center items-center w-14 h-14 rounded-full bg-[#64FFDA]/10 border border-[#64FFDA]/30">
            <LogIn class="w-7 h-7 text-[#64FFDA]" />
          </div>

          <h2 class="text-2xl font-bold text-white">Welcome Back</h2>
          <p class="mt-1 text-[#CBD5E1] text-sm">Sign in to continue your journey</p>
        </header>
      </template>

      <template #body>
        <form @submit.prevent="submitForm" class="p-6 space-y-4">
          <!-- Email Field - Clean, minimal design -->
          <div class="space-y-1.5">
            <label for="email" class="block text-sm font-medium text-[#CBD5E1]">Email</label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail class="h-4 w-4 text-[#64FFDA]" />
              </div>
              <input
                id="email"
                v-model="form.email"
                type="email"
                placeholder="you@example.com"
                class="w-full pl-10 pr-4 py-2.5 bg-[#1E293B] border border-[#1E293B] rounded-lg text-white placeholder-[#CBD5E1]/40 focus:ring-1 focus:ring-[#64FFDA] focus:border-[#64FFDA] transition-colors"
              />
            </div>
          </div>

          <!-- Password Field - Clean, minimal design -->
          <div class="space-y-1.5">
            <label for="password" class="block text-sm font-medium text-[#CBD5E1]">Password</label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock class="h-4 w-4 text-[#64FFDA]" />
              </div>
              <input
                id="password"
                v-model="form.password"
                type="password"
                placeholder="••••••••"
                class="w-full pl-10 pr-4 py-2.5 bg-[#1E293B] border border-[#1E293B] rounded-lg text-white placeholder-[#CBD5E1]/40 focus:ring-1 focus:ring-[#64FFDA] focus:border-[#64FFDA] transition-colors"
              />
            </div>
          </div>

          <!-- Action Buttons - Simple, focused design -->
          <div class="space-y-3 pt-3">
            <!-- Login Button -->
            <button
              type="submit"
              class="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#64FFDA] text-[#0F172A] font-medium rounded-lg hover:bg-[#64FFDA]/90 transition-colors"
            >
              <Shield class="w-4 h-4" />
              <span>Sign In</span>
            </button>

            <!-- Social Login Divider -->
            <div class="relative my-4">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full h-px bg-[#1E293B]"></div>
              </div>
              <div class="relative flex justify-center">
                <span class="px-2 text-xs text-[#CBD5E1] bg-[#0F172A]">or continue with</span>
              </div>
            </div>

            <!-- Social Login Buttons - Clean grid layout -->
            <div class="grid grid-cols-2 gap-3">
              <!-- GitHub Login -->
              <button
                type="button"
                @click="socialLiteRegister('github')"
                class="flex items-center justify-center gap-2 px-4 py-2.5 bg-[#1E293B] text-white rounded-lg hover:bg-[#1E293B]/80 transition-colors"
              >
                <Github class="w-4 h-4" />
                <span>GitHub</span>
              </button>

              <!-- Google Login -->
              <button
                type="button"
                @click="socialLiteRegister('google')"
                class="flex items-center justify-center gap-2 px-4 py-2.5 bg-[#1E293B] text-white rounded-lg hover:bg-[#1E293B]/80 transition-colors"
              >
                <svg class="w-4 h-4" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                  <path fill="none" d="M0 0h48v48H0z"></path>
                </svg>
                <span>Google</span>
              </button>
            </div>
          </div>

          <!-- Links - Easy help options -->
          <div class="flex items-center justify-between pt-4 border-t border-[#1E293B] text-xs">
            <button
              type="button"
              @click="forgotPassword"
              class="text-[#CBD5E1] hover:text-[#64FFDA] transition-colors flex items-center gap-1"
            >
              <KeyRound class="w-3 h-3" />
              Forgot Password?
            </button>
            <button
              type="button"
              @click="register"
              class="text-[#CBD5E1] hover:text-[#8B5CF6] transition-colors flex items-center gap-1"
            >
              <UserPlus class="w-3 h-3" />
              Create Account
            </button>
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
    Mail, Lock, LogIn, Github, Shield, KeyRound, UserPlus
  } from 'lucide-vue-next';

  const { getToken } = useRecaptcha();

  import { inject } from "vue";
  const route = inject('route');
  const emit = defineEmits(["closeModal", "register", "forgotPassword", "isLoading"]);

  const form = useForm({
    email: "",
    password: "",
    recaptcha_token: ""
  });

  defineProps({
    isOpen: {
      type: Boolean,
      default: false,
    },
  });

  const close = () => {
    emit("closeModal");
  };

  const register = () => {
    emit("register");
  };

  const forgotPassword = () => {
    emit("forgotPassword");
  };

  const submitForm = async () => {
    form.recaptcha_token = await getToken('submit');
    emit("isLoading", true);
    form.post(route("login.user"), {
      preserveState: false,
      onSuccess: () => {
        emit("isLoading", false);
        emit("closeModal");
      },
      onError: () => {
        emit("isLoading", false);
      },
    });
  };

  const socialLiteRegister = async (provider) => {
    window.location.href = route("social.redirect", provider);
  };
  </script>

  <style scoped>
  /* Add cursor pointer to all interactive elements by default */
  button,
  a,
  input[type="submit"],
  .cursor-pointer,
  label[for] {
    cursor: pointer;
  }

  /* Input focus styles */
  input:focus {
    outline: none;
  }

  /* Mobile optimizations */
  @media (max-width: 640px) {
    .grid-cols-2 {
      grid-template-columns: 1fr;
    }
  }
  </style>
