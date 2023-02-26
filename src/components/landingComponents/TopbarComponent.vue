<template>
  <v-app-bar
    v-if="!mobile"
    app
    density="prominent"
    absolute
    dark
    elevation="0"
    style="z-index: 1"
    class="appbar__container"
  >
    <v-tabs fixed-tabs grow class="tabs__container" v-model="selected_tab">
      <v-tab
        :value="0"
        selected-class="tab--selected"
        :ripple="false"
        variant="plain"
        @click="go_to('/')"
      >
        <div class="h-100">
          <v-img
            style="opacity: 1 !important"
            src="/LOGO.png"
            class="mx-auto"
            height="100%"
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
          variant="plain"
          class="tab"
          @click="go_to(tab.href)"
        >
          <p class="text-h5">{{ tab.title }}</p>
        </v-tab>
        <v-menu open-on-hover v-else>
          <template v-slot:activator="{ props }">
            <v-tab
              selected-class="tab--selected"
              v-bind="props"
              variant="plain"
              :ripple="false"
              :value="tab.id"
              class="tab"
            >
              <p class="text-h6">{{ tab.title }}</p>
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
  <v-app-bar v-else>
    <template v-slot:prepend>
      <v-menu transition="slide-y-transition">
        <template v-slot:activator="{ props }">
          <v-app-bar-nav-icon
            icon="mdi:mdi-menu"
            v-bind="props"
          ></v-app-bar-nav-icon>
        </template>
        <v-list>
          <v-list-item href="/deck" prepend-icon="mdi:mdi-cards-outline">
            <v-list-item-title>Deck</v-list-item-title>
          </v-list-item>
          <v-list-item
            href="/cats"
            prepend-icon="mdi:mdi-account-group-outline"
          >
            <v-list-item-title>Team</v-list-item-title>
          </v-list-item>
          <v-list-item disabled prepend-icon="mdi:mdi-book-open">
            <v-list-item-title>Lore</v-list-item-title>
          </v-list-item>
          <v-list-item href="/blog" prepend-icon="mdi:mdi-post-outline">
            <v-list-item-title>Blog</v-list-item-title>
          </v-list-item>
          <v-list-item href="/faq" prepend-icon="mdi:mdi-help-rhombus-outline">
            <v-list-item-title>FAQ</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </template>
    <v-app-bar-title>{{current_route_name}}</v-app-bar-title>
  </v-app-bar>
</template>

<script>
import { useDisplay } from "vuetify";

export default {
  name: "TopbarComponent",
  setup() {
    const { mobile } = useDisplay();
    return { mobile };
  },
  data() {
    return {
      selected_tab: 0,
      topbar_tabs: [
        {
          id: 1,
          title: "Project",
          children: [
            {
              id: 1,
              title: "CatPaper Deck",
              action: () => this.go_to("/deck"),
            },
            { id: 2, title: "Team", action: () => this.go_to("/cats") },
          ],
        },
        { id: 2, title: "Lore", href: "" },
        { id: 3, title: "Blog", href: "/blog" },
        { id: 5, title: "FAQ", href: "/faq" },
      ],
    };
  },
  computed: {
    current_route_name() {
      return this.$route.name;
    }
  },
  methods: {
    go_to(href) {
      this.$router.push({ path: href });
    },
    toggle_menu() {
      this.mobile_menu = !this.mobile_menu;
    },
  },
};
</script>

<style scoped>
.appbar__container {
  background-color: transparent !important;
  padding-top: 20px;
  padding-bottom: 160px;
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
