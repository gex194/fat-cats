<template>
  <v-sheet
    min-height="100vh"
    max-width="1920"
    width="100%"
    class="d-flex justify-center align-center flex-column bg-transparent pt-15"
  >
    <v-lazy
      :min-height="80"
      width="100%"
      class="mb-lg-10"
      :options="{ threshold: 0.5 }"
      transition="fade-transition"
      v-animate-onscroll="'animated fadeInRight'"
    >
      <v-img
        src="/gold_titles/Ecosystems_utility_token_ducats2.png"
      />
    </v-lazy>
    <div class="d-flex justify-space-evenly flex-wrap w-100">
      <div class="d-flex align-center justify-center v-col-7 v-col-lg-7">
        <video src="/webm_animations/token.webm" autoplay playsinline muted loop style="width: 100%; max-width: 70vh" />
      </div>
      <div class="v-col-5 v-col-lg-5 d-flex justify-center align-start flex-column">
        <div v-animate-onscroll="'animated fadeInRight'">
          <div class="text-lg-left text-center text-sm-center text-lg-h4 text-md-h4 text-sm-h5 tokens-title">TOTAL SUPPLY:</div>
          <div class="text-lg-left text-center text-sm-center text-lg-h4 text-md-h4 text-sm-h5">100 MILLION</div>
        </div>
        <div v-animate-onscroll="'animated fadeInRight'" class="mt-15">
          <div class="text-lg-left text-center text-sm-center text-lg-h4 text-md-h4 text-sm-h5 tokens-title">BLOCKCHAINS:</div>
          <div class="text-lg-left text-center text-sm-center text-lg-h4 text-md-h4 text-sm-h5">CARDANO & BNB CHAIN</div>
        </div>
        <div v-animate-onscroll="'animated fadeInRight'" class="mt-15">
          <div class="text-lg-left text-center text-sm-center text-xs-center text-lg-h4 text-md-h4 text-sm-h5 tokens-title">TOP ALLOCATION:</div>
          <div class="text-lg-left text-center text-sm-center text-xs-center text-lg-h4 text-md-h4 text-sm-h5">FAT CAT TREASURY (22%)</div>
        </div>
        <div v-animate-onscroll="'animated fadeInRight'" class="mt-15">
          <div class="text-lg-left text-center text-sm-center text-xs-center text-lg-h4 text-md-h4 text-sm-h5 tokens-title">TOKEN LAUNCH:</div>
          <div class="text-lg-left text-center text-sm-center text-xs-center text-lg-h4 text-md-h4 text-sm-h5">Q3 2023</div>
        </div>
      </div>
    </div>
  </v-sheet>
</template>

<script>

export default {
  name: "TokenSection",
  data() {
    return {
    }
  },
};
</script>

<style scoped>
.tokens-title {
  font-family: Cinzel-bold !important;
  color: palegoldenrod;
}
</style>
