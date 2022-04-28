<template>
  <div class="row q-mt-lg q-mx-md justify-center">
    <h4 class="text-bold text-primary q-my-md">{{ title }}</h4>
  </div>
  <div class="row q-mt-lg q-mx-md justify-evenly">
    <q-btn color="primary" label="Comprar aqui" size="sm">
      <q-icon right size="xs" name="shopping_cart" />
    </q-btn>
    <q-btn color="primary" label="Como comprar" size="sm">
      <q-icon right size="xs" name="question_mark" />
    </q-btn>
  </div>
  <div class="row q-my-lg q-mx-md">
    <div class="col">
      <div class="row justify-center q-gutter-lg">
        <q-card class="my-card col-auto" v-for="material in materiais" :key="material.referencia">
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
  }
}
</script>

<style scoped>
  .my-card {
    min-width: 430px;
  }
</style>