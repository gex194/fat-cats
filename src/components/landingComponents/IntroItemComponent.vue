<template>
  <v-sheet
    :rounded="150"
    min-width="300"
    class="d-flex justify-center align-center pa-5 ma-lg-5 ma-md-3 mt-sm-5 v-col-3 flex-wrap border-t intro-card-outterbox"
    v-animate-onscroll="{ down: 'animated fadeInUp delay-2s' }"
    elevation="10"
  >
    <v-sheet
      height="300"
      elevation="10"
      width="100%"
      class="d-flex align-center pa-5 rounded-xl intro-card-background"
    >
      <div class="text-center text-lg-h5 text-md-h5 text-sm-h5">
        {{ title }}
      </div>
    </v-sheet>
  </v-sheet>
</template>

<script>
export default {
  name: "IntroItemComponent",
  props: ["title"],
};
</script>

<style scoped>
.intro-text {
  font-family: Cinzel-black, serif;
  font-size: 30px;
}

.intro-card-background {
  background: radial-gradient(
        27% 29% at right,
        #0000 83%,
        #310707 85% 99%,
        #0000 101%
      )
      calc(30px / 2) 30px,
    radial-gradient(27% 29% at left, #0000 83%, #310707 85% 99%, #0000 101%)
      calc(30px / -2) 30px,
    radial-gradient(29% 27% at top, #0000 83%, #310707 85% 99%, #0000 101%) 0
      calc(30px / 2),
    radial-gradient(29% 27% at bottom, #0000 83%, #310707 85% 99%, #0000 101%) 0
      calc(30px / -2) #350808;
  background-size: 60px 60px;
}

.intro-card-outterbox {
  background-color: #260707;
  border-radius: 40px;
}
</style>
