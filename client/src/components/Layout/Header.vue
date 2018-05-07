<template>
  <nav>
    <div class="nav-wrapper blue lighten-1">
      <div class="container">
        <router-link to="/" exact class="brand-logo"><img class="logo" src="../../assets/osw.svg"></router-link>
        <ul class="right hide-on-med-and-down">
          <li><router-link to="/resources" exact>Recursos</router-link></li>
          <li v-if="!isLoggedIn"><a class="black waves-effect waves-light btn" v-on:click="login"><i class="fab fa-github"></i> Login</a></li>
          <li v-if="isLoggedIn"><a class="red waves-effect waves-light btn" v-on:click="logout"><i class="fas fa-sign-out-alt"></i> Logout</a></li>
          <li v-if="isLoggedIn"><router-link to=""><img class="userImg" :src="currentUser.photoURL"></router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import firebase from 'firebase'

var provider = new firebase.auth.GithubAuthProvider()
export default {
  data () {
    return {
      user: '',
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
