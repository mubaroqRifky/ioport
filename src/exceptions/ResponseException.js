import Modal from "../controllers/state/Modal";
import User from "../controllers/state/User";
import UserGoogle from "../controllers/state/UserGoogle";
import AuthException from "./AuthException";
import DefaultException from "./DefaultException";
import InputException from "./InputException";

const EXCEPTION = {
    ValidationException: "ValidationException",
    AuthenticationException: "AuthenticationException",
};

export default class ResponseException extends Error {
    constructor(error) {
        super(error);
    }

    static run({ response }) {
        try {
            if (response && typeof response?.data == "object") {
                switch (response.data?.data?.exception) {
                    case EXCEPTION.ValidationException:
                        InputException.run(response.data.data.errors);
                        break;
                    case EXCEPTION.AuthenticationException:
                        AuthException.run({
                            name: response.data?.data?.exception,
                            message: response.data.message,
                        });
                        Modal.onclose = () => {
                            User.remove();
                            UserGoogle.remove();
                            window.location.href = "";
                        };
                        break;
                    default:
                        DefaultException.run({
                            name: response.data?.data?.exception,
                            message: response.data.message,
                        });
                        break;
                }
            } else {
                DefaultException.run({
                    name: response?.data,
                    message: response?.message,
                });
            }
        } catch (error) {
            DefaultException.run(error);
        }
    }
}
