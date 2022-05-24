<template>
  <q-layout view="hHh Lpr lff">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleDrawer" />

        <q-toolbar-title>
          <!-- <q-avatar>
            Add Brand Logo Here
          </q-avatar> -->
          Joana Santos<span class="gt-xs"> - Terapeuta da Fala</span>
        </q-toolbar-title>

        <div class="q-gutter-md">
          <q-btn flat round padding="sm" color="transparent" icon="img:img/instagram.svg" href="https://www.instagram.com/joanasantostf/" target="_blank"/>
          <q-btn flat round padding="sm" color="white" icon="email" href="mailto:joanapsantos1992@gmail.com"/>
          <q-btn flat round padding="sm" color="white" icon="call" href="tel:926398174"/>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="drawerOpen" side="left" elevated>
      <q-scroll-area class="fit">
        <SidebarItem :link="{name: 'landingPage'}" :icon="'home'" :label="'Inicio'" />
        <SidebarItem :link="{name: 'marcacoes'}" :icon="'calendar_month'" :label="'Marcações'" />
        <SidebarItem :link="{name: 'loja'}" :icon="'shopping_cart'" :label="'Loja'" />
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import SidebarItem from './components/SidebarItem.vue';

export default {
  name: 'App',
  components: {
    SidebarItem
  },
  data() {
    return {
      drawerOpen: true
    }
  },
  methods: {
    toggleDrawer () {
      this.drawerOpen = !this.drawerOpen
    }
  }
}
</script>