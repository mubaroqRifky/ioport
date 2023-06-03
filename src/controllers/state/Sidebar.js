import store from "@/store";
import { SIDEBAR } from "@/store/states/sidebarState";

export default class Sidebar {
    static get() {
        return store.getters.sidebar || {};
    }

    static open(payload) {
        store.dispatch(SIDEBAR.ACTION, {
            type: SIDEBAR.OPEN,
        });
    }

    static close() {
        store.dispatch(SIDEBAR.ACTION, {
            type: SIDEBAR.CLOSE,
        });
    }
}
