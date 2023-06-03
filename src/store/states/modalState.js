const MODAL = {
    MUTATION_FUNC: "modal_mutation",
    ACTION: "modal_action",

    CLOSE: "close",
    SUCCESS: "success",
    ERROR: "error",
    WARNING: "warning",
    CONFIRM: "confirm",
    LOGOUT: "logout",
};

const modal_state = {
    show: false,
    type: "success",
    content: "Success",
    subcontent: "",
};

function modal(state) {
    return state.modal_state;
}

function modal_mutation(state, payload) {
    state.modal_state = payload;
}

function modal_action(state, payload) {
    dispatch_modal(state, payload);
}

function dispatch_modal(
    { commit, state },
    { type, payload = { content: "Success", subcontent: "" } }
) {
    switch (type) {
        case MODAL.SUCCESS:
            commit(MODAL.MUTATION_FUNC, {
                show: true,
                type: MODAL.SUCCESS,
                ...payload,
            });
            break;
        case MODAL.ERROR:
            commit(MODAL.MUTATION_FUNC, {
                show: true,
                type: MODAL.ERROR,
                ...payload,
            });
            break;
        case MODAL.WARNING:
            commit(MODAL.MUTATION_FUNC, {
                show: true,
                type: MODAL.WARNING,
                ...payload,
            });
            break;
        case MODAL.CONFIRM:
            commit(MODAL.MUTATION_FUNC, {
                show: true,
                type: MODAL.CONFIRM,
                ...payload,
            });
            break;
        case MODAL.LOGOUT:
            commit(MODAL.MUTATION_FUNC, {
                show: true,
                type: MODAL.LOGOUT,
                ...payload,
            });
            break;
        case MODAL.CLOSE:
            commit(MODAL.MUTATION_FUNC, {
                show: false,
                type: MODAL.CLOSE,
                ...payload,
            });
            break;
        default:
            commit(MODAL.MUTATION_FUNC, modal_state);
            break;
    }
}

export { MODAL, modal, modal_state, modal_mutation, modal_action };
