<template>
  <v-sheet
    width="100%"
    class="section-background"
    ref="sheet"
  >
    <div ref="scroll">
      <section>
        <StartSectionMobile v-if="mobile" class="section__container-mobile" />
        <StartSection v-else class="section__container" />
      </section>
      <section
        id="intro_section"
        class="d-flex align-center justify-center landing__container"
        :class="!mobile ? 'section__container' : 'section__container-mobile'"
      >
        <IntroSectionMobile v-if="mobile" />
        <IntroSection v-else />
      </section>
      <section
        id="slide_section"
        class="d-flex align-center justify-center landing__container"
        :class="!mobile ? 'section__container' : 'section__container-mobile'"
      >
        <SliderSectionMobile v-if="mobile" />
        <SliderSection v-else />
      </section>
      <section
        id="token_section"
        class="d-flex align-center justify-center landing__container"
        :class="!mobile ? 'section__container' : 'section__container-mobile'"
      >
        <TokenSectionMobile v-if="mobile" />
        <TokenSection v-else />
      </section>
      <section
        id="feature_section"
        class="d-flex align-center justify-center landing__container"
        :class="!mobile ? 'section__container' : 'section__container-mobile'"
      >
        <FeatureSectionMobile v-if="mobile" />
        <FeatureSection v-else />
      </section>
      <section
        id="crown_section"
        class="d-flex align-center justify-center landing__container"
      >
        <CrownSectionMobile v-if="mobile" />
        <CrownSection v-else />
      </section>
      <section></section>
    </div>
  </v-sheet>
<!--  <v-sheet-->
<!--    class="section-background d-flex flex-column align-center justify-center"-->
<!--    height="100%"-->
<!--    v-else-->
<!--  >-->
<!--    <v-sheet class="d-flex bg-transparent" width="80%">-->
<!--      <v-img src="/LOGO.png" class="pa-15" height="100%" width="100%" />-->
<!--    </v-sheet>-->
<!--    <v-btn-->
<!--      width="80%"-->
<!--      href="/deck"-->
<!--      prepend-icon="mdi:mdi-cards-outline"-->
<!--      class="mt-10"-->
<!--      >Deck-->
<!--    </v-btn>-->
<!--    <v-btn-->
<!--      width="80%"-->
<!--      href="/cats"-->
<!--      prepend-icon="mdi:mdi-account-group-outline"-->
<!--      class="mt-10"-->
<!--      >Team-->
<!--    </v-btn>-->
<!--    <v-btn-->
<!--      width="80%"-->
<!--      href="/blog"-->
<!--      prepend-icon="mdi:mdi-post-outline"-->
<!--      class="mt-10"-->
<!--      >Blog-->
<!--    </v-btn>-->
<!--    <v-btn-->
<!--      width="80%"-->
<!--      href="/faq"-->
<!--      prepend-icon="mdi:mdi-help-rhombus-outline"-->
<!--      class="mt-10 mb-10"-->
<!--      >FAQ-->
<!--    </v-btn>-->
<!--    <p class="mb-10">Best experienced in desktop mode</p>-->
<!--  </v-sheet>-->
</template>

<script>
import StartSection from "@/views/landingSections/StartSection.vue";
import SliderSection from "@/views/landingSections/SliderSection.vue";
import FeatureSection from "@/views/landingSections/FeatureSection.vue";
import IntroSection from "@/views/landingSections/IntroSection.vue";
import TokenSection from "@/views/landingSections/TokenSection.vue";

import StartSectionMobile from "@/views/landingSections/mobile/StartSectionMobile.vue";
import IntroSectionMobile from "@/views/landingSections/mobile/IntroSectionMobile.vue";
import SliderSectionMobile from "@/views/landingSections/mobile/SliderSectionMobile.vue";
import FeatureSectionMobile from "@/views/landingSections/mobile/FeatureSectionMobile.vue";
import TokenSectionMobile from "@/views/landingSections/mobile/TokenSectionMobile.vue";
import CrownSectionMobile from "@/views/landingSections/mobile/CrownSectionMobile.vue";

import { useDisplay } from "vuetify";
import { useLoader } from "@/stores/loader";
import scrollSnapPolyfill from "css-scroll-snap-polyfill";
import PanelSnap from "panelsnap";
import CrownSection from "@/views/landingSections/CrownSection.vue";

export default {
  name: "LandingView",
  components: {
    CrownSection,
    TokenSection,
    IntroSection,
    FeatureSection,
    StartSection,
    SliderSection,
    StartSectionMobile,
    IntroSectionMobile,
    SliderSectionMobile,
    FeatureSectionMobile,
    TokenSectionMobile,
    CrownSectionMobile,
  },
  setup() {
    const loader = useLoader();
    const { mobile, sm } = useDisplay();
    return { mobile, sm, loader };
  },
  mounted() {
    scrollSnapPolyfill();
    this.$nextTick(() => {
      if (!this.$isMobile() && !this.mobile) {
        this.init_panel();
        document.addEventListener("wheel", this.handle_wheel, {
          passive: false,
        });
        this.active_panel.on("snapStart", () => (this.panel_moving = true));
        this.active_panel.on("snapStop", () => (this.panel_moving = false));
      }
    });
  },
  beforeUnmount() {
    document.removeEventListener("wheel", this.handle_wheel, {
      passive: false,
    });
    this.active_panel.destroy();
  },
  data() {
    return {
      panel_moving: false,
      panel_index: 0,
      active_panel: "",
    };
  },
  methods: {
    init_panel() {
      const defaultOptions = {
        panelSelector: "section",
        directionThreshold: 250,
        delay: 0,
        duration: 800,
        easing: function (t) {
          return t * t * t * t;
        },
      };
      this.active_panel = new PanelSnap(defaultOptions);
    },
    handle_wheel(e) {
      if (
        (e.deltaY < 100 && e.deltaY > 0) ||
        (e.deltaY > -100 && e.deltaY < 0)
      ) {
        return true;
      }
      if (e.ctrlKey) {
        return true;
      }
      e.preventDefault();
      e.stopPropagation();

      if (this.panel_moving) {
        return false;
      }
      if (e.deltaY >= 100) {
        this.panel_index += 1;
      }

      if (e.deltaY <= -100) {
        this.panel_index -= 1;
      }

      if (this.panel_index >= this.$refs.scroll.children.length) {
        this.panel_index = this.$refs.scroll.children.length - 1;
        return false;
      }

      if (this.panel_index < 0) {
        this.panel_index = 0;
        return false;
      }

      this.active_panel.snapToPanel(
        this.$refs.scroll.children[this.panel_index]
      );
      return false;
    },
  },
};
</script>

<style scoped>
.section__container {
  /*margin-top: 120px;*/
}

.landing__container {
  padding-right: 10%;
  padding-left: 10%;
}

.section__container-mobile {
  margin-top: 60px;
}
</style>
