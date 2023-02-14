<template>
  <v-card
    class="d-flex flex-column align-center bg-transparent"
    width="100%"
    elevation="0"
  >
    <v-carousel
      v-model="onboarding"
      :show-arrows="false"
      :continuous="true"
      hide-delimiter-background
      cycle
      interval="5000"
      style="width: 100%"
      height="650"
    >
      <v-carousel-item
        transition="fade-transition"
        reverse-transition="fade-transition"
        v-for="item in carousel_items"
        :key="`wndw-${item.id}`"
        :value="item.id"
      >
        <v-sheet
          class="d-flex flex-row justify-center align-center bg-transparent"
        >
          <div class="v-col-2"></div>
          <div class="v-col-4">
            <video
              :src="item.src"
              autoplay
              playsinline
              muted
              style="width: 100%; height: 650px"
            />
          </div>
          <div class="v-col-3">
            <div class="d-flex flex-column align-baseline">
              <div class="carousel-text__title">{{ item.title }}</div>
              <div class="carousel-text__text">{{ item.text }}</div>
            </div>
          </div>
          <div class="v-col-3"></div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-card>
</template>

<script>
export default {
  name: "SliderSection",
  data: () => ({
    onboarding: 1,
    length: 3,
    carousel_items: [
      {
        id: 1,
        width: 600,
        title: "Art Patronage",
        text: "Proin tristique nunc quam, vitae pulvinar mi consequat at. Pellentesque pretium aliquam lectus, in tincidunt mauris feugiat nec. Duis neque turpis, ullamcorper et sem eget, ornare luctus sapien. Nunc fermentum elit non turpis euismod, et pulvinar augue lobortis. Curabitur eu efficitur diam, at cursus eros. Proin ornare feugiat vestibulum. Phasellus velit est, dignissim eget dui in, sagittis accumsan ex. Aliquam a aliquet nibh, eu venenatis magna. Ut rutrum elit lectus, ac pulvinar ligula porta at. ",
        src: "src/assets/webm_animations/NFT%20Collection.webm",
      },
      {
        id: 2,
        width: 600,
        title: "NFT Collection",
        text: "Proin tristique nunc quam, vitae pulvinar mi consequat at. Pellentesque pretium aliquam lectus, in tincidunt mauris feugiat nec. Duis neque turpis, ullamcorper et sem eget, ornare luctus sapien. Nunc fermentum elit non turpis euismod, et pulvinar augue lobortis. Curabitur eu efficitur diam, at cursus eros. Proin ornare feugiat vestibulum. Phasellus velit est, dignissim eget dui in, sagittis accumsan ex. Aliquam a aliquet nibh, eu venenatis magna. Ut rutrum elit lectus, ac pulvinar ligula porta at. ",
        src: "src/assets/webm_animations/Art_Patronage2_alpha.webm",
      },
      {
        id: 3,
        width: 600,
        title: "Play and Earn",
        text: "Proin tristique nunc quam, vitae pulvinar mi consequat at. Pellentesque pretium aliquam lectus, in tincidunt mauris feugiat nec. Duis neque turpis, ullamcorper et sem eget, ornare luctus sapien. Nunc fermentum elit non turpis euismod, et pulvinar augue lobortis. Curabitur eu efficitur diam, at cursus eros. Proin ornare feugiat vestibulum. Phasellus velit est, dignissim eget dui in, sagittis accumsan ex. Aliquam a aliquet nibh, eu venenatis magna. Ut rutrum elit lectus, ac pulvinar ligula porta at. ",
        src: "src/assets/webm_animations/Controller%20webm.webm",
      },
    ],
  }),
};
</script>

<style scoped>
.carousel-text__title {
  font-family: Cinzel-bold, serif;
  font-size: 55px;
}
.carousel-text__text {
  font-family: Cinzel-bold, serif;
  font-size: 20px;
}
</style>
