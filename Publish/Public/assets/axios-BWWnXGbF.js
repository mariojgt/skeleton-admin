import axios from "axios";
const api = axios.create({});
api.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
api.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    const status = error.response.status;
    if (status === 401) {
      console.log("401");
    } else if (status === 402) {
      console.log("402");
    } else if (status === 403) {
      console.log("403");
    } else if (status === 400) {
      console.log("400");
    }
    return Promise.reject(error);
  }
);
export {
  api as a
};
