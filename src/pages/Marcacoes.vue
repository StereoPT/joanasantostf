<template>
  <div class="row q-my-lg q-mx-md justify-center">
    <h3 class="text-bold text-primary q-my-md">Marcações</h3>
  </div>
  <div class="row justify-center items-start q-gutter-md">
    <q-card class="my-card text-center" v-for="(link, idx) in links" :key="idx">
      <img :src="link.img" style="height: 250px; object-fit: cover;">
      <q-card-section>
        <div class="text-h6">{{ link.text }}</div>
        <div class="text-subtitle2">{{ link.subtext }}</div>
      </q-card-section>
      <q-card-actions vertical>
        <q-btn class="text-bold text-primary" flat :href="link.href" target=_blank>Marcar</q-btn>
      </q-card-actions>
    </q-card>
  </div>
  <div class="row q-mt-xl q-my-lg justify-center">
    <h3 class="text-bold text-primary q-my-md">Contacta me</h3>
  </div>
  <div class="row justify-center q-mb-lg">
    <div class="col-md-5">
      <div class="row">
        <div class="col-xs-12 col-md-6 q-pa-sm">
          <q-input outlined v-model="nome" label="Nome" />
        </div>
        <div class="col-xs-12 col-md-6 q-pa-sm">
          <q-input outlined v-model="assunto" label="Assunto" />
        </div>
      </div>
      <div class="row q-mt-md">
        <div class="col-xs-12 q-pa-sm">
          <q-input outlined v-model="mensagem" label="Mensagem" type="textarea" />
        </div>
      </div>
      <div class="row q-mt-md justify-center">
        <div class="col-md-6 q-px-sm text-center">
          <q-btn class="q-px-xl" color="primary" size="md" label="Enviar" :href="mailTo" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Marcacoes',
  data() {
    return {
      nome: '',
      assunto: '',
      mensagem: '',
      links: [
        { 
          text: 'Consulta',
          subtext: 'Terapia da fala',
          href: 'https://docs.google.com/forms/d/e/1FAIpQLSde4PYvvzfAGb3KuwzgxYBT3_hzn3AEP_ns84ECWJKpBm0DaQ/viewform',
          img: 'img/consulta.png'
        },
        { 
          text: 'Consulta',
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
  },
  computed: {
    mailTo() {
      return `mailto:joanapsantos@outlook.pt?&subject=${this.nome} - ${this.assunto}&body=${this.mensagem}`;
    }
  }
}
</script>

<style scoped>

</style>