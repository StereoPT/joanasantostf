import { createApp } from 'vue';
import App from './App.vue';

import router from './router';

import { Quasar, Dialog } from 'quasar';
import quasarUserOptions from './quasar-user-options';

const app = createApp(App)
  .use(Quasar, quasarUserOptions)
  .use(router);

app.config.globalProperties.$dialog = Dialog;

app.mount('#app');
