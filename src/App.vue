<template>
  <v-app full-height class="app__container">
    <TopBar />
    <v-overlay
      :close-on-content-click="false"
      :close-on-back="false"
      scroll-strategy="block"
      :model-value="overlay"
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
        <RouterView :class="mobile ? '' : 'view'" />
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
  data() {
    return {
      imagesToPreload: [
        "/gold_titles/ADA_BNB_Bridge.png",
        "/gold_titles/Art_Patronage.png",
        "/gold_titles/Cardano_Visualised.png",
        "/gold_titles/Ecosystems_utility_token_ducats2.png",
        "/gold_titles/FAT_CATS.png",
        "/gold_titles/FAT_CATS_2.png",
        "/gold_titles/Fat_Cats_nfts.png",
        "/gold_titles/Gaming_Platform.png",
        "/gold_titles/Luxury_powered_by_AI.png",
        "/gold_titles/NFT_COLLECTION.png",
      ],
    };
  },
  mounted() {
    this.preload();
  },
  computed: {
    overlay() {
      return this.loader.$state.loading;
    },
  },
  methods: {
    on_load() {
      return this.loader.disable_loader();
    },
    preload() {
      const images = this.imagesToPreload.map((imageSrc) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = imageSrc;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      Promise.all(images)
        .then(() => {
          console.log("Images loaded!");
        })
        .catch((error) => {
          console.error("Some image(s) failed loading!");
          console.error(error.message);
        }).finally(() => this.loader.disable_loader());
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
