import Modal from "@/controllers/state/Modal";

export default class AuthException extends Error {
    constructor(error) {
        super(error);
    }

    static run(error) {
        Modal.error({
            content: error.name || "Session Timeout",
            subcontent: error.message || "Silahkan Login Kembali",
        });
    }
}
