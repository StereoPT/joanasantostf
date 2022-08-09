export default () => {
  return {
    state: {
      cart: [ ]
    },
    mutations: {
      resetCart(state) {
        state.cart = [ ];
      },
      // Set Cart   - To "Load" from localStorage (later)
      addToCart(state, material) {
        const materialFound = state.cart.find(
          mat => mat.referencia === material.referencia
        );

        if(materialFound) {
          materialFound.quantidade += material.quantidade;
        } else {
          state.cart.push(material);
        }
      },
      removeFromCart(state, material) {
        const materialIndex = state.cart.indexOf(material);

        if(materialIndex > -1) {
          state.cart.splice(materialIndex, 1);
        }
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