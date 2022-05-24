<template>
  <q-card class="col-xs-6 col-sm-4 col-md-3 col-lg-3 text-center" v-if="marcacao.display">
    <q-img :src="marcacao.img" style="height: 210px" fit="cover" />
    <q-card-section>
      <div class="text-h6">{{ marcacao.text }}</div>
      <div class="text-subtitle2">{{ marcacao.subtext }}</div>
    </q-card-section>
    <q-card-actions vertical>
      <q-btn class="text-bold" outline color="primary" :href="marcacao.href" target=_blank>Marcar</q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  name: 'MarcacoesCard',
  props: {
    marcacao: Object
  }
}
</script>

<style scoped> </style>