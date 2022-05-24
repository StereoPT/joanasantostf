<template>
  <q-page padding>
    <div class="row q-mb-lg q-mx-md justify-center">
      <h4 class="text-bold text-primary q-my-md">Marcações</h4>
    </div>
    <div class="row justify-center items-start q-gutter-md">
      <q-card class="col-xs-6 col-sm-4 col-md-3 col-lg-3 text-center" v-for="(link, idx) in links" :key="idx">
        <q-img :src="link.img" style="height: 210px" fit="cover" />
        <q-card-section>
          <div class="text-h6">{{ link.text }}</div>
          <div class="text-subtitle2">{{ link.subtext }}</div>
        </q-card-section>
        <q-card-actions vertical>
          <q-btn class="text-bold" outline color="primary" :href="link.href" target=_blank>Marcar</q-btn>
        </q-card-actions>
      </q-card>
    </div>
    <div class="row q-my-lg justify-center">
      <h4 class="text-bold text-primary q-my-md">Contacta-me</h4>
    </div>
    <div class="row justify-center">
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
  </q-page>
</template>

<script>
import { links } from '../assets/links.js';

export default {
  name: 'Marcacoes',
  title: 'Joana Santos - Marcações',
  data() {
    return {
      nome: '',
      assunto: '',
      mensagem: '',
      links: links
    }
  },
  computed: {
    mailTo() {
      return `mailto:joanapsantos1992@gmail.com?&subject=${this.nome} - ${this.assunto}&body=${this.mensagem}`;
    }
  }
}
</script>

<style scoped> </style>