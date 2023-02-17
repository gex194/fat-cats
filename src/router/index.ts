import { createRouter, createWebHistory } from "vue-router";
import LandingView from "../views/LandingView.vue";
import BlogView from "@/views/BlogView.vue";
import TeamView from "@/views/TeamView.vue";
import { useLoader } from "@/stores/loader";
import StartSection from "@/views/landingSections/StartSection.vue";
import SliderSection from "@/views/landingSections/SliderSection.vue";
import FeatureSection from "@/views/landingSections/FeatureSection.vue";
import FAQView from "@/views/FAQView.vue";
import CatPaperView from "@/views/CatPaperView.vue";

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
      component: LandingView,
      meta: {
        transition: "fade",
      },
      children: [
        {
          path: "start",
          component: StartSection,
          meta: {
            transition: "fade",
            hash: "start",
          },
        },
        {
          path: "slides",
          component: SliderSection,
          meta: { transition: "fade" },
        },
        {
          path: "features",
          component: FeatureSection,
          meta: { transition: "fade" },
        },
      ],
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
    {
      path: "/faq",
      name: "faq",
      component: FAQView,
    },
    {
      path: "/deck",
      name: "deck",
      component: CatPaperView,
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
