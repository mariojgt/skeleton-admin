import { defineComponent, ref, watch, mergeProps, useSSRContext, unref, withCtx, createVNode, toDisplayString, watchEffect, onMounted, isRef, createTextVNode, openBlock, createBlock, createCommentVNode, renderSlot, withKeys, computed, onUnmounted, resolveDynamicComponent, resolveDirective } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrRenderDynamicModel, ssrRenderVNode, ssrGetDirectiveProps, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
import { usePage, Link } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { Switch, TransitionRoot, Dialog, TransitionChild, DialogPanel, DialogTitle } from "@headlessui/vue";
import DOMPurify from "dompurify";
import { marked } from "marked";
import "turndown";
import { FileCode, FileText, Bold, Italic, Underline, Strikethrough, Link as Link$1, Code, Quote, List, ListOrdered, AlignLeft, AlignCenter, AlignRight, AlignJustify, Eye, Calendar, ChevronDown, ChevronLeft, ChevronRight } from "lucide-vue-next";
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay, isToday } from "date-fns";
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "Input",
  __ssrInlineRender: true,
  props: {
    label: {},
    name: {},
    id: {},
    placeholder: { default: "" },
    type: { default: "text" },
    modelValue: {},
    messageClass: { default: "text-red-500 text-sm mt-1" },
    labelClass: { default: "block text-lg font-bold mb-2" },
    inputClass: { default: "input input-primary input-bordered w-full" },
    required: { type: Boolean, default: false },
    pattern: {},
    minLength: {},
    maxLength: {}
  },
  emits: ["update:modelValue", "blur"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const errorMessage = ref(null);
    const page = usePage();
    watch(
      () => page.props.errors,
      (newErrors) => {
        if (newErrors && newErrors[props.name]) {
          errorMessage.value = newErrors[props.name];
        } else {
          errorMessage.value = null;
        }
      },
      { deep: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "form-control" }, _attrs))} data-v-82fb1924><label${ssrRenderAttr("for", _ctx.id)} class="label" data-v-82fb1924><span class="${ssrRenderClass(_ctx.labelClass)}" data-v-82fb1924>${ssrInterpolate(_ctx.label)}</span></label><input${ssrRenderAttr("id", _ctx.id)}${ssrRenderAttr("name", _ctx.name)}${ssrRenderAttr("type", _ctx.type)} class="${ssrRenderClass([_ctx.inputClass, { "error": errorMessage.value }])}"${ssrRenderAttr("placeholder", _ctx.placeholder)}${ssrRenderAttr("value", _ctx.modelValue)} data-v-82fb1924>`);
      if (errorMessage.value) {
        _push(`<span class="${ssrRenderClass(_ctx.messageClass)}" role="alert" aria-live="polite" data-v-82fb1924><strong data-v-82fb1924>${ssrInterpolate(errorMessage.value)}</strong></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@mariojgt/masterui/packages/Input/Input.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const InputField = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-82fb1924"]]);
