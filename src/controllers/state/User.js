import AuthException from "@/exceptions/AuthException";
import { jwtVerify } from "@/helpers/JwtDecode";
import Modal from "@/controllers/state/Modal";

export default class User {
    static get() {
        try {
            const token = $cookies.get("_token");
            if (token) {
                const { user } = jwtVerify(token);
                return user;
            }

            return false;
        } catch (error) {
            Modal.error({
                content: "Session Timeout",
                subcontent: "Silahkan Login Kembali",
            });

            return false;
            // throw new AuthException(error);
        }
    }

    static async set(token) {
        try {
            $cookies.set("_token", token);
            const { user } = jwtVerify(token);
            localStorage.setItem("_user", JSON.stringify(user));
        } catch (error) {
            throw new AuthException(error);
        }
    }

    static remove() {
        try {
            $cookies.remove("_token");
            localStorage.removeItem("_user");
        } catch (error) {
            throw new AuthException(error);
        }
    }
}
