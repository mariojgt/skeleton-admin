import { watch, onMounted, useSSRContext } from "vue";
import { usePage } from "@inertiajs/vue3";
import { useMessage } from "naive-ui";
const _sfc_main = {
  __name: "FlashMessage",
  __ssrInlineRender: true,
  setup(__props) {
    const message = useMessage();
    watch(
      () => usePage().props.errors,
      (v) => {
        if (usePage().props.errors) {
          for (const [key, value] of Object.entries(usePage().props.errors)) {
            handleMessage("error", value);
          }
        }
      }
    );
    onMounted(() => {
      if (usePage().props.flash) {
        handleMessage(
          usePage().props.flash.type,
          usePage().props.flash.message
        );
      }
    });
    watch(
      () => usePage().props.flash,
      (v) => {
        if (usePage().props.flash) {
          handleMessage(
            usePage().props.flash.type,
            usePage().props.flash.message
          );
        }
      }
    );
    const handleMessage = async (type, messageData) => {
      switch (type) {
        case "success":
          message.success(messageData);
          break;
        case "error":
          message.error(messageData);
          break;
        case "warning":
          message.warning(messageData);
          break;
        case "info":
          message.info(messageData);
          break;
        default:
          message.info(messageData);
          break;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/backend/Components/Backend/Global/FlashMessage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
