<template>
  <div class="row q-mt-lg q-mx-md justify-center">
    <h4 class="text-bold text-primary q-my-md">Loja do Terapeuta</h4>
  </div>
  <div class="row justify-center">
    <img src="img/loja-terapeuta.jpeg" style="height: 250px">
  </div>
  <div class="row justify-center q-gutter-md q-my-lg">
    <q-card v-ripple class="col-xs-5 my-card cursor-pointer" @click="goToMOF()">
      <q-item>
        <q-item-section>
          <q-item-label class="text-center text-bold">Materiais MOF</q-item-label>
        </q-item-section>
      </q-item>
      <q-img src="img/materiais-MOF.jpeg" style="max-height: 250px; object-fit: cover;" position="50% 30%" />
    </q-card>
    <q-card v-ripple class="col-xs-5 my-card cursor-pointer" @click="goToOutros()">
      <q-item>
        <q-item-section>
          <q-item-label class="text-center text-bold">Outros Materiais</q-item-label>
        </q-item-section>
      </q-item>
      <q-img src="img/materiais-outros.jpeg" style="max-height: 250px; object-fit: cover;" position="50% 50%" />
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'Loja',
  methods: {
    goToMOF() {
      this.$router.push({ name: 'loja.mof' });
    },
    goToOutros() {
      this.$router.push({ name: 'loja.outros' });
    }
  }
}
</script>

<style scoped>
  .my-card {
    max-width: 310px;
  }
</style>