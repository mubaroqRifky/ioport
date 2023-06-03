export default class Exception {
    constructor() {}

    static reject(error) {
        return Promise.reject(error);
    }
}
