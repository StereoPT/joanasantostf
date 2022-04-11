<template>
  <div class="row q-my-lg q-mx-md justify-center">
    <h3 class="text-bold text-primary q-my-md">Loja do Terapeuta</h3>
  </div>
  <div class="row justify-center items-start q-gutter-md">
    <q-card class="my-card" v-for="(link, idx) in links" :key="idx" style="max-width: 300px">
      <img :src="link.img" style="height: 250px; object-fit: cover;">
      <q-card-section>
        <div class="text-h6">{{ link.text }}</div>
        <div class="text-subtitle2">{{ link.subtext }}</div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'Loja',
  data() {
    return {
      links: [
        { 
          text: '"O meu filho já come"',
          subtext: 'Preço: 12,59€',
          href: 'https://publish.bookmundo.pt/site/?r=userwebsite/bookdetails&id=280902',
          img: 'img/livros.png'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>