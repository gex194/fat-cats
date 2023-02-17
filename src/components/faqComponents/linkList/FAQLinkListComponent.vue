<template>
  <FAQLinkListItemComponent
    v-for="(item, index) in content"
    :key="item.id"
    :index="index + 1"
    v-bind="item"
  />
</template>

<script>
import FAQLinkListItemComponent from "@/components/faqComponents/linkList/FAQLinkListItemComponent.vue";

export default {
  name: "FAQLinkListComponent",
  components: { FAQLinkListItemComponent },
  props: ["content"],
};
</script>

<style scoped></style>
