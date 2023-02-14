<template>
  <v-sheet class="d-flex align-center justify-center" max-height="960">
    <video
      preload="auto"
      id="video_background"
      v-on:loadeddata="on_video_load"
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
import { useLoader } from "@/stores/loader";
import { onBeforeMount } from "vue";

export default {
  name: "StartSection",
  setup() {
    const store = useLoader();
    onBeforeMount(() => {
      store.enable_loader();
    });
    return { store };
  },
  methods: {
    on_video_load() {
      this.store.disable_loader();
    },
  },
};
</script>

<style scoped></style>
