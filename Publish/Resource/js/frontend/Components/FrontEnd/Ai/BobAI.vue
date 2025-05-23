<template>
    <div
      class="w-full max-w-4xl bg-dark-200/95 backdrop-blur-sm rounded-xl shadow-2xl border border-dark-100/50 overflow-hidden"
    >
      <!-- Header -->
      <div class="px-6 py-4 border-b border-dark-100/50 bg-gradient-to-r from-dark-300/50 to-dark-200/50">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-4">
            <div class="relative">
              <div class="absolute inset-0 bg-blue-500/20 rounded-xl animate-pulse"></div>
              <div
                class="relative w-12 h-12 bg-blue-500/10 backdrop-blur-sm rounded-xl flex items-center justify-center group"
              >
                <Bot class="w-7 h-7 text-blue-400 transition-transform duration-300 group-hover:scale-110" />
              </div>
            </div>
            <div class="space-y-1">
              <div class="flex items-center space-x-2">
                <h2 class="text-xl font-bold text-white">Game Dev Assistant</h2>
                <div class="flex space-x-1 items-center text-emerald-400 text-xs">
                  <span class="relative flex h-2 w-2">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span>Online</span>
                </div>
              </div>
              <p class="text-sm text-gray-400">Specialized in Unreal Engine & Unity</p>
            </div>
          </div>
          <div class="flex items-center space-x-4">
            <!-- Blueprint Mode Toggle -->
            <label class="flex flex-col items-start space-y-1 text-sm text-white">
              <div class="flex items-center space-x-2">
                <input type="checkbox" v-model="blueprintMode" class="form-checkbox text-blue-500 rounded" />
                <span>Blueprint Mode</span>
              </div>
              <p class="text-xs text-gray-400 italic">
                Uses real Unreal Engine Blueprint nodes only — no custom scripts.
              </p>
            </label>

            <!-- Clear Chat -->
            <button @click="clearChat" class="p-2 text-gray-400 hover:text-white hover:bg-dark-300/50 rounded-lg">
              <Trash2 class="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <!-- Messages -->
      <div ref="chatContainer" class="min-h-[400px] max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-dark-100 scrollbar-track-dark-300/50">
        <div v-for="(message, index) in messages" :key="index" class="px-6 py-4 border-b border-dark-100/50">
          <div class="flex space-x-4">
            <div class="flex-shrink-0">
              <div :class="[
                'w-10 h-10 rounded-lg flex items-center justify-center',
                message.role === 'user' ? 'bg-blue-500/20' : 'bg-blue-500/10'
              ]">
                <component :is="message.role === 'user' ? User : Bot" class="w-5 h-5 text-blue-400" />
              </div>
            </div>

            <div class="flex-1 min-w-0">
              <div class="flex items-center justify-between">
                <p class="text-sm font-medium text-white">{{ message.role === 'user' ? 'You' : 'Game Dev Assistant' }}</p>
                <span class="text-xs text-gray-500">{{ formatTime(message.timestamp) }}</span>
              </div>

              <Markdown
                :content="message.content"
                class="text-sm text-gray-300"
                :class="{
                  'bg-blue-900/30 p-4 rounded-xl text-blue-100 font-mono whitespace-pre-wrap mt-2': message.content.trim().startsWith('Begin Object Class=')
                }"
              />

              <div v-if="message.content.trim().startsWith('Begin Object Class=')" class="mt-2">
                <button
                  @click="copyMessage(message.content)"
                  class="text-xs px-3 py-1 bg-blue-500/20 hover:bg-blue-500/30 text-blue-200 rounded transition"
                >
                  📋 Copy Blueprint
                </button>
                <a
                  :href="`https://blueprintue.com/new?code=${encodeURIComponent(message.content)}`"
                  target="_blank"
                  class="text-blue-400 text-xs underline ml-2"
                >
                  View in BlueprintUE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Input -->
      <div class="border-t border-dark-100/50 p-4 bg-gradient-to-b from-transparent to-dark-300/20">
        <form @submit.prevent="sendMessage">
          <textarea
            v-model="userInput"
            rows="3"
            placeholder="Type your message..."
            class="w-full bg-dark-300/50 text-gray-200 rounded-xl p-4 border border-dark-100/50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none"
            :disabled="isLoading"
          ></textarea>
          <div class="flex justify-end mt-2">
            <button
              type="submit"
              class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
              :disabled="isLoading || !userInput.trim()"
            >
              <span v-if="isLoading">Generating...</span>
              <span v-else>Send</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>

  <script setup lang="ts">
  import { ref, nextTick, watch } from 'vue';
  import { Bot, User, Trash2 } from 'lucide-vue-next';
  import { api } from '../../../Boot/axios';
  import Markdown from '../Comment/Markdown.vue';
  import { startWindToast } from '@mariojgt/wind-notify/packages/index.js';

  const blueprintMode = ref(false);
  const messages = ref([
    {
      role: 'assistant',
      content: "👋 Hello! I'm your Game Dev Assistant. How can I help you today?",
      timestamp: Date.now()
    }
  ]);
  const userInput = ref('');
  const isLoading = ref(false);
  const chatContainer = ref<HTMLElement | null>(null);

  const formatTime = (timestamp: number): string => {
    return new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    }).format(timestamp);
  };

  const scrollToBottom = async () => {
    await nextTick();
    if (chatContainer.value) {
      chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
    }
  };

  const clearChat = () => {
    messages.value = [messages.value[0]];
    startWindToast('info', 'Chat cleared', 'info');
  };

  const copyMessage = (text: string) => {
    navigator.clipboard.writeText(text);
    startWindToast('success', 'Copied to clipboard', 'success');
  };

  const sendMessage = async () => {
    if (!userInput.value.trim() || isLoading.value) return;

    messages.value.push({
      role: 'user',
      content: userInput.value.trim(),
      timestamp: Date.now()
    });

    const currentInput = userInput.value;
    userInput.value = '';
    await scrollToBottom();

    try {
      isLoading.value = true;

      const msgPayload = [...messages.value.map(({ role, content }) => ({ role, content }))];

      if (blueprintMode.value) {
        msgPayload.unshift({
          role: 'system',
          content: `You are Bob, an AI assistant specialized in game development using Unreal Engine.

  Your job is to write Unreal Engine Blueprint node code **strictly using existing built-in nodes**.

  ✅ Format:
  - Output only valid Blueprint node code that starts with \`Begin Object Class=/Script/...\`
  - Only use real Unreal Engine Blueprint classes and functions.
  - Do NOT create new or imaginary nodes or functions.

  ❗️ If the request cannot be achieved using real built-in Blueprint nodes, say:
  > \\"This feature can't be built using native nodes alone. Consider using C++ or a plugin.\\"

  Use the node paste format compatible with BlueprintUE.com or Unreal Editor paste.`
        });
      }

      const response = await api.post(route('api.gamedev.chat'), {
        messages: msgPayload
      });

      if (response.data.success) {
        messages.value.push({
          role: 'assistant',
          content: response.data.message,
          timestamp: Date.now()
        });
      } else {
        throw new Error(response.data.message || 'Failed to get response');
      }
    } catch (error) {
      startWindToast('error', 'Failed to get AI response. Please try again.', 'error');
      console.error('Chat error:', error);
      messages.value = messages.value.slice(0, -1);
      userInput.value = currentInput;
    } finally {
      isLoading.value = false;
      await scrollToBottom();
    }
  };

  watch(messages, scrollToBottom, { deep: true });
  </script>

  <style scoped>
  .scrollbar-thin {
    scrollbar-width: thin;
  }
  .scrollbar-thumb-dark-100::-webkit-scrollbar-thumb {
    background-color: #2a2a2a;
    border-radius: 10px;
  }
  .scrollbar-track-dark-300\/50::-webkit-scrollbar-track {
    background-color: #1a1a1a;
  }
  </style>
