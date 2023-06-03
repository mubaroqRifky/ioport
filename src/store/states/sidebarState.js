const SIDEBAR = {
    MUTATION_FUNC: "sidebar_mutation",
    ACTION: "sidebar_action",

    OPEN: "open",
    CLOSE: "close",
};

const sidebar_state = {
    open: true,
};

function sidebar(state) {
    return state.sidebar_state;
}

function sidebar_mutation(state, payload) {
    state.sidebar_state = payload;
}

function sidebar_action(state, payload) {
    dispatch_sidebar(state, payload);
}

function dispatch_sidebar({ commit, state }, { type, payload = {} }) {
    switch (type) {
        case SIDEBAR.OPEN:
            commit(SIDEBAR.MUTATION_FUNC, { open: true });
            break;
        case SIDEBAR.CLOSE:
            commit(SIDEBAR.MUTATION_FUNC, { open: false });
            break;
        default:
            commit(SIDEBAR.MUTATION_FUNC, sidebar_state);
            break;
    }
}

export { SIDEBAR, sidebar, sidebar_state, sidebar_mutation, sidebar_action };
