<template>
  <v-card
    class="d-flex flex-column align-center bg-transparent pr-10 pl-10"
    elevation="0"
  >
    <v-carousel
      v-model="carousel_active_item"
      :height="carousel_height"
      cycle
      interval="10000"
      delimiter-icon="mdi:mdi-circle"
      hide-delimiter-background
      :hide-delimiters="mobile"
      :show-arrows="false"
    >
      <v-carousel-item
        class="d-flex justify-center"
        v-for="item in carousel_items"
        :value="item.id"
        :key="`wndw-${item.id}`"
      >
        <v-sheet
          class="d-flex flex-row justify-center align-center flex-wrap bg-transparent"
        >
          <div class="v-col-2"></div>
          <div class="d-flex align-end v-col-12 v-col-lg-4 v-col-md-4 v-col-sm-4 justify-end">
            <video
              preload="metadata"
              :ref="play_video"
              :src="item.src"
              playsinline
              muted
              style="width:100%"
              :style="mobile ? 'height: 200px' :`height:${calculate_height() - 50}px`"
            />
          </div>
          <div class="v-col-12 v-col-lg-4 v-col-md-4 v-col-sm-4">
            <div class="d-flex flex-column align-baseline">
              <v-sheet
                class="mb-10 bg-transparent"
                height="100%"
                width="100%"
                transition="slide-x-reverse-transition"
              >
                <v-img
                  eager
                  :src="item.title_src"
                  :key="item.id"
                />
              </v-sheet>
              <div class="carousel-text__text d-flex">
                <span
                  class="text-caption text-lg-h5 text-md-h6">{{ item.text }}</span>
              </div>
            </div>
          </div>
          <div class="v-col-2"></div>
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
  mounted() {
    console.log(this.$refs.slides);
  },
  computed: {
    carousel_height() {
      return this.calculate_height();
    }
  },
  data: () => ({
    carousel_active_item: 0,
    video_refs: [],
    length: 3,
    carousel_items: [
      {
        id: 1,
        width: 600,
        title_src: constants.slides.nft_collection.title_src,
        text: constants.slides.nft_collection.text,
        src: "/webm_animations/nft_collection.webm"
      },
      {
        id: 2,
        width: 600,
        title_src: constants.slides.art_patronage.title_src,
        text: constants.slides.art_patronage.text,
        src: "/webm_animations/art_patronage.webm"
      },
      {
        id: 3,
        width: 600,
        title_src: constants.slides.ada_bnb_bridge.title_src,
        text: constants.slides.ada_bnb_bridge.text,
        src: "/webm_animations/ada-bnb_bridge.webm"
      },
      {
        id: 4,
        width: 600,
        title_src: constants.slides.cardano_visualized.title_src,
        text: constants.slides.cardano_visualized.text,
        src: "/webm_animations/cardano_visualised.webm"
      },
      {
        id: 5,
        width: 600,
        title_src: constants.slides.gaming_platform.title_src,
        text: constants.slides.gaming_platform.text,
        src: "/webm_animations/gaming_platform.webm"
      }
    ]
  }),
  methods: {
    calculate_height() {
      if (this.lg) {
        return 500;
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
      return 500;
    },
    play_video(el) {
      if (el) {
        el.style['opacity'] = '0';
        el.pause();
        el.currentTime = 0;
        setTimeout(() => {

          el.play();
          el.style['opacity'] = '1';
        }, 500)
      }
    }
  }
};
</script>

<style>
.v-carousel__controls__item{
  margin-right: 20px;
}
.carousel-text__text {
  white-space: pre-line;
}
</style>
