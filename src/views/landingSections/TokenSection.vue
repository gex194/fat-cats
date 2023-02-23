<template>
  <v-sheet
    max-height="960"
    class="d-flex justify-center align-center flex-column bg-transparent pa-15"
  >
    <v-lazy
      :min-height="200"
      :options="{ threshold: 0.5 }"
      transition="fade-transition"
      v-animate-onscroll="'animated fadeInRight'"
    >
      <v-img
        height="200"
        src="/src/assets/gold_titles/Ecosystems_utility_token_ducats2.png"
        width="1500"
      />
    </v-lazy>

    <div class="d-flex justify-space-evenly w-100">
      <div class="v-col-6">
      </div>
      <div class="v-col-6 d-flex justify-start flex-column">
        <div v-animate-onscroll="'animated fadeInRight'">
          <div class="text-left tokens-title">TOTAL SUPPLY</div>
          <div class="text-left tokens-text">100 million</div>
        </div>
        <v-spacer class="mt-10" />
        <div v-animate-onscroll="'animated fadeInRight'">
          <div class="text-left tokens-title">TOTAL SUPPLY</div>
          <div class="text-left tokens-text">CARDANO & BNB CHAIN</div>
        </div>
        <v-spacer class="mt-10" />
        <div v-animate-onscroll="'animated fadeInRight'">
          <div class="text-left tokens-title">TOP ALLOCATION</div>
          <div class="text-left tokens-text">FAT CAT TREASURY (22%)</div>
        </div>
      </div>
    </div>
  </v-sheet>
</template>

<script>
export default {
  name: "TokenSection",
};
</script>

<style scoped>
.tokens-title {
  color: palegoldenrod;
  font-family: Cinzel-black;
  font-size: 60px;
}

.tokens-text {
  font-size: 50px;
}
</style>
