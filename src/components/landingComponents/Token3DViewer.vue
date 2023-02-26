<template>
  <div v-if="loaded">
    <vue3dLoader
      :position="{ x: 0, y: 0, z: 0 }"
      :rotation="rotation"
      :lights="lights"
      @load="onLoad()"
      :controls-options="{
        enableZoom,
        enablePan,
      }"
      :height="600"
      :background-alpha="0"
      :filePath="'/3d_models/token/token.glb'"
      :backgroundColor="0xff00ff"
    ></vue3dLoader>
  </div>
  <v-sheet class="d-flex align-center justify-center" v-else height="600">
    <v-progress-circular indeterminate />
  </v-sheet>
</template>

<script setup lang="ts">
import { ref } from "vue";
const enableZoom = ref(false);
const enablePan = ref(false);
const rotation = ref();
const lights = ref();
rotation.value = {
  x: 17.1,
  y: 160.19,
  z: 50.2,
};
function onLoad() {
  rotate();
}
function rotate() {
  requestAnimationFrame(rotate);
  rotation.value.z -= 0.005;
}

lights.value = [
  {
    type: "DirectionalLight",
    position: { x: 100, y: 100, z: 100 },
    color: "white",
    intensity: 1,
  },
  {
    type: "PointLight",
    color: "#fffcfc",
    position: { x: 100, y: 100, z: 100 },
    intensity: 1,
  },
];
</script>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Token3DViewer",
  data() {
    return {
      loaded: false,
    };
  },
  mounted() {
    this.loaded = true;
  },
});
</script>

<style scoped></style>
