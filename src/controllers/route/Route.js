import ErrorHandler from "@/exceptions/ErrorHandler";
import User from "../state/User";
import UserGoogle from "../state/UserGoogle";

export default class Route {
    prefix = "";
    path = "";
    to = null;
    from = null;
    next = null;
    stack = [];
    guard = [];
    user = null;
    auth = false;

    constructor() {}

    group({ middleware, prefix }, callback) {
        if (prefix) this.prefix = prefix;

        if (middleware) {
            this.guard.push({
                key: middleware,
            });

            switch (middleware) {
                case "auth":
                    this.auth = true;
                    break;
                default:
                    break;
            }
        }

        callback();

        return this;
    }

    use(path, action) {
        try {
            if (path == "") {
                throw new ErrorHandler("Route path tidak valid");
            }

            const PATH = path.replace(/\//g, "");
            const pathResult = this.prefix
                ? "/" + this.prefix + "/" + PATH
                : "/" + PATH;

            if (typeof action == "function") {
                this.stack.push({
                    path: pathResult,
                    action: action.bind(this),
                    needAuth: this.auth,
                });
            } else if (
                typeof action == "object" &&
                action.hasOwnProperty("length")
            ) {
                const [ObjectClass, method] = action;
                const objRoute = new ObjectClass();

                this.stack.push({
                    path: pathResult,
                    action: objRoute[method].bind(this),
                    needAuth: this.auth,
                });

                this.auth = false;
            }
        } catch (error) {
            throw new ErrorHandler(error);
        }

        return this;
    }

    name(name) {
        console.log(name);
    }

    start = (to, from, next) => {
        this.user = User.get() || {};
        this.path = to.path;

        this.to = to;
        this.from = from;
        this.next = next;

        for (let i = 0; i < this.stack.length; i++) {
            if (this.stack[i].path == this.path) {
                this.stack[i].action();
            }
        }

        if (to.meta.needAuth) {
            if (this.user) {
                next();
            } else {
                next({ name: "login" });
            }
        } else {
            if (this.user && to.name == "login") {
                next({ name: from.name });
            } else {
                next();
            }
        }
    };
}
