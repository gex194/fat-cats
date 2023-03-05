<template>
  <v-sheet
    height="100%"
    min-height="100vh"
    max-width="1920"
    width="100%"
    class="d-flex flex-column bg-transparent justify-center align-center pt-10 pb-10"
  >
    <div class="d-flex justify-center align-center">
      <img src="/gold_titles/building_an_ecosystem_of_luxury2.png" style="height: 100%; width: 100%" />
    </div>
    <div class="d-flex justify-center align-center">
      <video src="/webm_animations/crown.webm" style="width: 100%;max-width: 60vh;" autoplay loop playsinline muted />
    </div>
    <div class="d-flex flex-column justify-center align-start">
      <div class="d-flex justify-center align-center" v-animate-onscroll="'animated fadeInDown'">
        <video src="/webm_animations/red_gem_50px.webm" loop autoplay playsinline muted />
        <span class="text-lg-h4 text-md-h5 text-sm-h5 text-left">Exclusive deals for NFT holders</span>
      </div>
      <div class="d-flex justify-center align-center" v-animate-onscroll="'animated fadeInDown'">
        <video src="/webm_animations/blue_gem_50px.webm" loop autoplay playsinline muted />
        <span class="text-lg-h4 text-md-h5 text-sm-h5 text-left">Conceptualization of Fat Cats line of products assisted by AI</span>
      </div>
      <div class="d-flex justify-center align-center" v-animate-onscroll="'animated fadeInDown'">
        <video src="/webm_animations/red_gem_50px.webm" loop autoplay playsinline muted />
        <span class="text-lg-h4 text-md-h5 text-sm-h5 text-left">Online and in-store sales</span>
      </div>
    </div>

  </v-sheet>
</template>

<script>

import FooterComponent from "@/App.vue";

export default {
  name: "CrownSection",
  components: { FooterComponent }
};
</script>

<style scoped>

</style>