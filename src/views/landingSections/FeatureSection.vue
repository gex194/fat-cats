<template>
  <v-sheet
    max-height="960"
    class="d-flex flex-column bg-transparent justify-center align-center pa-3"
  >
    <v-img src="src/assets/fat_cats_nfts_title.png" width="60%" v-animate-onscroll="'animated fadeInUp'" />
    <div class="d-flex justify-space-evenly mt-15 v-col-12">
      <FeatureItemComponent
        v-animate-onscroll="'animated fadeInUp'"
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
          description: "Permanent access to Play2Earn games unhindered by game seasons",
          src: "src/assets/game_pass_block_1.png",
          delay: 100,
        },
        {
          id: 2,
          title: "Stacking",
          description: "Stake your Fat Cat via our platform to get $DUCATS on a monthly basis\n",
          src: "src/assets/stacking_block_2.png",
          delay: 200,
        },
        {
          id: 3,
          title: "Airdrops",
          description:
            "Owning an NFT provides access to regular randomized airdrops of physical luxury items",
          src: "src/assets/airdrop_block_3.png",
          delay: 300,
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
