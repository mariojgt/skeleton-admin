<template>
    <div
        class="fixed inset-0 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm z-50"
        @click.self="close"
    >
        <!-- Delete Confirmation Modal -->
        <div v-if="showDeleteModal" class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[70]">
            <div class="bg-dark-blue-100 p-6 rounded-xl border border-gray-700 w-full max-w-md">
                <h3 class="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <AlertTriangle class="w-5 h-5 text-red-400" />
                    Confirm Deletion
                </h3>
                <p class="text-gray-300 text-sm mb-4">
                    This action cannot be undone. Please type <span class="text-white font-medium">{{ comment_title }}</span> to confirm.
                </p>
                <input
                    v-model="deleteConfirmation"
                    type="text"
                    placeholder="Type post title to confirm"
                    class="w-full px-3 py-2 bg-dark-blue-200 border border-gray-700 rounded-lg text-white placeholder-gray-500 mb-4"
                />
                <div class="flex justify-end gap-3">
                    <button
                        type="button"
                        @click="showDeleteModal = false"
                        class="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white"
                    >
                        Cancel
                    </button>
                    <button
                        type="button"
                        @click="confirmDelete"
                        :disabled="deleteConfirmation !== comment_title"
                        class="px-4 py-2 bg-red-500 text-white rounded-lg text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Delete Post
                    </button>
                </div>
            </div>
        </div>

        <div class="w-full max-w-3xl bg-dark-blue-100 rounded-xl shadow-xl border border-gray-700/50">
            <form v-if="usePage().props.isUserAuth" @submit.prevent="submitComment">
                <!-- Header -->
                <div class="flex items-center justify-between p-4 border-b border-gray-700/50">
                    <div class="flex items-center gap-2">
                        <PencilLine class="w-5 h-5 text-purple-400" />
                        <h2 class="text-lg font-semibold text-white">
                            {{ props.topitEdit?.id ? 'Edit Discussion' : 'New Discussion' }}
                        </h2>
                    </div>
                    <button
                        type="button"
                        @click="close"
                        class="p-1 text-gray-400 hover:text-white transition-colors"
                    >
                        <X class="w-5 h-5" />
                    </button>
                </div>

                <div class="p-4 space-y-4">
                    <!-- Title Input -->
                    <div class="space-y-2">
                        <label for="commentTitle" class="flex items-center gap-2 text-sm font-medium text-gray-300">
                            <Type class="w-4 h-4" />
                            Title
                            <span class="text-red-400">*</span>
                        </label>
                        <input
                            id="commentTitle"
                            v-model="comment_title"
                            type="text"
                            placeholder="What's your topic about?"
                            class="w-full px-3 py-2 bg-dark-blue-200 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                        />
                    </div>

                    <!-- Category Selector -->
                    <div v-if="!props.topitEdit?.id" class="space-y-2">
                        <label for="channel" class="flex items-center gap-2 text-sm font-medium text-gray-300">
                            <FolderOpen class="w-4 h-4" />
                            Select Topic
                            <span class="text-red-400">*</span>
                        </label>
                        <select
                            id="channel"
                            v-model="selected_channel"
                            class="w-full px-3 py-2 bg-dark-blue-200 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all appearance-none"
                        >
                            <option value="" class="bg-dark-blue-200">Choose a category</option>
                            <option
                                v-for="category in categories"
                                :key="category.id"
                                :value="category.slug"
                                class="bg-dark-blue-200"
                            >
                                {{ category.name }}
                            </option>
                        </select>
                    </div>

                    <!-- Content Section -->
                    <div class="space-y-2">
                        <label class="flex items-center gap-2 text-sm font-medium text-gray-300">
                            <MessageSquare class="w-4 h-4" />
                            Content
                            <span class="text-red-400">*</span>
                        </label>

                        <!-- Tab Buttons -->
                        <div class="flex border-b border-gray-700/50">
                            <button
                                type="button"
                                class="px-4 py-2 text-sm font-medium transition-colors border-b-2"
                                :class="[
                                    !isPreviewMode
                                        ? 'text-purple-400 border-purple-400'
                                        : 'text-gray-400 border-transparent hover:text-gray-300'
                                ]"
                                @click="isPreviewMode = false"
                            >
                                <div class="flex items-center gap-2">
                                    <PenTool class="w-4 h-4" />
                                    Write
                                </div>
                            </button>
                            <button
                                type="button"
                                class="px-4 py-2 text-sm font-medium transition-colors border-b-2"
                                :class="[
                                    isPreviewMode
                                        ? 'text-purple-400 border-purple-400'
                                        : 'text-gray-400 border-transparent hover:text-gray-300'
                                ]"
                                @click="isPreviewMode = true"
                            >
                                <div class="flex items-center gap-2">
                                    <Eye class="w-4 h-4" />
                                    Preview
                                </div>
                            </button>
                        </div>

                        <!-- Write Mode -->
                        <div v-show="!isPreviewMode" class="space-y-2">
                            <!-- Formatting Toolbar -->
                            <div class="flex flex-wrap gap-1 p-2 bg-dark-blue-200 rounded-t-lg border border-gray-700">
                                <!-- Regular formatting tools -->
                                <button
                                    v-for="tool in formatTools"
                                    :key="tool.label"
                                    type="button"
                                    @click="applyFormat(tool)"
                                    class="p-1.5 text-gray-400 hover:text-white rounded transition-colors"
                                    :title="tool.label"
                                >
                                    <component :is="tool.icon" class="w-4 h-4" />
                                </button>

                                <!-- Code Block Dropdown -->
                                <div class="relative">
                                    <button
                                        type="button"
                                        @click.stop="showCodeMenu = !showCodeMenu"
                                        class="p-1.5 text-gray-400 hover:text-white rounded transition-colors flex items-center gap-1"
                                        :class="{ 'text-purple-400': showCodeMenu }"
                                        title="Insert Code Block"
                                    >
                                        <FileCode class="w-4 h-4" />
                                        <ChevronDown class="w-3 h-3" />
                                    </button>

                                    <!-- Language Selection Menu -->
                                    <Transition
                                        enter-active-class="transition ease-out duration-100"
                                        enter-from-class="transform opacity-0 scale-95"
                                        enter-to-class="transform opacity-100 scale-100"
                                        leave-active-class="transition ease-in duration-75"
                                        leave-from-class="transform opacity-100 scale-100"
                                        leave-to-class="transform opacity-0 scale-95"
                                    >
                                        <div
                                            v-if="showCodeMenu"
                                            class="absolute left-0 top-full mt-1 w-48 py-1 bg-dark-blue-100 rounded-lg border border-gray-700 shadow-xl z-[60]"
                                            v-click-outside="() => showCodeMenu = false"
                                        >
                                            <button
                                                v-for="lang in codeLanguages"
                                                :key="lang.value"
                                                type="button"
                                                @click.stop="insertCodeBlock(lang.value)"
                                                class="w-full px-4 py-2 text-sm text-left text-gray-300 hover:bg-dark-blue-200 hover:text-white flex items-center gap-2"
                                            >
                                                <component :is="lang.icon" class="w-4 h-4" />
                                                {{ lang.label }}
                                            </button>
                                        </div>
                                    </Transition>
                                </div>
                            </div>

                            <textarea
                                id="comment"
                                ref="textareaRef"
                                v-model="lesson_content"
                                placeholder="Share your thoughts with the community..."
                                class="w-full h-64 px-4 py-3 bg-dark-blue-200 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all resize-none"
                            ></textarea>
                        </div>

                        <!-- Preview Mode -->
                        <div v-show="isPreviewMode" class="min-h-[16rem] p-4 bg-dark-blue-200 rounded-lg border border-gray-700">
                            <div v-if="lesson_content">
                                <MarkdownRenderer :content="lesson_content" />
                            </div>
                            <div v-else class="text-gray-500 italic">
                                Nothing to preview yet...
                            </div>
                        </div>

                        <!-- Markdown Tips -->
                        <div class="flex items-center gap-2 text-xs text-gray-500">
                            <Info class="w-4 h-4" />
                            <span>
                                Markdown supported:
                                <span class="text-gray-400">**bold**, *italic*, `code`, etc.</span>
                            </span>
                        </div>
                    </div>
                </div>

                <!-- Footer -->
                <div class="flex flex-col sm:flex-row justify-between items-center gap-4 p-4 border-t border-gray-700/50 bg-dark-blue-200/50">
                    <div class="flex items-center text-gray-400 text-sm">
                        <AlertCircle class="w-4 h-4 mr-2" />
                        Please follow community guidelines
                    </div>
                    <div class="flex gap-2 w-full sm:w-auto">
                        <button
                            type="button"
                            @click="close"
                            class="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors flex-1 sm:flex-initial"
                        >
                            <X class="w-4 h-4" />
                            Cancel
                        </button>
                        <button
                            v-if="props.topitEdit?.id"
                            type="button"
                            @click="showDeleteModal = true"
                            class="flex items-center justify-center gap-2 px-4 py-2 bg-red-500/10 text-red-400 rounded-lg hover:bg-red-500/20 text-sm font-medium transition-colors flex-1 sm:flex-initial"
                        >
                            <Trash2 class="w-4 h-4" />
                            Delete
                        </button>
                        <button
                            type="submit"
                            class="flex items-center justify-center gap-2 px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 text-sm font-medium transition-colors flex-1 sm:flex-initial"
                        >
                            <Send class="w-4 h-4" />
                            {{ props.topitEdit?.id ? 'Update' : 'Post' }}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { api } from "../../../Boot/axios.js";
