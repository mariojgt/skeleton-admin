import { defineComponent, ref, unref, useSSRContext, watch, computed, onMounted, mergeProps, createVNode, resolveDynamicComponent, onUnmounted, withCtx, openBlock, createBlock, createCommentVNode, toDisplayString } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrRenderStyle, ssrRenderVNode, ssrRenderTeleport, ssrRenderSlot } from "vue/server-renderer";
import { useMessage } from "naive-ui";
import axios from "axios";
import { Link } from "@inertiajs/vue3";
import { Trash2, X, AlertTriangle, PlusCircle, FileEdit, Save, Folder, Info, HelpCircle, Check, ShieldAlert, Pencil, Hash, Calendar, Navigation, SlidersHorizontal, ChevronDown, ListFilter, Filter, ArrowUp, ArrowDown, Search, RotateCcw, ImageOff, Maximize2, Download, Plus, CheckCircle2, XCircle, TrendingUp, TrendingDown, Table as Table$1, Database, ArrowUpDown } from "lucide-vue-next";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { I as InputField, _ as _sfc_main$9, T as Timestamp, h as _sfc_main$a, f as _sfc_main$b, E as Editor, d as _sfc_main$c, e as _sfc_main$d, c as _sfc_main$e } from "./Input-BXi_X4mZ.js";
import { TransitionRoot, Dialog, TransitionChild, DialogPanel } from "@headlessui/vue";
import { formatDistanceToNow } from "date-fns";
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "delete",
  __ssrInlineRender: true,
  props: {
    id: {
      type: Number,
      default: 0
    },
    model: {
      type: String,
      default: ""
    },
    endpoint: {
      type: String,
      default: ""
    },
    permission: {
      type: String,
      default: null
    }
  },
  emits: ["onDelete"],
  setup(__props, { emit: __emit }) {
    useMessage();
    const isOpen = ref(false);
    const isDeleting = ref(false);
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><button class="btn btn-error btn-sm gap-2 group relative overflow-hidden hover:shadow-lg transition-all duration-300" aria-label="Delete item" data-v-3aa240d6>`);
      _push(ssrRenderComponent(unref(Trash2), { class: "w-4 h-4 transform transition-all duration-300 group-hover:scale-110" }, null, _parent));
      _push(`<div class="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" data-v-3aa240d6></div></button>`);
      if (isOpen.value) {
        _push(`<div class="fixed inset-0 z-50 overflow-hidden" data-v-3aa240d6><div class="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity" data-v-3aa240d6></div><div class="fixed inset-0 flex items-center justify-center p-4" data-v-3aa240d6>`);
        if (isOpen.value) {
          _push(`<div class="relative bg-base-100 rounded-2xl shadow-2xl w-full max-w-md transform transition-all" data-v-3aa240d6>`);
          if (isDeleting.value) {
            _push(`<div class="absolute inset-0 bg-base-100/70 backdrop-blur-sm flex items-center justify-center z-50 rounded-2xl" data-v-3aa240d6><div class="flex flex-col items-center gap-4" data-v-3aa240d6><div class="loading loading-spinner loading-lg text-error" data-v-3aa240d6></div><p class="text-sm font-medium text-base-content/70" data-v-3aa240d6>Deleting...</p></div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="p-6" data-v-3aa240d6><button class="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 hover:rotate-90 transition-transform duration-200" aria-label="Close modal" data-v-3aa240d6>`);
          _push(ssrRenderComponent(unref(X), { class: "w-4 h-4" }, null, _parent));
          _push(`</button><div class="flex justify-center mb-6" data-v-3aa240d6><div class="w-20 h-20 rounded-full bg-error/20 flex items-center justify-center animate-pulse" data-v-3aa240d6>`);
          _push(ssrRenderComponent(unref(AlertTriangle), { class: "w-10 h-10 text-error" }, null, _parent));
          _push(`</div></div><div class="text-center space-y-4" data-v-3aa240d6><h3 class="text-2xl font-bold text-base-content" data-v-3aa240d6> Confirm Deletion </h3><p class="text-base-content/70" data-v-3aa240d6> Are you sure you want to delete item #${ssrInterpolate(props.id)}? </p><p class="text-sm text-error font-medium" data-v-3aa240d6> This action cannot be undone. </p></div><div class="mt-8 flex gap-4" data-v-3aa240d6><button class="btn btn-ghost flex-1 hover:bg-base-200"${ssrIncludeBooleanAttr(isDeleting.value) ? " disabled" : ""} data-v-3aa240d6> Cancel </button><button class="btn btn-error flex-1 gap-2"${ssrIncludeBooleanAttr(isDeleting.value) ? " disabled" : ""} data-v-3aa240d6>`);
          _push(ssrRenderComponent(unref(Trash2), {
            class: ["w-4 h-4", { "animate-spin": isDeleting.value }]
          }, null, _parent));
          _push(` ${ssrInterpolate(isDeleting.value ? "Deleting..." : "Delete")}</button></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/Builder/Table/components/crud/delete.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const Delete = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-3aa240d6"]]);
const formatDate = (dateToFormat) => {
  if (!dateToFormat) {
    return "";
  }
  let finalDate;
  if (dateToFormat.includes("T")) {
    finalDate = new Date(dateToFormat);
  } else {
    const tempDate = dateToFormat.split("/");
    finalDate = /* @__PURE__ */ new Date(
      `${tempDate[2]}-${tempDate[1]}-${tempDate[0]}`
    );
  }
  return finalDate.toISOString().split("T")[0];
};
const formatTimestamp = (dateToFormat) => {
  const tempDate = dateToFormat.split("/");
  let finalValue = (/* @__PURE__ */ new Date(
    tempDate[2] + "/" + tempDate[1] + "/" + tempDate[0]
  )).toISOString().substr(0, 16);
  return finalValue;
};
const makeString = (data) => {
  if (data) {
    return data.toString();
  } else {
    return "";
  }
};
const _sfc_main$7 = {
  __name: "FormFields",
  __ssrInlineRender: true,
  props: {
    fields: {
      type: Array,
      required: true
    }
  },
  emits: ["update:fields"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    watch(
      () => props.fields,
      (newValue) => {
        emit("update:fields", newValue);
      },
      { deep: true }
    );
    const textFieldKeyup = (value, type, fieldName) => {
      if (fieldName === "name" || fieldName === "title") {
        const slugFieldIndex = props.fields.findIndex(
          (item) => item.key === "slug"
        );
        if (slugFieldIndex !== -1) {
          props.fields[slugFieldIndex].value = value.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-4523b90d><!--[-->`);
      ssrRenderList(__props.fields, (item, index) => {
        _push(`<div data-v-4523b90d>`);
        if (item.type == "text") {
          _push(`<div data-v-4523b90d>`);
          _push(ssrRenderComponent(unref(InputField), {
            type: "text",
            modelValue: __props.fields[index].value,
            "onUpdate:modelValue": ($event) => __props.fields[index].value = $event,
            label: item.label,
            error: item.error,
            onKeyup: ($event) => textFieldKeyup($event.target.value, item.type, item.key)
          }, null, _parent));
          _push(`</div>`);
        } else if (item.type == "password") {
          _push(`<div data-v-4523b90d>`);
          _push(ssrRenderComponent(unref(_sfc_main$9), {
            modelValue: __props.fields[index].value,
            "onUpdate:modelValue": ($event) => __props.fields[index].value = $event,
            label: item.label,
            error: item.error
          }, null, _parent));
          _push(`</div>`);
        } else if (item.type == "email") {
          _push(`<div data-v-4523b90d>`);
          _push(ssrRenderComponent(unref(InputField), {
            type: "email",
            modelValue: __props.fields[index].value,
            "onUpdate:modelValue": ($event) => __props.fields[index].value = $event,
            label: item.label,
            error: item.error
          }, null, _parent));
          _push(`</div>`);
        } else if (item.type == "date") {
          _push(`<div data-v-4523b90d>`);
          _push(ssrRenderComponent(unref(InputField), {
            type: "date",
            modelValue: __props.fields[index].value,
            "onUpdate:modelValue": ($event) => __props.fields[index].value = $event,
            label: item.label,
            error: item.error
          }, null, _parent));
          _push(`</div>`);
        } else if (item.type == "timestamp") {
          _push(`<div data-v-4523b90d>`);
          _push(ssrRenderComponent(unref(Timestamp), {
            label: item.label,
            name: item.key,
            id: item.key,
            modelValue: __props.fields[index].value,
            "onUpdate:modelValue": ($event) => __props.fields[index].value = $event,
            placeholder: "Select date and time",
            required: "",
            error: item.error,
            min: "2024-01-16T00:00",
            max: "2025-12-31T23:59"
          }, null, _parent));
          _push(`</div>`);
        } else if (item.type == "slug") {
          _push(`<div data-v-4523b90d>`);
          _push(ssrRenderComponent(unref(InputField), {
            type: "text",
            modelValue: __props.fields[index].value,
            "onUpdate:modelValue": ($event) => __props.fields[index].value = $event,
            label: item.label,
            error: item.error
          }, null, _parent));
          _push(`</div>`);
        } else if (item.type == "media") {
          _push(`<div data-v-4523b90d>`);
          _push(ssrRenderComponent(unref(_sfc_main$a), {
            label: "image",
            placeholder: "search",
            modelValue: __props.fields[index].value,
            "onUpdate:modelValue": ($event) => __props.fields[index].value = $event,
            loadData: __props.fields[index].value,
            endpoint: item.endpoint,
            error: item.error
          }, null, _parent));
          _push(`</div>`);
        } else if (item.type == "number") {
          _push(`<div data-v-4523b90d>`);
          _push(ssrRenderComponent(unref(InputField), {
            type: "number",
            modelValue: __props.fields[index].value,
            "onUpdate:modelValue": ($event) => __props.fields[index].value = $event,
            label: item.label,
            onKeyup: ($event) => textFieldKeyup($event.target.value, item.type, item.key),
            error: item.error
          }, null, _parent));
          _push(`</div>`);
        } else if (item.type == "model_search") {
          _push(`<div data-v-4523b90d>`);
          _push(ssrRenderComponent(unref(_sfc_main$b), {
            label: item.label,
            placeholder: "search",
            model: item.model,
            columns: item.columns,
            singleMode: item.singleSearch,
            modelValue: __props.fields[index].value,
            "onUpdate:modelValue": ($event) => __props.fields[index].value = $event,
            loadData: __props.fields[index].value,
            endpoint: item.endpoint,
            displayKey: item.displayKey,
            error: item.error
          }, null, _parent));
          _push(`</div>`);
        } else if (item.type == "pivot_model") {
          _push(`<div data-v-4523b90d>`);
          _push(ssrRenderComponent(unref(_sfc_main$b), {
            label: item.label,
            placeholder: "search",
            model: item.model,
            columns: item.columns,
            singleMode: item.singleSearch,
            modelValue: __props.fields[index].value,
            "onUpdate:modelValue": ($event) => __props.fields[index].value = $event,
            loadData: __props.fields[index].value,
            endpoint: item.endpoint,
            displayKey: item.displayKey,
            error: item.error
          }, null, _parent));
          _push(`</div>`);
        } else if (item.type == "editor") {
          _push(`<div data-v-4523b90d>`);
          _push(ssrRenderComponent(unref(Editor), {
            label: item.label,
            name: item.key,
            id: item.key + "-editor",
            placeholder: "Start typing...",
            modelValue: __props.fields[index].value,
            "onUpdate:modelValue": ($event) => __props.fields[index].value = $event,
            required: "",
            minLength: 10,
            maxLength: 1e3,
            error: item.error
          }, null, _parent));
          _push(`</div>`);
        } else if (item.type == "Toggle") {
          _push(`<div data-v-4523b90d>`);
          _push(ssrRenderComponent(unref(_sfc_main$c), {
            modelValue: __props.fields[index].value,
            "onUpdate:modelValue": ($event) => __props.fields[index].value = $event,
            label: item.label,
            error: item.error
          }, null, _parent));
          _push(`</div>`);
        } else if (item.type == "boolean") {
          _push(`<div data-v-4523b90d>`);
          _push(ssrRenderComponent(unref(_sfc_main$c), {
            modelValue: __props.fields[index].value,
            "onUpdate:modelValue": ($event) => __props.fields[index].value = $event,
            label: item.label,
            error: item.error
          }, null, _parent));
          _push(`</div>`);
        } else if (item.type == "chips") {
          _push(`<div data-v-4523b90d>`);
          _push(ssrRenderComponent(unref(_sfc_main$d), {
            modelValue: __props.fields[index].value,
            "onUpdate:modelValue": ($event) => __props.fields[index].value = $event,
            label: item.label,
            error: item.error
          }, null, _parent));
          _push(`</div>`);
        } else if (item.type == "icon") {
          _push(`<div data-v-4523b90d><label class="form-control mt-1" data-v-4523b90d><div class="label" data-v-4523b90d><span class="label-text" data-v-4523b90d>${ssrInterpolate(item.label)}</span></div><textarea class="textarea textarea-primary h-24" placeholder="Bio"${ssrRenderAttr("error", item.error)} data-v-4523b90d>${ssrInterpolate(__props.fields[index].value)}</textarea></label><div class="flex justify-center bg-base-100 rounded mt-5" data-v-4523b90d><div class="flex p-10 w-52" data-v-4523b90d>${__props.fields[index].value ?? ""}</div></div></div>`);
        } else if (item.type == "select") {
          _push(`<div data-v-4523b90d>`);
          _push(ssrRenderComponent(unref(_sfc_main$e), {
            modelValue: __props.fields[index].value,
            "onUpdate:modelValue": ($event) => __props.fields[index].value = $event,
            label: item.label,
            options: item.select_options,
            error: item.error
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (item.error) {
          _push(`<div class="text-error text-sm mt-1" data-v-4523b90d>${ssrInterpolate(item.error)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/Builder/Table/components/formHelpers/FormFields.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const FormFields = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-4523b90d"]]);
const _sfc_main$6 = {
  __name: "FormBuilder",
  __ssrInlineRender: true,
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    modelValue: {
      type: Object,
      default: () => ({})
    },
    editMode: {
      type: String,
      default: "false"
    },
    errors: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["onFormUpdate"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const avaliableFields = ref([]);
    const currentTab = ref("");
    const hasTabs = computed(() => {
      return avaliableFields.value.some((field) => field.tab);
    });
    const tabList = computed(() => {
      const tabs = [...new Set(avaliableFields.value.filter((field) => field.tab).map((field) => field.tab))];
      if (tabs.length > 0 && !currentTab.value) {
        currentTab.value = tabs[0];
      }
      return tabs;
    });
    const getFieldsByTab = (tab) => {
      return avaliableFields.value.filter((field) => field.tab === tab);
    };
    const handleFieldsUpdate = (updatedFields) => {
      updatedFields.forEach((updatedField) => {
        const index = avaliableFields.value.findIndex((field) => field.key === updatedField.key);
        if (index !== -1) {
          avaliableFields.value[index] = updatedField;
        }
      });
      emit("onFormUpdate", avaliableFields.value);
    };
    const createFields = () => {
      const fields = [];
      props.columns.forEach((value) => {
        var _a;
        const isCreateMode = props.editMode === "false";
        const isEditMode = props.editMode === "true";
        const shouldInclude = isCreateMode && value.canCreate || isEditMode && value.canEdit;
        if (shouldInclude) {
          let fieldValue = "";
          if (isCreateMode) {
            if (value.type === "Toggle" || value.type === "boolean") {
              fieldValue = false;
            }
          } else if (isEditMode) {
            fieldValue = determineFieldValue(value, props.modelValue);
          }
          const field = {
            ...value,
            value: fieldValue,
            select_options: ((_a = value == null ? void 0 : value.options) == null ? void 0 : _a.options) || (value == null ? void 0 : value.options),
            error: props.errors[value.key.toLowerCase()] || null
          };
          fields.push(field);
        }
      });
      avaliableFields.value = fields;
      if (props.editMode === "true") {
        emit("onFormUpdate", avaliableFields.value);
      }
    };
    watch(
      () => props.errors,
      (newErrors) => {
        if (Object.keys(newErrors).length > 0) {
          const updatedFields = avaliableFields.value.map((field) => ({
            ...field,
            error: newErrors[field.key.toLowerCase()] || null
          }));
          avaliableFields.value = updatedFields;
          emit("onFormUpdate", avaliableFields.value);
        }
      },
      { deep: true, immediate: true }
    );
    const determineFieldValue = (value, modelValue) => {
      switch (value.type) {
        case "date":
          return formatDate(modelValue[value.key]);
        case "timestamp":
          return formatTimestamp(modelValue[value.key]);
        case "media":
        case "model_search":
        case "pivot_model":
        case "boolean":
        case "chips":
          return modelValue[value.key];
        default:
          return makeString(modelValue[value.key]);
      }
    };
    onMounted(createFields);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-e73373c2>`);
      if (hasTabs.value) {
        _push(`<div class="mb-4" data-v-e73373c2><div class="tabs tabs-boxed bg-base-300 p-1" data-v-e73373c2><!--[-->`);
        ssrRenderList(tabList.value, (tab) => {
          _push(`<button class="${ssrRenderClass([{ "tab-active": currentTab.value === tab }, "tab flex-1 transition-all duration-200"])}" data-v-e73373c2>${ssrInterpolate(tab)}</button>`);
        });
        _push(`<!--]--></div><div class="mt-4" data-v-e73373c2><!--[-->`);
        ssrRenderList(tabList.value, (tab) => {
          _push(`<div style="${ssrRenderStyle(currentTab.value === tab ? null : { display: "none" })}" data-v-e73373c2>`);
          _push(ssrRenderComponent(FormFields, {
            fields: getFieldsByTab(tab),
            "onUpdate:fields": handleFieldsUpdate
          }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<div data-v-e73373c2>`);
        _push(ssrRenderComponent(FormFields, {
          fields: avaliableFields.value,
          "onUpdate:fields": handleFieldsUpdate
        }, null, _parent));
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/Builder/Table/components/formHelpers/FormBuilder.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const FormBuilder = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-e73373c2"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "create",
  __ssrInlineRender: true,
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    model: {
      type: String,
      default: ""
    },
    endpoint: {
      type: String,
      default: ""
    },
    permission: {
      type: String,
      default: null
    }
  },
  emits: ["onCreate"],
  setup(__props, { emit: __emit }) {
    useMessage();
    const isOpen = ref(false);
    const isSubmitting = ref(false);
    const formErrors = ref({});
    const props = __props;
    const canCreate = computed(() => {
      return props.columns.some((column) => column.canCreate);
    });
    const filterSections = computed(() => {
      const columnsWithSections = props.columns.filter((column) => column.section);
      const columnsWithoutSections = props.columns.filter((column) => !column.section);
      const sections = [...new Set(columnsWithSections.map((column) => column.section))];
      return {
        sections,
        fields: columnsWithoutSections,
        sectionsWithFields: sections.map((section) => ({
          section,
          fields: columnsWithSections.filter((column) => column.section === section)
        }))
      };
    });
    const availableFields = ref(props.columns.filter((column) => column.canCreate));
    const onFormUpdate = (formData) => {
      if (availableFields.value.length > 0) {
        formData.forEach((formDataValue) => {
          const index = availableFields.value.findIndex((value) => value.key === formDataValue.key);
          if (index !== -1) {
            availableFields.value[index] = formDataValue;
          }
        });
      } else {
        availableFields.value = formData;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><button class="btn btn-primary gap-2 group relative overflow-hidden hover:shadow-lg transition-all duration-300" data-v-280629a4>`);
      _push(ssrRenderComponent(unref(PlusCircle), { class: "w-5 h-5 transform transition-all duration-300 group-hover:rotate-90" }, null, _parent));
      _push(`<span class="hidden md:inline" data-v-280629a4>Create New</span><div class="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" data-v-280629a4></div></button>`);
      if (isOpen.value) {
        _push(`<div class="fixed inset-0 z-50 overflow-hidden" data-v-280629a4><div class="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity" data-v-280629a4></div><div class="relative min-h-screen flex items-center justify-center p-0 md:p-4" data-v-280629a4>`);
        if (canCreate.value) {
          _push(`<div class="relative bg-base-100 rounded-none md:rounded-2xl shadow-2xl flex flex-col w-full min-h-screen md:min-h-[80vh] md:max-h-[90vh] md:w-11/12 max-w-7xl transform transition-all" data-v-280629a4>`);
          if (isSubmitting.value) {
            _push(`<div class="absolute inset-0 bg-base-100/70 backdrop-blur-sm flex items-center justify-center z-50" data-v-280629a4><div class="flex flex-col items-center gap-4" data-v-280629a4><div class="loading loading-spinner loading-lg text-primary" data-v-280629a4></div><p class="text-sm font-medium text-base-content/70" data-v-280629a4>Processing...</p></div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="sticky top-0 z-10 bg-base-200 px-6 py-4 border-b border-base-content/10" data-v-280629a4><div class="flex flex-col sm:flex-row justify-between gap-4" data-v-280629a4><h2 class="text-lg font-semibold flex items-center gap-3 text-base-content" data-v-280629a4><button class="btn btn-sm btn-circle btn-ghost hover:bg-base-300 hover:rotate-90 transition-all duration-200" data-v-280629a4>`);
          _push(ssrRenderComponent(unref(X), { class: "w-5 h-5" }, null, _parent));
          _push(`</button><div class="flex items-center gap-2" data-v-280629a4>`);
          _push(ssrRenderComponent(unref(FileEdit), { class: "w-5 h-5 text-primary" }, null, _parent));
          _push(`<span data-v-280629a4>Create New Entry</span></div></h2><div class="flex items-center gap-3" data-v-280629a4><button class="btn btn-ghost btn-sm hover:bg-base-300" data-v-280629a4> Cancel </button><button${ssrIncludeBooleanAttr(isSubmitting.value) ? " disabled" : ""} class="btn btn-primary btn-sm gap-2 min-w-[100px]" data-v-280629a4>`);
          _push(ssrRenderComponent(unref(Save), {
            class: ["w-4 h-4", { "animate-spin": isSubmitting.value }]
          }, null, _parent));
          _push(` ${ssrInterpolate(isSubmitting.value ? "Creating..." : "Create")}</button></div></div><!--[-->`);
          if (Object.keys(formErrors.value).length > 0) {
            _push(`<div class="mt-4 alert alert-error shadow-lg" data-v-280629a4>`);
            _push(ssrRenderComponent(unref(AlertTriangle), { class: "w-5 h-5 flex-shrink-0" }, null, _parent));
            _push(`<div data-v-280629a4><h3 class="font-bold" data-v-280629a4>Please correct the following errors</h3><div class="text-xs opacity-75" data-v-280629a4>Review the highlighted fields below</div></div></div>`);
          }
          _push(`<!--]--></div><div class="flex-1 overflow-auto p-6 custom-scrollbar" data-v-280629a4><div class="container mx-auto max-w-5xl" data-v-280629a4><div class="grid gap-6 lg:grid-cols-12" data-v-280629a4><div class="lg:col-span-8 space-y-6" data-v-280629a4><!--[-->`);
          if (filterSections.value.sectionsWithFields.length > 0) {
            _push(`<div class="w-full space-y-4" data-v-280629a4><!--[-->`);
            ssrRenderList(filterSections.value.sectionsWithFields, (item, index) => {
              _push(`<div class="collapse collapse-plus bg-base-200 rounded-box border border-base-content/10 hover:border-primary/30 transition-all duration-200 shadow-sm hover:shadow-md" data-v-280629a4><input type="checkbox"${ssrIncludeBooleanAttr(index === 0) ? " checked" : ""} data-v-280629a4><div class="collapse-title text-lg font-medium flex items-center gap-3 pr-12" data-v-280629a4>`);
              _push(ssrRenderComponent(unref(Folder), { class: "w-5 h-5 text-primary" }, null, _parent));
              _push(` ${ssrInterpolate(item.section)}</div><div class="collapse-content bg-base-100/50" data-v-280629a4><div class="pt-4" data-v-280629a4>`);
              _push(ssrRenderComponent(FormBuilder, {
                columns: item.fields,
                errors: formErrors.value,
                onOnFormUpdate: onFormUpdate
              }, null, _parent));
              _push(`</div></div></div>`);
            });
            _push(`<!--]--></div>`);
          }
          if (filterSections.value.fields.length > 0) {
            _push(`<div class="card bg-base-200 shadow-lg border border-base-content/10 hover:shadow-xl transition-all duration-200" data-v-280629a4><div class="card-body" data-v-280629a4>`);
            _push(ssrRenderComponent(FormBuilder, {
              columns: filterSections.value.fields,
              errors: formErrors.value,
              onOnFormUpdate: onFormUpdate
            }, null, _parent));
            _push(`</div></div>`);
          }
          _push(`<!--]--></div><div class="lg:col-span-4 space-y-4" data-v-280629a4><div class="card bg-base-200 shadow-lg hover:shadow-xl transition-all duration-200" data-v-280629a4><div class="card-body" data-v-280629a4><h3 class="text-sm font-medium text-base-content flex items-center gap-2" data-v-280629a4>`);
          _push(ssrRenderComponent(unref(Info), { class: "w-4 h-4 text-primary" }, null, _parent));
          _push(` Information </h3><div class="text-sm text-base-content/70 mt-2 space-y-2" data-v-280629a4><p data-v-280629a4>Fill in the required information to create a new entry.</p><p data-v-280629a4>All fields marked with <span class="text-error" data-v-280629a4>*</span> are required.</p></div></div></div><div class="card bg-base-200 shadow-lg hover:shadow-xl transition-all duration-200" data-v-280629a4><div class="card-body" data-v-280629a4><h3 class="text-sm font-medium text-base-content flex items-center gap-2" data-v-280629a4>`);
          _push(ssrRenderComponent(unref(HelpCircle), { class: "w-4 h-4 text-primary" }, null, _parent));
          _push(` Quick Tips </h3><ul class="text-sm text-base-content/70 mt-2 space-y-3" data-v-280629a4><li class="flex items-start gap-2" data-v-280629a4><div class="rounded-full bg-success/20 p-1 mt-0.5" data-v-280629a4>`);
          _push(ssrRenderComponent(unref(Check), { class: "w-3 h-3 text-success" }, null, _parent));
          _push(`</div><span data-v-280629a4>Use sections to organize related fields</span></li><li class="flex items-start gap-2" data-v-280629a4><div class="rounded-full bg-success/20 p-1 mt-0.5" data-v-280629a4>`);
          _push(ssrRenderComponent(unref(Check), { class: "w-3 h-3 text-success" }, null, _parent));
          _push(`</div><span data-v-280629a4>Preview changes before submitting</span></li><li class="flex items-start gap-2" data-v-280629a4><div class="rounded-full bg-success/20 p-1 mt-0.5" data-v-280629a4>`);
          _push(ssrRenderComponent(unref(Check), { class: "w-3 h-3 text-success" }, null, _parent));
          _push(`</div><span data-v-280629a4>All changes are saved automatically</span></li></ul></div></div></div></div></div></div></div>`);
        } else {
          _push(`<div class="modal-box w-11/12 max-w-lg bg-base-100" data-v-280629a4><div class="card shadow-xl" data-v-280629a4><div class="card-body items-center text-center space-y-6" data-v-280629a4><div class="w-20 h-20 rounded-full bg-warning/20 flex items-center justify-center animate-pulse" data-v-280629a4>`);
          _push(ssrRenderComponent(unref(ShieldAlert), { class: "w-10 h-10 text-warning" }, null, _parent));
          _push(`</div><div class="space-y-2" data-v-280629a4><h2 class="text-2xl font-bold text-error" data-v-280629a4>Access Denied</h2><p class="text-base-content/80" data-v-280629a4>You don&#39;t have permission to create new entries.</p><p class="text-base-content/60 text-sm" data-v-280629a4>Please contact your system administrator for access.</p></div><button class="btn btn-ghost btn-sm hover:bg-base-200" data-v-280629a4> Close </button></div></div></div>`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/Builder/Table/components/crud/create.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Create = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-280629a4"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "edit",
  __ssrInlineRender: true,
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    model: {
      type: String,
      default: ""
    },
    endpoint: {
      type: String,
      default: ""
    },
    id: {
      type: Number,
      default: 0
    },
    modelValue: {
      type: Object,
      default: () => ({})
    },
    permission: {
      type: String,
      default: null
    }
  },
  emits: ["onEdit"],
  setup(__props, { emit: __emit }) {
    useMessage();
    const isOpen = ref(false);
    const isSubmitting = ref(false);
    const formErrors = ref({});
    const props = __props;
    const availableFields = ref(props.columns.filter((column) => column.canEdit));
    const filterSections = computed(() => {
      const columnsWithSections = props.columns.filter((column) => column.section);
      const columnsWithoutSections = props.columns.filter((column) => !column.section);
      const sections = [...new Set(columnsWithSections.map((column) => column.section))];
      return {
        sections,
        fields: columnsWithoutSections,
        sectionsWithFields: sections.map((section) => ({
          section,
          fields: columnsWithSections.filter((column) => column.section === section)
        }))
      };
    });
    const onFormUpdate = (formData) => {
      if (availableFields.value.length > 0) {
        formData.forEach((formDataValue) => {
          const index = availableFields.value.findIndex((value) => value.key === formDataValue.key);
          if (index !== -1) {
            availableFields.value[index] = formDataValue;
          }
        });
      } else {
        availableFields.value = formData;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<!--[--><button class="btn btn-primary btn-sm gap-2 group relative overflow-hidden hover:shadow-lg transition-all duration-300" data-v-ffc2ab16>`);
      _push(ssrRenderComponent(unref(Pencil), { class: "w-4 h-4 transform transition-all duration-300 group-hover:rotate-12" }, null, _parent));
      _push(`<span class="hidden md:inline" data-v-ffc2ab16>Edit</span><div class="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" data-v-ffc2ab16></div></button>`);
      if (isOpen.value) {
        _push(`<div class="fixed inset-0 z-50 overflow-hidden" data-v-ffc2ab16><div class="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity" data-v-ffc2ab16></div><div class="relative min-h-screen flex items-center justify-center p-0 md:p-4" data-v-ffc2ab16><div class="relative bg-base-100 rounded-none md:rounded-2xl shadow-2xl flex flex-col w-full min-h-screen md:min-h-[80vh] md:max-h-[90vh] md:w-11/12 max-w-7xl transform transition-all" data-v-ffc2ab16>`);
        if (isSubmitting.value) {
          _push(`<div class="absolute inset-0 bg-base-100/70 backdrop-blur-sm flex items-center justify-center z-50" data-v-ffc2ab16><div class="flex flex-col items-center gap-4" data-v-ffc2ab16><div class="loading loading-spinner loading-lg text-primary" data-v-ffc2ab16></div><p class="text-sm font-medium text-base-content/70" data-v-ffc2ab16>Saving changes...</p></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="sticky top-0 z-10 bg-base-200 px-6 py-4 border-b border-base-content/10" data-v-ffc2ab16><div class="flex flex-col sm:flex-row justify-between gap-4" data-v-ffc2ab16><h2 class="text-lg font-semibold flex items-center gap-3 text-base-content" data-v-ffc2ab16><button class="btn btn-sm btn-circle btn-ghost hover:bg-base-300 hover:rotate-90 transition-all duration-200" data-v-ffc2ab16>`);
        _push(ssrRenderComponent(unref(X), { class: "w-5 h-5" }, null, _parent));
        _push(`</button><div class="flex items-center gap-2" data-v-ffc2ab16>`);
        _push(ssrRenderComponent(unref(Hash), { class: "w-5 h-5 text-primary" }, null, _parent));
        _push(`<span data-v-ffc2ab16>Edit Item ${ssrInterpolate(props.id)}</span></div></h2><div class="flex items-center gap-3" data-v-ffc2ab16><button class="btn btn-ghost btn-sm hover:bg-base-300" data-v-ffc2ab16> Cancel </button><button${ssrIncludeBooleanAttr(isSubmitting.value) ? " disabled" : ""} class="btn btn-primary btn-sm gap-2 min-w-[120px]" data-v-ffc2ab16>`);
        _push(ssrRenderComponent(unref(Save), {
          class: ["w-4 h-4", { "animate-spin": isSubmitting.value }]
        }, null, _parent));
        _push(` ${ssrInterpolate(isSubmitting.value ? "Saving..." : "Save Changes")}</button></div></div><!--[-->`);
        if (Object.keys(formErrors.value).length > 0) {
          _push(`<div class="mt-4 alert alert-error shadow-lg" data-v-ffc2ab16>`);
          _push(ssrRenderComponent(unref(AlertTriangle), { class: "w-5 h-5 flex-shrink-0" }, null, _parent));
          _push(`<div data-v-ffc2ab16><h3 class="font-bold" data-v-ffc2ab16>Please correct the following errors</h3><div class="text-xs opacity-75" data-v-ffc2ab16>Review the highlighted fields below</div></div></div>`);
        }
        _push(`<!--]--></div><div class="flex-1 overflow-auto p-6 custom-scrollbar" data-v-ffc2ab16><div class="container mx-auto max-w-5xl" data-v-ffc2ab16><div class="grid gap-6 lg:grid-cols-12" data-v-ffc2ab16><div class="lg:col-span-8 space-y-6" data-v-ffc2ab16><!--[-->`);
        if (filterSections.value.sectionsWithFields.length > 0) {
          _push(`<div class="w-full space-y-4" data-v-ffc2ab16><!--[-->`);
          ssrRenderList(filterSections.value.sectionsWithFields, (item, index) => {
            _push(`<div class="collapse collapse-plus bg-base-200 rounded-box border border-base-content/10 hover:border-primary/30 transition-all duration-200 shadow-sm hover:shadow-md" data-v-ffc2ab16><input type="checkbox"${ssrIncludeBooleanAttr(index === 0) ? " checked" : ""} data-v-ffc2ab16><div class="collapse-title text-lg font-medium flex items-center gap-3 pr-12" data-v-ffc2ab16>`);
            _push(ssrRenderComponent(unref(Folder), { class: "w-5 h-5 text-primary" }, null, _parent));
            _push(` ${ssrInterpolate(item.section)}</div><div class="collapse-content bg-base-100/50" data-v-ffc2ab16><div class="pt-4" data-v-ffc2ab16>`);
            _push(ssrRenderComponent(FormBuilder, {
              columns: item.fields,
              errors: formErrors.value,
              onOnFormUpdate: onFormUpdate,
              editMode: "true",
              modelValue: props.modelValue
            }, null, _parent));
            _push(`</div></div></div>`);
          });
          _push(`<!--]--></div>`);
        }
        if (filterSections.value.fields.length > 0) {
          _push(`<div class="card bg-base-200 shadow-lg border border-base-content/10 hover:shadow-xl transition-all duration-200" data-v-ffc2ab16><div class="card-body" data-v-ffc2ab16>`);
          _push(ssrRenderComponent(FormBuilder, {
            columns: filterSections.value.fields,
            errors: formErrors.value,
            onOnFormUpdate: onFormUpdate,
            editMode: "true",
            modelValue: props.modelValue
          }, null, _parent));
          _push(`</div></div>`);
        }
        _push(`<!--]--></div><div class="lg:col-span-4 space-y-4" data-v-ffc2ab16><div class="card bg-base-200 shadow-lg hover:shadow-xl transition-all duration-200" data-v-ffc2ab16><div class="card-body" data-v-ffc2ab16><h3 class="text-sm font-medium text-base-content flex items-center gap-2" data-v-ffc2ab16>`);
        _push(ssrRenderComponent(unref(Info), { class: "w-4 h-4 text-primary" }, null, _parent));
        _push(` Information </h3><div class="mt-3 space-y-3 divide-y divide-base-content/10" data-v-ffc2ab16><div class="flex justify-between items-center py-2" data-v-ffc2ab16><span class="text-sm text-base-content/70" data-v-ffc2ab16>ID:</span><span class="font-medium text-base-content" data-v-ffc2ab16>${ssrInterpolate(props.id)}</span></div><div class="flex justify-between items-center py-2" data-v-ffc2ab16><span class="text-sm text-base-content/70" data-v-ffc2ab16>Last Updated:</span><span class="font-medium text-base-content flex items-center gap-2" data-v-ffc2ab16>`);
        _push(ssrRenderComponent(unref(Calendar), { class: "w-4 h-4 text-primary" }, null, _parent));
        _push(` ${ssrInterpolate(new Date((_a = props.modelValue) == null ? void 0 : _a.updated_at).toLocaleDateString())}</span></div></div></div></div><div class="card bg-base-200 shadow-lg hover:shadow-xl transition-all duration-200" data-v-ffc2ab16><div class="card-body" data-v-ffc2ab16><h3 class="text-sm font-medium text-base-content flex items-center gap-2" data-v-ffc2ab16>`);
        _push(ssrRenderComponent(unref(Navigation), { class: "w-4 h-4 text-primary" }, null, _parent));
        _push(` Quick Navigation </h3><div class="mt-3 space-y-1" data-v-ffc2ab16><!--[-->`);
        ssrRenderList(availableFields.value, (field) => {
          _push(`<button class="${ssrRenderClass([[
            formErrors.value[field.key] ? "text-error bg-error/10 hover:bg-error/20" : "text-base-content hover:bg-base-100"
          ], "w-full text-left px-3 py-2 text-sm rounded-btn transition-all duration-200"])}" data-v-ffc2ab16><div class="flex items-center gap-2" data-v-ffc2ab16>`);
          if (formErrors.value[field.key]) {
            _push(`<span class="text-error" data-v-ffc2ab16>●</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(` ${ssrInterpolate(field.label)}</div></button>`);
        });
        _push(`<!--]--></div></div></div></div></div></div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/Builder/Table/components/crud/edit.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Edit = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-ffc2ab16"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "filter",
  __ssrInlineRender: true,
  props: {
    columns: {}
  },
  emits: ["onPerPage", "onOrderBy", "onSearch", "onFilter", "onFilterReset"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const isFilterOpen = ref(false);
    const perPage = ref(10);
    const filterBy = ref("");
    const orderBy = ref("asc");
    const search = ref("");
    const filterColumns = ref([]);
    const selectedFilterLabel = computed(() => {
      const column = filterColumns.value.find((col) => col.value === filterBy.value);
      return (column == null ? void 0 : column.label) || "";
    });
    const hasActiveFilters = computed(() => {
      return search.value || filterBy.value || perPage.value !== 10 || orderBy.value !== "asc";
    });
    const debounce = (func, delay) => {
      let timeoutId;
      return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
      };
    };
    const builderTableFilter = () => {
      const sortableColumns = props.columns.filter((col) => col.sortable);
      filterColumns.value = sortableColumns.map((col) => ({
        label: col.label,
        value: col.key
      }));
    };
    const debouncedSearch = debounce((value) => {
      emit("onSearch", value);
    }, 300);
    watch(perPage, (value) => emit("onPerPage", value));
    watch(orderBy, (value) => emit("onOrderBy", value));
    watch(filterBy, (value) => emit("onFilter", value));
    watch(search, (value) => {
      if (value) debouncedSearch(value);
    });
    onMounted(builderTableFilter);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-base-100 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl" }, _attrs))} data-v-e2c29525><div class="p-4" data-v-e2c29525><div class="md:hidden w-full mb-4" data-v-e2c29525><button class="btn btn-ghost w-full justify-between group" data-v-e2c29525><span class="flex items-center gap-2" data-v-e2c29525>`);
      _push(ssrRenderComponent(unref(SlidersHorizontal), { class: "w-4 h-4 text-primary" }, null, _parent));
      _push(`<span data-v-e2c29525>${ssrInterpolate(isFilterOpen.value ? "Hide Filters" : "Show Filters")}</span></span>`);
      _push(ssrRenderComponent(unref(ChevronDown), {
        class: ["w-4 h-4 transition-transform duration-300", { "rotate-180": isFilterOpen.value }]
      }, null, _parent));
      _push(`</button></div><div class="${ssrRenderClass([[
        "md:grid-cols-[1fr_auto]",
        isFilterOpen.value ? "grid-cols-1" : "hidden md:grid"
      ], "grid gap-4 transition-all duration-300"])}" data-v-e2c29525><div class="grid gap-3 sm:grid-cols-3" data-v-e2c29525><div class="dropdown dropdown-hover" data-v-e2c29525><label tabindex="0" class="btn btn-ghost w-full justify-between gap-2 normal-case" data-v-e2c29525><div class="flex items-center gap-2 text-base-content/70" data-v-e2c29525>`);
      _push(ssrRenderComponent(unref(ListFilter), { class: "w-4 h-4" }, null, _parent));
      _push(`<span data-v-e2c29525>${ssrInterpolate(perPage.value)} per page</span></div>`);
      _push(ssrRenderComponent(unref(ChevronDown), { class: "w-4 h-4" }, null, _parent));
      _push(`</label><ul tabindex="0" class="dropdown-content z-10 menu p-2 shadow-lg bg-base-200 rounded-box w-52" data-v-e2c29525><!--[-->`);
      ssrRenderList([10, 25, 50, 100], (count) => {
        _push(`<li data-v-e2c29525><button class="${ssrRenderClass([{ "active": perPage.value === count }, "flex items-center gap-2"])}" data-v-e2c29525>`);
        if (perPage.value === count) {
          _push(ssrRenderComponent(unref(Check), { class: "w-4 h-4" }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<span data-v-e2c29525>${ssrInterpolate(count)} items</span></button></li>`);
      });
      _push(`<!--]--></ul></div><div class="dropdown dropdown-hover" data-v-e2c29525><label tabindex="0" class="btn btn-ghost w-full justify-between gap-2 normal-case" data-v-e2c29525><div class="flex items-center gap-2 text-base-content/70" data-v-e2c29525>`);
      _push(ssrRenderComponent(unref(Filter), { class: "w-4 h-4" }, null, _parent));
      _push(`<span class="truncate" data-v-e2c29525>${ssrInterpolate(selectedFilterLabel.value || "Filter by")}</span></div>`);
      _push(ssrRenderComponent(unref(ChevronDown), { class: "w-4 h-4" }, null, _parent));
      _push(`</label><ul tabindex="0" class="dropdown-content z-10 menu p-2 shadow-lg bg-base-200 rounded-box w-52" data-v-e2c29525><!--[-->`);
      ssrRenderList(filterColumns.value, (column) => {
        _push(`<li data-v-e2c29525><button class="${ssrRenderClass([{ "active": filterBy.value === column.value }, "flex items-center gap-2"])}" data-v-e2c29525>`);
        if (filterBy.value === column.value) {
          _push(ssrRenderComponent(unref(Check), { class: "w-4 h-4" }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<span data-v-e2c29525>${ssrInterpolate(column.label)}</span></button></li>`);
      });
      _push(`<!--]--></ul></div><div class="dropdown dropdown-hover" data-v-e2c29525><label tabindex="0" class="btn btn-ghost w-full justify-between gap-2 normal-case" data-v-e2c29525><div class="flex items-center gap-2 text-base-content/70" data-v-e2c29525>`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(orderBy.value === "asc" ? unref(ArrowUp) : unref(ArrowDown)), { class: "w-4 h-4" }, null), _parent);
      _push(`<span data-v-e2c29525>${ssrInterpolate(orderBy.value === "asc" ? "Ascending" : "Descending")}</span></div>`);
      _push(ssrRenderComponent(unref(ChevronDown), { class: "w-4 h-4" }, null, _parent));
      _push(`</label><ul tabindex="0" class="dropdown-content z-10 menu p-2 shadow-lg bg-base-200 rounded-box w-52" data-v-e2c29525><li data-v-e2c29525><button class="${ssrRenderClass([{ "active": orderBy.value === "asc" }, "flex items-center gap-2"])}" data-v-e2c29525>`);
      _push(ssrRenderComponent(unref(ArrowUp), { class: "w-4 h-4" }, null, _parent));
      _push(`<span data-v-e2c29525>Ascending</span></button></li><li data-v-e2c29525><button class="${ssrRenderClass([{ "active": orderBy.value === "desc" }, "flex items-center gap-2"])}" data-v-e2c29525>`);
      _push(ssrRenderComponent(unref(ArrowDown), { class: "w-4 h-4" }, null, _parent));
      _push(`<span data-v-e2c29525>Descending</span></button></li></ul></div></div><div class="join w-full sm:w-auto" data-v-e2c29525><div class="relative flex-1" data-v-e2c29525><input${ssrRenderAttr("value", search.value)} type="text" placeholder="Search..." class="${ssrRenderClass([{ "pr-9": search.value }, "input input-bordered join-item w-full pl-10"])}" data-v-e2c29525>`);
      _push(ssrRenderComponent(unref(Search), { class: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-base-content/40" }, null, _parent));
      if (search.value) {
        _push(`<button class="absolute right-3 top-1/2 -translate-y-1/2 text-base-content/40 hover:text-base-content transition-colors" data-v-e2c29525>`);
        _push(ssrRenderComponent(unref(X), { class: "w-4 h-4" }, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><button class="btn btn-primary join-item" data-v-e2c29525>`);
      _push(ssrRenderComponent(unref(Search), { class: "w-4 h-4" }, null, _parent));
      _push(`<span class="hidden sm:inline" data-v-e2c29525>Search</span></button><button class="btn btn-secondary join-item group"${ssrIncludeBooleanAttr(!hasActiveFilters.value) ? " disabled" : ""} data-v-e2c29525>`);
      _push(ssrRenderComponent(unref(RotateCcw), { class: "w-4 h-4 group-hover:rotate-180 transition-transform duration-300" }, null, _parent));
      _push(`<span class="hidden sm:inline" data-v-e2c29525>Reset</span></button></div></div><!--[-->`);
      if (search.value) {
        _push(`<div class="badge badge-primary gap-2 p-3" data-v-e2c29525><span class="text-xs opacity-70" data-v-e2c29525>Search:</span><span data-v-e2c29525>${ssrInterpolate(search.value)}</span><button class="hover:text-error" data-v-e2c29525>`);
        _push(ssrRenderComponent(unref(X), { class: "w-3 h-3" }, null, _parent));
        _push(`</button></div>`);
      }
      if (filterBy.value) {
        _push(`<div class="badge badge-secondary gap-2 p-3" data-v-e2c29525><span class="text-xs opacity-70" data-v-e2c29525>Filter:</span><span data-v-e2c29525>${ssrInterpolate(selectedFilterLabel.value)}</span><button class="hover:text-error" data-v-e2c29525>`);
        _push(ssrRenderComponent(unref(X), { class: "w-3 h-3" }, null, _parent));
        _push(`</button></div>`);
      }
      if (perPage.value !== 10) {
        _push(`<div class="badge badge-accent gap-2 p-3" data-v-e2c29525><span class="text-xs opacity-70" data-v-e2c29525>Show:</span><span data-v-e2c29525>${ssrInterpolate(perPage.value)} items</span><button class="hover:text-error" data-v-e2c29525>`);
        _push(ssrRenderComponent(unref(X), { class: "w-3 h-3" }, null, _parent));
        _push(`</button></div>`);
      }
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/Builder/Table/components/filter/filter.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const TableFilter = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-e2c29525"]]);
const _sfc_main$2 = {
  __name: "pagination",
  __ssrInlineRender: true,
  props: {
    paginationInfo: {
      type: Object,
      default: () => ({
        currentPage: 1,
        lastPage: 1,
        perPage: 10,
        total: 0,
        links: []
      })
    },
    endpoint: {
      type: String,
      default: ""
    }
  },
  emits: ["onPagiation"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const currentPage = computed(() => props.paginationInfo.currentPage || 1);
    const lastPage = computed(() => props.paginationInfo.lastPage || 1);
    const perPage = computed(() => props.paginationInfo.perPage || 10);
    const total = computed(() => props.paginationInfo.total || 0);
    const pageRange = computed(() => {
      const current = currentPage.value;
      const total2 = lastPage.value;
      const delta = 2;
      const left = current - delta;
      const right = current + delta + 1;
      const range = [];
      const rangeWithDots = [];
      let l;
      for (let i = 1; i <= total2; i++) {
        if (i === 1 || i === total2 || i >= left && i < right) {
          range.push(i);
        }
      }
      for (const i of range) {
        if (l) {
          if (i - l === 2) {
            rangeWithDots.push(l + 1);
          } else if (i - l !== 1) {
            rangeWithDots.push("...");
          }
        }
        rangeWithDots.push(i);
        l = i;
      }
      return rangeWithDots;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-5 py-5 bg-base-200 border-t flex flex-col xs:flex-row items-center xs:justify-between" }, _attrs))}><span class="xs:text-sm text-primary font-bold text-sm md:text-lg"> Showing ${ssrInterpolate(currentPage.value)} to ${ssrInterpolate(Math.min(currentPage.value * perPage.value, total.value))} of ${ssrInterpolate(total.value)} Entries </span><div class="inline-flex mt-2 xs:mt-0"><div class="btn-group"><button class="btn btn-md"${ssrIncludeBooleanAttr(currentPage.value === 1) ? " disabled" : ""}> Prev </button><!--[-->`);
      ssrRenderList(pageRange.value, (pageNum, index) => {
        _push(`<!--[-->`);
        if (typeof pageNum === "number") {
          _push(`<button class="${ssrRenderClass([{ "btn-active": pageNum === currentPage.value }, "btn btn-md"])}">${ssrInterpolate(pageNum)}</button>`);
        } else if (pageNum === "...") {
          _push(`<span class="btn btn-md btn-disabled"> ... </span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--><button class="btn btn-md"${ssrIncludeBooleanAttr(currentPage.value === lastPage.value) ? " disabled" : ""}> Next </button></div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/Builder/Table/components/filter/pagination.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "tableDataDisplay",
  __ssrInlineRender: true,
  props: {
    tableData: {
      type: Object,
      default: () => ({})
    },
    columns: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const props = __props;
    const expandedImage = ref(null);
    const showAllMedia = ref(false);
    const closeImageModal = () => {
      expandedImage.value = null;
    };
    const downloadImage = (image) => {
      var _a;
      const downloadUrl = typeof image.url === "string" ? image.url : (_a = image.url) == null ? void 0 : _a.download;
      if (downloadUrl) {
        window.open(downloadUrl, "_blank");
      }
    };
    const formatRelativeDate = (date) => {
      if (!date) return "";
      return formatDistanceToNow(new Date(date), { addSuffix: true });
    };
    const formatPrice = (price) => {
      if (!price) return "0.00";
      return price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    const formatFileSize = (bytes) => {
      if (!bytes) return "";
      const units = ["B", "KB", "MB", "GB"];
      let size = bytes;
      let unitIndex = 0;
      while (size >= 1024 && unitIndex < units.length - 1) {
        size /= 1024;
        unitIndex++;
      }
      return `${size.toFixed(1)} ${units[unitIndex]}`;
    };
    const getTagColor = (key) => {
      if (!key || typeof key !== "string") return "badge-neutral";
      const colors = {
        status: "badge-info",
        type: "badge-warning",
        category: "badge-success",
        priority: "badge-error",
        label: "badge-primary",
        default: "badge-neutral"
      };
      return colors[key.toLowerCase()] || colors.default;
    };
    const getProgressStatus = (value) => {
      if (value >= 80) return {
        text: "Completed",
        class: "bg-success/20 text-success",
        barClass: "bg-success"
      };
      if (value >= 50) return {
        text: "In Progress",
        class: "bg-info/20 text-info",
        barClass: "bg-info"
      };
      if (value >= 25) return {
        text: "Started",
        class: "bg-warning/20 text-warning",
        barClass: "bg-warning"
      };
      return {
        text: "Pending",
        class: "bg-error/20 text-error",
        barClass: "bg-error"
      };
    };
    const formatBytes = (bytes, decimals = 2) => {
      if (!bytes) return "0 Bytes";
      const k = 1024;
      const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return `${parseFloat((bytes / Math.pow(k, i)).toFixed(decimals))} ${sizes[i]}`;
    };
    const formatDate2 = (date) => {
      if (!date) return "";
      try {
        const d = new Date(date);
        return d.toLocaleDateString(void 0, {
          year: "numeric",
          month: "short",
          day: "numeric"
        });
      } catch (e) {
        return date;
      }
    };
    const formatNumber = (num) => {
      return new Intl.NumberFormat().format(num);
    };
    const tableDisplayInformation = computed(() => {
      return props.columns.map((column) => ({
        label: column.label,
        type: column.type || "default",
        value: (() => {
          const value = props.tableData[column.key];
          try {
            switch (column.type) {
              case "media":
                return Array.isArray(value) ? value : value ? [value] : [];
              case "model_search":
                if (!value) return {};
                return typeof value === "object" ? value : { value };
              case "number":
                return typeof value === "number" ? formatNumber(value) : value;
              case "timestamp":
                return typeof value === "string" ? formatDate2(value) : "";
              case "date":
                return typeof value === "string" ? formatDate2(value) : "";
              case "filesize":
                return typeof value === "number" ? formatBytes(value) : 0;
              case "boolean":
                return typeof value === "boolean" ? value : value === 1 ? true : value === "1" ? true : value === "true" ? true : false;
              default:
                return value ?? "";
            }
          } catch (error) {
            console.error(`Error processing column ${column.key}:`, error);
            return "";
          }
        })(),
        trend: typeof props.tableData[`${column.key}_trend`] === "number" ? props.tableData[`${column.key}_trend`] : null
      }));
    });
    watch(expandedImage, (newVal) => {
      if (newVal) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    });
    onUnmounted(() => {
      document.body.style.overflow = "";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><!--[-->`);
      ssrRenderList(tableDisplayInformation.value, (item, index) => {
        _push(`<td class="p-4 align-middle" data-v-4a310a88>`);
        if (item.type === "media") {
          _push(`<div class="relative" data-v-4a310a88>`);
          if (!item.value || item.value.length === 0) {
            _push(`<div class="flex items-center justify-center h-20 w-full bg-base-200 rounded-lg" data-v-4a310a88>`);
            _push(ssrRenderComponent(unref(ImageOff), { class: "w-5 h-5 text-base-content/30" }, null, _parent));
            _push(`</div>`);
          } else {
            _push(`<div class="grid grid-cols-3 gap-2 w-fit" data-v-4a310a88><!--[-->`);
            ssrRenderList(item.value.slice(0, showAllMedia.value ? item.value.length : 3), (mediaItem, mediaIndex) => {
              var _a, _b;
              _push(`<div class="relative group aspect-square w-20 overflow-hidden rounded-lg bg-base-200" data-v-4a310a88><img${ssrRenderAttr("src", ((_a = mediaItem.url) == null ? void 0 : _a.default) || mediaItem.url)}${ssrRenderAttr("alt", mediaItem.name || `Image ${mediaIndex + 1}`)} class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" loading="lazy" data-v-4a310a88><div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 opacity-0 group-hover:opacity-100 transition-all duration-300" data-v-4a310a88><div class="absolute bottom-2 right-2 flex gap-1" data-v-4a310a88><button class="btn btn-circle btn-ghost btn-xs bg-base-200/30 hover:bg-base-200/50 text-white" title="View larger" data-v-4a310a88>`);
              _push(ssrRenderComponent(unref(Maximize2), { class: "w-3 h-3" }, null, _parent));
              _push(`</button>`);
              if ((_b = mediaItem.url) == null ? void 0 : _b.download) {
                _push(`<button class="btn btn-circle btn-ghost btn-xs bg-base-200/30 hover:bg-base-200/50 text-white" title="Download" data-v-4a310a88>`);
                _push(ssrRenderComponent(unref(Download), { class: "w-3 h-3" }, null, _parent));
                _push(`</button>`);
              } else {
                _push(`<!---->`);
              }
              _push(`</div></div></div>`);
            });
            _push(`<!--]-->`);
            if (item.value.length > 3 && !showAllMedia.value) {
              _push(`<div class="relative aspect-square w-20 bg-base-200 rounded-lg cursor-pointer group overflow-hidden" data-v-4a310a88><div class="absolute inset-0 flex items-center justify-center bg-base-300/50 group-hover:bg-base-300/70 transition-colors" data-v-4a310a88><div class="flex flex-col items-center text-base-content/70" data-v-4a310a88>`);
              _push(ssrRenderComponent(unref(Plus), { class: "w-5 h-5" }, null, _parent));
              _push(`<span class="text-xs" data-v-4a310a88>${ssrInterpolate(item.value.length - 3)} more</span></div></div></div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
          }
          _push(`</div>`);
        } else if (item.type === "toggle") {
          _push(`<div class="flex items-center gap-2" data-v-4a310a88><div class="${ssrRenderClass([
            "px-3 py-1 rounded-full text-xs font-medium inline-flex items-center gap-2 transition-all duration-300",
            item.value ? "bg-success/10 text-success hover:bg-success/20" : "bg-error/10 text-error hover:bg-error/20"
          ])}" data-v-4a310a88><div class="${ssrRenderClass([
            "w-2 h-2 rounded-full",
            item.value ? "bg-success animate-pulse" : "bg-error"
          ])}" data-v-4a310a88></div> ${ssrInterpolate(item.value ? "Active" : "Inactive")}</div></div>`);
        } else if (item.type === "model_search") {
          _push(`<div class="flex flex-wrap gap-1.5 max-w-xs" data-v-4a310a88><!--[-->`);
          ssrRenderList(item.value, (searchItem, searchKey) => {
            _push(`<div class="group/tag cursor-default" data-v-4a310a88><div class="${ssrRenderClass([getTagColor(String(searchKey)), "badge badge-sm gap-1.5 transition-all duration-300"])}" data-v-4a310a88><span class="opacity-60 text-[10px] uppercase" data-v-4a310a88>${ssrInterpolate(searchKey)}</span><span class="font-medium" data-v-4a310a88>${ssrInterpolate(searchItem)}</span></div><div class="fixed z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 invisible group-hover/tag:opacity-100 group-hover/tag:visible transition-all duration-200 pointer-events-none" data-v-4a310a88><div class="bg-base-300 text-base-content px-2 py-1 rounded text-xs shadow-lg" data-v-4a310a88>${ssrInterpolate(searchKey)}: ${ssrInterpolate(searchItem)}</div></div></div>`);
          });
          _push(`<!--]--></div>`);
        } else if (item.type === "boolean") {
          _push(`<div class="flex items-center justify-center" data-v-4a310a88><div class="${ssrRenderClass([
            "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300",
            item.value ? "bg-success/10 text-success hover:bg-success/20" : "bg-error/10 text-error hover:bg-error/20"
          ])}" data-v-4a310a88>`);
          if (item.value) {
            _push(ssrRenderComponent(unref(CheckCircle2), { class: "w-5 h-5" }, null, _parent));
          } else {
            _push(ssrRenderComponent(unref(XCircle), { class: "w-5 h-5" }, null, _parent));
          }
          _push(`</div></div>`);
        } else if (item.type === "progress") {
          _push(`<div class="w-full max-w-xs" data-v-4a310a88><div class="flex justify-between items-center mb-1" data-v-4a310a88><span class="text-sm" data-v-4a310a88>${ssrInterpolate(item.value)}%</span><span class="${ssrRenderClass([
            "text-xs px-1.5 py-0.5 rounded",
            getProgressStatus(item.value).class
          ])}" data-v-4a310a88>${ssrInterpolate(getProgressStatus(item.value).text)}</span></div><div class="w-full bg-base-200 rounded-full h-2" data-v-4a310a88><div class="${ssrRenderClass([getProgressStatus(item.value).barClass, "rounded-full h-2 transition-all duration-500"])}" style="${ssrRenderStyle({ width: `${item.value}%` })}" data-v-4a310a88></div></div></div>`);
        } else if (item.type === "date") {
          _push(`<div class="flex items-center gap-2" data-v-4a310a88>`);
          _push(ssrRenderComponent(unref(Calendar), { class: "w-4 h-4 text-primary/70" }, null, _parent));
          _push(`<div class="flex flex-col" data-v-4a310a88><span class="text-sm" data-v-4a310a88>${ssrInterpolate(formatDate2(item.value))}</span><span class="text-xs text-base-content/60" data-v-4a310a88>${ssrInterpolate(formatRelativeDate(item.value))}</span></div></div>`);
        } else if (item.type === "price") {
          _push(`<div class="font-mono text-base-content/90" data-v-4a310a88><span class="text-xs text-base-content/60" data-v-4a310a88>$</span> ${ssrInterpolate(formatPrice(item.value))}</div>`);
        } else if (item.type === "number") {
          _push(`<div class="flex items-baseline gap-1" data-v-4a310a88><span class="text-base font-semibold" data-v-4a310a88>${ssrInterpolate(formatNumber(item.value))}</span>`);
          if (item.trend) {
            _push(`<span class="${ssrRenderClass([
              "text-xs flex items-center gap-0.5",
              item.trend > 0 ? "text-success" : "text-error"
            ])}" data-v-4a310a88>`);
            if (item.trend > 0) {
              _push(ssrRenderComponent(unref(TrendingUp), { class: "w-3 h-3" }, null, _parent));
            } else {
              _push(ssrRenderComponent(unref(TrendingDown), { class: "w-3 h-3" }, null, _parent));
            }
            _push(` ${ssrInterpolate(Math.abs(item.trend))}% </span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else if (item.type === "icon") {
          _push(`<div class="w-10 h-10 rounded-lg flex items-center justify-center bg-base-200/50 hover:bg-base-200 transition-colors" data-v-4a310a88>${item.value ?? ""}</div>`);
        } else {
          _push(`<div class="group relative max-w-xs" data-v-4a310a88><div class="${ssrRenderClass([{ "text-base-content/50": !item.value }, "truncate"])}" data-v-4a310a88>${ssrInterpolate(item.value || "—")}</div>`);
          if (item.value && item.value.length > 30) {
            _push(`<div class="fixed z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none" data-v-4a310a88><div class="bg-base-300 text-base-content px-3 py-2 rounded shadow-lg max-w-xs" data-v-4a310a88>${ssrInterpolate(item.value)}</div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        }
        _push(`</td>`);
      });
      _push(`<!--]-->`);
      ssrRenderTeleport(_push, (_push2) => {
        _push2(ssrRenderComponent(unref(TransitionRoot), {
          appear: "",
          show: !!expandedImage.value,
          as: "template"
        }, {
          default: withCtx((_, _push3, _parent2, _scopeId) => {
            if (_push3) {
              _push3(ssrRenderComponent(unref(Dialog), {
                as: "div",
                onClose: closeImageModal,
                class: "relative z-50"
              }, {
                default: withCtx((_2, _push4, _parent3, _scopeId2) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(unref(TransitionChild), {
                      enter: "ease-out duration-300",
                      "enter-from": "opacity-0",
                      "enter-to": "opacity-100",
                      leave: "ease-in duration-200",
                      "leave-from": "opacity-100",
                      "leave-to": "opacity-0"
                    }, {
                      default: withCtx((_3, _push5, _parent4, _scopeId3) => {
                        if (_push5) {
                          _push5(`<div class="fixed inset-0 bg-black/80 backdrop-blur-sm" data-v-4a310a88${_scopeId3}></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "fixed inset-0 bg-black/80 backdrop-blur-sm" })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push4(`<div class="fixed inset-0 overflow-y-auto" data-v-4a310a88${_scopeId2}><div class="flex min-h-full items-center justify-center p-4" data-v-4a310a88${_scopeId2}>`);
                    _push4(ssrRenderComponent(unref(TransitionChild), {
                      enter: "ease-out duration-300",
                      "enter-from": "opacity-0 scale-95",
                      "enter-to": "opacity-100 scale-100",
                      leave: "ease-in duration-200",
                      "leave-from": "opacity-100 scale-100",
                      "leave-to": "opacity-0 scale-95"
                    }, {
                      default: withCtx((_3, _push5, _parent4, _scopeId3) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(unref(DialogPanel), { class: "relative bg-base-100 rounded-xl shadow-2xl" }, {
                            default: withCtx((_4, _push6, _parent5, _scopeId4) => {
                              var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
                              if (_push6) {
                                _push6(`<div class="relative" data-v-4a310a88${_scopeId4}><img${ssrRenderAttr("src", ((_b = (_a = expandedImage.value) == null ? void 0 : _a.url) == null ? void 0 : _b.default) || ((_c = expandedImage.value) == null ? void 0 : _c.url))}${ssrRenderAttr("alt", ((_d = expandedImage.value) == null ? void 0 : _d.name) || "Preview")} class="max-w-3xl max-h-[70vh] object-contain rounded-t-xl" data-v-4a310a88${_scopeId4}><div class="absolute top-4 right-4 flex gap-2" data-v-4a310a88${_scopeId4}>`);
                                if ((_f = (_e = expandedImage.value) == null ? void 0 : _e.url) == null ? void 0 : _f.download) {
                                  _push6(`<button class="btn btn-circle btn-sm bg-base-200/30 hover:bg-base-200/50 text-white" data-v-4a310a88${_scopeId4}>`);
                                  _push6(ssrRenderComponent(unref(Download), { class: "w-4 h-4" }, null, _parent5, _scopeId4));
                                  _push6(`</button>`);
                                } else {
                                  _push6(`<!---->`);
                                }
                                _push6(`<button class="btn btn-circle btn-sm bg-base-200/30 hover:bg-base-200/50 text-white" data-v-4a310a88${_scopeId4}>`);
                                _push6(ssrRenderComponent(unref(X), { class: "w-4 h-4" }, null, _parent5, _scopeId4));
                                _push6(`</button></div></div><div class="p-4 border-t border-base-200" data-v-4a310a88${_scopeId4}><h3 class="font-medium" data-v-4a310a88${_scopeId4}>${ssrInterpolate(((_g = expandedImage.value) == null ? void 0 : _g.name) || "Image Preview")}</h3><p class="text-sm text-base-content/70 mt-1" data-v-4a310a88${_scopeId4}>${ssrInterpolate(formatFileSize((_h = expandedImage.value) == null ? void 0 : _h.size))}</p></div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "relative" }, [
                                    createVNode("img", {
                                      src: ((_j = (_i = expandedImage.value) == null ? void 0 : _i.url) == null ? void 0 : _j.default) || ((_k = expandedImage.value) == null ? void 0 : _k.url),
                                      alt: ((_l = expandedImage.value) == null ? void 0 : _l.name) || "Preview",
                                      class: "max-w-3xl max-h-[70vh] object-contain rounded-t-xl"
                                    }, null, 8, ["src", "alt"]),
                                    createVNode("div", { class: "absolute top-4 right-4 flex gap-2" }, [
                                      ((_n = (_m = expandedImage.value) == null ? void 0 : _m.url) == null ? void 0 : _n.download) ? (openBlock(), createBlock("button", {
                                        key: 0,
                                        onClick: ($event) => downloadImage(expandedImage.value),
                                        class: "btn btn-circle btn-sm bg-base-200/30 hover:bg-base-200/50 text-white"
                                      }, [
                                        createVNode(unref(Download), { class: "w-4 h-4" })
                                      ], 8, ["onClick"])) : createCommentVNode("", true),
                                      createVNode("button", {
                                        onClick: closeImageModal,
                                        class: "btn btn-circle btn-sm bg-base-200/30 hover:bg-base-200/50 text-white"
                                      }, [
                                        createVNode(unref(X), { class: "w-4 h-4" })
                                      ])
                                    ])
                                  ]),
                                  createVNode("div", { class: "p-4 border-t border-base-200" }, [
                                    createVNode("h3", { class: "font-medium" }, toDisplayString(((_o = expandedImage.value) == null ? void 0 : _o.name) || "Image Preview"), 1),
                                    createVNode("p", { class: "text-sm text-base-content/70 mt-1" }, toDisplayString(formatFileSize((_p = expandedImage.value) == null ? void 0 : _p.size)), 1)
                                  ])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(DialogPanel), { class: "relative bg-base-100 rounded-xl shadow-2xl" }, {
                              default: withCtx(() => {
                                var _a, _b, _c, _d, _e, _f, _g, _h;
                                return [
                                  createVNode("div", { class: "relative" }, [
                                    createVNode("img", {
                                      src: ((_b = (_a = expandedImage.value) == null ? void 0 : _a.url) == null ? void 0 : _b.default) || ((_c = expandedImage.value) == null ? void 0 : _c.url),
                                      alt: ((_d = expandedImage.value) == null ? void 0 : _d.name) || "Preview",
                                      class: "max-w-3xl max-h-[70vh] object-contain rounded-t-xl"
                                    }, null, 8, ["src", "alt"]),
                                    createVNode("div", { class: "absolute top-4 right-4 flex gap-2" }, [
                                      ((_f = (_e = expandedImage.value) == null ? void 0 : _e.url) == null ? void 0 : _f.download) ? (openBlock(), createBlock("button", {
                                        key: 0,
                                        onClick: ($event) => downloadImage(expandedImage.value),
                                        class: "btn btn-circle btn-sm bg-base-200/30 hover:bg-base-200/50 text-white"
                                      }, [
                                        createVNode(unref(Download), { class: "w-4 h-4" })
                                      ], 8, ["onClick"])) : createCommentVNode("", true),
                                      createVNode("button", {
                                        onClick: closeImageModal,
                                        class: "btn btn-circle btn-sm bg-base-200/30 hover:bg-base-200/50 text-white"
                                      }, [
                                        createVNode(unref(X), { class: "w-4 h-4" })
                                      ])
                                    ])
                                  ]),
                                  createVNode("div", { class: "p-4 border-t border-base-200" }, [
                                    createVNode("h3", { class: "font-medium" }, toDisplayString(((_g = expandedImage.value) == null ? void 0 : _g.name) || "Image Preview"), 1),
                                    createVNode("p", { class: "text-sm text-base-content/70 mt-1" }, toDisplayString(formatFileSize((_h = expandedImage.value) == null ? void 0 : _h.size)), 1)
                                  ])
                                ];
                              }),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push4(`</div></div>`);
                  } else {
                    return [
                      createVNode(unref(TransitionChild), {
                        enter: "ease-out duration-300",
                        "enter-from": "opacity-0",
                        "enter-to": "opacity-100",
                        leave: "ease-in duration-200",
                        "leave-from": "opacity-100",
                        "leave-to": "opacity-0"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "fixed inset-0 bg-black/80 backdrop-blur-sm" })
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "fixed inset-0 overflow-y-auto" }, [
                        createVNode("div", { class: "flex min-h-full items-center justify-center p-4" }, [
                          createVNode(unref(TransitionChild), {
                            enter: "ease-out duration-300",
                            "enter-from": "opacity-0 scale-95",
                            "enter-to": "opacity-100 scale-100",
                            leave: "ease-in duration-200",
                            "leave-from": "opacity-100 scale-100",
                            "leave-to": "opacity-0 scale-95"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(DialogPanel), { class: "relative bg-base-100 rounded-xl shadow-2xl" }, {
                                default: withCtx(() => {
                                  var _a, _b, _c, _d, _e, _f, _g, _h;
                                  return [
                                    createVNode("div", { class: "relative" }, [
                                      createVNode("img", {
                                        src: ((_b = (_a = expandedImage.value) == null ? void 0 : _a.url) == null ? void 0 : _b.default) || ((_c = expandedImage.value) == null ? void 0 : _c.url),
                                        alt: ((_d = expandedImage.value) == null ? void 0 : _d.name) || "Preview",
                                        class: "max-w-3xl max-h-[70vh] object-contain rounded-t-xl"
                                      }, null, 8, ["src", "alt"]),
                                      createVNode("div", { class: "absolute top-4 right-4 flex gap-2" }, [
                                        ((_f = (_e = expandedImage.value) == null ? void 0 : _e.url) == null ? void 0 : _f.download) ? (openBlock(), createBlock("button", {
                                          key: 0,
                                          onClick: ($event) => downloadImage(expandedImage.value),
                                          class: "btn btn-circle btn-sm bg-base-200/30 hover:bg-base-200/50 text-white"
                                        }, [
                                          createVNode(unref(Download), { class: "w-4 h-4" })
                                        ], 8, ["onClick"])) : createCommentVNode("", true),
                                        createVNode("button", {
                                          onClick: closeImageModal,
                                          class: "btn btn-circle btn-sm bg-base-200/30 hover:bg-base-200/50 text-white"
                                        }, [
                                          createVNode(unref(X), { class: "w-4 h-4" })
                                        ])
                                      ])
                                    ]),
                                    createVNode("div", { class: "p-4 border-t border-base-200" }, [
                                      createVNode("h3", { class: "font-medium" }, toDisplayString(((_g = expandedImage.value) == null ? void 0 : _g.name) || "Image Preview"), 1),
                                      createVNode("p", { class: "text-sm text-base-content/70 mt-1" }, toDisplayString(formatFileSize((_h = expandedImage.value) == null ? void 0 : _h.size)), 1)
                                    ])
                                  ];
                                }),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(Dialog), {
                  as: "div",
                  onClose: closeImageModal,
                  class: "relative z-50"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(TransitionChild), {
                      enter: "ease-out duration-300",
                      "enter-from": "opacity-0",
                      "enter-to": "opacity-100",
                      leave: "ease-in duration-200",
                      "leave-from": "opacity-100",
                      "leave-to": "opacity-0"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "fixed inset-0 bg-black/80 backdrop-blur-sm" })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "fixed inset-0 overflow-y-auto" }, [
                      createVNode("div", { class: "flex min-h-full items-center justify-center p-4" }, [
                        createVNode(unref(TransitionChild), {
                          enter: "ease-out duration-300",
                          "enter-from": "opacity-0 scale-95",
                          "enter-to": "opacity-100 scale-100",
                          leave: "ease-in duration-200",
                          "leave-from": "opacity-100 scale-100",
                          "leave-to": "opacity-0 scale-95"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(DialogPanel), { class: "relative bg-base-100 rounded-xl shadow-2xl" }, {
                              default: withCtx(() => {
                                var _a, _b, _c, _d, _e, _f, _g, _h;
                                return [
                                  createVNode("div", { class: "relative" }, [
                                    createVNode("img", {
                                      src: ((_b = (_a = expandedImage.value) == null ? void 0 : _a.url) == null ? void 0 : _b.default) || ((_c = expandedImage.value) == null ? void 0 : _c.url),
                                      alt: ((_d = expandedImage.value) == null ? void 0 : _d.name) || "Preview",
                                      class: "max-w-3xl max-h-[70vh] object-contain rounded-t-xl"
                                    }, null, 8, ["src", "alt"]),
                                    createVNode("div", { class: "absolute top-4 right-4 flex gap-2" }, [
                                      ((_f = (_e = expandedImage.value) == null ? void 0 : _e.url) == null ? void 0 : _f.download) ? (openBlock(), createBlock("button", {
                                        key: 0,
                                        onClick: ($event) => downloadImage(expandedImage.value),
                                        class: "btn btn-circle btn-sm bg-base-200/30 hover:bg-base-200/50 text-white"
                                      }, [
                                        createVNode(unref(Download), { class: "w-4 h-4" })
                                      ], 8, ["onClick"])) : createCommentVNode("", true),
                                      createVNode("button", {
                                        onClick: closeImageModal,
                                        class: "btn btn-circle btn-sm bg-base-200/30 hover:bg-base-200/50 text-white"
                                      }, [
                                        createVNode(unref(X), { class: "w-4 h-4" })
                                      ])
                                    ])
                                  ]),
                                  createVNode("div", { class: "p-4 border-t border-base-200" }, [
                                    createVNode("h3", { class: "font-medium" }, toDisplayString(((_g = expandedImage.value) == null ? void 0 : _g.name) || "Image Preview"), 1),
                                    createVNode("p", { class: "text-sm text-base-content/70 mt-1" }, toDisplayString(formatFileSize((_h = expandedImage.value) == null ? void 0 : _h.size)), 1)
                                  ])
                                ];
                              }),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      }, "body", false, _parent);
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/Builder/Table/components/tableDataDisplay.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TableDisplayData = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-4a310a88"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Table",
  __ssrInlineRender: true,
  props: {
    tableTitle: { type: String, default: "Table" },
    columns: { type: Array, default: () => [] },
    model: { type: String, required: true },
    endpoint: { type: String, required: true },
    endpointDelete: { type: String, required: true },
    endpointCreate: { type: String, required: true },
    endpointEdit: { type: String, required: true },
    permission: { type: String, default: null },
    custom_edit_route: { type: String, default: null }
  },
  setup(__props) {
    const message = useMessage();
    const isLoading = ref(false);
    const tableData = ref([]);
    const paginationInfo = ref({
      currentPage: 1,
      lastPage: 1,
      perPage: 10,
      total: 0,
      links: []
    });
    const perPage = ref(10);
    const filterBy = ref("id");
    const orderBy = ref(null);
    const search = ref(null);
    const props = __props;
    const totalItems = computed(() => paginationInfo.value.total);
    const hasActiveFilters = computed(() => {
      return search.value || filterBy.value !== "id" || perPage.value !== 10 || orderBy.value !== null;
    });
    const getSortIcon = (columnKey) => {
      if (filterBy.value !== columnKey) return ArrowUpDown;
      return orderBy.value === "asc" ? ArrowUp : ArrowDown;
    };
    const fetchData = async (endpoint = props.endpoint) => {
      var _a, _b;
      try {
        isLoading.value = true;
        const response = await axios.post(endpoint, {
          model: props.model,
          columns: props.columns,
          perPage: perPage.value,
          search: search.value,
          sort: filterBy.value,
          direction: orderBy.value,
          permission: props.permission
        });
        tableData.value = response.data.data;
        paginationInfo.value = {
          currentPage: response.data.current_page,
          lastPage: response.data.last_page,
          perPage: response.data.per_page,
          total: response.data.total,
          links: response.data.links
        };
      } catch (error) {
        if ((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.errors) {
          Object.values(error.response.data.errors).forEach((errorMessages) => {
            if (Array.isArray(errorMessages)) {
              errorMessages.forEach((msg) => message.error(msg));
            }
          });
        } else {
          message.error("Failed to fetch data");
        }
      } finally {
        isLoading.value = false;
      }
    };
    const refreshData = () => fetchData();
    const handlePageChange = (link) => fetchData(link);
    const handlePerPageChange = (value) => {
      perPage.value = value;
      fetchData();
    };
    const handleFilterChange = (value) => {
      filterBy.value = value;
      fetchData();
    };
    const handleOrderChange = (value) => {
      orderBy.value = value;
      fetchData();
    };
    const handleSearch = (value) => {
      if (value && value.length > 2) {
        search.value = value;
        fetchData();
      }
    };
    const handleFilterReset = (data) => {
      perPage.value = data.perPage;
      filterBy.value = data.filterBy;
      orderBy.value = data.orderBy;
      search.value = data.search;
      fetchData();
    };
    fetchData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))} data-v-0648aefb><div class="relative flex flex-col bg-base-300 rounded-3xl shadow-lg transition-all duration-300 hover:shadow-xl" data-v-0648aefb><div class="flex flex-col sm:flex-row items-center justify-between p-6 border-b border-base-content/10" data-v-0648aefb><div class="mb-4 sm:mb-0" data-v-0648aefb><h1 class="text-2xl md:text-3xl font-extrabold text-base-content flex items-center gap-3" data-v-0648aefb>`);
      _push(ssrRenderComponent(unref(Table$1), { class: "w-8 h-8 text-primary" }, null, _parent));
      _push(` ${ssrInterpolate(props.tableTitle)}</h1>`);
      if (totalItems.value) {
        _push(`<p class="text-base-content/70 text-sm mt-1" data-v-0648aefb> Showing ${ssrInterpolate(totalItems.value.toLocaleString())} items </p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex items-center gap-3" data-v-0648aefb>`);
      ssrRenderSlot(_ctx.$slots, "custom-actions", {}, null, _push, _parent);
      ssrRenderSlot(_ctx.$slots, "new", {}, () => {
        _push(ssrRenderComponent(Create, {
          columns: props.columns,
          endpoint: props.endpointCreate,
          model: props.model,
          permission: props.permission,
          onOnCreate: refreshData
        }, null, _parent));
      }, _push, _parent);
      _push(`</div></div>`);
      _push(ssrRenderComponent(TableFilter, {
        onOnPerPage: handlePerPageChange,
        onOnOrderBy: handleOrderChange,
        onOnSearch: handleSearch,
        onOnFilter: handleFilterChange,
        onOnFilterReset: handleFilterReset,
        columns: props.columns
      }, null, _parent));
      if (isLoading.value) {
        _push(`<div class="absolute inset-0 bg-base-300/50 backdrop-blur-sm flex items-center justify-center z-50 rounded-3xl" data-v-0648aefb><div class="flex flex-col items-center gap-4" data-v-0648aefb><div class="loading loading-spinner loading-lg text-primary" data-v-0648aefb></div><p class="text-base-content/70" data-v-0648aefb>Loading data...</p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="p-6" data-v-0648aefb><div class="bg-base-100 rounded-xl overflow-hidden border border-base-content/10" data-v-0648aefb>`);
      if (!tableData.value.length && !isLoading.value) {
        _push(`<div class="flex flex-col items-center justify-center p-12 text-center" data-v-0648aefb>`);
        _push(ssrRenderComponent(unref(Database), { class: "w-16 h-16 text-base-content/20" }, null, _parent));
        _push(`<h3 class="text-lg font-semibold text-base-content mt-4" data-v-0648aefb> No Records Found </h3><p class="text-base-content/70 mt-1" data-v-0648aefb>${ssrInterpolate(search.value ? "Try adjusting your search or filters" : "No data available")}</p>`);
        if (hasActiveFilters.value) {
          _push(`<button class="btn btn-ghost btn-sm gap-2 mt-4" data-v-0648aefb>`);
          _push(ssrRenderComponent(unref(RotateCcw), { class: "w-4 h-4" }, null, _parent));
          _push(` Reset Filters </button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<div class="overflow-x-auto" data-v-0648aefb><table class="table table-compact w-full" data-v-0648aefb><thead class="bg-base-200/50" data-v-0648aefb><tr data-v-0648aefb><!--[-->`);
        ssrRenderList(__props.columns, (column, index) => {
          _push(`<th class="${ssrRenderClass(["text-base-content", { "cursor-pointer hover:bg-base-200": column.sortable }])}" data-v-0648aefb><div class="flex items-center gap-2" data-v-0648aefb>${ssrInterpolate(column.label)} `);
          if (column.sortable) {
            _push(`<button class="btn btn-ghost btn-xs btn-square opacity-50 hover:opacity-100" data-v-0648aefb>`);
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(getSortIcon(column.key)), { class: "w-4 h-4" }, null), _parent);
            _push(`</button>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></th>`);
        });
        _push(`<!--]--><th class="text-base-content text-right" data-v-0648aefb>Actions</th></tr></thead><tbody data-v-0648aefb><!--[-->`);
        ssrRenderList(tableData.value, (item, index) => {
          _push(`<tr class="hover:bg-base-200/50 transition-colors duration-200 group" data-v-0648aefb>`);
          _push(ssrRenderComponent(TableDisplayData, {
            tableData: item,
            columns: __props.columns
          }, null, _parent));
          _push(`<td class="text-right" data-v-0648aefb><div class="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" data-v-0648aefb>`);
          if (!__props.custom_edit_route) {
            _push(ssrRenderComponent(Edit, {
              columns: __props.columns,
              endpoint: __props.endpointEdit,
              model: __props.model,
              modelValue: item,
              id: item.id,
              permission: __props.permission,
              onOnEdit: refreshData
            }, null, _parent));
          } else {
            _push(ssrRenderComponent(unref(Link), {
              href: __props.custom_edit_route + item.id,
              class: "btn btn-primary btn-sm gap-2"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(unref(Pencil), { class: "w-4 h-4" }, null, _parent2, _scopeId));
                  _push2(`<span class="hidden sm:inline" data-v-0648aefb${_scopeId}>Edit</span>`);
                } else {
                  return [
                    createVNode(unref(Pencil), { class: "w-4 h-4" }),
                    createVNode("span", { class: "hidden sm:inline" }, "Edit")
                  ];
                }
              }),
              _: 2
            }, _parent));
          }
          _push(ssrRenderComponent(Delete, {
            id: item.id,
            endpoint: __props.endpointDelete,
            model: __props.model,
            permission: __props.permission,
            onOnDelete: refreshData
          }, null, _parent));
          _push(`</div></td></tr>`);
        });
        _push(`<!--]--></tbody></table></div>`);
      }
      _push(`</div><div class="mt-6" data-v-0648aefb>`);
      if (tableData.value.length) {
        _push(ssrRenderComponent(_sfc_main$2, {
          onOnPagiation: handlePageChange,
          paginationInfo: paginationInfo.value,
          endpoint: __props.endpoint
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/Builder/Table/Table.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Table = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0648aefb"]]);
export {
  Table as T
};
