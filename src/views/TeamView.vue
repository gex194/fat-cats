<template>
  <v-sheet
    class="d-flex justify-center align-center flex-column section-background"
  >
    <Transition name="fade" mode="out-in" appear>
      <v-img
        eager
        src="/gold_titles/FAT_CATS_2.png"
        height="200"
        width="100%"
      />
    </Transition>
    <div class="text-center mt-3 mb-3 team-text-h4">Meet our team</div>
    <TeamListComponent />
  </v-sheet>
</template>

<script>
import TeamListComponent from "@/components/teamComponents/TeamListComponent.vue";
import { useLoader } from "@/stores/loader";
import constants from "@/constants/constants";
import { preload_imgs } from "@/helpers/helpers";

export default {
  name: "TeamView",
  components: { TeamListComponent },
  setup() {
    const loader = useLoader();
    return { loader };
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.preload();
    });
  },
  methods: {
    async preload() {
      const img_srcs = constants.team.map((member) => member.img);
      return await preload_imgs(img_srcs, this.loader);
    },
  },
};
</script>

<style scoped>
.team-text-h1 {
  font-size: 120px;
  font-family: Cinzel, serif;
}

.team-text-h4 {
  font-size: 40px;
  font-family: Cinzel, serif;
}
</style>
