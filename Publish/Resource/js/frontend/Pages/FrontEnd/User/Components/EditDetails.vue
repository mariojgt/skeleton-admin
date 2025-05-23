<template>
    <div class="bg-dark-500/90 backdrop-blur-sm rounded-xl border border-gray-800/50 overflow-hidden">
        <!-- Header Section -->
        <div class="relative p-6 text-center border-b border-gray-800/50">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>

            <!-- Avatar Upload Section -->
            <div class="relative">
                <div class="relative inline-block group">
                    <!-- Avatar Frame -->
                    <div class="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-75 blur transition-opacity duration-300 group-hover:opacity-100"></div>

                    <!-- Avatar Image -->
                    <div
                        class="relative w-24 h-24 rounded-full overflow-hidden border-2 border-dark-400 cursor-pointer"
                        @click="openAvatarPicker"
                    >
                        <img
                            :src="userInformation.avatar"
                            alt="Profile Picture"
                            class="w-full h-full object-cover"
                        />

                        <!-- Hover Overlay -->
                        <div class="absolute inset-0 bg-dark-500/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <ImagePlus class="w-6 h-6 text-white" />
                        </div>
                    </div>
                </div>

                <h2 class="mt-4 text-xl font-bold text-white">Edit Profile</h2>
                <p class="text-sm text-gray-400">Update your personal information</p>
            </div>
        </div>

        <!-- Form Section -->
        <form @submit.prevent="submitForm" class="p-6 space-y-6">
            <!-- Username Field -->
            <div class="space-y-2">
                <label for="username" class="block text-sm font-medium text-gray-300">Username</label>
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User class="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                        id="username"
                        v-model="userInformation.username"
                        type="text"
                        placeholder="Enter your username"
                        class="w-full pl-10 pr-4 py-3 bg-dark-400/50 border border-gray-800/50 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300"
                    />
                </div>
            </div>

            <!-- Name Fields -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- First Name -->
                <div class="space-y-2">
                    <label for="first_name" class="block text-sm font-medium text-gray-300">First Name</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <UserCircle class="w-5 h-5 text-gray-400" />
                        </div>
                        <input
                            id="first_name"
                            v-model="userInformation.first_name"
                            type="text"
                            placeholder="Enter your first name"
                            class="w-full pl-10 pr-4 py-3 bg-dark-400/50 border border-gray-800/50 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300"
                        />
                    </div>
                </div>

                <!-- Last Name -->
                <div class="space-y-2">
                    <label for="last_name" class="block text-sm font-medium text-gray-300">Last Name</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <UserCircle class="w-5 h-5 text-gray-400" />
                        </div>
                        <input
                            id="last_name"
                            v-model="userInformation.last_name"
                            type="text"
                            placeholder="Enter your last name"
                            class="w-full pl-10 pr-4 py-3 bg-dark-400/50 border border-gray-800/50 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300"
                        />
                    </div>
                </div>
            </div>

            <!-- Email Field -->
            <div class="space-y-2">
                <label for="email" class="block text-sm font-medium text-gray-300">Email Address</label>
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail class="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                        id="email"
                        v-model="userInformation.email"
                        type="email"
                        placeholder="Enter your email"
                        class="w-full pl-10 pr-4 py-3 bg-dark-400/50 border border-gray-800/50 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300"
                    />
                </div>
            </div>

            <!-- Submit Button -->
            <div class="pt-4">
                <button
                    type="submit"
                    class="group relative w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg transition-all duration-300 hover:from-blue-600 hover:to-purple-600"
                >
                    <!-- Shine Effect -->
                    <div class="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine"></div>

                    <Save class="w-5 h-5" />
                    <span>Save Changes</span>
                </button>
            </div>
        </form>

        <!-- Avatar Picker Modal -->
        <AvatarPicker
            :is-open="showAvatarPicker"
            :current-avatar="userInformation.avatar"
            @close="showAvatarPicker = false"
            @select="selectNewAvatar"
        />
    </div>
</template>

<script setup>
import { useForm } from "@inertiajs/vue3";
import { onMounted, ref } from "vue";
import {
    User, UserCircle, Mail,
    Save, ImagePlus
} from 'lucide-vue-next';
import AvatarPicker from '@frontend_components/FrontEnd/Profile/AvatarPicker.vue';
import { inject} from "vue";
const route = inject('route');
const emit = defineEmits(["isLoading"]);

const props = defineProps({
    userInfo: {
        type: Object,
        default: {},
    },
});

let userInformation = $ref({});
const showAvatarPicker = ref(false);

onMounted(() => {
    userInformation = props.userInfo;
});

const form = useForm({
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    avatar: '',
});

function openAvatarPicker() {
    showAvatarPicker.value = true;
}

function selectNewAvatar(avatarPath) {
    userInformation.avatar = avatarPath;
}

const submitForm = () => {
    emit("isLoading", true);
    form.first_name = userInformation.first_name;
    form.last_name = userInformation.last_name;
    form.email = userInformation.email;
    form.username = userInformation.username;
    form.avatar = userInformation.avatar;

    form.patch(route("user.update", userInformation.id), {
        preserveState: true,
        onSuccess: () => {
            emit("isLoading", false);
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
</style>
