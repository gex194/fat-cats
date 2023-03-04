<template>
  <v-sheet
    style="padding-top: 180px"
    class="d-flex justify-center h-100 flex-column align-center section-background view__container"
  >
    <FAQListComponent class="ma-5" />
  </v-sheet>
</template>

<script>
import FAQListComponent from "@/components/faqComponents/FAQListComponent.vue";

export default {
  name: "FAQView",
  components: { FAQListComponent },
};
</script>

<style scoped>
</style>
