<template>
  <v-sheet width="400" min-height="360" class="d-flex bg-transparent flex-column pa-5">
    <KinesisContainer :active="!mobile">
      <KinesisElement type="depth" :strength="15">
        <v-img :src="src" width="100%" min-width="95" class="feature-item__img" />
      </KinesisElement>
    </KinesisContainer>
    <div class="text-center mt-3 text-body-1 text-lg-h3 text-md-h4 text-sm-h5 text-yellow-lighten-4">{{ title }}</div>
    <div class="text-center text-body-2 text-lg-h4 text-md-h5 text-sm-h6">{{ description }}</div>
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
  }
};
</script>

<style scoped>
.feature-item__title {
  font-family: Cinzel Bold;
  color: lightgoldenrodyellow;
  font-size: 30px;
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
