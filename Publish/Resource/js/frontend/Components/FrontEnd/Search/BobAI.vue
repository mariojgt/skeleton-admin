<template>
    <div
        class="w-full max-w-4xl bg-dark-200/95 backdrop-blur-sm rounded-xl shadow-2xl border border-dark-100/50 overflow-hidden">
        <!-- Header with Pulse Animation -->
        <div class="px-6 py-4 border-b border-dark-100/50 bg-gradient-to-r from-dark-300/50 to-dark-200/50">
            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-4">
                    <div class="relative">
                        <div class="absolute inset-0 bg-blue-500/20 rounded-xl animate-pulse"></div>
                        <div
                            class="relative w-12 h-12 bg-blue-500/10 backdrop-blur-sm rounded-xl flex items-center justify-center group">
                            <Bot
                                class="w-7 h-7 text-blue-400 transition-transform duration-300 group-hover:scale-110" />
                        </div>
                    </div>
                    <div class="space-y-1">
                        <div class="flex items-center space-x-2">
                            <h2 class="text-xl font-bold text-white">Game Dev Assistant</h2>
                            <div class="flex space-x-1 items-center text-emerald-400 text-xs">
                                <span class="relative flex h-2 w-2">
                                    <span
                                        class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                <span>Online</span>
                            </div>
                        </div>
                        <p class="text-sm text-gray-400">Specialized in Unreal Engine & Unity</p>
                    </div>
                </div>

                <!-- Action Buttons -->
                <div class="flex items-center space-x-2">
                    <!-- Tips Button -->
                    <button @click="showTips = !showTips"
                        class="p-2 text-gray-400 hover:text-white hover:bg-dark-300/50 rounded-lg transition-all duration-200 group relative"
                        title="Usage tips">
                        <HelpCircle class="w-5 h-5 transition-transform duration-200 group-hover:rotate-12" />
                    </button>

                    <!-- Clear Chat -->
                    <button @click="clearChat"
                        class="p-2 text-gray-400 hover:text-white hover:bg-dark-300/50 rounded-lg transition-all duration-200 group"
                        title="Clear chat">
                        <Trash2 class="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
                    </button>

                    <!-- Auto Scroll -->
                    <button class="p-2 rounded-lg transition-all duration-200 group relative" :class="[
                        autoScroll ? 'text-blue-400 bg-blue-500/10' : 'text-gray-400 hover:text-white hover:bg-dark-300/50'
                    ]" @click="toggleAutoScroll" title="Toggle auto-scroll">
                        <ArrowDown class="w-5 h-5 transition-transform duration-200"
                            :class="{ 'group-hover:-translate-y-1': !autoScroll, 'group-hover:translate-y-1': autoScroll }" />
                    </button>
                </div>
            </div>
        </div>

        <!-- Tips Panel -->
        <div v-if="showTips" class="bg-dark-300/50 border-b border-dark-100/50 px-6 py-4">
            <div class="flex items-start space-x-4">
                <div class="p-2 bg-blue-500/10 rounded-lg">
                    <Lightbulb class="w-5 h-5 text-blue-400" />
                </div>
                <div class="flex-1 space-y-2">
                    <h3 class="text-sm font-medium text-white">Pro Tips:</h3>
                    <ul class="text-sm text-gray-400 space-y-1">
                        <li class="flex items-center space-x-2">
                            <Terminal class="w-4 h-4" />
                            <span>Use `code blocks` for code snippets</span>
                        </li>
                        <li class="flex items-center space-x-2">
                            <ListOrdered class="w-4 h-4" />
                            <span>Structure your questions clearly</span>
                        </li>
                        <li class="flex items-center space-x-2">
                            <Sparkles class="w-4 h-4" />
                            <span>Press Enter to send, Shift+Enter for new line</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Chat Messages -->
        <div ref="chatContainer"
            class="min-h-[400px] max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-dark-100 scrollbar-track-dark-300/50">
            <TransitionGroup enter-active-class="transition-all duration-500 ease-out"
                enter-from-class="opacity-0 transform translate-y-4 scale-95"
                enter-to-class="opacity-100 transform translate-y-0 scale-100"
                leave-active-class="transition-all duration-300 ease-in"
                leave-from-class="opacity-100 transform scale-100" leave-to-class="opacity-0 transform scale-95">
                <div v-for="(message, index) in messages" :key="index" :class="[
                    'px-6 py-4 border-b border-dark-100/50 transition-colors duration-300',
                    message.role === 'user' ? 'bg-dark-300/30 hover:bg-dark-300/40' : 'hover:bg-dark-300/10'
                ]">
                    <div class="flex space-x-4">
                        <!-- Animated Avatar -->
                        <div class="flex-shrink-0">
                            <div :class="[
                                'w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 group',
                                message.role === 'user' ? 'bg-blue-500/20 hover:bg-blue-500/30' : 'bg-blue-500/10 hover:bg-blue-500/20'
                            ]">
                                <component :is="message.role === 'user' ? User : Bot"
                                    class="w-5 h-5 text-blue-400 transition-transform duration-300 group-hover:scale-110" />
                            </div>
                        </div>

                        <!-- Message Content -->
                        <div class="flex-1 min-w-0 space-y-1">
                            <div class="flex items-center justify-between">
                                <div class="flex items-center space-x-2">
                                    <p class="text-sm font-medium text-white">
                                        {{ message.role === 'user' ? 'You' : 'Game Dev Assistant' }}
                                    </p>
                                    <span class="text-xs text-gray-500">{{ formatTime(message.timestamp) }}</span>
                                </div>
                                <!-- Copy Button -->
                                <button @click="copyMessage(message.content)"
                                    class="p-1 text-gray-500 hover:text-white rounded transition-colors duration-200 opacity-0 group-hover:opacity-100"
                                    title="Copy message">
                                    <Copy class="w-4 h-4" />
                                </button>
                            </div>
                            <Markdown :content="message.content" class="text-sm text-gray-300" />
                        </div>
                    </div>
                </div>

                <!-- Enhanced Loading Message -->
                <div v-if="isLoading" key="loading" class="px-6 py-4 border-b border-dark-100/50">
                    <div class="flex space-x-4">
                        <div class="flex-shrink-0">
                            <div class="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                                <div class="animate-spin">
                                    <Circle class="w-5 h-5 text-blue-400" />
                                </div>
                            </div>
                        </div>
                        <div class="flex-1 min-w-0 space-y-1">
                            <p class="text-sm font-medium text-white">Game Dev Assistant</p>
                            <div class="flex space-x-2 items-center text-gray-400">
                                <span class="text-sm">Generating response</span>
                                <div class="flex space-x-1">
                                    <div class="w-1 h-1 bg-blue-400 rounded-full animate-bounce"
                                        style="animation-delay: 0s"></div>
                                    <div class="w-1 h-1 bg-blue-400 rounded-full animate-bounce"
                                        style="animation-delay: 0.2s"></div>
                                    <div class="w-1 h-1 bg-blue-400 rounded-full animate-bounce"
                                        style="animation-delay: 0.4s"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </TransitionGroup>
        </div>

        <!-- Enhanced Input Area -->
        <div class="border-t border-dark-100/50 p-4 bg-gradient-to-b from-transparent to-dark-300/20">
            <form @submit.prevent="sendMessage" class="space-y-4">
                <!-- Input Toolbar -->
                <div class="flex items-center space-x-2 px-2">
                    <!-- Markdown Toggle -->
                    <button type="button" @click="showMarkdownHelp = !showMarkdownHelp"
                        class="p-1.5 text-gray-400 hover:text-white rounded-lg transition-all duration-200 relative group"
                        :class="{ 'bg-blue-500/10 text-blue-400': showMarkdownHelp }">
                        <Hash class="w-4 h-4" />
                        <span
                            class="absolute -top-8 -left-1 bg-dark-400/90 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                            Markdown Support
                        </span>
                    </button>

                    <!-- Code Block -->
                    <button type="button" @click="insertCodeBlock"
                        class="p-1.5 text-gray-400 hover:text-white rounded-lg transition-all duration-200 relative group">
                        <Code class="w-4 h-4" />
                        <span
                            class="absolute -top-8 -left-1 bg-dark-400/90 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                            Insert Code Block
                        </span>
                    </button>

                    <!-- Character Count -->
                    <div class="ml-auto flex items-center space-x-2">
                        <span class="text-xs transition-colors duration-200" :class="characterCountColor">
                            {{ userInput.length }}/2000
                        </span>
                    </div>
                </div>

                <!-- Markdown Help Panel -->
                <div v-if="showMarkdownHelp" class="bg-dark-400/30 rounded-lg p-3 text-sm space-y-2 animate-fadeIn">
                    <div class="flex items-center justify-between text-gray-300">
                        <span class="font-medium">Markdown Shortcuts</span>
                        <button @click="showMarkdownHelp = false" class="text-gray-400 hover:text-white">
                            <X class="w-4 h-4" />
                        </button>
                    </div>
                    <div class="grid grid-cols-2 gap-2 text-xs">
                        <div class="space-y-1">
                            <div class="flex items-center space-x-2 text-gray-400">
                                <kbd class="px-1.5 py-0.5 bg-dark-300 rounded">**text**</kbd>
                                <span>Bold</span>
                            </div>
                            <div class="flex items-center space-x-2 text-gray-400">
                                <kbd class="px-1.5 py-0.5 bg-dark-300 rounded">*text*</kbd>
                                <span>Italic</span>
                            </div>
                        </div>
                        <div class="space-y-1">
                            <div class="flex items-center space-x-2 text-gray-400">
                                <kbd class="px-1.5 py-0.5 bg-dark-300 rounded">\`code\`</kbd>
                                <span>Inline Code</span>
                            </div>
                            <div class="flex items-center space-x-2 text-gray-400">
                                <kbd class="px-1.5 py-0.5 bg-dark-300 rounded">\```code\```</kbd>
                                <span>Code Block</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Main Input Area -->
                <div class="relative group">
                    <textarea v-model="userInput" ref="textareaRef" rows="3"
                        placeholder="Type your message... (Use '/' for commands)" class="w-full bg-dark-300/50 text-gray-200 rounded-xl p-4 pr-24 border border-dark-100/50
                    focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300
                    placeholder-gray-500 resize-none backdrop-blur-sm
                    group-focus-within:bg-dark-300/70" @keydown.enter.exact.prevent="sendMessage"
                        @keydown.enter.shift.exact="newLine" @keydown.slash="handleSlashCommand"
                        :disabled="isLoading"></textarea>

                    <!-- Command Palette -->
                    <div v-if="showCommands"
                        class="absolute bottom-full mb-2 left-0 w-64 bg-dark-300/95 backdrop-blur-sm border border-dark-100/50 rounded-lg shadow-xl">
                        <div class="p-2 space-y-1">
                            <button v-for="cmd in commands" :key="cmd.id" @click="insertCommand(cmd)"
                                class="w-full flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-dark-200/50 text-left transition-colors duration-200">
                                <component :is="cmd.icon" class="w-4 h-4 text-blue-400" />
                                <div>
                                    <div class="text-sm text-white">{{ cmd.label }}</div>
                                    <div class="text-xs text-gray-400">{{ cmd.description }}</div>
                                </div>
                            </button>
                        </div>
                    </div>

                    <!-- Input Actions -->
                    <div class="absolute bottom-3 right-3 flex items-center space-x-3">
                        <!-- Typing Indicator -->
                        <div v-if="isTyping" class="flex items-center space-x-1 text-xs text-gray-400">
                            <span class="w-1 h-1 bg-blue-400 rounded-full animate-typing"></span>
                            <span class="w-1 h-1 bg-blue-400 rounded-full animate-typing"
                                style="animation-delay: 0.2s"></span>
                            <span class="w-1 h-1 bg-blue-400 rounded-full animate-typing"
                                style="animation-delay: 0.4s"></span>
                        </div>

                        <!-- Keyboard Shortcut -->
                        <div class="flex items-center space-x-2 text-xs text-gray-500">
                            <kbd class="px-2 py-1 bg-dark-400/50 rounded text-gray-400">⌘</kbd>
                            <kbd class="px-2 py-1 bg-dark-400/50 rounded text-gray-400">↵</kbd>
                        </div>

                        <!-- Send Button -->
                        <button type="submit" class="p-2 bg-blue-500 hover:bg-blue-600 disabled:opacity-50 disabled:hover:bg-blue-500
                        text-white rounded-lg transition-all duration-300 transform hover:scale-105
                        disabled:transform-none focus:outline-none focus:ring-2 focus:ring-blue-500/50
                        group relative overflow-hidden" :disabled="isLoading || !userInput.trim()">
                            <div
                                class="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000">
                            </div>
                            <Send
                                class="w-4 h-4 relative transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, watch, computed, onUnmounted } from 'vue';
import {
    Bot,
    User,
    Send,
    Loader2,
    Trash2,
    ArrowDown,
    Hash, Code, X, TerminalSquare, Braces, FileCode, MessagesSquare
} from 'lucide-vue-next';
import { startWindToast } from "@mariojgt/wind-notify/packages/index.js";
import { api } from "../../../Boot/axios.js";
import Markdown from '../Comment/Markdown.vue';

interface ChatMessage {
    role: 'user' | 'assistant' | 'system';
    content: string;
    timestamp: number;
}

const messages = ref<ChatMessage[]>([
    {
        role: 'assistant',
        content: "👋 Hello! I'm your Game Development Assistant, specialized in Unreal Engine and Unity. \n\nI can help you with:\n- Code examples\n- Best practices\n- Performance optimization\n- Game design patterns\n- Asset management\n\nHow can I assist you with your game project today?",
        timestamp: Date.now()
    }
]);

const userInput = ref('');
const isLoading = ref(false);
const chatContainer = ref<HTMLElement | null>(null);
const autoScroll = ref(true);

const formatTime = (timestamp: number): string => {
    return new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        minute: '2-digit'
    }).format(timestamp);
};

const scrollToBottom = async () => {
    if (!autoScroll.value) return;

    await nextTick();
    if (chatContainer.value) {
        chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
    }
};

const toggleAutoScroll = () => {
    autoScroll.value = !autoScroll.value;
    if (autoScroll.value) {
        scrollToBottom();
    }
};

const clearChat = () => {
    messages.value = [messages.value[0]]; // Keep the initial message
    startWindToast('info', 'Chat cleared', 'info');
};

const sendMessage = async () => {
    if (!userInput.value.trim() || isLoading.value) return;

    // Add user message
    messages.value.push({
        role: 'user',
        content: userInput.value.trim(),
        timestamp: Date.now()
    });

    // Clear input and store current input
    const currentInput = userInput.value;
    userInput.value = '';
    await scrollToBottom();

    try {
        isLoading.value = true;

        const response = await api.post(route('api.gamedev.chat'), {
            messages: messages.value.map(({ role, content }) => ({ role, content }))
        });

        // Add AI response
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
        // Remove user message on error
        messages.value = messages.value.slice(0, -1);
        userInput.value = currentInput;
    } finally {
        isLoading.value = false;
        await scrollToBottom();
    }
};

// Watch messages for scroll
watch(messages, scrollToBottom, { deep: true });

// Initial scroll
onMounted(scrollToBottom);

// New refs and state
const textareaRef = ref<HTMLTextAreaElement | null>(null);
const showMarkdownHelp = ref(false);
const showCommands = ref(false);
const isTyping = ref(false);
let typingTimeout: NodeJS.Timeout;

// Commands for slash menu
const commands = [
    {
        id: 'code',
        label: 'Code Block',
        description: 'Insert a code block',
        icon: FileCode,
        template: '```\n// Your code here\n```'
    },
    {
        id: 'question',
        label: 'Ask Question',
        description: 'Structure a clear question',
        icon: MessagesSquare,
        template: 'I need help with: \n1. Context: \n2. Problem: \n3. What I\'ve tried: '
    },
    {
        id: 'bug',
        label: 'Report Bug',
        description: 'Describe a bug or issue',
        icon: Braces,
        template: '**Bug Description:**\n\n**Steps to Reproduce:**\n1. \n2. \n\n**Expected Behavior:**\n\n**Actual Behavior:**'
    }
];

