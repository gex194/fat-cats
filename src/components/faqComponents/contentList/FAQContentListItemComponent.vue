<template>
  <v-expansion-panel :id="id" rounded="5">
    <v-expansion-panel-title hide-actions>
      {{index}}. {{ title }}
    </v-expansion-panel-title>
    <v-expansion-panel-text>
      <pre style="overflow-wrap: break-word; white-space: break-spaces">
        {{ text }}
      </pre>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<script>
export default {
  name: "FAQContentListItemComponent",
  props: ["id", "title", "text", "index"],
};
</script>

<style scoped></style>
