const HomeIndex = () => import("@/views/pages/home/HomeIndex.vue");

export default [
    {
        path: "/home",
        name: "home",
        component: HomeIndex,
    },
];
