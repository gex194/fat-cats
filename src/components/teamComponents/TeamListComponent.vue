<template>
  <v-sheet
    class="d-flex justify-center align-center flex-column mt-2 mb-2 w-100 bg-transparent"
  >
    <TeamListItemComponent
      v-for="(member, index) in team"
      :key="member.id"
      v-bind="member"
      :index="index"
    />
  </v-sheet>
</template>

<script>
import TeamListItemComponent from "@/components/teamComponents/TeamListItemComponent.vue";
import constants from "@/constants/constants";

export default {
  name: "TeamListComponent",
  components: { TeamListItemComponent },
  data() {
    return {
      team: constants.team,
    };
  },
};
</script>

<style scoped></style>
