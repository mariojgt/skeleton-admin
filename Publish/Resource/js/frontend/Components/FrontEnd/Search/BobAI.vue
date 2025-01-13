<template>
    <div class="relative w-full sm:w-auto">
      <div class="absolute right-0 top-full mt-2 w-full bg-gray-900 rounded-xl shadow-2xl border border-gray-800 overflow-hidden">
        <div class="max-h-[500px] overflow-y-auto">
          <div class="px-4 py-3 border-b border-gray-800 last:border-b-0">
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0 w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                <Bot :size="24" class="text-blue-400" />
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-semibold text-white">Bob, the Game AI Assistant</p>
                <p class="text-sm text-gray-400">
                  Hello! I'm Bob, an AI assistant specialized in helping with game development. How can I assist you today?
                </p>
              </div>
            </div>
          </div>

          <div
            v-for="(message, index) in messages"
            :key="index"
            :class="[
              'px-4 py-3 border-b border-gray-800 last:border-b-0',
              message.isUser ? 'bg-gray-800' : ''
            ]"
          >
            <div class="flex items-start space-x-4">
              <div
                :class="[
                  'flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center',
                  message.isUser ? 'bg-blue-500' : 'bg-gray-800'
                ]"
              >
                <template v-if="message.isUser">
                  <User :size="24" class="text-white" />
                </template>
                <template v-else>
                  <Bot :size="24" class="text-blue-400" />
                </template>
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm" :class="[message.isUser ? 'text-white' : 'text-gray-400']">
                  {{ message.text }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-gray-900 border-t border-gray-800 px-4 py-3">
          <div class="flex items-center space-x-3">
            <input
              v-model="userInput"
              type="text"
              placeholder="Type your message..."
              class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              @keyup.enter="sendMessage"
            />
            <button
              @click="sendMessage"
              class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300"
            >
              <Send :size="20" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>

  <script setup>
  import { ref } from 'vue';
  import { Bot, User, Send } from 'lucide-vue-next';

  const messages = ref([
    {
      isUser: false,
      text: 'Hello! I\'m Bob, an AI assistant specialized in helping with game development. How can I assist you today?'
    }
  ]);

  const userInput = ref('');

  const sendMessage = () => {
    if (userInput.value.trim() !== '') {
      messages.value.push({
        isUser: true,
        text: userInput.value
      });

      // Simulate Bob's response
      setTimeout(() => {
        messages.value.push({
          isUser: false,
          text: 'Sure, I can help you with that. What kind of game are you working on?'
        });
      }, 1000);

      userInput.value = '';
    }
  };
  </script>

  <style scoped>
  /* Custom scrollbar for dark mode */
  *::-webkit-scrollbar {
    width: 8px;
  }
  *::-webkit-scrollbar-track {
    background: #1F2937;
  }
  *::-webkit-scrollbar-thumb {
    background: #374151;
    border-radius: 4px;
  }
  </style>
