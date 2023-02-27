<template>
  <v-sheet width="100%"
           class="section-background">
    <section id="start_section">
      <StartSection :class="!mobile ? 'section__container' : 'section__container-mobile'" />
    </section>
    <section id="intro_section" :class="!mobile ? 'section__container' : 'section__container-mobile'">
      <IntroSection />
    </section>
    <section id="slide_section" :class="!mobile ? 'section__container' : 'section__container-mobile'">
      <SliderSection />
    </section>
    <section id="token_section" :class="!mobile ? 'section__container' : 'section__container-mobile'">
      <TokenSection />
    </section>
    <section id="feature_section" :class="!mobile ? 'section__container' : 'section__container-mobile'">
      <FeatureSection />
    </section>
    <!--    <section id="crown_section" class="section__container">-->
    <!--      <v-lazy :options="{ threshold: 0.5 }" :min-height="600">-->
    <!--        <CrownSection />-->
    <!--      </v-lazy>-->
    <!--    </section>-->
  </v-sheet>
</template>

<script>
import StartSection from "@/views/landingSections/StartSection.vue";
import SliderSection from "@/views/landingSections/SliderSection.vue";
import FeatureSection from "@/views/landingSections/FeatureSection.vue";
import IntroSection from "@/views/landingSections/IntroSection.vue";
import TokenSection from "@/views/landingSections/TokenSection.vue";
import { useDisplay } from "vuetify";

export default {
  name: "LandingView",
  components: {
    TokenSection,
    IntroSection,
    FeatureSection,
    StartSection,
    SliderSection
  },
  setup() {
    const { mobile } = useDisplay();
    return { mobile };
  }
};
</script>

<style scoped>
.section__container {
  margin-top: 120px;
}

.section__container-mobile {
  margin-top: 60px;
}
</style>
