<template>
  <div class="row q-mt-lg q-mx-md justify-center">
    <h4 class="text-bold text-primary q-my-md">{{ title }}</h4>
  </div>
  <div class="row q-mt-lg q-mx-md justify-center">
    <div class="q-gutter-x-lg">
      <q-btn color="primary" label="Como comprar" size="sm" @click="comoComprar()">
        <q-icon right size="xs" name="question_mark" />
      </q-btn>
      <q-btn color="primary" label="Comprar aqui" size="sm" href="mailto:joanapsantos@outlook.pt?&subject=Encomenda Loja do Terapeuta&body=Encomenda">
        <q-icon right size="xs" name="shopping_cart" />
      </q-btn>
    </div>
  </div>
  <div class="row q-my-lg">
    <div class="col q-mx-lg">
      <div class="row justify-center q-gutter-lg">
        <q-card class="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2" v-for="material in materiais" :key="material.referencia">
          <q-img :src="`loja/${material.imagem}`" style="height: 250px" fit="scale-down" />

          <q-item>
            <q-item-section>
              <q-item-label class="text-body1">{{ material.nome }}</q-item-label>
              <q-item-label caption>Referência: {{ material.referencia }}</q-item-label>
            </q-item-section>

            <q-item-section side>
              <q-item-label caption>{{ material.preco }} €</q-item-label>
              <q-item-label caption>(+ portes)</q-item-label>
            </q-item-section>
          </q-item>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dynamic Loja',
  props: {
    title: String,
    materiais: Array,
  },
  methods: {
    comoComprar() {
      this.$dialog.create({
        title: "Como Comprar?",
        message: `
        Comprar na Loja do Terapeuta é simples:
        <ul>
          <li>Escolha os produtos que deseja e tome nota da referência associada a cada um.</li>
          <li>Em seguida, clique em <b>comprar aqui</b>.</li>
          <li>Um e-mail abrirá automaticamente - neste deverá escrever os seus dados para envio da encomenda e as referências dos produtos que deseja adquirir, bem como a quantidade. Envie o e-mail e está pronto!</li>
          <li>Dentro de 24h-48h receberá um e-mail com a confirmação da encomenda e do valor a pagar, com os respetivos portes de envio.</li>
        </ul>
        Obrigada por comprar na Loja do Terapeuta.`,
        html: true
      });
    }
  }
}
</script>

<style scoped>
  
</style>