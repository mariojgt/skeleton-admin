import { defineComponent, mergeProps, unref, useSSRContext, ref, computed, isRef, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderClass, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { a as api } from "./axios-BWWnXGbF.js";
import { _ as _sfc_main$2 } from "./App-CccoNqE7.js";
import { _ as _sfc_main$7, C as CommentBox } from "./CommentBox-CLOn1BbD.js";
import { Play, ChevronLeft, Heart, CheckCircle, Clock, ScrollText, ChevronRight, Calendar } from "lucide-vue-next";
import { _ as _sfc_main$4, a as _sfc_main$5 } from "./YouTube-BgIwH7-D.js";
import "./DifficultLevel-BY7tDA_1.js";
import confetti from "canvas-confetti";
import { _ as _sfc_main$6 } from "./dynamicIcon-DKOdjdPH.js";
import _sfc_main$3 from "./Sidebar-BSfMXX3B.js";
import PremiumPrompt from "./PremiumPrompt-ghKTF9-i.js";
import RelatedCourses from "./RelatedCourses-Bg9-ACb0.js";
import _sfc_main$9 from "./SidebarControl-CAeet_DO.js";
import _sfc_main$8 from "./EpisodeGuide-Cr9GhTmQ.js";
import { usePage, router } from "@inertiajs/vue3";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import "axios";
import "naive-ui";
import "./FlashMessage-CYVaM9mM.js";
import "./Markdown-D1WgnuMs.js";
import "dompurify";
import "markdown-it";
import "highlight.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./Input-BXi_X4mZ.js";
import "marked";
import "turndown";
import "date-fns";
import "./SearchSidebar-BPNZMEZb.js";
import "lodash";
import "../Frontend_js.js";
import "./index-koWuargk.js";
import "./Money-B84zS3T2.js";
import "./SeoManager-ytA6mF8s.js";
import "./CommentsSingle-BGRW2ED3.js";
import "@vimeo/player";
import "youtube-player";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Lesson",
  __ssrInlineRender: true,
  props: {
    lesson: {
      type: Object,
      default: () => ({})
    },
    lessonProgress: {
      type: Number,
      default: 0
    },
    certificationLink: {
      type: String,
      default: null
    }
  },
  emits: [
    "videoLike",
    "nextEpisode",
    "previousEpisode",
    "completeLesson",
    "watchLater"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative overflow-hidden rounded-xl bg-dark-500/90 backdrop-blur-sm border border-gray-800/50" }, _attrs))}><div class="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5"></div><div class="absolute inset-0 bg-[url(&#39;data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIxMjEyMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+&#39;)] opacity-10"></div><div class="relative p-6 space-y-8"><div class="relative overflow-hidden rounded-xl bg-dark-400/50 p-6"><div class="flex items-start gap-6"><div class="relative hidden md:block w-24 h-24">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(`<div class="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg opacity-20"></div>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      }, _push, _parent);
      _push(`</div><div class="flex-1 space-y-4"><div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium">`);
      _push(ssrRenderComponent(unref(Play), { class: "w-4 h-4" }, null, _parent));
      _push(` You&#39;re Watching </div><h1 class="text-2xl md:text-3xl font-bold text-white">${ssrInterpolate(props.lesson.name)}</h1>`);
      if (__props.lessonProgress !== 0) {
        _push(`<div class="space-y-2"><div class="flex justify-between items-center text-sm text-gray-400"><span>Progress</span><span>${ssrInterpolate(__props.lessonProgress)}%</span></div><div class="relative h-2 w-full bg-dark-600 rounded-full overflow-hidden"><div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20"></div><div class="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 rounded-full" style="${ssrRenderStyle({ width: `${__props.lessonProgress}%` })}"></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="flex flex-col lg:flex-row items-center gap-6">`);
      if (props.lesson.previous_lesson_id) {
        _push(`<button class="hidden lg:flex items-center justify-center w-12 h-12 rounded-xl bg-dark-400 hover:bg-dark-300 transition-all duration-300 group">`);
        _push(ssrRenderComponent(unref(ChevronLeft), { class: "w-6 h-6 text-white group-hover:text-blue-400" }, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex-1 w-full space-y-6"><div class="flex flex-wrap md:flex-nowrap gap-4"><button class="group flex items-center justify-center w-12 h-12 rounded-xl bg-dark-400 hover:bg-dark-300 transition-all duration-300">`);
      _push(ssrRenderComponent(unref(Heart), {
        class: ["w-6 h-6 transition-colors duration-300", props.lesson.is_mark_as_liked ? "text-red-500" : "text-white group-hover:text-red-400"],
        fill: props.lesson.is_mark_as_liked ? "currentColor" : "none"
      }, null, _parent));
      _push(`</button><div class="flex flex-1 gap-4"><button class="${ssrRenderClass([props.lesson.is_completed ? "bg-green-500/20 text-green-400 hover:bg-green-500/30" : "bg-dark-400 text-white hover:bg-dark-300", "flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300"])}">`);
      _push(ssrRenderComponent(unref(CheckCircle), { class: "w-5 h-5" }, null, _parent));
      _push(`<span>${ssrInterpolate(props.lesson.is_completed ? "Completed" : "Mark Complete")}</span></button><button class="${ssrRenderClass([props.lesson.watch_later ? "bg-purple-500/20 text-purple-400 hover:bg-purple-500/30" : "bg-dark-400 text-white hover:bg-dark-300", "flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300"])}">`);
      _push(ssrRenderComponent(unref(Clock), { class: "w-5 h-5" }, null, _parent));
      _push(`<span>${ssrInterpolate(props.lesson.watch_later ? "In Watchlist" : "Watch Later")}</span></button>`);
      if (__props.certificationLink) {
        _push(`<button class="${ssrRenderClass([props.lesson.watch_later ? "bg-purple-500/20 text-purple-400 hover:bg-purple-500/30" : "bg-dark-400 text-white hover:bg-dark-300", "flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300"])}">`);
        _push(ssrRenderComponent(unref(ScrollText), { class: "w-5 h-5" }, null, _parent));
        _push(`<span>Get Certified</span></button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="flex justify-between lg:hidden">`);
      if (props.lesson.previous_lesson_id) {
        _push(`<button class="flex items-center justify-center w-12 h-12 rounded-xl bg-dark-400 hover:bg-dark-300 transition-all duration-300 group">`);
        _push(ssrRenderComponent(unref(ChevronLeft), { class: "w-6 h-6 text-white group-hover:text-blue-400" }, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      if (props.lesson.next_lesson_id) {
        _push(`<button class="flex items-center justify-center w-12 h-12 rounded-xl bg-dark-400 hover:bg-dark-300 transition-all duration-300 group">`);
        _push(ssrRenderComponent(unref(ChevronRight), { class: "w-6 h-6 text-white group-hover:text-blue-400" }, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex flex-wrap gap-8"><div class="space-y-1"><div class="text-sm text-gray-400">Runtime</div><div class="flex items-center gap-2 text-white">`);
      _push(ssrRenderComponent(unref(Clock), { class: "w-4 h-4 text-blue-400" }, null, _parent));
      _push(` ${ssrInterpolate(props.lesson.lesson_duration)}</div></div><div class="space-y-1"><div class="text-sm text-gray-400">Published</div><div class="flex items-center gap-2 text-white">`);
      _push(ssrRenderComponent(unref(Calendar), { class: "w-4 h-4 text-purple-400" }, null, _parent));
      _push(` ${ssrInterpolate(props.lesson.created_diff)}</div></div></div></div>`);
      if (props.lesson.next_lesson_id) {
        _push(`<button class="hidden lg:flex items-center justify-center w-12 h-12 rounded-xl bg-dark-400 hover:bg-dark-300 transition-all duration-300 group">`);
        _push(ssrRenderComponent(unref(ChevronRight), { class: "w-6 h-6 text-white group-hover:text-blue-400" }, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Components/FrontEnd/Lesson/Lesson.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "View",
  __ssrInlineRender: true,
  props: {
    relatedCourses: {
      type: Object,
      required: true
    },
    course: {
      type: Object,
      required: true
    },
    course_instructor: {
      type: Object,
      required: true
    },
    sections: {
      type: Array,
      required: true
    },
    current_lesson: {
      type: Object,
      required: true
    },
    editor_key: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    let sideBarOpen = ref(false);
    let displayLogin = ref(false);
    let isLoading = ref(false);
    const changeLesson = async (lessonId) => {
      if (lessonId) {
        await router.get(
          route("course.view", { slug: props.course.slug, lesson: lessonId }),
          {
            preserveState: true,
            preserveScroll: true,
            only: ["current_lesson"]
          }
        );
      }
    };
    const trackUserPogress = async (videoRunTime) => {
      if (usePage().props.isUserAuth) {
        await router.post(
          route("track.lesson.progress", {
            lesson: props.current_lesson.data.id
          }),
          {
            progress: videoRunTime
          },
          {
            preserveState: true,
            preserveScroll: true,
            only: ["current_lesson"]
          }
        );
      }
    };
    const lessonCompleted = async (videoRunTime) => {
      if (usePage().props.isUserAuth) {
        await api.post(route("track.lesson.complete", props.current_lesson.data.id)).then(function(response) {
          props.current_lesson.data.is_completed = response.data.status;
        });
        confetti({
          particleCount: 100,
          spread: 100,
          origin: { y: 0.6 }
        });
      } else {
        displayLogin.value = true;
      }
    };
    const likeVideo = async (lessonId) => {
      if (usePage().props.isUserAuth) {
        await api.post(route("track.lesson.like", lessonId)).then(function(response) {
          props.current_lesson.data.is_mark_as_liked = response.data.status;
        });
        confetti({
          particleCount: 100,
          spread: 100,
          origin: { y: 0.6 }
        });
      } else {
        displayLogin.value = true;
      }
    };
    const watchLater = async (lessonId) => {
      if (usePage().props.isUserAuth) {
        await api.post(route("track.lesson.watch.later", lessonId)).then(function(response) {
          props.current_lesson.data.watch_later = response.data.status;
        });
        confetti({
          particleCount: 100,
          spread: 100,
          origin: { y: 0.6 }
        });
      } else {
        displayLogin.value = true;
      }
    };
    let lessonProgressRunTime = ref(null);
    let lessonContent = ref(null);
    const lessonProgress = async (videoRunTime) => {
      if (usePage().props.isUserAuth) {
        lessonProgressRunTime.value = videoRunTime;
        await api.post(
          route(
            "track.lesson.points.progress",
            props.current_lesson.data.id
          ),
          {
            seconds: lessonProgressRunTime.value
          }
        ).then(function(response) {
          if (response.data.status) {
            lessonContent.value = response.data.lessonPoint;
          }
        });
      }
    };
    const playSeries = async () => {
      var _a, _b, _c;
      if ((_c = (_b = (_a = props.sections) == null ? void 0 : _a.data[0]) == null ? void 0 : _b.children[0]) == null ? void 0 : _c.id) {
        changeLesson(props.sections.data[0].children[0].id);
      }
    };
    const mainImageInfo = computed(() => {
      return {
        src: props.course.media[0]["url"]["default"],
        alt: props.course.media[0]["url"]["alt"]
      };
    });
    let openSubscribeModal = ref(false);
    const subscribe = async () => {
      if (usePage().props.isUserAuth) {
        openSubscribeModal.value = true;
      } else {
        displayLogin.value = true;
      }
    };
    const courseCheckout = async () => {
      if (usePage().props.isUserAuth) {
        isLoading.value = true;
        api.post(route("stripe.product.checkout"), {
          products: [
            {
              id: props.course.id,
              quantity: 1,
              type: "course"
            }
          ]
        }).then(function(response) {
          window.location.href = response.data.session;
        }).catch(function(error) {
          isLoading.value = false;
        });
      } else {
        displayLogin.value = true;
      }
    };
    const priceStartOff = computed(() => {
      var _a, _b;
      return (_b = (_a = usePage().props.subscriptionsProducts) == null ? void 0 : _a.data[0]) == null ? void 0 : _b.price;
    });
    const handleCourseOpen = (slug) => {
      openCourse(slug);
    };
    const openCourse = async (slug) => {
      router.visit(route("course.view", slug));
    };
    const downloadResource = async (resource) => {
      if (usePage().props.isUserAuth) {
        isLoading.value = true;
        try {
          if (resource.resource_type === "file") {
            const response = await api.get(route("gamedev.lesson.resources.download", resource.id));
            const downloadUrl = response.data.download_url;
            window.open(downloadUrl, "_blank");
          } else {
            window.open(resource.resource_url, "_blank");
          }
        } catch (error) {
          console.error("Download error:", error);
        } finally {
          isLoading.value = false;
        }
      } else {
        displayLogin.value = true;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$2, mergeProps({
        showHeader: false,
        showFooter: false,
        displayLogin: unref(displayLogin),
        onCloseLogin: ($event) => isRef(displayLogin) ? displayLogin.value = false : displayLogin = false,
        displaySubscription: unref(openSubscribeModal),
        onCloseSubscription: ($event) => isRef(openSubscribeModal) ? openSubscribeModal.value = false : openSubscribeModal = false,
        displayLoading: unref(isLoading),
        onCloseLoading: ($event) => isRef(isLoading) ? isLoading.value = false : isLoading = false
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v;
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$3, {
              sideBarOpen: unref(sideBarOpen),
              mainImageInfo: mainImageInfo.value,
              course: props.course,
              sections: props.sections,
              currentLesson: props.current_lesson,
              onChangeLesson: changeLesson,
              onCloseSidebar: ($event) => isRef(sideBarOpen) ? sideBarOpen.value = false : sideBarOpen = false
            }, null, _parent2, _scopeId));
            if ((_a = props.current_lesson) == null ? void 0 : _a.data) {
              _push2(`<section class="bg-dark-100"${_scopeId}><div class="py-8 px-4 mx-auto max-w-screen-2xl lg:py-16"${_scopeId}>`);
              if (props.current_lesson.data.video_accessible) {
                _push2(`<!--[-->`);
                if (props.current_lesson.data.player_type === "vimeo") {
                  _push2(ssrRenderComponent(_sfc_main$4, {
                    lessonUrl: props.current_lesson.data.video_url,
                    "lesson-id": props.current_lesson.data.id,
                    seek: (_c = (_b = props.current_lesson.data) == null ? void 0 : _b.lesson_progress) == null ? void 0 : _c.watch_time,
                    onVideoRunning: trackUserPogress,
                    onVideoPause: trackUserPogress,
                    onVideoEnded: ($event) => {
                      trackUserPogress($event);
                      lessonCompleted();
                    },
                    onVideoStart: trackUserPogress,
                    onVideoLessonPoints: lessonProgress
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                if (props.current_lesson.data.player_type === "youtube") {
                  _push2(ssrRenderComponent(_sfc_main$5, {
                    videoId: props.current_lesson.data.video_id,
                    "lesson-id": props.current_lesson.data.id,
                    seek: (_e = (_d = props.current_lesson.data) == null ? void 0 : _d.lesson_progress) == null ? void 0 : _e.watch_time,
                    onVideoRunning: trackUserPogress,
                    onVideoPause: trackUserPogress,
                    onVideoEnded: ($event) => {
                      trackUserPogress($event);
                      lessonCompleted();
                    },
                    onVideoStart: trackUserPogress,
                    onVideoLessonPoints: lessonProgress
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<!--]-->`);
              } else {
                _push2(ssrRenderComponent(PremiumPrompt, {
                  current_lesson: __props.current_lesson,
                  course: __props.course,
                  priceStartOff: priceStartOff.value,
                  onSubscribe: subscribe,
                  onCourseCheckout: courseCheckout
                }, null, _parent2, _scopeId));
              }
              if (unref(lessonContent)) {
                _push2(`<div class="my-5 border bg-base-100 border-accent rounded"${_scopeId}><div class="h-full p-4 bg-dark-100 border-b border-accent"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><div class="flex justify-between gap-1"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId}></path></svg><span class="text-lg font-bold text-neutral"${_scopeId}>${ssrInterpolate(unref(lessonContent).seconds)}s </span></div><a class="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500" target="_blank"${_scopeId}>Close</a></div><div class="mt-2"${_scopeId}><a class="text-2xl font-bold text-neutral hover:underline" target="_blank"${_scopeId}>${ssrInterpolate(unref(lessonContent).title)}</a><div class="mt-2 w-full text-lg text-neutral fancy-editor"${_scopeId}>${unref(lessonContent).content ?? ""}</div></div></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (props.current_lesson.data.video_accessible) {
                _push2(`<div${_scopeId}>`);
                if ((_f = props.current_lesson) == null ? void 0 : _f.data) {
                  _push2(ssrRenderComponent(_sfc_main$1, {
                    lesson: (_g = props.current_lesson) == null ? void 0 : _g.data,
                    certificationLink: props.course.certification_link,
                    lessonProgress: (_i = (_h = props.current_lesson.data) == null ? void 0 : _h.lesson_progress) == null ? void 0 : _i.progress,
                    onNextEpisode: changeLesson,
                    onPreviousEpisode: changeLesson,
                    onVideoLike: likeVideo,
                    onCompleteLesson: lessonCompleted,
                    onWatchLater: watchLater
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<img${ssrRenderAttr("src", props.course.media[0].url.default)}${ssrRenderAttr("alt", props.course.media[0].alt)} class="w-full h-full object-cover rounded-lg"${_scopeId2}>`);
                      } else {
                        return [
                          createVNode("img", {
                            src: props.course.media[0].url.default,
                            alt: props.course.media[0].alt,
                            class: "w-full h-full object-cover rounded-lg"
                          }, null, 8, ["src", "alt"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<div class="mt-3"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(Disclosure), null, {
                  default: withCtx(({ open }, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(unref(DisclosureButton), { class: "flex justify-between bg-dark-200 text-white font-bold text-4xl p-3 rounded-lg w-full text-left hover:bg-dark-blue-200 hover:text-accent" }, {
                        default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<span${_scopeId3}>About This Episode</span>`);
                            _push4(ssrRenderComponent(_sfc_main$6, { componentId: "chevronDown" }, null, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode("span", null, "About This Episode"),
                              createVNode(_sfc_main$6, { componentId: "chevronDown" })
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(unref(DisclosurePanel), { class: "p-2 bg-dark-blue-100" }, {
                        default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div class="mb-8 text-lg font-normal text-neutral fancy-editor"${_scopeId3}>${props.current_lesson.data.description ?? ""}</div>`);
                          } else {
                            return [
                              createVNode("div", {
                                class: "mb-8 text-lg font-normal text-neutral fancy-editor",
                                innerHTML: props.current_lesson.data.description
                              }, null, 8, ["innerHTML"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(unref(DisclosureButton), { class: "flex justify-between bg-dark-200 text-white font-bold text-4xl p-3 rounded-lg w-full text-left hover:bg-dark-blue-200 hover:text-accent" }, {
                          default: withCtx(() => [
                            createVNode("span", null, "About This Episode"),
                            createVNode(_sfc_main$6, { componentId: "chevronDown" })
                          ]),
                          _: 1
                        }),
                        createVNode(unref(DisclosurePanel), { class: "p-2 bg-dark-blue-100" }, {
                          default: withCtx(() => [
                            createVNode("div", {
                              class: "mb-8 text-lg font-normal text-neutral fancy-editor",
                              innerHTML: props.current_lesson.data.description
                            }, null, 8, ["innerHTML"])
                          ]),
                          _: 1
                        })
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                if (props.current_lesson.data.resources && props.current_lesson.data.resources.length > 0) {
                  _push2(ssrRenderComponent(unref(Disclosure), {
                    as: "div",
                    class: "mt-3 mb-5"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(ssrRenderComponent(unref(DisclosureButton), {
                          as: "button",
                          class: "flex items-center justify-between bg-dark-200 text-white font-bold text-2xl p-3 rounded-lg w-full text-left hover:bg-dark-blue-200 hover:text-accent transition-all duration-200"
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(`<span${_scopeId3}>Lesson Resources</span>`);
                              _push4(ssrRenderComponent(_sfc_main$6, { componentId: "chevronDown" }, null, _parent4, _scopeId3));
                            } else {
                              return [
                                createVNode("span", null, "Lesson Resources"),
                                createVNode(_sfc_main$6, { componentId: "chevronDown" })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent3, _scopeId2));
                        _push3(ssrRenderComponent(unref(DisclosurePanel), {
                          as: "div",
                          class: "p-2 bg-dark-300 rounded-lg"
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(`<div class="grid grid-cols-1 md:grid-cols-2 gap-4"${_scopeId3}><!--[-->`);
                              ssrRenderList(props.current_lesson.data.resources, (resource, rIndex) => {
                                _push4(`<div class="flex items-center gap-4 bg-dark-blue-500 p-4 rounded-lg hover:bg-dark-blue-300 transition-all duration-300"${_scopeId3}><div class="flex-shrink-0"${_scopeId3}>`);
                                if (resource.resource_type === "link") {
                                  _push4(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-blue-400"${_scopeId3}><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5L21 3m0 0h-6m6 0v6"${_scopeId3}></path></svg>`);
                                } else if (resource.resource_type === "file") {
                                  _push4(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-green-400"${_scopeId3}><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v15m0 0-3-3m3 3 3-3M6 6h12"${_scopeId3}></path></svg>`);
                                } else {
                                  _push4(`<!---->`);
                                }
                                _push4(`</div><div class="flex-grow"${_scopeId3}><h3 class="text-lg font-semibold text-white"${_scopeId3}>${ssrInterpolate(resource.title)}</h3>`);
                                if (resource.description) {
                                  _push4(`<p class="text-sm text-gray-300 mt-1"${_scopeId3}>${ssrInterpolate(resource.description)}</p>`);
                                } else {
                                  _push4(`<!---->`);
                                }
                                _push4(`</div><div${_scopeId3}><a target="_blank" class="btn btn-sm btn-outline text-blue-400 border-blue-400 hover:text-white hover:bg-blue-400 transition-all duration-200"${_scopeId3}> Download </a></div></div>`);
                              });
                              _push4(`<!--]--></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(props.current_lesson.data.resources, (resource, rIndex) => {
                                    return openBlock(), createBlock("div", {
                                      key: rIndex,
                                      class: "flex items-center gap-4 bg-dark-blue-500 p-4 rounded-lg hover:bg-dark-blue-300 transition-all duration-300"
                                    }, [
                                      createVNode("div", { class: "flex-shrink-0" }, [
                                        resource.resource_type === "link" ? (openBlock(), createBlock("svg", {
                                          key: 0,
                                          xmlns: "http://www.w3.org/2000/svg",
                                          fill: "none",
                                          viewBox: "0 0 24 24",
                                          "stroke-width": "1.5",
                                          stroke: "currentColor",
                                          class: "w-8 h-8 text-blue-400"
                                        }, [
                                          createVNode("path", {
                                            "stroke-linecap": "round",
                                            "stroke-linejoin": "round",
                                            d: "M13.5 10.5L21 3m0 0h-6m6 0v6"
                                          })
                                        ])) : resource.resource_type === "file" ? (openBlock(), createBlock("svg", {
                                          key: 1,
                                          xmlns: "http://www.w3.org/2000/svg",
                                          fill: "none",
                                          viewBox: "0 0 24 24",
                                          "stroke-width": "1.5",
                                          stroke: "currentColor",
                                          class: "w-8 h-8 text-green-400"
                                        }, [
                                          createVNode("path", {
                                            "stroke-linecap": "round",
                                            "stroke-linejoin": "round",
                                            d: "M12 3v15m0 0-3-3m3 3 3-3M6 6h12"
                                          })
                                        ])) : createCommentVNode("", true)
                                      ]),
                                      createVNode("div", { class: "flex-grow" }, [
                                        createVNode("h3", { class: "text-lg font-semibold text-white" }, toDisplayString(resource.title), 1),
                                        resource.description ? (openBlock(), createBlock("p", {
                                          key: 0,
                                          class: "text-sm text-gray-300 mt-1"
                                        }, toDisplayString(resource.description), 1)) : createCommentVNode("", true)
                                      ]),
                                      createVNode("div", null, [
                                        createVNode("a", {
                                          onClick: ($event) => downloadResource(resource),
                                          target: "_blank",
                                          class: "btn btn-sm btn-outline text-blue-400 border-blue-400 hover:text-white hover:bg-blue-400 transition-all duration-200"
                                        }, " Download ", 8, ["onClick"])
                                      ])
                                    ]);
                                  }), 128))
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent3, _scopeId2));
                      } else {
                        return [
                          createVNode(unref(DisclosureButton), {
                            as: "button",
                            class: "flex items-center justify-between bg-dark-200 text-white font-bold text-2xl p-3 rounded-lg w-full text-left hover:bg-dark-blue-200 hover:text-accent transition-all duration-200"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", null, "Lesson Resources"),
                              createVNode(_sfc_main$6, { componentId: "chevronDown" })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(DisclosurePanel), {
                            as: "div",
                            class: "p-2 bg-dark-300 rounded-lg"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(props.current_lesson.data.resources, (resource, rIndex) => {
                                  return openBlock(), createBlock("div", {
                                    key: rIndex,
                                    class: "flex items-center gap-4 bg-dark-blue-500 p-4 rounded-lg hover:bg-dark-blue-300 transition-all duration-300"
                                  }, [
                                    createVNode("div", { class: "flex-shrink-0" }, [
                                      resource.resource_type === "link" ? (openBlock(), createBlock("svg", {
                                        key: 0,
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        "stroke-width": "1.5",
                                        stroke: "currentColor",
                                        class: "w-8 h-8 text-blue-400"
                                      }, [
                                        createVNode("path", {
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                          d: "M13.5 10.5L21 3m0 0h-6m6 0v6"
                                        })
                                      ])) : resource.resource_type === "file" ? (openBlock(), createBlock("svg", {
                                        key: 1,
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        "stroke-width": "1.5",
                                        stroke: "currentColor",
                                        class: "w-8 h-8 text-green-400"
                                      }, [
                                        createVNode("path", {
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                          d: "M12 3v15m0 0-3-3m3 3 3-3M6 6h12"
                                        })
                                      ])) : createCommentVNode("", true)
                                    ]),
                                    createVNode("div", { class: "flex-grow" }, [
                                      createVNode("h3", { class: "text-lg font-semibold text-white" }, toDisplayString(resource.title), 1),
                                      resource.description ? (openBlock(), createBlock("p", {
                                        key: 0,
                                        class: "text-sm text-gray-300 mt-1"
                                      }, toDisplayString(resource.description), 1)) : createCommentVNode("", true)
                                    ]),
                                    createVNode("div", null, [
                                      createVNode("a", {
                                        onClick: ($event) => downloadResource(resource),
                                        target: "_blank",
                                        class: "btn btn-sm btn-outline text-blue-400 border-blue-400 hover:text-white hover:bg-blue-400 transition-all duration-200"
                                      }, " Download ", 8, ["onClick"])
                                    ])
                                  ]);
                                }), 128))
                              ])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
                _push2(ssrRenderComponent(_sfc_main$7, {
                  class: "mt-4",
                  admin: (_j = props.course_instructor) == null ? void 0 : _j.data
                }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(CommentBox, {
                  modelId: props.current_lesson.data.id,
                  modelClass: "lesson"
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(ssrRenderComponent(RelatedCourses, {
                relatedCourses: props.relatedCourses,
                onOpenCourse: handleCourseOpen
              }, null, _parent2, _scopeId));
              _push2(`</div></section>`);
            } else {
              _push2(`<section class="bg-dark-200"${_scopeId}><div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16"${_scopeId}><div class="card bg-dark-blue-100 w-full"${_scopeId}><figure${_scopeId}><img${ssrRenderAttr("alt", mainImageInfo.value.alt)}${ssrRenderAttr("src", mainImageInfo.value.src)}${_scopeId}></figure><div class="card-body"${_scopeId}><h2 class="card-title font-bold text-5xl mb-5"${_scopeId}>${ssrInterpolate(props.course.title)}</h2><div class="generic-content font-bold text-xl text-neutral"${_scopeId}>${props.course.short_description ?? ""}</div><div class="card-actions justify-start mt-3"${_scopeId}><a href="#" class="inline-flex items-center justify-center h-16 px-10 py-0 text-xl font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-white-600 border-solid rounded-full cursor-pointer select-none hover:text-primary hover:bg-accent hover:border-secondary focus:shadow-xs focus:no-underline w-full"${_scopeId}><div class="flex justify-between"${_scopeId}><div class="mt-1"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$6, { componentId: "play" }, null, _parent2, _scopeId));
              _push2(`</div></div></a></div></div></div>`);
              _push2(ssrRenderComponent(_sfc_main$8, {
                course: props.course
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$7, {
                class: "mt-4",
                admin: (_k = props.course_instructor) == null ? void 0 : _k.data
              }, null, _parent2, _scopeId));
              _push2(`</div></section>`);
            }
            _push2(ssrRenderComponent(_sfc_main$9, {
              onOpenSidebar: ($event) => isRef(sideBarOpen) ? sideBarOpen.value = true : sideBarOpen = true
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$3, {
                sideBarOpen: unref(sideBarOpen),
                mainImageInfo: mainImageInfo.value,
                course: props.course,
                sections: props.sections,
                currentLesson: props.current_lesson,
                onChangeLesson: changeLesson,
                onCloseSidebar: ($event) => isRef(sideBarOpen) ? sideBarOpen.value = false : sideBarOpen = false
              }, null, 8, ["sideBarOpen", "mainImageInfo", "course", "sections", "currentLesson", "onCloseSidebar"]),
              ((_l = props.current_lesson) == null ? void 0 : _l.data) ? (openBlock(), createBlock("section", {
                key: 0,
                class: "bg-dark-100"
              }, [
                createVNode("div", { class: "py-8 px-4 mx-auto max-w-screen-2xl lg:py-16" }, [
                  props.current_lesson.data.video_accessible ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                    props.current_lesson.data.player_type === "vimeo" ? (openBlock(), createBlock(_sfc_main$4, {
                      key: 0,
                      lessonUrl: props.current_lesson.data.video_url,
                      "lesson-id": props.current_lesson.data.id,
                      seek: (_n = (_m = props.current_lesson.data) == null ? void 0 : _m.lesson_progress) == null ? void 0 : _n.watch_time,
                      onVideoRunning: trackUserPogress,
                      onVideoPause: trackUserPogress,
                      onVideoEnded: ($event) => {
                        trackUserPogress($event);
                        lessonCompleted();
                      },
                      onVideoStart: trackUserPogress,
                      onVideoLessonPoints: lessonProgress
                    }, null, 8, ["lessonUrl", "lesson-id", "seek", "onVideoEnded"])) : createCommentVNode("", true),
                    props.current_lesson.data.player_type === "youtube" ? (openBlock(), createBlock(_sfc_main$5, {
                      key: 1,
                      videoId: props.current_lesson.data.video_id,
                      "lesson-id": props.current_lesson.data.id,
                      seek: (_p = (_o = props.current_lesson.data) == null ? void 0 : _o.lesson_progress) == null ? void 0 : _p.watch_time,
                      onVideoRunning: trackUserPogress,
                      onVideoPause: trackUserPogress,
                      onVideoEnded: ($event) => {
                        trackUserPogress($event);
                        lessonCompleted();
                      },
                      onVideoStart: trackUserPogress,
                      onVideoLessonPoints: lessonProgress
                    }, null, 8, ["videoId", "lesson-id", "seek", "onVideoEnded"])) : createCommentVNode("", true)
                  ], 64)) : (openBlock(), createBlock(PremiumPrompt, {
                    key: 1,
                    current_lesson: __props.current_lesson,
                    course: __props.course,
                    priceStartOff: priceStartOff.value,
                    onSubscribe: subscribe,
                    onCourseCheckout: courseCheckout
                  }, null, 8, ["current_lesson", "course", "priceStartOff"])),
                  unref(lessonContent) ? (openBlock(), createBlock("div", {
                    key: 2,
                    class: "my-5 border bg-base-100 border-accent rounded"
                  }, [
                    createVNode("div", { class: "h-full p-4 bg-dark-100 border-b border-accent" }, [
                      createVNode("div", { class: "flex items-center justify-between" }, [
                        createVNode("div", { class: "flex justify-between gap-1" }, [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            "stroke-width": "1.5",
                            stroke: "currentColor",
                            class: "w-6 h-6 text-white"
                          }, [
                            createVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              d: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            })
                          ])),
                          createVNode("span", { class: "text-lg font-bold text-neutral" }, toDisplayString(unref(lessonContent).seconds) + "s ", 1)
                        ]),
                        createVNode("a", {
                          class: "px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500",
                          target: "_blank"
                        }, "Close")
                      ]),
                      createVNode("div", { class: "mt-2" }, [
                        createVNode("a", {
                          class: "text-2xl font-bold text-neutral hover:underline",
                          target: "_blank"
                        }, toDisplayString(unref(lessonContent).title), 1),
                        createVNode("div", {
                          innerHTML: unref(lessonContent).content,
                          class: "mt-2 w-full text-lg text-neutral fancy-editor"
                        }, null, 8, ["innerHTML"])
                      ])
                    ])
                  ])) : createCommentVNode("", true),
                  props.current_lesson.data.video_accessible ? (openBlock(), createBlock("div", { key: 3 }, [
                    ((_q = props.current_lesson) == null ? void 0 : _q.data) ? (openBlock(), createBlock(_sfc_main$1, {
                      key: 0,
                      lesson: (_r = props.current_lesson) == null ? void 0 : _r.data,
                      certificationLink: props.course.certification_link,
                      lessonProgress: (_t = (_s = props.current_lesson.data) == null ? void 0 : _s.lesson_progress) == null ? void 0 : _t.progress,
                      onNextEpisode: changeLesson,
                      onPreviousEpisode: changeLesson,
                      onVideoLike: likeVideo,
                      onCompleteLesson: lessonCompleted,
                      onWatchLater: watchLater
                    }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: props.course.media[0].url.default,
                          alt: props.course.media[0].alt,
                          class: "w-full h-full object-cover rounded-lg"
                        }, null, 8, ["src", "alt"])
                      ]),
                      _: 1
                    }, 8, ["lesson", "certificationLink", "lessonProgress"])) : createCommentVNode("", true),
                    createVNode("div", { class: "mt-3" }, [
                      createVNode(unref(Disclosure), null, {
                        default: withCtx(({ open }) => [
                          createVNode(unref(DisclosureButton), { class: "flex justify-between bg-dark-200 text-white font-bold text-4xl p-3 rounded-lg w-full text-left hover:bg-dark-blue-200 hover:text-accent" }, {
                            default: withCtx(() => [
                              createVNode("span", null, "About This Episode"),
                              createVNode(_sfc_main$6, { componentId: "chevronDown" })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(DisclosurePanel), { class: "p-2 bg-dark-blue-100" }, {
                            default: withCtx(() => [
                              createVNode("div", {
                                class: "mb-8 text-lg font-normal text-neutral fancy-editor",
                                innerHTML: props.current_lesson.data.description
                              }, null, 8, ["innerHTML"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      props.current_lesson.data.resources && props.current_lesson.data.resources.length > 0 ? (openBlock(), createBlock(unref(Disclosure), {
                        key: 0,
                        as: "div",
                        class: "mt-3 mb-5"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(DisclosureButton), {
                            as: "button",
                            class: "flex items-center justify-between bg-dark-200 text-white font-bold text-2xl p-3 rounded-lg w-full text-left hover:bg-dark-blue-200 hover:text-accent transition-all duration-200"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", null, "Lesson Resources"),
                              createVNode(_sfc_main$6, { componentId: "chevronDown" })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(DisclosurePanel), {
                            as: "div",
                            class: "p-2 bg-dark-300 rounded-lg"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(props.current_lesson.data.resources, (resource, rIndex) => {
                                  return openBlock(), createBlock("div", {
                                    key: rIndex,
                                    class: "flex items-center gap-4 bg-dark-blue-500 p-4 rounded-lg hover:bg-dark-blue-300 transition-all duration-300"
                                  }, [
                                    createVNode("div", { class: "flex-shrink-0" }, [
                                      resource.resource_type === "link" ? (openBlock(), createBlock("svg", {
                                        key: 0,
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        "stroke-width": "1.5",
                                        stroke: "currentColor",
                                        class: "w-8 h-8 text-blue-400"
                                      }, [
                                        createVNode("path", {
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                          d: "M13.5 10.5L21 3m0 0h-6m6 0v6"
                                        })
                                      ])) : resource.resource_type === "file" ? (openBlock(), createBlock("svg", {
                                        key: 1,
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        "stroke-width": "1.5",
                                        stroke: "currentColor",
                                        class: "w-8 h-8 text-green-400"
                                      }, [
                                        createVNode("path", {
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                          d: "M12 3v15m0 0-3-3m3 3 3-3M6 6h12"
                                        })
                                      ])) : createCommentVNode("", true)
                                    ]),
                                    createVNode("div", { class: "flex-grow" }, [
                                      createVNode("h3", { class: "text-lg font-semibold text-white" }, toDisplayString(resource.title), 1),
                                      resource.description ? (openBlock(), createBlock("p", {
                                        key: 0,
                                        class: "text-sm text-gray-300 mt-1"
                                      }, toDisplayString(resource.description), 1)) : createCommentVNode("", true)
                                    ]),
                                    createVNode("div", null, [
                                      createVNode("a", {
                                        onClick: ($event) => downloadResource(resource),
                                        target: "_blank",
                                        class: "btn btn-sm btn-outline text-blue-400 border-blue-400 hover:text-white hover:bg-blue-400 transition-all duration-200"
                                      }, " Download ", 8, ["onClick"])
                                    ])
                                  ]);
                                }), 128))
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ]),
                    createVNode(_sfc_main$7, {
                      class: "mt-4",
                      admin: (_u = props.course_instructor) == null ? void 0 : _u.data
                    }, null, 8, ["admin"]),
                    createVNode(CommentBox, {
                      modelId: props.current_lesson.data.id,
                      modelClass: "lesson"
                    }, null, 8, ["modelId"])
                  ])) : createCommentVNode("", true),
                  createVNode(RelatedCourses, {
                    relatedCourses: props.relatedCourses,
                    onOpenCourse: handleCourseOpen
                  }, null, 8, ["relatedCourses"])
                ])
              ])) : (openBlock(), createBlock("section", {
                key: 1,
                class: "bg-dark-200"
              }, [
                createVNode("div", { class: "py-8 px-4 mx-auto max-w-screen-xl lg:py-16" }, [
                  createVNode("div", { class: "card bg-dark-blue-100 w-full" }, [
                    createVNode("figure", null, [
                      createVNode("img", {
                        alt: mainImageInfo.value.alt,
                        src: mainImageInfo.value.src
                      }, null, 8, ["alt", "src"])
                    ]),
                    createVNode("div", { class: "card-body" }, [
                      createVNode("h2", { class: "card-title font-bold text-5xl mb-5" }, toDisplayString(props.course.title), 1),
                      createVNode("div", {
                        class: "generic-content font-bold text-xl text-neutral",
                        innerHTML: props.course.short_description
                      }, null, 8, ["innerHTML"]),
                      createVNode("div", { class: "card-actions justify-start mt-3" }, [
                        createVNode("a", {
                          onClick: playSeries,
                          href: "#",
                          class: "inline-flex items-center justify-center h-16 px-10 py-0 text-xl font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-white-600 border-solid rounded-full cursor-pointer select-none hover:text-primary hover:bg-accent hover:border-secondary focus:shadow-xs focus:no-underline w-full"
                        }, [
                          createVNode("div", { class: "flex justify-between" }, [
                            createVNode("div", { class: "mt-1" }, [
                              createVNode(_sfc_main$6, { componentId: "play" })
                            ])
                          ])
                        ])
                      ])
                    ])
                  ]),
                  createVNode(_sfc_main$8, {
                    course: props.course
                  }, null, 8, ["course"]),
                  createVNode(_sfc_main$7, {
                    class: "mt-4",
                    admin: (_v = props.course_instructor) == null ? void 0 : _v.data
                  }, null, 8, ["admin"])
                ])
              ])),
              createVNode(_sfc_main$9, {
                onOpenSidebar: ($event) => isRef(sideBarOpen) ? sideBarOpen.value = true : sideBarOpen = true
              }, null, 8, ["onOpenSidebar"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Pages/FrontEnd/Vendor/GameDev/Course/View.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
