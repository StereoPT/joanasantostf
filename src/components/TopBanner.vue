<template>
  <header class="banner">
    <q-img class="fixed-top-left q-ml-lg q-mt-md gt-xs" src="img/banner.png" height="250px" width="250px" fit="scale-down" />
    <div class="row justify-center">
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 text-center">
        <h4 class="text-weight-bold q-mb-sm text-primary">Consultório</h4>
        <h4 class="text-weight-bold q-mt-sm text-white rect-highlight">Dra. Joana Santos</h4>
      </div>
    </div>
    <div class="fixed-top-right q-mr-lg q-mt-md gt-xs">
      <div class="q-gutter-md">
        <q-avatar class="cursor-pointer" rounded color="primary" icon="img:img/instagram.svg" style="color:white"/>
        <q-avatar class="cursor-pointer" rounded color="primary" text-color="white" icon="email" />
        <q-avatar class="cursor-pointer" rounded color="primary" text-color="white" icon="call" />
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
  .banner {
    min-height: 250px;
  }

  .rect-highlight {
    background-color: #6A5062;
    padding: 0.2em
  }
</style>