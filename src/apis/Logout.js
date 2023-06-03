import BaseAPI from "./BaseAPI";

export default class Logout extends BaseAPI {
    path_url = "logout";

    constructor(path_url) {
        super(path_url);
    }
}
