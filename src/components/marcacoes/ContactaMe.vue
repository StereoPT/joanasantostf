<template>
  <div class="col-xs-12 col-sm-8 col-md-6">
    <div class="row q-col-gutter-md">
      <div class="col-xs-12 col-md-6">
        <q-input outlined v-model="nome" label="Nome" :rules="rules.nome"/>
      </div>
      <div class="col-xs-12 col-md-6">
        <q-input mask="##" outlined v-model="idade" label="Idade" :rules="rules.idade"/>
      </div>
    </div>
    <div class="row q-mt-md">
      <div class="col-xs-12">
        <q-input outlined v-model="assunto" label="Assunto" :rules="rules.assunto" />
      </div>
    </div>
    <div class="row q-mt-md">
      <div class="col-xs-12">
        <q-input outlined v-model="mensagem" label="Mensagem" type="textarea" :rules="rules.mensagem"/>
      </div>
    </div>
    <div class="row q-mt-md justify-center">
      <div class="col-md-6 text-center">
        <q-btn class="q-px-xl" color="primary" size="md" label="Enviar" :disable="checkValid" :href="mailTo" />
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
      idade: '',
      assunto: '',
      mensagem: '',
      rules: {
        nome:     [ val => !!val || 'Nome Obrigatório!' ],
        idade:    [ val => !!val || 'Idade Obrigatória!' ],
        assunto:  [ val => !!val || 'Assunto Obrigatório!' ],
        mensagem: [ val => !!val || 'Mensagem Obrigatória!' ]
      }
    }
  },
  computed: {
    mailTo() {
      return `mailto:joanapsantos1992@gmail.com?&subject=${this.nome} - ${this.assunto} - ${this.idade} Anos&body=${this.mensagem}`;
    },
    checkValid() {
      return this.nome == '' || this.idade == '' || this.assunto == '' || this.mensagem == '';
    }
  }
}
</script>

<style scoped> </style>