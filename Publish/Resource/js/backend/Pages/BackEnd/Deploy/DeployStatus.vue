<template>
    <div class="min-h-screen bg-base-200 p-6">
        <!-- Deployment Status Card -->
        <div class="container mx-auto">
            <div class="card bg-base-100 shadow-xl">
                <div class="card-body">
                    <!-- Header with Status -->
                    <div class="flex justify-between items-center mb-4">
                        <h2 class="card-title text-2xl flex items-center gap-2">
                            <span>Deployment Status</span>
                            <div
                                class="badge badge-lg"
                                :class="{
                                    'badge-warning animate-pulse':
                                        deployment.status === 'running',
                                    'badge-success':
                                        deployment.status === 'completed',
                                    'badge-error':
                                        deployment.status === 'failed',
                                    'badge-info':
                                        deployment.status === 'pending',
                                }"
                            >
                                {{ deployment.status }}
                            </div>
                        </h2>
                        <div class="flex items-center gap-4">
                            <div class="text-sm opacity-70">
                                Started: 2024-10-26 14:30:00
                            </div>
                            <div class="text-sm opacity-70">
                                Duration: 2m 45s
                            </div>
                        </div>
                    </div>

                    <!-- Repository Info -->
                    <div class="bg-base-200 p-4 rounded-lg mb-4">
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div>
                                <div class="text-sm opacity-70">Repository</div>
                                <div class="font-medium">
                                    {{ deployment.metadata.repository_name }}
                                </div>
                            </div>
                            <div>
                                <div class="text-sm opacity-70">Branch</div>
                                <div class="font-medium">
                                    {{ deployment.webhook_config.branch }}
                                </div>
                            </div>
                            <div>
                                <div class="text-sm opacity-70">Commit</div>
                                <div class="font-mono text-sm">
                                    {{ deployment.commit_hash }}
                                </div>
                            </div>
                            <div>
                                <div class="text-sm opacity-70">
                                    Deployment Path
                                </div>
                                <div class="font-mono text-sm">
                                    {{
                                        deployment.webhook_config
                                            .deployment_path
                                    }}
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Command Progress -->
                    <div class="mb-6">
                        <div class="flex justify-between items-center mb-2">
                            <div class="font-medium">Deployment Progress</div>
                            <div class="text-sm opacity-70">
                                {{ completedCommands }}/{{ totalCommands }}
                                commands completed
                            </div>
                        </div>
                        <progress
                            class="progress progress-primary w-full"
                            :value="progressPercentage"
                            max="100"
                        ></progress>
                        {{ progressPercentage }}
                    </div>
                    <!-- Command Progress -->
                    <!-- <div class="mb-6">
                        <div class="flex justify-between items-center mb-2">
                            <div class="font-medium">Deployment Progress</div>
                            <div class="text-sm opacity-70">
                                3/5 commands completed
                            </div>
                        </div>
                        <progress
                            class="progress progress-primary w-full"
                            value="60"
                            max="100"
                        ></progress>
                    </div> -->

                    <!-- Deployment Logs -->
                    <div class="bg-base-300 rounded-lg">
                        <div
                            class="flex items-center justify-between p-4 border-b border-base-content/10"
                        >
                            <h3 class="font-bold">Deployment Logs</h3>
                            <div class="flex gap-2">
                                <button
                                    class="btn btn-sm btn-ghost"
                                    @click="downloadLogs"
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
                                </button>
                                <button
                                    class="btn btn-sm btn-ghost"
                                    :class="{ 'btn-active': autoScroll }"
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
                                            d="M15 13l-3 3m0 0l-3-3m3 3V8"
                                        />
                                    </svg>
                                    Auto-scroll
                                </button>
                            </div>
                        </div>

                        <!-- Log Content -->
                        <div
                            class="h-[400px] overflow-y-auto font-mono text-sm p-4 space-y-2"
                        >
                            <div v-for="(log, index) in logs" :key="index">
                                <div
                                    :class="{
                                        'text-primary': log.type === 'info',
                                        'text-info': log.type === 'command',
                                        'text-success': log.type === 'success',
                                        'text-error': log.type === 'error',
                                        'text-warning animate-pulse':
                                            log.type === 'running',
                                        'pl-4': log.indented,
                                    }"
                                >
                                    [{{ formatTime(log.timestamp) }}]
                                    {{ log.content }}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="flex justify-between items-center mt-4">
                        <div class="flex gap-2">
                            <button class="btn btn-error btn-sm" @click="cancelDeployment" >
                                Cancel Deployment
                            </button>
                            <!-- <button class="btn btn-ghost btn-sm">
                                View Previous Deployment
                            </button> -->
                        </div>
                        <div class="flex gap-2">
                            <div class="badge badge-neutral">
                                webhook-id: 123
                            </div>
                            <div class="badge badge-neutral">
                                deploy-id: 456
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
import { format, formatDistance } from "date-fns";

const props = defineProps({
    deployment: {
        type: Object,
        default: () => ({}),
    },
});

const status = ref("running"); // Can be 'pending', 'running', 'completed', 'failed'
const autoScroll = ref(true);
let logs = $ref([]);
const fetchLogs = async () => {
    try {
        const response = await fetch(
            route("deployments.logs", props.deployment.id)
        );
        const data = await response.json();
        logs = data.data;
    } catch (error) {
        console.error("Error fetching logs:", error);
    }
};

// Computed
const completedCommands = computed(() => {
    return logs.filter((log) => log.type === "success").length;
});

const totalCommands = computed(() => {
    return props.deployment.progress.total || 0;
});

const progressPercentage = computed(() => {
    return (completedCommands.value / totalCommands.value) * 100 || 0;
});

// Methods
const formatDate = (date) => {
    if (!date) return "";
    return format(new Date(date), "yyyy-MM-dd HH:mm:ss");
};

const formatTime = (date) => {
    if (!date) return "";
    return format(new Date(date), "HH:mm:ss");
};

const formatDuration = (seconds) => {
    if (!seconds) return "0s";
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return minutes > 0
        ? `${minutes}m ${remainingSeconds}s`
        : `${remainingSeconds}s`;
};

// fetchLogs(); every 5 seconds when the component is mounted and if the props.deployment is not null
onMounted(() => {
    if (props.deployment) {
        fetchLogs();
        setInterval(fetchLogs, 5000);
    }
});

watch(
    () => props.deployment,
    (newVal) => {
        if (newVal) {
            fetchLogs();
        }
    }
);

const downloadLogs = () => {
    const logText = logs
        .map((log) => `[${formatTime(log.timestamp)}] ${log.content}`)
        .join("\n");

    const blob = new Blob([logText], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `deployment-${props.deployment.id}-logs.txt`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
};

// Clipboard handling
const handleCopyClick = async (text) => {
  try {
    // Try using the Clipboard API
    if (window.isSecureContext && window.navigator?.clipboard) {
      await window.navigator.clipboard.writeText(text);
      copied.value = true;
      setTimeout(() => {
        copied.value = false;
      }, 2000);
      return;
    }

    // Fallback method using a temporary textarea
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2000);
  } catch (error) {
    console.error('Failed to copy text:', error);
    // You could add an error notification here
  }
};


const cancelDeployment = async () => {
    if (!confirm("Are you sure you want to cancel this deployment?")) return;

    try {
        await fetch(`/api/deployments/${props.deploymentId}/cancel`, {
            method: "POST",
        });
        await fetchDeployment();
    } catch (error) {
        console.error("Error canceling deployment:", error);
    }
};

onUnmounted(() => {
    clearInterval(fetchLogs);
});
</script>
