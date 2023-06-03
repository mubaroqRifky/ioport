import AxiosPlugin from "./axios";
import VueCookies from "vue-cookies";
import ErrorHandler from "@/exceptions/ErrorHandler";

export default {
    AxiosPlugin,
    VueCookies,
};

window.ErrorHandler = ErrorHandler;
