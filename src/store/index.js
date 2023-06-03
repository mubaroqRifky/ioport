import { createStore } from "vuex";

import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";
import state from "./state";

const store = createStore({
    state,
    getters,
    mutations,
    actions,
});

export default store;
