<template>
  <v-sheet
    class="catpaper__container bg-black d-flex justify-center flex-column align-center"
  >
    <v-carousel hide-delimiter-background hide-delimiters height="800" v-model="onboarding">
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
          <v-img
            eager
            height="800"
            class="rounded-xl"
            :src="`/src/assets/deck_pngs/${n}.png`"
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
        >{{n}}</v-btn>
      </v-item>
    </v-item-group>
  </v-sheet>
</template>

<script>
export default {
  name: "CatPaperView",
  data() {
    return {
      onboarding: 0,
      length: 29,
    };
  }
};
</script>

<style scoped>
.catpaper__container {
  padding-top: 150px;
}

.slide__active {
  color: black;
  background-color: lightgoldenrodyellow;
}
</style>
