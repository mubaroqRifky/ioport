import store from "@/store";
import { G_USER } from "@/store/states/userGoogleState";
import { jwtVerify } from "@/helpers/JwtDecode";

export default class UserGoogle {
    static get() {
        try {
            return store.getters.guser;
        } catch (error) {
            throw new ErrorHandler(error);
        }
    }

    static async set(id_token) {
        try {
            $cookies.set("_gtoken", id_token);
            let decode = jwtVerify(id_token);

            if (decode) {
                localStorage.setItem("_guser", JSON.stringify(decode));
            } else {
                decode = JSON.parse(localStorage.getItem("_guser"));
            }

            store.dispatch(G_USER.ACTION, {
                type: G_USER.SET,
                payload: decode,
            });
        } catch (error) {
            throw new ErrorHandler(error);
        }
    }

    static remove() {
        try {
            $cookies.remove("_gtoken");
            localStorage.removeItem("_guser");

            store.dispatch(G_USER.ACTION, {
                type: G_USER.REMOVE,
            });
        } catch (error) {
            throw new ErrorHandler(error);
        }
    }
}
