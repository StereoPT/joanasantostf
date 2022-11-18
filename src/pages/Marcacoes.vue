<template>
  <q-page padding>
    <div class="row q-mb-lg q-mx-md justify-center">
      <h4 class="text-bold text-primary q-my-md">Marcações</h4>
    </div>
    <!-- <div class="row justify-center items-start q-gutter-md">
      <MarcacoesCard v-for="(link, idx) in links" :key="idx" :marcacao="link" />
    </div> 
    <div class="row q-my-lg justify-center">
      <h4 class="text-bold text-primary q-my-md">Contacta-me</h4>
    </div> -->
    <div class="row justify-center">
      <ContactaMe />
    </div>
  </q-page>
</template>

<script>
// import { links } from '../assets/links.js';
// import MarcacoesCard from '../components/marcacoes/MarcacoesCard.vue';
import ContactaMe from '../components/marcacoes/ContactaMe.vue';

export default {
  name: 'Marcacoes',
  title: 'Joana Santos - Marcações',
  components: {
    // MarcacoesCard,
    ContactaMe
  },
  /* data() {
    return {
      links: links
    }
  }, */
}
</script>

<style scoped> </style>