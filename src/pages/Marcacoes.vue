<template>
  <div class="row q-py-lg">
    <div class="col-12 justify-center items-center text-center">
      <div class="q-my-md row justify-center items-start q-gutter-md">
        <q-card class="my-card" v-for="(link, idx) in links" :key="idx" style="max-width: 300px">
          <img :src="link.img" style="height: 250px; object-fit: cover;">
          <q-card-section>
            <div class="text-h6">{{ link.text }}</div>
            <div class="text-subtitle2">{{ link.subtext }}</div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Marcacoes',
  data() {
    return {
      links: [
        { 
          text: 'Marcar consulta',
          subtext: 'Terapia da fala',
          href: 'https://docs.google.com/forms/d/e/1FAIpQLSde4PYvvzfAGb3KuwzgxYBT3_hzn3AEP_ns84ECWJKpBm0DaQ/viewform',
          img: 'img/consulta.png'
        },
        { 
          text: 'Marcar consulta',
          subtext: 'Ginásio facial',
          href: 'https://docs.google.com/forms/d/e/1FAIpQLScaXiBm_-SdpmwofOpN1x0RrGdY_n7cKeQtNleN9-8imfb6GQ/viewform',
          img: 'img/ginasio.png'
        },
        { 
          text: 'Mentoria',
          subtext: 'Paralisia facial',
          href: 'https://docs.google.com/forms/d/e/1FAIpQLSfrKlnHiG9ANm3Ltwnlr_R4ME15S_JE5k5TO3tpgYwBW4Wfvw/viewform',
          img: 'img/mentoria.png'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>