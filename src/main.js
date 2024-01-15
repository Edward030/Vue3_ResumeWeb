// import { loadFonts } from './plugins/webfontloader'
// loadFonts()

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import './assets/main.scss';

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .mount('#app');