<template>
  <v-sheet
    class="d-flex flex-column bg-transparent justify-center align-center pa-3"
  >
    <v-img src="src/assets/fat_cats_nfts_title.png" width="60%" />
    <div class="d-flex justify-space-evenly mt-15 v-col-12">
      <FeatureItemComponent
        v-for="card in cards"
        :key="card.id"
        v-bind="card"
      />
    </div>
  </v-sheet>
</template>

<script>
import FeatureItemComponent from "@/components/landingComponents/FeatureItemComponent.vue";

export default {
  name: "FeatureSection",
  components: { FeatureItemComponent },
  data() {
    return {
      cards: [
        {
          id: 1,
          title: "Game Pass",
          description: "Super duper passdasdadsdasdasddas",
          src: "src/assets/game_pass_block_1.png",
        },
        {
          id: 2,
          title: "Stacking",
          description: "Super duper stacking",
          src: "src/assets/stacking_block_2.png",
        },
        {
          id: 3,
          title: "Airdrops",
          description:
            "Super duper airdrops dasda asdasd asdas da dasda asad dasdsas aas asa ",
          src: "src/assets/airdrop_block_3.png",
        },
      ],
    };
  },
};
</script>

<style scoped>
.feature__container {
}
</style>
