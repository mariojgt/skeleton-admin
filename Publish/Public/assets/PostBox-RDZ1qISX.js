import { defineComponent, ref, onMounted, mergeProps, unref, createVNode, resolveDynamicComponent, useSSRContext, isRef } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderClass, ssrRenderStyle, ssrRenderVNode, ssrGetDirectiveProps, ssrRenderSlot, ssrRenderTeleport } from "vue/server-renderer";
import { usePage, router } from "@inertiajs/vue3";
import "./axios-BWWnXGbF.js";
import { useMessage } from "naive-ui";
import { M as MarkdownRenderer } from "./Markdown-D1WgnuMs.js";
import { AlertTriangle, PencilLine, X, Type, FolderOpen, MessageSquare, PenTool, Eye, FileCode, ChevronDown, Info, AlertCircle, Trash2, Send, Brackets, Terminal, Database, Code, FileJson, Bold, Italic, Hash, List, Quote, Link2 } from "lucide-vue-next";
import "./CommentsSingle-BGRW2ED3.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Post",
  __ssrInlineRender: true,
  props: {
    commentClass: {
      type: String,
      default: "w-full rounded-lg"
    },
    categories: {
      type: Array,
      default: () => []
    },
    topitEdit: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["fresh-comments", "close"],
  setup(__props, { emit: __emit }) {
    const vClickOutside = {
      mounted: (el, binding) => {
        el._clickOutside = (event) => {
          if (!(el === event.target || el.contains(event.target))) {
            binding.value();
          }
        };
        document.body.addEventListener("click", el._clickOutside);
      },
      unmounted: (el) => {
        document.body.removeEventListener("click", el._clickOutside);
      }
    };
    useMessage();
    const isPreviewMode = ref(false);
    ref(null);
    const showDeleteModal = ref(false);
    const deleteConfirmation = ref("");
    const showCodeMenu = ref(false);
    const lesson_content = ref("");
    const comment_title = ref("");
    const selected_channel = ref("");
    const codeLanguages = [
      { label: "JavaScript", value: "javascript", icon: Brackets },
      { label: "PHP", value: "php", icon: FileCode },
      { label: "Python", value: "python", icon: Terminal },
      { label: "C++", value: "cpp", icon: Terminal },
      { label: "Java", value: "java", icon: Terminal },
      { label: "Ruby", value: "ruby", icon: Terminal },
      { label: "SQL", value: "sql", icon: Database },
      { label: "HTML", value: "html", icon: Code },
      { label: "CSS", value: "css", icon: Code },
      { label: "TypeScript", value: "typescript", icon: Brackets },
      { label: "Go", value: "go", icon: Terminal },
      { label: "Rust", value: "rust", icon: Terminal },
      { label: "Shell", value: "bash", icon: Terminal },
      { label: "JSON", value: "json", icon: FileJson },
      { label: "XML", value: "xml", icon: Code },
      { label: "YAML", value: "yaml", icon: FileCode }
    ];
    const formatTools = [
      { label: "Bold", icon: Bold, prefix: "**", suffix: "**" },
      { label: "Italic", icon: Italic, prefix: "*", suffix: "*" },
      { label: "Code", icon: Code, prefix: "`", suffix: "`" },
      { label: "Heading", icon: Hash, prefix: "# ", suffix: "" },
      { label: "List", icon: List, prefix: "- ", suffix: "" },
      { label: "Quote", icon: Quote, prefix: "> ", suffix: "" },
      { label: "Link", icon: Link2, prefix: "[", suffix: "](url)" }
    ];
    const props = __props;
    onMounted(() => {
      var _a;
      if ((_a = props.topitEdit) == null ? void 0 : _a.id) {
        lesson_content.value = props.topitEdit.content;
        comment_title.value = props.topitEdit.title;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed inset-0 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm z-50" }, _attrs))}>`);
      if (showDeleteModal.value) {
        _push(`<div class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[70]"><div class="bg-dark-blue-100 p-6 rounded-xl border border-gray-700 w-full max-w-md"><h3 class="text-lg font-semibold text-white mb-4 flex items-center gap-2">`);
        _push(ssrRenderComponent(unref(AlertTriangle), { class: "w-5 h-5 text-red-400" }, null, _parent));
        _push(` Confirm Deletion </h3><p class="text-gray-300 text-sm mb-4"> This action cannot be undone. Please type <span class="text-white font-medium">${ssrInterpolate(comment_title.value)}</span> to confirm. </p><input${ssrRenderAttr("value", deleteConfirmation.value)} type="text" placeholder="Type post title to confirm" class="w-full px-3 py-2 bg-dark-blue-200 border border-gray-700 rounded-lg text-white placeholder-gray-500 mb-4"><div class="flex justify-end gap-3"><button type="button" class="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white"> Cancel </button><button type="button"${ssrIncludeBooleanAttr(deleteConfirmation.value !== comment_title.value) ? " disabled" : ""} class="px-4 py-2 bg-red-500 text-white rounded-lg text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"> Delete Post </button></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="w-full max-w-3xl bg-dark-blue-100 rounded-xl shadow-xl border border-gray-700/50">`);
      if (unref(usePage)().props.isUserAuth) {
        _push(`<form><div class="flex items-center justify-between p-4 border-b border-gray-700/50"><div class="flex items-center gap-2">`);
        _push(ssrRenderComponent(unref(PencilLine), { class: "w-5 h-5 text-purple-400" }, null, _parent));
        _push(`<h2 class="text-lg font-semibold text-white">${ssrInterpolate(((_a = props.topitEdit) == null ? void 0 : _a.id) ? "Edit Discussion" : "New Discussion")}</h2></div><button type="button" class="p-1 text-gray-400 hover:text-white transition-colors">`);
        _push(ssrRenderComponent(unref(X), { class: "w-5 h-5" }, null, _parent));
        _push(`</button></div><div class="p-4 space-y-4"><div class="space-y-2"><label for="commentTitle" class="flex items-center gap-2 text-sm font-medium text-gray-300">`);
        _push(ssrRenderComponent(unref(Type), { class: "w-4 h-4" }, null, _parent));
        _push(` Title <span class="text-red-400">*</span></label><input id="commentTitle"${ssrRenderAttr("value", comment_title.value)} type="text" placeholder="What&#39;s your topic about?" class="w-full px-3 py-2 bg-dark-blue-200 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"></div>`);
        if (!((_b = props.topitEdit) == null ? void 0 : _b.id)) {
          _push(`<div class="space-y-2"><label for="channel" class="flex items-center gap-2 text-sm font-medium text-gray-300">`);
          _push(ssrRenderComponent(unref(FolderOpen), { class: "w-4 h-4" }, null, _parent));
          _push(` Select Topic <span class="text-red-400">*</span></label><select id="channel" class="w-full px-3 py-2 bg-dark-blue-200 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all appearance-none"><option value="" class="bg-dark-blue-200"${ssrIncludeBooleanAttr(Array.isArray(selected_channel.value) ? ssrLooseContain(selected_channel.value, "") : ssrLooseEqual(selected_channel.value, "")) ? " selected" : ""}>Choose a category</option><!--[-->`);
          ssrRenderList(__props.categories, (category) => {
            _push(`<option${ssrRenderAttr("value", category.slug)} class="bg-dark-blue-200"${ssrIncludeBooleanAttr(Array.isArray(selected_channel.value) ? ssrLooseContain(selected_channel.value, category.slug) : ssrLooseEqual(selected_channel.value, category.slug)) ? " selected" : ""}>${ssrInterpolate(category.name)}</option>`);
          });
          _push(`<!--]--></select></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="space-y-2"><label class="flex items-center gap-2 text-sm font-medium text-gray-300">`);
        _push(ssrRenderComponent(unref(MessageSquare), { class: "w-4 h-4" }, null, _parent));
        _push(` Content <span class="text-red-400">*</span></label><div class="flex border-b border-gray-700/50"><button type="button" class="${ssrRenderClass([[
          !isPreviewMode.value ? "text-purple-400 border-purple-400" : "text-gray-400 border-transparent hover:text-gray-300"
        ], "px-4 py-2 text-sm font-medium transition-colors border-b-2"])}"><div class="flex items-center gap-2">`);
        _push(ssrRenderComponent(unref(PenTool), { class: "w-4 h-4" }, null, _parent));
        _push(` Write </div></button><button type="button" class="${ssrRenderClass([[
          isPreviewMode.value ? "text-purple-400 border-purple-400" : "text-gray-400 border-transparent hover:text-gray-300"
        ], "px-4 py-2 text-sm font-medium transition-colors border-b-2"])}"><div class="flex items-center gap-2">`);
        _push(ssrRenderComponent(unref(Eye), { class: "w-4 h-4" }, null, _parent));
        _push(` Preview </div></button></div><div style="${ssrRenderStyle(!isPreviewMode.value ? null : { display: "none" })}" class="space-y-2"><div class="flex flex-wrap gap-1 p-2 bg-dark-blue-200 rounded-t-lg border border-gray-700"><!--[-->`);
        ssrRenderList(formatTools, (tool) => {
          _push(`<button type="button" class="p-1.5 text-gray-400 hover:text-white rounded transition-colors"${ssrRenderAttr("title", tool.label)}>`);
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(tool.icon), { class: "w-4 h-4" }, null), _parent);
          _push(`</button>`);
        });
        _push(`<!--]--><div class="relative"><button type="button" class="${ssrRenderClass([{ "text-purple-400": showCodeMenu.value }, "p-1.5 text-gray-400 hover:text-white rounded transition-colors flex items-center gap-1"])}" title="Insert Code Block">`);
        _push(ssrRenderComponent(unref(FileCode), { class: "w-4 h-4" }, null, _parent));
        _push(ssrRenderComponent(unref(ChevronDown), { class: "w-3 h-3" }, null, _parent));
        _push(`</button>`);
        if (showCodeMenu.value) {
          _push(`<div${ssrRenderAttrs(mergeProps({ class: "absolute left-0 top-full mt-1 w-48 py-1 bg-dark-blue-100 rounded-lg border border-gray-700 shadow-xl z-[60]" }, ssrGetDirectiveProps(_ctx, vClickOutside, () => showCodeMenu.value = false)))}><!--[-->`);
          ssrRenderList(codeLanguages, (lang) => {
            _push(`<button type="button" class="w-full px-4 py-2 text-sm text-left text-gray-300 hover:bg-dark-blue-200 hover:text-white flex items-center gap-2">`);
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(lang.icon), { class: "w-4 h-4" }, null), _parent);
            _push(` ${ssrInterpolate(lang.label)}</button>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><textarea id="comment" placeholder="Share your thoughts with the community..." class="w-full h-64 px-4 py-3 bg-dark-blue-200 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all resize-none">${ssrInterpolate(lesson_content.value)}</textarea></div><div style="${ssrRenderStyle(isPreviewMode.value ? null : { display: "none" })}" class="min-h-[16rem] p-4 bg-dark-blue-200 rounded-lg border border-gray-700">`);
        if (lesson_content.value) {
          _push(`<div>`);
          _push(ssrRenderComponent(MarkdownRenderer, { content: lesson_content.value }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<div class="text-gray-500 italic"> Nothing to preview yet... </div>`);
        }
        _push(`</div><div class="flex items-center gap-2 text-xs text-gray-500">`);
        _push(ssrRenderComponent(unref(Info), { class: "w-4 h-4" }, null, _parent));
        _push(`<span> Markdown supported: <span class="text-gray-400">**bold**, *italic*, \`code\`, etc.</span></span></div></div></div><div class="flex flex-col sm:flex-row justify-between items-center gap-4 p-4 border-t border-gray-700/50 bg-dark-blue-200/50"><div class="flex items-center text-gray-400 text-sm">`);
        _push(ssrRenderComponent(unref(AlertCircle), { class: "w-4 h-4 mr-2" }, null, _parent));
        _push(` Please follow community guidelines </div><div class="flex gap-2 w-full sm:w-auto"><button type="button" class="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors flex-1 sm:flex-initial">`);
        _push(ssrRenderComponent(unref(X), { class: "w-4 h-4" }, null, _parent));
        _push(` Cancel </button>`);
        if ((_c = props.topitEdit) == null ? void 0 : _c.id) {
          _push(`<button type="button" class="flex items-center justify-center gap-2 px-4 py-2 bg-red-500/10 text-red-400 rounded-lg hover:bg-red-500/20 text-sm font-medium transition-colors flex-1 sm:flex-initial">`);
          _push(ssrRenderComponent(unref(Trash2), { class: "w-4 h-4" }, null, _parent));
          _push(` Delete </button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<button type="submit" class="flex items-center justify-center gap-2 px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 text-sm font-medium transition-colors flex-1 sm:flex-initial">`);
        _push(ssrRenderComponent(unref(Send), { class: "w-4 h-4" }, null, _parent));
        _push(` ${ssrInterpolate(((_d = props.topitEdit) == null ? void 0 : _d.id) ? "Update" : "Post")}</button></div></div></form>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Components/FrontEnd/Forum/Post.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "PostBox",
  __ssrInlineRender: true,
  props: {
    categories: {
      type: Array,
      default: () => []
    },
    postBtnClass: {
      type: String,
      default: "w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-2 px-4 rounded-lg mb-6"
    },
    topitEdit: {
      type: Object,
      default: () => {
      }
    }
  },
  emits: ["displayLogin"],
  setup(__props, { emit: __emit }) {
    let newForumToogle = ref(false);
    const props = __props;
    const refreshComments = () => {
      setTimeout(() => {
        router.reload({ only: ["blogPost"] });
      }, 300);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "mt-3 bg-dark-100 rounded-lg" }, _attrs))}><button class="${ssrRenderClass(props.postBtnClass)}">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(`New Dicussion`);
      }, _push, _parent);
      _push(`</button>`);
      ssrRenderTeleport(_push, (_push2) => {
        if (unref(newForumToogle)) {
          _push2(ssrRenderComponent(_sfc_main$1, {
            onFreshComments: refreshComments,
            onClose: ($event) => isRef(newForumToogle) ? newForumToogle.value = false : newForumToogle = false,
            categories: props.categories,
            topitEdit: props.topitEdit
          }, null, _parent));
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
      _push(`</section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Components/FrontEnd/Forum/PostBox.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
