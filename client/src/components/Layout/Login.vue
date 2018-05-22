<template>
    <v-toolbar-items class="hidden-xs-only">
        <v-btn small flat v-on:click="login" v-if="!isLoggedIn" class="white--text mr-2 login">
        <v-icon left>fab fa-github</v-icon> Login
        </v-btn>
        <v-btn small flat v-on:click="logout" v-if="isLoggedIn" class="white--text mr-2">
        <v-icon left>fas fa-sign-out-alt</v-icon> Logout
        </v-btn>
        <v-avatar v-if="isLoggedIn">
        <img class="userImg" :src="currentUser.photoURL">
        </v-avatar>
    </v-toolbar-items>
</template>

<script>
import authService from '../../Services/auth.service.js'
import { mapGetters} from 'vuex';

export default {
  data () {
    return {
      isLoggedIn: false,
      currentUser: false
    }
  },
  created () {
    // Get UserInfo and check if user is logged
    this.currentUser = authService.getCurrentUser()
    if (this.currentUser) {
      this.isLoggedIn = true
    }
  },
  methods: {
    // Sing up/Login functionality using popup and GitHub Auth
    login () {
      authService.login()
    },
    // Log out
    logout () {
      authService.logout()
    },
    ...mapGetters(['getUser'])
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
