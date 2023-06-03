import Axios from "axios";

const url_api = import.meta.env.VITE_APP_URL || window.location.origin;

Axios.defaults.baseURL = url_api + "/api/";

export default {
    install(app, options) {
        app.config.globalProperties.$http = Axios;
    },
};
