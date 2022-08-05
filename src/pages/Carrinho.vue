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
            <div class="col-6"></div>
            <div class="col-6 text-right">+ Portes</div>
          </q-card-section>

          <q-separator inset />

          <q-card-section class="row summary-font-size">
            <div class="col-6 text-bold">TOTAL</div>
            <div class="col-6 text-right text-primary">{{ cartTotal.toFixed(2) }} €</div>
          </q-card-section>

          <q-card-actions vertical>
            <q-btn color="primary" label="Submeter Encomenda" icon-right="shopping_cart_checkout" />
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
      ]
    }
  },
  mounted() {
    this.cart = this.$store.getters.cart;
  },
  computed: {
    cartTotal() {
      if(this.cart.length <= 0) return 0;
      return this.cart.reduce((total, item) => total + (item.preco * item.quantidade), 0);
    }
  },
  methods: {
    removeProduct(material) {
      this.$store.commit('removeFromCart', material);
      this.cart = this.$store.getters.cart;
    },
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