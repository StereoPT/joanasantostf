<template>
  <q-page padding>
    <div class="row q-mb-lg q-mx-md justify-center">
      <h4 class="text-bold text-primary q-my-md">Carrinho de Compras</h4>
    </div>
    <div class="row q-col-gutter-lg">
      <div class="col-xs-12 col-sm-8">
        <q-card>
          <q-card-section>
            <div class="text-h5">Produtos</div>
          </q-card-section>
          <q-table :rows="cart" :columns="columns" row-key="referencia"
            no-data-label="Sem Produtos no Carrinho"
            :rows-per-page-options="[5]">
            <template v-slot:body-cell-imagem="props">
              <q-td :props="props">
                <img :src="`loja/${props.row.imagem}`" style="height: 80px; object-fit: scale-down;" />
              </q-td>
            </template>

            <template v-slot:body-cell-total="props">
              <q-td :props="props">
                {{ (props.row.preco * props.row.quantidade).toFixed(2) }} €
              </q-td>
            </template>

            <template v-slot:body-cell-remove="props">
              <q-td :props="props">
                <q-btn flat round padding="sm" icon="delete_outline" @click="removeProduct(props.row)" />
              </q-td>
            </template>
          </q-table>
        </q-card>
        <div class="q-mt-md row justify-between">
          <q-btn class="" color="primary" label="Continuar a Comprar" icon="arrow_back" :to="{ name: 'loja.mof' }"/>
          <q-btn class="" color="primary" label="Apagar Carrinho" icon="delete_outline" @click="clearCart()"/>
        </div>
      </div>
      <div class="col-xs-12 col-sm-4">
        <q-card>
          <q-card-section>
            <div class="text-h5">Sumário</div>
          </q-card-section>
          <q-card-section class="row summary-font-size">
            <div class="col-6">{{ cart.length }} {{ cart.length > 1 ? 'Produtos' : 'Produto' }}</div>
            <div class="col-6 text-right">{{ cartTotal.toFixed(2) }} €</div>
          </q-card-section>
          <q-card-section class="row summary-font-size">
            <div class="col-6">Portes</div>
            <div class="col-6 text-right">{{ portes.toFixed(2) }} €</div>
          </q-card-section>

          <q-separator inset />

          <q-card-section class="row summary-font-size">
            <div class="col-6 text-bold">TOTAL</div>
            <div class="col-6 text-right text-primary">{{ fullTotal.toFixed(2) }} €</div>
          </q-card-section>

          <q-card-actions vertical>
            <q-btn color="primary" label="Submeter Encomenda" icon-right="shopping_cart_checkout" :href="submitCheckout"/>
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Carrinho',
  title: 'Joana Santos - Carrinho',
  data() {
    return {
      cart: [],
      portes: 4,
      columns: [
        {
          name: 'imagem',
          label: 'Artigo',
          align: 'left',
        },
        {
          name: 'nome',
          label: 'Nome',
          align: 'left',
          style: 'font-size: 1rem',
          field: row => row.nome,
        },
        {
          name: 'preco',
          label: 'Preço',
          align: 'center',
          style: 'font-size: 1.1rem',
          classes: 'text-bold',
          field: row => row.preco,
          format: val => `${val.toFixed(2)} €`,
        },
        {
          name: 'quantidade',
          label: 'Quantidade',
          align: 'center',
          style: 'font-size: 1.1rem',
          field: row => row.quantidade,
        },
        {
          name: 'total',
          label: 'Total',
          align: 'center',
          style: 'font-size: 1.1rem',
          classes: 'text-bold text-primary',
        },
        {
          name: 'remove',
          align: 'center'
        }
      ],
      cartEmailTemplate: `
mailto:joanapsantos1992@gmail.com?&
subject=Encomenda Loja do Terapeuta&
body=Para concluir a sua encomenda da Loja do Terapeuta, por favor indique:%0D%0A%0D%0A
Nome:%0D%0A
Morada completa:%0D%0A%0D%0A
Produtos:%0D%0A`
    }
  },
  mounted() {
    this.cart = this.$store.getters.cart;
  },
  computed: {
    cartTotal() {
      if(this.cart.length <= 0) return 0;
      return this.cart.reduce((total, item) => total + (item.preco * item.quantidade), 0);
    },
    fullTotal() {
      return this.cartTotal + this.portes;
    },
    submitCheckout() {
      if(this.cart.length <= 0) return;
      let cartItems = "";

      this.cart.forEach((material) => {
        cartItems += `- ${material.quantidade}x ${material.nome} [${material.referencia}]%0D%0A`;
      });

      return `${this.cartEmailTemplate}${cartItems}`;
    }
  },
  methods: {
    removeProduct(material) {
      this.$store.commit('removeFromCart', material);
      this.cart = this.$store.getters.cart;
    },
    clearCart() {
      this.$store.commit('resetCart');
      this.cart = this.$store.getters.cart;
    }
  }
}
</script>

<style scoped>
.table-font-size {
  font-size: 1.1rem,
}
.summary-font-size {
  font-size: 1.1rem;
}
</style>