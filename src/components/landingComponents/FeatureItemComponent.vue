<template>
  <v-sheet width="400" class="d-flex bg-transparent flex-column pa-5">
    <KinesisContainer>
      <KinesisElement type="depth" strength="15">
        <v-img :src="src" width="100%" class="feature-item__img" />
      </KinesisElement>
    </KinesisContainer>
    <div class="text-center mt-3 feature-item__title">{{ title }}</div>
    <div class="text-center feature-item__description">{{ description }}</div>
  </v-sheet>
</template>

<script>
export default {
  name: "FeatureItemComponent",
  props: ["title", "description", "src"],
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
