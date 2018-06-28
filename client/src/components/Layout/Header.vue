<template>
    <nav>
      <v-menu bottom transition="slide-x-transition" class="hidden-sm-and-up" left>
        <v-btn slot="activator" icon class="white--text">
          <v-icon class="text--white">menu</v-icon>
        </v-btn>
        <v-list>
          <v-list-tile>
            <v-list-tile-title>
              <h3>MENU</h3>
            </v-list-tile-title>
          </v-list-tile>
          <hr>
          <v-list-tile>
            <v-list-tile-title>
              <router-link to="/" exac  class="black--text">
                Home
              </router-link>
            </v-list-tile-title>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-title>
                <router-link to="/about" exac class="black--text">
                  About
                </router-link>
              </v-list-tile-title>
            </v-list-tile>
          </v-list>
      </v-menu>
      <ul class="menu2">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
      </ul>
      <router-link to="/" class="logo">
          <img src="../../assets/osw.svg">
      </router-link>
      <app-login class="login"></app-login>
    </nav>
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
nav{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  background-color: #003da5;
  align-items: center;
}
.logo{
  display: flex;
  justify-content: center;
  align-items: center;
}
img{
  height: 80px;
  width: 30%;
}
.menu2{
  display: flex;
  justify-content: flex-start;
  list-style: none;
}
li{
  display: inline-block;
  margin: 10px;
}
li a{
  color: white;
  text-decoration: none;
  font-size: 18px;
}
.login{
  display: flex;
  justify-content: flex-end;
}
@media (max-width: 600px) {
  .menu2 {
    display: none;
  }
}
</style>
