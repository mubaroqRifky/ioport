const LOADING = {
    MUTATION_FUNC: "loading_mutation",
    ACTION: "loading_action",

    START: "start",
    STOP: "stop",
};

const loading_state = false;

function loading(state) {
    return state.loading_state;
}

function loading_mutation(state, payload) {
    state.loading_state = payload;
}

function loading_action(state, payload) {
    dispatch_loading(state, payload);
}

function dispatch_loading({ commit, state }, { type, payload = false }) {
    switch (type) {
        case LOADING.START:
            commit(LOADING.MUTATION_FUNC, true);
            break;
        case LOADING.STOP:
            commit(LOADING.MUTATION_FUNC, false);
            break;
        default:
            commit(LOADING.MUTATION_FUNC, loading_state);
            break;
    }
}

export { loading, LOADING, loading_state, loading_mutation, loading_action };
