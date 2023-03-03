<template>
  <v-sheet
    class="d-flex align-center justify-center"
    width="100%"
    min-height="90vh"
    :style="mobile ? 'margin-top:0px' : ''"
  >
    <TopbarComponent />
    <div>
      <video
        preload="auto"
        id="video_background"
        v-on:loadeddata="on_video_load"
        autoplay
        muted
        playsinline
        loop
        src="/webm_animations/Banner_Castle_alpha.webm"
        style="object-fit: cover"
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
import { onBeforeMount } from "vue";
import { useDisplay } from "vuetify";
import TopbarComponent from "@/components/landingComponents/TopbarComponent.vue";

export default {
  name: "StartSection",
  components: { TopbarComponent },
  setup() {
    const store = useLoader();
    const { mobile } = useDisplay();
    onBeforeMount(() => {
      store.enable_loader();
    });
    return { store, mobile };
  },
  methods: {
    on_video_load() {
      this.store.disable_loader();
    },
  },
};
</script>

<style scoped>
.enter_cat_world {
  position: absolute;
  max-width: 40%;
  top: 60vh;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
}
</style>
