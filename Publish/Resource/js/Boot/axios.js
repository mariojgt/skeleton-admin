import axios from "axios";

const api = axios.create({});

// Add XMLHttpRequest to axios
api.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

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
            if (status === 401 ) {
                console.log("401");
            } else if (
                status === 402             ) {
                console.log("402");
            } else if (
                status === 403
            ) {
                console.log("403");
            } else if (status === 400) {
                console.log("400");
            }
            return Promise.reject(error);
        }
    );
});

export { api, axios };
