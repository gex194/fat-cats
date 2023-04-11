<template>
  <v-card
    class="w-100 h-100 mt-lg-5 hidden bg-transparent flex-wrap"
    elevation="0"
    v-animate-onscroll="{ down: animation_style(index) }"
  >
    <div
      class="d-flex align-center flex-wrap justify-center w-100 h-100"
      :class="is_even_or_zero(index) ? 'flex-row-reverse' : ''"
    >
      <div class="v-col-lg-6 v-col-sm-12 d-flex align-center">
        <v-sheet
          class="d-flex bg-transparent align-center justify-center"
          :class="
            is_even_or_zero(index)
              ? 'justify-lg-start align-lg-end'
              : 'justify-lg-end align-lg-start'
          "
          width="100%"
        >
          <v-img eager class="rounded-xl" style="max-width: 50vh" :src="img" />
        </v-sheet>
      </div>
      <div
        class="v-col-lg-6 v-col-sm-12 align-center d-flex flex-column align-sm-center"
        :class="is_even_or_zero(index) ? 'align-lg-end' : 'align-lg-start'"
      >
        <v-card-item class="d-flex">
          <v-card-title>
            <div class="text-amber-accent-1 text-xl-h3 text-lg-h4  text-md-h4 text-sm-h4">
              {{ name }}
            </div>
          </v-card-title>
        </v-card-item>
        <v-card-item class="d-flex">
          <v-card-subtitle>
            <span class="text-subtitle-1 text-lg-h5 text-md-h5 text-sm-h5">{{
              role
            }}</span>
          </v-card-subtitle>
        </v-card-item>
        <div class="d-flex">
          <v-card-item
            v-for="link in links"
            :key="link.id"
            class="d-flex justify-center flex-row"
          >
            <v-btn
              icon
              target="_blank"
              :href="link.url"
              color="amber-accent-1"
              class="text-black"
            >
              <i class="btn-icon" :class="link.icon"></i>
            </v-btn>
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

.btn-icon {
  font-size: 1.5rem;
}
</style>
