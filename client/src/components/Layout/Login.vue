<template>
  <div class="container">
    <section v-if="!isLogged()">
      <button type="button" v-on:click="login">
        <v-icon left dark>fab fa-github</v-icon> Login
      </button>
    </section>
    <section v-else class="logout">
      <button type="button" v-on:click="logout">
        <v-icon dark left>fas fa-sign-out-alt</v-icon> Logout
      </button>
    </section>
    <figure v-if="isLogged()">
      <router-link :to="getUser().displayName">
        <img class="userImg" :src="getUser().photoURL">
      </router-link>
    </figure>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {}
  },
  created () {
    this.checkLogged()
  },
  methods: {
    // Sing up/Login functionality using popup and GitHub Auth
    async login () {
      this.startSpinner()
      await this.logIn()
      this.stopSpinner()
    },
    // Log out
    logout () {
      this.logOut()
    },
    ...mapGetters(['getUser', 'isLogged']),
    ...mapActions(['logIn', 'logOut', 'checkLogged', 'startSpinner', 'stopSpinner'])
  },
  computed: {
    // ...mapState({user: state => state.userModule.user})
  }
}
</script>

<style scoped>
.container{
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 150px 50px;
  grid-template-rows: 1fr;
  grid-gap: 10px;
  align-items: center;
  justify-content: flex-end;
}
section{
  color: white;
  font-size: 16px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-gap: 10px;
  align-items: flex-end;
  justify-content: flex-end;
}
figure{
  width: 100%;
}
.userImg{
  width: 100%;
  border-radius: 50%;
}
@media (max-width: 1000px) {
  .container{
    grid-template-columns: 50px;
    grid-template-rows: 1fr;
    grid-gap: 10px;
    align-items: center;
    justify-content: flex-end;
  }
  section{
    display: none
  }
  figure{
    width: 100%;
  }
  .userImg{
    width: 100%;
    border-radius: 50%;
  }
}
</style>
