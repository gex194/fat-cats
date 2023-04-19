<template>
  <v-sheet
    class="d-flex align-center justify-center bg-transparent"
    width="100%"
    height="100vh"
    :style="mobile ? 'margin-top:0px' : ''"
  >
    <TopbarComponent />
    <div class="h-100 w-100" style="object-fit: fill">
      <video
        preload="auto"
        id="video_background"
        autoplay
        muted
        playsinline
        loop
        class="w-100 h-100"
        src="/webm_animations/Banner_Castle_alpha.webm"
        style="object-fit: cover;"
      />
      <video
        preload="auto"
        autoplay
        muted
        playsinline
        src="/webm_animations/Enter_cat_world_alpha.webm"
        class="enter_cat_world"
      />
    </div>

  </v-sheet>
</template>

<script>
import { useLoader } from "@/stores/loader";
import { useDisplay } from "vuetify";
import TopbarComponent from "@/components/landingComponents/TopbarComponent.vue";

export default {
  name: "StartSection",
  components: { TopbarComponent },
  setup() {
    const store = useLoader();
    const { mobile } = useDisplay();
    return { store, mobile };
  },
};
</script>

<style scoped>
.enter_cat_world {
  position: absolute;
  max-width: 80%;
  top: 60vh;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
}
</style>
