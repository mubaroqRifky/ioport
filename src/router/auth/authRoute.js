const Login = () => import("@/views/auth/Login.vue");
const NotFoundPage = () => import("@/views/errors/404.vue");

export default [
    {
        path: "/login",
        name: "login",
        component: Login,
        meta: {},
    },
    {
        path: "/:pathMatch(.*)",
        name: "not-found",
        component: NotFoundPage,
        meta: {},
    },
];
