import { boot } from "quasar/wrappers";
import { Notify } from "quasar";
import axios from "axios";

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const api = axios.create({
    baseURL: process.env.API_BASE_URL || "http://bookings.dsm",
    timeout: 5000,
});

export default boot(({ app, store, router }) => {
    // for use inside Vue files (Options API) through this.$axios and this.$api

    app.config.globalProperties.$axios = axios;
    // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
    //       so you won't necessarily have to import axios in each vue file

    app.config.globalProperties.$api = api;
    // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
    //       so you can easily perform requests against your app's API

    // Add a response interceptor
    api.interceptors.response.use(
        function (response) {
            return response;
        },
        function (error) {
            const status = error.response.status;
            if (status === 401 && store.getters["user/isAuth"] === true) {
                store.commit("user/saveToken", "");
                router.push({
                    name: "signin",
                });
            } else if (
                status === 402 &&
                store.getters["user/isAuth"] === true
            ) {
                Notify.create({
                    type: "warning",
                    message: error.response.data.message,
                });
            } else if (
                status === 403 &&
                store.getters["user/isAuth"] === true
            ) {
                Notify.create({
                    type: "warning",
                    message: "You are not authorised to perform that action",
                });
            } else if (status === 400) {
                Notify.create({
                    type: "warning",
                    message:
                        error.response.data.message ??
                        "Error please contact the support.",
                });
            }
            return Promise.reject(error);
        }
    );
});

export { api, axios };
