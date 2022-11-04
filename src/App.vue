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
          <q-btn flat round padding="sm" color="white" icon="call" href="tel:926398174" class="q-mr-xl"/>
          
          <q-btn flat round padding="sm" color="white" icon="shopping_cart" :to="{name: 'carrinho' }">
            <q-badge v-if="cartAmount" color="red" floating rounded>{{ cartAmount }}</q-badge>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer class="column justify-between no-wrap" v-model="drawerOpen" side="left" elevated overlay>
      <q-list>
        <SidebarItem :link="{name: 'landingPage'}" :icon="'home'" :label="'Inicio'" />
        <SidebarItem :url="'https://docs.google.com/forms/d/1gOapur5po5rZn3U1X-AgtWSxvecpWqdzmu9Ts1l8UrM'" :icon="'school'" :label="'Mentoria TOP-MOF'" />
        <SidebarItem :link="{name: 'marcacoes'}" :icon="'calendar_month'" :label="'Marcações'" />
        <SidebarItem :link="{name: 'loja'}" :icon="'shopping_cart'" :label="'Loja'" />
      </q-list>
      <q-item class="col-grow" />
      <q-item-label header dense>Parcerias</q-item-label>
      <SidebarItem :url="'https://www.instagram.com/doworkwear'" :icon="'dry_cleaning'" :label="'Dô Workwear'"/>
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
      drawerOpen: false
    }
  },
  computed: {
    cartAmount() {
      return this.$store.getters.cartAmount;
    }
  },
  methods: {
    toggleDrawer () {
      this.drawerOpen = !this.drawerOpen
    }
  },
  async mounted() {
    await this.$store.commit('setCart');
  }
}
</script>