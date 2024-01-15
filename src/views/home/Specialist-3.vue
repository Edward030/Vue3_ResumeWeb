<template>
  <v-app id="home" class="app_home">
    <NavBar />
    <v-main fluid style="opacity: 0.9;">
        <v-row class="d-flex flex-column ma-0 text-center"  fluid >
          <span class="text-grey-lighten-3 mt-md-6 mb-10 bg-blue-grey-darken-1" style="font-size: 2rem;opacity: 0.7">Specialist</span>
          <chartComponent />
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
import chartComponent from '@/components/chartComponent.vue';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Specialist',
  setup() {
  },
  data() {
    return {
      chartData: { "2017": 10, "2018": 15, "2019": 7, "2020": 10 }
    }
  },

  components: {
    NavBar,
    FooterView,
    chartComponent
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
