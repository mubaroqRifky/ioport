import InputValidation from "@/controllers/state/InputValidation";

export default class InputException extends Error {
    constructor(error) {
        super(error);
    }

    static run(error) {
        const result = InputException.mappingError(error);
        InputValidation.set(result);
        InputException.scrollFirstElementError();
    }

    static mappingError(errResponse = []) {
        let errors = {};

        for (const key in errResponse) {
            errors[key] = {
                value: false,
                message: errResponse[key].join(", "),
            };
        }

        return errors;
    }

    static scrollFirstElementError() {
        setTimeout(() => {
            const elErrors = document.querySelectorAll(".danger");
            if (elErrors.length) {
                elErrors[0].offsetParent.scrollIntoView({
                    behavior: "smooth",
                });
            }
        }, 0);
    }
}
