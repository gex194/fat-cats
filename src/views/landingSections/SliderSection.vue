<template>
  <v-card
    class="d-flex flex-column align-center bg-transparent pa-15"
    width="100%"
    elevation="0"
  >
    <v-carousel
      height="800"
      cycle
      delimiter-icon="mdi:mdi-circle"
      hide-delimiter-background
      :show-arrows="false"
    >
      <v-carousel-item class="d-flex justify-center align-center h-100" v-for="item in carousel_items" :key="`wndw-${item.id}`">
        <v-sheet
          class="d-flex flex-row justify-center align-center bg-transparent"
        >
          <div class="d-flex align-content-center v-col-6 justify-end">
            <video
              :src="item.src"
              autoplay
              playsinline
              muted
              style="width: 100%; height:100%"
            />
          </div>
          <div class="v-col-6">
            <div class="d-flex flex-column align-baseline">
              <div class="d-flex justify-center align-center mb-10">
                <v-lazy
                  :min-height="50"
                  :options="{'threshold':0.5}"
                  transition="slide-x-reverse-transition"
                >
                  <v-img :src="item.title_src" width="700" :key="item.id" />
                </v-lazy>
              </div>
              <div
                class="carousel-text__text"
              >
                <v-lazy
                  :min-height="50"
                  :options="{'threshold':0.5}"
                  transition="slide-x-reverse-transition"
                >
                  <span>{{ item.text }}</span>
                </v-lazy>
              </div>
            </div>
          </div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-card>
</template>

<script>
import constants from "@/constants/constants";

export default {
  name: "SliderSection",
  computed: {},
  methods: {},
  data: () => ({
    length: 3,
    carousel_items: [
      {
        id: 1,
        width: 600,
        title_src: constants.slides.nft_collection.title_src,
        text: constants.slides.nft_collection.text,
        src: "src/assets/webm_animations/Art_Patronage2_alpha.webm",
      },
      {
        id: 2,
        width: 600,
        title_src: constants.slides.art_patronage.title_src,
        text: constants.slides.art_patronage.text,
        src: "src/assets/webm_animations/NFT%20Collection.webm",
      },
      {
        id: 3,
        width: 600,
        title_src: constants.slides.ada_bnb_bridge.title_src,
        text: constants.slides.ada_bnb_bridge.text,
        src: "/src/assets/webm_animations/ADA_-BNB_Bridge.webm",
      },
      {
        id: 4,
        width: 600,
        title_src: constants.slides.cardano_visualized.title_src,
        text: constants.slides.cardano_visualized.text,
        src: "/src/assets/webm_animations/Cardano Visualised.webm",
      },
      {
        id: 5,
        width: 600,
        title_src: constants.slides.gaming_platform.title_src,
        text: constants.slides.gaming_platform.text,
        src: "src/assets/webm_animations/Controller%20webm.webm",
      },
    ],
  }),
};
</script>

<style scoped>
.carousel-text__text {
  font-family: Cinzel-bold, serif;
  font-size: 30px;
  white-space: pre-line;
}
</style>
