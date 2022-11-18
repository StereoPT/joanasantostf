<template>
  <q-page padding>
    <div class="row q-mx-md justify-center">
      <h4 class="text-bold text-primary q-my-md">Loja do Terapeuta</h4>
    </div>
    <div class="row">
      <div class="col q-mx-lg">
        <div v-if="materiais.livros.length !== 0">
          <h5 class="with-line text-bold text-primary q-mb-md">Livros</h5>
          <div class="row justify-center q-gutter-lg">
            <MaterialCard v-for="material in materiais.livros" :key="material.referencia" :material="material" />
          </div>
        </div>

        <div v-if="materiais.mof.length !== 0">
          <h5 class="with-line text-bold text-primary q-mb-md">Material MOF</h5>
          <div class="row justify-center q-gutter-lg">
            <MaterialCard v-for="material in materiais.mof" :key="material.referencia" :material="material" />
          </div>
        </div>

        <div v-if="materiais.kits.length !== 0">
          <h5 class="with-line text-bold text-primary q-mb-md">Kits</h5>
          <div class="row justify-center q-gutter-lg">
            <MaterialCard v-for="material in materiais.kits" :key="material.referencia" :material="material" />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import MaterialCard from '../components/loja/MaterialCard.vue';

export default {
  name: 'Loja',
  data() {
    return {
      
    }
  },
  components: {
    MaterialCard
  },
  props: {
    materiais: Object,
  }
}
</script>

<style scoped>
.with-line {
  display: flex;
  align-items: center;
}

.with-line::after {
  content: '';
  flex: 1;
  margin-left: 1.5rem;
  height: 1.5px;
  background-color: #6A5062;
}
</style>