// Character count color
const characterCountColor = computed(() => {
    const length = userInput.value.length;
    if (length > 1800) return 'text-red-400';
    if (length > 1500) return 'text-yellow-400';
    return 'text-gray-400';
});

// Handle typing indicator
const handleTyping = () => {
    isTyping.value = true;
    clearTimeout(typingTimeout);
    typingTimeout = setTimeout(() => {
        isTyping.value = false;
    }, 1000);
};

// Handle slash commands
const handleSlashCommand = (e: KeyboardEvent) => {
    if (e.key === '/') {
        e.preventDefault();
        showCommands.value = true;
    }
};

// Insert command template
const insertCommand = (cmd: typeof commands[0]) => {
    userInput.value = cmd.template;
    showCommands.value = false;
    textareaRef.value?.focus();
};

// Insert code block
const insertCodeBlock = () => {
    const textarea = textareaRef.value;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;

    const before = text.substring(0, start);
    const selected = text.substring(start, end);
    const after = text.substring(end);

    userInput.value = `${before}\`\`\`\n${selected || '// Your code here'}\n\`\`\`${after}`;

    nextTick(() => {
        const newCursorPos = start + 4;
        textarea.focus();
        textarea.setSelectionRange(newCursorPos, newCursorPos);
    });
};

// Clean up on unmount
onUnmounted(() => {
    clearTimeout(typingTimeout);
});
</script>

<style scoped>
@reference "../../../../../css/frontend/app.css";

.scrollbar-thin {
    scrollbar-width: thin;
}

.scrollbar-thumb-dark-100::-webkit-scrollbar-thumb {
    @apply bg-dark-100 rounded-full;
}

.scrollbar-track-dark-300\/50::-webkit-scrollbar-track {
    @apply bg-dark-300/50;
}

::-webkit-scrollbar {
    @apply w-2;
}

@keyframes typing {

    0%,
    100% {
        transform: translateY(0);
        opacity: 0.3;
    }

    50% {
        transform: translateY(-2px);
        opacity: 1;
    }
}

.animate-typing {
    animation: typing 1s infinite;
}

.animate-fadeIn {
    animation: fadeIn 0.2s ease-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-4px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
