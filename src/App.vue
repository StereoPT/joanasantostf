<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <div class="row justify-center bg-secondary q-pt-md">
        <div class="column justify-center items-center text-center">
          <q-img src="https://d1fdloi71mui9q.cloudfront.net/KxRt8cBTRM6Jx3ztHevB_1oGPzeL9m2O716Pa" width="100px" style="border-radius: 50%" />
          <h6 class="q-my-lg">@joanasantostf</h6>
          <p>Consultas; Ginásio Facial; Formação; Material Terapêutico; Livros</p>
          <div class="q-my-md">
            <q-list separator class="rounded-borders bg-white q-my-md q-px-lg" v-for="(link, idx) in links" :key="idx">
              <q-item clickable v-ripple :href="link.href" target="_blank">
                <q-item-section>{{ link.text }}</q-item-section>
              </q-item>
            </q-list>
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
          text: 'Marcar consulta terapia da fala',
          href: 'https://docs.google.com/forms/d/e/1FAIpQLSde4PYvvzfAGb3KuwzgxYBT3_hzn3AEP_ns84ECWJKpBm0DaQ/viewform'
        },
        { 
          text: 'Marcar consulta ginásio facial',
          href: 'https://docs.google.com/forms/d/e/1FAIpQLScaXiBm_-SdpmwofOpN1x0RrGdY_n7cKeQtNleN9-8imfb6GQ/viewform'
        },
        { 
          text: 'Mentoria em paralisia facial',
          href: 'https://docs.google.com/forms/d/e/1FAIpQLSfrKlnHiG9ANm3Ltwnlr_R4ME15S_JE5k5TO3tpgYwBW4Wfvw/viewform'
        },
        { 
          text: 'Comprar livro "O meu filho já come" 12,59€',
          href: 'https://publish.bookmundo.pt/site/?r=userwebsite/bookdetails&id=280902'
        },
        { 
          text: 'Comprar ebook "O meu filho já come" 10,99€',
          href: 'https://docs.google.com/forms/d/1HE7lyzCl0Oa8OdEpcZT5tcqB8zN0nVr0iqlA-jWO93U/prefill'
        },
        { 
          text: 'Comprar caderno de atividades do natal 4,99€',
          href: 'https://docs.google.com/forms/d/e/1FAIpQLSfID97m-1fFfCQWcVbdmbSejLwCWYYE-wfeC-GVyJkLCWHSwA/viewform'
        },
        { 
          text: 'Comprar caderno de atividades do verão 4,99€',
          href: 'https://docs.google.com/forms/d/e/1FAIpQLSfJk-cCAUJRCyOZ6EGw1r-nESDVs2Nue6zRGOjdtAIPyb0S3A/viewform'
        }
      ]
    }
  }
}
</script>
