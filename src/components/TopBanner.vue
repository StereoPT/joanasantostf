<template>
  <header class="banner-radius banner-size q-pt-md bg-secondary">
    <div class="absolute-top-left img-circle q-ml-xl q-mt-xl gt-sm"></div>
    <q-img class="absolute-top-left q-ml-xl gt-sm" src="img/banner.png" height="350px" width="320px" position="50% 0px" img-class="banner-img"/>
    <div class="row justify-center q-mt-md">
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 text-center">
        <h4 class="text-weight-bold q-mb-sm text-primary">Consultório</h4>
        <h4 class="text-weight-bold q-mt-sm text-white rect-highlight">Dra. Joana Santos</h4>
      </div>
    </div>
    <div class="row justify-center q-mt-xl">
      <div class="col-xs-12 col-md-6 col-lg-4 text-center q-gutter-x-lg">
        <q-btn color="primary">
          <q-icon left size="lg" name="calendar_month" />
          <div>Marcar Consulta</div>
        </q-btn>
        <q-btn color="primary">
          <q-icon left size="lg" name="shopping_cart" />
          <div>Loja Terapeuta</div>
        </q-btn>
      </div>
    </div>
    <div class="absolute-top-right q-mr-lg q-mt-md gt-xs">
      <div class="q-gutter-md">
        <q-avatar class="cursor-pointer" size="lg" rounded color="primary" icon="img:img/instagram.svg" style="color:white"/>
        <q-avatar class="cursor-pointer" size="lg" rounded color="primary" text-color="white" icon="email" />
        <q-avatar class="cursor-pointer" size="lg" rounded color="primary" text-color="white" icon="call" />
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
    min-height: 350px;
  }

  .banner-radius {
    border-bottom-right-radius: 4em;
  }

  .img-circle {
    background: #6A5062;
    width: 300px;
    height: 300px;
    border-radius: 50%;
  }

  .rect-highlight {
    background-color: #6A5062;
    padding: 0.2em
  }
</style>