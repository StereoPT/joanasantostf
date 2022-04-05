<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <q-page>
        <TopBanner />
        <router-view></router-view>
      </q-page>
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