const _sfc_main$b = {
  __name: "Link",
  __ssrInlineRender: true,
  props: {
    name: {
      type: String,
      default: "Add you link name here"
    },
    link: {
      type: String,
      default: "login"
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Link), mergeProps({
        href: __props.link,
        method: "get",
        class: "btn btn-primary"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="inline-block ml-1"${_scopeId}>${ssrInterpolate(props.name)}</span>`);
          } else {
            return [
              createVNode("span", { class: "inline-block ml-1" }, toDisplayString(props.name), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@mariojgt/masterui/packages/Link/Link.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = {
  __name: "Password",
  __ssrInlineRender: true,
  props: {
    label: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    id: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    modelValue: {
      type: String,
      default: ""
    },
    messageClass: {
      type: String,
      default: "invalid-feedback text-primary"
    },
    labelClass: {
      type: String,
      default: "block text-lg font-bold mb-2"
    },
    inputClass: {
      type: String,
      default: "w-full pr-16 input input-primary input-bordered"
    },
    showPasswordClass: {
      type: String,
      default: "absolute top-0 right-0 rounded-l-none btn btn-primary"
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    let errorMessage = ref(null);
    watch(
      () => {
        var _a;
        return (_a = usePage().props) == null ? void 0 : _a.errors;
      },
      (v) => {
        if (usePage().props.errors[props.name]) {
          errorMessage.value = usePage().props.errors[props.name];
        }
      }
    );
    const props = __props;
    let showPassword = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "form-control" }, _attrs))}><label class="label"><span class="${ssrRenderClass(__props.labelClass)}">${ssrInterpolate(props.label)}</span></label><div class="relative"><input class="${ssrRenderClass(__props.inputClass)}"${ssrRenderAttr("type", unref(showPassword) ? "text" : "password")} name="{{ props.name }}" id="{{ props.id }}"${ssrRenderAttr("placeholder", props.placeholder)}${ssrRenderAttr("value", __props.modelValue)}><a class="${ssrRenderClass(__props.showPasswordClass)}">`);
      if (unref(showPassword)) {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>`);
      } else {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"></path></svg>`);
      }
      _push(`</a></div>`);
      if (unref(errorMessage)) {
        _push(`<span class="${ssrRenderClass(__props.messageClass)}" role="alert"><strong>${ssrInterpolate(unref(errorMessage))}</strong></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@mariojgt/masterui/packages/Password/Password.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = {
  __name: "Submit",
  __ssrInlineRender: true,
  props: {
    name: {
      type: String,
      default: "Login"
    },
    class: {
      type: String,
      default: "btn btn-primary"
    }
  },
  emits: ["click"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="form-control pt-6"><button class="${ssrRenderClass(props.class)}"><span class="inline-block mr-2">${ssrInterpolate(props.name)}</span>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</button></div></div>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@mariojgt/masterui/packages/Submit/Submit.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "Select",
  __ssrInlineRender: true,
  props: {
    label: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    id: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    options: {
      type: Object,
      default: {}
    },
    modelValue: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    let errorMessage = ref(null);
    watch(
      () => {
        var _a;
        return (_a = usePage().props) == null ? void 0 : _a.errors;
      },
      (v) => {
        if (usePage().props.errors[props.name]) {
          errorMessage.value = usePage().props.errors[props.name];
        }
      }
    );
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="form-control"><label class="label"><span class="block text-lg font-bold mb-2">${ssrInterpolate(props.label)}</span></label><select class="select select-primary w-full" id="{{ props.id }}"${ssrRenderAttr("value", __props.modelValue)}><!--[-->`);
      ssrRenderList(props.options, (item, index) => {
        _push(`<option${ssrRenderAttr("value", index)}>${ssrInterpolate(item)}</option>`);
      });
      _push(`<!--]--></select></div><span class="invalid-feedback text-primary" role="alert"><strong>${ssrInterpolate(unref(errorMessage))}</strong></span><!--]-->`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@mariojgt/masterui/packages/Select/Select.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "Image",
  __ssrInlineRender: true,
  props: {
    label: {},
    name: {},
    id: {},
    placeholder: {},
    modelValue: {},
    endpoint: {},
    loadData: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    let searchString = ref("");
    let availableSearchItems = ref({ data: [] });
    let selectedMedia = ref(props.modelValue || []);
    let errorMessage = ref(null);
    watchEffect(() => {
      selectedMedia.value = props.loadData || [];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "form-control" }, _attrs))}><label class="label"><span class="block text-lg font-bold mb-2">${ssrInterpolate(props.label)}</span></label><input class="input input-primary input-bordered"${ssrRenderAttr("name", props.name)}${ssrRenderAttr("id", props.id)}${ssrRenderAttr("placeholder", props.placeholder)}${ssrRenderAttr("value", unref(searchString))} autocomplete="off">`);
      if (unref(errorMessage)) {
        _push(`<span class="invalid-feedback text-primary mt-2" role="alert"><strong>${ssrInterpolate(unref(errorMessage))}</strong></span>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(availableSearchItems).data[0]) {
        _push(`<div class="mt-3 bg-base-100 rounded"><div class="px-2 py-3 bg-primary text-white rounded-t"><strong>Available Items</strong></div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-2 bg-dark-100"><!--[-->`);
        ssrRenderList(unref(availableSearchItems).data, (item, index) => {
          _push(`<div class="flex flex-col items-center border border-success p-3 hover:text-white rounded cursor-pointer"><img${ssrRenderAttr("src", item.url.default)} class="h-60 w-auto mb-2"><strong class="text-lg font-bold">${ssrInterpolate(item.name)}</strong><button class="btn btn-success mt-2 w-full"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mt-2"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path></svg></button></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(selectedMedia).length > 0) {
        _push(`<div class="mt-3 bg-base-300 rounded"><div class="px-2 py-3 bg-primary text-white rounded-t"><strong>Selected Items</strong></div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-2"><!--[-->`);
        ssrRenderList(unref(selectedMedia), (item, index) => {
          _push(`<div class="flex flex-col items-center border border-error p-3 hover:text-white rounded cursor-pointer"><img${ssrRenderAttr("src", item.url.default)} class="h-60 w-auto mb-2"><strong class="text-lg font-bold">${ssrInterpolate(item.name)}</strong><button class="btn btn-error mt-2 w-full"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mt-2"><path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path></svg></button></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@mariojgt/masterui/packages/Image/Image.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  __name: "TextMultipleSelector",
  __ssrInlineRender: true,
  props: {
    label: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    id: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    modelValue: {
      type: String,
      default: ""
    },
    model: {
      type: String,
      default: ""
    },
    columns: {
      type: Object,
      default: null
    },
    endpoint: {
      type: String,
      default: ""
    },
    loadData: {
      type: Object,
      default: null
    },
    singleMode: {
      type: Boolean,
      default: false
    },
    displayKey: {
      type: String,
      default: "name"
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    let errorMessage = ref(null);
    watch(
      () => {
        var _a;
        return (_a = usePage().props) == null ? void 0 : _a.errors;
      },
      (v) => {
        if (usePage().props.errors[props.name]) {
          errorMessage.value = usePage().props.errors[props.name];
        }
      }
    );
    const props = __props;
    let searchString = ref("");
    let availableItems = ref([]);
    let selectedItem = ref([]);
    onMounted(() => {
      if (props.loadData) {
        if (props.singleMode) {
          selectedItem.value = [props.loadData];
        } else {
          selectedItem.value = props.loadData;
        }
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "form-control" }, _attrs))}><label class="label"><span class="block text-lg font-bold mb-2">${ssrInterpolate(props.label)}</span></label><input class="input input-primary input-bordered"${ssrRenderAttr("name", props.name)}${ssrRenderAttr("id", props.id)}${ssrRenderAttr("placeholder", props.placeholder)} autocomplete="off"${ssrRenderAttr("value", unref(searchString))}><span class="invalid-feedback text-primary" role="alert"><strong>${ssrInterpolate(unref(errorMessage))}</strong></span>`);
      if (unref(availableItems).data) {
        _push(`<div class="mt-3 rounded p-1 bg-base-100"><div class="px-2 py-3 text-xl font-bold bg-primary text-white rounded mb-2 text-left"><strong>Available Items</strong></div><!--[-->`);
        ssrRenderList(unref(availableItems).data, (item, index) => {
          _push(`<div class="flex justify-between items-center text-black p-2 bg-white rounded-lg hover:bg-secondary border border-black mb-2"><p class="text-2xl font-bold text-black">${ssrInterpolate(item[props.displayKey])}</p><div class="btn btn-success"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path></svg></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(selectedItem).length > 0) {
        _push(`<div class="mt-3 rounded p-1 bg-base-100"><div class="px-2 py-3 text-xl bg-secondary text-white rounded mb-2 text-left"><strong>Selected Items</strong></div><!--[-->`);
        ssrRenderList(unref(selectedItem), (item, index) => {
          _push(`<div class="flex justify-between items-center text-black p-2 bg-white rounded-lg hover:bg-secondary border border-black mb-2"><p class="text-2xl font-bold text-black">${ssrInterpolate(item[props.displayKey])}</p><div class="btn btn-error"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white"><path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path></svg></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@mariojgt/masterui/packages/MultipleText/TextMultipleSelector.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "Toggle",
  __ssrInlineRender: true,
  props: {
    label: String,
    name: String,
    id: String,
    placeholder: String,
    modelValue: Boolean,
    class: String
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    let errorMessage = ref(null);
    let checkedToggle = ref(Boolean(props.modelValue));
    watch(
      () => {
        var _a;
        return (_a = usePage().props) == null ? void 0 : _a.errors;
      },
      (v) => {
        errorMessage.value = usePage().props.errors[props.name] || null;
      }
    );
    watch(
      () => props.modelValue,
      (newValue) => {
        checkedToggle.value = newValue;
      }
    );
    watch(checkedToggle, (newValue) => {
      emit("update:modelValue", newValue);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "form-control" }, _attrs))}><label class="label"><span class="block text-lg font-bold mb-2">${ssrInterpolate(props.label)}</span></label>`);
      _push(ssrRenderComponent(unref(Switch), {
        modelValue: unref(checkedToggle),
        "onUpdate:modelValue": ($event) => isRef(checkedToggle) ? checkedToggle.value = $event : checkedToggle = $event,
        class: [unref(checkedToggle) ? "bg-primary" : "bg-gray-200", "relative inline-flex h-6 w-11 items-center rounded-full"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="sr-only"${_scopeId}>Toggle</span><span class="${ssrRenderClass([unref(checkedToggle) ? "translate-x-6" : "translate-x-1", "inline-block h-4 w-4 transform rounded-full bg-white transition"])}"${_scopeId}></span>`);
          } else {
            return [
              createVNode("span", { class: "sr-only" }, "Toggle"),
              createVNode("span", {
                class: [unref(checkedToggle) ? "translate-x-6" : "translate-x-1", "inline-block h-4 w-4 transform rounded-full bg-white transition"]
              }, null, 2)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(errorMessage)) {
        _push(`<span class="invalid-feedback text-primary" role="alert"><strong>${ssrInterpolate(unref(errorMessage))}</strong></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@mariojgt/masterui/packages/Toggle/Toggle.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "ReusableModal",
  __ssrInlineRender: true,
  props: {
    show: Boolean,
    title: String,
    content: String,
    cancelText: {
      type: String,
      default: "Cancel"
    },
    confirmText: {
      type: String,
      default: "Confirm"
    },
    isLarge: {
      type: Boolean,
      default: false
    },
    modalClass: {
      type: String,
      default: ""
    },
    topCloseButtonClass: {
      type: String,
      default: ""
    },
    showFooter: {
      type: Boolean,
      default: true
    },
    showHeader: {
      type: Boolean,
      default: true
    },
    showModalBox: {
      type: Boolean,
      default: true
    },
    alwaysShowClose: {
      // New prop
      type: Boolean,
      default: true
    },
    closeOnBackdropClick: {
      // New prop
      type: Boolean,
      default: true
    }
  },
  emits: ["close", "confirm"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const emitClose = () => {
      emit("close");
    };
    const emitConfirm = () => {
      emit("confirm");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TransitionRoot), mergeProps({
        appear: "",
        show: __props.show,
        as: "template"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Dialog), {
              as: "div",
              onClose: emitClose,
              class: "relative z-50"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(TransitionChild), {
                    as: "template",
                    enter: "duration-300 ease-out",
                    "enter-from": "opacity-0",
                    "enter-to": "opacity-100",
                    leave: "duration-200 ease-in",
                    "leave-from": "opacity-100",
                    "leave-to": "opacity-0"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="fixed inset-0 bg-black/25 sm:bg-black/25" aria-hidden="true"${_scopeId3}></div>`);
                      } else {
                        return [
                          createVNode("div", {
                            class: "fixed inset-0 bg-black/25 sm:bg-black/25",
                            onClick: ($event) => __props.closeOnBackdropClick && emitClose(),
                            "aria-hidden": "true"
                          }, null, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="fixed inset-0 overflow-y-auto"${_scopeId2}><div class="flex min-h-full sm:items-center sm:justify-center sm:p-4 text-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(TransitionChild), {
                    as: "template",
                    enter: "transform transition ease-out duration-300",
                    "enter-from": "translate-y-full opacity-0 sm:scale-95 sm:translate-y-0",
                    "enter-to": "translate-y-0 opacity-100 sm:scale-100",
                    leave: "transform transition ease-in duration-200",
                    "leave-from": "translate-y-0 opacity-100 sm:scale-100",
                    "leave-to": "translate-y-full opacity-0 sm:scale-95 sm:translate-y-0"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(DialogPanel), {
                          class: [
                            "transform transition-all relative",
                            props.showModalBox ? "sm:modal-box" : "p-5",
                            { "sm:w-11/12 sm:max-w-5xl": props.isLarge },
                            "w-full min-h-screen sm:min-h-0 sm:w-auto",
                            "sm:rounded-lg",
                            __props.modalClass
                          ]
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              if (__props.showHeader || __props.alwaysShowClose) {
                                _push5(`<button class="${ssrRenderClass([[__props.topCloseButtonClass], "absolute right-4 top-4 p-2 rounded-full hover:bg-gray-100/10 transition-colors duration-200 z-[60]"])}" aria-label="Close modal"${_scopeId4}><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId4}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"${_scopeId4}></path></svg></button>`);
                              } else {
                                _push5(`<!---->`);
                              }
                              _push5(`<div class="p-6 sm:p-0"${_scopeId4}>`);
                              if (__props.showHeader) {
                                ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                                  _push5(ssrRenderComponent(unref(DialogTitle), {
                                    as: "h3",
                                    class: "text-2xl font-semibold text-white sm:text-gray-900 dark:sm:text-white mb-8"
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`${ssrInterpolate(__props.title || "Sign in")}`);
                                      } else {
                                        return [
                                          createTextVNode(toDisplayString(__props.title || "Sign in"), 1)
                                        ];
                                      }
                                    }),
                                    _: 1
                                  }, _parent5, _scopeId4));
                                }, _push5, _parent5, _scopeId4);
                              } else {
                                _push5(`<!---->`);
                              }
                              _push5(`<div class="mt-2"${_scopeId4}>`);
                              ssrRenderSlot(_ctx.$slots, "body", {}, () => {
                                _push5(`<p class="text-sm text-gray-500"${_scopeId4}>${ssrInterpolate(__props.content || "Your payment has been successfully submitted. We've sent you an email with all of the details of your order.")}</p>`);
                              }, _push5, _parent5, _scopeId4);
                              _push5(`</div>`);
                              if (__props.showFooter) {
                                _push5(`<div class="py-3 sm:flex sm:flex-row-reverse gap-4"${_scopeId4}><button type="button" class="btn btn-success w-full sm:w-auto"${_scopeId4}>${ssrInterpolate(__props.confirmText)}</button><button type="button" class="btn btn-error w-full sm:w-auto"${_scopeId4}>${ssrInterpolate(__props.cancelText)}</button></div>`);
                              } else {
                                _push5(`<!---->`);
                              }
                              _push5(`</div>`);
                            } else {
                              return [
                                __props.showHeader || __props.alwaysShowClose ? (openBlock(), createBlock("button", {
                                  key: 0,
                                  onClick: emitClose,
                                  class: ["absolute right-4 top-4 p-2 rounded-full hover:bg-gray-100/10 transition-colors duration-200 z-[60]", [__props.topCloseButtonClass]],
                                  "aria-label": "Close modal"
                                }, [
                                  (openBlock(), createBlock("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    class: "h-6 w-6",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor"
                                  }, [
                                    createVNode("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2",
                                      d: "M6 18L18 6M6 6l12 12"
                                    })
                                  ]))
                                ], 2)) : createCommentVNode("", true),
                                createVNode("div", { class: "p-6 sm:p-0" }, [
                                  __props.showHeader ? renderSlot(_ctx.$slots, "title", { key: 0 }, () => [
                                    createVNode(unref(DialogTitle), {
                                      as: "h3",
                                      class: "text-2xl font-semibold text-white sm:text-gray-900 dark:sm:text-white mb-8"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(__props.title || "Sign in"), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]) : createCommentVNode("", true),
                                  createVNode("div", { class: "mt-2" }, [
                                    renderSlot(_ctx.$slots, "body", {}, () => [
                                      createVNode("p", { class: "text-sm text-gray-500" }, toDisplayString(__props.content || "Your payment has been successfully submitted. We've sent you an email with all of the details of your order."), 1)
                                    ])
                                  ]),
                                  __props.showFooter ? (openBlock(), createBlock("div", {
                                    key: 1,
                                    class: "py-3 sm:flex sm:flex-row-reverse gap-4"
                                  }, [
                                    createVNode("button", {
                                      onClick: emitConfirm,
                                      type: "button",
                                      class: "btn btn-success w-full sm:w-auto"
                                    }, toDisplayString(__props.confirmText), 1),
                                    createVNode("button", {
                                      onClick: emitClose,
                                      type: "button",
                                      class: "btn btn-error w-full sm:w-auto"
                                    }, toDisplayString(__props.cancelText), 1)
                                  ])) : createCommentVNode("", true)
                                ])
                              ];
                            }
                          }),
                          _: 3
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(DialogPanel), {
                            class: [
                              "transform transition-all relative",
                              props.showModalBox ? "sm:modal-box" : "p-5",
                              { "sm:w-11/12 sm:max-w-5xl": props.isLarge },
                              "w-full min-h-screen sm:min-h-0 sm:w-auto",
                              "sm:rounded-lg",
                              __props.modalClass
                            ]
                          }, {
                            default: withCtx(() => [
                              __props.showHeader || __props.alwaysShowClose ? (openBlock(), createBlock("button", {
                                key: 0,
                                onClick: emitClose,
                                class: ["absolute right-4 top-4 p-2 rounded-full hover:bg-gray-100/10 transition-colors duration-200 z-[60]", [__props.topCloseButtonClass]],
                                "aria-label": "Close modal"
                              }, [
                                (openBlock(), createBlock("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  class: "h-6 w-6",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  stroke: "currentColor"
                                }, [
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M6 18L18 6M6 6l12 12"
                                  })
                                ]))
                              ], 2)) : createCommentVNode("", true),
                              createVNode("div", { class: "p-6 sm:p-0" }, [
                                __props.showHeader ? renderSlot(_ctx.$slots, "title", { key: 0 }, () => [
                                  createVNode(unref(DialogTitle), {
                                    as: "h3",
                                    class: "text-2xl font-semibold text-white sm:text-gray-900 dark:sm:text-white mb-8"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(__props.title || "Sign in"), 1)
                                    ]),
                                    _: 1
                                  })
                                ]) : createCommentVNode("", true),
                                createVNode("div", { class: "mt-2" }, [
                                  renderSlot(_ctx.$slots, "body", {}, () => [
                                    createVNode("p", { class: "text-sm text-gray-500" }, toDisplayString(__props.content || "Your payment has been successfully submitted. We've sent you an email with all of the details of your order."), 1)
                                  ])
                                ]),
                                __props.showFooter ? (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: "py-3 sm:flex sm:flex-row-reverse gap-4"
                                }, [
                                  createVNode("button", {
                                    onClick: emitConfirm,
                                    type: "button",
                                    class: "btn btn-success w-full sm:w-auto"
                                  }, toDisplayString(__props.confirmText), 1),
                                  createVNode("button", {
                                    onClick: emitClose,
                                    type: "button",
                                    class: "btn btn-error w-full sm:w-auto"
                                  }, toDisplayString(__props.cancelText), 1)
                                ])) : createCommentVNode("", true)
                              ])
                            ]),
                            _: 3
                          }, 8, ["class"])
                        ];
                      }
                    }),
                    _: 3
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode(unref(TransitionChild), {
                      as: "template",
                      enter: "duration-300 ease-out",
                      "enter-from": "opacity-0",
                      "enter-to": "opacity-100",
                      leave: "duration-200 ease-in",
                      "leave-from": "opacity-100",
                      "leave-to": "opacity-0"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", {
                          class: "fixed inset-0 bg-black/25 sm:bg-black/25",
                          onClick: ($event) => __props.closeOnBackdropClick && emitClose(),
                          "aria-hidden": "true"
                        }, null, 8, ["onClick"])
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "fixed inset-0 overflow-y-auto" }, [
                      createVNode("div", {
                        class: "flex min-h-full sm:items-center sm:justify-center sm:p-4 text-center",
                        onKeydown: withKeys(emitClose, ["esc"])
                      }, [
                        createVNode(unref(TransitionChild), {
                          as: "template",
                          enter: "transform transition ease-out duration-300",
                          "enter-from": "translate-y-full opacity-0 sm:scale-95 sm:translate-y-0",
                          "enter-to": "translate-y-0 opacity-100 sm:scale-100",
                          leave: "transform transition ease-in duration-200",
                          "leave-from": "translate-y-0 opacity-100 sm:scale-100",
                          "leave-to": "translate-y-full opacity-0 sm:scale-95 sm:translate-y-0"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(DialogPanel), {
                              class: [
                                "transform transition-all relative",
                                props.showModalBox ? "sm:modal-box" : "p-5",
                                { "sm:w-11/12 sm:max-w-5xl": props.isLarge },
                                "w-full min-h-screen sm:min-h-0 sm:w-auto",
                                "sm:rounded-lg",
                                __props.modalClass
                              ]
                            }, {
                              default: withCtx(() => [
                                __props.showHeader || __props.alwaysShowClose ? (openBlock(), createBlock("button", {
                                  key: 0,
                                  onClick: emitClose,
                                  class: ["absolute right-4 top-4 p-2 rounded-full hover:bg-gray-100/10 transition-colors duration-200 z-[60]", [__props.topCloseButtonClass]],
                                  "aria-label": "Close modal"
                                }, [
                                  (openBlock(), createBlock("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    class: "h-6 w-6",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor"
                                  }, [
                                    createVNode("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2",
                                      d: "M6 18L18 6M6 6l12 12"
                                    })
                                  ]))
                                ], 2)) : createCommentVNode("", true),
                                createVNode("div", { class: "p-6 sm:p-0" }, [
                                  __props.showHeader ? renderSlot(_ctx.$slots, "title", { key: 0 }, () => [
                                    createVNode(unref(DialogTitle), {
                                      as: "h3",
                                      class: "text-2xl font-semibold text-white sm:text-gray-900 dark:sm:text-white mb-8"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(__props.title || "Sign in"), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]) : createCommentVNode("", true),
                                  createVNode("div", { class: "mt-2" }, [
                                    renderSlot(_ctx.$slots, "body", {}, () => [
                                      createVNode("p", { class: "text-sm text-gray-500" }, toDisplayString(__props.content || "Your payment has been successfully submitted. We've sent you an email with all of the details of your order."), 1)
                                    ])
                                  ]),
                                  __props.showFooter ? (openBlock(), createBlock("div", {
                                    key: 1,
                                    class: "py-3 sm:flex sm:flex-row-reverse gap-4"
                                  }, [
                                    createVNode("button", {
                                      onClick: emitConfirm,
                                      type: "button",
                                      class: "btn btn-success w-full sm:w-auto"
                                    }, toDisplayString(__props.confirmText), 1),
                                    createVNode("button", {
                                      onClick: emitClose,
                                      type: "button",
                                      class: "btn btn-error w-full sm:w-auto"
                                    }, toDisplayString(__props.cancelText), 1)
                                  ])) : createCommentVNode("", true)
                                ])
                              ]),
                              _: 3
                            }, 8, ["class"])
                          ]),
                          _: 3
                        })
                      ], 32)
                    ])
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Dialog), {
                as: "div",
                onClose: emitClose,
                class: "relative z-50"
              }, {
                default: withCtx(() => [
                  createVNode(unref(TransitionChild), {
                    as: "template",
                    enter: "duration-300 ease-out",
                    "enter-from": "opacity-0",
                    "enter-to": "opacity-100",
                    leave: "duration-200 ease-in",
                    "leave-from": "opacity-100",
                    "leave-to": "opacity-0"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", {
                        class: "fixed inset-0 bg-black/25 sm:bg-black/25",
                        onClick: ($event) => __props.closeOnBackdropClick && emitClose(),
                        "aria-hidden": "true"
                      }, null, 8, ["onClick"])
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "fixed inset-0 overflow-y-auto" }, [
                    createVNode("div", {
                      class: "flex min-h-full sm:items-center sm:justify-center sm:p-4 text-center",
                      onKeydown: withKeys(emitClose, ["esc"])
                    }, [
                      createVNode(unref(TransitionChild), {
                        as: "template",
                        enter: "transform transition ease-out duration-300",
                        "enter-from": "translate-y-full opacity-0 sm:scale-95 sm:translate-y-0",
                        "enter-to": "translate-y-0 opacity-100 sm:scale-100",
                        leave: "transform transition ease-in duration-200",
                        "leave-from": "translate-y-0 opacity-100 sm:scale-100",
                        "leave-to": "translate-y-full opacity-0 sm:scale-95 sm:translate-y-0"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(DialogPanel), {
                            class: [
                              "transform transition-all relative",
                              props.showModalBox ? "sm:modal-box" : "p-5",
                              { "sm:w-11/12 sm:max-w-5xl": props.isLarge },
                              "w-full min-h-screen sm:min-h-0 sm:w-auto",
                              "sm:rounded-lg",
                              __props.modalClass
                            ]
                          }, {
                            default: withCtx(() => [
                              __props.showHeader || __props.alwaysShowClose ? (openBlock(), createBlock("button", {
                                key: 0,
                                onClick: emitClose,
                                class: ["absolute right-4 top-4 p-2 rounded-full hover:bg-gray-100/10 transition-colors duration-200 z-[60]", [__props.topCloseButtonClass]],
                                "aria-label": "Close modal"
                              }, [
                                (openBlock(), createBlock("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  class: "h-6 w-6",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  stroke: "currentColor"
                                }, [
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M6 18L18 6M6 6l12 12"
                                  })
                                ]))
                              ], 2)) : createCommentVNode("", true),
                              createVNode("div", { class: "p-6 sm:p-0" }, [
                                __props.showHeader ? renderSlot(_ctx.$slots, "title", { key: 0 }, () => [
                                  createVNode(unref(DialogTitle), {
                                    as: "h3",
                                    class: "text-2xl font-semibold text-white sm:text-gray-900 dark:sm:text-white mb-8"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(__props.title || "Sign in"), 1)
                                    ]),
                                    _: 1
                                  })
                                ]) : createCommentVNode("", true),
                                createVNode("div", { class: "mt-2" }, [
                                  renderSlot(_ctx.$slots, "body", {}, () => [
                                    createVNode("p", { class: "text-sm text-gray-500" }, toDisplayString(__props.content || "Your payment has been successfully submitted. We've sent you an email with all of the details of your order."), 1)
                                  ])
                                ]),
                                __props.showFooter ? (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: "py-3 sm:flex sm:flex-row-reverse gap-4"
                                }, [
                                  createVNode("button", {
                                    onClick: emitConfirm,
                                    type: "button",
                                    class: "btn btn-success w-full sm:w-auto"
                                  }, toDisplayString(__props.confirmText), 1),
                                  createVNode("button", {
                                    onClick: emitClose,
                                    type: "button",
                                    class: "btn btn-error w-full sm:w-auto"
                                  }, toDisplayString(__props.cancelText), 1)
                                ])) : createCommentVNode("", true)
                              ])
                            ]),
                            _: 3
                          }, 8, ["class"])
                        ]),
                        _: 3
                      })
                    ], 32)
                  ])
                ]),
                _: 3
              })
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@mariojgt/masterui/packages/ReusableModal/ReusableModal.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Alert",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: ""
    },
    shadow: {
      type: Boolean,
      default: false
    },
    iconSize: {
      type: String,
      default: "w-6 h-6"
    },
    title: String,
    description: String,
    buttons: Array
  },
  emits: ["btnAction"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["alert", __props.type, { "shadow-lg": __props.shadow }]
      }, _attrs))}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="${ssrRenderClass(["stroke-current", __props.iconSize])}"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><div>`);
      if (__props.title) {
        _push(`<h3 class="font-bold">${ssrInterpolate(__props.title)}</h3>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.description) {
        _push(`<span class="text-xs">${ssrInterpolate(__props.description)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (__props.buttons) {
        _push(`<div class="flex gap-4"><!--[-->`);
        ssrRenderList(__props.buttons, (button, index) => {
          _push(`<button class="${ssrRenderClass(["btn", button.type])}">${ssrInterpolate(button.text)}</button>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@mariojgt/masterui/packages/Alert/Alert.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Chips",
  __ssrInlineRender: true,
  props: {
    label: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    id: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: "Type a command and press Enter (e.g. php artisan migrate)"
    },
    type: {
      type: String,
      default: "text"
    },
    modelValue: {
      type: Array,
      default: () => []
    },
    messageClass: {
      type: String,
      default: "invalid-feedback text-primary"
    },
    labelClass: {
      type: String,
      default: "block text-lg font-bold mb-2"
    },
    inputClass: {
      type: String,
      default: "input input-primary input-bordered"
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const currentCommand = ref("");
    const commands = ref([]);
    let errorMessage = ref(null);
    watch(
      () => {
        var _a;
        return (_a = usePage().props) == null ? void 0 : _a.errors;
      },
      () => {
        if (usePage().props.errors[props.name]) {
          errorMessage.value = usePage().props.errors[props.name];
        }
      }
    );
    const props = __props;
    watch(
      () => props.modelValue,
      (newValue) => {
        if (newValue && Array.isArray(newValue)) {
          commands.value = [...newValue];
        }
      },
      { immediate: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "form-control" }, _attrs))}><label class="label"><span class="${ssrRenderClass(__props.labelClass)}">${ssrInterpolate(props.label)}</span></label><div class="flex flex-col gap-4"><input class="${ssrRenderClass(__props.inputClass)}"${ssrRenderAttr("type", props.type)}${ssrRenderAttr("name", props.name)}${ssrRenderAttr("id", props.id)}${ssrRenderAttr("placeholder", props.placeholder)}${ssrRenderDynamicModel(props.type, currentCommand.value, null)}><div class="flex flex-wrap gap-2"><!--[-->`);
      ssrRenderList(commands.value, (command, index) => {
        _push(`<div class="badge badge-primary gap-2 p-4 font-mono text-sm">${ssrInterpolate(command)} <button class="btn btn-ghost btn-xs text-primary-content hover:bg-primary-focus"> × </button></div>`);
      });
      _push(`<!--]--></div></div>`);
      if (unref(errorMessage)) {
        _push(`<span class="${ssrRenderClass(__props.messageClass)}" role="alert"><strong>${ssrInterpolate(unref(errorMessage))}</strong></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@mariojgt/masterui/packages/Chips/Chips.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Input",
  __ssrInlineRender: true,
  props: {
    label: {},
    name: {},
    id: {},
    placeholder: { default: "" },
    modelValue: {},
    messageClass: { default: "text-red-500 text-sm mt-1" },
    labelClass: { default: "block text-lg font-bold mb-2" },
    inputClass: { default: "border border-gray-300 rounded-b-lg" },
    required: { type: Boolean, default: false },
    minLength: {},
    maxLength: {}
  },
  emits: ["update:modelValue", "blur"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const editorRef = ref(null);
    const errorMessage = ref(null);
    const page = usePage();
    const isComposing = ref(false);
    const isMarkdownMode = ref(false);
    const showPreview = ref(false);
    const formatButtons = [
      { command: "bold", icon: Bold, title: "Bold" },
      { command: "italic", icon: Italic, title: "Italic" },
      { command: "underline", icon: Underline, title: "Underline" },
      { command: "strikeThrough", icon: Strikethrough, title: "Strike Through" },
      { command: "createLink", icon: Link$1, title: "Insert Link" },
      { command: "code", icon: Code, title: "Code" },
      { command: "blockquote", icon: Quote, title: "Quote" }
    ];
    const listButtons = [
      { command: "insertUnorderedList", icon: List, title: "Bullet List" },
      { command: "insertOrderedList", icon: ListOrdered, title: "Numbered List" }
    ];
    const alignButtons = [
      { command: "justifyLeft", icon: AlignLeft, title: "Align Left" },
      { command: "justifyCenter", icon: AlignCenter, title: "Align Center" },
      { command: "justifyRight", icon: AlignRight, title: "Align Right" },
      { command: "justifyFull", icon: AlignJustify, title: "Justify" }
    ];
    const markdownButtons = [
      {
        command: "bold",
        icon: Bold,
        title: "Bold",
        syntax: { prefix: "**", suffix: "**" }
      },
      {
        command: "italic",
        icon: Italic,
        title: "Italic",
        syntax: { prefix: "_", suffix: "_" }
      },
      {
        command: "heading",
        icon: Bold,
        title: "Heading",
        syntax: { prefix: "# ", suffix: "" }
      },
      {
        command: "link",
        icon: Link$1,
        title: "Link",
        syntax: { prefix: "[", suffix: "](url)" }
      },
      {
        command: "code",
        icon: Code,
        title: "Code",
        syntax: { prefix: "`", suffix: "`" }
      },
      {
        command: "quote",
        icon: Quote,
        title: "Quote",
        syntax: { prefix: "> ", suffix: "" }
      },
      {
        command: "togglePreview",
        icon: Eye,
        title: "Toggle Preview"
      }
    ];
    const currentLength = computed(() => {
      var _a;
      if (!editorRef.value) return 0;
      return ((_a = editorRef.value.textContent) == null ? void 0 : _a.length) || 0;
    });
    const markdownPreview = computed(() => {
      if (!editorRef.value) return "";
      return DOMPurify.sanitize(marked(editorRef.value.textContent || ""));
    });
    const handleInput = () => {
      if (isComposing.value || !editorRef.value) return;
      emit("update:modelValue", editorRef.value.innerHTML);
      validateInput();
    };
    const isFormatActive = (command) => {
      return document.queryCommandState(command);
    };
    const validateInput = () => {
      var _a;
      errorMessage.value = null;
      const content = ((_a = editorRef.value) == null ? void 0 : _a.textContent) || "";
      if (props.required && !content.trim()) {
        errorMessage.value = `${props.label} is required`;
        return;
      }
      if (props.minLength && content.length < props.minLength) {
        errorMessage.value = `Minimum length is ${props.minLength} characters`;
        return;
      }
      if (props.maxLength && content.length > props.maxLength) {
        errorMessage.value = `Maximum length is ${props.maxLength} characters`;
        return;
      }
    };
    const setupEditor = () => {
      if (!editorRef.value) return;
      const handleCompositionStart = () => {
        isComposing.value = true;
      };
      const handleCompositionEnd = () => {
        isComposing.value = false;
        handleInput();
      };
      editorRef.value.addEventListener("compositionstart", handleCompositionStart);
      editorRef.value.addEventListener("compositionend", handleCompositionEnd);
      if (props.modelValue) {
        editorRef.value.innerHTML = DOMPurify.sanitize(props.modelValue);
      }
      if (!props.modelValue && props.placeholder) {
        editorRef.value.innerHTML = `<p class="text-gray-400">${props.placeholder}</p>`;
      }
      return () => {
        if (!editorRef.value) return;
        editorRef.value.removeEventListener("compositionstart", handleCompositionStart);
        editorRef.value.removeEventListener("compositionend", handleCompositionEnd);
      };
    };
    watch(
      () => props.modelValue,
      (newValue) => {
        if (!editorRef.value || isComposing.value) return;
        const currentContent = editorRef.value.innerHTML;
        if (newValue !== currentContent) {
          const selection = window.getSelection();
          const range = selection == null ? void 0 : selection.getRangeAt(0);
          editorRef.value.innerHTML = DOMPurify.sanitize(newValue || "");
          if (range && selection) {
            selection.removeAllRanges();
            selection.addRange(range);
          }
        }
      }
    );
    watch(
      () => page.props.errors,
      (newErrors) => {
        if (newErrors && newErrors[props.name]) {
          errorMessage.value = newErrors[props.name];
        } else {
          errorMessage.value = null;
        }
      },
      { deep: true }
    );
    onMounted(() => {
      const cleanup = setupEditor();
      onUnmounted(() => cleanup == null ? void 0 : cleanup());
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "form-control" }, _attrs))} data-v-fd51d829><label${ssrRenderAttr("for", _ctx.id)} class="label" data-v-fd51d829><span class="${ssrRenderClass(_ctx.labelClass)}" data-v-fd51d829>${ssrInterpolate(_ctx.label)}</span></label><div class="flex items-center justify-end mb-2" data-v-fd51d829><button class="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-700 bg-white border rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary transition-colors" data-v-fd51d829>`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(isMarkdownMode.value ? unref(FileCode) : unref(FileText)), { class: "w-4 h-4" }, null), _parent);
      _push(`<span data-v-fd51d829>${ssrInterpolate(isMarkdownMode.value ? "Switch to HTML" : "Switch to Markdown")}</span></button></div><div class="flex flex-wrap items-center gap-2 p-3 bg-gray-50 border rounded-t-lg" data-v-fd51d829>`);
      if (!isMarkdownMode.value) {
        _push(`<!--[--><div class="flex-shrink-0" data-v-fd51d829><select class="px-3 py-1.5 bg-white border rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary" data-v-fd51d829><option value="p" data-v-fd51d829>Paragraph</option><option value="h1" data-v-fd51d829>Heading 1</option><option value="h2" data-v-fd51d829>Heading 2</option><option value="h3" data-v-fd51d829>Heading 3</option><option value="h4" data-v-fd51d829>Heading 4</option><option value="h5" data-v-fd51d829>Heading 5</option><option value="h6" data-v-fd51d829>Heading 6</option></select></div><div class="h-6 w-px bg-gray-300" data-v-fd51d829></div><div class="flex gap-1" data-v-fd51d829><!--[-->`);
        ssrRenderList(formatButtons, (btn, index) => {
          _push(`<button${ssrRenderAttr("title", btn.title)} class="${ssrRenderClass([{ "bg-gray-100 text-primary border-primary": isFormatActive(btn.command) }, "p-1.5 text-gray-700 bg-white border rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary"])}" data-v-fd51d829>`);
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(btn.icon), { class: "w-4 h-4" }, null), _parent);
          _push(`</button>`);
        });
        _push(`<!--]--></div><div class="h-6 w-px bg-gray-300" data-v-fd51d829></div><div class="flex gap-1" data-v-fd51d829><!--[-->`);
        ssrRenderList(listButtons, (btn, index) => {
          _push(`<button${ssrRenderAttr("title", btn.title)} class="${ssrRenderClass([{ "bg-gray-100 text-primary border-primary": isFormatActive(btn.command) }, "p-1.5 text-gray-700 bg-white border rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary"])}" data-v-fd51d829>`);
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(btn.icon), { class: "w-4 h-4" }, null), _parent);
          _push(`</button>`);
        });
        _push(`<!--]--></div><div class="h-6 w-px bg-gray-300" data-v-fd51d829></div><div class="flex gap-1" data-v-fd51d829><!--[-->`);
        ssrRenderList(alignButtons, (btn, index) => {
          _push(`<button${ssrRenderAttr("title", btn.title)} class="${ssrRenderClass([{ "bg-gray-100 text-primary border-primary": isFormatActive(btn.command) }, "p-1.5 text-gray-700 bg-white border rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary"])}" data-v-fd51d829>`);
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(btn.icon), { class: "w-4 h-4" }, null), _parent);
          _push(`</button>`);
        });
        _push(`<!--]--></div><!--]-->`);
      } else {
        _push(`<div class="flex gap-1" data-v-fd51d829><!--[-->`);
        ssrRenderList(markdownButtons, (btn, index) => {
          _push(`<button${ssrRenderAttr("title", btn.title)} class="p-1.5 text-gray-700 bg-white border rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary" data-v-fd51d829>`);
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(btn.icon), { class: "w-4 h-4" }, null), _parent);
          _push(`</button>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div><div${ssrRenderAttr("id", _ctx.id)} contenteditable="true" spellcheck="true" dir="ltr"${ssrRenderAttr("placeholder", _ctx.placeholder)} class="${ssrRenderClass([
        _ctx.inputClass,
        "min-h-[200px] max-h-[600px] overflow-y-auto p-4 focus:outline-none",
        { "error": errorMessage.value },
        { "font-mono": isMarkdownMode.value }
      ])}" data-v-fd51d829></div>`);
      if (isMarkdownMode.value && showPreview.value) {
        _push(`<div class="mt-4 p-4 border rounded-lg prose max-w-none" data-v-fd51d829>${markdownPreview.value ?? ""}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.maxLength) {
        _push(`<div class="mt-1 text-sm text-gray-500 text-right" data-v-fd51d829>${ssrInterpolate(currentLength.value)} / ${ssrInterpolate(_ctx.maxLength)} characters </div>`);
      } else {
        _push(`<!---->`);
      }
      if (errorMessage.value) {
        _push(`<span class="${ssrRenderClass(_ctx.messageClass)}" role="alert" aria-live="polite" data-v-fd51d829><strong data-v-fd51d829>${ssrInterpolate(errorMessage.value)}</strong></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@mariojgt/masterui/packages/Editor/Input.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Editor = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-fd51d829"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Input",
  __ssrInlineRender: true,
  props: {
    label: {},
    name: {},
    id: {},
    placeholder: { default: "" },
    modelValue: {},
    messageClass: { default: "text-red-500 text-sm mt-1" },
    labelClass: { default: "block text-lg font-bold mb-2" },
    inputClass: { default: "input input-primary input-bordered w-full" },
    required: { type: Boolean, default: false },
    min: {},
    max: {}
  },
  emits: ["update:modelValue", "blur"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const isOpen = ref(false);
    const currentDate = ref(/* @__PURE__ */ new Date());
    const selectedDate = ref(null);
    const selectedHours = ref(0);
    const selectedMinutes = ref(0);
    const errorMessage = ref(null);
    const page = usePage();
    const timePresets = [
      { label: "Now", value: /* @__PURE__ */ new Date() },
      { label: "Start of Day", value: (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0) },
      { label: "End of Day", value: (/* @__PURE__ */ new Date()).setHours(23, 59, 59, 999) },
      { label: "Tomorrow", value: (/* @__PURE__ */ new Date()).setDate((/* @__PURE__ */ new Date()).getDate() + 1) }
    ];
    const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
    const minuteOptions = Array.from({ length: 60 }, (_, i) => i);
    const currentMonthName = computed(() => {
      return format(currentDate.value, "MMMM");
    });
    const currentYear = computed(() => {
      return currentDate.value.getFullYear();
    });
    const calendarDates = computed(() => {
      const start = startOfMonth(currentDate.value);
      const end = endOfMonth(currentDate.value);
      return eachDayOfInterval({ start, end });
    });
    const inputValue = computed({
      get: () => props.modelValue,
      set: (value) => emit("update:modelValue", value)
    });
    const displayValue = computed(() => {
      if (!selectedDate.value) return "";
      return format(selectedDate.value, "MMM d, yyyy HH:mm");
    });
    const closePicker = () => {
      isOpen.value = false;
    };
    const isSelectedDate = (date) => {
      return selectedDate.value && isSameDay(date, selectedDate.value);
    };
    const isSameMonth = (date) => {
      return date.getMonth() === currentDate.value.getMonth();
    };
    const isToday$1 = (date) => {
      return isToday(date);
    };
    watch(
      () => page.props.errors,
      (newErrors) => {
        if (newErrors && newErrors[props.name]) {
          errorMessage.value = newErrors[props.name];
        } else {
          errorMessage.value = null;
        }
      },
      { deep: true }
    );
    watch(
      () => props.modelValue,
      (newValue) => {
        if (newValue) {
          const date = new Date(newValue);
          selectedDate.value = date;
          selectedHours.value = date.getHours();
          selectedMinutes.value = date.getMinutes();
          currentDate.value = date;
        }
      },
      { immediate: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_click_outside = resolveDirective("click-outside");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "form-control" }, _attrs))} data-v-245929fe><label${ssrRenderAttr("for", _ctx.id)} class="label" data-v-245929fe><span class="${ssrRenderClass(_ctx.labelClass)}" data-v-245929fe>${ssrInterpolate(_ctx.label)}</span></label><input${ssrRenderAttr("id", _ctx.id)}${ssrRenderAttr("name", _ctx.name)} type="datetime-local"${ssrRenderAttr("value", inputValue.value)} class="hidden" data-v-245929fe><div class="relative" data-v-245929fe><button type="button" class="${ssrRenderClass([
        _ctx.inputClass,
        "flex items-center justify-between w-full px-4 py-2",
        { "error": errorMessage.value }
      ])}" data-v-245929fe><span class="flex items-center gap-2" data-v-245929fe>`);
      _push(ssrRenderComponent(unref(Calendar), { class: "w-5 h-5 text-gray-500" }, null, _parent));
      _push(`<span class="text-gray-700" data-v-245929fe>${ssrInterpolate(displayValue.value || _ctx.placeholder || "Select date and time")}</span></span>`);
      _push(ssrRenderComponent(unref(ChevronDown), {
        class: ["w-5 h-5 text-gray-500 transition-transform", { "rotate-180": isOpen.value }]
      }, null, _parent));
      _push(`</button>`);
      if (isOpen.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "absolute z-50 w-full mt-1 bg-white border rounded-lg shadow-lg" }, ssrGetDirectiveProps(_ctx, _directive_click_outside, closePicker)))} data-v-245929fe><div class="p-4 space-y-4" data-v-245929fe><div class="space-y-2" data-v-245929fe><div class="flex items-center justify-between mb-2" data-v-245929fe><button class="p-1 hover:bg-gray-100 rounded-full" data-v-245929fe>`);
        _push(ssrRenderComponent(unref(ChevronLeft), { class: "w-5 h-5" }, null, _parent));
        _push(`</button><span class="font-semibold" data-v-245929fe>${ssrInterpolate(currentMonthName.value)} ${ssrInterpolate(currentYear.value)}</span><button class="p-1 hover:bg-gray-100 rounded-full" data-v-245929fe>`);
        _push(ssrRenderComponent(unref(ChevronRight), { class: "w-5 h-5" }, null, _parent));
        _push(`</button></div><div class="grid grid-cols-7 mb-1" data-v-245929fe><!--[-->`);
        ssrRenderList(weekDays, (day) => {
          _push(`<span class="text-center text-sm text-gray-500 font-medium" data-v-245929fe>${ssrInterpolate(day)}</span>`);
        });
        _push(`<!--]--></div><div class="grid grid-cols-7 gap-1" data-v-245929fe><!--[-->`);
        ssrRenderList(calendarDates.value, (date) => {
          _push(`<button class="${ssrRenderClass([{
            "bg-primary/10 text-primary font-semibold": isSelectedDate(date),
            "text-gray-400": !isSameMonth(date),
            "text-gray-900": isSameMonth(date)
          }, "p-2 text-sm rounded-full hover:bg-gray-100 relative"])}" data-v-245929fe>${ssrInterpolate(date.getDate())} `);
          if (isToday$1(date)) {
            _push(`<div class="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full" data-v-245929fe></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</button>`);
        });
        _push(`<!--]--></div></div><div class="flex items-center justify-center gap-4" data-v-245929fe><div class="flex items-center gap-2" data-v-245929fe><select class="w-16 p-1 border rounded" data-v-245929fe><!--[-->`);
        ssrRenderList(24, (hour) => {
          _push(`<option${ssrRenderAttr("value", hour - 1)} data-v-245929fe${ssrIncludeBooleanAttr(Array.isArray(selectedHours.value) ? ssrLooseContain(selectedHours.value, hour - 1) : ssrLooseEqual(selectedHours.value, hour - 1)) ? " selected" : ""}>${ssrInterpolate(String(hour - 1).padStart(2, "0"))}</option>`);
        });
        _push(`<!--]--></select><span class="text-gray-500" data-v-245929fe>:</span><select class="w-16 p-1 border rounded" data-v-245929fe><!--[-->`);
        ssrRenderList(unref(minuteOptions), (minute) => {
          _push(`<option${ssrRenderAttr("value", minute)} data-v-245929fe${ssrIncludeBooleanAttr(Array.isArray(selectedMinutes.value) ? ssrLooseContain(selectedMinutes.value, minute) : ssrLooseEqual(selectedMinutes.value, minute)) ? " selected" : ""}>${ssrInterpolate(String(minute).padStart(2, "0"))}</option>`);
        });
        _push(`<!--]--></select></div></div><div class="flex flex-wrap gap-2 pt-2 border-t" data-v-245929fe><!--[-->`);
        ssrRenderList(timePresets, (preset) => {
          _push(`<button class="px-3 py-1 text-sm text-gray-600 bg-gray-100 rounded-full hover:bg-gray-200" data-v-245929fe>${ssrInterpolate(preset.label)}</button>`);
        });
        _push(`<!--]--></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (errorMessage.value) {
        _push(`<span class="${ssrRenderClass(_ctx.messageClass)}" role="alert" aria-live="polite" data-v-245929fe><strong data-v-245929fe>${ssrInterpolate(errorMessage.value)}</strong></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@mariojgt/masterui/packages/Timestamp/Input.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Timestamp = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-245929fe"]]);
export {
  Editor as E,
  InputField as I,
  Timestamp as T,
  _sfc_main$a as _,
  _sfc_main$9 as a,
  _sfc_main$b as b,
  _sfc_main$8 as c,
  _sfc_main$5 as d,
  _sfc_main$2 as e,
  _sfc_main$6 as f,
  _sfc_main$4 as g,
  _sfc_main$7 as h
};
