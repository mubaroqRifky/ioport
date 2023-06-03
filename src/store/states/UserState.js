const USER = {
    MUTATION_FUNC: "user_mutation",
    ACTION: "user_action",

    SET: "set",
    REMOVE: "remove",
};

const user_state = {};

function user(state) {
    return state.user_state;
}

function user_mutation(state, payload) {
    state.user_state = payload;
}

function user_action(state, payload) {
    dispatch_user(state, payload);
}

function dispatch_user({ commit, state }, { type, payload = {} }) {
    switch (type) {
        case USER.SET:
            commit(USER.MUTATION_FUNC, payload);
            break;
        case USER.REMOVE:
            commit(USER.MUTATION_FUNC, {});
            break;
        default:
            commit(USER.MUTATION_FUNC, user_state);
            break;
    }
}

export { USER, user, user_state, user_mutation, user_action };
