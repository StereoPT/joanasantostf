export default () => {
  return {
    state: {
      cart: [ ]
    },
    mutations: {
      resetCart(state) {
        state.cart = [ ];
        this.commit('saveCart');
      },
      setCart(state) {
        const cart = JSON.parse(window.localStorage.getItem('cart'));
        
        if(cart && cart.length > 0) {
          state.cart = cart;
        }
      },
      addToCart(state, material) {
        const materialFound = state.cart.find(
          mat => mat.referencia === material.referencia
        );

        if(materialFound) {
          materialFound.quantidade += material.quantidade;
        } else {
          state.cart.push(material);
        }

        this.commit('saveCart');
      },
      removeFromCart(state, material) {
        const materialIndex = state.cart.indexOf(material);

        if(materialIndex > -1) {
          state.cart.splice(materialIndex, 1);
        }

        this.commit('saveCart');
      },
      saveCart(state) {
        window.localStorage.setItem('cart', JSON.stringify(state.cart));
      }
    },
    getters: {
      // Get Cart
      cart(state) {
        return state.cart;
      },
      cartAmount(state) {
        return state.cart.length;
      }
    }
  }
}