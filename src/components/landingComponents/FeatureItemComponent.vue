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
      class="feature-item__title text-center mt-10 text-body-1 text-lg-h4 text-md-h4 text-sm-h5 mb-5"
    >
      {{ title }}
    </div>
    <div class="text-center v-col-8 v-col-xl-8 v-col-md-9 v-col-lg-9 text-body-2 text-lg-h6 text-xl-h5 text-md-h7 text-sm-h7">
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

.feature-item__description {
  font-family: Montserrat;
  font-size: 16px;
}

.feature-item__img {
  width: 100%;
}

.feature-item__img:hover {
  width: 110%;
}
</style>
