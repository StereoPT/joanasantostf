<template>
  <div class="row q-mt-lg q-mx-md justify-center">
    <h4 class="text-bold text-primary q-my-md">{{ title }}</h4>
  </div>
  <div class="row justify-center items-start q-gutter-md">

  </div>
</template>

<script>
export default {
  name: 'Dynamic Loja',
  props: {
    title: String,
    materiais: Array,
  }
}
</script>

<style scoped>

</style>