import store from "@/store";
import { MODAL } from "@/store/states/modalState";
import User from "./User";
import UserGoogle from "./UserGoogle";

export default class Modal {
    static get() {
        return store.getters.modal || {};
    }

    static success(msg, title = "Success") {
        store.dispatch(MODAL.ACTION, {
            type: MODAL.SUCCESS,
            payload: {
                content: title,
                subcontent: msg,
            },
        });
    }

    static error(payload) {
        store.dispatch(MODAL.ACTION, {
            type: MODAL.ERROR,
            payload,
        });
    }

    static warning(payload) {
        store.dispatch(MODAL.ACTION, {
            type: MODAL.WARNING,
            payload,
        });
    }

    static confirm(msg, title = "Confirmation") {
        store.dispatch(MODAL.ACTION, {
            type: MODAL.CONFIRM,
            payload: {
                content: title,
                subcontent: msg,
            },
        });
    }

    static onconfirm = () => {};
    static onclose = () => {};

    static close() {
        const { content } = store.getters.modal;
        if (content == "Session Timeout") {
            User.remove();
            UserGoogle.remove();

            if (window.location.pathname != "/login") {
                window.location.href = "";
            }
        }

        store.dispatch(MODAL.ACTION, {
            type: MODAL.CLOSE,
        });

        Modal.onclose();
        Modal.onclose = () => {};
    }

    static logout(msg, title = "SIGN OUT") {
        store.dispatch(MODAL.ACTION, {
            type: MODAL.LOGOUT,
            payload: {
                content: title,
                subcontent: msg,
            },
        });
    }
}
