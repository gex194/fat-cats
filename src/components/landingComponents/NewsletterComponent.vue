<template>
  <v-overlay
    scrim
    scroll-strategy="reposition"
    :model-value="overlay"
    @click:outside="close_overlay"
    class="justify-center align-center"
  >
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
          label="Email*"
          variant="outlined"
          type="email"
          name="email"
          v-model="user_email"
        />
        <div class="d-flex justify-center align-center mt-2">
          <v-btn
            class="mr-5"
            :disabled="!user_email || loading"
            @click="send_email"
            >Submit</v-btn
          >
          <v-progress-circular
            height="6"
            v-if="loading"
            indeterminate
            color="yellow-darken-2"
          ></v-progress-circular>
        </div>
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
      loading: false,
      user_email: "",
    };
  },
  methods: {
    send_email() {
      this.loading = true;
      emailjs
        .send("service_rjk7m3g", "template_6vdt9tt", {
          from_email: this.user_email,
        })
        .then(() => this.close_overlay())
        .finally(() => (this.loading = false));
    },
    close_overlay() {
      this.$emit("close");
      this.clear_fields();
    },
    clear_fields() {
      this.user_email = "";
    },
  },
};
</script>

<style scoped></style>
