const INPUT_ERRORS = {
    MUTATION_FUNC: "input_errors_mutation",
    ACTION: "input_errors_action",

    SET: "set",
    REMOVE: "remove",
};

const input_errors_state = {};

function input_errors(state) {
    return state.input_errors_state;
}

function input_errors_mutation(state, payload) {
    state.input_errors_state = payload;
}

function input_errors_action(state, payload) {
    dispatch_input_errors(state, payload);
}

function dispatch_input_errors({ commit, state }, { type, payload = {} }) {
    switch (type) {
        case INPUT_ERRORS.SET:
            commit(INPUT_ERRORS.MUTATION_FUNC, payload);
            break;
        case INPUT_ERRORS.REMOVE:
            commit(INPUT_ERRORS.MUTATION_FUNC, payload);
            break;
        default:
            commit(INPUT_ERRORS.MUTATION_FUNC, input_errors_state);
            break;
    }
}

export {
    INPUT_ERRORS,
    input_errors,
    input_errors_state,
    input_errors_mutation,
    input_errors_action,
};
