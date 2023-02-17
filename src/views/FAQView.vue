<template>
  <v-sheet
    class="d-flex justify-center align-center section-background faq__container"
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
.faq__container {
  padding-top: 150px;
}
</style>
