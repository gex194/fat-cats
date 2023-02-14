<template>
  <v-lazy>
    <v-card elevation="10" class="mx-auto" max-width="80%">
      <div class="d-flex">
        <!--        <div>-->
        <!--          <v-avatar-->
        <!--            rounded="1"-->
        <!--            class="ma-3"-->
        <!--            size="125">-->
        <!--            <v-img :src="thumbnail" height="200" cover></v-img>-->
        <!--          </v-avatar>-->
        <!--        </div>-->
        <div>
          <v-card-item>
            <v-card elevation="4">
              <v-card-item>
                <a :href="link"
                  ><v-card-title class="text-h5">{{ title }}</v-card-title></a
                >
              </v-card-item>
              <v-divider />
              <v-card-item>
                <v-card-subtitle>{{ author }}</v-card-subtitle>
                <v-card-subtitle>{{ pubDate }}</v-card-subtitle>
              </v-card-item>
              <v-card-item>
                <div v-html="content" class="blog-content__container"></div>
              </v-card-item>
            </v-card>
          </v-card-item>
        </div>
      </div>
    </v-card>
  </v-lazy>
  <div class="mt-2"></div>
</template>

<script>
export default {
  name: "BlogListItemComponent",
  props: ["title", "pubDate", "content", "link", "thumbnail", "author"],
};
</script>

<style>
.blog-content__container {
  width: 100%;
}
.blog-content__container > figure > img {
  width: 100%;
}
</style>
