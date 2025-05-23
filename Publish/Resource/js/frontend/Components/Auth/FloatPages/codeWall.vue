<template>
    <reusable-modal
      :show="isOpen"
      @close="close"
      :isLarge="false"
      :showFooter="false"
      modalClass="bg-[#0F172A] border border-[#F59E0B]/30 rounded-lg overflow-hidden"
      :showModalBox="false"
      closeOnClick
      :showClose="true"
    >
      <template #title>
        <header class="text-center px-6 py-6">
          <!-- Shield icon -->
          <div class="mb-4 inline-flex justify-center items-center w-14 h-14 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/30">
            <Shield class="w-7 h-7 text-[#F59E0B]" />
          </div>

          <h2 class="text-2xl font-bold text-white">Gate Guardian</h2>
          <p class="mt-1 text-[#CBD5E1] text-sm">
            {{ recoveryMode ? 'Use your recovery scroll to bypass security' : 'Enter the magical code to proceed' }}
          </p>
        </header>
      </template>

      <template #body>
        <div class="p-6 space-y-4">
          <!-- Regular 2FA Form -->
          <form v-if="!recoveryMode" @submit.prevent="submitForm" class="space-y-4">
            <div class="space-y-1.5">
              <label for="code" class="block text-sm font-medium text-[#CBD5E1]">Authentication Code</label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <KeyRound class="h-4 w-4 text-[#F59E0B]" />
                </div>
                <input
                  id="code"
                  v-model="form.code"
                  type="text"
                  inputmode="numeric"
                  autocomplete="one-time-code"
                  placeholder="Enter 6-digit code"
                  maxlength="6"
                  class="w-full pl-10 pr-4 py-2.5 bg-[#1E293B] border border-[#1E293B] rounded-lg text-white placeholder-[#CBD5E1]/40 focus:ring-1 focus:ring-[#F59E0B] focus:border-[#F59E0B] transition-colors cursor-text"
                />
              </div>
              <p class="text-xs text-[#CBD5E1]/70 mt-1">Enter the code from your authenticator app</p>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              class="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#F59E0B] text-[#0F172A] font-medium rounded-lg hover:bg-[#F59E0B]/90 transition-colors"
            >
              <Unlock class="w-4 h-4" />
              <span>Unlock Gate</span>
            </button>
          </form>

          <!-- Recovery Code Form -->
          <form v-if="recoveryMode" @submit.prevent="submitFormRecovery" class="space-y-4">
            <div class="space-y-1.5">
              <label for="recovery-code" class="block text-sm font-medium text-[#CBD5E1]">Recovery Scroll</label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Key class="h-4 w-4 text-[#F59E0B]" />
                </div>
                <input
                  id="recovery-code"
                  v-model="form.code"
                  type="text"
                  placeholder="xxxx-xxxx-xxxx-xxxx"
                  class="w-full pl-10 pr-4 py-2.5 bg-[#1E293B] border border-[#1E293B] rounded-lg text-white placeholder-[#CBD5E1]/40 focus:ring-1 focus:ring-[#F59E0B] focus:border-[#F59E0B] transition-colors cursor-text"
                />
              </div>
              <p class="text-xs text-[#CBD5E1]/70 mt-1">Enter the recovery code from your backup</p>
            </div>

            <!-- Recovery Button -->
            <button
              type="submit"
              class="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#8B5CF6] text-white font-medium rounded-lg hover:bg-[#8B5CF6]/90 transition-colors"
            >
              <KeyRound class="w-4 h-4" />
              <span>Use Secret Passage</span>
            </button>
          </form>

          <!-- Info Box -->
          <div class="p-3 bg-[#1E293B] rounded-lg">
            <div class="flex items-start gap-2">
              <Info class="w-4 h-4 text-[#F59E0B] flex-shrink-0 mt-0.5" />
              <p class="text-xs text-[#CBD5E1]">
                {{ recoveryMode
                  ? 'Recovery codes can only be used once. Please generate new codes after successful login.'
                  : 'The code will expire after 30 seconds. Make sure your device time is correctly synchronized.'
                }}
              </p>
            </div>
          </div>

          <!-- Toggle Mode Button -->
          <div class="pt-2">
            <button
              @click="enableRecoveryMode(!recoveryMode)"
              class="w-full px-4 py-2 text-[#CBD5E1] hover:text-[#F59E0B] text-sm font-medium transition-colors flex items-center justify-center gap-1"
            >
              <component :is="recoveryMode ? 'ArrowLeft' : 'Scroll'" class="w-3.5 h-3.5" />
              {{ recoveryMode ? 'Return to code entry' : 'Use recovery code instead' }}
            </button>
          </div>
        </div>
      </template>
    </reusable-modal>
  </template>

  <script setup>
  import { useForm } from "@inertiajs/vue3";
  import { useRecaptcha } from '../../../Composable/useRecaptcha';
  import { ReusableModal } from "@mariojgt/masterui/packages/index";
  import {
    Shield, KeyRound, Key, Info,
    Unlock, ArrowLeft, Scroll
  } from 'lucide-vue-next';
  import { inject, ref } from "vue";

  const { getToken } = useRecaptcha();

  const emit = defineEmits(["closeModal", "isLoading"]);

  const form = useForm({
    code: "",
    recaptcha_token: "",
  });
  const route = inject('route');

  defineProps({
    isOpen: {
      type: Boolean,
      default: false,
    },
  });

  const close = () => {
    emit("closeModal");
  };

  const submitForm = async () => {
    form.recaptcha_token = await getToken('submit');
    emit("isLoading", true);
    form.post(route("castle.validate"), {
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

  const submitFormRecovery = () => {
    emit("isLoading", true);
    form.post(route("castle.unlock.backup.code"), {
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

  const recoveryMode = ref(false);

  const enableRecoveryMode = (enable = false) => {
    recoveryMode.value = enable;
  };
  </script>

  <style scoped>
  /* Input focus styles */
  input:focus {
    outline: none;
  }

  /* Custom cursor styles */
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

  /* Mobile optimizations */
  @media (max-width: 640px) {
    .py-2.5 {
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
    }

    .text-2xl {
      font-size: 1.25rem;
      line-height: 1.75rem;
    }
  }
  </style>
