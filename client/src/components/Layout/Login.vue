<template>
    <v-toolbar-items class="hidden-xs-only">
        <template v-if="!isLogged()">
          <v-btn small flat v-on:click="login" class="white--text mr-2 login">
          <v-icon left>fab fa-github</v-icon> Login
          </v-btn>
        </template>
        <template v-else>
          <v-btn small flat v-on:click="logout" class="white--text mr-2">
            <v-icon left>fas fa-sign-out-alt</v-icon> Logout
          </v-btn>
          <v-avatar>
            <img class="userImg" :src="getUser().photoURL">
          </v-avatar>
        </template>
    </v-toolbar-items>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

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
    // ...mapState({user: state => state.userModule.user})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.userImg{
    width: 50px;
    border-radius: 50%;
    margin-top: 15px;
}

.colorOsw{
  background-color: #003da5;
}
</style>
