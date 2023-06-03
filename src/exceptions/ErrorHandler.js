import { AxiosError } from "axios";
import AuthException from "./AuthException";
import DefaultException from "./DefaultException";
import ResponseException from "./ResponseException";

export default class ErrorHandler {
    _error = null;

    constructor(error) {
        this._error = error;
        this.build();
    }

    build() {
        if (this._error instanceof AxiosError) {
            ResponseException.run(this._error);
        } else if (this._error instanceof AuthException) {
            AuthException.run(this._error);
        } else {
            DefaultException.run(this._error);
        }
    }
}
