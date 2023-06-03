import FetchApi from "./FetchApi";

export default class BaseAPI extends FetchApi {
    path_url = "";

    constructor(path_url = "") {
        super(path_url);
        this.path_url = path_url;
    }

    getData({ id, params, prepend = "" } = { id: null, prepend: "" }) {
        const url = id ? this.path_url + "/" + prepend + id : this.path_url;

        return this.fetch(url, { params });
    }

    postData(
        body,
        { id, prepend = "", method = "post", params } = {
            id: null,
            prepend: "",
            method: "post",
        }
    ) {
        const url = id ? this.path_url + "/" + prepend + id : this.path_url;

        return this.fetch(url, { body, method, params });
    }

    putData(id, body, prepend = "") {
        return this.fetch(this.path_url + "/" + prepend + id, {
            body,
            method: "put",
        });
    }

    patchData(id, body, prepend = "") {
        return this.fetch(this.path_url + "/" + prepend + id, {
            body,
            method: "patch",
        });
    }

    deleteData(id, prepend = "") {
        return this.fetch(this.path_url + "/" + prepend + id, {
            method: "delete",
        });
    }
}
