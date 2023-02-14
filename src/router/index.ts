import { createRouter, createWebHistory } from "vue-router";
import LandingView from "../views/LandingView.vue";
import BlogView from "@/views/BlogView.vue";
import TeamView from "@/views/TeamView.vue";
import { useLoader } from "@/stores/loader";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: LandingView,
    },
    {
      path: "/blog",
      name: "blog",
      component: BlogView,
    },
    {
      path: "/team",
      name: "team",
      component: TeamView,
    },
  ],
});

router.beforeResolve((to, from, next) => {
  const store = useLoader();
  if (to.name) {
    store.enable_loader();
  }
  next();
});

router.afterEach((to, from) => {
  const store = useLoader();
  store.disable_loader();
});

export default router;
