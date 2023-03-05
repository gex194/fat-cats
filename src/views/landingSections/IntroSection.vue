<template>
  <v-sheet
    width="100%"
    height="100%"
    min-height="100vh"
    max-width="1920"
    class="d-flex flex-column align-center justify-center bg-transparent pt-10 pb-10"
  >
    <div class="position-absolute d-flex justify-start align-center" style="right:-130px;z-index:3">
      <kinesis-container event="scroll">
        <kinesis-element
          type="translate"
          :originX="0"
          :originY="70"
          :strength="-900"
        >
          <video
            autoplay
            playsinline
            height="300"
            loop
            muted
            src="/webm_animations/blue_sapphire_slow.webm"
          />
        </kinesis-element>
      </kinesis-container>
    </div>
    <div
      class="d-flex justify-center align-center mb-15"
      :min-height="80"
      width="90%"
      :options="{ threshold: 0.5 }"
      transition="fade-transition"
      v-animate-onscroll="'animated fadeInUp'"
    >
      <img
        style="width:70%"
        src="/gold_titles/Luxury_powered_by_AI.png"
      />
    </div>
    <div class="d-flex justify-space-evenly flex-wrap align-center mt-15 mt-sm-15 mt-lg-15">
      <IntroItemComponent
        v-for="item in constants.intro"
        :key="item.id"
        v-bind="item"
      />
    </div>
    <div class="position-absolute d-flex justify-end" style="left:-130px;z-index:3">
      <kinesis-container event="scroll">
        <kinesis-element
          type="translate"
          :originX="0"
          :originY="40"
          :strength="-700"
        >
          <video
            autoplay
            playsinline
            loop
            muted
            height="250"
            src="/webm_animations/red_ruby_slow.webm"
          />
        </kinesis-element>
      </kinesis-container>
    </div>

  </v-sheet>
</template>

<script>
import constants from "../../constants/constants";
import IntroItemComponent from "@/components/landingComponents/IntroItemComponent.vue";

export default {
  name: "IntroSection",
  components: { IntroItemComponent },
  computed: {
    constants() {
      return constants;
    },
  },
  data: () => ({
    played: false,
    isIntersecting: false,
  }),
  methods: {
    onIntersect(isIntersecting, entries, observer) {
      this.isIntersecting = isIntersecting;
    },
  },
};
</script>

<style scoped>
.intro-title {
  font-family: Cinzel, serif;
  font-size: 50px;
}
</style>
