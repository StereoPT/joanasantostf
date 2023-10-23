<template>
  <q-layout view="hHh Lpr lff">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar class="justify-between">
        <q-btn dense flat round icon="menu" @click="toggleDrawer" />

        <q-toolbar-title class="gt-xs">
          Consultório Dra. Joana Santos - Monte Real
        </q-toolbar-title>

        <div class="q-gutter-md">
          <q-btn
            flat
            round
            padding="sm"
            color="transparent"
            icon="img:img/instagram.svg"
            href="https://www.instagram.com/joanasantostf/"
            target="_blank"
          />
          <q-btn
            flat
            round
            padding="sm"
            color="white"
            icon="email"
            href="mailto:joanapsantos1992@gmail.com"
          />
          <q-btn
            flat
            round
            padding="sm"
            color="white"
            icon="call"
            href="tel:926398174"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      class="column justify-between no-wrap"
      v-model="drawerOpen"
      side="left"
      elevated
      overlay
    >
      <q-list>
        <SidebarItem
          :link="{ name: 'landingPage' }"
          :icon="'home'"
          :label="'Inicio'"
        />
        <SidebarItem
          :url="'https://forms.gle/WBz3ydgtHYb4qKUbA'"
          :icon="'calendar_month'"
          :label="'Consultas'"
        />
        <SidebarItem
          :url="'https://forms.gle/pEgHsANhjV3BaiL4A'"
          :icon="'school'"
          :label="'Mentorias/Supervisão'"
        />
        <SidebarItem
          :disable="true"
          :icon="'star'"
          :label="'Curso Super MOF'"
        />
        <SidebarItem
          :url="'https://forms.gle/YooxQfjYNNUPTH826'"
          :icon="'details'"
          :label="'Mentoria Pirâmide'"
        />
        <SidebarItem
          :url="'https://forms.gle/FSYA4XwxCvBhhe6t7'"
          :icon="'change_history'"
          :label="'Protocolo Pirâmide'"
        />
        <SidebarItem
          :url="'https://forms.gle/ZaWRbCcfpGTuUyUt5'"
          :icon="'menu_book'"
          :label="'Livro Introdução Alimentar'"
        />
        <SidebarItem
          :disable="true"
          :icon="'takeout_dining'"
          :label="'Kit Super MOF'"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import SidebarItem from "./components/SidebarItem.vue";

export default {
  name: "App",
  components: {
    SidebarItem,
  },
  data() {
    return {
      drawerOpen: false,
    };
  },
  computed: {
    cartAmount() {
      return this.$store.getters.cartAmount;
    },
  },
  mounted() {
    this.setCart();
  },
  methods: {
    toggleDrawer() {
      this.drawerOpen = !this.drawerOpen;
    },
    async setCart() {
      await this.$store.commit("setCart");
    },
  },
};
</script>