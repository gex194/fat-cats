<template>
  <v-app full-height class="app__container">
    <TopBar v-if="$route.name !== 'main'" />
    <v-overlay
      :close-on-content-click="false"
      :close-on-back="false"
      scroll-strategy="block"
      :model-value="loader.load_state"
      class="align-center justify-center bg-black overlay__container"
    >
      <v-progress-circular
        size="64"
        indeterminate
        color="gold"
      ></v-progress-circular>
    </v-overlay>

    <v-main :class="mobile ? 'main__container-mobile' : 'main__container'">
      <v-container fluid class="content__container">
        <RouterView :class="mobile ? '' : ''"/>
      </v-container>
    </v-main>
    <FooterComponent />
  </v-app>
</template>

<script>
import { RouterView } from "vue-router";
import TopBar from "@/components/landingComponents/TopbarComponent.vue";
import FooterComponent from "@/components/landingComponents/FooterComponent.vue";
import { useLoader } from "@/stores/loader";
import { useDisplay } from "vuetify";

export default {
  name: "App",
  components: { FooterComponent, TopBar, RouterView },
  setup() {
    const { mobile } = useDisplay();
    const loader = useLoader();
    return { loader, mobile };
  },
  computed: {
    overlay() {
      return this.loader.loading;
    },
  },
  methods: {
    on_load() {
      return this.loader.disable_loader();
    },
  },
};
</script>

<style>
.app__container {
  width: 100%;
}

.content__container {
  width: 100%;
  height: 100%;
  padding: 0 !important;
}

.view {
  padding-top: 160px;
}

.main__container {
  width: 100%;
  padding-top: 0 !important;
}

.main__container-mobile {
  width: 100%;
  top: 0;
}

.overlay__container {
  background: black !important;
  opacity: 1;
}
</style>
