const G_USER = {
    MUTATION_FUNC: "guser_mutation",
    ACTION: "guser_action",

    SET: "set",
    REMOVE: "remove",
};

const guser_state = {
    email: "",
    name: "",
    picture: "",
};

function guser(state) {
    return state.guser_state;
}

function guser_mutation(state, payload) {
    state.guser_state = payload;
}

function guser_action(state, payload) {
    dispatch_guser(state, payload);
}

function dispatch_guser({ commit, state }, { type, payload = {} }) {
    switch (type) {
        case G_USER.SET:
            commit(G_USER.MUTATION_FUNC, payload);
            break;
        case G_USER.REMOVE:
            commit(G_USER.MUTATION_FUNC, {});
            break;
        default:
            commit(G_USER.MUTATION_FUNC, guser_state);
            break;
    }
}

export { G_USER, guser, guser_state, guser_mutation, guser_action };
