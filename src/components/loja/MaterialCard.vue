<template>
  <q-card class="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2" v-if="material.preco">
    <section class="relative-position" v-if="material.new">
      <div class="new-banner">
        {{ material.new }}
      </div>
    </section>
    <q-img class="cursor-pointer" :src="`loja/${material.imagem}`" style="height: 250px" fit="scale-down" />

    <q-item>
      <q-item-section>
        <q-item-label class="text-body1 cursor-pointer">
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
      <q-input class="q-mb-sm text-right"
        v-model="amount"
        outlined dense
        mask="###" label="Quantidade"
        :disable="!material.disponivel" />
      <q-btn
        color="primary"
        label="Adicionar ao Carrinho"
        icon="add_shopping_cart"
        @click.prevent="addToCart()"
        :disable="!material.disponivel" />
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  name: 'MaterialCard',
  props: {
    material: Object
  },
  data() {
    return {
      amount: null
    }
  },
  methods: {
    async addToCart() {
      if(this.amount == null || Number(this.amount) == 0) return;

      await this.$store.commit('addToCart', {
        referencia: this.material.referencia,
        nome: this.material.nome,
        preco: this.material.preco,
        imagem: this.material.imagem,
        quantidade: Number(this.amount)
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

<style scoped>
  .new-banner {
    margin-left: -11px;
    padding: 2px 10px 2px 24px;
    background: #e0e0e0;
    color: #616161;
    font-size: large;
    position: absolute;
    top: 8px;
    border-radius: 3px 5px 5px 0;
    z-index: 2;
  }

  .new-banner::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    width: 0;
    height: 0;
    border: 0 solid transparent;
    border-top-color: #bebebe;
    border-width: 9px 0 0 11px;
  }
</style>