<template>
  <v-sheet
    min-height="100vh"
    max-width="1920"
    width="100%"
    class="d-flex flex-column bg-transparent justify-space-evenly align-center pt-15"
  >
    <div class="d-flex justify-center align-center mb-15">
      <img src="/gold_titles/Fat_Cats_nfts.png" style="width:50%" v-animate-onscroll="'animated fadeInUp'" />
    </div>
    <div class="d-flex justify-space-evenly align-baseline mt-5">
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
          title: "GAME PASS",
          description: "Permanent access to Play2Earn games unhindered by game seasons",
          src: "/game_pass_block_1.png",
          delay: 100,
        },
        {
          id: 2,
          title: "Staking",
          description: "Stake your Fat Cat via our platform to get $DUCATS on a monthly basis\n",
          src: "/stacking_block_2.png",
          delay: 200,
        },
        {
          id: 3,
          title: "Airdrops",
          description:
            "Owning an NFT provides access to regular randomized airdrops of physical luxury items",
          src: "/airdrop_block_3.png",
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
