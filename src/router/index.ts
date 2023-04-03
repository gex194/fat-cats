import { createRouter, createWebHistory } from "vue-router";
import { useLoader } from "@/stores/loader";
import { useDisplay } from "vuetify";
import { preload } from "@/helpers/helpers";
import constants from "@/constants/constants";

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
      redirect: "/main",
    },
    {
      path: "/main",
      name: "main",
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
  if (to.name === "main") {
    preload(constants.preload_landing.images, constants.preload_landing.videos)
      .then(() => store.disable_loader())
      .catch(() => store.disable_loader());
  } else if (to.name === "team") {
    preload(constants.preload_team)
      .then(() => store.disable_loader())
      .catch(() => store.disable_loader());
  } else {
    store.disable_loader();
  }
});

export default router;
