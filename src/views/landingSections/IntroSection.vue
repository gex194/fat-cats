<template>
  <v-sheet
    max-height="960"
    class="d-flex flex-column align-center justify-center bg-transparent pa-15"
  >
    <div class="position-absolute d-flex justify-start align-center" style="right:-250px;z-index:3">
      <kinesis-container event="scroll">
        <kinesis-element
          type="translate"
          :originX="0"
          :originY="90"
          :strength="-900"
        >
          <video
            autoplay
            playsinline
            height="500"
            loop
            muted
            src="/src/assets/webm_animations/Blue Sapphire alpha 5 - slowed down.webm"
          />
        </kinesis-element>
      </kinesis-container>
    </div>
    <v-lazy
      class="d-flex justify-center align-center"
      :min-height="200"
      width="85%"
      :options="{ threshold: 0.5 }"
      transition="fade-transition"
      v-animate-onscroll="'animated fadeInUp'"
    >
      <v-img
        class="mt-15 mb-15"
        src="/src/assets/gold_titles/Luxury_powered_by_AI.png"
      />
    </v-lazy>
    <div class="d-flex justify-space-evenly align-center mt-15">
      <IntroItemComponent
        v-for="item in constants.intro"
        :key="item.id"
        v-bind="item"
      />
    </div>
    <div class="position-absolute d-flex justify-end" style="left:-250px;z-index:3">
      <kinesis-container event="scroll">
        <kinesis-element
          type="translate"
          :originX="0"
          :originY="30"
          :strength="-700"
        >
          <video
            autoplay
            playsinline
            loop
            muted
            height="500"
            src="/src/assets/webm_animations/Red Ruby alpha - slowed down.webm"
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
