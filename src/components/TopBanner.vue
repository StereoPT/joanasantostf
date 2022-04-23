<template>
  <header class="banner-radius banner-size q-pt-md bg-secondary">
    <div class="absolute-top-left img-circle q-ml-xl q-mt-xl gt-md"></div>
    <q-img class="absolute-top-left q-ml-xl gt-md" src="img/banner.png" height="320px" width="300px" position="50% 0px" img-class="banner-img"/>
    <div class="row justify-center q-mt-md">
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 text-center">
        <h4 class="text-weight-bold q-mb-sm text-primary">Terapeuta da Fala</h4>
        <h4 class="text-weight-bold q-mt-sm text-white rect-highlight">Dra. Joana Santos</h4>
      </div>
    </div>
    <div class="row justify-center text-center q-gutter-x-lg q-mt-md">
      <q-btn class="col-auto q-mb-md" color="primary" to="/" size="sm">
        <q-icon left size="xs" name="home" />
        <div>Inicio</div>
      </q-btn>
      <q-btn class="col-auto q-mb-md" color="primary" to="marcacoes" size="sm">
        <q-icon left size="xs" name="calendar_month" />
        <div>Marcações</div>
      </q-btn>
      <q-btn class="col-auto q-mb-md" color="primary" to="loja" size="sm">
        <q-icon left size="xs" name="shopping_cart" />
        <div>Loja</div>
      </q-btn>
    </div>
    <div class="absolute-top-right q-mr-lg q-mt-md">
      <div class="q-gutter-md">
        <q-btn padding="sm" color="primary" icon="img:img/instagram.svg" href="https://www.instagram.com/joanasantostf/" target="_blank"/>
        <q-btn padding="sm" color="primary" icon="email" href="mailto:joanapsantos@outlook.pt"/>
        <q-btn padding="sm" color="primary" icon="call" href="tel:926398174"/>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TopBanner'
}
</script>

<style scoped>
  .banner-size {
    min-height: 320px;
  }

  .banner-radius {
    border-bottom-right-radius: 4em;
  }

  .img-circle {
    background: #6A5062;
    width: 270px;
    height: 270px;
    border-radius: 50%;
  }

  .rect-highlight {
    background-color: #6A5062;
    padding: 0.2em
  }
</style>