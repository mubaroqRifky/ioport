import Route from "./Route";

import AuthController from "./AuthController";
import DashboardController from "./DashboardController";

const route = new Route();

route.use("login", [AuthController, "index"]);

route.group({ middleware: "auth" }, function () {
    route.use("dashboard", [DashboardController, "index"]);

    route.group({ prefix: "master" }, function () {
        route.use("mitra", function () {
            console.log("master mitra");
        });
    });

    route.group({ prefix: "inventory" }, function () {
        route.use("induk", function () {
            console.log("inventory induk");
        });
    });
});

export default route.start;
