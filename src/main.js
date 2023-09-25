import { createApp } from 'vue';
import App from './App.vue';

import titleMixin from './mixins/titleMixin';

import router from './router';

import { Quasar, Dialog, Notify } from 'quasar';
import quasarUserOptions from './quasar-user-options';

const app = createApp(App)
  .use(Quasar, quasarUserOptions)
  .use(router)
  .mixin(titleMixin);

app.config.globalProperties.$dialog = Dialog;
app.config.globalProperties.$notify = Notify;

// store.$notify = Notify;

app.mount('#app');
