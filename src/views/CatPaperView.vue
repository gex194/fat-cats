<template>
  <v-sheet
    class="catpaper__container bg-black">
    <Splide :options="options">
      <SplideSlide  v-for="n in 29" :key="n" class="d-flex justify-center align-center">
        <img class="w-100 pl-6 pr-6 rounded-xl" style="max-width:1500px"  :src="`/src/assets/deck_pngs/${n}.png`" />
      </SplideSlide>
    </Splide>
  </v-sheet>

</template>

<script>
export default {
  name: "CatPaperView",
  setup() {
    const options = {
      type: "slide",
      fixedHeight: 800,
    };

    return { options }
  }
};
</script>

<style scoped>
.catpaper__container {
  padding-top:150px;
}


</style>