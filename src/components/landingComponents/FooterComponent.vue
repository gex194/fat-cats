<template>
  <v-footer app class="d-flex text-center flex-column" absolute>
    <v-row align="stretch" justify="space-evenly" no-gutters>
      <div class="mt-2">
        <v-btn
          @click="contact_overlay = !contact_overlay"
          variant="elevated"
          class="mx-2"
          rounded="xl"
        >
          Contact
        </v-btn>
      </div>
      <v-btn
        v-for="link in links"
        target="_blank"
        :key="link.value"
        :href="link.href"
        variant="elevated"
        class="mx-2 ma-2"
        rounded="xl"
      >
        {{ link.name }}
      </v-btn>
    </v-row>
    <v-divider></v-divider>
    <div class="mt-2">
      <v-btn
        @click="overlay = !overlay"
        variant="elevated"
        class="mx-2"
        rounded="xl"
      >
        Sign up for newsletter
      </v-btn>
    </div>
    <v-divider></v-divider>
    <div class="mt-2">
      <v-btn
        target="_blank"
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
      Nothing is set in stone and everything is subject to change
    </div>
    <v-divider></v-divider>
    <div><strong>Fat Cats</strong> {{ new Date().getFullYear() }}</div>
  </v-footer>
  <NewsletterComponent :overlay="overlay" @close="overlay = !overlay" />
  <ContactComponent :overlay="contact_overlay" @close="contact_overlay = !contact_overlay" />
</template>

<script>
import NewsletterComponent from "@/components/landingComponents/NewsletterComponent.vue";
import ContactComponent from "@/components/landingComponents/ContactComponent.vue";

export default {
  name: "FooterComponent",
  components: { ContactComponent, NewsletterComponent },
  data: () => ({
    overlay: false,
    contact_overlay: false,
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
      { name: "Media kit", value: "kit", href: "https://drive.google.com/drive/folders/1WT_LrpGoc39pDGTAtBPRm_cMomH-OkOw?usp=sharing" },
    ],
  }),
};
</script>

<style scoped></style>
