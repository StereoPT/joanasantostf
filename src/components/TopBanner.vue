<template>
  <header class="banner-radius banner-size q-pt-md bg-secondary">
    <div class="absolute-top-left img-circle q-ml-xl q-mt-xl gt-md"></div>
    <q-img class="absolute-top-left q-ml-xl gt-md" src="img/banner.png" height="320px" width="300px" position="50% 0px" img-class="banner-img"/>
    <div class="row justify-center q-mt-md">
      <div class="responsive-text col-xs-12 col-sm-6 col-md-4 col-lg-4 text-center">
        <h4 class="text-weight-bold q-mb-sm text-primary">Terapeuta da Fala</h4>
        <h4 class="text-weight-bold q-mt-sm text-white rect-highlight">Dra. Joana Santos</h4>
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

  .responsive-text h4 {
    font-size: 2.125rem;
  }

  @media screen and (max-width: 1023.99px) {
    .banner-size {
      min-height: 175px;
    }

    .banner-radius {
      border-bottom-right-radius: 2em;
    }

    .responsive-text h4 {
      font-size: 1.50rem;
    }

    .responsive-text > h4 {
      margin-top: 0;
    }
  }
</style>