import { usePage } from "@inertiajs/vue3";
import { useMessage } from "naive-ui";
import { onMounted } from "vue";
import { router } from '@inertiajs/vue3';
import MarkdownRenderer from "@frontend_components/FrontEnd/Comment/Markdown.vue";
import {
    PencilLine, X, Type, FolderOpen, MessageSquare, PenTool, Eye,
    Bold, Italic, Code, Hash, List, Quote, Link2, Info, AlertCircle,
    Trash2, Send, AlertTriangle, FileCode, ChevronDown,
    Brackets, Database, Terminal, FileJson
} from 'lucide-vue-next';

// Register click-outside directive
const vClickOutside = {
    mounted: (el, binding) => {
        el._clickOutside = (event) => {
            if (!(el === event.target || el.contains(event.target))) {
                binding.value();
            }
        };
        document.body.addEventListener('click', el._clickOutside);
    },
    unmounted: (el) => {
        document.body.removeEventListener('click', el._clickOutside);
    }
};

const directives = {
    'click-outside': vClickOutside
};

const message = useMessage();
const isPreviewMode = ref(false);
const textareaRef = ref(null);
const showDeleteModal = ref(false);
const deleteConfirmation = ref('');
const showCodeMenu = ref(false);

// Form fields
const lesson_content = ref('');
const comment_title = ref('');
const selected_channel = ref('');

