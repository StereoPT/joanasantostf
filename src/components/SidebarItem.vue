<template>
  <q-item
    class="q-py-md inactive-link"
    active-class="active-link"
    :clickable="!disable"
    v-ripple="!disable"
    dense
    exact
    :disable="disable"
    :to="link"
    :href="url"
    :target="url ? '_blank' : ''"
  >
    <q-item-section avatar>
      <q-icon :name="icon" />
    </q-item-section>
    <q-item-section>{{ label }}</q-item-section>
  </q-item>
</template>

<script>
export default {
  name: "SidebarItem",
  props: {
    link: null,
    icon: String,
    label: String,
    url: null,
    disable: Boolean,
  },
};
</script>

<style scoped>
.inactive-link {
  color: #6a5062;
}
.active-link {
  color: white;
  background: #6a5062;
}
</style>