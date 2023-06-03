export default class Response {
    constructor() {}

    static resolve(data) {
        return Promise.resolve(data);
    }
}
