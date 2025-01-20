var _a;
import { ref, createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";
import { r as resolvePageComponent } from "./assets/index-koWuargk.js";
import naive from "naive-ui";
function useRecaptcha() {
  const isLoading = ref(false);
  const error = ref(null);
  const getToken = async (action) => {
    isLoading.value = true;
    error.value = null;
    try {
      return await new Promise((resolve) => {
        grecaptcha.enterprise.ready(async () => {
          try {
            const token = await grecaptcha.enterprise.execute(
              window._recaptchaSiteKey,
              { action }
            );
            resolve(token);
          } catch (e) {
            error.value = "Failed to get reCAPTCHA token";
            resolve(null);
          }
        });
      });
    } catch (e) {
      error.value = "reCAPTCHA initialization failed";
      return null;
    } finally {
      isLoading.value = false;
    }
  };
  return {
    getToken,
    isLoading,
    error
  };
}
const vRecaptcha = {
  mounted(el, binding) {
    const { getToken } = useRecaptcha();
    const action = binding.value || el.getAttribute("data-action") || "submit";
    if (el.tagName === "BUTTON" || el.tagName === "FORM") {
      el.addEventListener(el.tagName === "FORM" ? "submit" : "click", async (e) => {
        e.preventDefault();
        const token = await getToken(action);
        if (token) {
          if (el.tagName === "FORM") {
            const input = document.createElement("input");
            input.type = "hidden";
            input.name = "recaptcha_token";
            input.value = token;
            el.appendChild(input);
            el.submit();
          } else {
            el.dispatchEvent(new CustomEvent("recaptcha-success", {
              detail: { token }
            }));
          }
        }
      });
    }
  }
};
const recaptchaPlugin = {
  install(app, options) {
    window._recaptchaSiteKey = options.siteKey;
    app.directive("recaptcha", vRecaptcha);
  }
};
const RECAPTCHA_SITE_KEY = (_a = document.querySelector('meta[name="recaptcha-key"]')) == null ? void 0 : _a.getAttribute("content");
createInertiaApp({
  progress: {
    // The delay after which the progress bar will appear, in milliseconds...
    delay: 250,
    // The color of the progress bar...
    color: "#fff",
    // Whether to include the default NProgress styles...
    includeCSS: true,
    // Whether the NProgress spinner will be shown...
    showSpinner: false
  },
  resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, /* @__PURE__ */ Object.assign({ "./Pages/Auth/Frontend/Index.vue": () => import("./assets/Index-BQt4rG-e.js"), "./Pages/Auth/Frontend/Register.vue": () => import("./assets/Register-Clf1MQUy.js"), "./Pages/Auth/Frontend/Reset.vue": () => import("./assets/Reset-CWZzSi79.js"), "./Pages/Auth/Frontend/ResetPassword.vue": () => import("./assets/ResetPassword-BNtDoZpu.js"), "./Pages/BackEnd/Vendor/skeleton-store/home/index.vue": () => import("./assets/index-B1tJoiXS.js"), "./Pages/FrontEnd/Dashboard/Index.vue": () => import("./assets/Index-BzwBN_TS.js"), "./Pages/FrontEnd/User/Components/AutenticatorManager.vue": () => import("./assets/AutenticatorManager-DFNiVGku.js"), "./Pages/FrontEnd/User/Components/EditDetails.vue": () => import("./assets/EditDetails-C619MRnt.js"), "./Pages/FrontEnd/User/Components/PasswordUpdate.vue": () => import("./assets/PasswordUpdate-D50Ukp4I.js"), "./Pages/FrontEnd/User/Edit.vue": () => import("./assets/Edit-Z-SNy5zk.js"), "./Pages/FrontEnd/Vendor/GameDev/Blog/Index.vue": () => import("./assets/Index-Cxl8U5Ux.js"), "./Pages/FrontEnd/Vendor/GameDev/Blog/View.vue": () => import("./assets/View-CdLl7ESF.js"), "./Pages/FrontEnd/Vendor/GameDev/Course/Certificate.vue": () => import("./assets/Certificate-BcwSmJ6F.js"), "./Pages/FrontEnd/Vendor/GameDev/Course/Index.vue": () => import("./assets/Index-16wD6fEz.js"), "./Pages/FrontEnd/Vendor/GameDev/Course/View.vue": () => import("./assets/View-DpxQAoj1.js"), "./Pages/FrontEnd/Vendor/GameDev/Course/ViewComponents/EpisodeGuide.vue": () => import("./assets/EpisodeGuide-Cr9GhTmQ.js"), "./Pages/FrontEnd/Vendor/GameDev/Course/ViewComponents/PremiumPrompt.vue": () => import("./assets/PremiumPrompt-ghKTF9-i.js"), "./Pages/FrontEnd/Vendor/GameDev/Course/ViewComponents/RelatedCourses.vue": () => import("./assets/RelatedCourses-Bg9-ACb0.js"), "./Pages/FrontEnd/Vendor/GameDev/Course/ViewComponents/Sidebar.vue": () => import("./assets/Sidebar-BSfMXX3B.js"), "./Pages/FrontEnd/Vendor/GameDev/Course/ViewComponents/SidebarControl.vue": () => import("./assets/SidebarControl-CAeet_DO.js"), "./Pages/FrontEnd/Vendor/GameDev/Forum/Index.vue": () => import("./assets/Index-N1WqsEnu.js"), "./Pages/FrontEnd/Vendor/GameDev/Home/HeroSection01.vue": () => import("./assets/HeroSection01-D6_q5OY9.js"), "./Pages/FrontEnd/Vendor/GameDev/Home/HeroSection02.vue": () => import("./assets/HeroSection02-HPHfBzEF.js"), "./Pages/FrontEnd/Vendor/GameDev/Home/Index.vue": () => import("./assets/Index-ChnbxJ1V.js"), "./Pages/FrontEnd/Vendor/GameDev/Legal/Contact.vue": () => import("./assets/Contact-D6iBoHIf.js"), "./Pages/FrontEnd/Vendor/GameDev/Legal/Guidelines.vue": () => import("./assets/Guidelines-BmmIvqOt.js"), "./Pages/FrontEnd/Vendor/GameDev/Legal/Leaderboard.vue": () => import("./assets/Leaderboard-TV8G5xAg.js"), "./Pages/FrontEnd/Vendor/GameDev/Legal/Pricing.vue": () => import("./assets/Pricing-DhRrmA7L.js"), "./Pages/FrontEnd/Vendor/GameDev/Legal/PrivacyPolicy.vue": () => import("./assets/PrivacyPolicy-CX6mr3UG.js"), "./Pages/FrontEnd/Vendor/GameDev/Legal/RoadMap.vue": () => import("./assets/RoadMap-BUR_Dawb.js"), "./Pages/FrontEnd/Vendor/GameDev/Legal/Terms.vue": () => import("./assets/Terms-Dm88FBdg.js"), "./Pages/FrontEnd/Vendor/GameDev/Store/Index.vue": () => import("./assets/Index-DQBJZa1i.js"), "./Pages/FrontEnd/Vendor/GameDev/Store/View.vue": () => import("./assets/View-OKOmB0LV.js"), "./Pages/FrontEnd/Vendor/GameDev/Store/ViewComponents/EpisodeGuide.vue": () => import("./assets/EpisodeGuide-DgbJW5v0.js"), "./Pages/FrontEnd/Vendor/GameDev/Store/ViewComponents/Sidebar.vue": () => import("./assets/Sidebar-BSOF6N6w.js"), "./Pages/FrontEnd/Vendor/GameDev/Store/ViewComponents/SidebarControl.vue": () => import("./assets/SidebarControl-DxX6yhic.js"), "./Pages/FrontEnd/Vendor/GameDev/User/Achievement.vue": () => import("./assets/Achievement-CwCqtYdp.js"), "./Pages/FrontEnd/Vendor/GameDev/User/AchievementCard.vue": () => import("./assets/AchievementCard-CGJsBAB0.js"), "./Pages/FrontEnd/Vendor/GameDev/User/AchievementModal.vue": () => import("./assets/AchievementModal-DGU2HWVJ.js"), "./Pages/FrontEnd/Vendor/GameDev/User/Components/PaidItemsList.vue": () => import("./assets/PaidItemsList-CP8Yq6pa.js"), "./Pages/FrontEnd/Vendor/GameDev/User/Components/SubscriptionManagement.vue": () => import("./assets/SubscriptionManagement-C8RVr8em.js"), "./Pages/FrontEnd/Vendor/GameDev/User/Index.vue": () => import("./assets/Index-B9JehUUY.js"), "./Pages/FrontEnd/Vendor/GameDev/User/QRShareModal.vue": () => import("./assets/QRShareModal-BqGXQ-jw.js"), "./Pages/FrontEnd/Vendor/skeleton-store/home/index.vue": () => import("./assets/index-CjHZR7PV.js"), "./Pages/Vendor/skeleton-store/index.vue": () => import("./assets/index-BhkxXoTH.js") })),
  setup({ el, App, props, plugin }) {
    const app = createApp({ render: () => h(App, props) });
    app.use(plugin);
    app.use(naive);
    app.use(recaptchaPlugin, {
      siteKey: RECAPTCHA_SITE_KEY
    });
    app.mount(el);
  }
});
export {
  useRecaptcha as u
};
