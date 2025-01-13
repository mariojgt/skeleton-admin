<template>
    <div class="flex justify-between items-center bg-gradient-to-br from-gray-800 via-gray-900 to-black border border-gray-700 shadow-md p-6 rounded-xl">
        <!-- Left Section: Player Info -->
        <div class="flex items-center space-x-4">
            <!-- User Avatar -->
            <div class="relative border-2 border-gray-700 rounded-full bg-gray-800 p-1 shadow-lg">
                <img
                    class="w-16 h-16 rounded-full"
                    :src="user.avatar || 'https://via.placeholder.com/64'"
                    :alt="user.full_name"
                />
                <div class="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-gray-800 rounded-full" v-if="user.has_subscription"></div>
            </div>
            <div class="flex flex-col">
                <!-- User Full Name -->
                <span class="text-lg font-bold text-gray-100 tracking-wide">
                    {{ user.full_name }}
                </span>
                <!-- User Email -->
                <span class="text-sm text-gray-400">
                    {{ user.email }}
                </span>
                <!-- Account Creation Date -->
                <span class="text-xs text-gray-500">
                    Joined: {{ user.create_at_diff }}
                </span>
            </div>
        </div>

        <!-- Right Section: Subscription Status and About Me -->
        <div class="flex flex-col items-end space-y-2">
            <!-- Subscription Status -->
            <div>
                <span
                    v-if="user.has_subscription"
                    class="px-4 py-2 text-sm font-semibold text-green-300 border border-green-500 bg-green-900 rounded-lg shadow-lg"
                >
                    Active Member
                </span>
                <span
                    v-else
                    class="px-4 py-2 text-sm font-semibold text-red-300 border border-red-500 bg-red-900 rounded-lg shadow-lg"
                >
                    Free Account
                </span>
            </div>

            <!-- About Me Link -->
            <a
                href="#"
                class="inline-flex items-center text-blue-400 font-medium hover:text-blue-500 transition duration-200"
            >
                About Me
                <svg
                    class="ml-2 w-5 h-5 text-blue-400 hover:text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                    ></path>
                </svg>
            </a>
        </div>
    </div>
</template>

<script setup>
// Props
const props = defineProps({
    user: {
        type: Object,
        default: () => ({
            full_name: "Anonymous",
            email: "unknown@example.com",
            avatar: "",
            create_at_diff: "unknown",
            has_subscription: false,
        }),
    },
});
</script>

<style scoped>
/* Add any specific tweaks here if needed */
</style>
