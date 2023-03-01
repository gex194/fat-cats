<template>
  <v-sheet
    class="d-flex justify-center align-center flex-column bg-transparent pr-10 pl-10"
  >
    <v-lazy
      :min-height="80"
      width="80%"
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
      <div class="v-col-lg-6 v-col-sm-12">
      </div>
      <div class="v-col-lg-6 v-col-sm-12 d-flex justify-start flex-column">
        <div v-animate-onscroll="'animated fadeInRight'">
          <div class="text-lg-left text-center text-sm-center text-lg-h4 text-md-h4 text-sm-h5 tokens-title">TOTAL SUPPLY</div>
          <div class="text-lg-left text-center text-sm-center text-lg-h4 text-md-h4 text-sm-h5">100 MILLION</div>
        </div>
        <v-spacer class="mt-10" />
        <div v-animate-onscroll="'animated fadeInRight'">
          <div class="text-lg-left text-center text-sm-center text-lg-h4 text-md-h4 text-sm-h5 tokens-title">BLOCKCHAIN</div>
          <div class="text-lg-left text-center text-sm-center text-lg-h4 text-md-h4 text-sm-h5">CARDANO & BNB CHAIN</div>
        </div>
        <v-spacer class="mt-10" />
        <div v-animate-onscroll="'animated fadeInRight'">
          <div class="text-lg-left text-center text-sm-center text-xs-center text-lg-h4 text-md-h4 text-sm-h5 tokens-title">TOP ALLOCATION</div>
          <div class="text-lg-left text-center text-sm-center text-xs-center text-lg-h4 text-md-h4 text-sm-h5">FAT CAT TREASURY (22%)</div>
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
  font-family: Cinzel-bold;
  color: palegoldenrod;
}
</style>
