<template>
  <v-footer app class="d-flex text-center flex-column" absolute>
    <v-row justify="space-between" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link.value"
        :href="link.href"
        color="white"
        variant="text"
        class="mx-2"
        rounded="xl"
      >
        {{ link.name }}
      </v-btn>
    </v-row>
    <v-divider></v-divider>
    <div>
      <v-btn
        v-for="icon in icons"
        :key="icon.id"
        :icon="icon.icon"
        :href="icon.href"
        class="mx-3"
        variant="elevated"
      >
      </v-btn>
    </div>
    <div class="pt-0">
      Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
    </div>
    <v-divider></v-divider>
    <div><strong>Fat Cats</strong> {{ new Date().getFullYear() }}</div>
  </v-footer>
</template>

<script>
export default {
  name: "FooterComponent",
  data: () => ({
    icons: [
      {
        id: 1,
        icon: "fa-brands fa-discord",
        href: "https://discord.gg/dMAaZqbEbg",
      },
      {
        id: 2,
        icon: "fas fa-brands fa-twitter",
        href: "https://twitter.com/fat_cats_world",
      },
      {
        id: 3,
        icon: "fa-brands fa-telegram",
        href: "https://t.me/+0-5K6vu4eYsyODFk",
      },
      {
        id: 4,
        icon: "fa-brands fa-medium",
        href: "https://medium.com/fat-cats",
      },
    ],
    links: [
      { name: "Contact", value: "contact" },
      { name: "Media kit", value: "kit" },
      { name: "Privacy policy", value: "policy" },
    ],
  }),
};
</script>

<style scoped></style>
