<template>
  <v-sheet
    width="100%"
    class="d-flex bg-transparent align-center justify-center flex-column mr-5"
  >
    <KinesisContainer :active="!mobile">
      <KinesisElement type="depth" :strength="15" class="d-flex justify-center">
        <img
          :src="src"
          style="min-width: 100px; max-width: 300px"
          class="feature-item__img"
        />
      </KinesisElement>
    </KinesisContainer>
    <div
      class="feature-item__title text-center mt-lg-10 mt-md-10 mt-sm-5 text-lg-h4 text-md-h4 text-sm-h5"
      :class="mobile ? 'mt-5 text-h5' : ''"
    >
      {{ title }}
    </div>
    <div
      class="feature-item__text text-center mt-lg-4 mt-md-4 mt-sm-3 v-col-8 v-col-xl-8 v-col-md-9 v-col-lg-12 text-body-2 text-lg-h6 text-xl-h5 text-md-h7 text-sm-h7"
      :class="mobile ? 'mb-5' : ''"
    >
      {{ description }}
    </div>
  </v-sheet>
</template>

<script>
import { useDisplay } from "vuetify";

export default {
  name: "FeatureItemComponent",
  props: ["title", "description", "src"],
  setup() {
    const { mobile } = useDisplay();
    return { mobile };
  },
};
</script>

<style scoped>
.feature-item__title {
  font-family: Cinzel-bold !important;
  color: #ffec93;
}

.feature-item__text {
  font-size: 2vh !important;
  font-weight: 500;
  max-height: 100vh;
}

.feature-item__img {
  width: 100%;
}

.feature-item__img:hover {
  width: 110%;
}
</style>
