<template>
    <nav>
      <button @click='toggle' class="button">
        <i class="fas fa-bars"></i>
      </button>
      <ul class="menu">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
      </ul>
      <div class="menuResponsive">
        <ul v-if="showMenu">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/about">About</router-link>
          </li>
        </ul>
      </div>
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
      showMenu: false
    }
  },
  methods: {
    toggle: function () {
      this.showMenu = !this.showMenu
      console.log(this.showMenu)
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
  grid-template-areas:
    "menu logo login";
  background-color: #003da5;
  padding: 10px;
}
.button{
  width: 100px;
  grid-area: button;
  display: none;
  outline: none;
}
.fas{
  color: white;
  font-size: 28px;
}
.menu{
  grid-area: menu;
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
.menuResponsive{
  grid-area: menuResponsive;
}
.logo{
  grid-area: logo;
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo img{
  width: 30%;
}
.login{
  grid-area: login;
  display: flex;
  justify-content: flex-end;
}
@media (max-width: 1000px) {
  .logo img{
    width: 40%;
  }
}
@media (max-width: 800px) {
  .logo img{
    width: 50%;
  }
}
@media (max-width: 600px) {
  nav{
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
      "button logo login"
      "menuResponsive . .";
  }
  .menu{
    display: none;
  }
  .button{
    display: block;
  }
  .logo img{
    width: 70%;
  }
}
</style>
