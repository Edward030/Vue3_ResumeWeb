<template>
  <v-app id="home" class="app_home">
    <NavBar />
    <v-main style="opacity: 0.9" >
      <v-row class="d-flex flex-column text-center" >
        <!-- Vuetify的布局系统基于Flexbox，它会自动调整元素的大小和位置以适应不同的屏幕尺寸。如果你的v-row在小屏幕上有额外的空间，可能是因为它的高度被自动调整了 -->
        <span class="text-grey-lighten-3 mt-md-10 mb-4 bg-blue-grey-darken-1" style="font-size: 2rem;opacity: 0.7">CourseStudy</span>
        <v-carousel  cycle height="460" hide-delimiter-background show-arrows="hover">    <!--Q：如何把carousel設為寬度全滿? fluid? full-width? A: v-row設ma-0搞定 -->
          <v-carousel-item v-for="(item, i) in courseStudy_items" :key="i">
            <v-sheet color="grey-darken-4" height="370">
              <v-img
                :src= "item.src"
                aspect-ratio="16/9"
                contain
                ></v-img>
            </v-sheet>
              <div class="text-grey-lighten-3 py-1" style="font-size: 1.7rem;background-color: #212121;">
                {{ item.name }}
              </div>
          </v-carousel-item>
        </v-carousel>
        <v-divider class="border-opacity-25 my-8" color="grey"></v-divider>
        <span class="text-white my-4 bg-blue-grey-darken-1" style="font-size: 2rem;opacity: 0.7">Code Learning</span>
        <v-col cols="12">
          <v-row class="mb-10" align="center" justify="center">
            <template v-for="(item, i) in codeLearning_items" :key="i">
              <v-col col="12" sm="6" md="4" >
                <v-hover v-slot="{ isHovering, props }">
                  <v-card :elevation="isHovering ? 16 : 2" :class="{ 'on-hover': isHovering }" v-bind="props" style="min-width: 225px">
                    <a :href="item.href" target="_blank" class="text-decoration-none text-black">
                      <v-img :src="item.img" height="225px" contain></v-img>
                      <v-card-title >{{ item.title }}</v-card-title>
                    </a>
                  </v-card>
                </v-hover>
              </v-col>
            </template>
          </v-row>
        </v-col>
      </v-row>
    </v-main>
    <FooterView />
  </v-app>
</template>

<script>
import { defineComponent } from 'vue';

// Components
// import HelloWorld from '@/components/HelloWorld.vue';
import NavBar from '@/components/NavBar.vue';
import FooterView from '@/components/FooterView.vue';

export default defineComponent({
  name: 'HomeView',
  setup() {
    return {
      courseStudy_items: [
        {
          src: require("@/assets/home/courseStudy/RWD.png"),
          name: "RWD certified"
        },
        {
          src: require("@/assets/home/courseStudy/JS.png"),
          name: "JS certified"
        },
        {
          src: require("@/assets/home/courseStudy/frontEnd.png"),
          name: "FrontEnd certified"
        },
      ],
      codeLearning_items: [
        {
          img: require("@/assets/home/codeLearning/freeCodeCamp.jpg"),
          title: "FreeCodeCamp",
          href: "https://www.freecodecamp.org/"
        },
        {
          img: require("@/assets/home/codeLearning/w3school.jpg"),
          title: "w3school",
          href: "https://www.w3schools.com/"
        },
        {
          img: require("@/assets/home/codeLearning/MDN.jpg"),
          title: "MDN",
          href: "https://developer.mozilla.org/"
        },
        {
          img: require("@/assets/home/codeLearning/webDevSimplified.jpg"),
          title: "Web Dev Simplified",
          href: "https://www.youtube.com/@WebDevSimplified"
        },
        {
          img: require("@/assets/home/codeLearning/netNinja.jpg"),
          title: "Net Ninja",
          href: "https://www.youtube.com/@NetNinja"
        },
        {
          img: require("@/assets/home/codeLearning/chatGPT.jpg"),
          title: "chatGPT 4",
          href: "https://openai.com/gpt-4"
        },
      ]
    }
  },

  components: {
    NavBar,
    FooterView,
  },
});
</script>

<style scoped>
.app_home {
  background: url("@/assets/bg/bg04.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
</style>
