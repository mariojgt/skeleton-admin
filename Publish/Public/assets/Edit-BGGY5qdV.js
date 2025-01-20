import { defineComponent, ref, watch, mergeProps, unref, isRef, useSSRContext, withCtx, createVNode, toDisplayString, computed, createTextVNode, openBlock, createBlock, createCommentVNode, withDirectives, vModelSelect, Fragment, renderList, onMounted, withModifiers } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderAttr } from "vue/server-renderer";
import { a as api, _ as _sfc_main$a } from "./App-DeZIQ0nQ.js";
import { CogIcon, BookOpenIcon, ClipboardDocumentListIcon } from "@heroicons/vue/24/solid";
import draggable from "vuedraggable";
import { S as SingleComment } from "./CommentsSingle-BGRW2ED3.js";
import { _ as _sfc_main$7, a as _sfc_main$8 } from "./YouTube-BgIwH7-D.js";
import { I as InputField, g as _sfc_main$6, c as _sfc_main$9, f as _sfc_main$b, h as _sfc_main$c, d as _sfc_main$d } from "./Input-BXi_X4mZ.js";
import { useMessage } from "naive-ui";
import { _ as _sfc_main$5 } from "./Editor-BBpbDuzg.js";
import { Disclosure, DisclosureButton, DisclosurePanel, TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import { router } from "@inertiajs/vue3";
import "./FlashMessage-C9hwciIU.js";
import "axios";
import "lucide-vue-next";
import "lodash/debounce.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./axios-BWWnXGbF.js";
import "./Markdown-D1WgnuMs.js";
import "dompurify";
import "markdown-it";
import "highlight.js";
import "@vimeo/player";
import "youtube-player";
import "marked";
import "turndown";
import "date-fns";
import "@tinymce/tinymce-vue";
import "form-data";
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "AddEditLearningPoint",
  __ssrInlineRender: true,
  props: {
    lesson: {
      type: Object,
      default: null
    },
    editLesson: {
      type: Object,
      default: null
    },
    lessonLearningPoint: {
      type: Object,
      default: null
    },
    apiKey: {
      type: String,
      default: null
    },
    editingMode: {
      type: Boolean,
      default: false
    },
    secondsSync: {
      type: Number,
      default: 0
    }
  },
  emits: ["updateLesson"],
  setup(__props, { emit: __emit }) {
    useMessage();
    const props = __props;
    let lessonPointSeconds = ref(1);
    let lessonPointTitle = ref("");
    let lessonPointContent = ref("");
    let lessonEditValue = ref("");
    let lessonEditId = ref("");
    watch(
      () => props.editLesson,
      (value) => {
        if (value) {
          lessonEditId.value = value.id;
          lessonPointSeconds.value = value.seconds;
          lessonPointTitle.value = value.title;
          lessonEditValue.value = value.content;
        }
      }
    );
    watch(
      () => props.secondsSync,
      (value) => {
        if (value) {
          lessonPointSeconds.value = value.toString();
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}><form class="flex-1"><div class="${ssrRenderClass([
        __props.editingMode ? "bg-base-200 rounded-lg border border-accent" : "bg-base-200 rounded-lg border border-success",
        "flex flex-col p-10 rounded-lg"
      ])}">`);
      if (__props.editingMode) {
        _push(`<div class="mb-5"><h1 class="card-title">Edit Learning Point</h1></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="mb-5">`);
      _push(ssrRenderComponent(unref(InputField), {
        modelValue: unref(lessonPointSeconds),
        "onUpdate:modelValue": ($event) => isRef(lessonPointSeconds) ? lessonPointSeconds.value = $event : lessonPointSeconds = $event,
        type: "number",
        placeholder: "What second of the video you like to trigger this information?",
        label: "Video Trigger Second (" + props.lesson.lesson_duration + " seconds)",
        required: ""
      }, null, _parent));
      _push(`</div><div class="mb-5">`);
      _push(ssrRenderComponent(unref(InputField), {
        modelValue: unref(lessonPointTitle),
        "onUpdate:modelValue": ($event) => isRef(lessonPointTitle) ? lessonPointTitle.value = $event : lessonPointTitle = $event,
        type: "text",
        label: "Content Title",
        required: ""
      }, null, _parent));
      _push(`</div><h2 class="card-title mb-5">Lesson Content</h2>`);
      _push(ssrRenderComponent(_sfc_main$5, {
        modelValue: unref(lessonPointContent),
        "onUpdate:modelValue": ($event) => isRef(lessonPointContent) ? lessonPointContent.value = $event : lessonPointContent = $event,
        "api-key": props.apiKey,
        "edit-model-value": unref(lessonEditValue)
      }, null, _parent));
      _push(`<button class="btn btn-success w-full mt-5" type="submit"> Save </button></div></form></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/backend/Components/Course/AddEditLearningPoint.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "LessonItemContent",
  __ssrInlineRender: true,
  props: {
    lessonPoints: {
      type: Object,
      default: null
    },
    lesson: {
      type: Object,
      default: null
    },
    editor_key: {
      type: String,
      default: null
    }
  },
  emits: ["updateLesson"],
  setup(__props, { emit: __emit }) {
    const message = useMessage();
    const props = __props;
    let deleteItem = ref(false);
    let deleteItemData = ref(null);
    let editItemModal = ref(false);
    let editItemData = ref(null);
    const emit = __emit;
    const deleteItemConfirm = async () => {
      await api.delete(route("gamedev.lesson.point.delete", deleteItemData.value.id)).then(function(response) {
        deleteItemData.value = null;
        deleteItem.value = false;
        emit("updateLesson");
        message.success("Lesson point deleted");
      }).catch(function(error) {
      });
    };
    const loadReloadLessonsPoints = async () => {
      emit("updateLesson");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="w-10/12 mx-auto relative bg-base-300 rounded p-10 mt-5"><h1 class="text-3xl text-center font-bold text-neutral-content">Lesson Points</h1><!--[-->`);
      ssrRenderList(__props.lessonPoints, (item, index) => {
        _push(`<div class="border-l-2 mt-10"><div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex gap-3 items-center px-6 py-4 bg-primary text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0"><div class="w-5 h-5 bg-accent absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div><div class="w-10 h-1 bg-base-content absolute -left-10 z-0"></div><div class="flex-auto"><h1 class="text-lg"><button class="btn btn-warning"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><span>${ssrInterpolate(item.seconds)}S</span></button></h1><h1 class="text-xl font-bold">${ssrInterpolate(item.title)}</h1></div><a href="#" class="text-center text-white hover:text-gray-300">${ssrInterpolate(item.created_for_humans)}</a><a class="btn btn-info" href="#edit-point">Edit</a><button class="btn btn-error">Delete</button></div></div>`);
      });
      _push(`<!--]--></div><div class="mt-5" id="edit-point">`);
      _push(ssrRenderComponent(_sfc_main$4, {
        style: unref(editItemModal) ? null : { display: "none" },
        onUpdateLesson: loadReloadLessonsPoints,
        editingMode: true,
        lesson: __props.lesson,
        editLesson: unref(editItemData),
        "api-key": props.editor_key
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(unref(_sfc_main$6), {
        show: unref(deleteItem),
        onClose: ($event) => isRef(deleteItem) ? deleteItem.value = false : deleteItem = false,
        onConfirm: deleteItemConfirm
      }, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title"${_scopeId}> Remove Lesson Point </h3>`);
          } else {
            return [
              createVNode("h3", {
                class: "text-lg leading-6 font-medium text-gray-900",
                id: "modal-title"
              }, " Remove Lesson Point ")
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mt-2"${_scopeId}>${ssrInterpolate(unref(deleteItemData))}</div>`);
          } else {
            return [
              createVNode("div", { class: "mt-2" }, toDisplayString(unref(deleteItemData)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/backend/Components/Course/LessonItemContent.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "LessonItem",
  __ssrInlineRender: true,
  props: {
    lesson: {
      type: Object,
      default: null
    },
    lessonKey: {
      type: Number,
      default: null
    },
    apiKey: {
      type: String,
      default: null
    }
  },
  emits: ["save", "lessonUpdate", "lessonDelete"],
  setup(__props, { emit: __emit }) {
    const message = useMessage();
    let isOpen = ref(false);
    let comments = ref([]);
    const props = __props;
    const hasUpdates = computed(() => {
      var _a;
      if ((_a = props.lesson) == null ? void 0 : _a.updated) {
        return "border-error bg-warning";
      } else {
        return "border-primary bg-base-100";
      }
    });
    const emit = __emit;
    const lessonUpdate = async () => {
      emit("lessonUpdate", props.lesson);
    };
    watch(
      () => props.lesson.description,
      async (newValue, oldValue) => {
        if (newValue !== oldValue) {
          props.lesson.updated = true;
          lessonUpdate();
        }
      }
    );
    watch(
      () => props.lesson.learning_points,
      async (newValue, oldValue) => {
        if (newValue !== oldValue) {
          props.lesson.updated = true;
          lessonUpdate();
        }
      }
    );
    const commentExapand = async () => {
      await api.get(route("gamedev.course.lesson.comments", props.lesson.id)).then(function(response) {
        comments.value = response.data.comments;
      }).catch(function(error) {
      });
    };
    const refreshComments = async () => {
      setTimeout(() => {
        commentExapand();
      }, 1e3);
    };
    let addLessonPointModal = ref(false);
    let lessonProgressSeconds = ref(0);
    const toogleNewLessonPointModal = async () => {
      if (addLessonPointModal.value) {
        addLessonPointModal.value = false;
      } else {
        addLessonPointModal.value = true;
      }
    };
    const lessonProgress = async (progress) => {
      progress = progress.toString().split(".")[0];
      lessonProgressSeconds.value = progress;
    };
    const copyToClipboard = async () => {
      let text = lessonProgressSeconds.value;
      if (navigator.clipboard) {
        try {
          await navigator.clipboard.writeText(text);
          message.success("Copied to clipboard");
        } catch (err) {
          console.error("Failed to copy: ", err);
        }
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.top = "0";
        textarea.style.left = "0";
        textarea.style.position = "fixed";
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        try {
          const successful = document.execCommand("copy");
          if (successful) {
            message.success("Copied to clipboard");
          } else {
            message.error("Failed to copy");
          }
        } catch (err) {
          console.error("Fallback copy method failed: ", err);
        }
        document.body.removeChild(textarea);
      }
    };
    let lessonPoints = ref([]);
    const loadReloadLessonsPoints = async () => {
      await api.get(route("gamedev.lesson.point.index", props.lesson.id)).then(function(response) {
        lessonPoints.value = response.data.data;
      });
    };
    let lessonResources = ref([]);
    let showResources = ref(false);
    let newResourceModal = ref(false);
    let newResource = ref({
      title: "",
      description: "",
      resource_type: "link",
      resource_url: "",
      file_path: ""
    });
    const loadResources = async () => {
      await api.get(route("gamedev.lesson.resources.index", props.lesson.id)).then((response) => {
        lessonResources.value = response.data.data;
      }).catch((error) => {
        console.error("Error loading resources", error);
      });
    };
    const toggleResources = async () => {
      showResources.value = !showResources.value;
      if (showResources.value) {
        loadResources();
      }
    };
    const createResource = async () => {
      await api.post(route("gamedev.lesson.resources.store", props.lesson.id), newResource.value).then((response) => {
        message.success("Resource added successfully");
        newResourceModal.value = false;
        loadResources();
        newResource.value = {
          title: "",
          description: "",
          resource_type: "link",
          resource_url: "",
          file_path: ""
        };
      }).catch((error) => {
        console.error("Error creating resource", error);
        message.error("Failed to add resource");
      });
    };
    const updateResource = async (resource) => {
      await api.put(route("gamedev.lesson.resources.update", [props.lesson.id, resource.id]), resource).then((response) => {
        message.success("Resource updated successfully");
        loadResources();
      }).catch((error) => {
        console.error("Error updating resource", error);
        message.error("Failed to update resource");
      });
    };
    const deleteResource = async (resource) => {
      await api.delete(route("gamedev.lesson.resources.destroy", [props.lesson.id, resource.id])).then((response) => {
        message.success("Resource deleted successfully");
        loadResources();
      }).catch((error) => {
        console.error("Error deleting resource", error);
        message.error("Failed to delete resource");
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["flex flex-col p-2 border-2 hover:border-secondary shadow-md hover:shodow-lg rounded-2xl mt-3", hasUpdates.value]
      }, _attrs))}><div class="flex flex-col"><div class="flex items-center justify-between"><div class="flex items-center justify-start"><div class="w-16 h-16 rounded-2xl border border-primary bg-base-100 flex justify-center"><h1 class="p-4 text-xl text-white">${ssrInterpolate(__props.lesson.order)}</h1></div><div class="flex flex-col ml-3 p-5"><div class="font-medium leading-none text-xl">${ssrInterpolate((_a = __props.lesson) == null ? void 0 : _a.name)}</div><p class="text-sm leading-none mt-1"> 5 start rating </p></div></div><div class="flex items-center justify-between space-x-2 p-2 bg-neutral rounded-2xl gap-2"><button class="btn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-red-700"><path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z"></path></svg> ${ssrInterpolate(__props.lesson.likes)} likes </button><button class="btn btn-success"> Create Slug </button><button class="btn btn-secondary"> Edit </button><button class="btn btn-error"> Delete </button></div></div>`);
      if (unref(isOpen)) {
        _push(`<div class="flex flex-col"><div class="mx-auto w-full rounded-2xl bg-base-300 p-2 mt-5">`);
        _push(ssrRenderComponent(unref(Disclosure), null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(DisclosureButton), { class: "flex w-full justify-start rounded-lg bg-secondary px-4 py-2 text-left text-sm font-medium text-neutral hover:bg-primary focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(CogIcon), {
                      class: "h-8 w-8 text-neutral",
                      "aria-hidden": "true"
                    }, null, _parent3, _scopeId2));
                    _push3(`<span class="text-lg"${_scopeId2}>Lesson main settings</span>`);
                  } else {
                    return [
                      createVNode(unref(CogIcon), {
                        class: "h-8 w-8 text-neutral",
                        "aria-hidden": "true"
                      }),
                      createVNode("span", { class: "text-lg" }, "Lesson main settings")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(DisclosurePanel), { class: "px-4 pt-4 pb-2 bg-base-300 rounded-lg mt-5" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(InputField), {
                      modelValue: __props.lesson.name,
                      "onUpdate:modelValue": ($event) => __props.lesson.name = $event,
                      type: "text",
                      label: "Lesson name",
                      onChange: lessonUpdate
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(InputField), {
                      modelValue: __props.lesson.slug,
                      "onUpdate:modelValue": ($event) => __props.lesson.slug = $event,
                      type: "text",
                      label: "Lesson slug",
                      onChange: lessonUpdate
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(InputField), {
                      modelValue: __props.lesson.video_url,
                      "onUpdate:modelValue": ($event) => __props.lesson.video_url = $event,
                      type: "text",
                      label: "Video Link",
                      onChange: lessonUpdate
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(InputField), {
                      modelValue: __props.lesson.lesson_duration,
                      "onUpdate:modelValue": ($event) => __props.lesson.lesson_duration = $event,
                      type: "text",
                      label: "Lesson duration",
                      onChange: lessonUpdate
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(InputField), {
                        modelValue: __props.lesson.name,
                        "onUpdate:modelValue": ($event) => __props.lesson.name = $event,
                        type: "text",
                        label: "Lesson name",
                        onChange: lessonUpdate
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(unref(InputField), {
                        modelValue: __props.lesson.slug,
                        "onUpdate:modelValue": ($event) => __props.lesson.slug = $event,
                        type: "text",
                        label: "Lesson slug",
                        onChange: lessonUpdate
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(unref(InputField), {
                        modelValue: __props.lesson.video_url,
                        "onUpdate:modelValue": ($event) => __props.lesson.video_url = $event,
                        type: "text",
                        label: "Video Link",
                        onChange: lessonUpdate
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(unref(InputField), {
                        modelValue: __props.lesson.lesson_duration,
                        "onUpdate:modelValue": ($event) => __props.lesson.lesson_duration = $event,
                        type: "text",
                        label: "Lesson duration",
                        onChange: lessonUpdate
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(DisclosureButton), { class: "flex w-full justify-start rounded-lg bg-secondary px-4 py-2 text-left text-sm font-medium text-neutral hover:bg-primary focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75" }, {
                  default: withCtx(() => [
                    createVNode(unref(CogIcon), {
                      class: "h-8 w-8 text-neutral",
                      "aria-hidden": "true"
                    }),
                    createVNode("span", { class: "text-lg" }, "Lesson main settings")
                  ]),
                  _: 1
                }),
                createVNode(unref(DisclosurePanel), { class: "px-4 pt-4 pb-2 bg-base-300 rounded-lg mt-5" }, {
                  default: withCtx(() => [
                    createVNode(unref(InputField), {
                      modelValue: __props.lesson.name,
                      "onUpdate:modelValue": ($event) => __props.lesson.name = $event,
                      type: "text",
                      label: "Lesson name",
                      onChange: lessonUpdate
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(unref(InputField), {
                      modelValue: __props.lesson.slug,
                      "onUpdate:modelValue": ($event) => __props.lesson.slug = $event,
                      type: "text",
                      label: "Lesson slug",
                      onChange: lessonUpdate
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(unref(InputField), {
                      modelValue: __props.lesson.video_url,
                      "onUpdate:modelValue": ($event) => __props.lesson.video_url = $event,
                      type: "text",
                      label: "Video Link",
                      onChange: lessonUpdate
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(unref(InputField), {
                      modelValue: __props.lesson.lesson_duration,
                      "onUpdate:modelValue": ($event) => __props.lesson.lesson_duration = $event,
                      type: "text",
                      label: "Lesson duration",
                      onChange: lessonUpdate
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(unref(Disclosure), {
          as: "div",
          class: "mt-4"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(DisclosureButton), { class: "flex w-full justify-start rounded-lg bg-secondary px-4 py-2 text-left text-sm font-medium text-neutral hover:bg-primary focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(BookOpenIcon), {
                      class: "h-8 w-8 text-neutral",
                      "aria-hidden": "true"
                    }, null, _parent3, _scopeId2));
                    _push3(`<span class="text-lg"${_scopeId2}>Lesson description</span>`);
                  } else {
                    return [
                      createVNode(unref(BookOpenIcon), {
                        class: "h-8 w-8 text-neutral",
                        "aria-hidden": "true"
                      }),
                      createVNode("span", { class: "text-lg" }, "Lesson description")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(DisclosurePanel), { class: "px-4 pt-4 pb-2 bg-base-300 rounded-lg mt-5" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$5, {
                      modelValue: __props.lesson.description,
                      "onUpdate:modelValue": ($event) => __props.lesson.description = $event,
                      "api-key": props.apiKey
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$5, {
                        modelValue: __props.lesson.description,
                        "onUpdate:modelValue": ($event) => __props.lesson.description = $event,
                        "api-key": props.apiKey
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "api-key"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(DisclosureButton), { class: "flex w-full justify-start rounded-lg bg-secondary px-4 py-2 text-left text-sm font-medium text-neutral hover:bg-primary focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75" }, {
                  default: withCtx(() => [
                    createVNode(unref(BookOpenIcon), {
                      class: "h-8 w-8 text-neutral",
                      "aria-hidden": "true"
                    }),
                    createVNode("span", { class: "text-lg" }, "Lesson description")
                  ]),
                  _: 1
                }),
                createVNode(unref(DisclosurePanel), { class: "px-4 pt-4 pb-2 bg-base-300 rounded-lg mt-5" }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$5, {
                      modelValue: __props.lesson.description,
                      "onUpdate:modelValue": ($event) => __props.lesson.description = $event,
                      "api-key": props.apiKey
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "api-key"])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(unref(Disclosure), {
          as: "div",
          class: "mt-4"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(DisclosureButton), {
                class: "flex w-full justify-start rounded-lg bg-secondary px-4 py-2 text-left text-sm font-medium text-neutral hover:bg-primary focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75",
                onClick: loadReloadLessonsPoints
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(ClipboardDocumentListIcon), {
                      class: "h-8 w-8 text-neutral",
                      "aria-hidden": "true"
                    }, null, _parent3, _scopeId2));
                    _push3(`<span class="text-lg"${_scopeId2}>Leaning points</span>`);
                  } else {
                    return [
                      createVNode(unref(ClipboardDocumentListIcon), {
                        class: "h-8 w-8 text-neutral",
                        "aria-hidden": "true"
                      }),
                      createVNode("span", { class: "text-lg" }, "Leaning points")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(DisclosurePanel), { class: "px-4 pt-4 pb-2 bg-base-300 rounded-lg mt-5" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a2, _b, _c, _d, _e, _f, _g, _h;
                  if (_push3) {
                    _push3(`<div class="flex justify-between mb-5"${_scopeId2}><div class="flex justify-between"${_scopeId2}><h1 class="text-5xl leading-6 font-bold text-neutral-content pr-5"${_scopeId2}> Learning points </h1><button class="btn"${_scopeId2}><div class="badge badge-secondary"${_scopeId2}>${ssrInterpolate(__props.lesson.lesson_duration)}</div> Lesson time </button></div></div><div class="p-4 mx-auto bg-base-300 rounded-lg flex flex-col items-center"${_scopeId2}>`);
                    if (__props.lesson.player_type === "vimeo") {
                      _push3(ssrRenderComponent(_sfc_main$7, {
                        width: "1200",
                        height: "600",
                        "lesson-url": __props.lesson.video_url,
                        "lesson-id": __props.lesson.id,
                        seek: (_b = (_a2 = __props.lesson) == null ? void 0 : _a2.lesson_progress) == null ? void 0 : _b.watch_time,
                        "class-video": "mb-5",
                        onVideoLessonPoints: lessonProgress
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    if (__props.lesson.player_type === "youtube") {
                      _push3(ssrRenderComponent(_sfc_main$8, {
                        width: "1200",
                        height: "600",
                        videoId: __props.lesson.video_id,
                        "lesson-id": __props.lesson.id,
                        seek: (_d = (_c = __props.lesson) == null ? void 0 : _c.lesson_progress) == null ? void 0 : _d.watch_time,
                        onVideoLessonPoints: lessonProgress
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<button class="btn mb-3 w-full btn-primary"${_scopeId2}><div class="badge badge-secondary"${_scopeId2}>${ssrInterpolate(unref(lessonProgressSeconds))}</div> Copy seconds to clipboard </button><button class="btn btn-secondary w-full"${_scopeId2}><div class="badge badge-primary p-3"${_scopeId2}> Add new entry </div></button>`);
                    if (unref(addLessonPointModal)) {
                      _push3(ssrRenderComponent(_sfc_main$4, {
                        class: "mt-5",
                        lesson: __props.lesson,
                        apiKey: props.apiKey,
                        editor_key: props.apiKey,
                        secondsSync: unref(lessonProgressSeconds),
                        onUpdateLesson: loadReloadLessonsPoints
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div>`);
                    _push3(ssrRenderComponent(_sfc_main$3, {
                      "lesson-points": unref(lessonPoints),
                      lesson: __props.lesson,
                      editor_key: props.apiKey,
                      onUpdateLesson: loadReloadLessonsPoints
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode("div", { class: "flex justify-between mb-5" }, [
                        createVNode("div", { class: "flex justify-between" }, [
                          createVNode("h1", { class: "text-5xl leading-6 font-bold text-neutral-content pr-5" }, " Learning points "),
                          createVNode("button", { class: "btn" }, [
                            createVNode("div", { class: "badge badge-secondary" }, toDisplayString(__props.lesson.lesson_duration), 1),
                            createTextVNode(" Lesson time ")
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "p-4 mx-auto bg-base-300 rounded-lg flex flex-col items-center" }, [
                        __props.lesson.player_type === "vimeo" ? (openBlock(), createBlock(_sfc_main$7, {
                          key: 0,
                          width: "1200",
                          height: "600",
                          "lesson-url": __props.lesson.video_url,
                          "lesson-id": __props.lesson.id,
                          seek: (_f = (_e = __props.lesson) == null ? void 0 : _e.lesson_progress) == null ? void 0 : _f.watch_time,
                          "class-video": "mb-5",
                          onVideoLessonPoints: lessonProgress
                        }, null, 8, ["lesson-url", "lesson-id", "seek"])) : createCommentVNode("", true),
                        __props.lesson.player_type === "youtube" ? (openBlock(), createBlock(_sfc_main$8, {
                          key: 1,
                          width: "1200",
                          height: "600",
                          videoId: __props.lesson.video_id,
                          "lesson-id": __props.lesson.id,
                          seek: (_h = (_g = __props.lesson) == null ? void 0 : _g.lesson_progress) == null ? void 0 : _h.watch_time,
                          onVideoLessonPoints: lessonProgress
                        }, null, 8, ["videoId", "lesson-id", "seek"])) : createCommentVNode("", true),
                        createVNode("button", {
                          class: "btn mb-3 w-full btn-primary",
                          onClick: copyToClipboard
                        }, [
                          createVNode("div", { class: "badge badge-secondary" }, toDisplayString(unref(lessonProgressSeconds)), 1),
                          createTextVNode(" Copy seconds to clipboard ")
                        ]),
                        createVNode("button", {
                          class: "btn btn-secondary w-full",
                          onClick: toogleNewLessonPointModal
                        }, [
                          createVNode("div", { class: "badge badge-primary p-3" }, " Add new entry ")
                        ]),
                        unref(addLessonPointModal) ? (openBlock(), createBlock(_sfc_main$4, {
                          key: 2,
                          class: "mt-5",
                          lesson: __props.lesson,
                          apiKey: props.apiKey,
                          editor_key: props.apiKey,
                          secondsSync: unref(lessonProgressSeconds),
                          onUpdateLesson: loadReloadLessonsPoints
                        }, null, 8, ["lesson", "apiKey", "editor_key", "secondsSync"])) : createCommentVNode("", true)
                      ]),
                      createVNode(_sfc_main$3, {
                        "lesson-points": unref(lessonPoints),
                        lesson: __props.lesson,
                        editor_key: props.apiKey,
                        onUpdateLesson: loadReloadLessonsPoints
                      }, null, 8, ["lesson-points", "lesson", "editor_key"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(DisclosureButton), {
                  class: "flex w-full justify-start rounded-lg bg-secondary px-4 py-2 text-left text-sm font-medium text-neutral hover:bg-primary focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75",
                  onClick: loadReloadLessonsPoints
                }, {
                  default: withCtx(() => [
                    createVNode(unref(ClipboardDocumentListIcon), {
                      class: "h-8 w-8 text-neutral",
                      "aria-hidden": "true"
                    }),
                    createVNode("span", { class: "text-lg" }, "Leaning points")
                  ]),
                  _: 1
                }),
                createVNode(unref(DisclosurePanel), { class: "px-4 pt-4 pb-2 bg-base-300 rounded-lg mt-5" }, {
                  default: withCtx(() => {
                    var _a2, _b, _c, _d;
                    return [
                      createVNode("div", { class: "flex justify-between mb-5" }, [
                        createVNode("div", { class: "flex justify-between" }, [
                          createVNode("h1", { class: "text-5xl leading-6 font-bold text-neutral-content pr-5" }, " Learning points "),
                          createVNode("button", { class: "btn" }, [
                            createVNode("div", { class: "badge badge-secondary" }, toDisplayString(__props.lesson.lesson_duration), 1),
                            createTextVNode(" Lesson time ")
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "p-4 mx-auto bg-base-300 rounded-lg flex flex-col items-center" }, [
                        __props.lesson.player_type === "vimeo" ? (openBlock(), createBlock(_sfc_main$7, {
                          key: 0,
                          width: "1200",
                          height: "600",
                          "lesson-url": __props.lesson.video_url,
                          "lesson-id": __props.lesson.id,
                          seek: (_b = (_a2 = __props.lesson) == null ? void 0 : _a2.lesson_progress) == null ? void 0 : _b.watch_time,
                          "class-video": "mb-5",
                          onVideoLessonPoints: lessonProgress
                        }, null, 8, ["lesson-url", "lesson-id", "seek"])) : createCommentVNode("", true),
                        __props.lesson.player_type === "youtube" ? (openBlock(), createBlock(_sfc_main$8, {
                          key: 1,
                          width: "1200",
                          height: "600",
                          videoId: __props.lesson.video_id,
                          "lesson-id": __props.lesson.id,
                          seek: (_d = (_c = __props.lesson) == null ? void 0 : _c.lesson_progress) == null ? void 0 : _d.watch_time,
                          onVideoLessonPoints: lessonProgress
                        }, null, 8, ["videoId", "lesson-id", "seek"])) : createCommentVNode("", true),
                        createVNode("button", {
                          class: "btn mb-3 w-full btn-primary",
                          onClick: copyToClipboard
                        }, [
                          createVNode("div", { class: "badge badge-secondary" }, toDisplayString(unref(lessonProgressSeconds)), 1),
                          createTextVNode(" Copy seconds to clipboard ")
                        ]),
                        createVNode("button", {
                          class: "btn btn-secondary w-full",
                          onClick: toogleNewLessonPointModal
                        }, [
                          createVNode("div", { class: "badge badge-primary p-3" }, " Add new entry ")
                        ]),
                        unref(addLessonPointModal) ? (openBlock(), createBlock(_sfc_main$4, {
                          key: 2,
                          class: "mt-5",
                          lesson: __props.lesson,
                          apiKey: props.apiKey,
                          editor_key: props.apiKey,
                          secondsSync: unref(lessonProgressSeconds),
                          onUpdateLesson: loadReloadLessonsPoints
                        }, null, 8, ["lesson", "apiKey", "editor_key", "secondsSync"])) : createCommentVNode("", true)
                      ]),
                      createVNode(_sfc_main$3, {
                        "lesson-points": unref(lessonPoints),
                        lesson: __props.lesson,
                        editor_key: props.apiKey,
                        onUpdateLesson: loadReloadLessonsPoints
                      }, null, 8, ["lesson-points", "lesson", "editor_key"])
                    ];
                  }),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(unref(Disclosure), {
          as: "div",
          class: "mt-4"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(DisclosureButton), {
                class: "flex w-full justify-start rounded-lg bg-secondary px-4 py-2 text-left text-sm font-medium text-neutral hover:bg-primary focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75",
                onClick: toggleResources
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(ClipboardDocumentListIcon), {
                      class: "h-8 w-8 text-neutral",
                      "aria-hidden": "true"
                    }, null, _parent3, _scopeId2));
                    _push3(`<span class="text-lg"${_scopeId2}>Lesson Resources</span>`);
                  } else {
                    return [
                      createVNode(unref(ClipboardDocumentListIcon), {
                        class: "h-8 w-8 text-neutral",
                        "aria-hidden": "true"
                      }),
                      createVNode("span", { class: "text-lg" }, "Lesson Resources")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(DisclosurePanel), { class: "px-4 pt-4 pb-2 bg-secondary rounded-lg mt-5" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (unref(showResources)) {
                      _push3(`<div class="flex flex-col space-y-4"${_scopeId2}><button class="btn btn-primary"${_scopeId2}> Add New Resource </button>`);
                      if (unref(newResourceModal)) {
                        _push3(`<div class="p-4 border rounded-lg bg-base-300"${_scopeId2}><h2 class="text-xl font-bold mb-2"${_scopeId2}>Add New Resource</h2>`);
                        _push3(ssrRenderComponent(unref(InputField), {
                          modelValue: unref(newResource).title,
                          "onUpdate:modelValue": ($event) => unref(newResource).title = $event,
                          type: "text",
                          label: "Title"
                        }, null, _parent3, _scopeId2));
                        _push3(ssrRenderComponent(unref(InputField), {
                          modelValue: unref(newResource).description,
                          "onUpdate:modelValue": ($event) => unref(newResource).description = $event,
                          type: "text",
                          label: "Description"
                        }, null, _parent3, _scopeId2));
                        _push3(`<div class="mb-2"${_scopeId2}><label${_scopeId2}>Resource Type</label><select class="select select-bordered w-full"${_scopeId2}><option value="link"${ssrIncludeBooleanAttr(Array.isArray(unref(newResource).resource_type) ? ssrLooseContain(unref(newResource).resource_type, "link") : ssrLooseEqual(unref(newResource).resource_type, "link")) ? " selected" : ""}${_scopeId2}>Link</option><option value="file"${ssrIncludeBooleanAttr(Array.isArray(unref(newResource).resource_type) ? ssrLooseContain(unref(newResource).resource_type, "file") : ssrLooseEqual(unref(newResource).resource_type, "file")) ? " selected" : ""}${_scopeId2}>File</option></select></div>`);
                        if (unref(newResource).resource_type === "link") {
                          _push3(ssrRenderComponent(unref(InputField), {
                            modelValue: unref(newResource).resource_url,
                            "onUpdate:modelValue": ($event) => unref(newResource).resource_url = $event,
                            type: "text",
                            label: "Resource URL"
                          }, null, _parent3, _scopeId2));
                        } else {
                          _push3(`<!---->`);
                        }
                        if (unref(newResource).resource_type === "file") {
                          _push3(ssrRenderComponent(unref(InputField), {
                            modelValue: unref(newResource).file_path,
                            "onUpdate:modelValue": ($event) => unref(newResource).file_path = $event,
                            type: "text",
                            label: "File Path"
                          }, null, _parent3, _scopeId2));
                        } else {
                          _push3(`<!---->`);
                        }
                        _push3(`<div class="flex space-x-2 mt-4"${_scopeId2}><button class="btn btn-success"${_scopeId2}>Create Resource</button><button class="btn btn-error"${_scopeId2}>Cancel</button></div></div>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`<!--[-->`);
                      ssrRenderList(unref(lessonResources), (resource, rIndex) => {
                        _push3(`<div class="p-4 border bg-base-100 rounded-lg flex flex-col space-y-2"${_scopeId2}><div class="flex justify-between items-center"${_scopeId2}><h3 class="text-lg font-semibold"${_scopeId2}>${ssrInterpolate(resource.title)}</h3><div class="space-x-2"${_scopeId2}><button class="btn btn-secondary"${_scopeId2}>Edit</button><button class="btn btn-error"${_scopeId2}>Delete</button></div></div><p class="text-sm"${_scopeId2}>${ssrInterpolate(resource.description)}</p>`);
                        if (resource.resource_type === "link") {
                          _push3(`<div${_scopeId2}><a${ssrRenderAttr("href", resource.resource_url)} target="_blank" class="text-blue-500 underline"${_scopeId2}>Open Link</a></div>`);
                        } else {
                          _push3(`<!---->`);
                        }
                        if (resource.resource_type === "file") {
                          _push3(`<div${_scopeId2}><span${_scopeId2}>File: ${ssrInterpolate(resource.file_path)}</span></div>`);
                        } else {
                          _push3(`<!---->`);
                        }
                        if (resource.editing) {
                          _push3(`<div class="p-4 bg-base-200 rounded-lg"${_scopeId2}>`);
                          _push3(ssrRenderComponent(unref(InputField), {
                            modelValue: resource.title,
                            "onUpdate:modelValue": ($event) => resource.title = $event,
                            type: "text",
                            label: "Title"
                          }, null, _parent3, _scopeId2));
                          _push3(ssrRenderComponent(unref(InputField), {
                            modelValue: resource.description,
                            "onUpdate:modelValue": ($event) => resource.description = $event,
                            type: "text",
                            label: "Description"
                          }, null, _parent3, _scopeId2));
                          _push3(`<div class="mb-2"${_scopeId2}><label${_scopeId2}>Resource Type</label><select class="select select-bordered w-full"${_scopeId2}><option value="link"${ssrIncludeBooleanAttr(Array.isArray(resource.resource_type) ? ssrLooseContain(resource.resource_type, "link") : ssrLooseEqual(resource.resource_type, "link")) ? " selected" : ""}${_scopeId2}>Link</option><option value="file"${ssrIncludeBooleanAttr(Array.isArray(resource.resource_type) ? ssrLooseContain(resource.resource_type, "file") : ssrLooseEqual(resource.resource_type, "file")) ? " selected" : ""}${_scopeId2}>File</option></select></div>`);
                          if (resource.resource_type === "link") {
                            _push3(ssrRenderComponent(unref(InputField), {
                              modelValue: resource.resource_url,
                              "onUpdate:modelValue": ($event) => resource.resource_url = $event,
                              type: "text",
                              label: "Resource URL"
                            }, null, _parent3, _scopeId2));
                          } else {
                            _push3(`<!---->`);
                          }
                          if (resource.resource_type === "file") {
                            _push3(ssrRenderComponent(unref(InputField), {
                              modelValue: resource.file_path,
                              "onUpdate:modelValue": ($event) => resource.file_path = $event,
                              type: "text",
                              label: "File Path"
                            }, null, _parent3, _scopeId2));
                          } else {
                            _push3(`<!---->`);
                          }
                          _push3(`<div class="flex space-x-2 mt-4"${_scopeId2}><button class="btn btn-success"${_scopeId2}>Save Changes</button><button class="btn btn-error"${_scopeId2}>Cancel</button></div></div>`);
                        } else {
                          _push3(`<!---->`);
                        }
                        _push3(`</div>`);
                      });
                      _push3(`<!--]--></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      unref(showResources) ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "flex flex-col space-y-4"
                      }, [
                        createVNode("button", {
                          class: "btn btn-primary",
                          onClick: ($event) => isRef(newResourceModal) ? newResourceModal.value = true : newResourceModal = true
                        }, " Add New Resource ", 8, ["onClick"]),
                        unref(newResourceModal) ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "p-4 border rounded-lg bg-base-300"
                        }, [
                          createVNode("h2", { class: "text-xl font-bold mb-2" }, "Add New Resource"),
                          createVNode(unref(InputField), {
                            modelValue: unref(newResource).title,
                            "onUpdate:modelValue": ($event) => unref(newResource).title = $event,
                            type: "text",
                            label: "Title"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(unref(InputField), {
                            modelValue: unref(newResource).description,
                            "onUpdate:modelValue": ($event) => unref(newResource).description = $event,
                            type: "text",
                            label: "Description"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode("div", { class: "mb-2" }, [
                            createVNode("label", null, "Resource Type"),
                            withDirectives(createVNode("select", {
                              "onUpdate:modelValue": ($event) => unref(newResource).resource_type = $event,
                              class: "select select-bordered w-full"
                            }, [
                              createVNode("option", { value: "link" }, "Link"),
                              createVNode("option", { value: "file" }, "File")
                            ], 8, ["onUpdate:modelValue"]), [
                              [vModelSelect, unref(newResource).resource_type]
                            ])
                          ]),
                          unref(newResource).resource_type === "link" ? (openBlock(), createBlock(unref(InputField), {
                            key: 0,
                            modelValue: unref(newResource).resource_url,
                            "onUpdate:modelValue": ($event) => unref(newResource).resource_url = $event,
                            type: "text",
                            label: "Resource URL"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                          unref(newResource).resource_type === "file" ? (openBlock(), createBlock(unref(InputField), {
                            key: 1,
                            modelValue: unref(newResource).file_path,
                            "onUpdate:modelValue": ($event) => unref(newResource).file_path = $event,
                            type: "text",
                            label: "File Path"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                          createVNode("div", { class: "flex space-x-2 mt-4" }, [
                            createVNode("button", {
                              class: "btn btn-success",
                              onClick: createResource
                            }, "Create Resource"),
                            createVNode("button", {
                              class: "btn btn-error",
                              onClick: ($event) => isRef(newResourceModal) ? newResourceModal.value = false : newResourceModal = false
                            }, "Cancel", 8, ["onClick"])
                          ])
                        ])) : createCommentVNode("", true),
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(lessonResources), (resource, rIndex) => {
                          return openBlock(), createBlock("div", {
                            key: rIndex,
                            class: "p-4 border bg-base-100 rounded-lg flex flex-col space-y-2"
                          }, [
                            createVNode("div", { class: "flex justify-between items-center" }, [
                              createVNode("h3", { class: "text-lg font-semibold" }, toDisplayString(resource.title), 1),
                              createVNode("div", { class: "space-x-2" }, [
                                createVNode("button", {
                                  class: "btn btn-secondary",
                                  onClick: ($event) => resource.editing = !resource.editing
                                }, "Edit", 8, ["onClick"]),
                                createVNode("button", {
                                  class: "btn btn-error",
                                  onClick: ($event) => deleteResource(resource)
                                }, "Delete", 8, ["onClick"])
                              ])
                            ]),
                            createVNode("p", { class: "text-sm" }, toDisplayString(resource.description), 1),
                            resource.resource_type === "link" ? (openBlock(), createBlock("div", { key: 0 }, [
                              createVNode("a", {
                                href: resource.resource_url,
                                target: "_blank",
                                class: "text-blue-500 underline"
                              }, "Open Link", 8, ["href"])
                            ])) : createCommentVNode("", true),
                            resource.resource_type === "file" ? (openBlock(), createBlock("div", { key: 1 }, [
                              createVNode("span", null, "File: " + toDisplayString(resource.file_path), 1)
                            ])) : createCommentVNode("", true),
                            resource.editing ? (openBlock(), createBlock("div", {
                              key: 2,
                              class: "p-4 bg-base-200 rounded-lg"
                            }, [
                              createVNode(unref(InputField), {
                                modelValue: resource.title,
                                "onUpdate:modelValue": ($event) => resource.title = $event,
                                type: "text",
                                label: "Title"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(unref(InputField), {
                                modelValue: resource.description,
                                "onUpdate:modelValue": ($event) => resource.description = $event,
                                type: "text",
                                label: "Description"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode("div", { class: "mb-2" }, [
                                createVNode("label", null, "Resource Type"),
                                withDirectives(createVNode("select", {
                                  "onUpdate:modelValue": ($event) => resource.resource_type = $event,
                                  class: "select select-bordered w-full"
                                }, [
                                  createVNode("option", { value: "link" }, "Link"),
                                  createVNode("option", { value: "file" }, "File")
                                ], 8, ["onUpdate:modelValue"]), [
                                  [vModelSelect, resource.resource_type]
                                ])
                              ]),
                              resource.resource_type === "link" ? (openBlock(), createBlock(unref(InputField), {
                                key: 0,
                                modelValue: resource.resource_url,
                                "onUpdate:modelValue": ($event) => resource.resource_url = $event,
                                type: "text",
                                label: "Resource URL"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                              resource.resource_type === "file" ? (openBlock(), createBlock(unref(InputField), {
                                key: 1,
                                modelValue: resource.file_path,
                                "onUpdate:modelValue": ($event) => resource.file_path = $event,
                                type: "text",
                                label: "File Path"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                              createVNode("div", { class: "flex space-x-2 mt-4" }, [
                                createVNode("button", {
                                  class: "btn btn-success",
                                  onClick: ($event) => updateResource(resource)
                                }, "Save Changes", 8, ["onClick"]),
                                createVNode("button", {
                                  class: "btn btn-error",
                                  onClick: ($event) => resource.editing = false
                                }, "Cancel", 8, ["onClick"])
                              ])
                            ])) : createCommentVNode("", true)
                          ]);
                        }), 128))
                      ])) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(DisclosureButton), {
                  class: "flex w-full justify-start rounded-lg bg-secondary px-4 py-2 text-left text-sm font-medium text-neutral hover:bg-primary focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75",
                  onClick: toggleResources
                }, {
                  default: withCtx(() => [
                    createVNode(unref(ClipboardDocumentListIcon), {
                      class: "h-8 w-8 text-neutral",
                      "aria-hidden": "true"
                    }),
                    createVNode("span", { class: "text-lg" }, "Lesson Resources")
                  ]),
                  _: 1
                }),
                createVNode(unref(DisclosurePanel), { class: "px-4 pt-4 pb-2 bg-secondary rounded-lg mt-5" }, {
                  default: withCtx(() => [
                    unref(showResources) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "flex flex-col space-y-4"
                    }, [
                      createVNode("button", {
                        class: "btn btn-primary",
                        onClick: ($event) => isRef(newResourceModal) ? newResourceModal.value = true : newResourceModal = true
                      }, " Add New Resource ", 8, ["onClick"]),
                      unref(newResourceModal) ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "p-4 border rounded-lg bg-base-300"
                      }, [
                        createVNode("h2", { class: "text-xl font-bold mb-2" }, "Add New Resource"),
                        createVNode(unref(InputField), {
                          modelValue: unref(newResource).title,
                          "onUpdate:modelValue": ($event) => unref(newResource).title = $event,
                          type: "text",
                          label: "Title"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(unref(InputField), {
                          modelValue: unref(newResource).description,
                          "onUpdate:modelValue": ($event) => unref(newResource).description = $event,
                          type: "text",
                          label: "Description"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode("div", { class: "mb-2" }, [
                          createVNode("label", null, "Resource Type"),
                          withDirectives(createVNode("select", {
                            "onUpdate:modelValue": ($event) => unref(newResource).resource_type = $event,
                            class: "select select-bordered w-full"
                          }, [
                            createVNode("option", { value: "link" }, "Link"),
                            createVNode("option", { value: "file" }, "File")
                          ], 8, ["onUpdate:modelValue"]), [
                            [vModelSelect, unref(newResource).resource_type]
                          ])
                        ]),
                        unref(newResource).resource_type === "link" ? (openBlock(), createBlock(unref(InputField), {
                          key: 0,
                          modelValue: unref(newResource).resource_url,
                          "onUpdate:modelValue": ($event) => unref(newResource).resource_url = $event,
                          type: "text",
                          label: "Resource URL"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                        unref(newResource).resource_type === "file" ? (openBlock(), createBlock(unref(InputField), {
                          key: 1,
                          modelValue: unref(newResource).file_path,
                          "onUpdate:modelValue": ($event) => unref(newResource).file_path = $event,
                          type: "text",
                          label: "File Path"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                        createVNode("div", { class: "flex space-x-2 mt-4" }, [
                          createVNode("button", {
                            class: "btn btn-success",
                            onClick: createResource
                          }, "Create Resource"),
                          createVNode("button", {
                            class: "btn btn-error",
                            onClick: ($event) => isRef(newResourceModal) ? newResourceModal.value = false : newResourceModal = false
                          }, "Cancel", 8, ["onClick"])
                        ])
                      ])) : createCommentVNode("", true),
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(lessonResources), (resource, rIndex) => {
                        return openBlock(), createBlock("div", {
                          key: rIndex,
                          class: "p-4 border bg-base-100 rounded-lg flex flex-col space-y-2"
                        }, [
                          createVNode("div", { class: "flex justify-between items-center" }, [
                            createVNode("h3", { class: "text-lg font-semibold" }, toDisplayString(resource.title), 1),
                            createVNode("div", { class: "space-x-2" }, [
                              createVNode("button", {
                                class: "btn btn-secondary",
                                onClick: ($event) => resource.editing = !resource.editing
                              }, "Edit", 8, ["onClick"]),
                              createVNode("button", {
                                class: "btn btn-error",
                                onClick: ($event) => deleteResource(resource)
                              }, "Delete", 8, ["onClick"])
                            ])
                          ]),
                          createVNode("p", { class: "text-sm" }, toDisplayString(resource.description), 1),
                          resource.resource_type === "link" ? (openBlock(), createBlock("div", { key: 0 }, [
                            createVNode("a", {
                              href: resource.resource_url,
                              target: "_blank",
                              class: "text-blue-500 underline"
                            }, "Open Link", 8, ["href"])
                          ])) : createCommentVNode("", true),
                          resource.resource_type === "file" ? (openBlock(), createBlock("div", { key: 1 }, [
                            createVNode("span", null, "File: " + toDisplayString(resource.file_path), 1)
                          ])) : createCommentVNode("", true),
                          resource.editing ? (openBlock(), createBlock("div", {
                            key: 2,
                            class: "p-4 bg-base-200 rounded-lg"
                          }, [
                            createVNode(unref(InputField), {
                              modelValue: resource.title,
                              "onUpdate:modelValue": ($event) => resource.title = $event,
                              type: "text",
                              label: "Title"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(unref(InputField), {
                              modelValue: resource.description,
                              "onUpdate:modelValue": ($event) => resource.description = $event,
                              type: "text",
                              label: "Description"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode("div", { class: "mb-2" }, [
                              createVNode("label", null, "Resource Type"),
                              withDirectives(createVNode("select", {
                                "onUpdate:modelValue": ($event) => resource.resource_type = $event,
                                class: "select select-bordered w-full"
                              }, [
                                createVNode("option", { value: "link" }, "Link"),
                                createVNode("option", { value: "file" }, "File")
                              ], 8, ["onUpdate:modelValue"]), [
                                [vModelSelect, resource.resource_type]
                              ])
                            ]),
                            resource.resource_type === "link" ? (openBlock(), createBlock(unref(InputField), {
                              key: 0,
                              modelValue: resource.resource_url,
                              "onUpdate:modelValue": ($event) => resource.resource_url = $event,
                              type: "text",
                              label: "Resource URL"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                            resource.resource_type === "file" ? (openBlock(), createBlock(unref(InputField), {
                              key: 1,
                              modelValue: resource.file_path,
                              "onUpdate:modelValue": ($event) => resource.file_path = $event,
                              type: "text",
                              label: "File Path"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                            createVNode("div", { class: "flex space-x-2 mt-4" }, [
                              createVNode("button", {
                                class: "btn btn-success",
                                onClick: ($event) => updateResource(resource)
                              }, "Save Changes", 8, ["onClick"]),
                              createVNode("button", {
                                class: "btn btn-error",
                                onClick: ($event) => resource.editing = false
                              }, "Cancel", 8, ["onClick"])
                            ])
                          ])) : createCommentVNode("", true)
                        ]);
                      }), 128))
                    ])) : createCommentVNode("", true)
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(unref(Disclosure), {
          as: "div",
          class: "mt-4"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(DisclosureButton), {
                class: "flex w-full justify-start rounded-lg bg-secondary px-4 py-2 text-left text-sm font-medium text-neutral hover:bg-primary focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75",
                onClick: commentExapand
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(ClipboardDocumentListIcon), {
                      class: "h-8 w-8 text-neutral",
                      "aria-hidden": "true"
                    }, null, _parent3, _scopeId2));
                    _push3(`<span class="text-lg"${_scopeId2}>Lesson comments</span>`);
                  } else {
                    return [
                      createVNode(unref(ClipboardDocumentListIcon), {
                        class: "h-8 w-8 text-neutral",
                        "aria-hidden": "true"
                      }),
                      createVNode("span", { class: "text-lg" }, "Lesson comments")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(DisclosurePanel), { class: "px-4 pt-4 pb-2 bg-secondary rounded-lg mt-5" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (unref(comments)) {
                      _push3(`<!--[-->`);
                      ssrRenderList(unref(comments), (item, index) => {
                        _push3(`<div${_scopeId2}>`);
                        _push3(ssrRenderComponent(SingleComment, {
                          comment: item,
                          "key-editor": props.apiKey,
                          onFreshComments: refreshComments
                        }, null, _parent3, _scopeId2));
                        _push3(`</div>`);
                      });
                      _push3(`<!--]-->`);
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      unref(comments) ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(unref(comments), (item, index) => {
                        return openBlock(), createBlock("div", { key: index }, [
                          createVNode(SingleComment, {
                            comment: item,
                            "key-editor": props.apiKey,
                            onFreshComments: refreshComments
                          }, null, 8, ["comment", "key-editor"])
                        ]);
                      }), 128)) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(DisclosureButton), {
                  class: "flex w-full justify-start rounded-lg bg-secondary px-4 py-2 text-left text-sm font-medium text-neutral hover:bg-primary focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75",
                  onClick: commentExapand
                }, {
                  default: withCtx(() => [
                    createVNode(unref(ClipboardDocumentListIcon), {
                      class: "h-8 w-8 text-neutral",
                      "aria-hidden": "true"
                    }),
                    createVNode("span", { class: "text-lg" }, "Lesson comments")
                  ]),
                  _: 1
                }),
                createVNode(unref(DisclosurePanel), { class: "px-4 pt-4 pb-2 bg-secondary rounded-lg mt-5" }, {
                  default: withCtx(() => [
                    unref(comments) ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(unref(comments), (item, index) => {
                      return openBlock(), createBlock("div", { key: index }, [
                        createVNode(SingleComment, {
                          comment: item,
                          "key-editor": props.apiKey,
                          onFreshComments: refreshComments
                        }, null, 8, ["comment", "key-editor"])
                      ]);
                    }), 128)) : createCommentVNode("", true)
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><button class="btn bg-success text-black hover:bg-success mt-5"> Save </button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/backend/Components/Course/LessonItem.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SectionItem",
  __ssrInlineRender: true,
  props: {
    course: {
      type: Object,
      default: null
    },
    section: {
      type: Object,
      default: null
    },
    sectionKey: {
      type: Number,
      default: null
    },
    apiKey: {
      type: String,
      default: null
    }
  },
  emits: [
    "save",
    "sectionUpdate",
    "sectionDelete",
    "lessonUpdate",
    "lessonDelete"
  ],
  setup(__props, { emit: __emit }) {
    let isOpen = ref(false);
    let addLessonModal = ref(false);
    const props = __props;
    const hasUpdates = computed(() => {
      var _a;
      if ((_a = props.section) == null ? void 0 : _a.updated) {
        return "border-error";
      } else {
        return "border-primary";
      }
    });
    const emit = __emit;
    const sectionUpdate = async () => {
      emit("sectionUpdate", props.section);
    };
    let lessons = ref([]);
    const updateOrder = async (event) => {
      let tempArray = lessons.value;
      for (let index = 0; index < lessons.value.length; index++) {
        tempArray[index].order = index + 1;
      }
      lessons.value = tempArray;
      router.post(route("gamedev.lesson.sync", props.section.id), {
        lessons: lessons.value
      });
    };
    let lessonVideoUrl = ref("");
    let lessonVideoType = ref("vimeo");
    const addNewLesson = async () => {
      addLessonModal.value = false;
      router.post(
        route("gamedev.lesson.store", props.section.id),
        {
          title: "Lesson " + (lessons.value.length + 1) + " " + props.section.name.toLowerCase(),
          video_url: lessonVideoUrl.value,
          video_type: lessonVideoType.value,
          order: lessons.value.length + 1
        },
        { preserveState: true }
      );
    };
    const saveContent = async (lesson2) => {
      let tempArray = lessons.value;
      for (let index = 0; index < lessons.value.length; index++) {
        if (tempArray[index].id == lesson2.id) {
          tempArray[index].updated = false;
        }
      }
      router.post(route("gamedev.update.lesson", lesson2.id), {
        lesson: lesson2
      });
      emit("lessonUpdate", lesson2);
    };
    const lessonUpdate = async (lesson2) => {
      let tempArray = lessons.value;
      for (let index = 0; index < lessons.value.length; index++) {
        if (tempArray[index].id == lesson2.id) {
          tempArray[index].updated = true;
        }
      }
    };
    const lessonDelete = async (lesson2) => {
      emit("lessonDelete", lesson2);
    };
    onMounted(() => {
      lessons.value = props.section.children;
    });
    watch(
      () => props.section,
      (value) => {
        console.log("watch");
        lessons.value = value.children;
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["flex flex-col p-2 border shadow-md rounded-2xl mt-3", hasUpdates.value]
      }, _attrs))}><div class="flex flex-col"><div class="flex items-center justify-between"><div class="flex items-center justify-start"><div class="w-16 h-16 rounded-2xl border border-primary text-neutral bg-secondary flex justify-center"><h1 class="p-4 text-xl">${ssrInterpolate(__props.section.order)}</h1></div><div class="flex flex-col ml-3 p-5"><div class="font-bold leading-none text-primary text-xl">${ssrInterpolate((_a = __props.section) == null ? void 0 : _a.name)}</div></div></div><div class="flex items-center justify-between space-x-2 p-2 bg-neutral rounded-2xl gap-2"><button class="btn btn-success">Preview</button><button class="btn btn-secondary"> Edit </button><button class="btn btn-error"> Delete </button></div></div>`);
      if (unref(isOpen)) {
        _push(`<div class="flex flex-col"><div class="mx-auto w-full rounded-2xl bg-base-300 p-2 mt-5">`);
        _push(ssrRenderComponent(unref(Disclosure), null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(DisclosureButton), { class: "flex w-full justify-start rounded-lg bg-secondary px-4 py-2 text-left text-sm font-medium text-neutral hover:bg-primary focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(CogIcon), {
                      class: "h-8 w-8 text-neutral",
                      "aria-hidden": "true"
                    }, null, _parent3, _scopeId2));
                    _push3(`<span class="text-lg"${_scopeId2}>section main settings</span>`);
                  } else {
                    return [
                      createVNode(unref(CogIcon), {
                        class: "h-8 w-8 text-neutral",
                        "aria-hidden": "true"
                      }),
                      createVNode("span", { class: "text-lg" }, "section main settings")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(DisclosurePanel), { class: "px-4 pt-4 pb-2 bg-base-100 rounded-lg mt-5 border border-primary" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(InputField), {
                      modelValue: __props.section.name,
                      "onUpdate:modelValue": ($event) => __props.section.name = $event,
                      type: "text",
                      label: "section name",
                      onChange: sectionUpdate
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(InputField), {
                        modelValue: __props.section.name,
                        "onUpdate:modelValue": ($event) => __props.section.name = $event,
                        type: "text",
                        label: "section name",
                        onChange: sectionUpdate
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(DisclosureButton), { class: "flex w-full justify-start rounded-lg bg-secondary px-4 py-2 text-left text-sm font-medium text-neutral hover:bg-primary focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75" }, {
                  default: withCtx(() => [
                    createVNode(unref(CogIcon), {
                      class: "h-8 w-8 text-neutral",
                      "aria-hidden": "true"
                    }),
                    createVNode("span", { class: "text-lg" }, "section main settings")
                  ]),
                  _: 1
                }),
                createVNode(unref(DisclosurePanel), { class: "px-4 pt-4 pb-2 bg-base-100 rounded-lg mt-5 border border-primary" }, {
                  default: withCtx(() => [
                    createVNode(unref(InputField), {
                      modelValue: __props.section.name,
                      "onUpdate:modelValue": ($event) => __props.section.name = $event,
                      type: "text",
                      label: "section name",
                      onChange: sectionUpdate
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(unref(Disclosure), {
          as: "div",
          class: "mt-4"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(DisclosureButton), { class: "flex w-full justify-start rounded-lg bg-secondary px-4 py-2 text-left text-sm font-medium text-neutral hover:bg-primary focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(BookOpenIcon), {
                      class: "h-8 w-8 text-neutral",
                      "aria-hidden": "true"
                    }, null, _parent3, _scopeId2));
                    _push3(`<span class="text-lg"${_scopeId2}>Lessons</span>`);
                  } else {
                    return [
                      createVNode(unref(BookOpenIcon), {
                        class: "h-8 w-8 text-neutral",
                        "aria-hidden": "true"
                      }),
                      createVNode("span", { class: "text-lg" }, "Lessons")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(DisclosurePanel), { class: "px-4 pt-4 pb-2 border rounded-lg mt-5" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<section class="bg-base-300 rounded-lg"${_scopeId2}><div class="py-8 lg:py-16 px-4 mx-auto w-full"${_scopeId2}><div class="flex justify-between"${_scopeId2}><h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-primary"${_scopeId2}> Lesson Structure </h2><div class="flex justify-between"${_scopeId2}><button class="btn btn-primary"${_scopeId2}> Add </button></div></div></div>`);
                    _push3(ssrRenderComponent(unref(draggable), {
                      modelValue: unref(lessons),
                      "onUpdate:modelValue": ($event) => isRef(lessons) ? lessons.value = $event : lessons = $event,
                      animation: 300,
                      tag: "div",
                      "item-key": "order",
                      onChange: updateOrder
                    }, {
                      item: withCtx(({ element: item }, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_sfc_main$2, {
                            apiKey: props.apiKey,
                            lesson: item,
                            onLessonUpdate: lessonUpdate,
                            onSave: saveContent,
                            onLessonDelete: lessonDelete
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_sfc_main$2, {
                              apiKey: props.apiKey,
                              lesson: item,
                              onLessonUpdate: lessonUpdate,
                              onSave: saveContent,
                              onLessonDelete: lessonDelete
                            }, null, 8, ["apiKey", "lesson"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</section>`);
                  } else {
                    return [
                      createVNode("section", { class: "bg-base-300 rounded-lg" }, [
                        createVNode("div", { class: "py-8 lg:py-16 px-4 mx-auto w-full" }, [
                          createVNode("div", { class: "flex justify-between" }, [
                            createVNode("h2", { class: "mb-4 text-4xl tracking-tight font-extrabold text-center text-primary" }, " Lesson Structure "),
                            createVNode("div", { class: "flex justify-between" }, [
                              createVNode("button", {
                                class: "btn btn-primary",
                                onClick: ($event) => isRef(addLessonModal) ? addLessonModal.value = true : addLessonModal = true
                              }, " Add ", 8, ["onClick"])
                            ])
                          ])
                        ]),
                        createVNode(unref(draggable), {
                          modelValue: unref(lessons),
                          "onUpdate:modelValue": ($event) => isRef(lessons) ? lessons.value = $event : lessons = $event,
                          animation: 300,
                          tag: "div",
                          "item-key": "order",
                          onChange: updateOrder
                        }, {
                          item: withCtx(({ element: item }) => [
                            createVNode(_sfc_main$2, {
                              apiKey: props.apiKey,
                              lesson: item,
                              onLessonUpdate: lessonUpdate,
                              onSave: saveContent,
                              onLessonDelete: lessonDelete
                            }, null, 8, ["apiKey", "lesson"])
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(DisclosureButton), { class: "flex w-full justify-start rounded-lg bg-secondary px-4 py-2 text-left text-sm font-medium text-neutral hover:bg-primary focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75" }, {
                  default: withCtx(() => [
                    createVNode(unref(BookOpenIcon), {
                      class: "h-8 w-8 text-neutral",
                      "aria-hidden": "true"
                    }),
                    createVNode("span", { class: "text-lg" }, "Lessons")
                  ]),
                  _: 1
                }),
                createVNode(unref(DisclosurePanel), { class: "px-4 pt-4 pb-2 border rounded-lg mt-5" }, {
                  default: withCtx(() => [
                    createVNode("section", { class: "bg-base-300 rounded-lg" }, [
                      createVNode("div", { class: "py-8 lg:py-16 px-4 mx-auto w-full" }, [
                        createVNode("div", { class: "flex justify-between" }, [
                          createVNode("h2", { class: "mb-4 text-4xl tracking-tight font-extrabold text-center text-primary" }, " Lesson Structure "),
                          createVNode("div", { class: "flex justify-between" }, [
                            createVNode("button", {
                              class: "btn btn-primary",
                              onClick: ($event) => isRef(addLessonModal) ? addLessonModal.value = true : addLessonModal = true
                            }, " Add ", 8, ["onClick"])
                          ])
                        ])
                      ]),
                      createVNode(unref(draggable), {
                        modelValue: unref(lessons),
                        "onUpdate:modelValue": ($event) => isRef(lessons) ? lessons.value = $event : lessons = $event,
                        animation: 300,
                        tag: "div",
                        "item-key": "order",
                        onChange: updateOrder
                      }, {
                        item: withCtx(({ element: item }) => [
                          createVNode(_sfc_main$2, {
                            apiKey: props.apiKey,
                            lesson: item,
                            onLessonUpdate: lessonUpdate,
                            onSave: saveContent,
                            onLessonDelete: lessonDelete
                          }, null, 8, ["apiKey", "lesson"])
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><button class="btn bg-success text-neutral hover:bg-secondary mt-5"> Save </button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(unref(_sfc_main$6), {
        show: unref(addLessonModal),
        onClose: ($event) => isRef(addLessonModal) ? addLessonModal.value = false : addLessonModal = false,
        onConfirm: addNewLesson
      }, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="text-lg text-left font-bold text-primary"${_scopeId}> Add new lesson </h3>`);
          } else {
            return [
              createVNode("h3", { class: "text-lg text-left font-bold text-primary" }, " Add new lesson ")
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mt-2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(InputField), {
              modelValue: unref(lessonVideoUrl),
              "onUpdate:modelValue": ($event) => isRef(lessonVideoUrl) ? lessonVideoUrl.value = $event : lessonVideoUrl = $event,
              type: "text",
              label: "Video Id"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$9), {
              modelValue: unref(lessonVideoType),
              "onUpdate:modelValue": ($event) => isRef(lessonVideoType) ? lessonVideoType.value = $event : lessonVideoType = $event,
              options: {
                youtube: "Youtube",
                vimeo: "Vimeo"
              },
              label: "Video Type"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "mt-2" }, [
                createVNode(unref(InputField), {
                  modelValue: unref(lessonVideoUrl),
                  "onUpdate:modelValue": ($event) => isRef(lessonVideoUrl) ? lessonVideoUrl.value = $event : lessonVideoUrl = $event,
                  type: "text",
                  label: "Video Id"
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(unref(_sfc_main$9), {
                  modelValue: unref(lessonVideoType),
                  "onUpdate:modelValue": ($event) => isRef(lessonVideoType) ? lessonVideoType.value = $event : lessonVideoType = $event,
                  options: {
                    youtube: "Youtube",
                    vimeo: "Vimeo"
                  },
                  label: "Video Type"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/backend/Components/Course/SectionItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Edit",
  __ssrInlineRender: true,
  props: {
    course: {
      type: Object,
      default: () => []
    },
    editorKey: {
      type: String,
      default: null
    },
    edit_route: {
      type: String,
      default: null
    },
    dynamicCategorySearch: {
      type: Object,
      default: () => []
    },
    dynamicTagsSearch: {
      type: Object,
      default: () => []
    },
    selected_category: {
      type: Object,
      default: () => []
    },
    selected_tags: {
      type: Object,
      default: () => []
    },
    lessons: {
      type: Object,
      default: () => []
    },
    sections: {
      type: Object,
      default: () => []
    },
    course_style_options: {
      type: Array,
      default: () => []
    },
    difficulty_level: {
      type: Array,
      default: () => []
    },
    image_search_endpoint: {
      type: String,
      default: null
    }
  },
  setup(__props) {
    const props = __props;
    watch(
      () => props.sections,
      (value) => {
        courseSections.value = value;
      }
    );
    onMounted(() => {
      courseSections.value = props.sections;
    });
    const form = ref({
      title: props.course.data.title,
      slug: props.course.data.slug,
      content: props.course.data.content,
      is_published: props.course.data.is_published,
      is_popular: props.course.data.is_popular,
      is_free: props.course.data.is_free,
      category_id: props.course.data.category_id,
      tags: props.course.data.tags,
      card_style: props.course.data.card_style,
      difficulty_level: props.course.data.difficulty_level,
      short_description: props.course.data.short_description,
      course_image: props.course.data.media
    });
    const submit = async () => {
      router.post(route("gamedev.course.edit.post", props.course.data.id), form.value);
    };
    let courseSections = ref([]);
    const addNewSection = async () => {
      var _a, _b;
      router.post(
        route("gamedev.section.store", props.course.data.id),
        {
          title: "Section " + (((_a = courseSections.value.data) == null ? void 0 : _a.length) ? courseSections.value.data.length + 1 : 1),
          order: ((_b = courseSections.value.data) == null ? void 0 : _b.length) ? courseSections.value.data.length + 1 : 1
        },
        { preserveState: true }
      );
    };
    const sectionUpdate = async (section) => {
      let courseSections2 = section;
      for (let index = 0; index < section.length; index++) {
        if (courseSections2[index].id == lesson.id) {
          courseSections2[index].updated = true;
        }
      }
    };
    const saveSectionContent = async (section) => {
      let tempArray = section;
      for (let index = 0; index < section.length; index++) {
        if (tempArray[index].id == lesson.id) {
          tempArray[index].updated = false;
        }
      }
      router.post(route("gamedev.update.section", section.id), {
        section
      });
    };
    const sectionDelete = async (section) => {
      router.delete(route("gamedev.delete.section", section.id), {
        section
      });
    };
    const deleteLesson = async (lesson2) => {
      router.delete(route("gamedev.update.delete", lesson2.id), {
        lesson: lesson2
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$a, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="px-5 py-7 w-full bg-base-100"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(TabGroup), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(TabList), { class: "flex space-x-1 rounded-xl bg-base-100 p-2 tabs font-bold" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Tab), null, {
                          default: withCtx(({ selected }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<a class="${ssrRenderClass([selected ? "bg-primary text-black" : "", "tab tab-lg tab-bordered rounded-md bg-neutral"])}"${_scopeId4}>Display Information</a>`);
                            } else {
                              return [
                                createVNode("a", {
                                  class: ["tab tab-lg tab-bordered rounded-md bg-neutral", selected ? "bg-primary text-black" : ""]
                                }, "Display Information", 2)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(Tab), null, {
                          default: withCtx(({ selected }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<a class="${ssrRenderClass([selected ? "bg-primary text-black" : "", "tab tab-lg tab-bordered rounded-md bg-neutral"])}"${_scopeId4}>Lesson</a>`);
                            } else {
                              return [
                                createVNode("a", {
                                  class: ["tab tab-lg tab-bordered rounded-md bg-neutral", selected ? "bg-primary text-black" : ""]
                                }, "Lesson", 2)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(Tab), null, {
                            default: withCtx(({ selected }) => [
                              createVNode("a", {
                                class: ["tab tab-lg tab-bordered rounded-md bg-neutral", selected ? "bg-primary text-black" : ""]
                              }, "Display Information", 2)
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Tab), null, {
                            default: withCtx(({ selected }) => [
                              createVNode("a", {
                                class: ["tab tab-lg tab-bordered rounded-md bg-neutral", selected ? "bg-primary text-black" : ""]
                              }, "Lesson", 2)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(TabPanels), { class: "mt-2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(TabPanel), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div${_scopeId4}><h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-neutral-content"${_scopeId4}> Edit ${ssrInterpolate(props.course.data.title)}</h2><form class="bg-base-100 backdrop-blur transition-all duration-100 shadow-md rounded px-8 pt-6 pb-8 mb-4"${_scopeId4}><div class="w-full"${_scopeId4}><div class="mx-auto w-full rounded-2xl bg-base-300 p-2"${_scopeId4}>`);
                              _push5(ssrRenderComponent(unref(Disclosure), null, {
                                default: withCtx(({ open }, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(DisclosureButton), { class: "flex w-full justify-between rounded-lg bg-secondary p-2 text-left text-lg font-medium text-black hover:bg-primary mb-2" }, {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<span${_scopeId6}>Course Information</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"${_scopeId6}><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"${_scopeId6}></path></svg>`);
                                        } else {
                                          return [
                                            createVNode("span", null, "Course Information"),
                                            (openBlock(), createBlock("svg", {
                                              xmlns: "http://www.w3.org/2000/svg",
                                              fill: "none",
                                              viewBox: "0 0 24 24",
                                              "stroke-width": "1.5",
                                              stroke: "currentColor",
                                              class: "size-6"
                                            }, [
                                              createVNode("path", {
                                                "stroke-linecap": "round",
                                                "stroke-linejoin": "round",
                                                d: "m19.5 8.25-7.5 7.5-7.5-7.5"
                                              })
                                            ]))
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(unref(DisclosurePanel), { class: "px-4 pb-2 pt-4 text-sm" }, {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(unref(InputField), {
                                            modelValue: form.value.title,
                                            "onUpdate:modelValue": ($event) => form.value.title = $event,
                                            type: "text",
                                            label: "Title"
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(unref(InputField), {
                                            modelValue: form.value.slug,
                                            "onUpdate:modelValue": ($event) => form.value.slug = $event,
                                            type: "text",
                                            label: "Slug"
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(unref(_sfc_main$b), {
                                            modelValue: form.value.category_id,
                                            "onUpdate:modelValue": ($event) => form.value.category_id = $event,
                                            label: props.dynamicCategorySearch.label,
                                            placeholder: "search",
                                            model: props.dynamicCategorySearch.model,
                                            columns: props.dynamicCategorySearch.columns,
                                            "single-mode": props.dynamicCategorySearch.singleSearch,
                                            "load-data": __props.selected_category.data,
                                            endpoint: props.dynamicCategorySearch.endpoint
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(unref(_sfc_main$c), {
                                            modelValue: form.value.course_image,
                                            "onUpdate:modelValue": ($event) => form.value.course_image = $event,
                                            label: "image",
                                            placeholder: "search",
                                            "load-data": form.value.course_image,
                                            endpoint: props.image_search_endpoint
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(unref(InputField), {
                                              modelValue: form.value.title,
                                              "onUpdate:modelValue": ($event) => form.value.title = $event,
                                              type: "text",
                                              label: "Title"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(unref(InputField), {
                                              modelValue: form.value.slug,
                                              "onUpdate:modelValue": ($event) => form.value.slug = $event,
                                              type: "text",
                                              label: "Slug"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(unref(_sfc_main$b), {
                                              modelValue: form.value.category_id,
                                              "onUpdate:modelValue": ($event) => form.value.category_id = $event,
                                              label: props.dynamicCategorySearch.label,
                                              placeholder: "search",
                                              model: props.dynamicCategorySearch.model,
                                              columns: props.dynamicCategorySearch.columns,
                                              "single-mode": props.dynamicCategorySearch.singleSearch,
                                              "load-data": __props.selected_category.data,
                                              endpoint: props.dynamicCategorySearch.endpoint
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "model", "columns", "single-mode", "load-data", "endpoint"]),
                                            createVNode(unref(_sfc_main$c), {
                                              modelValue: form.value.course_image,
                                              "onUpdate:modelValue": ($event) => form.value.course_image = $event,
                                              label: "image",
                                              placeholder: "search",
                                              "load-data": form.value.course_image,
                                              endpoint: props.image_search_endpoint
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "load-data", "endpoint"])
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(DisclosureButton), { class: "flex w-full justify-between rounded-lg bg-secondary p-2 text-left text-lg font-medium text-black hover:bg-primary mb-2" }, {
                                        default: withCtx(() => [
                                          createVNode("span", null, "Course Information"),
                                          (openBlock(), createBlock("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            "stroke-width": "1.5",
                                            stroke: "currentColor",
                                            class: "size-6"
                                          }, [
                                            createVNode("path", {
                                              "stroke-linecap": "round",
                                              "stroke-linejoin": "round",
                                              d: "m19.5 8.25-7.5 7.5-7.5-7.5"
                                            })
                                          ]))
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(DisclosurePanel), { class: "px-4 pb-2 pt-4 text-sm" }, {
                                        default: withCtx(() => [
                                          createVNode(unref(InputField), {
                                            modelValue: form.value.title,
                                            "onUpdate:modelValue": ($event) => form.value.title = $event,
                                            type: "text",
                                            label: "Title"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode(unref(InputField), {
                                            modelValue: form.value.slug,
                                            "onUpdate:modelValue": ($event) => form.value.slug = $event,
                                            type: "text",
                                            label: "Slug"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode(unref(_sfc_main$b), {
                                            modelValue: form.value.category_id,
                                            "onUpdate:modelValue": ($event) => form.value.category_id = $event,
                                            label: props.dynamicCategorySearch.label,
                                            placeholder: "search",
                                            model: props.dynamicCategorySearch.model,
                                            columns: props.dynamicCategorySearch.columns,
                                            "single-mode": props.dynamicCategorySearch.singleSearch,
                                            "load-data": __props.selected_category.data,
                                            endpoint: props.dynamicCategorySearch.endpoint
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "model", "columns", "single-mode", "load-data", "endpoint"]),
                                          createVNode(unref(_sfc_main$c), {
                                            modelValue: form.value.course_image,
                                            "onUpdate:modelValue": ($event) => form.value.course_image = $event,
                                            label: "image",
                                            placeholder: "search",
                                            "load-data": form.value.course_image,
                                            endpoint: props.image_search_endpoint
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "load-data", "endpoint"])
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(Disclosure), null, {
                                default: withCtx(({ open }, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(DisclosureButton), { class: "flex w-full justify-between rounded-lg bg-secondary p-2 text-left text-lg font-medium text-black hover:bg-primary mb-2" }, {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<span${_scopeId6}>Course Settings</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"${_scopeId6}><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"${_scopeId6}></path></svg>`);
                                        } else {
                                          return [
                                            createVNode("span", null, "Course Settings"),
                                            (openBlock(), createBlock("svg", {
                                              xmlns: "http://www.w3.org/2000/svg",
                                              fill: "none",
                                              viewBox: "0 0 24 24",
                                              "stroke-width": "1.5",
                                              stroke: "currentColor",
                                              class: "size-6"
                                            }, [
                                              createVNode("path", {
                                                "stroke-linecap": "round",
                                                "stroke-linejoin": "round",
                                                d: "m19.5 8.25-7.5 7.5-7.5-7.5"
                                              })
                                            ]))
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(unref(DisclosurePanel), { class: "px-4 pb-2 pt-4 text-sm bg-base-300" }, {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(unref(_sfc_main$d), {
                                            modelValue: form.value.is_free,
                                            "onUpdate:modelValue": ($event) => form.value.is_free = $event,
                                            label: "Is Free"
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(unref(_sfc_main$d), {
                                            modelValue: form.value.is_published,
                                            "onUpdate:modelValue": ($event) => form.value.is_published = $event,
                                            label: "Is published"
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(unref(_sfc_main$d), {
                                            modelValue: form.value.is_popular,
                                            "onUpdate:modelValue": ($event) => form.value.is_popular = $event,
                                            label: "Is popular"
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(unref(_sfc_main$9), {
                                            modelValue: form.value.card_style,
                                            "onUpdate:modelValue": ($event) => form.value.card_style = $event,
                                            options: props.course_style_options,
                                            label: "Card style"
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(unref(_sfc_main$9), {
                                            modelValue: form.value.difficulty_level,
                                            "onUpdate:modelValue": ($event) => form.value.difficulty_level = $event,
                                            options: props.difficulty_level,
                                            label: "Dificulty level"
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(unref(_sfc_main$b), {
                                            modelValue: form.value.tags,
                                            "onUpdate:modelValue": ($event) => form.value.tags = $event,
                                            label: props.dynamicTagsSearch.label,
                                            placeholder: "search",
                                            model: props.dynamicTagsSearch.model,
                                            columns: props.dynamicTagsSearch.columns,
                                            "single-mode": props.dynamicTagsSearch.singleSearch,
                                            "load-data": __props.selected_tags.data,
                                            endpoint: props.dynamicTagsSearch.endpoint
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(unref(_sfc_main$d), {
                                              modelValue: form.value.is_free,
                                              "onUpdate:modelValue": ($event) => form.value.is_free = $event,
                                              label: "Is Free"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(unref(_sfc_main$d), {
                                              modelValue: form.value.is_published,
                                              "onUpdate:modelValue": ($event) => form.value.is_published = $event,
                                              label: "Is published"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(unref(_sfc_main$d), {
                                              modelValue: form.value.is_popular,
                                              "onUpdate:modelValue": ($event) => form.value.is_popular = $event,
                                              label: "Is popular"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(unref(_sfc_main$9), {
                                              modelValue: form.value.card_style,
                                              "onUpdate:modelValue": ($event) => form.value.card_style = $event,
                                              options: props.course_style_options,
                                              label: "Card style"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
                                            createVNode(unref(_sfc_main$9), {
                                              modelValue: form.value.difficulty_level,
                                              "onUpdate:modelValue": ($event) => form.value.difficulty_level = $event,
                                              options: props.difficulty_level,
                                              label: "Dificulty level"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
                                            createVNode(unref(_sfc_main$b), {
                                              modelValue: form.value.tags,
                                              "onUpdate:modelValue": ($event) => form.value.tags = $event,
                                              label: props.dynamicTagsSearch.label,
                                              placeholder: "search",
                                              model: props.dynamicTagsSearch.model,
                                              columns: props.dynamicTagsSearch.columns,
                                              "single-mode": props.dynamicTagsSearch.singleSearch,
                                              "load-data": __props.selected_tags.data,
                                              endpoint: props.dynamicTagsSearch.endpoint
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "model", "columns", "single-mode", "load-data", "endpoint"])
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(DisclosureButton), { class: "flex w-full justify-between rounded-lg bg-secondary p-2 text-left text-lg font-medium text-black hover:bg-primary mb-2" }, {
                                        default: withCtx(() => [
                                          createVNode("span", null, "Course Settings"),
                                          (openBlock(), createBlock("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            "stroke-width": "1.5",
                                            stroke: "currentColor",
                                            class: "size-6"
                                          }, [
                                            createVNode("path", {
                                              "stroke-linecap": "round",
                                              "stroke-linejoin": "round",
                                              d: "m19.5 8.25-7.5 7.5-7.5-7.5"
                                            })
                                          ]))
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(DisclosurePanel), { class: "px-4 pb-2 pt-4 text-sm bg-base-300" }, {
                                        default: withCtx(() => [
                                          createVNode(unref(_sfc_main$d), {
                                            modelValue: form.value.is_free,
                                            "onUpdate:modelValue": ($event) => form.value.is_free = $event,
                                            label: "Is Free"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode(unref(_sfc_main$d), {
                                            modelValue: form.value.is_published,
                                            "onUpdate:modelValue": ($event) => form.value.is_published = $event,
                                            label: "Is published"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode(unref(_sfc_main$d), {
                                            modelValue: form.value.is_popular,
                                            "onUpdate:modelValue": ($event) => form.value.is_popular = $event,
                                            label: "Is popular"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode(unref(_sfc_main$9), {
                                            modelValue: form.value.card_style,
                                            "onUpdate:modelValue": ($event) => form.value.card_style = $event,
                                            options: props.course_style_options,
                                            label: "Card style"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
                                          createVNode(unref(_sfc_main$9), {
                                            modelValue: form.value.difficulty_level,
                                            "onUpdate:modelValue": ($event) => form.value.difficulty_level = $event,
                                            options: props.difficulty_level,
                                            label: "Dificulty level"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
                                          createVNode(unref(_sfc_main$b), {
                                            modelValue: form.value.tags,
                                            "onUpdate:modelValue": ($event) => form.value.tags = $event,
                                            label: props.dynamicTagsSearch.label,
                                            placeholder: "search",
                                            model: props.dynamicTagsSearch.model,
                                            columns: props.dynamicTagsSearch.columns,
                                            "single-mode": props.dynamicTagsSearch.singleSearch,
                                            "load-data": __props.selected_tags.data,
                                            endpoint: props.dynamicTagsSearch.endpoint
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "model", "columns", "single-mode", "load-data", "endpoint"])
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(Disclosure), null, {
                                default: withCtx(({ open }, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(DisclosureButton), { class: "flex w-full justify-between rounded-lg bg-secondary p-2 text-left text-lg font-medium text-black hover:bg-primary" }, {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<span${_scopeId6}>Course Description</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"${_scopeId6}><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"${_scopeId6}></path></svg>`);
                                        } else {
                                          return [
                                            createVNode("span", null, "Course Description"),
                                            (openBlock(), createBlock("svg", {
                                              xmlns: "http://www.w3.org/2000/svg",
                                              fill: "none",
                                              viewBox: "0 0 24 24",
                                              "stroke-width": "1.5",
                                              stroke: "currentColor",
                                              class: "size-6"
                                            }, [
                                              createVNode("path", {
                                                "stroke-linecap": "round",
                                                "stroke-linejoin": "round",
                                                d: "m19.5 8.25-7.5 7.5-7.5-7.5"
                                              })
                                            ]))
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(unref(DisclosurePanel), { class: "px-4 pb-2 pt-4 text-sm bg-base-300" }, {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div${_scopeId6}><label class="label"${_scopeId6}><span class="block text-lg font-bold mb-2"${_scopeId6}>Short Description</span></label>`);
                                          _push7(ssrRenderComponent(_sfc_main$5, {
                                            modelValue: form.value.short_description,
                                            "onUpdate:modelValue": ($event) => form.value.short_description = $event,
                                            "api-key": props.editorKey,
                                            init: {
                                              plugins: "lists link image table code help wordcount"
                                            }
                                          }, null, _parent7, _scopeId6));
                                          _push7(`</div><div${_scopeId6}><label class="label"${_scopeId6}><span class="block text-lg font-bold mb-2"${_scopeId6}>Description</span></label>`);
                                          _push7(ssrRenderComponent(_sfc_main$5, {
                                            modelValue: form.value.content,
                                            "onUpdate:modelValue": ($event) => form.value.content = $event,
                                            "api-key": props.editorKey,
                                            init: {
                                              plugins: "lists link image table code help wordcount"
                                            }
                                          }, null, _parent7, _scopeId6));
                                          _push7(`</div>`);
                                        } else {
                                          return [
                                            createVNode("div", null, [
                                              createVNode("label", { class: "label" }, [
                                                createVNode("span", { class: "block text-lg font-bold mb-2" }, "Short Description")
                                              ]),
                                              createVNode(_sfc_main$5, {
                                                modelValue: form.value.short_description,
                                                "onUpdate:modelValue": ($event) => form.value.short_description = $event,
                                                "api-key": props.editorKey,
                                                init: {
                                                  plugins: "lists link image table code help wordcount"
                                                }
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "api-key"])
                                            ]),
                                            createVNode("div", null, [
                                              createVNode("label", { class: "label" }, [
                                                createVNode("span", { class: "block text-lg font-bold mb-2" }, "Description")
                                              ]),
                                              createVNode(_sfc_main$5, {
                                                modelValue: form.value.content,
                                                "onUpdate:modelValue": ($event) => form.value.content = $event,
                                                "api-key": props.editorKey,
                                                init: {
                                                  plugins: "lists link image table code help wordcount"
                                                }
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "api-key"])
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(DisclosureButton), { class: "flex w-full justify-between rounded-lg bg-secondary p-2 text-left text-lg font-medium text-black hover:bg-primary" }, {
                                        default: withCtx(() => [
                                          createVNode("span", null, "Course Description"),
                                          (openBlock(), createBlock("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            "stroke-width": "1.5",
                                            stroke: "currentColor",
                                            class: "size-6"
                                          }, [
                                            createVNode("path", {
                                              "stroke-linecap": "round",
                                              "stroke-linejoin": "round",
                                              d: "m19.5 8.25-7.5 7.5-7.5-7.5"
                                            })
                                          ]))
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(DisclosurePanel), { class: "px-4 pb-2 pt-4 text-sm bg-base-300" }, {
                                        default: withCtx(() => [
                                          createVNode("div", null, [
                                            createVNode("label", { class: "label" }, [
                                              createVNode("span", { class: "block text-lg font-bold mb-2" }, "Short Description")
                                            ]),
                                            createVNode(_sfc_main$5, {
                                              modelValue: form.value.short_description,
                                              "onUpdate:modelValue": ($event) => form.value.short_description = $event,
                                              "api-key": props.editorKey,
                                              init: {
                                                plugins: "lists link image table code help wordcount"
                                              }
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "api-key"])
                                          ]),
                                          createVNode("div", null, [
                                            createVNode("label", { class: "label" }, [
                                              createVNode("span", { class: "block text-lg font-bold mb-2" }, "Description")
                                            ]),
                                            createVNode(_sfc_main$5, {
                                              modelValue: form.value.content,
                                              "onUpdate:modelValue": ($event) => form.value.content = $event,
                                              "api-key": props.editorKey,
                                              init: {
                                                plugins: "lists link image table code help wordcount"
                                              }
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "api-key"])
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div></div><button type="submit" class="btn btn-secondary mt-10 block w-full"${_scopeId4}> Submit </button></form></div>`);
                            } else {
                              return [
                                createVNode("div", null, [
                                  createVNode("h2", { class: "mb-4 text-4xl tracking-tight font-extrabold text-center text-neutral-content" }, " Edit " + toDisplayString(props.course.data.title), 1),
                                  createVNode("form", {
                                    class: "bg-base-100 backdrop-blur transition-all duration-100 shadow-md rounded px-8 pt-6 pb-8 mb-4",
                                    onSubmit: withModifiers(submit, ["prevent"])
                                  }, [
                                    createVNode("div", { class: "w-full" }, [
                                      createVNode("div", { class: "mx-auto w-full rounded-2xl bg-base-300 p-2" }, [
                                        createVNode(unref(Disclosure), null, {
                                          default: withCtx(({ open }) => [
                                            createVNode(unref(DisclosureButton), { class: "flex w-full justify-between rounded-lg bg-secondary p-2 text-left text-lg font-medium text-black hover:bg-primary mb-2" }, {
                                              default: withCtx(() => [
                                                createVNode("span", null, "Course Information"),
                                                (openBlock(), createBlock("svg", {
                                                  xmlns: "http://www.w3.org/2000/svg",
                                                  fill: "none",
                                                  viewBox: "0 0 24 24",
                                                  "stroke-width": "1.5",
                                                  stroke: "currentColor",
                                                  class: "size-6"
                                                }, [
                                                  createVNode("path", {
                                                    "stroke-linecap": "round",
                                                    "stroke-linejoin": "round",
                                                    d: "m19.5 8.25-7.5 7.5-7.5-7.5"
                                                  })
                                                ]))
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(DisclosurePanel), { class: "px-4 pb-2 pt-4 text-sm" }, {
                                              default: withCtx(() => [
                                                createVNode(unref(InputField), {
                                                  modelValue: form.value.title,
                                                  "onUpdate:modelValue": ($event) => form.value.title = $event,
                                                  type: "text",
                                                  label: "Title"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(unref(InputField), {
                                                  modelValue: form.value.slug,
                                                  "onUpdate:modelValue": ($event) => form.value.slug = $event,
                                                  type: "text",
                                                  label: "Slug"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(unref(_sfc_main$b), {
                                                  modelValue: form.value.category_id,
                                                  "onUpdate:modelValue": ($event) => form.value.category_id = $event,
                                                  label: props.dynamicCategorySearch.label,
                                                  placeholder: "search",
                                                  model: props.dynamicCategorySearch.model,
                                                  columns: props.dynamicCategorySearch.columns,
                                                  "single-mode": props.dynamicCategorySearch.singleSearch,
                                                  "load-data": __props.selected_category.data,
                                                  endpoint: props.dynamicCategorySearch.endpoint
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "model", "columns", "single-mode", "load-data", "endpoint"]),
                                                createVNode(unref(_sfc_main$c), {
                                                  modelValue: form.value.course_image,
                                                  "onUpdate:modelValue": ($event) => form.value.course_image = $event,
                                                  label: "image",
                                                  placeholder: "search",
                                                  "load-data": form.value.course_image,
                                                  endpoint: props.image_search_endpoint
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "load-data", "endpoint"])
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(Disclosure), null, {
                                          default: withCtx(({ open }) => [
                                            createVNode(unref(DisclosureButton), { class: "flex w-full justify-between rounded-lg bg-secondary p-2 text-left text-lg font-medium text-black hover:bg-primary mb-2" }, {
                                              default: withCtx(() => [
                                                createVNode("span", null, "Course Settings"),
                                                (openBlock(), createBlock("svg", {
                                                  xmlns: "http://www.w3.org/2000/svg",
                                                  fill: "none",
                                                  viewBox: "0 0 24 24",
                                                  "stroke-width": "1.5",
                                                  stroke: "currentColor",
                                                  class: "size-6"
                                                }, [
                                                  createVNode("path", {
                                                    "stroke-linecap": "round",
                                                    "stroke-linejoin": "round",
                                                    d: "m19.5 8.25-7.5 7.5-7.5-7.5"
                                                  })
                                                ]))
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(DisclosurePanel), { class: "px-4 pb-2 pt-4 text-sm bg-base-300" }, {
                                              default: withCtx(() => [
                                                createVNode(unref(_sfc_main$d), {
                                                  modelValue: form.value.is_free,
                                                  "onUpdate:modelValue": ($event) => form.value.is_free = $event,
                                                  label: "Is Free"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(unref(_sfc_main$d), {
                                                  modelValue: form.value.is_published,
                                                  "onUpdate:modelValue": ($event) => form.value.is_published = $event,
                                                  label: "Is published"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(unref(_sfc_main$d), {
                                                  modelValue: form.value.is_popular,
                                                  "onUpdate:modelValue": ($event) => form.value.is_popular = $event,
                                                  label: "Is popular"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(unref(_sfc_main$9), {
                                                  modelValue: form.value.card_style,
                                                  "onUpdate:modelValue": ($event) => form.value.card_style = $event,
                                                  options: props.course_style_options,
                                                  label: "Card style"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
                                                createVNode(unref(_sfc_main$9), {
                                                  modelValue: form.value.difficulty_level,
                                                  "onUpdate:modelValue": ($event) => form.value.difficulty_level = $event,
                                                  options: props.difficulty_level,
                                                  label: "Dificulty level"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
                                                createVNode(unref(_sfc_main$b), {
                                                  modelValue: form.value.tags,
                                                  "onUpdate:modelValue": ($event) => form.value.tags = $event,
                                                  label: props.dynamicTagsSearch.label,
                                                  placeholder: "search",
                                                  model: props.dynamicTagsSearch.model,
                                                  columns: props.dynamicTagsSearch.columns,
                                                  "single-mode": props.dynamicTagsSearch.singleSearch,
                                                  "load-data": __props.selected_tags.data,
                                                  endpoint: props.dynamicTagsSearch.endpoint
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "model", "columns", "single-mode", "load-data", "endpoint"])
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(Disclosure), null, {
                                          default: withCtx(({ open }) => [
                                            createVNode(unref(DisclosureButton), { class: "flex w-full justify-between rounded-lg bg-secondary p-2 text-left text-lg font-medium text-black hover:bg-primary" }, {
                                              default: withCtx(() => [
                                                createVNode("span", null, "Course Description"),
                                                (openBlock(), createBlock("svg", {
                                                  xmlns: "http://www.w3.org/2000/svg",
                                                  fill: "none",
                                                  viewBox: "0 0 24 24",
                                                  "stroke-width": "1.5",
                                                  stroke: "currentColor",
                                                  class: "size-6"
                                                }, [
                                                  createVNode("path", {
                                                    "stroke-linecap": "round",
                                                    "stroke-linejoin": "round",
                                                    d: "m19.5 8.25-7.5 7.5-7.5-7.5"
                                                  })
                                                ]))
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(DisclosurePanel), { class: "px-4 pb-2 pt-4 text-sm bg-base-300" }, {
                                              default: withCtx(() => [
                                                createVNode("div", null, [
                                                  createVNode("label", { class: "label" }, [
                                                    createVNode("span", { class: "block text-lg font-bold mb-2" }, "Short Description")
                                                  ]),
                                                  createVNode(_sfc_main$5, {
                                                    modelValue: form.value.short_description,
                                                    "onUpdate:modelValue": ($event) => form.value.short_description = $event,
                                                    "api-key": props.editorKey,
                                                    init: {
                                                      plugins: "lists link image table code help wordcount"
                                                    }
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "api-key"])
                                                ]),
                                                createVNode("div", null, [
                                                  createVNode("label", { class: "label" }, [
                                                    createVNode("span", { class: "block text-lg font-bold mb-2" }, "Description")
                                                  ]),
                                                  createVNode(_sfc_main$5, {
                                                    modelValue: form.value.content,
                                                    "onUpdate:modelValue": ($event) => form.value.content = $event,
                                                    "api-key": props.editorKey,
                                                    init: {
                                                      plugins: "lists link image table code help wordcount"
                                                    }
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "api-key"])
                                                ])
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ]),
                                    createVNode("button", {
                                      type: "submit",
                                      class: "btn btn-secondary mt-10 block w-full"
                                    }, " Submit ")
                                  ], 32)
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(TabPanel), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="bg-primary text-neutral-content p-4 rounded-lg"${_scopeId4}><div class="flex justify-between"${_scopeId4}><h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center"${_scopeId4}> Sections </h2><button class="btn btn-secondary"${_scopeId4}> Add </button></div></div>`);
                              _push5(ssrRenderComponent(unref(draggable), {
                                modelValue: unref(courseSections).data,
                                "onUpdate:modelValue": ($event) => unref(courseSections).data = $event,
                                animation: 300,
                                tag: "div",
                                "item-key": "order",
                                onChange: _ctx.updateSectionOrder
                              }, {
                                item: withCtx(({ element: item }, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$1, {
                                      "api-key": props.editorKey,
                                      course: props.course,
                                      section: item,
                                      onSectionUpdate: sectionUpdate,
                                      onSave: saveSectionContent,
                                      onSectionDelete: sectionDelete,
                                      onLessonDelete: deleteLesson
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$1, {
                                        "api-key": props.editorKey,
                                        course: props.course,
                                        section: item,
                                        onSectionUpdate: sectionUpdate,
                                        onSave: saveSectionContent,
                                        onSectionDelete: sectionDelete,
                                        onLessonDelete: deleteLesson
                                      }, null, 8, ["api-key", "course", "section"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("div", { class: "bg-primary text-neutral-content p-4 rounded-lg" }, [
                                  createVNode("div", { class: "flex justify-between" }, [
                                    createVNode("h2", { class: "mb-4 text-4xl tracking-tight font-extrabold text-center" }, " Sections "),
                                    createVNode("button", {
                                      class: "btn btn-secondary",
                                      onClick: addNewSection
                                    }, " Add ")
                                  ])
                                ]),
                                createVNode(unref(draggable), {
                                  modelValue: unref(courseSections).data,
                                  "onUpdate:modelValue": ($event) => unref(courseSections).data = $event,
                                  animation: 300,
                                  tag: "div",
                                  "item-key": "order",
                                  onChange: _ctx.updateSectionOrder
                                }, {
                                  item: withCtx(({ element: item }) => [
                                    createVNode(_sfc_main$1, {
                                      "api-key": props.editorKey,
                                      course: props.course,
                                      section: item,
                                      onSectionUpdate: sectionUpdate,
                                      onSave: saveSectionContent,
                                      onSectionDelete: sectionDelete,
                                      onLessonDelete: deleteLesson
                                    }, null, 8, ["api-key", "course", "section"])
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(TabPanel), null, {
                            default: withCtx(() => [
                              createVNode("div", null, [
                                createVNode("h2", { class: "mb-4 text-4xl tracking-tight font-extrabold text-center text-neutral-content" }, " Edit " + toDisplayString(props.course.data.title), 1),
                                createVNode("form", {
                                  class: "bg-base-100 backdrop-blur transition-all duration-100 shadow-md rounded px-8 pt-6 pb-8 mb-4",
                                  onSubmit: withModifiers(submit, ["prevent"])
                                }, [
                                  createVNode("div", { class: "w-full" }, [
                                    createVNode("div", { class: "mx-auto w-full rounded-2xl bg-base-300 p-2" }, [
                                      createVNode(unref(Disclosure), null, {
                                        default: withCtx(({ open }) => [
                                          createVNode(unref(DisclosureButton), { class: "flex w-full justify-between rounded-lg bg-secondary p-2 text-left text-lg font-medium text-black hover:bg-primary mb-2" }, {
                                            default: withCtx(() => [
                                              createVNode("span", null, "Course Information"),
                                              (openBlock(), createBlock("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                "stroke-width": "1.5",
                                                stroke: "currentColor",
                                                class: "size-6"
                                              }, [
                                                createVNode("path", {
                                                  "stroke-linecap": "round",
                                                  "stroke-linejoin": "round",
                                                  d: "m19.5 8.25-7.5 7.5-7.5-7.5"
                                                })
                                              ]))
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(DisclosurePanel), { class: "px-4 pb-2 pt-4 text-sm" }, {
                                            default: withCtx(() => [
                                              createVNode(unref(InputField), {
                                                modelValue: form.value.title,
                                                "onUpdate:modelValue": ($event) => form.value.title = $event,
                                                type: "text",
                                                label: "Title"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(unref(InputField), {
                                                modelValue: form.value.slug,
                                                "onUpdate:modelValue": ($event) => form.value.slug = $event,
                                                type: "text",
                                                label: "Slug"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(unref(_sfc_main$b), {
                                                modelValue: form.value.category_id,
                                                "onUpdate:modelValue": ($event) => form.value.category_id = $event,
                                                label: props.dynamicCategorySearch.label,
                                                placeholder: "search",
                                                model: props.dynamicCategorySearch.model,
                                                columns: props.dynamicCategorySearch.columns,
                                                "single-mode": props.dynamicCategorySearch.singleSearch,
                                                "load-data": __props.selected_category.data,
                                                endpoint: props.dynamicCategorySearch.endpoint
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "model", "columns", "single-mode", "load-data", "endpoint"]),
                                              createVNode(unref(_sfc_main$c), {
                                                modelValue: form.value.course_image,
                                                "onUpdate:modelValue": ($event) => form.value.course_image = $event,
                                                label: "image",
                                                placeholder: "search",
                                                "load-data": form.value.course_image,
                                                endpoint: props.image_search_endpoint
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "load-data", "endpoint"])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(Disclosure), null, {
                                        default: withCtx(({ open }) => [
                                          createVNode(unref(DisclosureButton), { class: "flex w-full justify-between rounded-lg bg-secondary p-2 text-left text-lg font-medium text-black hover:bg-primary mb-2" }, {
                                            default: withCtx(() => [
                                              createVNode("span", null, "Course Settings"),
                                              (openBlock(), createBlock("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                "stroke-width": "1.5",
                                                stroke: "currentColor",
                                                class: "size-6"
                                              }, [
                                                createVNode("path", {
                                                  "stroke-linecap": "round",
                                                  "stroke-linejoin": "round",
                                                  d: "m19.5 8.25-7.5 7.5-7.5-7.5"
                                                })
                                              ]))
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(DisclosurePanel), { class: "px-4 pb-2 pt-4 text-sm bg-base-300" }, {
                                            default: withCtx(() => [
                                              createVNode(unref(_sfc_main$d), {
                                                modelValue: form.value.is_free,
                                                "onUpdate:modelValue": ($event) => form.value.is_free = $event,
                                                label: "Is Free"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(unref(_sfc_main$d), {
                                                modelValue: form.value.is_published,
                                                "onUpdate:modelValue": ($event) => form.value.is_published = $event,
                                                label: "Is published"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(unref(_sfc_main$d), {
                                                modelValue: form.value.is_popular,
                                                "onUpdate:modelValue": ($event) => form.value.is_popular = $event,
                                                label: "Is popular"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(unref(_sfc_main$9), {
                                                modelValue: form.value.card_style,
                                                "onUpdate:modelValue": ($event) => form.value.card_style = $event,
                                                options: props.course_style_options,
                                                label: "Card style"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
                                              createVNode(unref(_sfc_main$9), {
                                                modelValue: form.value.difficulty_level,
                                                "onUpdate:modelValue": ($event) => form.value.difficulty_level = $event,
                                                options: props.difficulty_level,
                                                label: "Dificulty level"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
                                              createVNode(unref(_sfc_main$b), {
                                                modelValue: form.value.tags,
                                                "onUpdate:modelValue": ($event) => form.value.tags = $event,
                                                label: props.dynamicTagsSearch.label,
                                                placeholder: "search",
                                                model: props.dynamicTagsSearch.model,
                                                columns: props.dynamicTagsSearch.columns,
                                                "single-mode": props.dynamicTagsSearch.singleSearch,
                                                "load-data": __props.selected_tags.data,
                                                endpoint: props.dynamicTagsSearch.endpoint
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "model", "columns", "single-mode", "load-data", "endpoint"])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(Disclosure), null, {
                                        default: withCtx(({ open }) => [
                                          createVNode(unref(DisclosureButton), { class: "flex w-full justify-between rounded-lg bg-secondary p-2 text-left text-lg font-medium text-black hover:bg-primary" }, {
                                            default: withCtx(() => [
                                              createVNode("span", null, "Course Description"),
                                              (openBlock(), createBlock("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                "stroke-width": "1.5",
                                                stroke: "currentColor",
                                                class: "size-6"
                                              }, [
                                                createVNode("path", {
                                                  "stroke-linecap": "round",
                                                  "stroke-linejoin": "round",
                                                  d: "m19.5 8.25-7.5 7.5-7.5-7.5"
                                                })
                                              ]))
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(DisclosurePanel), { class: "px-4 pb-2 pt-4 text-sm bg-base-300" }, {
                                            default: withCtx(() => [
                                              createVNode("div", null, [
                                                createVNode("label", { class: "label" }, [
                                                  createVNode("span", { class: "block text-lg font-bold mb-2" }, "Short Description")
                                                ]),
                                                createVNode(_sfc_main$5, {
                                                  modelValue: form.value.short_description,
                                                  "onUpdate:modelValue": ($event) => form.value.short_description = $event,
                                                  "api-key": props.editorKey,
                                                  init: {
                                                    plugins: "lists link image table code help wordcount"
                                                  }
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "api-key"])
                                              ]),
                                              createVNode("div", null, [
                                                createVNode("label", { class: "label" }, [
                                                  createVNode("span", { class: "block text-lg font-bold mb-2" }, "Description")
                                                ]),
                                                createVNode(_sfc_main$5, {
                                                  modelValue: form.value.content,
                                                  "onUpdate:modelValue": ($event) => form.value.content = $event,
                                                  "api-key": props.editorKey,
                                                  init: {
                                                    plugins: "lists link image table code help wordcount"
                                                  }
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "api-key"])
                                              ])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ])
                                  ]),
                                  createVNode("button", {
                                    type: "submit",
                                    class: "btn btn-secondary mt-10 block w-full"
                                  }, " Submit ")
                                ], 32)
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(unref(TabPanel), null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "bg-primary text-neutral-content p-4 rounded-lg" }, [
                                createVNode("div", { class: "flex justify-between" }, [
                                  createVNode("h2", { class: "mb-4 text-4xl tracking-tight font-extrabold text-center" }, " Sections "),
                                  createVNode("button", {
                                    class: "btn btn-secondary",
                                    onClick: addNewSection
                                  }, " Add ")
                                ])
                              ]),
                              createVNode(unref(draggable), {
                                modelValue: unref(courseSections).data,
                                "onUpdate:modelValue": ($event) => unref(courseSections).data = $event,
                                animation: 300,
                                tag: "div",
                                "item-key": "order",
                                onChange: _ctx.updateSectionOrder
                              }, {
                                item: withCtx(({ element: item }) => [
                                  createVNode(_sfc_main$1, {
                                    "api-key": props.editorKey,
                                    course: props.course,
                                    section: item,
                                    onSectionUpdate: sectionUpdate,
                                    onSave: saveSectionContent,
                                    onSectionDelete: sectionDelete,
                                    onLessonDelete: deleteLesson
                                  }, null, 8, ["api-key", "course", "section"])
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(TabList), { class: "flex space-x-1 rounded-xl bg-base-100 p-2 tabs font-bold" }, {
                      default: withCtx(() => [
                        createVNode(unref(Tab), null, {
                          default: withCtx(({ selected }) => [
                            createVNode("a", {
                              class: ["tab tab-lg tab-bordered rounded-md bg-neutral", selected ? "bg-primary text-black" : ""]
                            }, "Display Information", 2)
                          ]),
                          _: 1
                        }),
                        createVNode(unref(Tab), null, {
                          default: withCtx(({ selected }) => [
                            createVNode("a", {
                              class: ["tab tab-lg tab-bordered rounded-md bg-neutral", selected ? "bg-primary text-black" : ""]
                            }, "Lesson", 2)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(TabPanels), { class: "mt-2" }, {
                      default: withCtx(() => [
                        createVNode(unref(TabPanel), null, {
                          default: withCtx(() => [
                            createVNode("div", null, [
                              createVNode("h2", { class: "mb-4 text-4xl tracking-tight font-extrabold text-center text-neutral-content" }, " Edit " + toDisplayString(props.course.data.title), 1),
                              createVNode("form", {
                                class: "bg-base-100 backdrop-blur transition-all duration-100 shadow-md rounded px-8 pt-6 pb-8 mb-4",
                                onSubmit: withModifiers(submit, ["prevent"])
                              }, [
                                createVNode("div", { class: "w-full" }, [
                                  createVNode("div", { class: "mx-auto w-full rounded-2xl bg-base-300 p-2" }, [
                                    createVNode(unref(Disclosure), null, {
                                      default: withCtx(({ open }) => [
                                        createVNode(unref(DisclosureButton), { class: "flex w-full justify-between rounded-lg bg-secondary p-2 text-left text-lg font-medium text-black hover:bg-primary mb-2" }, {
                                          default: withCtx(() => [
                                            createVNode("span", null, "Course Information"),
                                            (openBlock(), createBlock("svg", {
                                              xmlns: "http://www.w3.org/2000/svg",
                                              fill: "none",
                                              viewBox: "0 0 24 24",
                                              "stroke-width": "1.5",
                                              stroke: "currentColor",
                                              class: "size-6"
                                            }, [
                                              createVNode("path", {
                                                "stroke-linecap": "round",
                                                "stroke-linejoin": "round",
                                                d: "m19.5 8.25-7.5 7.5-7.5-7.5"
                                              })
                                            ]))
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(DisclosurePanel), { class: "px-4 pb-2 pt-4 text-sm" }, {
                                          default: withCtx(() => [
                                            createVNode(unref(InputField), {
                                              modelValue: form.value.title,
                                              "onUpdate:modelValue": ($event) => form.value.title = $event,
                                              type: "text",
                                              label: "Title"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(unref(InputField), {
                                              modelValue: form.value.slug,
                                              "onUpdate:modelValue": ($event) => form.value.slug = $event,
                                              type: "text",
                                              label: "Slug"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(unref(_sfc_main$b), {
                                              modelValue: form.value.category_id,
                                              "onUpdate:modelValue": ($event) => form.value.category_id = $event,
                                              label: props.dynamicCategorySearch.label,
                                              placeholder: "search",
                                              model: props.dynamicCategorySearch.model,
                                              columns: props.dynamicCategorySearch.columns,
                                              "single-mode": props.dynamicCategorySearch.singleSearch,
                                              "load-data": __props.selected_category.data,
                                              endpoint: props.dynamicCategorySearch.endpoint
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "model", "columns", "single-mode", "load-data", "endpoint"]),
                                            createVNode(unref(_sfc_main$c), {
                                              modelValue: form.value.course_image,
                                              "onUpdate:modelValue": ($event) => form.value.course_image = $event,
                                              label: "image",
                                              placeholder: "search",
                                              "load-data": form.value.course_image,
                                              endpoint: props.image_search_endpoint
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "load-data", "endpoint"])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(Disclosure), null, {
                                      default: withCtx(({ open }) => [
                                        createVNode(unref(DisclosureButton), { class: "flex w-full justify-between rounded-lg bg-secondary p-2 text-left text-lg font-medium text-black hover:bg-primary mb-2" }, {
                                          default: withCtx(() => [
                                            createVNode("span", null, "Course Settings"),
                                            (openBlock(), createBlock("svg", {
                                              xmlns: "http://www.w3.org/2000/svg",
                                              fill: "none",
                                              viewBox: "0 0 24 24",
                                              "stroke-width": "1.5",
                                              stroke: "currentColor",
                                              class: "size-6"
                                            }, [
                                              createVNode("path", {
                                                "stroke-linecap": "round",
                                                "stroke-linejoin": "round",
                                                d: "m19.5 8.25-7.5 7.5-7.5-7.5"
                                              })
                                            ]))
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(DisclosurePanel), { class: "px-4 pb-2 pt-4 text-sm bg-base-300" }, {
                                          default: withCtx(() => [
                                            createVNode(unref(_sfc_main$d), {
                                              modelValue: form.value.is_free,
                                              "onUpdate:modelValue": ($event) => form.value.is_free = $event,
                                              label: "Is Free"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(unref(_sfc_main$d), {
                                              modelValue: form.value.is_published,
                                              "onUpdate:modelValue": ($event) => form.value.is_published = $event,
                                              label: "Is published"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(unref(_sfc_main$d), {
                                              modelValue: form.value.is_popular,
                                              "onUpdate:modelValue": ($event) => form.value.is_popular = $event,
                                              label: "Is popular"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(unref(_sfc_main$9), {
                                              modelValue: form.value.card_style,
                                              "onUpdate:modelValue": ($event) => form.value.card_style = $event,
                                              options: props.course_style_options,
                                              label: "Card style"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
                                            createVNode(unref(_sfc_main$9), {
                                              modelValue: form.value.difficulty_level,
                                              "onUpdate:modelValue": ($event) => form.value.difficulty_level = $event,
                                              options: props.difficulty_level,
                                              label: "Dificulty level"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
                                            createVNode(unref(_sfc_main$b), {
                                              modelValue: form.value.tags,
                                              "onUpdate:modelValue": ($event) => form.value.tags = $event,
                                              label: props.dynamicTagsSearch.label,
                                              placeholder: "search",
                                              model: props.dynamicTagsSearch.model,
                                              columns: props.dynamicTagsSearch.columns,
                                              "single-mode": props.dynamicTagsSearch.singleSearch,
                                              "load-data": __props.selected_tags.data,
                                              endpoint: props.dynamicTagsSearch.endpoint
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "model", "columns", "single-mode", "load-data", "endpoint"])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(Disclosure), null, {
                                      default: withCtx(({ open }) => [
                                        createVNode(unref(DisclosureButton), { class: "flex w-full justify-between rounded-lg bg-secondary p-2 text-left text-lg font-medium text-black hover:bg-primary" }, {
                                          default: withCtx(() => [
                                            createVNode("span", null, "Course Description"),
                                            (openBlock(), createBlock("svg", {
                                              xmlns: "http://www.w3.org/2000/svg",
                                              fill: "none",
                                              viewBox: "0 0 24 24",
                                              "stroke-width": "1.5",
                                              stroke: "currentColor",
                                              class: "size-6"
                                            }, [
                                              createVNode("path", {
                                                "stroke-linecap": "round",
                                                "stroke-linejoin": "round",
                                                d: "m19.5 8.25-7.5 7.5-7.5-7.5"
                                              })
                                            ]))
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(DisclosurePanel), { class: "px-4 pb-2 pt-4 text-sm bg-base-300" }, {
                                          default: withCtx(() => [
                                            createVNode("div", null, [
                                              createVNode("label", { class: "label" }, [
                                                createVNode("span", { class: "block text-lg font-bold mb-2" }, "Short Description")
                                              ]),
                                              createVNode(_sfc_main$5, {
                                                modelValue: form.value.short_description,
                                                "onUpdate:modelValue": ($event) => form.value.short_description = $event,
                                                "api-key": props.editorKey,
                                                init: {
                                                  plugins: "lists link image table code help wordcount"
                                                }
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "api-key"])
                                            ]),
                                            createVNode("div", null, [
                                              createVNode("label", { class: "label" }, [
                                                createVNode("span", { class: "block text-lg font-bold mb-2" }, "Description")
                                              ]),
                                              createVNode(_sfc_main$5, {
                                                modelValue: form.value.content,
                                                "onUpdate:modelValue": ($event) => form.value.content = $event,
                                                "api-key": props.editorKey,
                                                init: {
                                                  plugins: "lists link image table code help wordcount"
                                                }
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "api-key"])
                                            ])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ]),
                                createVNode("button", {
                                  type: "submit",
                                  class: "btn btn-secondary mt-10 block w-full"
                                }, " Submit ")
                              ], 32)
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(unref(TabPanel), null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "bg-primary text-neutral-content p-4 rounded-lg" }, [
                              createVNode("div", { class: "flex justify-between" }, [
                                createVNode("h2", { class: "mb-4 text-4xl tracking-tight font-extrabold text-center" }, " Sections "),
                                createVNode("button", {
                                  class: "btn btn-secondary",
                                  onClick: addNewSection
                                }, " Add ")
                              ])
                            ]),
                            createVNode(unref(draggable), {
                              modelValue: unref(courseSections).data,
                              "onUpdate:modelValue": ($event) => unref(courseSections).data = $event,
                              animation: 300,
                              tag: "div",
                              "item-key": "order",
                              onChange: _ctx.updateSectionOrder
                            }, {
                              item: withCtx(({ element: item }) => [
                                createVNode(_sfc_main$1, {
                                  "api-key": props.editorKey,
                                  course: props.course,
                                  section: item,
                                  onSectionUpdate: sectionUpdate,
                                  onSave: saveSectionContent,
                                  onSectionDelete: sectionDelete,
                                  onLessonDelete: deleteLesson
                                }, null, 8, ["api-key", "course", "section"])
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "px-5 py-7 w-full bg-base-100" }, [
                createVNode(unref(TabGroup), null, {
                  default: withCtx(() => [
                    createVNode(unref(TabList), { class: "flex space-x-1 rounded-xl bg-base-100 p-2 tabs font-bold" }, {
                      default: withCtx(() => [
                        createVNode(unref(Tab), null, {
                          default: withCtx(({ selected }) => [
                            createVNode("a", {
                              class: ["tab tab-lg tab-bordered rounded-md bg-neutral", selected ? "bg-primary text-black" : ""]
                            }, "Display Information", 2)
                          ]),
                          _: 1
                        }),
                        createVNode(unref(Tab), null, {
                          default: withCtx(({ selected }) => [
                            createVNode("a", {
                              class: ["tab tab-lg tab-bordered rounded-md bg-neutral", selected ? "bg-primary text-black" : ""]
                            }, "Lesson", 2)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(TabPanels), { class: "mt-2" }, {
                      default: withCtx(() => [
                        createVNode(unref(TabPanel), null, {
                          default: withCtx(() => [
                            createVNode("div", null, [
                              createVNode("h2", { class: "mb-4 text-4xl tracking-tight font-extrabold text-center text-neutral-content" }, " Edit " + toDisplayString(props.course.data.title), 1),
                              createVNode("form", {
                                class: "bg-base-100 backdrop-blur transition-all duration-100 shadow-md rounded px-8 pt-6 pb-8 mb-4",
                                onSubmit: withModifiers(submit, ["prevent"])
                              }, [
                                createVNode("div", { class: "w-full" }, [
                                  createVNode("div", { class: "mx-auto w-full rounded-2xl bg-base-300 p-2" }, [
                                    createVNode(unref(Disclosure), null, {
                                      default: withCtx(({ open }) => [
                                        createVNode(unref(DisclosureButton), { class: "flex w-full justify-between rounded-lg bg-secondary p-2 text-left text-lg font-medium text-black hover:bg-primary mb-2" }, {
                                          default: withCtx(() => [
                                            createVNode("span", null, "Course Information"),
                                            (openBlock(), createBlock("svg", {
                                              xmlns: "http://www.w3.org/2000/svg",
                                              fill: "none",
                                              viewBox: "0 0 24 24",
                                              "stroke-width": "1.5",
                                              stroke: "currentColor",
                                              class: "size-6"
                                            }, [
                                              createVNode("path", {
                                                "stroke-linecap": "round",
                                                "stroke-linejoin": "round",
                                                d: "m19.5 8.25-7.5 7.5-7.5-7.5"
                                              })
                                            ]))
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(DisclosurePanel), { class: "px-4 pb-2 pt-4 text-sm" }, {
                                          default: withCtx(() => [
                                            createVNode(unref(InputField), {
                                              modelValue: form.value.title,
                                              "onUpdate:modelValue": ($event) => form.value.title = $event,
                                              type: "text",
                                              label: "Title"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(unref(InputField), {
                                              modelValue: form.value.slug,
                                              "onUpdate:modelValue": ($event) => form.value.slug = $event,
                                              type: "text",
                                              label: "Slug"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(unref(_sfc_main$b), {
                                              modelValue: form.value.category_id,
                                              "onUpdate:modelValue": ($event) => form.value.category_id = $event,
                                              label: props.dynamicCategorySearch.label,
                                              placeholder: "search",
                                              model: props.dynamicCategorySearch.model,
                                              columns: props.dynamicCategorySearch.columns,
                                              "single-mode": props.dynamicCategorySearch.singleSearch,
                                              "load-data": __props.selected_category.data,
                                              endpoint: props.dynamicCategorySearch.endpoint
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "model", "columns", "single-mode", "load-data", "endpoint"]),
                                            createVNode(unref(_sfc_main$c), {
                                              modelValue: form.value.course_image,
                                              "onUpdate:modelValue": ($event) => form.value.course_image = $event,
                                              label: "image",
                                              placeholder: "search",
                                              "load-data": form.value.course_image,
                                              endpoint: props.image_search_endpoint
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "load-data", "endpoint"])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(Disclosure), null, {
                                      default: withCtx(({ open }) => [
                                        createVNode(unref(DisclosureButton), { class: "flex w-full justify-between rounded-lg bg-secondary p-2 text-left text-lg font-medium text-black hover:bg-primary mb-2" }, {
                                          default: withCtx(() => [
                                            createVNode("span", null, "Course Settings"),
                                            (openBlock(), createBlock("svg", {
                                              xmlns: "http://www.w3.org/2000/svg",
                                              fill: "none",
                                              viewBox: "0 0 24 24",
                                              "stroke-width": "1.5",
                                              stroke: "currentColor",
                                              class: "size-6"
                                            }, [
                                              createVNode("path", {
                                                "stroke-linecap": "round",
                                                "stroke-linejoin": "round",
                                                d: "m19.5 8.25-7.5 7.5-7.5-7.5"
                                              })
                                            ]))
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(DisclosurePanel), { class: "px-4 pb-2 pt-4 text-sm bg-base-300" }, {
                                          default: withCtx(() => [
                                            createVNode(unref(_sfc_main$d), {
                                              modelValue: form.value.is_free,
                                              "onUpdate:modelValue": ($event) => form.value.is_free = $event,
                                              label: "Is Free"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(unref(_sfc_main$d), {
                                              modelValue: form.value.is_published,
                                              "onUpdate:modelValue": ($event) => form.value.is_published = $event,
                                              label: "Is published"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(unref(_sfc_main$d), {
                                              modelValue: form.value.is_popular,
                                              "onUpdate:modelValue": ($event) => form.value.is_popular = $event,
                                              label: "Is popular"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(unref(_sfc_main$9), {
                                              modelValue: form.value.card_style,
                                              "onUpdate:modelValue": ($event) => form.value.card_style = $event,
                                              options: props.course_style_options,
                                              label: "Card style"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
                                            createVNode(unref(_sfc_main$9), {
                                              modelValue: form.value.difficulty_level,
                                              "onUpdate:modelValue": ($event) => form.value.difficulty_level = $event,
                                              options: props.difficulty_level,
                                              label: "Dificulty level"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
                                            createVNode(unref(_sfc_main$b), {
                                              modelValue: form.value.tags,
                                              "onUpdate:modelValue": ($event) => form.value.tags = $event,
                                              label: props.dynamicTagsSearch.label,
                                              placeholder: "search",
                                              model: props.dynamicTagsSearch.model,
                                              columns: props.dynamicTagsSearch.columns,
                                              "single-mode": props.dynamicTagsSearch.singleSearch,
                                              "load-data": __props.selected_tags.data,
                                              endpoint: props.dynamicTagsSearch.endpoint
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "model", "columns", "single-mode", "load-data", "endpoint"])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(Disclosure), null, {
                                      default: withCtx(({ open }) => [
                                        createVNode(unref(DisclosureButton), { class: "flex w-full justify-between rounded-lg bg-secondary p-2 text-left text-lg font-medium text-black hover:bg-primary" }, {
                                          default: withCtx(() => [
                                            createVNode("span", null, "Course Description"),
                                            (openBlock(), createBlock("svg", {
                                              xmlns: "http://www.w3.org/2000/svg",
                                              fill: "none",
                                              viewBox: "0 0 24 24",
                                              "stroke-width": "1.5",
                                              stroke: "currentColor",
                                              class: "size-6"
                                            }, [
                                              createVNode("path", {
                                                "stroke-linecap": "round",
                                                "stroke-linejoin": "round",
                                                d: "m19.5 8.25-7.5 7.5-7.5-7.5"
                                              })
                                            ]))
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(DisclosurePanel), { class: "px-4 pb-2 pt-4 text-sm bg-base-300" }, {
                                          default: withCtx(() => [
                                            createVNode("div", null, [
                                              createVNode("label", { class: "label" }, [
                                                createVNode("span", { class: "block text-lg font-bold mb-2" }, "Short Description")
                                              ]),
                                              createVNode(_sfc_main$5, {
                                                modelValue: form.value.short_description,
                                                "onUpdate:modelValue": ($event) => form.value.short_description = $event,
                                                "api-key": props.editorKey,
                                                init: {
                                                  plugins: "lists link image table code help wordcount"
                                                }
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "api-key"])
                                            ]),
                                            createVNode("div", null, [
                                              createVNode("label", { class: "label" }, [
                                                createVNode("span", { class: "block text-lg font-bold mb-2" }, "Description")
                                              ]),
                                              createVNode(_sfc_main$5, {
                                                modelValue: form.value.content,
                                                "onUpdate:modelValue": ($event) => form.value.content = $event,
                                                "api-key": props.editorKey,
                                                init: {
                                                  plugins: "lists link image table code help wordcount"
                                                }
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "api-key"])
                                            ])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ]),
                                createVNode("button", {
                                  type: "submit",
                                  class: "btn btn-secondary mt-10 block w-full"
                                }, " Submit ")
                              ], 32)
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(unref(TabPanel), null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "bg-primary text-neutral-content p-4 rounded-lg" }, [
                              createVNode("div", { class: "flex justify-between" }, [
                                createVNode("h2", { class: "mb-4 text-4xl tracking-tight font-extrabold text-center" }, " Sections "),
                                createVNode("button", {
                                  class: "btn btn-secondary",
                                  onClick: addNewSection
                                }, " Add ")
                              ])
                            ]),
                            createVNode(unref(draggable), {
                              modelValue: unref(courseSections).data,
                              "onUpdate:modelValue": ($event) => unref(courseSections).data = $event,
                              animation: 300,
                              tag: "div",
                              "item-key": "order",
                              onChange: _ctx.updateSectionOrder
                            }, {
                              item: withCtx(({ element: item }) => [
                                createVNode(_sfc_main$1, {
                                  "api-key": props.editorKey,
                                  course: props.course,
                                  section: item,
                                  onSectionUpdate: sectionUpdate,
                                  onSave: saveSectionContent,
                                  onSectionDelete: sectionDelete,
                                  onLessonDelete: deleteLesson
                                }, null, 8, ["api-key", "course", "section"])
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/backend/Pages/BackEnd/Vendor/GameDev/Course/Edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
