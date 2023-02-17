<template>
  <v-expansion-panels>
    <FAQContentListItemComponent
      v-for="(item, index) in content"
      :key="item.id"
      :index="index + 1"
      v-bind="item"
    />
  </v-expansion-panels>
</template>

<script>
import FAQContentListItemComponent from "@/components/faqComponents/contentList/FAQContentListItemComponent.vue";

export default {
  name: "FAQContentListComponent",
  props: ["content"],
  components: { FAQContentListItemComponent },
};
</script>

<style scoped></style>
