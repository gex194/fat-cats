<template>
  <v-overlay
    scrim
    scroll-strategy="reposition"
    :model-value="overlay"
    @click:outside="close_overlay"
    class="justify-center align-center"
  >
    <v-card width="100%" min-width="400">
      <v-card-item>
        <v-card-title>Contact Form</v-card-title>
      </v-card-item>
      <v-card-item>
        <v-card-subtitle>Send us a massage!</v-card-subtitle>
      </v-card-item>
      <v-card-item>
        <v-text-field
          class="pt-2"
          clearable
          label="Name*"
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
        <v-textarea
          class="pt-2"
          label="Message"
          variant="outlined"
          name="message"
          v-model="user_message"
        />
        <div class="d-flex justify-center align-center mt-2">
          <v-btn
            class="mr-5"
            :disabled="!user_email || !user_name || loading"
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
  name: "ContactComponent",
  props: ["overlay"],
  data() {
    return {
      loading: false,
      user_email: "",
      user_name: "",
      user_message: "",
    };
  },
  methods: {
    send_email() {
      this.loading = true;
      emailjs
        .send("service_h4noogm", "template_8fol8sl", {
          from_name: this.user_name,
          from_email: this.user_email,
          message: this.user_message,
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
      this.user_name = "";
      this.user_message = "";
    },
  },
};
</script>

<style scoped></style>
