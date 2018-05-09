<template>
  <v-app id="app">
    <app-header></app-header>
    <router-view/>
  </v-app>
</template>

<script>
import header from './components/Layout/header.vue'

export default {
  name: 'App',
  components: {
    'app-header': header
  }
}
</script>

<style>
body{
  margin: 0px;
}
</style>
