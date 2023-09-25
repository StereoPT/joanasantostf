<template>
  <q-page>
    <TopBanner />
    <div class="row q-mb-xl q-mx-xl justify-center">
      <div class="col-md-6 flex justify-center items-center">
        <q-img
          class="q-mt-sm"
          src="img/sobremim.png"
          fit="scale-down"
          position="50% 50%"
          style="width: 75%"
        />
      </div>
      <div class="col-md-6">
        <h4 class="text-bold text-primary q-mb-sm">Sobre mim:</h4>
        <ul class="q-px-sm" style="font-size: 1.15em; list-style-type: none">
          <li class="q-pt-md">
            Bem-vindos ao meu consultório e a esta minha super equipa de
            mulheres!
          </li>
          <li class="q-pt-md">
            O meu nome é Joana Santos e sou Terapeuta da Fala Miofuncional Oral
            há 9 anos, com formação avançada em:
            <ul class="q-pt-sm q-px-lg q-gutter-y-sm">
              <li>Paralisia Facial</li>
              <li>Disfagias</li>
              <li>Orofaríngeas</li>
              <li>Estética Facial</li>
            </ul>
          </li>
          <li class="q-pt-md">
            Trabalho também nas perturbações da respiração, sucção, amamentação,
            deglutição (em conjunto com ortodontia) e fala.
          </li>
          <li class="q-pt-md">
            Estou sempre a mil e envolvida em dezenas de projetos em simultâneo
            - quer terapêuticos, quer na comunidade! O meu trabalho é uma parte
            muito importante da minha vida e os meus utentes são a minha
            prioridade!
          </li>
          <li class="q-pt-md">
            Sou também formadora e mentora de outros Terapeutas da Fala! Tudo o
            que faço é por amor à qualidade e dignidade da vida!
          </li>
        </ul>
      </div>
    </div>
    <div class="row q-mb-xl justify-center">
      <div class="col-xs-12 col-sm-8 col-md-6 q-pa-md">
        <h4 class="text-bold text-primary q-mb-sm">A nossa equipa:</h4>
        <q-carousel
          v-model="slide"
          transition-prev="slide-right"
          transition-next="slide-left"
          animated
          swipeable
          infinite
          arrows
          navigation
          padding
          control-color="primary"
          class="rounded-borders"
          style="height: 540px"
        >
          <q-carousel-slide
            name="1"
            img-src="img/team/1.png"
            style="background-size: contain; background-repeat: no-repeat"
          />
          <q-carousel-slide
            name="2"
            img-src="img/team/2.png"
            style="background-size: contain; background-repeat: no-repeat"
          />
          <q-carousel-slide
            name="3"
            img-src="img/team/3.png"
            style="background-size: contain; background-repeat: no-repeat"
          />
          <q-carousel-slide
            name="4"
            img-src="img/team/4.png"
            style="background-size: contain; background-repeat: no-repeat"
          />
          <q-carousel-slide
            name="5"
            img-src="img/team/5.png"
            style="background-size: contain; background-repeat: no-repeat"
          />
          <q-carousel-slide
            name="6"
            img-src="img/team/6.png"
            style="background-size: contain; background-repeat: no-repeat"
          />
          <q-carousel-slide
            name="7"
            img-src="img/team/7.png"
            style="background-size: contain; background-repeat: no-repeat"
          />
          <q-carousel-slide
            name="8"
            img-src="img/team/8.png"
            style="background-size: contain; background-repeat: no-repeat"
          />
        </q-carousel>
      </div>
    </div>
  </q-page>
</template>

<script>
import TopBanner from "../components/TopBanner.vue";

export default {
  name: "LandingPage",
  title: "Joana Santos - Página Inicial",
  data() {
    return {
      slide: "1",
    };
  },
  components: {
    TopBanner,
  },
};
</script>