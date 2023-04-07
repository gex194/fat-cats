<template>
  <v-sheet
    class="d-flex justify-center align-center flex-column section-background team__container view__container"
  >
    <div class="text-center mt-3 mb-3 text-h3 text-lg-h2 text-md-h3 text-sm-h3">
      Meet our team
    </div>
    <TeamListComponent />
  </v-sheet>
</template>

<script>
import TeamListComponent from "@/components/teamComponents/TeamListComponent.vue";
import { useLoader } from "@/stores/loader";
import constants from "@/constants/constants";
import { preload } from "@/helpers/helpers";

export default {
  name: "TeamView",
  components: { TeamListComponent },
  setup() {
    const loader = useLoader();
    return { loader };
  },
};
</script>

<style scoped>
.team-text-h1 {
  font-size: 120px;
  font-family: Cinzel, serif;
}

.team__container {
  padding-top: 180px;
}

@media screen and (max-width: 739px) {
  .team__container {
    padding-top: 0;
  }
}
</style>
