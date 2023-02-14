<template>
  <v-app full-height class="app__container">
    <TopBar />
    <v-main class="main__container">
      <v-container fluid class="content__container">
        <RouterView />
      </v-container>
    </v-main>
    <FooterComponent />
    <v-overlay v-model="overlay" class="align-center justify-center">
      <v-progress-circular
        size="64"
        indeterminate
        color="gold"
      ></v-progress-circular>
    </v-overlay>
  </v-app>
</template>

<script>
import { RouterView } from "vue-router";
import TopBar from "@/components/landingComponents/TopbarComponent.vue";
import FooterComponent from "@/components/landingComponents/FooterComponent.vue";
import { useLoader } from "@/stores/loader";

export default {
  name: "App",
  components: { FooterComponent, TopBar, RouterView },
  setup() {
    const loader = useLoader();
    return { loader };
  },
  computed: {
    overlay() {
      return this.loader.load_state;
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
  padding: 0 !important;
}
.main__container {
  width: 100%;
  padding-top: 0 !important;
}
</style>
