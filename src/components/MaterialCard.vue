<template>
  <q-card class="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2" v-if="material.disponivel">
    <q-img :src="`loja/${material.imagem}`" style="height: 250px" fit="scale-down" />

    <q-item>
      <q-item-section>
        <q-item-label class="text-body1">{{ material.nome }}</q-item-label>
        <q-item-label caption>Referência: {{ material.referencia }}</q-item-label>
      </q-item-section>

      <q-item-section side v-if="material.preco">
        <q-item-label caption>{{ material.preco }} €</q-item-label>
        <q-item-label caption>(+ portes)</q-item-label>
      </q-item-section>
      <q-item-section side v-else>
        <q-item-label caption>Brevemente disponível</q-item-label>
      </q-item-section>
    </q-item>
  </q-card>
</template>

<script>
export default {
  name: 'MaterialCard',
  props: {
    material: Object
  }
}
</script>

<style scoped> </style>