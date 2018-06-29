<template>
  <v-app id="app">
    <app-spinner/>
    <app-header></app-header>
    <router-view/>
    <notifications style="width: 40%" position="top bottom" group="foo" />
  </v-app>
</template>

<script>
import header from './components/Layout/header.vue'
import spinner from './components/Layout/Spinner.vue'

export default {
  name: 'App',
  components: {
    'app-header': header,
    'app-spinner': spinner
  }
}
</script>

<style scoped>
</style>
