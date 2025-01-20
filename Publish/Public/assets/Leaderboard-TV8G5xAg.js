import { computed, mergeProps, withCtx, unref, createVNode, resolveDynamicComponent, openBlock, createBlock, Fragment, renderList, toDisplayString, createTextVNode, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrRenderVNode, ssrInterpolate, ssrRenderClass, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./App-CccoNqE7.js";
import { Crown, Users, Star, Trophy, User, Swords } from "lucide-vue-next";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "naive-ui";
import "./FlashMessage-CYVaM9mM.js";
import "@inertiajs/vue3";
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
import "../Frontend_js.js";
import "./index-koWuargk.js";
import "./Money-B84zS3T2.js";
import "./SeoManager-ytA6mF8s.js";
const _sfc_main = {
  __name: "Leaderboard",
  __ssrInlineRender: true,
  props: {
    leaderboardData: {
      type: Array,
      required: true
    },
    currentUserRank: {
      type: Object,
      default: null
    },
    isUserAuth: {
      type: Boolean,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const stats = computed(() => {
      var _a;
      return [
        {
          label: "Top Player",
          value: ((_a = props.leaderboardData[0]) == null ? void 0 : _a.name) || "No Players",
          icon: Crown,
          color: "text-yellow-400"
        },
        {
          label: "Total Players",
          value: formatNumber(props.leaderboardData.length),
          icon: Users,
          color: "text-purple-400"
        },
        {
          label: "Highest Level",
          value: Math.max(...props.leaderboardData.map((p) => p.level)),
          icon: Star,
          color: "text-blue-400"
        }
      ];
    });
    const getRankStyle = (index) => {
      const styles = {
        0: { bg: "bg-yellow-400/20", text: "text-yellow-400" },
        1: { bg: "bg-gray-400/20", text: "text-gray-400" },
        2: { bg: "bg-orange-400/20", text: "text-orange-400" }
      };
      return styles[index] || { bg: "bg-dark-700/50", text: "text-gray-400" };
    };
    const formatNumber = (num) => {
      return new Intl.NumberFormat().format(num);
    };
    const getPlayerClass = (level) => {
      if (level >= 50) return "Arch Mage";
      if (level >= 40) return "Battle Sage";
      if (level >= 30) return "Code Warrior";
      if (level >= 20) return "Script Knight";
      if (level >= 10) return "Dev Apprentice";
      return "Novice";
    };
    const getClassColor = (className) => {
      const colors = {
        "Arch Mage": "text-purple-400",
        "Battle Sage": "text-blue-400",
        "Code Warrior": "text-red-400",
        "Script Knight": "text-emerald-400",
        "Dev Apprentice": "text-cyan-400",
        "Novice": "text-gray-400"
      };
      return colors[className] || "text-gray-400";
    };
    const getClassGradient = (tier) => {
      const gradients = {
        "Legend": "from-yellow-500/20 to-orange-500/20",
        "Master": "from-purple-500/20 to-pink-500/20",
        "Diamond": "from-cyan-500/20 to-blue-500/20",
        "Platinum": "from-emerald-500/20 to-green-500/20",
        "Gold": "from-yellow-500/20 to-amber-500/20",
        "Silver": "from-gray-400/20 to-slate-500/20",
        "Bronze": "from-orange-500/20 to-red-500/20",
        "Rookie": "from-gray-600/20 to-gray-700/20"
      };
      return gradients[tier] || "from-gray-600/20 to-gray-700/20";
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        backgroundFooterClass: "bg-dark-900",
        headerBackground: "bg-dark-900"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="min-h-screen bg-dark-900 relative" data-v-4ab3ae6d${_scopeId}><div class="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.05),rgba(15,23,42,0))]" data-v-4ab3ae6d${_scopeId}></div><div class="fixed inset-0" data-v-4ab3ae6d${_scopeId}><!--[-->`);
            ssrRenderList(20, (n) => {
              _push2(`<div class="particle absolute w-1 h-1 bg-blue-500/20 rounded-full animate-floating" style="${ssrRenderStyle({
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              })}" data-v-4ab3ae6d${_scopeId}></div>`);
            });
            _push2(`<!--]--></div><div class="relative pt-20 pb-10 text-center" data-v-4ab3ae6d${_scopeId}><div class="relative z-10 mb-8" data-v-4ab3ae6d${_scopeId}><div class="relative inline-block" data-v-4ab3ae6d${_scopeId}><div class="absolute -inset-6 bg-yellow-400/20 rounded-full blur-lg animate-pulse-slow" data-v-4ab3ae6d${_scopeId}></div>`);
            _push2(ssrRenderComponent(unref(Trophy), { class: "w-16 h-16 text-yellow-400 relative z-10 animate-bounce-gentle" }, null, _parent2, _scopeId));
            _push2(`</div></div><h1 class="text-6xl font-bold tracking-tight mb-4" data-v-4ab3ae6d${_scopeId}><span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 animate-shimmer" data-v-4ab3ae6d${_scopeId}> Champions Arena </span></h1><p class="text-gray-400 text-lg max-w-2xl mx-auto" data-v-4ab3ae6d${_scopeId}>Where legends rise and heroes compete</p></div><div class="max-w-6xl mx-auto px-4 py-8" data-v-4ab3ae6d${_scopeId}><div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8" data-v-4ab3ae6d${_scopeId}><!--[-->`);
            ssrRenderList(stats.value, (stat, index) => {
              _push2(`<div class="bg-dark-800/50 rounded-lg p-4 border border-gray-700/50 group hover:border-blue-500/50 transition-all duration-300" data-v-4ab3ae6d${_scopeId}><div class="flex items-center gap-3" data-v-4ab3ae6d${_scopeId}><div class="p-2 rounded bg-dark-700/50 group-hover:bg-blue-500/10 transition-colors duration-300" data-v-4ab3ae6d${_scopeId}>`);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(stat.icon), {
                class: ["w-5 h-5 transition-colors duration-300", stat.color]
              }, null), _parent2, _scopeId);
              _push2(`</div><div data-v-4ab3ae6d${_scopeId}><p class="text-sm text-gray-400" data-v-4ab3ae6d${_scopeId}>${ssrInterpolate(stat.label)}</p><p class="text-lg font-bold text-white" data-v-4ab3ae6d${_scopeId}>${ssrInterpolate(stat.value)}</p></div></div></div>`);
            });
            _push2(`<!--]--></div><div class="bg-dark-800/50 rounded-xl border border-gray-700/50 overflow-hidden relative group" data-v-4ab3ae6d${_scopeId}><div class="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" data-v-4ab3ae6d${_scopeId}></div><div class="relative" data-v-4ab3ae6d${_scopeId}><div class="flex items-center justify-between p-4 border-b border-gray-700/50" data-v-4ab3ae6d${_scopeId}><h2 class="text-xl font-bold text-white flex items-center gap-2" data-v-4ab3ae6d${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Crown), { class: "w-5 h-5 text-yellow-400" }, null, _parent2, _scopeId));
            _push2(` Top Champions </h2><div class="flex items-center gap-4 text-sm text-gray-400" data-v-4ab3ae6d${_scopeId}><span class="flex items-center gap-1" data-v-4ab3ae6d${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Users), { class: "w-4 h-4" }, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate(formatNumber(__props.leaderboardData.length))} Players </span></div></div><div class="overflow-x-auto" data-v-4ab3ae6d${_scopeId}><table class="w-full" data-v-4ab3ae6d${_scopeId}><thead class="bg-dark-700/50" data-v-4ab3ae6d${_scopeId}><tr data-v-4ab3ae6d${_scopeId}><th scope="col" class="px-4 py-3 text-left text-sm font-medium text-gray-400" data-v-4ab3ae6d${_scopeId}>Rank</th><th scope="col" class="px-4 py-3 text-left text-sm font-medium text-gray-400" data-v-4ab3ae6d${_scopeId}>Player</th><th scope="col" class="px-4 py-3 text-left text-sm font-medium text-gray-400" data-v-4ab3ae6d${_scopeId}>Level</th><th scope="col" class="px-4 py-3 text-left text-sm font-medium text-gray-400" data-v-4ab3ae6d${_scopeId}>Power</th></tr></thead><tbody data-v-4ab3ae6d${_scopeId}><!--[-->`);
            ssrRenderList(__props.leaderboardData, (player, index) => {
              var _a;
              _push2(`<tr class="${ssrRenderClass([{ "bg-blue-500/10": player.id === ((_a = __props.currentUserRank) == null ? void 0 : _a.id) }, "group/row border-b border-gray-700/50 last:border-0 hover:bg-blue-500/5 transition-colors duration-200"])}" data-v-4ab3ae6d${_scopeId}><td class="px-4 py-3" data-v-4ab3ae6d${_scopeId}><div class="flex items-center" data-v-4ab3ae6d${_scopeId}><div class="relative" data-v-4ab3ae6d${_scopeId}><div class="${ssrRenderClass([
                "w-8 h-8 rounded flex items-center justify-center font-bold",
                getRankStyle(index).bg,
                { "animate-pulse-slow": index < 3 }
              ])}" data-v-4ab3ae6d${_scopeId}><span class="${ssrRenderClass(getRankStyle(index).text)}" data-v-4ab3ae6d${_scopeId}>${ssrInterpolate(index + 1)}</span></div>`);
              if (index === 0) {
                _push2(ssrRenderComponent(unref(Crown), { class: "absolute -top-2 -right-2 w-4 h-4 text-yellow-400 animate-bounce-slow" }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div></td><td class="px-4 py-3" data-v-4ab3ae6d${_scopeId}><div class="flex items-center gap-3" data-v-4ab3ae6d${_scopeId}><div class="relative" data-v-4ab3ae6d${_scopeId}><div class="${ssrRenderClass([getClassGradient(player.tier), "absolute -inset-0.5 rounded bg-gradient-to-r opacity-75"])}" data-v-4ab3ae6d${_scopeId}></div><div class="w-10 h-10 rounded bg-dark-700 relative overflow-hidden group-hover/row:scale-110 transition-transform duration-300" data-v-4ab3ae6d${_scopeId}>`);
              if (player.avatar) {
                _push2(`<img${ssrRenderAttr("src", player.avatar)}${ssrRenderAttr("alt", player.name)} class="w-full h-full object-cover" data-v-4ab3ae6d${_scopeId}>`);
              } else {
                _push2(ssrRenderComponent(unref(User), { class: "w-6 h-6 text-gray-400 absolute inset-0 m-auto" }, null, _parent2, _scopeId));
              }
              _push2(`</div></div><div data-v-4ab3ae6d${_scopeId}><div class="font-medium text-white group-hover/row:text-blue-400 transition-colors duration-200" data-v-4ab3ae6d${_scopeId}>${ssrInterpolate(player.name)}</div><div class="${ssrRenderClass([getClassColor(getPlayerClass(player.level)), "text-sm"])}" data-v-4ab3ae6d${_scopeId}>${ssrInterpolate(getPlayerClass(player.level))}</div></div></div></td><td class="px-4 py-3" data-v-4ab3ae6d${_scopeId}><div class="flex items-center gap-2" data-v-4ab3ae6d${_scopeId}><div class="relative" data-v-4ab3ae6d${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Star), { class: "w-5 h-5 text-yellow-400" }, null, _parent2, _scopeId));
              _push2(`<div class="absolute inset-0 animate-ping-slow opacity-50" data-v-4ab3ae6d${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Star), { class: "w-5 h-5 text-yellow-400" }, null, _parent2, _scopeId));
              _push2(`</div></div><span class="text-white font-bold" data-v-4ab3ae6d${_scopeId}>${ssrInterpolate(player.level)}</span></div></td><td class="px-4 py-3" data-v-4ab3ae6d${_scopeId}><div class="flex items-center gap-2" data-v-4ab3ae6d${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Swords), { class: "w-5 h-5 text-red-400" }, null, _parent2, _scopeId));
              _push2(`<span class="text-white font-bold group-hover/row:text-red-400 transition-colors duration-200" data-v-4ab3ae6d${_scopeId}>${ssrInterpolate(formatNumber(player.score))}</span></div></td></tr>`);
            });
            _push2(`<!--]--></tbody></table></div>`);
            if (__props.currentUserRank && __props.isUserAuth) {
              _push2(`<div class="border-t border-gray-700/50 bg-dark-700/50 p-4" data-v-4ab3ae6d${_scopeId}><div class="flex items-center justify-between" data-v-4ab3ae6d${_scopeId}><div class="flex items-center gap-6" data-v-4ab3ae6d${_scopeId}><div class="text-sm text-gray-400" data-v-4ab3ae6d${_scopeId}>Your Rank:</div><div class="text-2xl font-bold text-white" data-v-4ab3ae6d${_scopeId}>#${ssrInterpolate(__props.currentUserRank.rank)}</div><div class="text-sm text-gray-400" data-v-4ab3ae6d${_scopeId}>Level:</div><div class="text-2xl font-bold text-white" data-v-4ab3ae6d${_scopeId}>${ssrInterpolate(__props.currentUserRank.level)}</div></div><div class="flex items-center gap-2" data-v-4ab3ae6d${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Swords), { class: "w-5 h-5 text-red-400" }, null, _parent2, _scopeId));
              _push2(`<span class="text-2xl font-bold text-white" data-v-4ab3ae6d${_scopeId}>${ssrInterpolate(formatNumber(__props.currentUserRank.score))}</span></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "min-h-screen bg-dark-900 relative" }, [
                createVNode("div", { class: "fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.05),rgba(15,23,42,0))]" }),
                createVNode("div", { class: "fixed inset-0" }, [
                  (openBlock(), createBlock(Fragment, null, renderList(20, (n) => {
                    return createVNode("div", {
                      key: n,
                      class: "particle absolute w-1 h-1 bg-blue-500/20 rounded-full animate-floating",
                      style: {
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 3}s`,
                        animationDuration: `${3 + Math.random() * 2}s`
                      }
                    }, null, 4);
                  }), 64))
                ]),
                createVNode("div", { class: "relative pt-20 pb-10 text-center" }, [
                  createVNode("div", { class: "relative z-10 mb-8" }, [
                    createVNode("div", { class: "relative inline-block" }, [
                      createVNode("div", { class: "absolute -inset-6 bg-yellow-400/20 rounded-full blur-lg animate-pulse-slow" }),
                      createVNode(unref(Trophy), { class: "w-16 h-16 text-yellow-400 relative z-10 animate-bounce-gentle" })
                    ])
                  ]),
                  createVNode("h1", { class: "text-6xl font-bold tracking-tight mb-4" }, [
                    createVNode("span", { class: "text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 animate-shimmer" }, " Champions Arena ")
                  ]),
                  createVNode("p", { class: "text-gray-400 text-lg max-w-2xl mx-auto" }, "Where legends rise and heroes compete")
                ]),
                createVNode("div", { class: "max-w-6xl mx-auto px-4 py-8" }, [
                  createVNode("div", { class: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-8" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(stats.value, (stat, index) => {
                      return openBlock(), createBlock("div", {
                        key: index,
                        class: "bg-dark-800/50 rounded-lg p-4 border border-gray-700/50 group hover:border-blue-500/50 transition-all duration-300"
                      }, [
                        createVNode("div", { class: "flex items-center gap-3" }, [
                          createVNode("div", { class: "p-2 rounded bg-dark-700/50 group-hover:bg-blue-500/10 transition-colors duration-300" }, [
                            (openBlock(), createBlock(resolveDynamicComponent(stat.icon), {
                              class: ["w-5 h-5 transition-colors duration-300", stat.color]
                            }, null, 8, ["class"]))
                          ]),
                          createVNode("div", null, [
                            createVNode("p", { class: "text-sm text-gray-400" }, toDisplayString(stat.label), 1),
                            createVNode("p", { class: "text-lg font-bold text-white" }, toDisplayString(stat.value), 1)
                          ])
                        ])
                      ]);
                    }), 128))
                  ]),
                  createVNode("div", { class: "bg-dark-800/50 rounded-xl border border-gray-700/50 overflow-hidden relative group" }, [
                    createVNode("div", { class: "absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" }),
                    createVNode("div", { class: "relative" }, [
                      createVNode("div", { class: "flex items-center justify-between p-4 border-b border-gray-700/50" }, [
                        createVNode("h2", { class: "text-xl font-bold text-white flex items-center gap-2" }, [
                          createVNode(unref(Crown), { class: "w-5 h-5 text-yellow-400" }),
                          createTextVNode(" Top Champions ")
                        ]),
                        createVNode("div", { class: "flex items-center gap-4 text-sm text-gray-400" }, [
                          createVNode("span", { class: "flex items-center gap-1" }, [
                            createVNode(unref(Users), { class: "w-4 h-4" }),
                            createTextVNode(" " + toDisplayString(formatNumber(__props.leaderboardData.length)) + " Players ", 1)
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "overflow-x-auto" }, [
                        createVNode("table", { class: "w-full" }, [
                          createVNode("thead", { class: "bg-dark-700/50" }, [
                            createVNode("tr", null, [
                              createVNode("th", {
                                scope: "col",
                                class: "px-4 py-3 text-left text-sm font-medium text-gray-400"
                              }, "Rank"),
                              createVNode("th", {
                                scope: "col",
                                class: "px-4 py-3 text-left text-sm font-medium text-gray-400"
                              }, "Player"),
                              createVNode("th", {
                                scope: "col",
                                class: "px-4 py-3 text-left text-sm font-medium text-gray-400"
                              }, "Level"),
                              createVNode("th", {
                                scope: "col",
                                class: "px-4 py-3 text-left text-sm font-medium text-gray-400"
                              }, "Power")
                            ])
                          ]),
                          createVNode("tbody", null, [
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.leaderboardData, (player, index) => {
                              var _a;
                              return openBlock(), createBlock("tr", {
                                key: player.id,
                                class: ["group/row border-b border-gray-700/50 last:border-0 hover:bg-blue-500/5 transition-colors duration-200", { "bg-blue-500/10": player.id === ((_a = __props.currentUserRank) == null ? void 0 : _a.id) }]
                              }, [
                                createVNode("td", { class: "px-4 py-3" }, [
                                  createVNode("div", { class: "flex items-center" }, [
                                    createVNode("div", { class: "relative" }, [
                                      createVNode("div", {
                                        class: [
                                          "w-8 h-8 rounded flex items-center justify-center font-bold",
                                          getRankStyle(index).bg,
                                          { "animate-pulse-slow": index < 3 }
                                        ]
                                      }, [
                                        createVNode("span", {
                                          class: getRankStyle(index).text
                                        }, toDisplayString(index + 1), 3)
                                      ], 2),
                                      index === 0 ? (openBlock(), createBlock(unref(Crown), {
                                        key: 0,
                                        class: "absolute -top-2 -right-2 w-4 h-4 text-yellow-400 animate-bounce-slow"
                                      })) : createCommentVNode("", true)
                                    ])
                                  ])
                                ]),
                                createVNode("td", { class: "px-4 py-3" }, [
                                  createVNode("div", { class: "flex items-center gap-3" }, [
                                    createVNode("div", { class: "relative" }, [
                                      createVNode("div", {
                                        class: ["absolute -inset-0.5 rounded bg-gradient-to-r opacity-75", getClassGradient(player.tier)]
                                      }, null, 2),
                                      createVNode("div", { class: "w-10 h-10 rounded bg-dark-700 relative overflow-hidden group-hover/row:scale-110 transition-transform duration-300" }, [
                                        player.avatar ? (openBlock(), createBlock("img", {
                                          key: 0,
                                          src: player.avatar,
                                          alt: player.name,
                                          class: "w-full h-full object-cover"
                                        }, null, 8, ["src", "alt"])) : (openBlock(), createBlock(unref(User), {
                                          key: 1,
                                          class: "w-6 h-6 text-gray-400 absolute inset-0 m-auto"
                                        }))
                                      ])
                                    ]),
                                    createVNode("div", null, [
                                      createVNode("div", { class: "font-medium text-white group-hover/row:text-blue-400 transition-colors duration-200" }, toDisplayString(player.name), 1),
                                      createVNode("div", {
                                        class: ["text-sm", getClassColor(getPlayerClass(player.level))]
                                      }, toDisplayString(getPlayerClass(player.level)), 3)
                                    ])
                                  ])
                                ]),
                                createVNode("td", { class: "px-4 py-3" }, [
                                  createVNode("div", { class: "flex items-center gap-2" }, [
                                    createVNode("div", { class: "relative" }, [
                                      createVNode(unref(Star), { class: "w-5 h-5 text-yellow-400" }),
                                      createVNode("div", { class: "absolute inset-0 animate-ping-slow opacity-50" }, [
                                        createVNode(unref(Star), { class: "w-5 h-5 text-yellow-400" })
                                      ])
                                    ]),
                                    createVNode("span", { class: "text-white font-bold" }, toDisplayString(player.level), 1)
                                  ])
                                ]),
                                createVNode("td", { class: "px-4 py-3" }, [
                                  createVNode("div", { class: "flex items-center gap-2" }, [
                                    createVNode(unref(Swords), { class: "w-5 h-5 text-red-400" }),
                                    createVNode("span", { class: "text-white font-bold group-hover/row:text-red-400 transition-colors duration-200" }, toDisplayString(formatNumber(player.score)), 1)
                                  ])
                                ])
                              ], 2);
                            }), 128))
                          ])
                        ])
                      ]),
                      __props.currentUserRank && __props.isUserAuth ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "border-t border-gray-700/50 bg-dark-700/50 p-4"
                      }, [
                        createVNode("div", { class: "flex items-center justify-between" }, [
                          createVNode("div", { class: "flex items-center gap-6" }, [
                            createVNode("div", { class: "text-sm text-gray-400" }, "Your Rank:"),
                            createVNode("div", { class: "text-2xl font-bold text-white" }, "#" + toDisplayString(__props.currentUserRank.rank), 1),
                            createVNode("div", { class: "text-sm text-gray-400" }, "Level:"),
                            createVNode("div", { class: "text-2xl font-bold text-white" }, toDisplayString(__props.currentUserRank.level), 1)
                          ]),
                          createVNode("div", { class: "flex items-center gap-2" }, [
                            createVNode(unref(Swords), { class: "w-5 h-5 text-red-400" }),
                            createVNode("span", { class: "text-2xl font-bold text-white" }, toDisplayString(formatNumber(__props.currentUserRank.score)), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Pages/FrontEnd/Vendor/GameDev/Legal/Leaderboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Leaderboard = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4ab3ae6d"]]);
export {
  Leaderboard as default
};
