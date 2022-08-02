export default () => {
  return {
    state: {
      cart: [ ]
    },
    mutations: {
      // Reset Cart - To Clear the Cart
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
      }
    },
    getters: {
      // Get Cart
      cartAmount(state) {
        return state.cart.length;
      }
    }
  }
}