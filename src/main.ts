import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// @ts-ignore
import VueKinesis from "vue-kinesis";

//icons
import "@fortawesome/fontawesome-free/css/all.css";
import "@mdi/font/css/materialdesignicons.css";

import "./assets/main.css";
import VueAnimateOnScroll from "vue3-animate-onscroll";
import "animate.css";
import emailjs from "@emailjs/browser";
import { aliases, fa } from "vuetify/iconsets/fa";
import { mdi } from "vuetify/iconsets/mdi";

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "dark",
  },
  icons: {
    defaultSet: "fa",
    aliases,
    sets: {
      fa,
      mdi,
    },
  },
  defaults: {
    global: {
      VBtn: {
        hover: 0,
      },
      VCarousel: {
        VWindow: {
          VWindowItem: {
            transition: "fade-transition",
          },
        },
        transition: "fade-transition",
      },
      VCarouselItem: {
        transition: "fade-transition",
      },
      VWindow: {
        transition: "fade-transition",
      },
      VWindowItem: {
        transition: "fade-transition",
      },
    },
  },
});

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(vuetify);
app.use(VueKinesis);
app.use(VueAnimateOnScroll);
app.directive("scroll", directives.Scroll);
app.directive("intersect", directives.Intersect);
app.mount("#app");
emailjs.init("YmRWsyH6_yXsIJgEB");
