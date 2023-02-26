import { createRouter, createWebHistory } from "vue-router";
import { useLoader } from "@/stores/loader";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPositions) {
    return {
      top: 0,
      behavior: "smooth",
    };
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/LandingView.vue"),
      meta: {
        transition: "fade",
      },
    },
    {
      path: "/blog",
      name: "blog",
      component: () => import("@/views/BlogView.vue"),
    },
    {
      path: "/cats",
      name: "team",
      component: () => import("@/views/TeamView.vue"),
    },
    {
      path: "/faq",
      name: "faq",
      component: () => import("@/views/FAQView.vue"),
    },
    {
      path: "/deck",
      name: "deck",
      component: () => import("@/views/CatPaperView.vue"),
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
