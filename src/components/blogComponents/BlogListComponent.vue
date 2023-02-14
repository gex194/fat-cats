<template>
  <v-sheet
    v-if="publication_feed.items.length > 0"
    class="d-flex align-center flex-column pa-3 blog-list__container"
  >
    <blog-list-item-component
      v-for="post in publication_feed.items"
      :key="post.guid"
      v-bind="post"
    />
  </v-sheet>
  <v-sheet v-else class="justify-center align-center d-flex pa-3">
    <div class="text-center text-h2">No available posts</div>
  </v-sheet>
</template>

<script>
import { useBlogPosts } from "@/stores/blog";
import BlogListItemComponent from "@/components/blogComponents/BlogListItemComponent.vue";

export default {
  name: "BlogListComponent",
  components: { BlogListItemComponent },
  setup() {
    const store = useBlogPosts();
    return { store };
  },
  created() {
    this.store.get_publication_feed("fat-cats");
  },
  computed: {
    publication_feed() {
      return this.store.publication_feed;
    },
  },
};
</script>

<style scoped>
.blog-list__container {
  background-color: black;
}
</style>
