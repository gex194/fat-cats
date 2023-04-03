<template>
  <v-sheet
    class="bg-black d-flex justify-center flex-column align-center h-100 view__container deck__container">
    <v-carousel
      hide-delimiter-background
      :show-arrows="!mobile"
      hide-delimiters
      :height="mobile ? 400 : 800"
      v-model="onboarding"
    >
      <template v-slot:prev="{ props }">
        <v-btn
          variant="elevated"
          icon="mdi:mdi-chevron-left"
          :disabled="onboarding === 0"
          @click="props.onClick"
        ></v-btn>
      </template>
      <template v-slot:next="{ props }">
        <v-btn
          variant="elevated"
          icon="mdi:mdi-chevron-right"
          :disabled="onboarding === length - 1"
          @click="props.onClick"
        ></v-btn>
      </template>
      <v-carousel-item v-for="n in length" :key="n">
        <div class="d-flex justify-center align-center">
          <v-img
            eager
            :height="mobile ? 400 : 800"
            class="rounded-xl"
            :src="`/deck_pngs/${n}.webp`"
          />
        </div>
      </v-carousel-item>
    </v-carousel>
    <v-item-group v-model="onboarding" class="text-center mt-5 mb-5" mandatory>
      <v-item
        v-for="n in length"
        :key="`btn-${n}`"
        v-slot="{ isSelected, toggle }"
        :value="n - 1"
      >
        <v-btn
          :class="isSelected ? 'slide__active' : ''"
          variant="text"
          icon="mdi:mdi-record"
          @click="toggle"
          >{{ n }}
        </v-btn>
      </v-item>
    </v-item-group>
  </v-sheet>
</template>

<script>
import { useDisplay } from "vuetify";
import { useLoader } from "@/stores/loader";
import { preload_imgs } from "@/helpers/helpers";

export default {
  name: "CatPaperView",
  setup() {
    const loader = useLoader();
    const { mobile } = useDisplay();
    return { mobile, loader };
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.preload();
    });
  },
  data() {
    return {
      onboarding: 0,
      length: 24,
    };
  },
  methods: {
    async preload() {
      let imgs = [];
      for (let i = 1; i <= 5; i++) {
        imgs.push(`/deck_pngs/${i}.webp`);
      }
      await preload_imgs(imgs, this.loader);
    },
  },
};
</script>

<style scoped>
.deck__container {
  padding-top: 180px;
}

@media screen and (max-width: 739px) {
  .deck__container {
    padding-top: 0px;
  }
}
.slide__active {
  color: black;
  background-color: lightgoldenrodyellow;
}
</style>
