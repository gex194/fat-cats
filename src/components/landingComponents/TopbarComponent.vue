<template>
  <v-app-bar
    app
    density="prominent"
    dark
    absolute
    elevation="0"
    class="appbar__container"
  >
    <v-tabs fixed-tabs grow class="tabs__container">
      <v-tab selected-class="tab--selected" @click="go_to('/')">
        <div>
          <v-img
            src="src/assets/logo.png"
            class="mx-auto"
            height="120"
            width="220"
          />
        </div>
      </v-tab>
      <template v-for="tab in topbar_tabs" :key="tab.id">
        <v-tab
          v-if="!tab?.children"
          selected-class="tab--selected"
          :disabled="!tab.href"
          :ripple="false"
          :value="tab.id"
          class="tab"
          @click="go_to(tab.href)"
        >
          <p class="tab--text">{{ tab.title }}</p>
        </v-tab>
        <v-menu open-on-hover v-else>
          <template v-slot:activator="{ props }">
            <v-tab
              selected-class="tab--selected"
              v-bind="props"
              :ripple="false"
              :value="tab.id"
              class="tab"
            >
              <p class="tab--text">{{ tab.title }}</p>
            </v-tab>
          </template>
          <v-list>
            <v-list-item
              v-for="child in tab.children"
              :key="child.id"
              @click="child.action"
            >
              <v-list-item-title>{{ child.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
    </v-tabs>
  </v-app-bar>
</template>

<script>

export default {
  name: "TopbarComponent",
  data() {
    return {
      topbar_tabs: [
        {
          id: 1,
          title: "Project",
          children: [
            { id: 1, title: "CatPaper Deck", action: () => this.go_to("/deck") },
            { id: 2, title: "Team", action: () => this.go_to("/team") },
          ],
        },
        { id: 2, title: "Lore", href: "" },
        { id: 3, title: "Blog", href: "/blog" },
        { id: 5, title: "FAQ", href: "/faq" },
      ],
    };
  },
  methods: {
    go_to(href) {
      this.$router.push({ path: href });
    },
  },
};
</script>

<style scoped>
.appbar__container {
  background-color: transparent !important;
  padding-top: 20px;
}

.appbar__container > .appbar__text > .v-btn:hover > .v-btn__overlay {
  opacity: unset !important;
}

.tabs__container {
  font-family: Cinzel Bold;
  font-size: 25px;
}

.tab > .v-btn:hover > .v-btn__overlay {
  opacity: unset !important;
}

.tab--text {
  font-size: 25px;
}
.v-btn:hover > .v-btn__overlay {
  background: unset;
  opacity: 1 !important;
}
</style>
