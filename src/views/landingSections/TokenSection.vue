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
        <div class="sketchfab-embed-wrapper w-100 h-100">
          <iframe
            title="Token Texture Center"
            class="w-100 h-100 bg-transparent"
            frameborder="0"
            allowfullscreen
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            xr-spatial-tracking
            execution-while-out-of-viewport
            execution-while-not-rendered
            web-share
            src="https://sketchfab.com/models/5c9a356ccaa84d9fb5d83773405666d7/embed?autostart=1&ui_hint=0&ui_theme=dark&dnt=1"
          ></iframe>
        </div>
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
