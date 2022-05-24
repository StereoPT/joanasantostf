<template>
  <q-page>
    <TopBanner />
    <div class="row q-mb-xl q-mx-xl justify-center">
        <div class="col-md-3 flex justify-center items-center">
          <div class="absolute img-circle"></div>
          <q-img class="q-mt-sm" src="img/sobre-mim-2.png" height="250px" width="250px" fit="scale-down" position="50% 50%" style="border-radius: 45%"/>
        </div>
      <div class="col-md-6">
        <h4 class="text-bold text-primary q-mb-sm">Sobre mim:</h4>
        <ul class="q-px-sm q-gutter-y-md" style="font-size: 1.15em; list-style-type: none;">
          <li class="q-pt-md">
            Sê bem-vindo ao meu Consultório! O meu nome é Joana Santos e sou natural de Monte Real, Leiria. Sou Terapeuta da Fala Especializada em Motricidade Orofacial. Costumo dizer que sou Terapeuta desde os 8 anos, pois foi mesmo esta a profissão que escolhi quando, na escola primária, me pediram um texto intitulado "Quando for grande quero ser...". Longe estava de saber, que o meu futuro estava tão bem escolhido!
          </li>
          <li>
            Mas o que é ser Terapeuta da Fala? Quer dizer que trabalho com bebés, crianças, adultos e idosos, na reabilitação ou melhoria das competências de respiração, mastigação, deglutição e fala. Trabalho, igualmente, as áreas da linguagem, reabilitação vocal, leitura e escrita. Mais recentemente, iniciei o meu trabalho na área da Estética Facial - uma área relativamente recente no nosso país, mas muito promissora.
          </li>
          <li>
            Para além de Terapeuta da Fala, sou também autora de livros sobre a alimentação infantil e vários artigos científicos da área. No últimos anos, dedico, também, parte do meu tempo a formar e ensinar acerca da minha paixão pela Terapia da Fala e a Motricidade Orofacial, através de Mentorias, Aulas e Workshops. Recentemente, lancei a "Loja do Terapeuta" - uma loja online que disponibiliza materiais e recursos terapêuticos a Terapeutas da Fala.
          </li>
          <li>
            No meu Consultório podes ainda encontrar consultas de outras valências: Nutrição, Psicologia e Pilates Clínico.
          </li>
        </ul>
      </div>
    </div>
    <div class="row q-mt-xl q-mx-xl justify-center">
      <div class="col-md-3 flex justify-center items-center">
        <q-img src="img/sobre-mim.png" height="250px" width="250px" fit="scale-down" position="50% 50%" style="border-radius: 45%"/>
      </div>
      <div class="col-md-4">
        <h4 class="text-bold text-primary q-mb-sm">Experiência em:</h4>
        <ul class="q-px-sm q-gutter-y-sm" style="font-size: 1.15em;">
          <li class="q-pt-md">Reabilitação Pós-AVC (Afasia, disfagia e disartria)</li>
          <li>Doenças neurológicas e do neurodesenvolvimento</li>
          <li>Afasia, Disartria e Disfagia</li>
          <li>Perturbação do Espectro do Autismo</li>
          <li>Atraso do Desenvolvimento</li>
          <li>Paralisia Facial</li>
          <li>Alterações de mastigação com impacto ortodôntico</li>
          <li>Linguagem</li>
          <li>Fala (articulação dos sons da fala)</li>
          <li>Dificuldades de Leitura e Escrita</li>
          <li>Reabilitação vocal (nódulos, pós-cirúrgico, etc)</li>
        </ul>
      </div>
    </div>
  </q-page>
</template>

<script>
import TopBanner from '../components/TopBanner.vue';

export default {
  name: 'LandingPage',
  title: 'Joana Santos - Página Inicial',
  components: {
    TopBanner
  },
}
</script>

<style scoped>
  .img-circle {
    background: #6A5062;
    width: 230px;
    height: 230px;
    border-radius: 50%;
  }
</style>