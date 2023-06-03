import Main from "@/views/layouts/Main.vue";
import HomeRoute from "./homeRoute.js";

export default [
    {
        path: "/",
        name: "main",
        component: Main,
        redirect: { name: "home" },
        children: [...HomeRoute],
        meta: {
            needAuth: true,
        },
    },
];
