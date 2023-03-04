<template>
  <v-sheet v-if="!$isMobile() && !mobile" width="100%" class="section-background">
    <div ref="scroll">
      <section>
        <StartSection
          :class="!mobile ? 'section__container' : 'section__container-mobile'"
        />
      </section>
      <section
        id="intro_section"
        class="d-flex align-center justify-center landing__container"
        :class="!mobile ? 'section__container' : 'section__container-mobile'"
      >
        <IntroSection />
      </section>
      <section
        id="slide_section"
        class="d-flex align-center justify-center landing__container"
        :class="!mobile ? 'section__container' : 'section__container-mobile'"
      >
        <SliderSection />
      </section>
      <section
        id="token_section"
        class="d-flex align-center justify-center landing__container"
        :class="!mobile ? 'section__container' : 'section__container-mobile'"
      >
        <TokenSection />
      </section>
      <section
        id="feature_section"
        class="d-flex align-center justify-center landing__container"
        :class="!mobile ? 'section__container' : 'section__container-mobile'"
      >
        <FeatureSection />
      </section>
      <section
        id="crown_section" class="section__container landing__container">
        <CrownSection />
      </section>
      <section></section>
    </div>

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
    </v-btn>
    <v-btn
      width="80%"
      href="/cats"
      prepend-icon="mdi:mdi-account-group-outline"
      class="mt-10"
    >Team
    </v-btn>
    <v-btn
      width="80%"
      disabled
      href="/"
      prepend-icon="mdi:mdi-book-open"
      class="mt-10"
    >Lore
    </v-btn>
    <v-btn
      width="80%"
      href="/blog"
      prepend-icon="mdi:mdi-post-outline"
      class="mt-10"
    >Blog
    </v-btn>
    <v-btn
      width="80%"
      href="/faq"
      prepend-icon="mdi:mdi-help-rhombus-outline"
      class="mt-10 mb-10"
    >FAQ
    </v-btn>
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
import { preload_imgs } from "@/helpers/helpers";
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
    SliderSection
  },
  setup() {
    const loader = useLoader();
    const { mobile, sm } = useDisplay();
    return { mobile, sm, loader };
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.preload();
    });
  },
  mounted() {
    scrollSnapPolyfill();
    this.$nextTick(() => {
      if (!this.$isMobile()) {
        this.init_panel();
        document.addEventListener("wheel", this.handle_wheel, { passive: false });
        this.active_panel.on("snapStart", () => this.panel_moving = true);
        this.active_panel.on("snapStop", () => this.panel_moving = false);
      }
    });
  },
  beforeUnmount() {
    document.removeEventListener("wheel", this.handle_wheel, { passive: false });
    this.active_panel.destroy();
  },
  data() {
    return {
      panel_moving: false,
      panel_index: 0,
      active_panel: "",
      imagesToPreload: [
        "/gold_titles/ADA_BNB_Bridge.png",
        "/gold_titles/Art_Patronage.png",
        "/gold_titles/Cardano_Visualised.png",
        "/gold_titles/Ecosystems_utility_token_ducats2.png",
        "/gold_titles/FAT_CATS.png",
        "/gold_titles/FAT_CATS_2.png",
        "/gold_titles/Fat_Cats_nfts.png",
        "/gold_titles/Gaming_Platform.png",
        "/gold_titles/Luxury_powered_by_AI.png",
        "/gold_titles/NFT_COLLECTION.png",
        "/stacking_block_2.png",
        "/airdrop_block_3.png",
        "/game_pass_block_1.png"
      ]
    };
  },
  methods: {
    async preload() {
      if (this.mobile) {
        this.loader.disable_loader();
      }
      if (!this.mobile) {
        await preload_imgs(this.imagesToPreload, this.loader);
      }
    },
    init_panel() {
      const defaultOptions = {
        panelSelector: "section",
        directionThreshold: 200,
        delay: 0,
        duration: 800,
        easing: function(t) {
          return t * t * t * t;
        }
      };
      this.active_panel = new PanelSnap(defaultOptions);
    },
    handle_wheel(e) {
      if (e.ctrlKey) {
        return true;
      }
      e.preventDefault();
      e.stopPropagation();
      if (this.panel_moving) {return false;}
      if (e.deltaY > 0) {
        this.panel_index += 1;
      }

      if (e.deltaY < 0) {
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

      this.active_panel.snapToPanel(this.$refs.scroll.children[this.panel_index]);
      return false;
    }
  }
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
