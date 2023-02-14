<template>
  <v-sheet class="d-flex align-center justify-center" max-height="960">
    <video
      preload="auto"
      id="video_background"
      autoplay
      muted
      playsinline
      loop
      src="src/assets/webm_animations/Banner_Castle_alpha.webm"
      style="max-width: 100%"
    />
    <video
      preload="auto"
      autoplay
      muted
      playsinline
      src="src/assets/webm_animations/Enter_cat_world_alpha.webm"
      style="max-width: 40%; position: absolute; top: 60%"
    />
  </v-sheet>
</template>

<script>
export default {
  name: "StartSection",
};
</script>

<style scoped></style>
