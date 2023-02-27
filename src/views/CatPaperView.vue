<template>
  <v-sheet
    class="bg-black d-flex justify-center flex-column align-center"
  >
    <v-carousel hide-delimiter-background :show-arrows="!mobile" hide-delimiters :height="mobile ? 400 : 800" v-model="onboarding">
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
      <v-carousel-item
        v-for="n in length"
        :key="n"
      >
        <div class="d-flex justify-center align-center">
          <img
            eager
            :height="mobile ? 400 : 800"
            class="rounded-xl"
            :src="`/deck_pngs/${n}.png`"
          />
        </div>
      </v-carousel-item>
    </v-carousel>
    <v-item-group
      v-model="onboarding"
      class="text-center mt-5 mb-5"
      mandatory
    >
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

export default {
  name: "CatPaperView",
  setup() {
    const { mobile } = useDisplay();
    return { mobile };
  },
  data() {
    return {
      onboarding: 0,
      length: 29
    };
  }
};
</script>

<style scoped>
.slide__active {
  color: black;
  background-color: lightgoldenrodyellow;
}
</style>
