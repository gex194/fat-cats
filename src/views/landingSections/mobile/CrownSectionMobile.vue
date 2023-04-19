<template>
  <v-sheet
    height="100%"
    min-height="100vh"
    max-width="1920"
    width="100%"
    class="d-flex flex-column bg-transparent justify-center align-center pt-10 pb-10"
  >
    <div class="d-flex justify-center align-center mb-15">
      <img src="/gold_titles/building_an_ecosystem_of_luxury2.png" style="height: 100%; width: 100%" />
    </div>
    <div class="d-flex flex-column align-center justify-center">
      <div class="d-flex v-col-12 align-start flex-column justify-space-evenly h-100">
        <div class="d-flex justify-start align-start mt-5" v-animate-onscroll="'animated fadeInLeft'">
          <img src="/small_bulletpoint.png" class="mt-3 mr-5" />
          <span class="crown-text text-lg-h4 text-md-h5 text-sm-h5 text-left">Exclusive deals for NFT holders</span>
        </div>
        <div class="d-flex justify-start align-start mt-10" v-animate-onscroll="'animated fadeInLeft'">
          <img src="/small_bulletpoint.png" class="mt-3 mr-5" />
          <span class="crown-text text-lg-h4 text-md-h5 text-sm-h5 text-left">Conceptualization of Fat Cats line of products assisted by AI</span>
        </div>
        <div class="d-flex justify-start align-start mt-10" v-animate-onscroll="'animated fadeInLeft'">
          <img src="/small_bulletpoint.png" class="mt-3 mr-5" />
          <span class="crown-text text-lg-h4 text-md-h5 text-sm-h5 text-left">Online and in-store sales</span>
        </div>

      </div>
      <div class="d-flex v-col-12 align-center justify-center">
        <video src="/webm_animations/crown.webm" style="width: 130%;max-width: 100vh;" autoplay loop
               playsinline muted />
      </div>
    </div>
  </v-sheet>
</template>

<script>

export default {
  name: "CrownSection"
};
</script>

<style scoped>
.crown-text {
  font-family: "Book Antiqua" !important;
  line-height: 3rem;
  font-size: 3vh !important;
}
</style>