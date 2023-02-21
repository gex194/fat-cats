<template>
  <v-sheet width="100%" class="section-background">
    <section id="start_section">
      <StartSection />
    </section>
    <section id="intro_section" class="section__container">
      <v-lazy>
        <IntroSection />
      </v-lazy>
    </section>
    <section id="slide_section" class="section__container" >
      <v-lazy>
        <SliderSection />
      </v-lazy>
    </section>
    <section id="token_section" class="section__container">
      <v-lazy>
        <TokenSection />
      </v-lazy>
    </section>
    <section id="feature_section" class="section__container">
        <FeatureSection />
    </section>
  </v-sheet>
</template>

<script>
import StartSection from "@/views/landingSections/StartSection.vue";
import SliderSection from "@/views/landingSections/SliderSection.vue";
import FeatureSection from "@/views/landingSections/FeatureSection.vue";
import IntroSection from "@/views/landingSections/IntroSection.vue";
import TokenSection from "@/views/landingSections/TokenSection.vue";

export default {
  name: "LandingView",
  components: { TokenSection, IntroSection, FeatureSection, StartSection, SliderSection },
};
</script>

<style scoped>
.section__container {
  margin-top: 120px;
}
</style>
