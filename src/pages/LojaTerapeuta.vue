<template>
  <q-page padding>
    <div class="row q-mb-lg q-mx-md justify-center">
      <h4 class="text-bold text-primary q-my-md">Loja do Terapeuta</h4>
    </div>
    <div class="row q-my-lg justify-center">
      <img src="img/loja-terapeuta.jpeg" style="height: 250px">
    </div>
    <div class="row justify-center q-gutter-md">
      <template v-for="(card, idx) in cards" :key="idx">
        <q-card v-ripple class="col-xs-5 my-card cursor-pointer" @click="card.fn()" v-if="card.display">
          <q-item>
            <q-item-section>
              <q-item-label class="text-center text-bold">{{ card.name }}</q-item-label>
            </q-item-section>
          </q-item>
          <q-img :src="card.img.path" style="max-height: 250px;" fit="cover" :position="card.img.position" />
        </q-card>
      </template>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Loja',
  title: 'Joana Santos - Loja do Terapeuta',
  data() {
    return {
      cards: [
        {
          name: 'Materiais MOF',
          display: true,
          fn: this.goToMOF,
          img: {
            path: 'img/materiais-MOF.jpeg',
            position: '50% 30%'
          }
        },
        {
          name: 'Outros Materiais',
          display: true,
          fn: this.goToOutros,
          img: {
            path: 'img/materiais-outros.jpeg',
            position: '50% 30%'
          }
        },
        {
          name: 'Fardas Doworkwer',
          display: true,
          fn: this.goToDoworkwer,
          img: {
            path: 'img/scrubs.jpeg',
            position: '50% 0'
          }
        }
      ]
    }
  },
  methods: {
    goToMOF() {
      this.$router.push({ name: 'loja.mof' });
    },
    goToOutros() {
      this.$router.push({ name: 'loja.outros' });
    },
    goToDoworkwer() {
      window.open("https://www.instagram.com/doworkwear/", "_blank");
    }
  }
}
</script>

<style scoped>
  .my-card {
    max-width: 310px;
  }
</style>