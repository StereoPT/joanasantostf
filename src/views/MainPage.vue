<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <div class="row justify-center bg-secondary q-pt-md">
        <div class="column justify-center items-center text-center">
          <q-img src="img/banner.png" height="250px" fit="scale-down" />
          <h6 class="q-my-lg">@joanasantostf</h6>
          <p>Consultas; Ginásio Facial; Formação; Material Terapêutico; Livros</p>
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
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainPage',
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
          text: 'Marcar consulta ginásio facial',
          href: 'https://docs.google.com/forms/d/e/1FAIpQLScaXiBm_-SdpmwofOpN1x0RrGdY_n7cKeQtNleN9-8imfb6GQ/viewform',
          img: 'img/ginasio.png'
        },
        { 
          text: 'Mentoria em paralisia facial',
          href: 'https://docs.google.com/forms/d/e/1FAIpQLSfrKlnHiG9ANm3Ltwnlr_R4ME15S_JE5k5TO3tpgYwBW4Wfvw/viewform',
          img: 'img/mentoria.png'
        },
        { 
          text: 'Comprar livro "O meu filho já come" 12,59€',
          href: 'https://publish.bookmundo.pt/site/?r=userwebsite/bookdetails&id=280902',
          img: 'img/livros.png'
        }
      ]
    }
  }
}
</script>

<style scoped> </style>