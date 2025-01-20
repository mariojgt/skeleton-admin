import { ref, onMounted, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import { Upload, User, UserCircle, Mail, Save } from "lucide-vue-next";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "EditDetails",
  __ssrInlineRender: true,
  props: {
    userInfo: {
      type: Object,
      default: {}
    }
  },
  emits: ["isLoading"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    let userInformation = ref([]);
    onMounted(() => {
      userInformation.value = props.userInfo;
    });
    useForm({
      first_name: userInformation.value.first_name,
      last_name: userInformation.value.last_name,
      email: userInformation.value.email
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-dark-500/90 backdrop-blur-sm rounded-xl border border-gray-800/50 overflow-hidden" }, _attrs))} data-v-cf862c45><div class="relative p-6 text-center border-b border-gray-800/50" data-v-cf862c45><div class="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5" data-v-cf862c45></div><div class="relative" data-v-cf862c45><div class="relative inline-block group" data-v-cf862c45><div class="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-75 blur transition-opacity duration-300 group-hover:opacity-100" data-v-cf862c45></div><div class="relative w-24 h-24 rounded-full overflow-hidden border-2 border-dark-400" data-v-cf862c45><img${ssrRenderAttr("src", unref(userInformation).avatar)} alt="Profile Picture" class="w-full h-full object-cover" data-v-cf862c45><div class="absolute inset-0 bg-dark-500/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-v-cf862c45>`);
      _push(ssrRenderComponent(unref(Upload), { class: "w-6 h-6 text-white" }, null, _parent));
      _push(`</div></div></div><h2 class="mt-4 text-xl font-bold text-white" data-v-cf862c45>Edit Profile</h2><p class="text-sm text-gray-400" data-v-cf862c45>Update your personal information</p></div></div><form class="p-6 space-y-6" data-v-cf862c45><div class="space-y-2" data-v-cf862c45><label for="username" class="block text-sm font-medium text-gray-300" data-v-cf862c45>Username</label><div class="relative" data-v-cf862c45><div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" data-v-cf862c45>`);
      _push(ssrRenderComponent(unref(User), { class: "w-5 h-5 text-gray-400" }, null, _parent));
      _push(`</div><input id="username"${ssrRenderAttr("value", unref(userInformation).username)} type="text" placeholder="Enter your username" class="w-full pl-10 pr-4 py-3 bg-dark-400/50 border border-gray-800/50 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300" data-v-cf862c45></div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-cf862c45><div class="space-y-2" data-v-cf862c45><label for="first_name" class="block text-sm font-medium text-gray-300" data-v-cf862c45>First Name</label><div class="relative" data-v-cf862c45><div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" data-v-cf862c45>`);
      _push(ssrRenderComponent(unref(UserCircle), { class: "w-5 h-5 text-gray-400" }, null, _parent));
      _push(`</div><input id="first_name"${ssrRenderAttr("value", unref(userInformation).first_name)} type="text" placeholder="Enter your first name" class="w-full pl-10 pr-4 py-3 bg-dark-400/50 border border-gray-800/50 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300" data-v-cf862c45></div></div><div class="space-y-2" data-v-cf862c45><label for="last_name" class="block text-sm font-medium text-gray-300" data-v-cf862c45>Last Name</label><div class="relative" data-v-cf862c45><div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" data-v-cf862c45>`);
      _push(ssrRenderComponent(unref(UserCircle), { class: "w-5 h-5 text-gray-400" }, null, _parent));
      _push(`</div><input id="last_name"${ssrRenderAttr("value", unref(userInformation).last_name)} type="text" placeholder="Enter your last name" class="w-full pl-10 pr-4 py-3 bg-dark-400/50 border border-gray-800/50 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300" data-v-cf862c45></div></div></div><div class="space-y-2" data-v-cf862c45><label for="email" class="block text-sm font-medium text-gray-300" data-v-cf862c45>Email Address</label><div class="relative" data-v-cf862c45><div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" data-v-cf862c45>`);
      _push(ssrRenderComponent(unref(Mail), { class: "w-5 h-5 text-gray-400" }, null, _parent));
      _push(`</div><input id="email"${ssrRenderAttr("value", unref(userInformation).email)} type="email" placeholder="Enter your email" class="w-full pl-10 pr-4 py-3 bg-dark-400/50 border border-gray-800/50 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300" data-v-cf862c45></div></div><div class="pt-4" data-v-cf862c45><button type="submit" class="group relative w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg transition-all duration-300 hover:from-blue-600 hover:to-purple-600" data-v-cf862c45><div class="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" data-v-cf862c45></div>`);
      _push(ssrRenderComponent(unref(Save), { class: "w-5 h-5" }, null, _parent));
      _push(`<span data-v-cf862c45>Save Changes</span></button></div></form></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Pages/FrontEnd/User/Components/EditDetails.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const EditDetails = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cf862c45"]]);
export {
  EditDetails as default
};
