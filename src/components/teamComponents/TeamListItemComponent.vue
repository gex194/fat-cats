<template>
  <v-card
    class="w-100 h-100 mt-5 hidden bg-transparent"
    elevation="0"
    v-animate-onscroll="{ down: animation_style(index) }"
  >
    <div
      class="d-flex align-center justify-center w-100 h-100"
      :class="is_even_or_zero(index) ? 'flex-row-reverse' : ''"
    >
      <div class="v-col-6 d-flex align-center">
        <img
          class="mx-auto rounded-xl"
          style="max-width: 500px; height: 500px"
          :src="img"
        />
      </div>
      <div
        class="v-col-6 d-flex flex-column"
        :class="is_even_or_zero(index) ? 'align-end' : 'align-start'"
      >
        <v-card-item class="d-flex">
          <v-card-title class="text-amber-accent-1"
            ><h1>{{ name }}</h1></v-card-title
          >
        </v-card-item>
        <v-card-item>
          <v-card-subtitle
            ><h2>{{ role }}</h2></v-card-subtitle
          >
        </v-card-item>
        <div class="d-flex">
          <v-card-item
            v-for="link in links"
            :key="link.id"
            class="d-flex justify-center flex-row"
          >
            <v-btn
              :icon="link.icon"
              :href="link.url"
              color="amber-accent-1"
              class="text-black"
            />
          </v-card-item>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "teamListItemComponent",
  props: ["name", "role", "links", "index", "img"],
  methods: {
    is_even_or_zero(val) {
      return val === 0 || val % 2 === 0;
    },
    animation_style(val) {
      if (this.is_even_or_zero(val)) {
        return "animated fadeInRight visible";
      }
      return "animated fadeInLeft visible";
    },
  },
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
