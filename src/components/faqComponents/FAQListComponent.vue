<template>
    <v-sheet class="d-flex w-75 justify-center flex-column align-center bg-transparent">
      <FAQContentListComponent :content="constants.faq" />
    </v-sheet>
</template>

<script>
import FAQLinkListComponent from "@/components/faqComponents/linkList/FAQLinkListComponent.vue";
import FAQContentListComponent from "@/components/faqComponents/contentList/FAQContentListComponent.vue";
import constants from "@/constants/constants"

export default {
  name: "FAQListComponent",
  components: { FAQContentListComponent, FAQLinkListComponent },
  computed: {
    constants() {
      return constants;
    },
  }
};
</script>

<style scoped>

</style>