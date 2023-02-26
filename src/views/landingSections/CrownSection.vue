<template>
  <v-sheet
    class="d-flex flex-column bg-transparent justify-center align-center pl-10 pr-10"
  >
    <Crown3DViewer />
  </v-sheet>
</template>

<script>
import Crown3DViewer from "@/components/landingComponents/Crown3DViewer.vue";

export default {
  name: "CrownSection",
  components: { Crown3DViewer }
};
</script>

<style scoped>

</style>