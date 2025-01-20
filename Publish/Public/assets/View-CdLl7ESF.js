import { useSSRContext, mergeProps, computed, withCtx, unref, createTextVNode, createVNode, resolveDynamicComponent, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderVNode, ssrRenderClass } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./App-CccoNqE7.js";
import { C as CommentBox, _ as _sfc_main$4 } from "./CommentBox-CLOn1BbD.js";
import { U as UserProfile } from "./UserProfile-DKKVgthp.js";
import { M as MarkdownRenderer } from "./Markdown-D1WgnuMs.js";
import { Clock, MessageSquare, Twitter, Facebook, Link2 } from "lucide-vue-next";
import { _ as _sfc_main$3 } from "./PostBox-RDZ1qISX.js";
import { usePage } from "@inertiajs/vue3";
import "naive-ui";
import "./FlashMessage-CYVaM9mM.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./Input-BXi_X4mZ.js";
import "@headlessui/vue";
import "dompurify";
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
import "./CommentsSingle-BGRW2ED3.js";
import "markdown-it";
import "highlight.js";
const _sfc_main$1 = {
  __name: "UserSimpleDisplay",
  __ssrInlineRender: true,
  props: {
    user: {
      type: Object,
      default: () => ({
        full_name: "Anonymous",
        email: "unknown@example.com",
        avatar: "",
        create_at_diff: "unknown",
        has_subscription: false
      })
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-between items-center bg-gradient-to-br from-gray-800 via-gray-900 to-black border border-gray-700 shadow-md p-6 rounded-xl" }, _attrs))} data-v-ae732ef3><div class="flex items-center space-x-4" data-v-ae732ef3><div class="relative border-2 border-gray-700 rounded-full bg-gray-800 p-1 shadow-lg" data-v-ae732ef3><img class="w-16 h-16 rounded-full"${ssrRenderAttr("src", __props.user.avatar || "https://via.placeholder.com/64")}${ssrRenderAttr("alt", __props.user.full_name)} data-v-ae732ef3>`);
      if (__props.user.has_subscription) {
        _push(`<div class="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-gray-800 rounded-full" data-v-ae732ef3></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex flex-col" data-v-ae732ef3><span class="text-lg font-bold text-gray-100 tracking-wide" data-v-ae732ef3>${ssrInterpolate(__props.user.full_name)}</span><span class="text-sm text-gray-400" data-v-ae732ef3>${ssrInterpolate(__props.user.email)}</span><span class="text-xs text-gray-500" data-v-ae732ef3> Joined: ${ssrInterpolate(__props.user.create_at_diff)}</span></div></div><div class="flex flex-col items-end space-y-2" data-v-ae732ef3><div data-v-ae732ef3>`);
      if (__props.user.has_subscription) {
        _push(`<span class="px-4 py-2 text-sm font-semibold text-green-300 border border-green-500 bg-green-900 rounded-lg shadow-lg" data-v-ae732ef3> Active Member </span>`);
      } else {
        _push(`<span class="px-4 py-2 text-sm font-semibold text-red-300 border border-red-500 bg-red-900 rounded-lg shadow-lg" data-v-ae732ef3> Free Account </span>`);
      }
      _push(`</div><a href="#" class="inline-flex items-center text-blue-400 font-medium hover:text-blue-500 transition duration-200" data-v-ae732ef3> About Me <svg class="ml-2 w-5 h-5 text-blue-400 hover:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-v-ae732ef3><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" data-v-ae732ef3></path></svg></a></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Components/FrontEnd/User/UserSimpleDisplay.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "View",
  __ssrInlineRender: true,
  props: {
    blogPost: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const tableOfContents = computed(() => {
      const headings = [];
      const content = props.blogPost.data.content;
      const regex = /<h([1-2])[^>]*>(.*?)<\/h[1-2]>/g;
      let match;
      while ((match = regex.exec(content)) !== null) {
        const level = parseInt(match[1]);
        const text = match[2].replace(/<[^>]+>/g, "");
        const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-");
        headings.push({ level, text, id });
      }
      return headings;
    });
    const shareActions = [
      {
        label: "Share on Twitter",
        icon: Twitter,
        onClick: () => shareOnTwitter()
      },
      {
        label: "Share on Facebook",
        icon: Facebook,
        onClick: () => shareOnFacebook()
      },
      {
        label: "Copy Link",
        icon: Link2,
        onClick: () => copyLink()
      }
    ];
    const formatDate = (date) => {
      return new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    };
    const shareOnTwitter = () => {
      const text = encodeURIComponent(props.blogPost.data.title);
      const url = encodeURIComponent(window.location.href);
      window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, "_blank");
    };
    const shareOnFacebook = () => {
      const url = encodeURIComponent(window.location.href);
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank");
    };
    const copyLink = async () => {
      try {
        await navigator.clipboard.writeText(window.location.href);
      } catch (err) {
        console.error("Failed to copy link");
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$2, mergeProps({
        backgroundFooterClass: "bg-dark-100",
        headerBackground: "bg-dark-100"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B;
          if (_push2) {
            _push2(`<section class="relative min-h-[40vh] flex items-center"${_scopeId}><div class="absolute inset-0 bg-dark-200 overflow-hidden"${_scopeId}><div class="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5"${_scopeId}></div><div class="absolute inset-0 bg-[url(&#39;/grid.svg&#39;)] opacity-5"${_scopeId}></div><div class="absolute inset-0 bg-gradient-to-t from-dark-200 to-transparent"${_scopeId}></div></div><div class="relative container mx-auto px-4 py-16"${_scopeId}><div class="flex items-center gap-3 text-sm text-gray-400 mb-4"${_scopeId}><time class="flex items-center gap-1.5"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Clock), { class: "w-4 h-4" }, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate(formatDate(__props.blogPost.data.created_at))}</time><span class="w-1 h-1 rounded-full bg-gray-700"${_scopeId}></span><span class="flex items-center gap-1.5"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(MessageSquare), { class: "w-4 h-4" }, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate(__props.blogPost.data.comments_count || 0)} comments </span></div><h1 class="text-4xl md:text-5xl font-bold text-white max-w-4xl"${_scopeId}>${ssrInterpolate(__props.blogPost.data.title)}</h1><div class="mt-8 flex items-center gap-4"${_scopeId}><img${ssrRenderAttr("src", ((_a = __props.blogPost.data.user) == null ? void 0 : _a.avatar) || ((_b = __props.blogPost.data.admin) == null ? void 0 : _b.avatar))}${ssrRenderAttr("alt", ((_c = __props.blogPost.data.user) == null ? void 0 : _c.full_name) || ((_d = __props.blogPost.data.admin) == null ? void 0 : _d.full_name))} class="w-12 h-12 rounded-lg object-cover"${_scopeId}><div${_scopeId}><div class="font-medium text-white"${_scopeId}>${ssrInterpolate(((_e = __props.blogPost.data.user) == null ? void 0 : _e.full_name) || ((_f = __props.blogPost.data.admin) == null ? void 0 : _f.full_name))}</div><div class="text-sm text-gray-400"${_scopeId}>Author</div></div></div></div></section><section class="bg-dark-200"${_scopeId}><div class="container mx-auto px-4 py-12"${_scopeId}><div class="grid grid-cols-1 lg:grid-cols-12 gap-8"${_scopeId}><div class="lg:col-span-8"${_scopeId}><article class="relative overflow-hidden"${_scopeId}><div class="absolute inset-0 bg-dark-300/50 backdrop-blur-sm border border-dark-400/50 rounded-xl"${_scopeId}></div><div class="relative p-8"${_scopeId}><div class="prose prose-invert max-w-none"${_scopeId}>`);
            _push2(ssrRenderComponent(MarkdownRenderer, {
              content: __props.blogPost.data.content,
              enableHtmlParsing: ((_g = __props.blogPost.data.admin) == null ? void 0 : _g.id) ? true : false
            }, null, _parent2, _scopeId));
            if (!((_i = (_h = __props.blogPost.data) == null ? void 0 : _h.admin) == null ? void 0 : _i.id) && ((_l = (_k = (_j = unref(usePage)().props) == null ? void 0 : _j.authUserInfo) == null ? void 0 : _k.data) == null ? void 0 : _l.id) === ((_n = (_m = __props.blogPost.data) == null ? void 0 : _m.user) == null ? void 0 : _n.id)) {
              _push2(ssrRenderComponent(_sfc_main$3, {
                categories: _ctx.categories,
                "post-btn-class": "w-full btn btn-primary",
                onDisplayLogin: ($event) => _ctx.displayLogin = true,
                topitEdit: __props.blogPost.data
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Edit `);
                  } else {
                    return [
                      createTextVNode(" Edit ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="mt-8 pt-8 border-t border-dark-400/50"${_scopeId}><div class="flex flex-wrap gap-2"${_scopeId}><!--[-->`);
            ssrRenderList(["Gaming", "Tutorial", "News"], (tag) => {
              _push2(`<span class="px-3 py-1 bg-dark-400/50 rounded-full text-sm text-gray-300"${_scopeId}>${ssrInterpolate(tag)}</span>`);
            });
            _push2(`<!--]--></div></div><div class="mt-8 pt-8 border-t border-dark-400/50"${_scopeId}><h3 class="text-lg font-medium text-white mb-4"${_scopeId}>Share this article</h3><div class="flex gap-2"${_scopeId}><!--[-->`);
            ssrRenderList(shareActions, (action) => {
              _push2(`<button class="p-2 bg-dark-400/50 hover:bg-dark-400 rounded-lg transition-colors"${ssrRenderAttr("title", action.label)}${_scopeId}>`);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(action.icon), { class: "w-5 h-5 text-gray-400" }, null), _parent2, _scopeId);
              _push2(`</button>`);
            });
            _push2(`<!--]--></div></div></div></article><div class="mt-8"${_scopeId}>`);
            _push2(ssrRenderComponent(CommentBox, {
              modelId: __props.blogPost.data.id,
              modelClass: "blog"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Discussion `);
                } else {
                  return [
                    createTextVNode(" Discussion ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><aside class="lg:col-span-4 space-y-6"${_scopeId}><div class="relative overflow-hidden"${_scopeId}><div class="absolute inset-0 bg-dark-300/50 backdrop-blur-sm border border-dark-400/50 rounded-xl"${_scopeId}></div><div class="relative p-6"${_scopeId}><h3 class="text-lg font-medium text-white mb-4"${_scopeId}>About the Author</h3>`);
            if (__props.blogPost.data.admin) {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$4, {
                admin: __props.blogPost.data.admin
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else if (__props.blogPost.data.user) {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(UserProfile, {
                user: __props.blogPost.data.user
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
            if (tableOfContents.value.length) {
              _push2(`<div class="relative overflow-hidden sticky top-4"${_scopeId}><div class="absolute inset-0 bg-dark-300/50 backdrop-blur-sm border border-dark-400/50 rounded-xl"${_scopeId}></div><div class="relative p-6"${_scopeId}><h3 class="text-lg font-medium text-white mb-4"${_scopeId}>Table of Contents</h3><nav class="space-y-2"${_scopeId}><!--[-->`);
              ssrRenderList(tableOfContents.value, (heading, index) => {
                _push2(`<a${ssrRenderAttr("href", "#" + heading.id)} class="${ssrRenderClass([{ "pl-4": heading.level === 2 }, "block text-gray-400 hover:text-blue-400 transition-colors"])}"${_scopeId}>${ssrInterpolate(heading.text)}</a>`);
              });
              _push2(`<!--]--></nav></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</aside></div></div></section>`);
          } else {
            return [
              createVNode("section", { class: "relative min-h-[40vh] flex items-center" }, [
                createVNode("div", { class: "absolute inset-0 bg-dark-200 overflow-hidden" }, [
                  createVNode("div", { class: "absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5" }),
                  createVNode("div", { class: "absolute inset-0 bg-[url('/grid.svg')] opacity-5" }),
                  createVNode("div", { class: "absolute inset-0 bg-gradient-to-t from-dark-200 to-transparent" })
                ]),
                createVNode("div", { class: "relative container mx-auto px-4 py-16" }, [
                  createVNode("div", { class: "flex items-center gap-3 text-sm text-gray-400 mb-4" }, [
                    createVNode("time", { class: "flex items-center gap-1.5" }, [
                      createVNode(unref(Clock), { class: "w-4 h-4" }),
                      createTextVNode(" " + toDisplayString(formatDate(__props.blogPost.data.created_at)), 1)
                    ]),
                    createVNode("span", { class: "w-1 h-1 rounded-full bg-gray-700" }),
                    createVNode("span", { class: "flex items-center gap-1.5" }, [
                      createVNode(unref(MessageSquare), { class: "w-4 h-4" }),
                      createTextVNode(" " + toDisplayString(__props.blogPost.data.comments_count || 0) + " comments ", 1)
                    ])
                  ]),
                  createVNode("h1", { class: "text-4xl md:text-5xl font-bold text-white max-w-4xl" }, toDisplayString(__props.blogPost.data.title), 1),
                  createVNode("div", { class: "mt-8 flex items-center gap-4" }, [
                    createVNode("img", {
                      src: ((_o = __props.blogPost.data.user) == null ? void 0 : _o.avatar) || ((_p = __props.blogPost.data.admin) == null ? void 0 : _p.avatar),
                      alt: ((_q = __props.blogPost.data.user) == null ? void 0 : _q.full_name) || ((_r = __props.blogPost.data.admin) == null ? void 0 : _r.full_name),
                      class: "w-12 h-12 rounded-lg object-cover"
                    }, null, 8, ["src", "alt"]),
                    createVNode("div", null, [
                      createVNode("div", { class: "font-medium text-white" }, toDisplayString(((_s = __props.blogPost.data.user) == null ? void 0 : _s.full_name) || ((_t = __props.blogPost.data.admin) == null ? void 0 : _t.full_name)), 1),
                      createVNode("div", { class: "text-sm text-gray-400" }, "Author")
                    ])
                  ])
                ])
              ]),
              createVNode("section", { class: "bg-dark-200" }, [
                createVNode("div", { class: "container mx-auto px-4 py-12" }, [
                  createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-12 gap-8" }, [
                    createVNode("div", { class: "lg:col-span-8" }, [
                      createVNode("article", { class: "relative overflow-hidden" }, [
                        createVNode("div", { class: "absolute inset-0 bg-dark-300/50 backdrop-blur-sm border border-dark-400/50 rounded-xl" }),
                        createVNode("div", { class: "relative p-8" }, [
                          createVNode("div", { class: "prose prose-invert max-w-none" }, [
                            createVNode(MarkdownRenderer, {
                              content: __props.blogPost.data.content,
                              enableHtmlParsing: ((_u = __props.blogPost.data.admin) == null ? void 0 : _u.id) ? true : false
                            }, null, 8, ["content", "enableHtmlParsing"]),
                            !((_w = (_v = __props.blogPost.data) == null ? void 0 : _v.admin) == null ? void 0 : _w.id) && ((_z = (_y = (_x = unref(usePage)().props) == null ? void 0 : _x.authUserInfo) == null ? void 0 : _y.data) == null ? void 0 : _z.id) === ((_B = (_A = __props.blogPost.data) == null ? void 0 : _A.user) == null ? void 0 : _B.id) ? (openBlock(), createBlock(_sfc_main$3, {
                              key: 0,
                              categories: _ctx.categories,
                              "post-btn-class": "w-full btn btn-primary",
                              onDisplayLogin: ($event) => _ctx.displayLogin = true,
                              topitEdit: __props.blogPost.data
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Edit ")
                              ]),
                              _: 1
                            }, 8, ["categories", "onDisplayLogin", "topitEdit"])) : createCommentVNode("", true)
                          ]),
                          createVNode("div", { class: "mt-8 pt-8 border-t border-dark-400/50" }, [
                            createVNode("div", { class: "flex flex-wrap gap-2" }, [
                              (openBlock(), createBlock(Fragment, null, renderList(["Gaming", "Tutorial", "News"], (tag) => {
                                return createVNode("span", {
                                  key: tag,
                                  class: "px-3 py-1 bg-dark-400/50 rounded-full text-sm text-gray-300"
                                }, toDisplayString(tag), 1);
                              }), 64))
                            ])
                          ]),
                          createVNode("div", { class: "mt-8 pt-8 border-t border-dark-400/50" }, [
                            createVNode("h3", { class: "text-lg font-medium text-white mb-4" }, "Share this article"),
                            createVNode("div", { class: "flex gap-2" }, [
                              (openBlock(), createBlock(Fragment, null, renderList(shareActions, (action) => {
                                return createVNode("button", {
                                  key: action.label,
                                  onClick: action.onClick,
                                  class: "p-2 bg-dark-400/50 hover:bg-dark-400 rounded-lg transition-colors",
                                  title: action.label
                                }, [
                                  (openBlock(), createBlock(resolveDynamicComponent(action.icon), { class: "w-5 h-5 text-gray-400" }))
                                ], 8, ["onClick", "title"]);
                              }), 64))
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "mt-8" }, [
                        createVNode(CommentBox, {
                          modelId: __props.blogPost.data.id,
                          modelClass: "blog"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Discussion ")
                          ]),
                          _: 1
                        }, 8, ["modelId"])
                      ])
                    ]),
                    createVNode("aside", { class: "lg:col-span-4 space-y-6" }, [
                      createVNode("div", { class: "relative overflow-hidden" }, [
                        createVNode("div", { class: "absolute inset-0 bg-dark-300/50 backdrop-blur-sm border border-dark-400/50 rounded-xl" }),
                        createVNode("div", { class: "relative p-6" }, [
                          createVNode("h3", { class: "text-lg font-medium text-white mb-4" }, "About the Author"),
                          __props.blogPost.data.admin ? (openBlock(), createBlock("div", { key: 0 }, [
                            createVNode(_sfc_main$4, {
                              admin: __props.blogPost.data.admin
                            }, null, 8, ["admin"])
                          ])) : __props.blogPost.data.user ? (openBlock(), createBlock("div", { key: 1 }, [
                            createVNode(UserProfile, {
                              user: __props.blogPost.data.user
                            }, null, 8, ["user"])
                          ])) : createCommentVNode("", true)
                        ])
                      ]),
                      tableOfContents.value.length ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "relative overflow-hidden sticky top-4"
                      }, [
                        createVNode("div", { class: "absolute inset-0 bg-dark-300/50 backdrop-blur-sm border border-dark-400/50 rounded-xl" }),
                        createVNode("div", { class: "relative p-6" }, [
                          createVNode("h3", { class: "text-lg font-medium text-white mb-4" }, "Table of Contents"),
                          createVNode("nav", { class: "space-y-2" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(tableOfContents.value, (heading, index) => {
                              return openBlock(), createBlock("a", {
                                key: index,
                                href: "#" + heading.id,
                                class: ["block text-gray-400 hover:text-blue-400 transition-colors", { "pl-4": heading.level === 2 }]
                              }, toDisplayString(heading.text), 11, ["href"]);
                            }), 128))
                          ])
                        ])
                      ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Pages/FrontEnd/Vendor/GameDev/Blog/View.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
