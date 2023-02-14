import { defineStore } from "pinia";
import { medium, rss2json } from "@/http/axios";

export const useBlogPosts = defineStore("blog_posts", {
  state: () => ({
    token: "2bcbfcf9c70ddb3f2d8a8421a23404a32a6401961de97c560d639d76e65aaca93",
    user: {
      id: "",
      username: "",
      name: "",
      url: "",
      imageUrl: "",
    },
    publications: [],
    feed: [],
    publication_feed: {
      status: "",
      feed: {},
      items: [],
    },
  }),
  getters: {
    current_user(state) {
      return state.user;
    },
  },
  actions: {
    async get_user() {
      const response = await medium.get(`/me?accessToken=${this.token}`);
      this.user = response.data.data;
    },
    async get_feed() {
      const response = await rss2json.get(``, {
        params: {
          rss_url: `https://medium.com/feed/@${this.user.username}`,
        },
      });
      this.feed = response.data.data;
    },
    async get_publication_feed(publication_name: string) {
      const response = await rss2json.get("", {
        params: {
          rss_url: `https://medium.com/feed/${publication_name}`,
        },
      });
      this.publication_feed = response.data;
    },
    async get_publications() {
      const response = await medium.get(`/users/${this.user.id}/publications`, {
        params: {
          accessToken: this.token,
        },
      });
      this.publications = response.data.data;
    },
  },
});
