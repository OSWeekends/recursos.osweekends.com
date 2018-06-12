<template>
  <div class="container">
    <section v-if="!isLogged()">
      <button type="button" v-on:click="login">
        <v-icon left dark>fab fa-github</v-icon> Login
      </button>
    </section>
    <section v-else>
      <button type="button" v-on:click="logout">
        <v-icon dark left>fas fa-sign-out-alt</v-icon> Logout
      </button>
      <figure>
        <img class="userImg" :src="user.photoURL">
      </figure>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'

export default {
  data () {
    return {
    }
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
    ...mapState(['user'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section{
  height: 58px;
  display: grid;
  grid-template-columns: 1fr 50px;
  grid-template-rows: 1fr;
  grid-gap: 10px;
  align-items: center;
  justify-content: end;
  color: white;
  font-size: 20px;
}
.userImg{
    width: 100%;
    border-radius: 50%;
}
</style>
