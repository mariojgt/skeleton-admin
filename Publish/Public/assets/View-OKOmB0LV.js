import { defineComponent, toRefs, ref, onMounted, onUnmounted, mergeProps, unref, useSSRContext, isRef, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderSlot, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { a as api } from "./axios-BWWnXGbF.js";
import { _ as _sfc_main$2 } from "./App-CccoNqE7.js";
import { initFlowbite } from "flowbite";
import { usePage } from "@inertiajs/vue3";
import { m as makeMoney } from "./Money-B84zS3T2.js";
import { ExternalLink } from "lucide-vue-next";
import "axios";
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
import "../Frontend_js.js";
import "./index-koWuargk.js";
import "./SeoManager-ytA6mF8s.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Carousel",
  __ssrInlineRender: true,
  props: {
    idPrefix: {
      type: String,
      required: true
    },
    itemCount: {
      type: Number,
      required: true
    },
    autoPlay: {
      type: Boolean,
      default: false
    },
    interval: {
      type: Number,
      default: 5e3
    },
    carouselId: {
      type: String,
      default: "carousel"
    },
    showSliderOptions: {
      type: Boolean,
      default: true
    }
  },
  setup(__props) {
    const props = __props;
    let { idPrefix, itemCount, autoPlay, interval, carouselId } = toRefs(props);
    let currentItem = ref(1);
    let carouselVisible = ref(false);
    let intervalId = null;
    const nextItem = () => {
      if (carouselVisible.value) {
        currentItem.value = currentItem.value % itemCount.value + 1;
        updateCarousel();
      }
    };
    const updateCarousel = () => {
      const carouselItems = document.querySelectorAll(`[data-carousel-item]`);
      carouselItems.forEach((item, index) => {
        if (index === currentItem.value - 1) {
          item.classList.remove("hidden");
          item.classList.add("block");
        } else {
          item.classList.remove("block");
          item.classList.add("hidden");
        }
      });
    };
    let observer = null;
    onMounted(() => {
      if (autoPlay.value) {
        intervalId = setInterval(nextItem, interval.value);
      }
      const carouselElement = document.getElementById(carouselId.value);
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            carouselVisible.value = true;
          } else {
            carouselVisible.value = false;
          }
        },
        { threshold: 0.1 }
      );
      if (carouselElement) observer.observe(carouselElement);
      initFlowbite();
    });
    onUnmounted(() => {
      if (intervalId) {
        clearInterval(intervalId);
      }
      if (observer) observer.disconnect();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: unref(carouselId),
        class: "relative w-full",
        "data-carousel": unref(autoPlay).value ? "slide" : "static"
      }, _attrs))}><div class="relative h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] overflow-hidden rounded-lg"><!--[-->`);
      ssrRenderList(unref(itemCount), (n) => {
        _push(`<div${ssrRenderAttr("data-carousel-item", n === 1 ? "active" : "")} class="hidden duration-700 ease-in-out">`);
        ssrRenderSlot(_ctx.$slots, `${unref(idPrefix)}${n}`, {}, null, _push, _parent);
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
      if (__props.showSliderOptions) {
        _push(`<div class="absolute z-30 flex -translate-x-1/2 bottom-3 sm:bottom-5 left-1/2 space-x-2 sm:space-x-3 rtl:space-x-reverse"><!--[-->`);
        ssrRenderList(unref(itemCount), (n) => {
          _push(`<button type="button" class="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white/50 dark:bg-gray-800/50"${ssrRenderAttr("aria-current", unref(currentItem) === n)}${ssrRenderAttr("aria-label", `Slide ${n}`)}${ssrRenderAttr("data-carousel-slide-to", n - 1)}></button>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-2 sm:px-4 cursor-pointer group focus:outline-none" data-carousel-prev><span class="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"><svg class="w-3 h-3 sm:w-4 sm:h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"></path></svg><span class="sr-only">Previous</span></span></button><button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-2 sm:px-4 cursor-pointer group focus:outline-none" data-carousel-next><span class="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"><svg class="w-3 h-3 sm:w-4 sm:h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"></path></svg><span class="sr-only">Next</span></span></button></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Components/FrontEnd/Utility/Carousel.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "View",
  __ssrInlineRender: true,
  props: {
    product: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const props = __props;
    let displayLogin = ref(false);
    let isLoading = ref(false);
    let downloadingResource = ref(null);
    let openSubscribeModal = ref(false);
    let currentImage = ref(0);
    const getPremiun = async () => {
      if (isLoading.value) return;
      openSubscribeModal.value = true;
    };
    const productCheckout = async () => {
      if (isLoading.value) return;
      isLoading.value = true;
      if (usePage().props.isUserAuth) {
        try {
          const response = await api.post(route("stripe.product.checkout"), {
            products: [{
              id: props.product.id,
              quantity: 1,
              type: "product"
            }]
          });
          window.location.href = response.data.session;
        } catch (error) {
          console.error("Checkout error:", error);
        } finally {
          isLoading.value = false;
        }
      } else {
        displayLogin.value = true;
        isLoading.value = false;
      }
    };
    const downloadResource = async (resource) => {
      if (downloadingResource.value === resource.id) return;
      downloadingResource.value = resource.id;
      try {
        const response = await api.get(route("gamedev.product.resources.download", [props.product.id, resource.id]));
        window.open(response.data.download_url, "_blank");
      } catch (error) {
        console.error("Download error:", error);
      } finally {
        downloadingResource.value = null;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$2, mergeProps({
        backgroundFooterClass: "bg-dark-100",
        headerBackground: "bg-dark-100",
        showHeader: true,
        showFooter: true,
        displayLogin: unref(displayLogin),
        onCloseLogin: ($event) => isRef(displayLogin) ? displayLogin.value = false : displayLogin = false,
        displaySubscription: unref(openSubscribeModal),
        onCloseSubscription: ($event) => isRef(openSubscribeModal) ? openSubscribeModal.value = false : openSubscribeModal = false,
        displayLoading: unref(isLoading),
        onCloseLoading: ($event) => isRef(isLoading) ? isLoading.value = false : isLoading = false
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
          if (_push2) {
            _push2(`<div class="min-h-screen bg-dark-200"${_scopeId}><div class="max-w-6xl mx-auto px-4 py-16"${_scopeId}><div class="grid grid-cols-1 lg:grid-cols-2 gap-16"${_scopeId}><div class="space-y-8"${_scopeId}><div class="lg:hidden"${_scopeId}><h1 class="text-3xl font-medium text-white"${_scopeId}>${ssrInterpolate(__props.product.name)}</h1><div class="mt-2"${_scopeId}><span class="text-sm text-gray-400 uppercase tracking-wide"${_scopeId}>${ssrInterpolate(__props.product.type)}</span></div></div><div class="space-y-4"${_scopeId}><div class="bg-dark-300 rounded-lg overflow-hidden"${_scopeId}>`);
            if (__props.product.media.length > 0) {
              _push2(`<div class="aspect-[16/9]"${_scopeId}><img${ssrRenderAttr("src", __props.product.media[unref(currentImage) || 0].url.default)}${ssrRenderAttr("alt", "Product image " + (unref(currentImage) + 1))} class="w-full h-full object-cover transform transition-transform duration-500"${_scopeId}></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (__props.product.media.length > 1) {
              _push2(`<div class="grid grid-cols-4 gap-3"${_scopeId}><!--[-->`);
              ssrRenderList(__props.product.media, (item, index) => {
                _push2(`<button class="relative rounded-lg overflow-hidden aspect-[4/3] focus:outline-none"${_scopeId}><img${ssrRenderAttr("src", item.url.default)}${ssrRenderAttr("alt", "Thumbnail " + (index + 1))} class="${ssrRenderClass([{ "opacity-50": unref(currentImage) !== index }, "w-full h-full object-cover"])}"${_scopeId}><div class="${ssrRenderClass([unref(currentImage) === index ? "border-blue-500" : "border-transparent", "absolute inset-0 border-2 rounded-lg transition-colors"])}"${_scopeId}></div></button>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="grid grid-cols-2 gap-4"${_scopeId}><div class="p-4 bg-dark-300 rounded-lg"${_scopeId}><div class="flex items-center space-x-3"${_scopeId}><svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"${_scopeId}></path></svg><span class="text-sm text-gray-300"${_scopeId}>Instant Access</span></div></div><div class="p-4 bg-dark-300 rounded-lg"${_scopeId}><div class="flex items-center space-x-3"${_scopeId}><svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"${_scopeId}></path></svg><span class="text-sm text-gray-300"${_scopeId}>Free Updates</span></div></div></div></div><div class="space-y-12"${_scopeId}><div class="hidden lg:block"${_scopeId}><h1 class="text-3xl font-medium text-white"${_scopeId}>${ssrInterpolate(__props.product.name)}</h1><div class="mt-2"${_scopeId}><span class="text-sm text-gray-400 uppercase tracking-wide"${_scopeId}>${ssrInterpolate(__props.product.type)}</span></div></div>`);
            if ((!((_b = (_a = unref(usePage)().props.authUserInfo) == null ? void 0 : _a.data) == null ? void 0 : _b.has_subscription) || !__props.product.free_with_subscription) && !__props.product.is_purchase) {
              _push2(`<div class="bg-dark-300/50 backdrop-blur-sm rounded-xl p-8 border border-dark-200"${_scopeId}><div class="space-y-8"${_scopeId}><div class="space-y-2"${_scopeId}><div class="flex items-baseline gap-3"${_scopeId}><span class="text-4xl font-semibold text-white tracking-tight"${_scopeId}>${ssrInterpolate(__props.product.price > 0 ? unref(makeMoney)(__props.product.price) : "Free")}</span><span class="text-sm text-gray-400 uppercase tracking-wider"${_scopeId}>one-time</span></div><p class="text-sm text-gray-400"${_scopeId}>Includes lifetime updates &amp; support</p></div><div class="relative group"${_scopeId}><div class="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl blur-lg opacity-25 group-hover:opacity-50 transition duration-300"${_scopeId}></div><button${ssrIncludeBooleanAttr(unref(isLoading)) ? " disabled" : ""} class="relative w-full bg-blue-500 hover:bg-blue-600 text-white py-4 px-8 rounded-lg font-medium text-lg transition-all duration-300 overflow-hidden group"${_scopeId}><span class="relative z-10 flex items-center justify-center gap-2"${_scopeId}><span${_scopeId}>${ssrInterpolate(unref(isLoading) ? "Processing..." : "Get Instant Access")}</span>`);
              if (!unref(isLoading)) {
                _push2(`<svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"${_scopeId}></path></svg>`);
              } else {
                _push2(`<svg class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24"${_scopeId}><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"${_scopeId}></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"${_scopeId}></path></svg>`);
              }
              _push2(`</span></button></div>`);
              if (props.product.free_with_subscription) {
                _push2(`<div class="relative group"${_scopeId}><div class="absolute -inset-1 bg-gradient-to-r from-green-600 to-green-400 rounded-xl blur-lg opacity-25 group-hover:opacity-50 transition duration-300"${_scopeId}></div><button${ssrIncludeBooleanAttr(unref(isLoading)) ? " disabled" : ""} class="mt-5 relative w-full bg-green-500 hover:bg-green-600 text-white py-4 px-8 rounded-lg font-medium text-lg transition-all duration-300 overflow-hidden group"${_scopeId}><span class="relative z-10 flex items-center justify-center gap-2"${_scopeId}><span${_scopeId}>${ssrInterpolate(unref(isLoading) ? "Processing..." : "Free with Premium")}</span>`);
                if (!unref(isLoading)) {
                  _push2(`<svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"${_scopeId}></path></svg>`);
                } else {
                  _push2(`<svg class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24"${_scopeId}><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"${_scopeId}></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"${_scopeId}></path></svg>`);
                }
                _push2(`</span></button></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="text-sm border-t border-dark-200 pt-4 mt-4"${_scopeId}><div class="flex flex-col items-center space-y-3"${_scopeId}><div class="flex items-center gap-2 text-gray-400"${_scopeId}><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"${_scopeId}></path></svg><span${_scopeId}>Secure and protected purchase</span></div><p class="text-gray-400 flex flex-wrap items-center justify-center gap-x-2"${_scopeId}> By purchasing, you agree to our <a href="/terms-of-service" class="group inline-flex items-center hover:text-white transition-colors duration-200" target="_blank" rel="noopener noreferrer"${_scopeId}><span class="border-b border-blue-400/30 group-hover:border-blue-400"${_scopeId}>Terms of Service</span>`);
              _push2(ssrRenderComponent(unref(ExternalLink), { class: "w-3 h-3 ml-1 opacity-50 group-hover:opacity-100" }, null, _parent2, _scopeId));
              _push2(`</a> and <a href="/privacy-policy" class="group inline-flex items-center hover:text-white transition-colors duration-200" target="_blank" rel="noopener noreferrer"${_scopeId}><span class="border-b border-blue-400/30 group-hover:border-blue-400"${_scopeId}>Privacy Policy</span>`);
              _push2(ssrRenderComponent(unref(ExternalLink), { class: "w-3 h-3 ml-1 opacity-50 group-hover:opacity-100" }, null, _parent2, _scopeId));
              _push2(`</a></p></div></div><div class="grid grid-cols-2 gap-4 pt-4 border-t border-dark-200"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 13l4 4L19 7"${_scopeId}></path></svg><span class="text-sm text-gray-400"${_scopeId}>Secure Payment</span></div><div class="flex items-center gap-2"${_scopeId}><svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId}></path></svg><span class="text-sm text-gray-400"${_scopeId}>Instant Delivery</span></div></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="space-y-6"${_scopeId}><h2 class="text-xl font-medium text-white"${_scopeId}>About</h2><div class="prose prose-invert max-w-none text-gray-300 prose-headings:font-medium prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg prose-h4:text-base prose-p:text-base prose-p:leading-relaxed prose-p:text-gray-300 prose-strong:text-white prose-strong:font-medium prose-em:text-gray-200 prose-em:italic prose-ul:space-y-2 prose-ul:list-disc prose-ol:space-y-2 prose-ol:list-decimal prose-li:text-gray-300 prose-blockquote:border-l-2 prose-blockquote:border-blue-500 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-400 prose-code:text-blue-400 prose-code:bg-dark-400 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-pre:bg-dark-400 prose-pre:p-4 prose-pre:rounded-lg prose-img:rounded-lg prose-img:shadow-lg prose-a:text-blue-400 prose-a:no-underline hover:prose-a:text-blue-300 prose-a:transition-colors prose-table:w-full prose-table:border-collapse prose-th:text-left prose-th:py-2 prose-th:px-4 prose-th:bg-dark-400 prose-th:text-gray-200 prose-td:py-2 prose-td:px-4 prose-td:border-t prose-td:border-dark-400"${_scopeId}>${__props.product.description ?? ""}</div></div>`);
            if ((__props.product.is_purchase || ((_d = (_c = unref(usePage)().props.authUserInfo) == null ? void 0 : _c.data) == null ? void 0 : _d.has_subscription) && __props.product.free_with_subscription) && ((_e = __props.product.resources) == null ? void 0 : _e.length) > 0) {
              _push2(`<div class="space-y-6"${_scopeId}><h2 class="text-xl font-medium text-white"${_scopeId}>Downloads</h2><div class="space-y-3"${_scopeId}><!--[-->`);
              ssrRenderList(__props.product.resources, (resource) => {
                _push2(`<div class="bg-dark-300 rounded-lg p-4"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><div${_scopeId}><h4 class="font-medium text-gray-200"${_scopeId}>${ssrInterpolate(resource.title)}</h4><p class="text-sm text-gray-400"${_scopeId}>${ssrInterpolate(resource.description)}</p></div><button class="${ssrRenderClass([{ "opacity-75 cursor-wait": unref(downloadingResource) === resource.id }, "ml-4 px-4 py-2 bg-dark-200 hover:bg-dark-100 rounded-lg text-sm font-medium text-gray-300 transition-colors duration-200"])}"${_scopeId}>${ssrInterpolate(unref(downloadingResource) === resource.id ? "Downloading..." : "Download")}</button></div></div>`);
              });
              _push2(`<!--]--></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="space-y-6"${_scopeId}><h2 class="text-xl font-medium text-white"${_scopeId}>FAQ</h2><div class="space-y-4"${_scopeId}><div class="bg-dark-300 rounded-lg p-4"${_scopeId}><h4 class="font-medium text-gray-200"${_scopeId}>Access Duration</h4><p class="mt-1 text-sm text-gray-400"${_scopeId}>Lifetime access including all future updates. </p></div><div class="bg-dark-300 rounded-lg p-4"${_scopeId}><h4 class="font-medium text-gray-200"${_scopeId}>Usage Rights</h4><p class="mt-1 text-sm text-gray-400"${_scopeId}>Licensed for use in both personal and commercial projects.</p></div></div></div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "min-h-screen bg-dark-200" }, [
                createVNode("div", { class: "max-w-6xl mx-auto px-4 py-16" }, [
                  createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-16" }, [
                    createVNode("div", { class: "space-y-8" }, [
                      createVNode("div", { class: "lg:hidden" }, [
                        createVNode("h1", { class: "text-3xl font-medium text-white" }, toDisplayString(__props.product.name), 1),
                        createVNode("div", { class: "mt-2" }, [
                          createVNode("span", { class: "text-sm text-gray-400 uppercase tracking-wide" }, toDisplayString(__props.product.type), 1)
                        ])
                      ]),
                      createVNode("div", { class: "space-y-4" }, [
                        createVNode("div", { class: "bg-dark-300 rounded-lg overflow-hidden" }, [
                          __props.product.media.length > 0 ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "aspect-[16/9]"
                          }, [
                            createVNode("img", {
                              src: __props.product.media[unref(currentImage) || 0].url.default,
                              alt: "Product image " + (unref(currentImage) + 1),
                              class: "w-full h-full object-cover transform transition-transform duration-500"
                            }, null, 8, ["src", "alt"])
                          ])) : createCommentVNode("", true)
                        ]),
                        __props.product.media.length > 1 ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "grid grid-cols-4 gap-3"
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.product.media, (item, index) => {
                            return openBlock(), createBlock("button", {
                              key: index,
                              onClick: ($event) => isRef(currentImage) ? currentImage.value = index : currentImage = index,
                              class: "relative rounded-lg overflow-hidden aspect-[4/3] focus:outline-none"
                            }, [
                              createVNode("img", {
                                src: item.url.default,
                                alt: "Thumbnail " + (index + 1),
                                class: ["w-full h-full object-cover", { "opacity-50": unref(currentImage) !== index }]
                              }, null, 10, ["src", "alt"]),
                              createVNode("div", {
                                class: ["absolute inset-0 border-2 rounded-lg transition-colors", unref(currentImage) === index ? "border-blue-500" : "border-transparent"]
                              }, null, 2)
                            ], 8, ["onClick"]);
                          }), 128))
                        ])) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                        createVNode("div", { class: "p-4 bg-dark-300 rounded-lg" }, [
                          createVNode("div", { class: "flex items-center space-x-3" }, [
                            (openBlock(), createBlock("svg", {
                              class: "w-5 h-5 text-blue-400",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "1.5",
                                d: "M13 10V3L4 14h7v7l9-11h-7z"
                              })
                            ])),
                            createVNode("span", { class: "text-sm text-gray-300" }, "Instant Access")
                          ])
                        ]),
                        createVNode("div", { class: "p-4 bg-dark-300 rounded-lg" }, [
                          createVNode("div", { class: "flex items-center space-x-3" }, [
                            (openBlock(), createBlock("svg", {
                              class: "w-5 h-5 text-blue-400",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "1.5",
                                d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                              })
                            ])),
                            createVNode("span", { class: "text-sm text-gray-300" }, "Free Updates")
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "space-y-12" }, [
                      createVNode("div", { class: "hidden lg:block" }, [
                        createVNode("h1", { class: "text-3xl font-medium text-white" }, toDisplayString(__props.product.name), 1),
                        createVNode("div", { class: "mt-2" }, [
                          createVNode("span", { class: "text-sm text-gray-400 uppercase tracking-wide" }, toDisplayString(__props.product.type), 1)
                        ])
                      ]),
                      (!((_g = (_f = unref(usePage)().props.authUserInfo) == null ? void 0 : _f.data) == null ? void 0 : _g.has_subscription) || !__props.product.free_with_subscription) && !__props.product.is_purchase ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "bg-dark-300/50 backdrop-blur-sm rounded-xl p-8 border border-dark-200"
                      }, [
                        createVNode("div", { class: "space-y-8" }, [
                          createVNode("div", { class: "space-y-2" }, [
                            createVNode("div", { class: "flex items-baseline gap-3" }, [
                              createVNode("span", { class: "text-4xl font-semibold text-white tracking-tight" }, toDisplayString(__props.product.price > 0 ? unref(makeMoney)(__props.product.price) : "Free"), 1),
                              createVNode("span", { class: "text-sm text-gray-400 uppercase tracking-wider" }, "one-time")
                            ]),
                            createVNode("p", { class: "text-sm text-gray-400" }, "Includes lifetime updates & support")
                          ]),
                          createVNode("div", { class: "relative group" }, [
                            createVNode("div", { class: "absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl blur-lg opacity-25 group-hover:opacity-50 transition duration-300" }),
                            createVNode("button", {
                              onClick: productCheckout,
                              disabled: unref(isLoading),
                              class: "relative w-full bg-blue-500 hover:bg-blue-600 text-white py-4 px-8 rounded-lg font-medium text-lg transition-all duration-300 overflow-hidden group"
                            }, [
                              createVNode("span", { class: "relative z-10 flex items-center justify-center gap-2" }, [
                                createVNode("span", null, toDisplayString(unref(isLoading) ? "Processing..." : "Get Instant Access"), 1),
                                !unref(isLoading) ? (openBlock(), createBlock("svg", {
                                  key: 0,
                                  class: "w-5 h-5 transition-transform group-hover:translate-x-1",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24"
                                }, [
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M14 5l7 7m0 0l-7 7m7-7H3"
                                  })
                                ])) : (openBlock(), createBlock("svg", {
                                  key: 1,
                                  class: "w-5 h-5 animate-spin",
                                  fill: "none",
                                  viewBox: "0 0 24 24"
                                }, [
                                  createVNode("circle", {
                                    class: "opacity-25",
                                    cx: "12",
                                    cy: "12",
                                    r: "10",
                                    stroke: "currentColor",
                                    "stroke-width": "4"
                                  }),
                                  createVNode("path", {
                                    class: "opacity-75",
                                    fill: "currentColor",
                                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                  })
                                ]))
                              ])
                            ], 8, ["disabled"])
                          ]),
                          props.product.free_with_subscription ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "relative group"
                          }, [
                            createVNode("div", { class: "absolute -inset-1 bg-gradient-to-r from-green-600 to-green-400 rounded-xl blur-lg opacity-25 group-hover:opacity-50 transition duration-300" }),
                            createVNode("button", {
                              onClick: getPremiun,
                              disabled: unref(isLoading),
                              class: "mt-5 relative w-full bg-green-500 hover:bg-green-600 text-white py-4 px-8 rounded-lg font-medium text-lg transition-all duration-300 overflow-hidden group"
                            }, [
                              createVNode("span", { class: "relative z-10 flex items-center justify-center gap-2" }, [
                                createVNode("span", null, toDisplayString(unref(isLoading) ? "Processing..." : "Free with Premium"), 1),
                                !unref(isLoading) ? (openBlock(), createBlock("svg", {
                                  key: 0,
                                  class: "w-5 h-5 transition-transform group-hover:translate-x-1",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24"
                                }, [
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M14 5l7 7m0 0l-7 7m7-7H3"
                                  })
                                ])) : (openBlock(), createBlock("svg", {
                                  key: 1,
                                  class: "w-5 h-5 animate-spin",
                                  fill: "none",
                                  viewBox: "0 0 24 24"
                                }, [
                                  createVNode("circle", {
                                    class: "opacity-25",
                                    cx: "12",
                                    cy: "12",
                                    r: "10",
                                    stroke: "currentColor",
                                    "stroke-width": "4"
                                  }),
                                  createVNode("path", {
                                    class: "opacity-75",
                                    fill: "currentColor",
                                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                  })
                                ]))
                              ])
                            ], 8, ["disabled"])
                          ])) : createCommentVNode("", true),
                          createVNode("div", { class: "text-sm border-t border-dark-200 pt-4 mt-4" }, [
                            createVNode("div", { class: "flex flex-col items-center space-y-3" }, [
                              createVNode("div", { class: "flex items-center gap-2 text-gray-400" }, [
                                (openBlock(), createBlock("svg", {
                                  class: "w-4 h-4",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24"
                                }, [
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "1.5",
                                    d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                  })
                                ])),
                                createVNode("span", null, "Secure and protected purchase")
                              ]),
                              createVNode("p", { class: "text-gray-400 flex flex-wrap items-center justify-center gap-x-2" }, [
                                createTextVNode(" By purchasing, you agree to our "),
                                createVNode("a", {
                                  href: "/terms-of-service",
                                  class: "group inline-flex items-center hover:text-white transition-colors duration-200",
                                  target: "_blank",
                                  rel: "noopener noreferrer"
                                }, [
                                  createVNode("span", { class: "border-b border-blue-400/30 group-hover:border-blue-400" }, "Terms of Service"),
                                  createVNode(unref(ExternalLink), { class: "w-3 h-3 ml-1 opacity-50 group-hover:opacity-100" })
                                ]),
                                createTextVNode(" and "),
                                createVNode("a", {
                                  href: "/privacy-policy",
                                  class: "group inline-flex items-center hover:text-white transition-colors duration-200",
                                  target: "_blank",
                                  rel: "noopener noreferrer"
                                }, [
                                  createVNode("span", { class: "border-b border-blue-400/30 group-hover:border-blue-400" }, "Privacy Policy"),
                                  createVNode(unref(ExternalLink), { class: "w-3 h-3 ml-1 opacity-50 group-hover:opacity-100" })
                                ])
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "grid grid-cols-2 gap-4 pt-4 border-t border-dark-200" }, [
                            createVNode("div", { class: "flex items-center gap-2" }, [
                              (openBlock(), createBlock("svg", {
                                class: "w-5 h-5 text-green-400",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24"
                              }, [
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "1.5",
                                  d: "M5 13l4 4L19 7"
                                })
                              ])),
                              createVNode("span", { class: "text-sm text-gray-400" }, "Secure Payment")
                            ]),
                            createVNode("div", { class: "flex items-center gap-2" }, [
                              (openBlock(), createBlock("svg", {
                                class: "w-5 h-5 text-green-400",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24"
                              }, [
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "1.5",
                                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                })
                              ])),
                              createVNode("span", { class: "text-sm text-gray-400" }, "Instant Delivery")
                            ])
                          ])
                        ])
                      ])) : createCommentVNode("", true),
                      createVNode("div", { class: "space-y-6" }, [
                        createVNode("h2", { class: "text-xl font-medium text-white" }, "About"),
                        createVNode("div", {
                          class: "prose prose-invert max-w-none text-gray-300 prose-headings:font-medium prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg prose-h4:text-base prose-p:text-base prose-p:leading-relaxed prose-p:text-gray-300 prose-strong:text-white prose-strong:font-medium prose-em:text-gray-200 prose-em:italic prose-ul:space-y-2 prose-ul:list-disc prose-ol:space-y-2 prose-ol:list-decimal prose-li:text-gray-300 prose-blockquote:border-l-2 prose-blockquote:border-blue-500 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-400 prose-code:text-blue-400 prose-code:bg-dark-400 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-pre:bg-dark-400 prose-pre:p-4 prose-pre:rounded-lg prose-img:rounded-lg prose-img:shadow-lg prose-a:text-blue-400 prose-a:no-underline hover:prose-a:text-blue-300 prose-a:transition-colors prose-table:w-full prose-table:border-collapse prose-th:text-left prose-th:py-2 prose-th:px-4 prose-th:bg-dark-400 prose-th:text-gray-200 prose-td:py-2 prose-td:px-4 prose-td:border-t prose-td:border-dark-400",
                          innerHTML: __props.product.description
                        }, null, 8, ["innerHTML"])
                      ]),
                      (__props.product.is_purchase || ((_i = (_h = unref(usePage)().props.authUserInfo) == null ? void 0 : _h.data) == null ? void 0 : _i.has_subscription) && __props.product.free_with_subscription) && ((_j = __props.product.resources) == null ? void 0 : _j.length) > 0 ? (openBlock(), createBlock("div", {
                        key: 1,
                        class: "space-y-6"
                      }, [
                        createVNode("h2", { class: "text-xl font-medium text-white" }, "Downloads"),
                        createVNode("div", { class: "space-y-3" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.product.resources, (resource) => {
                            return openBlock(), createBlock("div", {
                              key: resource.id,
                              class: "bg-dark-300 rounded-lg p-4"
                            }, [
                              createVNode("div", { class: "flex items-center justify-between" }, [
                                createVNode("div", null, [
                                  createVNode("h4", { class: "font-medium text-gray-200" }, toDisplayString(resource.title), 1),
                                  createVNode("p", { class: "text-sm text-gray-400" }, toDisplayString(resource.description), 1)
                                ]),
                                createVNode("button", {
                                  onClick: ($event) => downloadResource(resource),
                                  class: ["ml-4 px-4 py-2 bg-dark-200 hover:bg-dark-100 rounded-lg text-sm font-medium text-gray-300 transition-colors duration-200", { "opacity-75 cursor-wait": unref(downloadingResource) === resource.id }]
                                }, toDisplayString(unref(downloadingResource) === resource.id ? "Downloading..." : "Download"), 11, ["onClick"])
                              ])
                            ]);
                          }), 128))
                        ])
                      ])) : createCommentVNode("", true),
                      createVNode("div", { class: "space-y-6" }, [
                        createVNode("h2", { class: "text-xl font-medium text-white" }, "FAQ"),
                        createVNode("div", { class: "space-y-4" }, [
                          createVNode("div", { class: "bg-dark-300 rounded-lg p-4" }, [
                            createVNode("h4", { class: "font-medium text-gray-200" }, "Access Duration"),
                            createVNode("p", { class: "mt-1 text-sm text-gray-400" }, "Lifetime access including all future updates. ")
                          ]),
                          createVNode("div", { class: "bg-dark-300 rounded-lg p-4" }, [
                            createVNode("h4", { class: "font-medium text-gray-200" }, "Usage Rights"),
                            createVNode("p", { class: "mt-1 text-sm text-gray-400" }, "Licensed for use in both personal and commercial projects.")
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
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Pages/FrontEnd/Vendor/GameDev/Store/View.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
