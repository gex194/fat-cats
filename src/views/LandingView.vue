<template>
  <v-sheet
    v-if="!mobile"
    width="100%"
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
  <v-sheet
    class="section-background d-flex flex-column align-center justify-center"
    height="100%"
    v-else
  >
    <v-sheet class="d-flex bg-transparent" width="80%">
      <v-img src="/LOGO.png" class="pa-15" height="100%" width="100%" />
    </v-sheet>
    <v-btn
      width="80%"
      href="/deck"
      prepend-icon="mdi:mdi-cards-outline"
      class="mt-10"
    >Deck
    </v-btn
    >
    <v-btn
      width="80%"
      href="/cats"
      prepend-icon="mdi:mdi-account-group-outline"
      class="mt-10"
    >Team
    </v-btn
    >
    <v-btn width="80%" disabled href="/" prepend-icon="mdi:mdi-book-open" class="mt-10"
    >Lore
    </v-btn
    >
    <v-btn
      width="80%"
      href="/blog"
      prepend-icon="mdi:mdi-post-outline"
      class="mt-10"
    >Blog
    </v-btn
    >
    <v-btn
      width="80%"
      href="/faq"
      prepend-icon="mdi:mdi-help-rhombus-outline"
      class="mt-10 mb-10"
    >FAQ
    </v-btn
    >
    <p class="mb-10">Best experienced in desktop mode</p>
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
