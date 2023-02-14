import { defineStore } from "pinia";

export const useLoader = defineStore("loader", {
  state: () => ({
    loading: false,
  }),
  getters: {
    load_state(state) {
      return state.loading;
    },
  },
  actions: {
    enable_loader() {
      this.loading = true;
    },
    disable_loader() {
      this.loading = false;
    },
  },
});
