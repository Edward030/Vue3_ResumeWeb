<template>
  <div v-resize="onResize" v-cloak > 
    <!--因為NavBar是組件，修改組件至目標頁面時要刷新頁面，否則組件無法即時渲染(更新)-->
    <v-navigation-drawer v-if="isLargeScreen" permanent style="opacity: 0.6">
      <div class="bg-indigo-darken-4" style="height: 100%;">
        <v-btn @click="goToHome('/')" variant="tonal" block class="py-8 font-size"  >
          <v-icon left color="#EC407A" class="mr-2" >fa-solid fa-wand-magic-sparkles</v-icon>Edward Design
        </v-btn>
        <div class="flex-column" >
          <div class="py-9" ></div>
          <v-btn v-for="(item, index) in drawerLinks" :key="index" 
            router :to="item.route"
            variant="text"
            class="ml-4 my-6 font-size"
          >
          {{ item.text }}
            <v-icon end>
              {{ item.icon }}
            </v-icon>
          </v-btn>
        </div>
      </div>
    </v-navigation-drawer>
    <div v-else >
      <v-btn @click.stop="drawer = !drawer" size="65" variant="text" style="z-index: 3;opacity: 0.8;">
        <v-icon class="text-white font-size">fa-solid fa-bars</v-icon>
      </v-btn>
      <v-navigation-drawer 
        v-model="drawer"
        temporary
        style="opacity: 0.9"
      >
        <div class="bg-indigo-darken-3" style="height: 100%">
          <v-btn @click="goToHome('/')" variant="tonal" block class="py-8 font-size">
            <v-icon left color="#EC407A" class="mr-2" >fa-solid fa-wand-magic-sparkles</v-icon>Edward Design
          </v-btn>
          <div class="flex-column" >
            <div class="py-9" ></div>
            <v-btn v-for="(item, index) in drawerLinks" :key="index" 
              router :to="item.route"
              variant="text"
              class="ml-4 my-6 font-size"
            >
            {{ item.text }}
              <v-icon end>
                {{ item.icon }}
              </v-icon>
            </v-btn>
          </div>
        </div>
      </v-navigation-drawer>
    </div>
  </div>
  <v-app-bar app class="px-12" color="blue-grey-darken-3" style="opacity: 0.8;z-index: 2;" v-cloak>
    <v-spacer></v-spacer>
    <v-btn text @click="goToHome('/')" class="text-white font-size no-uppercase">Home</v-btn>
    <v-btn text @click="goToHome('/iScroll')" class="text-white font-size no-uppercase">iScroll</v-btn>
    <v-btn text @click="goToHome('/page3')" class="text-white font-size no-uppercase">Page3</v-btn>
    <v-btn text @click="goToHome('/page4')" class="text-white font-size no-uppercase">Page4</v-btn>
  </v-app-bar>
</template>
<script>
export default {
  /* 
    data用於定義狀態，methods用於改變狀態。我們需要兩者都寫，才能實現我們想要的功能。
  */
  data() {
    return {
      isLargeScreen: window.innerWidth > 960,
      drawer: null,
    };
  },
  directives: {
    resize: {
      inserted: (el, binding) => {
        const callback = () => {
          binding.value();
        };
        window.addEventListener('resize', callback);
        el._onResize = callback;
      },
      unbind: (el) => {
        if (!el._onResize) return;
        window.removeEventListener('resize', el._onResize);
        delete el._onResize;
      }
    }
  },
  mounted() {
    this.onResize();
  },
  methods: {
    onResize() {
      this.isLargeScreen = window.innerWidth > 960;
    },
    /*
      这种编程式的导航方式和使用 <router-link> 组件进行声明式的导航是等价的。例如，<router-link to="/">Home</router-link> 和 this.$router.push('/') 的效果是一样的。
    */
    goToHome(link) {
      this.$router.push(link);
    },
  },
  setup() {
    return {
      drawerLinks: [
        { icon: 'fa-solid fa-user-tie', text: '01 Web Developer', route: '/' },
        { icon: 'fa-solid fa-book', text: '02 Course Study', route: '/home/coursestudy' },
        { icon: 'fa-solid fa-code', text: '03 Specialist', route: '/home/specialist' },
        { icon: 'fa-regular fa-face-smile', text: '04 Photography', route: '/home/photography' },
        { icon: 'fa-regular fa-lightbulb', text: '05 Projects', route: '/home/projects' },
      ]
    }
  }
}
</script>
<style scoped>
  .font-size {
    font-size: clamp(0.9rem, 2vw, 1rem);
  }
  [v-cloak] {
    display: none;
  }
  .no-uppercase {
    text-transform: unset;
  }
</style>

