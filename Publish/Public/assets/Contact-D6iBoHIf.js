import { defineComponent, mergeProps, withCtx, unref, createVNode, withModifiers, withDirectives, vModelText, openBlock, createBlock, toDisplayString, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./App-CccoNqE7.js";
import { u as useRecaptcha } from "../Frontend_js.js";
import { MessageSquare, User, Mail, MessageCircle, Send, Loader2, Clock, ChevronDown } from "lucide-vue-next";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "naive-ui";
import "./FlashMessage-CYVaM9mM.js";
import "./Markdown-D1WgnuMs.js";
import "dompurify";
import "markdown-it";
import "highlight.js";
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
import "./Money-B84zS3T2.js";
import "./SeoManager-ytA6mF8s.js";
import "./index-koWuargk.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Contact",
  __ssrInlineRender: true,
  setup(__props) {
    const { getToken, isLoading, error } = useRecaptcha();
    const form = useForm({
      name: "",
      email: "",
      subject: "",
      message: "",
      recaptcha_token: ""
    });
    const submitForm = async () => {
      form.recaptcha_token = await getToken("submit");
      form.post(route("contact.store"), {
        preserveScroll: true,
        onSuccess: () => {
          form.reset();
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        backgroundFooterClass: "bg-dark-100",
        headerBackground: "bg-dark-100"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="min-h-screen bg-dark-100" data-v-1d10f850${_scopeId}><div class="relative overflow-hidden bg-dark-500/90 backdrop-blur-sm border-b border-gray-800/50" data-v-1d10f850${_scopeId}><div class="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5" data-v-1d10f850${_scopeId}></div><div class="absolute inset-0 bg-[url(&#39;data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIxMjEyMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+&#39;)] opacity-10" data-v-1d10f850${_scopeId}></div><div class="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center" data-v-1d10f850${_scopeId}>`);
            _push2(ssrRenderComponent(unref(MessageSquare), { class: "w-16 h-16 text-blue-400 mx-auto mb-4" }, null, _parent2, _scopeId));
            _push2(`<h1 class="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl" data-v-1d10f850${_scopeId}>Contact Us</h1><p class="mt-4 max-w-3xl mx-auto text-xl text-gray-300" data-v-1d10f850${_scopeId}>Get in touch with our team</p></div></div><div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8" data-v-1d10f850${_scopeId}><div class="grid grid-cols-1 lg:grid-cols-2 gap-8" data-v-1d10f850${_scopeId}><div class="bg-dark-500/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50" data-v-1d10f850${_scopeId}><form class="space-y-6" data-v-1d10f850${_scopeId}><div class="space-y-2" data-v-1d10f850${_scopeId}><label for="name" class="block text-sm font-medium text-gray-300" data-v-1d10f850${_scopeId}>Name</label><div class="relative" data-v-1d10f850${_scopeId}><div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" data-v-1d10f850${_scopeId}>`);
            _push2(ssrRenderComponent(unref(User), { class: "h-5 w-5 text-gray-400" }, null, _parent2, _scopeId));
            _push2(`</div><input id="name"${ssrRenderAttr("value", unref(form).name)} type="text" placeholder="Your name" class="${ssrRenderClass([{ "border-red-500": unref(form).errors.name }, "w-full pl-10 pr-4 py-3 bg-dark-400/50 border border-gray-800/50 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300"])}" data-v-1d10f850${_scopeId}></div>`);
            if (unref(form).errors.name) {
              _push2(`<p class="text-red-500 text-sm mt-1" data-v-1d10f850${_scopeId}>${ssrInterpolate(unref(form).errors.name)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="space-y-2" data-v-1d10f850${_scopeId}><label for="email" class="block text-sm font-medium text-gray-300" data-v-1d10f850${_scopeId}>Email Address</label><div class="relative" data-v-1d10f850${_scopeId}><div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" data-v-1d10f850${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Mail), { class: "h-5 w-5 text-gray-400" }, null, _parent2, _scopeId));
            _push2(`</div><input id="email"${ssrRenderAttr("value", unref(form).email)} type="email" placeholder="your.email@example.com" class="${ssrRenderClass([{ "border-red-500": unref(form).errors.email }, "w-full pl-10 pr-4 py-3 bg-dark-400/50 border border-gray-800/50 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300"])}" data-v-1d10f850${_scopeId}></div>`);
            if (unref(form).errors.email) {
              _push2(`<p class="text-red-500 text-sm mt-1" data-v-1d10f850${_scopeId}>${ssrInterpolate(unref(form).errors.email)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="space-y-2" data-v-1d10f850${_scopeId}><label for="subject" class="block text-sm font-medium text-gray-300" data-v-1d10f850${_scopeId}>Subject</label><div class="relative" data-v-1d10f850${_scopeId}><div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" data-v-1d10f850${_scopeId}>`);
            _push2(ssrRenderComponent(unref(MessageCircle), { class: "h-5 w-5 text-gray-400" }, null, _parent2, _scopeId));
            _push2(`</div><input id="subject"${ssrRenderAttr("value", unref(form).subject)} type="text" placeholder="What&#39;s this about?" class="${ssrRenderClass([{ "border-red-500": unref(form).errors.subject }, "w-full pl-10 pr-4 py-3 bg-dark-400/50 border border-gray-800/50 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300"])}" data-v-1d10f850${_scopeId}></div>`);
            if (unref(form).errors.subject) {
              _push2(`<p class="text-red-500 text-sm mt-1" data-v-1d10f850${_scopeId}>${ssrInterpolate(unref(form).errors.subject)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="space-y-2" data-v-1d10f850${_scopeId}><label for="message" class="block text-sm font-medium text-gray-300" data-v-1d10f850${_scopeId}>Message</label><div class="relative" data-v-1d10f850${_scopeId}><textarea id="message" rows="6" placeholder="Your message..." class="${ssrRenderClass([{ "border-red-500": unref(form).errors.message }, "w-full p-4 bg-dark-400/50 border border-gray-800/50 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300"])}" data-v-1d10f850${_scopeId}>${ssrInterpolate(unref(form).message)}</textarea></div>`);
            if (unref(form).errors.message) {
              _push2(`<p class="text-red-500 text-sm mt-1" data-v-1d10f850${_scopeId}>${ssrInterpolate(unref(form).errors.message)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><button type="submit"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="group relative w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg transition-all duration-300 hover:from-blue-600 hover:to-purple-600 disabled:opacity-50" data-v-1d10f850${_scopeId}><div class="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" data-v-1d10f850${_scopeId}></div>`);
            if (!unref(form).processing) {
              _push2(ssrRenderComponent(unref(Send), { class: "w-5 h-5" }, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(unref(Loader2), { class: "w-5 h-5 animate-spin" }, null, _parent2, _scopeId));
            }
            _push2(`<span data-v-1d10f850${_scopeId}>${ssrInterpolate(unref(form).processing ? "Sending..." : "Send Message")}</span></button></form></div><div class="space-y-8" data-v-1d10f850${_scopeId}><div class="bg-dark-500/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50" data-v-1d10f850${_scopeId}><h2 class="text-2xl font-bold text-white mb-6" data-v-1d10f850${_scopeId}>Quick Contact</h2><div class="space-y-4" data-v-1d10f850${_scopeId}><div class="flex items-center gap-4" data-v-1d10f850${_scopeId}><div class="p-2 rounded-lg bg-blue-500/10" data-v-1d10f850${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Mail), { class: "w-6 h-6 text-blue-400" }, null, _parent2, _scopeId));
            _push2(`</div><div data-v-1d10f850${_scopeId}><p class="text-sm text-gray-400" data-v-1d10f850${_scopeId}>Email</p><p class="text-white" data-v-1d10f850${_scopeId}>thedevrealm@gmail.com</p></div></div><div class="flex items-center gap-4" data-v-1d10f850${_scopeId}><div class="p-2 rounded-lg bg-purple-500/10" data-v-1d10f850${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Clock), { class: "w-6 h-6 text-purple-400" }, null, _parent2, _scopeId));
            _push2(`</div><div data-v-1d10f850${_scopeId}><p class="text-sm text-gray-400" data-v-1d10f850${_scopeId}>Response Time</p><p class="text-white" data-v-1d10f850${_scopeId}>Within 24-48 hours</p></div></div></div></div><div class="bg-dark-500/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50" data-v-1d10f850${_scopeId}><h2 class="text-2xl font-bold text-white mb-6" data-v-1d10f850${_scopeId}>Frequently Asked Questions</h2><div class="space-y-4" data-v-1d10f850${_scopeId}><details class="group" data-v-1d10f850${_scopeId}><summary class="flex items-center justify-between cursor-pointer text-gray-300 hover:text-white" data-v-1d10f850${_scopeId}><span data-v-1d10f850${_scopeId}>How long does it take to get a response?</span>`);
            _push2(ssrRenderComponent(unref(ChevronDown), { class: "w-5 h-5 transition-transform group-open:rotate-180" }, null, _parent2, _scopeId));
            _push2(`</summary><p class="mt-2 text-gray-400" data-v-1d10f850${_scopeId}>We typically respond to all inquiries within 24-48 hours during business days.</p></details><details class="group" data-v-1d10f850${_scopeId}><summary class="flex items-center justify-between cursor-pointer text-gray-300 hover:text-white" data-v-1d10f850${_scopeId}><span data-v-1d10f850${_scopeId}>What information should I include?</span>`);
            _push2(ssrRenderComponent(unref(ChevronDown), { class: "w-5 h-5 transition-transform group-open:rotate-180" }, null, _parent2, _scopeId));
            _push2(`</summary><p class="mt-2 text-gray-400" data-v-1d10f850${_scopeId}>Please include your name, email, and a detailed description of your inquiry to help us assist you better.</p></details></div></div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "min-h-screen bg-dark-100" }, [
                createVNode("div", { class: "relative overflow-hidden bg-dark-500/90 backdrop-blur-sm border-b border-gray-800/50" }, [
                  createVNode("div", { class: "absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5" }),
                  createVNode("div", { class: "absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIxMjEyMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-10" }),
                  createVNode("div", { class: "relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center" }, [
                    createVNode(unref(MessageSquare), { class: "w-16 h-16 text-blue-400 mx-auto mb-4" }),
                    createVNode("h1", { class: "text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl" }, "Contact Us"),
                    createVNode("p", { class: "mt-4 max-w-3xl mx-auto text-xl text-gray-300" }, "Get in touch with our team")
                  ])
                ]),
                createVNode("div", { class: "max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8" }, [
                  createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-8" }, [
                    createVNode("div", { class: "bg-dark-500/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50" }, [
                      createVNode("form", {
                        onSubmit: withModifiers(submitForm, ["prevent"]),
                        class: "space-y-6"
                      }, [
                        createVNode("div", { class: "space-y-2" }, [
                          createVNode("label", {
                            for: "name",
                            class: "block text-sm font-medium text-gray-300"
                          }, "Name"),
                          createVNode("div", { class: "relative" }, [
                            createVNode("div", { class: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" }, [
                              createVNode(unref(User), { class: "h-5 w-5 text-gray-400" })
                            ]),
                            withDirectives(createVNode("input", {
                              id: "name",
                              "onUpdate:modelValue": ($event) => unref(form).name = $event,
                              type: "text",
                              placeholder: "Your name",
                              class: ["w-full pl-10 pr-4 py-3 bg-dark-400/50 border border-gray-800/50 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300", { "border-red-500": unref(form).errors.name }]
                            }, null, 10, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).name]
                            ])
                          ]),
                          unref(form).errors.name ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "text-red-500 text-sm mt-1"
                          }, toDisplayString(unref(form).errors.name), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "space-y-2" }, [
                          createVNode("label", {
                            for: "email",
                            class: "block text-sm font-medium text-gray-300"
                          }, "Email Address"),
                          createVNode("div", { class: "relative" }, [
                            createVNode("div", { class: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" }, [
                              createVNode(unref(Mail), { class: "h-5 w-5 text-gray-400" })
                            ]),
                            withDirectives(createVNode("input", {
                              id: "email",
                              "onUpdate:modelValue": ($event) => unref(form).email = $event,
                              type: "email",
                              placeholder: "your.email@example.com",
                              class: ["w-full pl-10 pr-4 py-3 bg-dark-400/50 border border-gray-800/50 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300", { "border-red-500": unref(form).errors.email }]
                            }, null, 10, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).email]
                            ])
                          ]),
                          unref(form).errors.email ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "text-red-500 text-sm mt-1"
                          }, toDisplayString(unref(form).errors.email), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "space-y-2" }, [
                          createVNode("label", {
                            for: "subject",
                            class: "block text-sm font-medium text-gray-300"
                          }, "Subject"),
                          createVNode("div", { class: "relative" }, [
                            createVNode("div", { class: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" }, [
                              createVNode(unref(MessageCircle), { class: "h-5 w-5 text-gray-400" })
                            ]),
                            withDirectives(createVNode("input", {
                              id: "subject",
                              "onUpdate:modelValue": ($event) => unref(form).subject = $event,
                              type: "text",
                              placeholder: "What's this about?",
                              class: ["w-full pl-10 pr-4 py-3 bg-dark-400/50 border border-gray-800/50 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300", { "border-red-500": unref(form).errors.subject }]
                            }, null, 10, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).subject]
                            ])
                          ]),
                          unref(form).errors.subject ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "text-red-500 text-sm mt-1"
                          }, toDisplayString(unref(form).errors.subject), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "space-y-2" }, [
                          createVNode("label", {
                            for: "message",
                            class: "block text-sm font-medium text-gray-300"
                          }, "Message"),
                          createVNode("div", { class: "relative" }, [
                            withDirectives(createVNode("textarea", {
                              id: "message",
                              "onUpdate:modelValue": ($event) => unref(form).message = $event,
                              rows: "6",
                              placeholder: "Your message...",
                              class: ["w-full p-4 bg-dark-400/50 border border-gray-800/50 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300", { "border-red-500": unref(form).errors.message }]
                            }, null, 10, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).message]
                            ])
                          ]),
                          unref(form).errors.message ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "text-red-500 text-sm mt-1"
                          }, toDisplayString(unref(form).errors.message), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("button", {
                          type: "submit",
                          disabled: unref(form).processing,
                          class: "group relative w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg transition-all duration-300 hover:from-blue-600 hover:to-purple-600 disabled:opacity-50"
                        }, [
                          createVNode("div", { class: "absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" }),
                          !unref(form).processing ? (openBlock(), createBlock(unref(Send), {
                            key: 0,
                            class: "w-5 h-5"
                          })) : (openBlock(), createBlock(unref(Loader2), {
                            key: 1,
                            class: "w-5 h-5 animate-spin"
                          })),
                          createVNode("span", null, toDisplayString(unref(form).processing ? "Sending..." : "Send Message"), 1)
                        ], 8, ["disabled"])
                      ], 32)
                    ]),
                    createVNode("div", { class: "space-y-8" }, [
                      createVNode("div", { class: "bg-dark-500/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50" }, [
                        createVNode("h2", { class: "text-2xl font-bold text-white mb-6" }, "Quick Contact"),
                        createVNode("div", { class: "space-y-4" }, [
                          createVNode("div", { class: "flex items-center gap-4" }, [
                            createVNode("div", { class: "p-2 rounded-lg bg-blue-500/10" }, [
                              createVNode(unref(Mail), { class: "w-6 h-6 text-blue-400" })
                            ]),
                            createVNode("div", null, [
                              createVNode("p", { class: "text-sm text-gray-400" }, "Email"),
                              createVNode("p", { class: "text-white" }, "thedevrealm@gmail.com")
                            ])
                          ]),
                          createVNode("div", { class: "flex items-center gap-4" }, [
                            createVNode("div", { class: "p-2 rounded-lg bg-purple-500/10" }, [
                              createVNode(unref(Clock), { class: "w-6 h-6 text-purple-400" })
                            ]),
                            createVNode("div", null, [
                              createVNode("p", { class: "text-sm text-gray-400" }, "Response Time"),
                              createVNode("p", { class: "text-white" }, "Within 24-48 hours")
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "bg-dark-500/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50" }, [
                        createVNode("h2", { class: "text-2xl font-bold text-white mb-6" }, "Frequently Asked Questions"),
                        createVNode("div", { class: "space-y-4" }, [
                          createVNode("details", { class: "group" }, [
                            createVNode("summary", { class: "flex items-center justify-between cursor-pointer text-gray-300 hover:text-white" }, [
                              createVNode("span", null, "How long does it take to get a response?"),
                              createVNode(unref(ChevronDown), { class: "w-5 h-5 transition-transform group-open:rotate-180" })
                            ]),
                            createVNode("p", { class: "mt-2 text-gray-400" }, "We typically respond to all inquiries within 24-48 hours during business days.")
                          ]),
                          createVNode("details", { class: "group" }, [
                            createVNode("summary", { class: "flex items-center justify-between cursor-pointer text-gray-300 hover:text-white" }, [
                              createVNode("span", null, "What information should I include?"),
                              createVNode(unref(ChevronDown), { class: "w-5 h-5 transition-transform group-open:rotate-180" })
                            ]),
                            createVNode("p", { class: "mt-2 text-gray-400" }, "Please include your name, email, and a detailed description of your inquiry to help us assist you better.")
                          ])
                        ])
                      ])
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
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Pages/FrontEnd/Vendor/GameDev/Legal/Contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1d10f850"]]);
export {
  Contact as default
};
