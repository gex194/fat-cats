<template>
  <v-sheet
    class="d-flex flex-wrap flex-shrink-0 justify-space-evenly align-center pa-3 bg-transparent"
  >
    <blog-list-item-component
      v-for="post in publication_feed.items"
      :key="post.guid"
      v-bind="post"
    />
  </v-sheet>
</template>

<script>
import { useBlogPosts } from "@/stores/blog";
import BlogListItemComponent from "@/components/blogComponents/BlogListItemComponent.vue";
import { onBeforeMount } from "vue";

export default {
  name: "BlogListComponent",
  components: { BlogListItemComponent },
  setup() {
    const store = useBlogPosts();
    return { store };
  },
  computed: {
    publication_feed() {
      return this.store.publication_feed;
    },
  },
};
</script>

<style scoped>
</style>
