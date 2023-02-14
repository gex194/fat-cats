<template>
  <v-sheet width="100%" class="blog__container">
    <blog-list-component />
  </v-sheet>
</template>

<script>
import BlogListComponent from "@/components/blogComponents/BlogListComponent.vue";

export default {
  name: "BlogView",
  components: { BlogListComponent },
};
</script>

<style scoped>
.blog__container {
  margin-top: 150px;
}
</style>
