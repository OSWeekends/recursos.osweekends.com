<template>
  <div>
      <v-toolbar class="blue lighten-1">
      <!--Responsive menu -->
         <v-menu bottom transition="slide-x-transition" class="hidden-sm-and-up" left>
          <v-btn slot="activator" icon class="white--text">
            <v-icon class="text--white">menu</v-icon>
          </v-btn>
            <v-list class="">
              <v-list-tile>
                <v-list-tile-title> Item 1</v-list-tile-title>
              </v-list-tile>
            </v-list>
         </v-menu>
          <!--Logo -->
        <v-toolbar-title><router-link to="/" exact><img class="logo" src="../../assets/osw.svg"></router-link></v-toolbar-title>
         <!--Tollbar rutas -->
         <v-toolbar-items class="hidden-xs-only">
          <v-btn flat to="/resources" exact class="white--text ml-5">
            Recursos
          </v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
         <!--Toolbar user -->
        <v-toolbar-items class="hidden-xs-only">
          <v-btn small v-on:click="login" v-if="!isLoggedIn" class="mr-2">
            <v-icon left>fab fa-github</v-icon> Login
          </v-btn>
          <v-btn small flat v-on:click="logout" v-if="isLoggedIn" class="mr-2">
            <v-icon left>fas fa-sign-out-alt</v-icon> Logout
          </v-btn>
          <v-avatar v-if="isLoggedIn">
            <img class="userImg" :src="currentUser.photoURL">
          </v-avatar>
        </v-toolbar-items>
      </v-toolbar>
  </div>
</template>

<script>
import firebase from 'firebase'

var provider = new firebase.auth.GithubAuthProvider()
export default {
  data () {
    return {
      isLoggedIn: false,
      currentUser: false
    }
  },
  created () {
    if (firebase.auth().currentUser) {
      this.isLoggedIn = true
      this.currentUser = firebase.auth().currentUser
    }
  },
  methods: {
    // Sing up/Login functionality using popup and GitHub Auth
    login () {
      firebase.auth().signInWithPopup(provider).then((result) => {
        // retrieve the user info and store it in firebase db for custom properties of the user
        var userData = JSON.stringify(result.user)
        userData = JSON.parse(userData)
        // Store the user in /user/{{uid}}/datos...
        firebase.database().ref('users').child(userData.uid).set(userData)

        // Reload the page to get changes in Header component
        this.$router.go({path: this.$router.path})
      }).catch((error) => {
        console.log('Unable to Log in!' + error)
      })
    },
    // Log out
    logout () {
      firebase.auth().signOut().then(() => {
        console.log('Logout success!')
        // Redirect to home & Reload the page to get changes in Header component
        this.$router.push('/')
        this.$router.go({path: this.$router.path})
      }).catch((error) => {
        console.log('Unable to Logout' + error)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo{
    width: 75px;
}

.userImg{
    width: 50px;
    border-radius: 50%;
}

nav .nav-wrapper i{
  line-height: inherit;
}
</style>
