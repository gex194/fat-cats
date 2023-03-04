<template>
  <v-sheet width="100%" class="section-background view__container" style="padding-top: 180px">
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
</style>
