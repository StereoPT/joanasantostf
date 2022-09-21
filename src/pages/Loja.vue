<template>
  <q-page padding>
    <div class="row q-mx-md justify-center">
      <h4 class="text-bold text-primary q-my-md">{{ title }}</h4>
    </div>
    <div class="row q-mt-lg">
      <div class="col q-mx-lg">
        <div class="row justify-center q-gutter-lg">
          <MaterialDestaque :material="kitGold" />
          <MaterialDestaque :material="kitKids" />
        </div>
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
import MaterialDestaque from '../components/MaterialDestaque.vue';

export default {
  name: 'Dynamic Loja',
  data() {
    return {
      kitGold: {
        referencia: 'LTKitGold',
        nome: 'Kit MOF Gold',
        preco: 100.00,
        imagem: 'kit_mof_gold.jpeg',
        disponivel: true
      },
      kitKids: {
        referencia: 'LTKitKids',
        nome: 'Kit MOF Kids',
        preco: 65.00,
        imagem: 'kit_mof_kids.jpeg',
        disponivel: true
      },
    }
  },
  components: {
    MaterialCard,
    MaterialDestaque
  },
  props: {
    title: String,
    materiais: Array,
  }
}
</script>

<style scoped> </style>