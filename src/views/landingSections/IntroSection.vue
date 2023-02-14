<template>
  <v-sheet
    max-height="960"
    class="d-flex flex-column align-center justify-center bg-transparent pa-15 mt-10"
  >
    <div class="text-center intro-title"><h1>Luxury powered by AI</h1></div>
    <div
      v-animate-onscroll="{down: 'animated fadeInDown delay-2s'}"
      :class="'text-center intro-text mt-10'"
    >
      {{ constants.intro.max_util.title }}
    </div>
    <div
      v-animate-onscroll="{down: 'animated fadeInDown delay-2s'}"
      class="text-center intro-text mt-10"
    >
      {{ constants.intro.model_ai.title }}
    </div>
    <div
      v-animate-onscroll="{down: 'animated fadeInDown delay-2s'}"
      class="text-center intro-text mt-10"
    >
      {{ constants.intro.member.title }}
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
    onIntersect (isIntersecting, entries, observer) {
      this.isIntersecting = isIntersecting
    },
  },
};
</script>

<style scoped>
.intro-title {
  font-family: Cinzel, serif;
  font-size: 50px
}
.intro-text {
  font-family: Cinzel, serif;
  font-size: 40px
}
</style>
