<template>
  <v-sheet
    max-width="1920"
    width="100%"
    height="100%"
    min-height="100vh"
    class="d-flex justify-center align-center flex-column bg-transparent pt-10 pb-10"
  >
    <v-lazy
      :min-height="80"
      width="100%"
      class="mb-5"
      :options="{ threshold: 0.5 }"
      transition="fade-transition"
      v-animate-onscroll="'animated fadeInUp'"
    >
      <v-img src="/gold_titles/Ecosystems_utility_token_ducats2.png" />
    </v-lazy>
    <div class="d-flex justify-space-evenly flex-wrap w-100">
      <div class="d-flex align-center justify-center v-col-7 v-col-lg-7">
        <video
          src="/webm_animations/token.webm"
          autoplay
          playsinline
          muted
          loop
          style="width: 100%; max-width: 70vh"
        />
      </div>
      <div
        class="v-col-5 v-col-lg-5 d-flex justify-center align-start flex-column"
      >
        <div v-animate-onscroll="'animated fadeInRight'">
          <div
            class="mb-2 text-lg-left text-center text-sm-center text-lg-h4 text-md-h5 text-sm-h5 tokens-title"
          >
            TOTAL SUPPLY:
          </div>
          <div
            class="text-lg-left text-center text-sm-center text-lg-h4 text-md-h5 text-sm-h5 tokens-text"
          >
            100 MILLION
          </div>
        </div>
        <div
          v-animate-onscroll="'animated fadeInRight'"
          class="mt-15 d-flex flex-column justify-space-evenly"
        >
          <div
            class="mb-2 text-lg-left text-center text-sm-center text-lg-h4 text-md-h5 text-sm-h5 tokens-title"
          >
            BLOCKCHAINS:
          </div>
          <div
            class="text-lg-left text-center text-sm-center text-lg-h4 text-md-h5 text-sm-h5 tokens-text"
          >
            CARDANO & BNB CHAIN
          </div>
        </div>
        <div v-animate-onscroll="'animated fadeInRight'" class="mt-15">
          <div
            class="mb-2 text-lg-left text-center text-sm-center text-xs-center text-lg-h4 text-md-h5 text-sm-h5 tokens-title"
          >
            TOP ALLOCATION:
          </div>
          <div
            class="text-lg-left text-center text-sm-center text-xs-center text-lg-h4 text-md-h5 text-sm-h5 tokens-text"
          >
            FAT CAT TREASURY (22%)
          </div>
        </div>
        <div v-animate-onscroll="'animated fadeInRight'" class="mt-15">
          <div
            class="mb-2 text-lg-left text-center text-sm-center text-xs-center text-lg-h4 text-md-h5 text-sm-h5 tokens-title"
          >
            TOKEN LAUNCH:
          </div>
          <div
            class="text-lg-left text-center text-sm-center text-xs-center text-lg-h4 text-md-h5 text-sm-h5 tokens-text"
          >
            Q4 2023
          </div>
        </div>
      </div>
    </div>
  </v-sheet>
</template>

<script>
export default {
  name: "TokenSection",
  data() {
    return {};
  },
};
</script>

<style scoped>
.tokens-title {
  font-family: Cinzel-bold !important;
  font-size: 4vh !important;
  color: palegoldenrod;
}

.tokens-text {
  font-size: 3vh !important;
}
</style>
