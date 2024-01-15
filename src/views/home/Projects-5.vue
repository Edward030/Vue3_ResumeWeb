<template>
  <v-app id="home" class="app_home">
    <NavBar/>
    <v-main fluid>
      <v-row > <!--未指定則子元素從左排列，且只會管到子元素，不管到子子元素 -->
        <v-col cols="12" > 
          <div class="my-6 text-center text-grey-lighten-3 bg-blue-grey-darken-1 " style="font-size: 2rem;opacity: 0.7;width: 100%">Projects</div>
        </v-col>
        <v-col cols="12" class="mb-10">
            <v-row >
              <template v-for="(item, i) in project_items" :key="i">
                <v-col class="d-flex justify-center">
                  <v-hover v-slot="{ isHovering, props }">
                    <v-card :elevation="isHovering ? 16 : 2" :class="{ 'on-hover': isHovering }" v-bind="props" style="width: 400px">
                      <a :href="item.href" target="_blank" class="text-decoration-none text-black">
                        <v-img :src="item.img" height="200px" cover></v-img>
                        <v-card-title class="text-center">{{ item.title }}</v-card-title>
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
      project_items: [
        {
          img: require("@/assets/home/projects/Vue3.jpg"),
          title: "Vue3 Resume Design",
          href: "http://localhost:8080/"
        },
        {
          img: require("@/assets/home/projects/React-Bike.jpg"),
          title: "React YouBike",
          href: "https://codepen.io/EdwardYang030/full/XWOdawE"
        },
        {
          img: require("@/assets/home/projects/React-Calculator.jpg"),
          title: "React Calculator",
          href: "https://codepen.io/EdwardYang030/full/WNLRVdo"
        },
        {
          img: require("@/assets/home/projects/Work&Rest-Timer.jpg"),
          title: "Work&Rest Timer",
          href: "https://codepen.io/EdwardYang030/full/yLGEqjd"
        },
        {
          img: require("@/assets/home/projects/Random Quote Machine.jpg"),
          title: "Random Quote Machine",
          href: "https://codepen.io/EdwardYang030/full/jOXPOEe"
        },
        {
          img: require("@/assets/home/projects/Drum Machine.jpg"),
          title: "Drum Machine",
          href: "https://codepen.io/EdwardYang030/full/wvRMyov"
        },
        {
          img: require("@/assets/home/projects/Markdown Previewer.jpg"),
          title: "Markdown Previewer",
          href: "https://codepen.io/EdwardYang030/full/dywYEdr"
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
