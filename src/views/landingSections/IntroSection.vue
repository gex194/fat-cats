<template>
  <v-sheet
    max-height="960"
    class="d-flex flex-column align-center justify-center bg-transparent pa-15 mt-10"
  >
    <div class="text-center intro-title"><h1>Luxury powered by AI</h1></div>
    <div class="d-flex justify-space-evenly align-center">
      <v-sheet
        height="300"
        style="background-color: rgb(41, 31, 28)"
        v-animate-onscroll="{ down: 'animated fadeInDown delay-2s' }"
        elevation="10"
        class="d-flex rounded-xl align-center v-col-3"
      >
        <div
          class="text-center intro-text"
        >
          {{ constants.intro.max_util.title }}
        </div>
      </v-sheet>
      <v-sheet
        height="300"
        style="background-color: rgb(41, 31, 28)"
        v-animate-onscroll="{ down: 'animated fadeInDown delay-2s' }"
        elevation="10"
        class="d-flex rounded-xl align-center v-col-3"
      >
        <div class="text-center intro-text">
          {{ constants.intro.model_ai.title }}
        </div>
      </v-sheet>
      <v-sheet
        height="300"
        style="background-color: rgb(41, 31, 28)"
        v-animate-onscroll="{ down: 'animated fadeInDown delay-2s' }"
        elevation="10"
        class="d-flex rounded-xl align-center v-col-3"
      >
        <div
          class="text-center intro-text"
        >
          {{ constants.intro.member.title }}
        </div>
      </v-sheet>
    </div>
  </v-sheet>
</template>

<script>
import constants from "../../constants/constants";

export default {
  name: "IntroSection",
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
.intro-text {
  font-family: Cinzel-black, serif;
  font-size: 30px;
}
</style>
