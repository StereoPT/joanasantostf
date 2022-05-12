<template>
  <q-layout view="hHh lpR fFf">
    <TopBanner />
    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import TopBanner from './components/TopBanner.vue';

export default {
  name: 'App',
  components: {
    TopBanner
  },
}
</script>
