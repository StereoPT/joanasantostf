import { createStore } from 'vuex';

// Modules
import cartModule from './cart';

const store = createStore({
  actions: { },
  modules: {
    cart: cartModule()
  }
});

export default store;