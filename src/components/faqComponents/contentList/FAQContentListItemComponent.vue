<template>
  <v-expansion-panel :id="id" rounded="5">
    <v-expansion-panel-title hide-actions class="faq-title">
      <template v-slot:default="{ expanded }">
        <div class="d-flex justify-start align-center">
          <span>{{ index }}. {{ title }}</span>
          <Transition mode="out-in" name="fade" appear>
            <span v-if="expanded">
            <video
              style="top:-25px"
              src="/src/assets/webm_animations/Blue%20Sapphire%20alpha3.webm"
              class="bg-transparent position-absolute"
              preload="auto"
              muted
              autoplay
              playsinline
              loop
              height="50"
            /></span>
          </Transition>

        </div>
      </template>
    </v-expansion-panel-title>
    <v-expansion-panel-text>
      <span v-html="text" class="faq-text"> </span>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<script>
export default {
  name: "FAQContentListItemComponent",
  props: ["id", "title", "text", "index"],
};
</script>

<style scoped>
.faq-title {
  font-size: 20px;
}
.faq-text {
  overflow-wrap: break-word;
  white-space: break-spaces;
  font-size: 16px;
}

.hidden {
  visibility: hidden;
}
.visible {
  visibility: visible;
}
</style>
