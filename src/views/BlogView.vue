<template>
  <v-sheet width="100%" class="blog__container">
    <blog-list-component />
  </v-sheet>
</template>

<script>
import BlogListComponent from "@/components/blogComponents/BlogListComponent.vue";
import { onBeforeMount } from "vue";
import { useBlogPosts } from "@/stores/blog";

export default {
  name: "BlogView",
  components: { BlogListComponent },
  setup() {
    const store = useBlogPosts();
    onBeforeMount(() => {
      store.get_publication_feed("fat-cats");
    });
    return { store };
  },
};
</script>

<style scoped>
.blog__container {
  margin-top: 150px;
}
</style>
