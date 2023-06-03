import AuthException from "@/exceptions/AuthException";
import VueJwtDecode from "vue-jwt-decode";

export function jwtDecode(token) {
    try {
        return VueJwtDecode.decode(token);
    } catch (error) {
        throw new AuthException(error);
    }
}

export function jwtVerify(token) {
    try {
        const decode = VueJwtDecode.decode(token);
        const exp_date = new Date(decode.exp * 1000);
        const current_date = new Date().getTime();

        if (current_date < exp_date) return decode;

        throw new AuthException("Session Timeout");
    } catch (error) {
        throw new AuthException(error);
    }
}
