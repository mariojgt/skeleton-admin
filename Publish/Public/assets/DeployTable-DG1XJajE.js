import { ref, computed, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { format } from "date-fns";
const itemsPerPage = 10;
const _sfc_main = {
  __name: "DeployTable",
  __ssrInlineRender: true,
  props: {
    deployments: {
      type: Array,
      required: true
    }
  },
  emits: ["viewDeployment"],
  setup(__props, { emit: __emit }) {
    const filters = ref({
      search: "",
      status: "",
      dateRange: "24h",
      branch: ""
    });
    const sortColumn = ref("started_at");
    ref("desc");
    const currentPage = ref(1);
    const props = __props;
    const totalDeployments = computed(() => props.deployments.length);
    const totalPages = computed(
      () => Math.ceil(totalDeployments.value / itemsPerPage)
    );
    const startIndex = computed(() => (currentPage.value - 1) * itemsPerPage + 1);
    const endIndex = computed(
      () => Math.min(currentPage.value * itemsPerPage, totalDeployments.value)
    );
    const formatDate = (date) => format(new Date(date), "MMM dd, yyyy");
    const formatTime = (date) => format(new Date(date), "HH:mm:ss");
    const formatDuration = (seconds) => {
      if (seconds < 60) return `${seconds}s`;
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `${minutes}m ${remainingSeconds}s`;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto py-6" }, _attrs))}><div class="mb-6"><h2 class="text-2xl font-bold mb-4">Deployment History</h2><div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4"><div class="form-control"><label class="label"><span class="label-text">Search</span></label><input type="text" placeholder="Search by repository or commit..." class="input input-bordered w-full"${ssrRenderAttr("value", filters.value.search)}></div><div class="form-control"><label class="label"><span class="label-text">Status</span></label><select class="select select-bordered w-full"><option value=""${ssrIncludeBooleanAttr(Array.isArray(filters.value.status) ? ssrLooseContain(filters.value.status, "") : ssrLooseEqual(filters.value.status, "")) ? " selected" : ""}>All Status</option><option value="completed"${ssrIncludeBooleanAttr(Array.isArray(filters.value.status) ? ssrLooseContain(filters.value.status, "completed") : ssrLooseEqual(filters.value.status, "completed")) ? " selected" : ""}>Completed</option><option value="failed"${ssrIncludeBooleanAttr(Array.isArray(filters.value.status) ? ssrLooseContain(filters.value.status, "failed") : ssrLooseEqual(filters.value.status, "failed")) ? " selected" : ""}>Failed</option><option value="running"${ssrIncludeBooleanAttr(Array.isArray(filters.value.status) ? ssrLooseContain(filters.value.status, "running") : ssrLooseEqual(filters.value.status, "running")) ? " selected" : ""}>Running</option></select></div><div class="form-control"><label class="label"><span class="label-text">Date Range</span></label><select class="select select-bordered w-full"><option value="24h"${ssrIncludeBooleanAttr(Array.isArray(filters.value.dateRange) ? ssrLooseContain(filters.value.dateRange, "24h") : ssrLooseEqual(filters.value.dateRange, "24h")) ? " selected" : ""}>Last 24 Hours</option><option value="7d"${ssrIncludeBooleanAttr(Array.isArray(filters.value.dateRange) ? ssrLooseContain(filters.value.dateRange, "7d") : ssrLooseEqual(filters.value.dateRange, "7d")) ? " selected" : ""}>Last 7 Days</option><option value="30d"${ssrIncludeBooleanAttr(Array.isArray(filters.value.dateRange) ? ssrLooseContain(filters.value.dateRange, "30d") : ssrLooseEqual(filters.value.dateRange, "30d")) ? " selected" : ""}>Last 30 Days</option><option value="all"${ssrIncludeBooleanAttr(Array.isArray(filters.value.dateRange) ? ssrLooseContain(filters.value.dateRange, "all") : ssrLooseEqual(filters.value.dateRange, "all")) ? " selected" : ""}>All Time</option></select></div></div></div><div class="bg-base-100 rounded-box shadow-xl"><div class="overflow-x-auto"><table class="table table-zebra w-full"><thead><tr><th class="cursor-pointer hover:bg-base-200"><div class="flex items-center gap-2"> ID `);
      if (sortColumn.value === "id") {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4"></path></svg>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></th><th>Commit</th><th class="cursor-pointer hover:bg-base-200"><div class="flex items-center gap-2"> Status `);
      if (sortColumn.value === "status") {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4"></path></svg>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></th><th class="cursor-pointer hover:bg-base-200"><div class="flex items-center gap-2"> Started At `);
      if (sortColumn.value === "started_at") {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4"></path></svg>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></th><th>Duration</th><th>Actions</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(__props.deployments, (deployment) => {
        _push(`<tr class="hover"><td class="font-mono">#${ssrInterpolate(deployment.id)}</td><td><div class="flex items-center gap-2"><div class="font-mono text-sm">${ssrInterpolate(deployment.commit_hash.substring(
          0,
          7
        ))}</div><button class="btn btn-ghost btn-xs"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg></button></div></td><td><div class="${ssrRenderClass({
          badge: true,
          "badge-success": deployment.status === "completed",
          "badge-error": deployment.status === "failed",
          "badge-warning animate-pulse": deployment.status === "running",
          "badge-info": deployment.status === "pending"
        })}">${ssrInterpolate(deployment.status)}</div>`);
        if (deployment.error) {
          _push(`<div class="text-error text-sm mt-1">${ssrInterpolate(deployment.error.substring(0, 50))}... </div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</td><td><div>${ssrInterpolate(formatDate(deployment.started_at))}</div><div class="text-sm opacity-60">${ssrInterpolate(formatTime(deployment.started_at))}</div></td><td>${ssrInterpolate(formatDuration(deployment.duration))}</td><td><div class="flex items-center gap-2"><button class="btn btn-ghost btn-sm"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg> View </button><div class="dropdown dropdown-end"><label tabindex="0" class="btn btn-ghost btn-sm"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path></svg></label><ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"><li><a><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg> Download Logs </a></li><li><a><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg> Redeploy This Commit </a></li></ul></div></div></td></tr>`);
      });
      _push(`<!--]--></tbody></table></div><div class="flex justify-between items-center p-4 border-t border-base-300"><div class="text-sm opacity-70"> Showing ${ssrInterpolate(startIndex.value)} to ${ssrInterpolate(endIndex.value)} of ${ssrInterpolate(totalDeployments.value)} deployments </div><div class="join"><button class="join-item btn btn-sm"${ssrIncludeBooleanAttr(currentPage.value === 1) ? " disabled" : ""}> « </button><button class="join-item btn btn-sm"> Page ${ssrInterpolate(currentPage.value)}</button><button class="join-item btn btn-sm"${ssrIncludeBooleanAttr(currentPage.value === totalPages.value) ? " disabled" : ""}> » </button></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/backend/Pages/BackEnd/Deploy/DeployTable.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
