import { mergeProps, withCtx, unref, createVNode, toDisplayString, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./App-CccoNqE7.js";
import "@inertiajs/vue3";
import { FileText, UserCheck, Copyright, Ban, ShieldX, Wallet, Power } from "lucide-vue-next";
import "naive-ui";
import "./FlashMessage-CYVaM9mM.js";
import "./Markdown-D1WgnuMs.js";
import "dompurify";
import "markdown-it";
import "highlight.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./Input-BXi_X4mZ.js";
import "@headlessui/vue";
import "marked";
import "turndown";
import "date-fns";
import "./SearchSidebar-BPNZMEZb.js";
import "lodash";
import "./dynamicIcon-DKOdjdPH.js";
import "./axios-BWWnXGbF.js";
import "axios";
import "../Frontend_js.js";
import "./index-koWuargk.js";
import "./Money-B84zS3T2.js";
import "./SeoManager-ytA6mF8s.js";
const _sfc_main = {
  __name: "Terms",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        backgroundFooterClass: "bg-dark-100",
        headerBackground: "bg-dark-100"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="min-h-screen bg-dark-100"${_scopeId}><div class="relative overflow-hidden bg-dark-500/90 backdrop-blur-sm border-b border-gray-800/50"${_scopeId}><div class="absolute inset-0 bg-gradient-to-br from-orange-600/5 to-red-600/5"${_scopeId}></div><div class="absolute inset-0 bg-[url(&#39;data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIxMjEyMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+&#39;)] opacity-10"${_scopeId}></div><div class="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(FileText), { class: "w-16 h-16 text-red-400 mx-auto mb-4" }, null, _parent2, _scopeId));
            _push2(`<h1 class="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl"${_scopeId}>Terms of Service</h1><p class="mt-4 max-w-3xl mx-auto text-xl text-gray-300"${_scopeId}>Legal Agreement for Using Our Platform</p></div></div><div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8"${_scopeId}><div class="space-y-8"${_scopeId}><section class="prose prose-invert max-w-none"${_scopeId}><p class="text-lg text-gray-300"${_scopeId}> Last updated: ${ssrInterpolate((/* @__PURE__ */ new Date()).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric"
            }))}</p><p class="text-gray-300"${_scopeId}> By accessing or using TheDevRealm, you agree to be bound by these Terms of Service. Please read carefully. </p></section><div class="grid gap-8 md:grid-cols-2"${_scopeId}><div class="bg-dark-500/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50"${_scopeId}><div class="flex items-center gap-3 mb-4"${_scopeId}><div class="p-2 rounded-lg bg-blue-500/10"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(UserCheck), { class: "w-6 h-6 text-blue-400" }, null, _parent2, _scopeId));
            _push2(`</div><h2 class="text-xl font-bold text-white"${_scopeId}>Account Responsibilities</h2></div><div class="space-y-4 text-gray-300"${_scopeId}><p${_scopeId}>When creating an account, you agree to:</p><ul class="list-disc pl-5 space-y-2"${_scopeId}><li${_scopeId}>Provide accurate and current information</li><li${_scopeId}>Maintain the confidentiality of your account</li><li${_scopeId}>Accept responsibility for all activities under your account</li><li${_scopeId}>Immediately notify us of any unauthorized use</li></ul></div></div><div class="bg-dark-500/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50"${_scopeId}><div class="flex items-center gap-3 mb-4"${_scopeId}><div class="p-2 rounded-lg bg-purple-500/10"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Copyright), { class: "w-6 h-6 text-purple-400" }, null, _parent2, _scopeId));
            _push2(`</div><h2 class="text-xl font-bold text-white"${_scopeId}>Intellectual Property</h2></div><div class="space-y-4 text-gray-300"${_scopeId}><p${_scopeId}>All content on our platform is protected:</p><ul class="list-disc pl-5 space-y-2"${_scopeId}><li${_scopeId}>All course materials are our intellectual property</li><li${_scopeId}>No content may be reproduced without permission</li><li${_scopeId}>Unauthorized distribution is strictly prohibited</li><li${_scopeId}>Violators may face legal action</li></ul></div></div><div class="bg-dark-500/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50"${_scopeId}><div class="flex items-center gap-3 mb-4"${_scopeId}><div class="p-2 rounded-lg bg-green-500/10"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Ban), { class: "w-6 h-6 text-green-400" }, null, _parent2, _scopeId));
            _push2(`</div><h2 class="text-xl font-bold text-white"${_scopeId}>Prohibited Conduct</h2></div><div class="space-y-4 text-gray-300"${_scopeId}><p${_scopeId}>Users are prohibited from:</p><ul class="list-disc pl-5 space-y-2"${_scopeId}><li${_scopeId}>Sharing account credentials</li><li${_scopeId}>Attempting to circumvent security</li><li${_scopeId}>Engaging in fraudulent activities</li><li${_scopeId}>Using the platform for illegal purposes</li></ul></div></div><div class="bg-dark-500/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50"${_scopeId}><div class="flex items-center gap-3 mb-4"${_scopeId}><div class="p-2 rounded-lg bg-red-500/10"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(ShieldX), { class: "w-6 h-6 text-red-400" }, null, _parent2, _scopeId));
            _push2(`</div><h2 class="text-xl font-bold text-white"${_scopeId}>Limitation of Liability</h2></div><div class="space-y-4 text-gray-300"${_scopeId}><p${_scopeId}>Important legal disclaimer:</p><ul class="list-disc pl-5 space-y-2"${_scopeId}><li${_scopeId}>We are not liable for indirect damages</li><li${_scopeId}>Maximum liability is limited to course price</li><li${_scopeId}>No guarantees of specific learning outcomes</li><li${_scopeId}>Services provided &quot;as is&quot; without warranties</li></ul></div></div></div><div class="bg-dark-500/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50"${_scopeId}><div class="flex items-center gap-3 mb-4"${_scopeId}><div class="p-2 rounded-lg bg-orange-500/10"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Wallet), { class: "w-6 h-6 text-red-400" }, null, _parent2, _scopeId));
            _push2(`</div><h2 class="text-xl font-bold text-white"${_scopeId}>Refund Policy</h2></div><div class="space-y-4 text-gray-300"${_scopeId}><p${_scopeId}>Our Refund Policy ensures transparency and fairness for all users. Please review the following terms carefully before purchasing access to our platform:</p><ul class="list-disc pl-5 space-y-2"${_scopeId}><li${_scopeId}>All sales are final due to the nature of digital content, which is accessible immediately upon purchase.</li><li${_scopeId}>No refunds will be issued once content has been accessed or downloaded.</li><li${_scopeId}>By purchasing, you waive your right to the 14-day cooling-off period under the UK Consumer Contracts Regulations 2013.</li><li${_scopeId}>Refunds may be considered only in exceptional cases, such as technical issues preventing access to our platform.</li><li${_scopeId}>We reserve the right to terminate or suspend your account without prior notice if you: <ul class="list-disc pl-5 space-y-2"${_scopeId}><li${_scopeId}>Violate our Terms of Service</li><li${_scopeId}>Engage in fraudulent or suspicious activity</li></ul></li></ul><p${_scopeId}>By proceeding with your purchase, you acknowledge and agree to this Refund Policy. For assistance, please contact our support team.</p></div></div><div class="bg-dark-500/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50"${_scopeId}><div class="flex items-center gap-3 mb-4"${_scopeId}><div class="p-2 rounded-lg bg-orange-500/10"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Power), { class: "w-6 h-6 text-orange-400" }, null, _parent2, _scopeId));
            _push2(`</div><h2 class="text-xl font-bold text-white"${_scopeId}>Termination of Service</h2></div><div class="space-y-4 text-gray-300"${_scopeId}><p${_scopeId}>We reserve the right to terminate or suspend your account:</p><ul class="list-disc pl-5 space-y-2"${_scopeId}><li${_scopeId}>For violation of these Terms of Service</li><li${_scopeId}>If we suspect fraudulent activity</li><li${_scopeId}>Without prior notice</li><li${_scopeId}>With no right to refund</li></ul></div></div><div class="bg-dark-500/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50 text-center"${_scopeId}><h2 class="text-xl font-bold text-white mb-4"${_scopeId}>Questions About Our Terms?</h2><p class="text-gray-300 mb-6"${_scopeId}> If you have any questions or need clarification about our Terms of Service, please contact us. </p></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "min-h-screen bg-dark-100" }, [
                createVNode("div", { class: "relative overflow-hidden bg-dark-500/90 backdrop-blur-sm border-b border-gray-800/50" }, [
                  createVNode("div", { class: "absolute inset-0 bg-gradient-to-br from-orange-600/5 to-red-600/5" }),
                  createVNode("div", { class: "absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIxMjEyMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-10" }),
                  createVNode("div", { class: "relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center" }, [
                    createVNode(unref(FileText), { class: "w-16 h-16 text-red-400 mx-auto mb-4" }),
                    createVNode("h1", { class: "text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl" }, "Terms of Service"),
                    createVNode("p", { class: "mt-4 max-w-3xl mx-auto text-xl text-gray-300" }, "Legal Agreement for Using Our Platform")
                  ])
                ]),
                createVNode("div", { class: "max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8" }, [
                  createVNode("div", { class: "space-y-8" }, [
                    createVNode("section", { class: "prose prose-invert max-w-none" }, [
                      createVNode("p", { class: "text-lg text-gray-300" }, " Last updated: " + toDisplayString((/* @__PURE__ */ new Date()).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric"
                      })), 1),
                      createVNode("p", { class: "text-gray-300" }, " By accessing or using TheDevRealm, you agree to be bound by these Terms of Service. Please read carefully. ")
                    ]),
                    createVNode("div", { class: "grid gap-8 md:grid-cols-2" }, [
                      createVNode("div", { class: "bg-dark-500/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50" }, [
                        createVNode("div", { class: "flex items-center gap-3 mb-4" }, [
                          createVNode("div", { class: "p-2 rounded-lg bg-blue-500/10" }, [
                            createVNode(unref(UserCheck), { class: "w-6 h-6 text-blue-400" })
                          ]),
                          createVNode("h2", { class: "text-xl font-bold text-white" }, "Account Responsibilities")
                        ]),
                        createVNode("div", { class: "space-y-4 text-gray-300" }, [
                          createVNode("p", null, "When creating an account, you agree to:"),
                          createVNode("ul", { class: "list-disc pl-5 space-y-2" }, [
                            createVNode("li", null, "Provide accurate and current information"),
                            createVNode("li", null, "Maintain the confidentiality of your account"),
                            createVNode("li", null, "Accept responsibility for all activities under your account"),
                            createVNode("li", null, "Immediately notify us of any unauthorized use")
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "bg-dark-500/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50" }, [
                        createVNode("div", { class: "flex items-center gap-3 mb-4" }, [
                          createVNode("div", { class: "p-2 rounded-lg bg-purple-500/10" }, [
                            createVNode(unref(Copyright), { class: "w-6 h-6 text-purple-400" })
                          ]),
                          createVNode("h2", { class: "text-xl font-bold text-white" }, "Intellectual Property")
                        ]),
                        createVNode("div", { class: "space-y-4 text-gray-300" }, [
                          createVNode("p", null, "All content on our platform is protected:"),
                          createVNode("ul", { class: "list-disc pl-5 space-y-2" }, [
                            createVNode("li", null, "All course materials are our intellectual property"),
                            createVNode("li", null, "No content may be reproduced without permission"),
                            createVNode("li", null, "Unauthorized distribution is strictly prohibited"),
                            createVNode("li", null, "Violators may face legal action")
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "bg-dark-500/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50" }, [
                        createVNode("div", { class: "flex items-center gap-3 mb-4" }, [
                          createVNode("div", { class: "p-2 rounded-lg bg-green-500/10" }, [
                            createVNode(unref(Ban), { class: "w-6 h-6 text-green-400" })
                          ]),
                          createVNode("h2", { class: "text-xl font-bold text-white" }, "Prohibited Conduct")
                        ]),
                        createVNode("div", { class: "space-y-4 text-gray-300" }, [
                          createVNode("p", null, "Users are prohibited from:"),
                          createVNode("ul", { class: "list-disc pl-5 space-y-2" }, [
                            createVNode("li", null, "Sharing account credentials"),
                            createVNode("li", null, "Attempting to circumvent security"),
                            createVNode("li", null, "Engaging in fraudulent activities"),
                            createVNode("li", null, "Using the platform for illegal purposes")
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "bg-dark-500/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50" }, [
                        createVNode("div", { class: "flex items-center gap-3 mb-4" }, [
                          createVNode("div", { class: "p-2 rounded-lg bg-red-500/10" }, [
                            createVNode(unref(ShieldX), { class: "w-6 h-6 text-red-400" })
                          ]),
                          createVNode("h2", { class: "text-xl font-bold text-white" }, "Limitation of Liability")
                        ]),
                        createVNode("div", { class: "space-y-4 text-gray-300" }, [
                          createVNode("p", null, "Important legal disclaimer:"),
                          createVNode("ul", { class: "list-disc pl-5 space-y-2" }, [
                            createVNode("li", null, "We are not liable for indirect damages"),
                            createVNode("li", null, "Maximum liability is limited to course price"),
                            createVNode("li", null, "No guarantees of specific learning outcomes"),
                            createVNode("li", null, 'Services provided "as is" without warranties')
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "bg-dark-500/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50" }, [
                      createVNode("div", { class: "flex items-center gap-3 mb-4" }, [
                        createVNode("div", { class: "p-2 rounded-lg bg-orange-500/10" }, [
                          createVNode(unref(Wallet), { class: "w-6 h-6 text-red-400" })
                        ]),
                        createVNode("h2", { class: "text-xl font-bold text-white" }, "Refund Policy")
                      ]),
                      createVNode("div", { class: "space-y-4 text-gray-300" }, [
                        createVNode("p", null, "Our Refund Policy ensures transparency and fairness for all users. Please review the following terms carefully before purchasing access to our platform:"),
                        createVNode("ul", { class: "list-disc pl-5 space-y-2" }, [
                          createVNode("li", null, "All sales are final due to the nature of digital content, which is accessible immediately upon purchase."),
                          createVNode("li", null, "No refunds will be issued once content has been accessed or downloaded."),
                          createVNode("li", null, "By purchasing, you waive your right to the 14-day cooling-off period under the UK Consumer Contracts Regulations 2013."),
                          createVNode("li", null, "Refunds may be considered only in exceptional cases, such as technical issues preventing access to our platform."),
                          createVNode("li", null, [
                            createTextVNode("We reserve the right to terminate or suspend your account without prior notice if you: "),
                            createVNode("ul", { class: "list-disc pl-5 space-y-2" }, [
                              createVNode("li", null, "Violate our Terms of Service"),
                              createVNode("li", null, "Engage in fraudulent or suspicious activity")
                            ])
                          ])
                        ]),
                        createVNode("p", null, "By proceeding with your purchase, you acknowledge and agree to this Refund Policy. For assistance, please contact our support team.")
                      ])
                    ]),
                    createVNode("div", { class: "bg-dark-500/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50" }, [
                      createVNode("div", { class: "flex items-center gap-3 mb-4" }, [
                        createVNode("div", { class: "p-2 rounded-lg bg-orange-500/10" }, [
                          createVNode(unref(Power), { class: "w-6 h-6 text-orange-400" })
                        ]),
                        createVNode("h2", { class: "text-xl font-bold text-white" }, "Termination of Service")
                      ]),
                      createVNode("div", { class: "space-y-4 text-gray-300" }, [
                        createVNode("p", null, "We reserve the right to terminate or suspend your account:"),
                        createVNode("ul", { class: "list-disc pl-5 space-y-2" }, [
                          createVNode("li", null, "For violation of these Terms of Service"),
                          createVNode("li", null, "If we suspect fraudulent activity"),
                          createVNode("li", null, "Without prior notice"),
                          createVNode("li", null, "With no right to refund")
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "bg-dark-500/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50 text-center" }, [
                      createVNode("h2", { class: "text-xl font-bold text-white mb-4" }, "Questions About Our Terms?"),
                      createVNode("p", { class: "text-gray-300 mb-6" }, " If you have any questions or need clarification about our Terms of Service, please contact us. ")
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Pages/FrontEnd/Vendor/GameDev/Legal/Terms.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
