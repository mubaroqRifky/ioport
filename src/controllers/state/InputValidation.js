import store from "@/store";
import { INPUT_ERRORS } from "@/store/states/inputErrorState";

export default class InputValidation {
    static get() {
        return store.getters.input_errors || {};
    }

    static set(payload) {
        store.dispatch(INPUT_ERRORS.ACTION, {
            type: INPUT_ERRORS.SET,
            payload,
        });
    }
}
