<template>
  <v-sheet
    style="padding-top: 180px"
    class="d-flex justify-center flex-column align-center section-background"
  >
    <FAQListComponent class="ma-5" />
  </v-sheet>
</template>

<script>
import FAQListComponent from "@/components/faqComponents/FAQListComponent.vue";
import TopbarComponent from "@/components/landingComponents/TopbarComponent.vue";

export default {
  name: "FAQView",
  components: { TopbarComponent, FAQListComponent },
};
</script>

<style scoped>
</style>