// Code languages configuration
const codeLanguages = [
    { label: 'JavaScript', value: 'javascript', icon: Brackets },
    { label: 'PHP', value: 'php', icon: FileCode },
    { label: 'Python', value: 'python', icon: Terminal },
    { label: 'C++', value: 'cpp', icon: Terminal },
    { label: 'Java', value: 'java', icon: Terminal },
    { label: 'Ruby', value: 'ruby', icon: Terminal },
    { label: 'SQL', value: 'sql', icon: Database },
    { label: 'HTML', value: 'html', icon: Code },
    { label: 'CSS', value: 'css', icon: Code },
    { label: 'TypeScript', value: 'typescript', icon: Brackets },
    { label: 'Go', value: 'go', icon: Terminal },
    { label: 'Rust', value: 'rust', icon: Terminal },
    { label: 'Shell', value: 'bash', icon: Terminal },
    { label: 'JSON', value: 'json', icon: FileJson },
    { label: 'XML', value: 'xml', icon: Code },
    { label: 'YAML', value: 'yaml', icon: FileCode }
];

// Formatting tools configuration
const formatTools = [
    { label: 'Bold', icon: Bold, prefix: '**', suffix: '**' },
    { label: 'Italic', icon: Italic, prefix: '*', suffix: '*' },
    { label: 'Code', icon: Code, prefix: '`', suffix: '`' },
    { label: 'Heading', icon: Hash, prefix: '# ', suffix: '' },
    { label: 'List', icon: List, prefix: '- ', suffix: '' },
    { label: 'Quote', icon: Quote, prefix: '> ', suffix: '' },
    { label: 'Link', icon: Link2, prefix: '[', suffix: '](url)' }
];

