<template>
  <v-sheet class="d-flex justify-center align-center flex-column mt-2 mb-2 w-75">
    <TeamListItemComponent v-for="(member, index) in team" :key="member.id" v-bind="member" :index="index" />
  </v-sheet>
</template>

<script>
import TeamListItemComponent from "@/components/teamComponents/TeamListItemComponent.vue";

export default {
  name: "TeamListComponent",
  components: { TeamListItemComponent },
  data() {
    return {
      team: [
        {
          id: 1,
          name: "Andrei Vasilev",
          role: "Full-stack developer",
          links: [
            {
              id: 1,
              url: "",
              icon: "fa-solid fa-circle",
            },
          ],
        },
        {
          id: 2,
          name: "Andrei Vasilev",
          role: "Full-stack developer",
          links: [
            {
              id: 1,
              url: "",
              icon: "fa-solid fa-circle",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped></style>
