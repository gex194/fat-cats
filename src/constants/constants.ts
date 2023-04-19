import type PreloadLandingInterface from "@/interfaces/PreloadLandingInterface";
import {
  ada_bnb_bridge,
  ada_bnb_bridge_mobile,
  art_patronage,
  art_patronage_mobile,
  cardano_visualized,
  cardano_visualized_mobile,
  gaming_platform,
  gaming_platform_mobile,
  nft_collection,
  nft_collection_mobile,
} from "@/constants/slider";
import { team } from "@/constants/team";
import { faq } from "@/constants/faq";

const card_one = {
  id: 1,
  title: "Economy game that introduces gamified trading of in-game assets which can be exchanged for other cryptocurrencies",
};
const card_two = {
  id: 2,
  title:
    "Maximal utilization of multiple AI technologies in the Fat Cats ecosystem",
};
const card_three = {
  id: 3,
  title: "Exclusive access to luxury physical items made in-house as well as art made by patroned artists",
};

const preload_landing: PreloadLandingInterface = {
  images: [
    "/gold_titles/ADA_BNB_Bridge.png",
    "/gold_titles/Art_Patronage.png",
    "/gold_titles/Cardano_Visualised.png",
    "/gold_titles/Ecosystems_utility_token_ducats2.png",
    "/gold_titles/FAT_CATS.png",
    "/gold_titles/FAT_CATS_2.png",
    "/gold_titles/Fat_Cats_nfts.png",
    "/gold_titles/Gaming_Platform.png",
    "/gold_titles/Luxury_powered_by_AI.png",
    "/gold_titles/NFT_COLLECTION.png",
    "/stacking_block_2.png",
    "/airdrop_block_3.png",
    "/game_pass_block_1.png",
  ],
  videos: [
    "/webm_animations/Banner_Castle_alpha.webm",
    "/webm_animations/Enter_cat_world_alpha.webm",
  ],
};
const preload_team: string[] = [...team.map((member) => member.img)];
const preload_deck: string[] = [
  "/deck_pngs/1.webp",
  "/deck_pngs/2.webp",
  "/deck_pngs/3.webp",
  "/deck_pngs/4.webp",
  "/deck_pngs/5.webp",
  "/deck_pngs/6.webp",
];
export default {
  slides: {
    nft_collection,
    art_patronage,
    gaming_platform,
    cardano_visualized,
    ada_bnb_bridge,
    nft_collection_mobile,
    art_patronage_mobile,
    gaming_platform_mobile,
    cardano_visualized_mobile,
    ada_bnb_bridge_mobile,
  },
  intro: {
    max_util: card_one,
    model_ai: card_two,
    member: card_three,
  },
  team,
  faq,
  preload_landing,
  preload_team,
  preload_deck,
};
