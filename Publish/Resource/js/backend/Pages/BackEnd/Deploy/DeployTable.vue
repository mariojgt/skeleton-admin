<template>
    <div class="container mx-auto py-6">
        <!-- Header & Filters -->
        <div class="mb-6">
            <h2 class="text-2xl font-bold mb-4">Deployment History</h2>

            <!-- Filters -->
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Search</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Search by repository or commit..."
                        class="input input-bordered w-full"
                        v-model="filters.search"
                    />
                </div>

                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Status</span>
                    </label>
                    <select
                        class="select select-bordered w-full"
                        v-model="filters.status"
                    >
                        <option value="">All Status</option>
                        <option value="completed">Completed</option>
                        <option value="failed">Failed</option>
                        <option value="running">Running</option>
                    </select>
                </div>

                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Date Range</span>
                    </label>
                    <select
                        class="select select-bordered w-full"
                        v-model="filters.dateRange"
                    >
                        <option value="24h">Last 24 Hours</option>
                        <option value="7d">Last 7 Days</option>
                        <option value="30d">Last 30 Days</option>
                        <option value="all">All Time</option>
                    </select>
                </div>
            </div>
        </div>

        <!-- Table -->
        <div class="bg-base-100 rounded-box shadow-xl">
            <div class="overflow-x-auto">
                <table class="table table-zebra w-full">
                    <!-- Table Header -->
                    <thead>
                        <tr>
                            <th
                                class="cursor-pointer hover:bg-base-200"
                                @click="sortBy('id')"
                            >
                                <div class="flex items-center gap-2">
                                    ID
                                    <svg
                                        v-if="sortColumn === 'id'"
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                                        />
                                    </svg>
                                </div>
                            </th>
                            <th>Commit</th>
                            <th
                                class="cursor-pointer hover:bg-base-200"
                                @click="sortBy('status')"
                            >
                                <div class="flex items-center gap-2">
                                    Status
                                    <svg
                                        v-if="sortColumn === 'status'"
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                                        />
                                    </svg>
                                </div>
                            </th>
                            <th
                                class="cursor-pointer hover:bg-base-200"
                                @click="sortBy('started_at')"
                            >
                                <div class="flex items-center gap-2">
                                    Started At
                                    <svg
                                        v-if="sortColumn === 'started_at'"
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                                        />
                                    </svg>
                                </div>
                            </th>
                            <th>Duration</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <!-- Table Body -->
                    <tbody>
                        <tr
                            v-for="deployment in deployments"
                            :key="deployment.id"
                            class="hover"
                        >
                            <td class="font-mono">#{{ deployment.id }}</td>
                            <td>
                                <div class="flex items-center gap-2">
                                    <div class="font-mono text-sm">
                                        {{
                                            deployment.commit_hash.substring(
                                                0,
                                                7
                                            )
                                        }}
                                    </div>
                                    <button
                                        class="btn btn-ghost btn-xs"
                                        @click="
                                            copyToClipboard(
                                                deployment.commit_hash
                                            )
                                        "
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-4 w-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </td>
                            <td>
                                <div
                                    :class="{
                                        badge: true,
                                        'badge-success':
                                            deployment.status === 'completed',
                                        'badge-error':
                                            deployment.status === 'failed',
                                        'badge-warning animate-pulse':
                                            deployment.status === 'running',
                                        'badge-info':
                                            deployment.status === 'pending',
                                    }"
                                >
                                    {{ deployment.status }}
                                </div>
                                <div
                                    v-if="deployment.error"
                                    class="text-error text-sm mt-1"
                                >
                                    {{ deployment.error.substring(0, 50) }}...
                                </div>
                            </td>
                            <td>
                                <div>
                                    {{ formatDate(deployment.started_at) }}
                                </div>
                                <div class="text-sm opacity-60">
                                    {{ formatTime(deployment.started_at) }}
                                </div>
                            </td>
                            <td>
                                {{ formatDuration(deployment.duration) }}
                            </td>
                            <td>
                                <div class="flex items-center gap-2">
                                    <button
                                        class="btn btn-ghost btn-sm"
                                        @click="viewDeployment(deployment)"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-4 w-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                            />
                                        </svg>
                                        View
                                    </button>
                                    <div class="dropdown dropdown-end">
                                        <label
                                            tabindex="0"
                                            class="btn btn-ghost btn-sm"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                class="h-4 w-4"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                                                />
                                            </svg>
                                        </label>
                                        <ul
                                            tabindex="0"
                                            class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                                        >
                                            <li>
                                                <a
                                                    @click="
                                                        downloadLogs(
                                                            deployment.id
                                                        )
                                                    "
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        class="h-4 w-4"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            stroke-width="2"
                                                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                                        />
                                                    </svg>
                                                    Download Logs
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    @click="
                                                        redeployCommit(
                                                            deployment.id
                                                        )
                                                    "
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        class="h-4 w-4"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            stroke-width="2"
                                                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                                        />
                                                    </svg>
                                                    Redeploy This Commit
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Pagination -->
            <div
                class="flex justify-between items-center p-4 border-t border-base-300"
            >
                <div class="text-sm opacity-70">
                    Showing {{ startIndex }} to {{ endIndex }} of
                    {{ totalDeployments }} deployments
                </div>
                <div class="join">
                    <button
                        class="join-item btn btn-sm"
                        :disabled="currentPage === 1"
                        @click="changePage(currentPage - 1)"
                    >
                        «
                    </button>
                    <button class="join-item btn btn-sm">
                        Page {{ currentPage }}
                    </button>
                    <button
                        class="join-item btn btn-sm"
                        :disabled="currentPage === totalPages"
                        @click="changePage(currentPage + 1)"
                    >
                        »
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { format, formatDistance } from "date-fns";

// State
const filters = ref({
    search: "",
    status: "",
    dateRange: "24h",
    branch: "",
});

const sortColumn = ref("started_at");
const sortDirection = ref("desc");
const currentPage = ref(1);
const itemsPerPage = 10;

const props = defineProps({
    deployments: {
        type: Array,
        required: true,
    },
});

// Computed
const totalDeployments = computed(() => props.deployments.length);
const totalPages = computed(() =>
    Math.ceil(totalDeployments.value / itemsPerPage)
);
const startIndex = computed(() => (currentPage.value - 1) * itemsPerPage + 1);
const endIndex = computed(() =>
    Math.min(currentPage.value * itemsPerPage, totalDeployments.value)
);

// Methods
const formatDate = (date) => format(new Date(date), "MMM dd, yyyy");
const formatTime = (date) => format(new Date(date), "HH:mm:ss");
const formatDuration = (seconds) => {
    if (seconds < 60) return `${seconds}s`;
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
};

const copyToClipboard = async (text) => {
    await navigator.clipboard.writeText(text);
    // You could add a toast notification here
};

const sortBy = (column) => {
    if (sortColumn.value === column) {
        sortDirection.value = sortDirection.value === "asc" ? "desc" : "asc";
    } else {
        sortColumn.value = column;
        sortDirection.value = "asc";
    }
};

const changePage = (page) => {
    currentPage.value = page;
};
const emit = defineEmits(["viewDeployment"]);
const viewDeployment = (deployment) => {
    emit("viewDeployment", deployment);
};

const downloadLogs = (id) => {
    // Implement download logic
};

const redeployCommit = (id) => {
    // Implement redeploy logic
};
</script>
