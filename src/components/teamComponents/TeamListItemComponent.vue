<template>
  <v-card
    class="w-100 h-100 mt-5 hidden"
    elevation="10"
    v-animate-onscroll="{ down: 'animated fadeInUp visible' }"
  >
    <div
      class="d-flex align-center justify-center w-100 h-100"
      :class="index === 1 || index + (1 % 2) === 0 ? 'flex-row-reverse' : ''"
    >
      <div class="v-col-6">
        <v-img
          class="mx-auto rounded-xl rounded-be-circle rounded-ts-circle"
          rounded="1"
          size="x-large"
          src="src/assets/test_cat_card.png"
        />
      </div>
      <div class="v-col-6">
        <v-card-item>
          <v-card-title
            ><h1>{{ name }}</h1></v-card-title
          >
        </v-card-item>
        <v-card-item>
          <v-card-subtitle>{{ role }}</v-card-subtitle>
        </v-card-item>
        <v-card-item v-for="link in links" :key="link.id">
          <v-btn :icon="link.icon" :href="link.url" />
        </v-card-item>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "teamListItemComponent",
  props: ["name", "role", "links", "index"],
};
</script>

<style scoped>
.hidden {
  visibility: hidden;
}

.visible {
  visibility: visible;
}
</style>
