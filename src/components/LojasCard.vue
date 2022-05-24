<template>
  <q-card v-ripple class="col-xs-5 my-card cursor-pointer" @click="card.fn()" v-if="card.display">
    <q-item>
      <q-item-section>
        <q-item-label class="text-center text-bold">{{ card.name }}</q-item-label>
      </q-item-section>
    </q-item>
    <q-img :src="card.img.path" style="max-height: 250px;" fit="cover" :position="card.img.position" />
  </q-card>
</template>

<script>
export default {
  name: 'LojasCard',
  props: {
    card: Object
  }
}
</script>

<style scoped>
  .my-card {
    max-width: 310px;
  }
</style>