const props = defineProps({
    commentClass: {
        type: String,
        default: "w-full rounded-lg",
    },
    categories: {
        type: Array,
        default: () => [],
    },
    topitEdit: {
        type: Object,
        default: () => ({}),
    },
});

const emit = defineEmits(["fresh-comments", "close"]);

// Insert code block function
const insertCodeBlock = (language) => {
    const textarea = textareaRef.value;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = lesson_content.value.substring(start, end);

    const codeBlock = [
        "```" + language,
        selectedText || "Your code here",
        "```",
        ""
    ].join("\n");

    const beforeText = lesson_content.value.substring(0, start);
    const afterText = lesson_content.value.substring(end);

    lesson_content.value = beforeText + codeBlock + afterText;

    // Close menu and focus with a slight delay to ensure proper rendering
    setTimeout(() => {
        showCodeMenu.value = false;
        textarea.focus();
    }, 100);
};

const applyFormat = (tool) => {
    const textarea = textareaRef.value;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = lesson_content.value.substring(start, end);

    let newText;
    if (selectedText) {
        const beforeText = lesson_content.value.substring(0, start);
        const afterText = lesson_content.value.substring(end);
        newText = beforeText + tool.prefix + selectedText + tool.suffix + afterText;
    } else {
        const beforeText = lesson_content.value.substring(0, start);
        const afterText = lesson_content.value.substring(start);
        newText = beforeText + tool.prefix + 'text' + tool.suffix + afterText;
    }

    lesson_content.value = newText;
    textarea.focus();
};

const submitComment = async () => {
    const form = {
        title: comment_title.value,
        content: lesson_content.value,
        category: selected_channel.value,
    };

    if (!comment_title.value || !lesson_content.value || (!props.topitEdit?.id && !selected_channel.value)) {
        message.error("Please fill in all required fields");
        return;
    }

    try {
        let finalRoute = route("forum.thread.create");
        if (props.topitEdit?.id) {
            finalRoute = route("forum.thread.edit", props.topitEdit.id);
        }

        const response = await api.post(finalRoute, form);
        message.success(response.data.message);
        resetForm();
        emit("fresh-comments");
        emit("close");
    } catch (error) {
        if (error.response?.data?.errors) {
            Object.values(error.response.data.errors).forEach((errMsg) => {
                message.error(errMsg[0]);
            });
        }
    }
};

const confirmDelete = async () => {
    if (deleteConfirmation.value === comment_title.value) {
        try {
            const response = await api.delete(route("forum.thread.edit", props.topitEdit?.id));
            message.success(response.data.message);
            showDeleteModal.value = false;
            router.visit(route("home"), { preserveScroll: 'errors' });
        } catch (error) {
            if (error.response?.data?.errors) {
                Object.values(error.response.data.errors).forEach((errMsg) => {
                    message.error(errMsg[0]);
                });
            }
        }
    }
};

const resetForm = () => {
    lesson_content.value = "";
    comment_title.value = "";
    selected_channel.value = "";
    isPreviewMode.value = false;
    showDeleteModal.value = false;
    deleteConfirmation.value = "";
};

const close = () => {
    emit("close");
};

onMounted(() => {
    if (props.topitEdit?.id) {
        lesson_content.value = props.topitEdit.content;
        comment_title.value = props.topitEdit.title;
    }
});
</script>
