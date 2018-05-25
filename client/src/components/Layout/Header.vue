<template>
  <div>
      <v-toolbar class="colorOsw">
      <!--Responsive menu fondo color logo de osw #003da -->
        <v-menu bottom transition="slide-x-transition" class="hidden-sm-and-up" left>
          <v-btn slot="activator" icon class="white--text">
            <v-icon class="text--white">menu</v-icon>
          </v-btn>
            <v-list>
              <v-list-tile>
                <v-list-tile-title> <router-link to="/" exact class="black--text">Home</router-link></v-list-tile-title>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-title> <router-link to="/resources" exact class="black--text">Recursos</router-link></v-list-tile-title>
              </v-list-tile>
            </v-list>
        </v-menu>
          <!--Logo -->
        <v-toolbar-title class="text-xs-center"><router-link to="/" exact><img class="logo" src="../../assets/osw.svg"></router-link></v-toolbar-title>
        <!--Tollbar rutas -->
          <v-toolbar-items class="hidden-xs-only">
          <v-btn flat to="/resources" exact class="white--text ml-5">
            Recursos
          </v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <app-login></app-login>
      </v-toolbar>
  </div>
</template>

<script>
import login from './login.vue'

export default {
  components: {
    'app-login': login
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo{
    width: 75px;
}

nav .nav-wrapper i{
  line-height: inherit;
}

.colorOsw{
  background-color: #003da5;
}
</style>
