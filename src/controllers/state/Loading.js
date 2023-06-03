import store from "@/store";
import { LOADING } from "@/store/states/loadingState";

export default class Loading {
    static get() {
        return store.getters.loading || false;
    }

    static start() {
        store.dispatch(LOADING.ACTION, {
            type: LOADING.START,
        });
    }

    static stop() {
        store.dispatch(LOADING.ACTION, {
            type: LOADING.STOP,
        });
    }
}
