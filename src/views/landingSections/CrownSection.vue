<template>
  <v-sheet
    min-height="100vh"
    max-width="1920"
    width="100%"
    class="d-flex flex-column bg-transparent justify-center align-center pt-15"
  >
    <div class="d-flex justify-center align-center">
      <span class="text-lg-h2 text-center">Building an ecosystem of luxury</span>
    </div>
    <div class="d-flex justify-center align-center">
      <div class="v-col-4 d-flex justify-center align-center">
        <span class="text-lg-h5 text-end">Conceptualization of Fat Cats line of products assisted by AI</span>
      </div>
      <div class="v-col-4">
        <video src="/webm_animations/crown.webm" style="width: 100%;max-width: 100vh;" autoplay loop playsinline muted />
      </div>
      <div class="v-col-4">
        <span class="text-lg-h5 text-center">exclusive deals for NFT holders</span>
      </div>
    </div>
    <div class="d-flex justify-center align-center">
      <span class="text-lg-h5 text-center">Online and in-store sales</span>
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