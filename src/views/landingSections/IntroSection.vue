<template>
  <v-sheet
    max-height="960"
    class="d-flex flex-column align-center justify-center bg-transparent pa-15 mt-10"
  >
    <div class="text-center intro-title"><h1>Luxury powered by AI</h1></div>
    <div class="d-flex justify-space-evenly align-center">
      <IntroItemComponent v-for="item in constants.intro" :key="item.id" v-bind="item" />
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
