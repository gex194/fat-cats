<template>
  <v-sheet width="100%" class="section-background">
    <StartSection />
    <SliderSection />
    <FeatureSection />
  </v-sheet>
</template>

<script>
import StartSection from "@/views/landingSections/StartSection.vue";
import SliderSection from "@/views/landingSections/SliderSection.vue";
import FeatureSection from "@/views/landingSections/FeatureSection.vue";

export default {
  name: "LandingView",
  components: { FeatureSection, StartSection, SliderSection },
};
</script>

<style></style>
