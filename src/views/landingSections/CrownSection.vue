<template>
  <v-sheet
    min-height="100vh"
    class="d-flex flex-column bg-transparent justify-center align-center"
  >
    <div class="d-flex justify-center align-center position-absolute">
      <video src="/webm_animations/crown.webm" style="width: 100%;" autoplay loop playsinline muted />
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