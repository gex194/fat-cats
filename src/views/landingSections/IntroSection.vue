<template>
  <v-card>
    <v-sheet class="d-flex align-center justify-center background">
      <video
        src="src/assets/webm_animations/Curtains%20alpha.webm"
        @mouseover="on_mouse_over"
        muted
        playsinline=""
        style="position: absolute; z-index: 2"
        ref="curtains"
      />
      <div style="width: 600px">
        <kinesis-container>
          <kinesis-element type="depth" :strength="10">
            <v-img
              src="src/assets/placeholder_art_patronage.png"
              max-width="500"
            ></v-img>
          </kinesis-element>
        </kinesis-container>
      </div>
    </v-sheet>
  </v-card>
</template>

<script>
export default {
  name: "IntroSection",
  data: () => ({
    played: false,
  }),
  methods: {
    on_mouse_over() {
      if (!this.played) {
        this.$refs.curtains.play();
        this.played = true;
      }
    },
  },
};
</script>

<style scoped>
.background {
  background-image: url("src/assets/black_background_with_border.png");
  background-position: center;
}
</style>
