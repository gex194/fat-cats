<template>
  <v-sheet width="100%" class="section-background">
    <section id="start_section">
      <StartSection />
    </section>
    <section id="intro_section">
      <v-lazy>
        <IntroSection />
      </v-lazy>

    </section>
    <section id="slide_section">
      <v-lazy>
        <SliderSection />
      </v-lazy>

    </section>
    <section id="feature_section">
        <FeatureSection />
    </section>
  </v-sheet>
</template>

<script>
import StartSection from "@/views/landingSections/StartSection.vue";
import SliderSection from "@/views/landingSections/SliderSection.vue";
import FeatureSection from "@/views/landingSections/FeatureSection.vue";
import IntroSection from "@/views/landingSections/IntroSection.vue";

export default {
  name: "LandingView",
  components: { IntroSection, FeatureSection, StartSection, SliderSection },
};
</script>

<style></style>
