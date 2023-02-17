<template>
  <v-sheet
    class="d-flex justify-center align-center pa-5 ma-5 v-col-4 rounded-xl"
    v-animate-onscroll="{ down: 'animated fadeInUp delay-2s' }"
    elevation="10"
  >
    <v-sheet
      height="300"
      style="background-color: rgb(41, 31, 28)"
      elevation="10"
      class="d-flex align-center pa-5 rounded-xl"
    >
      <div class="text-center intro-text">
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
</style>
