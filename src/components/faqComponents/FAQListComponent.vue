<template>
    <v-sheet class="d-flex w-75 justify-center flex-column align-center bg-transparent">
      <FAQContentListComponent :content="constants.faq" />
    </v-sheet>
</template>

<script>
import FAQContentListComponent from "@/components/faqComponents/contentList/FAQContentListComponent.vue";
import constants from "@/constants/constants"

export default {
  name: "FAQListComponent",
  components: { FAQContentListComponent },
  computed: {
    constants() {
      return constants;
    },
  }
};
</script>

<style scoped>

</style>