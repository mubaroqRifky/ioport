import BaseAPI from "./BaseAPI";

export default class Login extends BaseAPI {
    path_url = "login";

    /**
     * @payload { access_token }
     */
    constructor(path_url) {
        super(path_url);
    }
}
