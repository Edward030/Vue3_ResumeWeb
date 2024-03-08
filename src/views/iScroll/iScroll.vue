<template>
  <v-app id="home" class="app_home">
    <NavBar />
    <v-main style="opacity: 0.9" fluid> 
      <v-row class="ma-0 d-flex flex-column text-center"> <!-- ma-0, pa-0 -->
        <v-col class="pa-0" cols="12" style="border: 2px solid red;"><!-- 這裡可以取消v-col設置，並且就不需使用pa-0取消內padding-->
          <div class="my-6 text-center text-grey-lighten-3 bg-blue-grey-darken-1 "
            style="font-size: 2rem;opacity: 0.7;"
            >
            <v-icon size="35">fa-solid fa-face-dizzy</v-icon>
            iScroll is contnuing development... </div>
        </v-col>
        <v-col cols="12" class="d-flex justify-center" style="border: 2px solid black;">
          <h1>hello</h1>
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
  name: 'iScroll',
  setup() {
    return {

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

