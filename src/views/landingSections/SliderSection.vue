<template>
  <v-card
    max-height="960"
    class="d-flex flex-column align-center bg-transparent"
    width="100%"
    elevation="0"
  >
    <Splide :extensions="extensions" :options="options">
      <SplideSlide v-for="item in carousel_items" :key="`wndw-${item.id}`">
        <v-sheet
          class="d-flex flex-row justify-center align-center bg-transparent"
        >
          <div class="v-col-1"></div>
          <div class="d-flex align-content-center v-col-5 justify-end">
            <video
              :src="item.src"
              autoplay
              playsinline
              muted
              style="width: 100%; height: 600px;"
            />
          </div>
          <div class="v-col-4">
            <div class="d-flex flex-column align-baseline">
              <div
                v-animate-onscroll="'animated fadeInRight'"
                class="carousel-text__title"
              >
                {{ item.title }}
              </div>
              <div
                v-animate-onscroll="'animated fadeInRight'"
                class="carousel-text__text"
              >
                {{ item.text }}
              </div>
            </div>
          </div>
          <div class="v-col-2"></div>
        </v-sheet>
      </SplideSlide>
    </Splide>
  </v-card>
</template>

<script>
import constants from "@/constants/constants";
import { Video } from "@splidejs/splide-extension-video";

export default {
  name: "SliderSection",
  computed: {},
  methods: {},
  setup() {
    const options = {
      lazyLoad: "sequential",
      autoplay: true,
      interval: 5400,
      pauseOnHover: false,
      rewind: true,
      type: "fade",
      arrows: false,
      updateOnMove: true,
      video: {
        autoplay: true,
        mute: true,
        loop: true,
      },
    };
    return { options, extensions: { Video } };
  },
  data: () => ({
    length: 3,
    carousel_items: [
      {
        id: 1,
        width: 600,
        title: constants.slides.art_patronage.title,
        text: constants.slides.art_patronage.text,
        src: "src/assets/webm_animations/NFT%20Collection.webm",
      },
      {
        id: 2,
        width: 600,
        title: constants.slides.nft_collection.title,
        text: constants.slides.nft_collection.text,
        src: "src/assets/webm_animations/Art_Patronage2_alpha.webm",
      },
      {
        id: 3,
        width: 600,
        title: constants.slides.gaming_platform.title,
        text: constants.slides.gaming_platform.text,
        src: "src/assets/webm_animations/Controller%20webm.webm",
      },
    ],
  }),
};
</script>

<style scoped>
.carousel-text__title {
  font-family: Cinzel-bold, serif;
  font-size: 55px;
}
.carousel-text__text {
  font-family: Cinzel-bold, serif;
  font-size: 20px;
  white-space: pre-line;
}
</style>
