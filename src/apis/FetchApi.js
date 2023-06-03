import Axios from "axios";
import Exception from "./Exception";
import Response from "./Response";

export default class FetchAPI {
    _axios = Axios;
    path_url = "";

    constructor(path_url = "") {
        this.path_url = path_url;

        const token = $cookies.get("_token");
        Axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }

    fetch(
        url = this.path_url,
        { method = "get", body, params, options } = {
            method: "get",
        }
    ) {
        let result = null;
        if (method == "get") {
            result = this._axios[method](url, { ...options, params });
        } else {
            result = this._axios[method](url, body, { ...options, params });
        }

        return result.then(Response.resolve).catch(Exception.reject);
    }
}
