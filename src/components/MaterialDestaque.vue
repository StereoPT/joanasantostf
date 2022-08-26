<template>
  <q-card class="col-xs-12 col-sm-5">
    <q-img :src="`loja/${material.imagem}`" style="height: 230px" fit="scale-down" />

    <q-item>
      <q-item-section>
        <q-item-label class="text-body1">
          {{ material.nome }}
        </q-item-label>
        <q-item-label caption>Referência: {{ material.referencia }}</q-item-label>
        <q-item-label v-if="material.disponivel" class="text-green" caption>
          <q-icon name="check_circle" />
          Em Stock
        </q-item-label>
        <q-item-label v-else class="text-red" caption>
          <q-icon name="cancel" />
          Esgotado
        </q-item-label>
        <q-item-label class="text-primary text-weight-bold text-h5">
          {{ material.preco.toFixed(2) }} €
        </q-item-label>
      </q-item-section>
    </q-item>

    <q-card-actions vertical>
      <q-btn
        color="primary"
        label="Adicionar ao Carrinho"
        icon="add_shopping_cart"
        @click="addToCart()"
        :disable="!material.disponivel" />
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  name: 'MaterialDestaque',
  props: {
    material: Object
  },
  methods: {
    async addToCart() {
      await this.$store.commit('addToCart', {
        referencia: this.material.referencia,
        nome: this.material.nome,
        preco: this.material.preco,
        imagem: this.material.imagem,
        quantidade: 1
      });

      this.$notify.create({
        message: `${this.material.nome} adicionado!`,
        color: 'green',
        icon: 'done'
      });

      this.amount = null;
    }
  }
}
</script>