<template>
  <div class="col-md-6">
    <div class="row q-col-gutter-md">
      <div class="col-xs-12 col-md-6">
        <q-input outlined v-model="nome" label="Nome" />
      </div>
      <div class="col-xs-12 col-md-6">
        <q-input outlined v-model="assunto" label="Assunto" />
      </div>
    </div>
    <div class="row q-mt-md">
      <div class="col-xs-12">
        <q-input outlined v-model="mensagem" label="Mensagem" type="textarea" />
      </div>
    </div>
    <div class="row q-mt-md justify-center">
      <div class="col-md-6 text-center">
        <q-btn class="q-px-xl" color="primary" size="md" label="Enviar" :href="mailTo" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactaMe',
  data() {
    return {
      nome: '',
      assunto: '',
      mensagem: ''
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