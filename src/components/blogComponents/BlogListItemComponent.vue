<template>
  <v-card
    :href="link"
    elevation="10"
    class="v-col-3 ma-10"
    min-width="300"
    max-width="100%"
  >
    <v-card-item>
      <v-img :src="thumbnail" width="100%" height="200" cover></v-img>
    </v-card-item>
    <v-card-item>
      <v-card-title class="text-h5">{{ title }}</v-card-title>
    </v-card-item>
    <v-divider />
    <v-card-item>
      <v-card-subtitle>{{ author }}</v-card-subtitle>
      <v-card-subtitle>{{ pubDate }}</v-card-subtitle>
    </v-card-item>
  </v-card>
</template>

<script>
export default {
  name: "BlogListItemComponent",
  props: ["title", "pubDate", "content", "link", "thumbnail", "author"],
};
</script>

<style>
.blog-content__container {
  width: 100%;
}

.blog-content__container > figure > img {
  width: 100%;
}
</style>
