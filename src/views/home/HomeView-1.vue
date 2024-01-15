<template>
  <v-app id="home" class="app_home">
    <NavBar />
    <v-main fluid class="d-flex align-end flex-column" >
      <div  style="height: 10vh"></div>
      <span class="text-grey-lighten-2 my-6 mr-10" style="font-size: 2rem;">Hello</span>
      <span class="text-indigo-darken-1 my-6 mr-10" style="font-size: 2rem;">I'm Edward Yang</span>
      <span class="text-pink-lighten-4 my-6 mr-10 " style="font-size: 1.2rem">Web Design & Developer</span><br/>
      <v-btn @click="scrollToBottom"  class="mb-6 mr-10" variant="tonal" color="teal-lighten-2">Contact me</v-btn>
    </v-main>
    <FooterView ref="footer"/>
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
      
    }
  },
  methods: {
    /*
    製作同一頁面連結至不同區域時使用
    */
    scrollToBottom() {
      this.$refs.footer.$el.scrollIntoView({ behavior: 'smooth' });
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
  background-size: cover;
  background-attachment: fixed;
}

@media (max-width: 768px) {
  .app_home {
    background-attachment: scroll;
  }
}
</style>