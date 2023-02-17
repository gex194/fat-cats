<template>
  <v-sheet
    class="d-flex justify-center align-center flex-column bg-transparent"
  >
    <v-img
      src="/src/assets/gold_titles/Ecosystems_utility_token_ducats2.png"
      class="mt-10 mb-10"
      width="90%"
    />
    <div class="d-flex justify-space-evenly w-100">
      <div class="v-col-6"></div>
      <div class="v-col-6 d-flex justify-start flex-column">
        <div class="text-left tokens-title">TOTAL SUPPLY</div>
        <div class="text-left tokens-text">100 million</div>
        <v-spacer class="mt-10" />
        <div class="text-left tokens-title">TOTAL SUPPLY</div>
        <div class="text-left tokens-text">CARDANO & BNB CHAIN</div>
        <v-spacer class="mt-10" />
        <div class="text-left tokens-title">TOP ALLOCATION</div>
        <div class="text-left tokens-text">FAT CAT TREASURY (22%)</div>
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
