<template>
  <v-card
    max-width="1920"
    width="100%"
    min-height="100vh"
    class="d-flex flex-column align-center bg-transparent"
    elevation="0"
  >
    <v-carousel
      v-model="carousel_active_item"
      progress
      cycle
      height="90vh"
      interval="7000"
      delimiter-icon="mdi:mdi-circle"
      hide-delimiters
      hide-delimiter-background
      :show-arrows="false"
    >
      <v-carousel-item
        class="d-flex justify-center align-center"
        v-for="item in carousel_items"
        :value="item.id"
        :key="`wndw-${item.id}`"
      >
        <v-sheet
          class="d-flex flex-row justify-center align-center flex-wrap bg-transparent w-100"
        >
          <div
            class="d-flex align-center v-col-12 v-col-lg-12 v-col-md-12 v-col-sm-12 justify-center bg-transparent"
          >
            <v-img eager :src="item.title_src" width="100%" :key="item.id" />
          </div>

          <div
            class="d-flex align-center v-col-12 v-col-lg-12 v-col-md-12 v-col-sm-12 justify-center"
          >
            <video
              preload="metadata"
              :ref="play_video"
              :src="item.src"
              playsinline
              muted
              :style="`max-width: ${item.width}vh; width: ${item.current_width}%; height: 33vh`"
            />
          </div>
          <div
            class="v-col-12 v-col-lg-12 v-col-md-12 v-col-sm-12 d-flex flex-column justify-center align-center"
          >
            <div class="d-flex flex-column justify-center align-center">
              <div class="carousel-text__text d-flex" style="height: 40vh">
                <span
                  v-html="item.text"
                  class="carousel-text d-flex flex-column align-baseline justify-center text-lg-h5 text-md-h6"
                ></span>
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
import { useDisplay } from "vuetify";

export default {
  name: "SliderSection",
  setup() {
    const { mobile, md, sm } = useDisplay();
    return { mobile, md, sm };
  },
  computed: {
    carousel_height() {
      return this.calculate_height();
    },
  },
  data: () => ({
    carousel_active_item: 1,
    video_refs: [],
    length: 5,
    carousel_items: [
      {
        id: 1,
        width: 100,
        current_width: 100,
        left: 0,
        title_src: constants.slides.nft_collection_mobile.title_src,
        text: constants.slides.nft_collection_mobile.text,
        src: "/webm_animations/nft_collection.webm",
      },
      {
        id: 2,
        width: 100,
        current_width: 100,
        left: 0,
        title_src: constants.slides.art_patronage_mobile.title_src,
        text: constants.slides.art_patronage_mobile.text,
        src: "/webm_animations/art_patronage.webm",
      },
      {
        id: 3,
        width: 100,
        current_width: 100,
        left: 0,
        title_src: constants.slides.ada_bnb_bridge_mobile.title_src,
        text: constants.slides.ada_bnb_bridge_mobile.text,
        src: "/webm_animations/ada-bnb_bridge.webm",
      },
      {
        id: 4,
        width: 190,
        current_width: 130,
        left: -125,
        title_src: constants.slides.gaming_platform_mobile.title_src,
        text: constants.slides.gaming_platform_mobile.text,
        src: "/webm_animations/gaming_platform.webm",
      },
    ],
  }),
  methods: {
    calculate_height() {
      if (this.lg) {
        return 720;
      }
      if (this.md) {
        return 400;
      }
      if (this.sm) {
        return 300;
      }
      if (this.mobile) {
        return 500;
      }
      return 720;
    },
    play_video(el) {
      if (el) {
        el.style["opacity"] = "0";
        el.pause();
        el.currentTime = 0;
        setTimeout(() => {
          el.play();
          el.style["opacity"] = "1";
        }, 350);
      }
    },
  },
};
</script>

<style>
.v-carousel__controls__item {
  margin-right: 20px;
}
.carousel-text__text {
  white-space: pre-line;
}

.carousel-text {
    font-size: 2.25vh !important;
  font-family: "Book Antiqua" !important;
  line-height: 50px;
  font-weight: bolder;
}
</style>
