import { ref, computed, onMounted, watch, onUnmounted, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { format } from "date-fns";
const _sfc_main = {
  __name: "DeployStatus",
  __ssrInlineRender: true,
  props: {
    deployment: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const props = __props;
    ref("running");
    const autoScroll = ref(true);
    let logs = ref([]);
    const fetchLogs = async () => {
      try {
        const response = await fetch(
          route("deployments.logs", props.deployment.id)
        );
        const data = await response.json();
        logs.value = data.data;
      } catch (error) {
        console.error("Error fetching logs:", error);
      }
    };
    const completedCommands = computed(() => {
      return logs.value.filter((log) => log.type === "success").length;
    });
    const totalCommands = computed(() => {
      return props.deployment.progress.total || 0;
    });
    const progressPercentage = computed(() => {
      return completedCommands.value / totalCommands.value * 100 || 0;
    });
    const formatTime = (date) => {
      if (!date) return "";
      return format(new Date(date), "HH:mm:ss");
    };
    onMounted(() => {
      if (props.deployment) {
        fetchLogs();
        setInterval(fetchLogs, 5e3);
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
    onUnmounted(() => {
      clearInterval(fetchLogs);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-base-200 p-6" }, _attrs))}><div class="container mx-auto"><div class="card bg-base-100 shadow-xl"><div class="card-body"><div class="flex justify-between items-center mb-4"><h2 class="card-title text-2xl flex items-center gap-2"><span>Deployment Status</span><div class="${ssrRenderClass([{
        "badge-warning animate-pulse": __props.deployment.status === "running",
        "badge-success": __props.deployment.status === "completed",
        "badge-error": __props.deployment.status === "failed",
        "badge-info": __props.deployment.status === "pending"
      }, "badge badge-lg"])}">${ssrInterpolate(__props.deployment.status)}</div></h2><div class="flex items-center gap-4"><div class="text-sm opacity-70"> Started: 2024-10-26 14:30:00 </div><div class="text-sm opacity-70"> Duration: 2m 45s </div></div></div><div class="bg-base-200 p-4 rounded-lg mb-4"><div class="grid grid-cols-2 md:grid-cols-4 gap-4"><div><div class="text-sm opacity-70">Repository</div><div class="font-medium">${ssrInterpolate(__props.deployment.metadata.repository_name)}</div></div><div><div class="text-sm opacity-70">Branch</div><div class="font-medium">${ssrInterpolate(__props.deployment.webhook_config.branch)}</div></div><div><div class="text-sm opacity-70">Commit</div><div class="font-mono text-sm">${ssrInterpolate(__props.deployment.commit_hash)}</div></div><div><div class="text-sm opacity-70"> Deployment Path </div><div class="font-mono text-sm">${ssrInterpolate(__props.deployment.webhook_config.deployment_path)}</div></div></div></div><div class="mb-6"><div class="flex justify-between items-center mb-2"><div class="font-medium">Deployment Progress</div><div class="text-sm opacity-70">${ssrInterpolate(completedCommands.value)}/${ssrInterpolate(totalCommands.value)} commands completed </div></div><progress class="progress progress-primary w-full"${ssrRenderAttr("value", progressPercentage.value)} max="100"></progress> ${ssrInterpolate(progressPercentage.value)}</div><div class="bg-base-300 rounded-lg"><div class="flex items-center justify-between p-4 border-b border-base-content/10"><h3 class="font-bold">Deployment Logs</h3><div class="flex gap-2"><button class="btn btn-sm btn-ghost"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg> Download Logs </button><button class="${ssrRenderClass([{ "btn-active": autoScroll.value }, "btn btn-sm btn-ghost"])}"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8"></path></svg> Auto-scroll </button></div></div><div class="h-[400px] overflow-y-auto font-mono text-sm p-4 space-y-2"><!--[-->`);
      ssrRenderList(unref(logs), (log, index) => {
        _push(`<div><div class="${ssrRenderClass({
          "text-primary": log.type === "info",
          "text-info": log.type === "command",
          "text-success": log.type === "success",
          "text-error": log.type === "error",
          "text-warning animate-pulse": log.type === "running",
          "pl-4": log.indented
        })}"> [${ssrInterpolate(formatTime(log.timestamp))}] ${ssrInterpolate(log.content)}</div></div>`);
      });
      _push(`<!--]--></div></div><div class="flex justify-between items-center mt-4"><div class="flex gap-2"><button class="btn btn-error btn-sm"> Cancel Deployment </button></div><div class="flex gap-2"><div class="badge badge-neutral"> webhook-id: 123 </div><div class="badge badge-neutral"> deploy-id: 456 </div></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/backend/Pages/BackEnd/Deploy/DeployStatus.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
