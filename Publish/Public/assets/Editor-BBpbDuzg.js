import { defineComponent, ref, onMounted, watch, unref, isRef, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import axios from "axios";
import Editor from "@tinymce/tinymce-vue";
import FormData from "form-data";
import { usePage } from "@inertiajs/vue3";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Editor",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    apiKey: {
      type: String,
      default: null
    },
    editModelValue: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    let editorInstance = null;
    const onInit = (e) => {
      editorInstance = e.editor;
      editorInstance.on("change", (e2) => {
        onEditorChange();
      });
    };
    const onEditorChange = () => {
      emit("update:modelValue", editorValue.value);
    };
    let editorValue = ref(null);
    let firstLoaded = ref(false);
    onMounted(() => {
      editorValue.value = props.modelValue;
      firstLoaded.value = true;
    });
    watch(
      () => editorValue.value,
      (value) => {
        if (firstLoaded.value) {
          onEditorChange();
        }
      }
    );
    watch(
      () => props.editModelValue,
      (value) => {
        editorValue.value = value;
        onEditorChange();
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(unref(Editor), {
        modelValue: unref(editorValue),
        "onUpdate:modelValue": ($event) => isRef(editorValue) ? editorValue.value = $event : editorValue = $event,
        "api-key": props.apiKey,
        init: {
          plugins: "lists link image table code help wordcount codesample importcss",
          toolbar: "undo redo | image code | codesample",
          content_css: "/my-styles.css",
          setup: (editor) => onInit({ editor }),
          images_upload_handler: async (blobInfo) => {
            let formData = new (unref(FormData))();
            formData.append("file", blobInfo.blob(), blobInfo.filename());
            try {
              const res = await unref(axios).post(unref(usePage)().props.upload_media, formData, {
                headers: {
                  "Content-Type": "multipart/form-data"
                }
              });
              if (res.data && res.data.data.url.default) {
                return res.data.data.url.default;
              } else {
                throw new Error("Unable to upload image");
              }
            } catch (err) {
              throw new Error("Unable to upload image");
            }
          }
        }
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/backend/Components/Editor/Editor.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
