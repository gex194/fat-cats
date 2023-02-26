<template>
  <div v-if="loaded" class="v-col-12">
    <vue3dLoader
      :position="{ x: 0, y: 0, z: 0 }"
      :rotation="rotation"
      :lights="lights"
      output-encoding="sRGB"
      @load="onLoad()"
      :controls-options="{
        enableZoom,
        enablePan,
      }"
      :height="600"
      :background-alpha="0"
      :filePath="'/3d_models/crown/fbx/source/Crown 3.fbx'"
      :texture-image="[
        '/3d_models/crown/fbx/textures/Roughness.png',
        '/3d_models/crown/fbx/textures/Scratches.png',
        '/3d_models/crown/gltf/textures/gold_specularGlossiness.png'
      ]"
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
  x: 180,
  y: 0,
  z: 0,
};
function onLoad() {
  rotate();
}
function rotate() {
  requestAnimationFrame(rotate);
  rotation.value.z -= 0.001;
}

lights.value = [
  {
    type: "AmbientLight",
    intensity: 0.5,
    color: "gold",
  },
  {
    type: "DirectionalLight",
    position: { x: 23, y: 30, z: 30 },
    color: "white",
    intensity: 0.5,
  },
  {
    type: "PointLight",
    color: "white",
    position: { x: 50, y: 130, z: 100 },
    intensity: 0.8,
  },
  // {
  //   type: "HemisphereLight",
  //   skyColor: "#ffea8f",
  //   groundColor: "#000000",
  //   position: { x: 200, y: -200, z: 100 }
  // }
];
</script>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Crown3DViewer",
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

<style scoped>

</style>