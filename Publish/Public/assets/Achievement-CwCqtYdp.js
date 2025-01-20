import { defineComponent, ref, onMounted, mergeProps, withCtx, unref, createVNode, createTextVNode, openBlock, createBlock, toDisplayString, createCommentVNode, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { U as UserProfile } from "./UserProfile-DKKVgthp.js";
import _sfc_main$2 from "./QRShareModal-BqGXQ-jw.js";
import AchievementCard from "./AchievementCard-CGJsBAB0.js";
import AchievementModal from "./AchievementModal-DGU2HWVJ.js";
import { Clock, Trophy, Rocket, Star, Unlock, Code, Target, Zap, Anchor, Battery, Bell, BookOpen, Briefcase, Cake, Camera, Coffee, Compass, Cpu, Drill, Flame, Gamepad, Gift, Globe, Layers, Leaf, MousePointer, Mountain, Music, Package, Puzzle, Radio, Shield, Smile, Sunrise, TreePine, Umbrella, Watch } from "lucide-vue-next";
import { _ as _sfc_main$1 } from "./App-CccoNqE7.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@inertiajs/vue3";
import "@chenfengyuan/vue-qrcode";
import "canvas-confetti";
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
import "../Frontend_js.js";
import "./index-koWuargk.js";
import "./Money-B84zS3T2.js";
import "./SeoManager-ytA6mF8s.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Achievement",
  __ssrInlineRender: true,
  props: {
    user: {
      type: Object,
      default: () => ({})
    },
    achievements: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const props = __props;
    const selectedAchievement = ref(null);
    const iconMapping = {
      "rocket": Rocket,
      "code": Code,
      "award": Target,
      "trophy": Star,
      "zap": Zap,
      "anchor": Anchor,
      "battery": Battery,
      "bell": Bell,
      "book-open": BookOpen,
      "briefcase": Briefcase,
      "cake": Cake,
      "camera": Camera,
      "coffee": Coffee,
      "compass": Compass,
      "cpu": Cpu,
      "drill": Drill,
      "flame": Flame,
      "gamepad": Gamepad,
      "gift": Gift,
      "globe": Globe,
      "layers": Layers,
      "leaf": Leaf,
      "mouse-pointer": MousePointer,
      "mountain": Mountain,
      "music": Music,
      "package": Package,
      "puzzle": Puzzle,
      "radio": Radio,
      "shield": Shield,
      "smile": Smile,
      "sunrise": Sunrise,
      "tree": TreePine,
      "umbrella": Umbrella,
      "watch": Watch
    };
    const isAchievementUnlocked = (achievement) => {
      return props.user.data.achievements.some(
        (achievedItem) => achievedItem.id === achievement.id
      );
    };
    const getAchievementProgress = (achievement) => {
      if (isAchievementUnlocked(achievement)) return 100;
      if (achievement.calculateProgress) {
        return achievement.calculateProgress(props.user.data);
      }
      const currentLevel = props.user.data.level;
      const levelRequirement = achievement.level_requirement;
      if (currentLevel >= levelRequirement) return 100;
      return Math.min(currentLevel / levelRequirement * 100, 99);
    };
    const openAchievementModal = (achievement) => {
      selectedAchievement.value = achievement;
    };
    const closeAchievementModal = () => {
      selectedAchievement.value = null;
    };
    const profileUrl = ref(null);
    onMounted(() => {
      const username = props.user.data.username;
      const url = window.location.href;
      const newUrl = `${url}/${username}`;
      window.history.pushState({ path: newUrl }, "", newUrl);
      if (username) {
        profileUrl.value = `${window.location.origin}/profile/achievements/${username}`;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        "background-footer-class": "bg-dark-100",
        "header-background": "bg-dark-100"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f;
          if (_push2) {
            _push2(`<div class="achievements-container max-w-6xl mx-auto px-4 py-8 relative" data-v-b6076569${_scopeId}><div class="absolute inset-0 pointer-events-none overflow-hidden z-0" data-v-b6076569${_scopeId}><div class="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-blue-900/30 to-transparent" data-v-b6076569${_scopeId}></div><div class="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-purple-900/30 to-transparent" data-v-b6076569${_scopeId}></div><div class="absolute inset-0 opacity-10 bg-[length:100px_100px]" style="${ssrRenderStyle({ "background-image": "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),\n                        linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)" })}" data-v-b6076569${_scopeId}></div></div>`);
            _push2(ssrRenderComponent(UserProfile, {
              user: props.user
            }, null, _parent2, _scopeId));
            _push2(`<div class="relative z-10 mt-12 mb-12" data-v-b6076569${_scopeId}><div class="bg-dark-500/90 backdrop-blur-sm rounded-3xl border border-dark-400/50 p-8 shadow-xl overflow-hidden" data-v-b6076569${_scopeId}><div class="absolute inset-0 opacity-5" data-v-b6076569${_scopeId}><div class="w-full h-full" style="${ssrRenderStyle({ "background-image": "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)", "background-size": "24px 24px" })}" data-v-b6076569${_scopeId}></div></div><h2 class="text-4xl font-extralight tracking-tight text-center mb-8 text-white/90 relative" data-v-b6076569${_scopeId}> Player <span class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600" data-v-b6076569${_scopeId}>Statistics</span></h2>`);
            if ((_c = (_b = (_a = props.user) == null ? void 0 : _a.data) == null ? void 0 : _b.subscription) == null ? void 0 : _c.status) {
              _push2(`<div class="grid md:grid-cols-3 gap-6" data-v-b6076569${_scopeId}><div class="bg-dark-600/50 rounded-2xl border border-dark-400/30 p-6 transform transition-all duration-300 hover:scale-102 hover:border-purple-500/30" data-v-b6076569${_scopeId}><h3 class="text-lg font-semibold text-white/90 flex items-center gap-2" data-v-b6076569${_scopeId}><div class="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center" data-v-b6076569${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Clock), { class: "w-5 h-5 text-blue-400" }, null, _parent2, _scopeId));
              _push2(`</div> Account </h3><div class="space-y-3" data-v-b6076569${_scopeId}><div class="flex items-center justify-between text-sm text-white/70 py-2 border-b border-dark-400/30" data-v-b6076569${_scopeId}><span data-v-b6076569${_scopeId}>Joined:</span><span class="font-medium text-purple-400" data-v-b6076569${_scopeId}>${ssrInterpolate(props.user.data.create_at_diff)}</span></div><div class="flex items-center justify-between text-sm text-white/70 py-2 border-b border-dark-400/30" data-v-b6076569${_scopeId}><span data-v-b6076569${_scopeId}>Email:</span><span class="font-medium text-blue-400 truncate ml-2 max-w-[180px]" data-v-b6076569${_scopeId}>${ssrInterpolate(props.user.data.email)}</span></div><div class="flex items-center justify-between text-sm text-white/70 py-2" data-v-b6076569${_scopeId}><span data-v-b6076569${_scopeId}>Achievements:</span><div class="flex items-center gap-2" data-v-b6076569${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Trophy), { class: "w-4 h-4 text-yellow-400" }, null, _parent2, _scopeId));
              _push2(`<span class="font-medium text-yellow-400" data-v-b6076569${_scopeId}>${ssrInterpolate(props.user.data.achievement_count)}</span></div></div></div></div><div class="bg-dark-600/50 rounded-2xl border border-dark-400/30 p-6 transform transition-all duration-300 hover:scale-102 hover:border-emerald-500/30" data-v-b6076569${_scopeId}><div class="flex items-center justify-between mb-4" data-v-b6076569${_scopeId}><h3 class="text-lg font-semibold text-white/90 flex items-center gap-2" data-v-b6076569${_scopeId}><div class="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500/20 to-blue-500/20 flex items-center justify-center" data-v-b6076569${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Rocket), { class: "w-5 h-5 text-emerald-400" }, null, _parent2, _scopeId));
              _push2(`</div> Progress </h3>`);
              _push2(ssrRenderComponent(unref(Star), { class: "w-5 h-5 text-yellow-400" }, null, _parent2, _scopeId));
              _push2(`</div><div class="space-y-4" data-v-b6076569${_scopeId}><div data-v-b6076569${_scopeId}><div class="flex justify-between text-sm text-white/70 mb-2" data-v-b6076569${_scopeId}><span data-v-b6076569${_scopeId}>Current Level</span><span class="font-medium text-emerald-400" data-v-b6076569${_scopeId}>${ssrInterpolate(props.user.data.level)}</span></div><div class="bg-dark-700 rounded-full h-2 overflow-hidden" data-v-b6076569${_scopeId}><div class="bg-gradient-to-r from-emerald-500 to-blue-500 h-full rounded-full transition-all duration-500" style="${ssrRenderStyle({
                width: `${props.user.data.xp / props.user.data.next_level_xp * 100}%`
              })}" data-v-b6076569${_scopeId}></div></div><div class="flex justify-between text-xs text-white/50 mt-1" data-v-b6076569${_scopeId}><span data-v-b6076569${_scopeId}>${ssrInterpolate(props.user.data.xp)} XP</span><span data-v-b6076569${_scopeId}>${ssrInterpolate(props.user.data.next_level_xp)} XP</span></div></div><div data-v-b6076569${_scopeId}><div class="flex justify-between text-sm text-white/70 mb-2" data-v-b6076569${_scopeId}><span data-v-b6076569${_scopeId}>Total Experience</span><span class="font-medium text-blue-400" data-v-b6076569${_scopeId}>${ssrInterpolate(props.user.data.total_xp)}</span></div><div class="bg-dark-700 rounded-full h-1 overflow-hidden" data-v-b6076569${_scopeId}><div class="bg-gradient-to-r from-blue-500 to-purple-500 h-full rounded-full w-full" data-v-b6076569${_scopeId}></div></div></div><div class="flex gap-2 mt-4" data-v-b6076569${_scopeId}><div class="flex-1 bg-dark-700/50 rounded-full py-1 px-3 text-center" data-v-b6076569${_scopeId}><span class="text-xs text-white/50" data-v-b6076569${_scopeId}>Rank</span><div class="text-sm font-medium text-blue-400" data-v-b6076569${_scopeId}>#${ssrInterpolate(props.user.data.rank.rank || "—")}</div></div><div class="flex-1 bg-dark-700/50 rounded-full py-1 px-3 text-center" data-v-b6076569${_scopeId}><span class="text-xs text-white/50" data-v-b6076569${_scopeId}>Score</span><div class="text-sm font-medium text-purple-400" data-v-b6076569${_scopeId}>${ssrInterpolate(props.user.data.score || "0")}</div></div></div></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="relative z-10" data-v-b6076569${_scopeId}><div class="bg-dark-500/90 backdrop-blur-sm rounded-3xl border border-dark-400/50 p-8 shadow-xl" data-v-b6076569${_scopeId}><div class="text-center mb-12 relative" data-v-b6076569${_scopeId}><h2 class="text-4xl font-extralight tracking-tight text-white/90" data-v-b6076569${_scopeId}> Your <span class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600" data-v-b6076569${_scopeId}>Achievements</span></h2><div class="mt-4 flex items-center justify-center gap-3" data-v-b6076569${_scopeId}><div class="flex items-center gap-2 px-4 py-2 bg-dark-600/50 rounded-full" data-v-b6076569${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Trophy), { class: "w-4 h-4 text-yellow-400" }, null, _parent2, _scopeId));
            _push2(`<span class="text-sm text-white/70" data-v-b6076569${_scopeId}>${ssrInterpolate(props.user.data.achievement_count)} Unlocked</span></div><div class="flex items-center gap-2 px-4 py-2 bg-dark-600/50 rounded-full" data-v-b6076569${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Star), { class: "w-4 h-4 text-blue-400" }, null, _parent2, _scopeId));
            _push2(`<span class="text-sm text-white/70" data-v-b6076569${_scopeId}>${ssrInterpolate(__props.achievements.length)} Total</span></div></div></div><div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6" data-v-b6076569${_scopeId}><!--[-->`);
            ssrRenderList(__props.achievements, (achievement) => {
              _push2(ssrRenderComponent(AchievementCard, {
                key: achievement.id,
                title: achievement.name,
                description: achievement.description,
                icon: iconMapping[achievement.icon],
                progress: getAchievementProgress(achievement),
                unlocked: isAchievementUnlocked(achievement),
                onClick: ($event) => openAchievementModal(achievement)
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div></div></div>`);
            if (selectedAchievement.value) {
              _push2(ssrRenderComponent(AchievementModal, {
                modelValue: selectedAchievement.value,
                "onUpdate:modelValue": ($event) => selectedAchievement.value = $event,
                title: selectedAchievement.value.name,
                description: selectedAchievement.value.description,
                icon: iconMapping[selectedAchievement.value.icon] || unref(Unlock),
                progress: getAchievementProgress(selectedAchievement.value),
                unlocked: isAchievementUnlocked(selectedAchievement.value),
                "level-required": selectedAchievement.value.level_requirement,
                reward: selectedAchievement.value.reward,
                onClose: closeAchievementModal
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="text-center mt-8" data-v-b6076569${_scopeId}><a${ssrRenderAttr("href", profileUrl.value)} target="_blank" class="text-sm text-white/70 hover:text-white/90 transition-colors" data-v-b6076569${_scopeId}> Share your achievements with friends </a>`);
            if (profileUrl.value) {
              _push2(ssrRenderComponent(_sfc_main$2, {
                "share-url": profileUrl.value,
                title: "Share Your Profile",
                "button-text": "Share Profile"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "achievements-container max-w-6xl mx-auto px-4 py-8 relative" }, [
                createVNode("div", { class: "absolute inset-0 pointer-events-none overflow-hidden z-0" }, [
                  createVNode("div", { class: "absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-blue-900/30 to-transparent" }),
                  createVNode("div", { class: "absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-purple-900/30 to-transparent" }),
                  createVNode("div", {
                    class: "absolute inset-0 opacity-10 bg-[length:100px_100px]",
                    style: { "background-image": "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),\n                        linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)" }
                  })
                ]),
                createVNode(UserProfile, {
                  user: props.user
                }, null, 8, ["user"]),
                createVNode("div", { class: "relative z-10 mt-12 mb-12" }, [
                  createVNode("div", { class: "bg-dark-500/90 backdrop-blur-sm rounded-3xl border border-dark-400/50 p-8 shadow-xl overflow-hidden" }, [
                    createVNode("div", { class: "absolute inset-0 opacity-5" }, [
                      createVNode("div", {
                        class: "w-full h-full",
                        style: { "background-image": "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)", "background-size": "24px 24px" }
                      })
                    ]),
                    createVNode("h2", { class: "text-4xl font-extralight tracking-tight text-center mb-8 text-white/90 relative" }, [
                      createTextVNode(" Player "),
                      createVNode("span", { class: "font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600" }, "Statistics")
                    ]),
                    ((_f = (_e = (_d = props.user) == null ? void 0 : _d.data) == null ? void 0 : _e.subscription) == null ? void 0 : _f.status) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "grid md:grid-cols-3 gap-6"
                    }, [
                      createVNode("div", { class: "bg-dark-600/50 rounded-2xl border border-dark-400/30 p-6 transform transition-all duration-300 hover:scale-102 hover:border-purple-500/30" }, [
                        createVNode("h3", { class: "text-lg font-semibold text-white/90 flex items-center gap-2" }, [
                          createVNode("div", { class: "w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center" }, [
                            createVNode(unref(Clock), { class: "w-5 h-5 text-blue-400" })
                          ]),
                          createTextVNode(" Account ")
                        ]),
                        createVNode("div", { class: "space-y-3" }, [
                          createVNode("div", { class: "flex items-center justify-between text-sm text-white/70 py-2 border-b border-dark-400/30" }, [
                            createVNode("span", null, "Joined:"),
                            createVNode("span", { class: "font-medium text-purple-400" }, toDisplayString(props.user.data.create_at_diff), 1)
                          ]),
                          createVNode("div", { class: "flex items-center justify-between text-sm text-white/70 py-2 border-b border-dark-400/30" }, [
                            createVNode("span", null, "Email:"),
                            createVNode("span", { class: "font-medium text-blue-400 truncate ml-2 max-w-[180px]" }, toDisplayString(props.user.data.email), 1)
                          ]),
                          createVNode("div", { class: "flex items-center justify-between text-sm text-white/70 py-2" }, [
                            createVNode("span", null, "Achievements:"),
                            createVNode("div", { class: "flex items-center gap-2" }, [
                              createVNode(unref(Trophy), { class: "w-4 h-4 text-yellow-400" }),
                              createVNode("span", { class: "font-medium text-yellow-400" }, toDisplayString(props.user.data.achievement_count), 1)
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "bg-dark-600/50 rounded-2xl border border-dark-400/30 p-6 transform transition-all duration-300 hover:scale-102 hover:border-emerald-500/30" }, [
                        createVNode("div", { class: "flex items-center justify-between mb-4" }, [
                          createVNode("h3", { class: "text-lg font-semibold text-white/90 flex items-center gap-2" }, [
                            createVNode("div", { class: "w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500/20 to-blue-500/20 flex items-center justify-center" }, [
                              createVNode(unref(Rocket), { class: "w-5 h-5 text-emerald-400" })
                            ]),
                            createTextVNode(" Progress ")
                          ]),
                          createVNode(unref(Star), { class: "w-5 h-5 text-yellow-400" })
                        ]),
                        createVNode("div", { class: "space-y-4" }, [
                          createVNode("div", null, [
                            createVNode("div", { class: "flex justify-between text-sm text-white/70 mb-2" }, [
                              createVNode("span", null, "Current Level"),
                              createVNode("span", { class: "font-medium text-emerald-400" }, toDisplayString(props.user.data.level), 1)
                            ]),
                            createVNode("div", { class: "bg-dark-700 rounded-full h-2 overflow-hidden" }, [
                              createVNode("div", {
                                class: "bg-gradient-to-r from-emerald-500 to-blue-500 h-full rounded-full transition-all duration-500",
                                style: {
                                  width: `${props.user.data.xp / props.user.data.next_level_xp * 100}%`
                                }
                              }, null, 4)
                            ]),
                            createVNode("div", { class: "flex justify-between text-xs text-white/50 mt-1" }, [
                              createVNode("span", null, toDisplayString(props.user.data.xp) + " XP", 1),
                              createVNode("span", null, toDisplayString(props.user.data.next_level_xp) + " XP", 1)
                            ])
                          ]),
                          createVNode("div", null, [
                            createVNode("div", { class: "flex justify-between text-sm text-white/70 mb-2" }, [
                              createVNode("span", null, "Total Experience"),
                              createVNode("span", { class: "font-medium text-blue-400" }, toDisplayString(props.user.data.total_xp), 1)
                            ]),
                            createVNode("div", { class: "bg-dark-700 rounded-full h-1 overflow-hidden" }, [
                              createVNode("div", { class: "bg-gradient-to-r from-blue-500 to-purple-500 h-full rounded-full w-full" })
                            ])
                          ]),
                          createVNode("div", { class: "flex gap-2 mt-4" }, [
                            createVNode("div", { class: "flex-1 bg-dark-700/50 rounded-full py-1 px-3 text-center" }, [
                              createVNode("span", { class: "text-xs text-white/50" }, "Rank"),
                              createVNode("div", { class: "text-sm font-medium text-blue-400" }, "#" + toDisplayString(props.user.data.rank.rank || "—"), 1)
                            ]),
                            createVNode("div", { class: "flex-1 bg-dark-700/50 rounded-full py-1 px-3 text-center" }, [
                              createVNode("span", { class: "text-xs text-white/50" }, "Score"),
                              createVNode("div", { class: "text-sm font-medium text-purple-400" }, toDisplayString(props.user.data.score || "0"), 1)
                            ])
                          ])
                        ])
                      ])
                    ])) : createCommentVNode("", true)
                  ])
                ]),
                createVNode("div", { class: "relative z-10" }, [
                  createVNode("div", { class: "bg-dark-500/90 backdrop-blur-sm rounded-3xl border border-dark-400/50 p-8 shadow-xl" }, [
                    createVNode("div", { class: "text-center mb-12 relative" }, [
                      createVNode("h2", { class: "text-4xl font-extralight tracking-tight text-white/90" }, [
                        createTextVNode(" Your "),
                        createVNode("span", { class: "font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600" }, "Achievements")
                      ]),
                      createVNode("div", { class: "mt-4 flex items-center justify-center gap-3" }, [
                        createVNode("div", { class: "flex items-center gap-2 px-4 py-2 bg-dark-600/50 rounded-full" }, [
                          createVNode(unref(Trophy), { class: "w-4 h-4 text-yellow-400" }),
                          createVNode("span", { class: "text-sm text-white/70" }, toDisplayString(props.user.data.achievement_count) + " Unlocked", 1)
                        ]),
                        createVNode("div", { class: "flex items-center gap-2 px-4 py-2 bg-dark-600/50 rounded-full" }, [
                          createVNode(unref(Star), { class: "w-4 h-4 text-blue-400" }),
                          createVNode("span", { class: "text-sm text-white/70" }, toDisplayString(__props.achievements.length) + " Total", 1)
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.achievements, (achievement) => {
                        return openBlock(), createBlock(AchievementCard, {
                          key: achievement.id,
                          title: achievement.name,
                          description: achievement.description,
                          icon: iconMapping[achievement.icon],
                          progress: getAchievementProgress(achievement),
                          unlocked: isAchievementUnlocked(achievement),
                          onClick: ($event) => openAchievementModal(achievement)
                        }, null, 8, ["title", "description", "icon", "progress", "unlocked", "onClick"]);
                      }), 128))
                    ])
                  ])
                ]),
                selectedAchievement.value ? (openBlock(), createBlock(AchievementModal, {
                  key: 0,
                  modelValue: selectedAchievement.value,
                  "onUpdate:modelValue": ($event) => selectedAchievement.value = $event,
                  title: selectedAchievement.value.name,
                  description: selectedAchievement.value.description,
                  icon: iconMapping[selectedAchievement.value.icon] || unref(Unlock),
                  progress: getAchievementProgress(selectedAchievement.value),
                  unlocked: isAchievementUnlocked(selectedAchievement.value),
                  "level-required": selectedAchievement.value.level_requirement,
                  reward: selectedAchievement.value.reward,
                  onClose: closeAchievementModal
                }, null, 8, ["modelValue", "onUpdate:modelValue", "title", "description", "icon", "progress", "unlocked", "level-required", "reward"])) : createCommentVNode("", true),
                createVNode("div", { class: "text-center mt-8" }, [
                  createVNode("a", {
                    href: profileUrl.value,
                    target: "_blank",
                    class: "text-sm text-white/70 hover:text-white/90 transition-colors"
                  }, " Share your achievements with friends ", 8, ["href"]),
                  profileUrl.value ? (openBlock(), createBlock(_sfc_main$2, {
                    key: 0,
                    "share-url": profileUrl.value,
                    title: "Share Your Profile",
                    "button-text": "Share Profile"
                  }, null, 8, ["share-url"])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Pages/FrontEnd/Vendor/GameDev/User/Achievement.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Achievement = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b6076569"]]);
export {
  Achievement as default
};
