<template>
  <v-overlay :model-value="overlay" @click:outside="close_overlay" class="justify-center align-center">
    <v-card>
      <v-card-item>
        <v-card-title>Newsletter</v-card-title>
      </v-card-item>
      <v-card-item>
        <v-card-subtitle>Subscribe to get news about Fat Cats</v-card-subtitle>
      </v-card-item>
      <v-card-item>
        <v-text-field
          class="pt-2"
          clearable
          label="Name"
          variant="outlined"
          type="text"
          name="name"
          v-model="user_name"
        />
        <v-text-field
          class="pt-2"
          clearable
          label="Email*"
          variant="outlined"
          type="email"
          name="email"
          v-model="user_email"
        />
        <v-btn :disabled="!user_email" @click="send_email">Submit</v-btn>
      </v-card-item>
    </v-card>
  </v-overlay>
</template>

<script>
import emailjs from "@emailjs/browser";

export default {
  name: "NewsletterComponent",
  props: ["overlay"],
  data() {
    return {
      user_email: "",
      user_name: ""
    }
  },
  methods: {
    send_email() {
      emailjs
        .send("service_rjk7m3g", "template_6vdt9tt", {
          from_name: this.user_name,
          from_email: this.user_email,
        })
        .then(() => this.toggle_overlay());
    },
    close_overlay() {
      this.$emit("close");
    }
  }
};
</script>

<style scoped>

</style>