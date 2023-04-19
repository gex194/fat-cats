<template>
  <v-sheet
    width="100%"
    height="100%"
    min-height="100vh"
    max-width="1920"
    class="d-flex flex-column align-center justify-center bg-transparent"
  >
    <div
      class="d-flex justify-center align-center mb-15"
      :min-height="80"
      width="90%"
      :options="{ threshold: 0.5 }"
      transition="fade-transition"
    >
      <img style="width: 100%" src="/gold_titles/Luxury_powered_by_AI.png" />
    </div>
    <div
      class="d-flex flex-column justify-space-evenly flex-wrap align-center"
    >
      <IntroItemComponent
        v-for="item in constants.intro"
        :key="item.id"
        v-bind="item"
      />
    </div>
  </v-sheet>
</template>

<script>
import constants from "../../../constants/constants";
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
