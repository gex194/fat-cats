<template>
  <v-sheet
    class="d-flex justify-center h-100 flex-column align-center section-background faq__container view__container"
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
  padding-top: 180px
}

@media screen and (max-width: 739px) {
  .faq__container {
    padding-top: 0px;
  }
}
</style>
