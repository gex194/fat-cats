<template>
  <v-expansion-panel :id="id" rounded="5" v-on:group:selected="is_panel_active" :class="panel_active ? 'expansion-panel__active' : ''">
    <v-expansion-panel-title hide-actions class="faq-title">
      <template v-slot:default="{ expanded }">
        <div class="d-flex justify-start align-center">
          <span>{{ index }}. {{ title }}</span>
          <Transition mode="out-in" name="fade" appear>
            <span v-if="expanded">
              <video
                style="top: -25px"
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
  data() {
    return {
      panel_active: false,
    }
  },
  methods: {
    is_panel_active(obj) {
      this.panel_active = obj.value;
    }
  }
};
</script>

<style>
.faq-title {
  font-size: 20px;
}
.faq-text {
  overflow-wrap: break-word;
  white-space: break-spaces;
  font-size: 16px;
}

.expansion-panel__active {
  -webkit-box-shadow: 0px 0px 13px 6px rgba(255,250,194,0.3);
  -moz-box-shadow: 0px 0px 13px 6px rgba(255,250,194,0.3);
  box-shadow: 0px 0px 13px 6px rgba(255,250,194,0.3);
}

.hidden {
  visibility: hidden;
}
.visible {
  visibility: visible;
}
</style>
