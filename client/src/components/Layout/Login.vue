<template>
    <v-toolbar-items class="hidden-xs-only">
        <template v-if="isLogged()">
          <v-btn small flat v-on:click="login" class="white--text mr-2 login">
          <v-icon left>fab fa-github</v-icon> Login
          </v-btn>
        </template>
        <template v-else>
          <v-btn small flat v-on:click="logout" class="white--text mr-2">
            <v-icon left>fas fa-sign-out-alt</v-icon> Logout
          </v-btn>
          <v-avatar>
            <img class="userImg" :src="user.photoURL">
          </v-avatar>
        </template>
    </v-toolbar-items>
</template>

<script>
import authService from '../../Services/auth.service.js'
import { mapGetters, mapActions, mapState } from 'vuex'

export default {
  data () {
    return {
      currentUser: {}
    }
  },
  created () {
    // Get UserInfo and check if user is logged
    // this.currentUser = this.getUser() // authService.getCurrentUser()
    // debugger
    // if (this.currentUser) {
    //   this.isLoggedIn = true
    // }
    // this.currentUser = this.user()
  },
  methods: {
    // Sing up/Login functionality using popup and GitHub Auth
    login () {
      // authService.login()
      this.logIn()
    },
    // Log out
    logout () {
      authService.logout()
    },
    ...mapGetters(['getUser', 'isLogged']),
    ...mapActions(['logIn'])

  },
  computed: {
    ...mapState(['user'])
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
