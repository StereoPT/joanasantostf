<template>
  <q-page padding>
    <div class="row q-mx-md justify-center">
      <h4 class="text-bold text-primary q-my-md">{{ title }}</h4>
    </div>
    <div class="row q-mt-lg q-mx-md justify-center text-center">
      <div class="q-gutter-md">
        <q-btn color="primary" label="Como comprar" size="sm" @click="comoComprar()">
          <q-icon right size="xs" name="question_mark" />
        </q-btn>
        <q-btn color="primary" label="Comprar aqui" size="sm" :href="this.comprarAqui">
          <q-icon right size="xs" name="shopping_cart" />
        </q-btn>
        <q-btn color="primary" label="Voltar atrás" size="sm" to="/loja">
          <q-icon right size="xs" name="arrow_back" />
        </q-btn>
      </div>
    </div>
    <div class="row q-mt-lg">
      <div class="col q-mx-lg">
        <div class="row justify-center q-gutter-lg">
          <MaterialCard v-for="material in materiais" :key="material.referencia" :material="material" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import MaterialCard from '../components/MaterialCard.vue';

export default {
  name: 'Dynamic Loja',
  components: {
    MaterialCard
  },
  props: {
    title: String,
    materiais: Array,
  },
  data() {
    return {
      comprarAqui: `
mailto:joanapsantos1992@gmail.com?&
subject=Encomenda Loja do Terapeuta&
body=A minha encomenda da Loja do Terapeuta%0D%0A%0D%0A
Nome:%0D%0A
Morada completa:%0D%0A%0D%0A
Indique a referência do(s) produto(s) pretendido(s), seguido da quantidade:%0D%0A
 - `
    }
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

<style scoped> </style>