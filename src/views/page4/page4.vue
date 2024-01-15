<template>
  <v-app id="home" class="app_home">
    <NavBar />
    <v-main fluid>
      <v-row>
        <v-col cols="12">
          <div class="my-6 text-center text-grey-lighten-3 bg-blue-grey-darken-1 "
            style="font-size: 2rem;opacity: 0.7;width: 100%">
            <v-icon size="35">fa-solid fa-face-dizzy</v-icon>
            Page4 is contnuing development...
          </div>
        </v-col>
        <v-col cols="12" class="d-flex justify-center" style="border: 2px solid black;">

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

