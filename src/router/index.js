import { createRouter, createWebHistory } from "@ionic/vue-router";

import routes from "./routes";
import guard from "../controllers/route";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior: () => ({ top: 0 }),
});

router.beforeEach(guard);

export default router;
