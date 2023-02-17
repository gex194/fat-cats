<template>
  <v-sheet class="d-flex justify-center align-center flex-column team__container section-background">
    <div class="text-center mt-3 team-text-h1">Fat Cats</div>
    <div class="text-center mt-3 mb-3 team-text-h4">Meet our team</div>
    <TeamListComponent  />
  </v-sheet>
</template>

<script>
import TeamListComponent from "@/components/teamComponents/TeamListComponent.vue";

export default {
  name: "TeamView",
  components: { TeamListComponent },
};
</script>

<style scoped>
.team__container {
  padding-top: 150px;
}

.team-text-h1 {
  font-size: 120px;
  font-family: Cinzel, serif;
}

.team-text-h4 {
  font-size: 40px;
  font-family: Cinzel, serif;
}
</style>
