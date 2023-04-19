<template>
  <v-sheet
    :rounded="150"
    :width="mobile ? '100%' : '30%'"
    class="d-flex justify-center align-center pa-5 mt-15 mt-sm-5 mt-xs-5 border-t intro-card-outterbox"
    v-animate-onscroll="{ down: 'animated fadeInUp delay-2s' }"
    elevation="10"
  >
    <v-sheet
      :height="mobile ? '20vh' : '30vh'"
      elevation="10"
      width="100%"
      class="d-flex align-center pa-5 rounded-xl intro-card-background"
    >
      <div class="intro-text text-center text-lg-h5 text-sm-h7 text-xs-h4 text-body-1">
        {{ title }}
      </div>
    </v-sheet>
  </v-sheet>
</template>

<script>
import { useDisplay } from "vuetify";

export default {
  name: "IntroItemComponent",
  props: ["title"],
  setup() {
    const { mobile } = useDisplay();
    return { mobile };
  }
};
</script>

<style scoped>
.intro-text {
  font-family: "Book Antiqua", serif !important;
  font-weight: bold;
}

.intro-card-background {
  background: radial-gradient(
    27% 29% at right,
    #0000 83%,
    #310707 85% 99%,
    #0000 101%) calc(30px / 2) 30px,
  radial-gradient(27% 29% at left, #0000 83%, #310707 85% 99%, #0000 101%) calc(30px / -2) 30px,
  radial-gradient(29% 27% at top, #0000 83%, #310707 85% 99%, #0000 101%) 0 calc(30px / 2),
  radial-gradient(29% 27% at bottom, #0000 83%, #310707 85% 99%, #0000 101%) 0 calc(30px / -2) #350808;
  background-size: 60px 60px;
}

.intro-card-outterbox {
  background-color: #260707;
  border-radius: 40px;
}
</style>
