<template>
  <q-page padding>
    <div class="row q-mx-md justify-center">
      <h4 class="text-bold text-primary q-my-md">Loja do Terapeuta</h4>
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
  data() {
    return {
      
    }
  },
  components: {
    MaterialCard
  },
  props: {
    materiais: Array,
  }
}
</script>

<style scoped> </style>