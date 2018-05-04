<template>
  <nav>
    <div class="nav-wrapper blue lighten-1">
      <div class="container">
        <router-link to="/" exact class="brand-logo"><img class="logo" src="../../assets/osw.svg"></router-link>
        <ul id="nav-mobile" class="right">
          <li><router-link to="/resources" exact>Recursos</router-link></li>
          <li><a v-on:click="login"> Login</a></li>
          <li><a v-on:click="logout"> Logout</a></li>
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
    }
  },
  methods: {
    login () {
      firebase.auth().signInWithPopup(provider).then(function (result) {
        console.log('User signed in! UID:', result.user.uid)
        // -- HACK --
        var userData = JSON.stringify(result.user)
        userData = JSON.parse(userData)
        // Alamacenando el usuario en /user/{{uid}}/datos...
        firebase.database().ref('users').child(userData.uid).set(userData)
      }).catch(function (error) {
        console.log('User OUT!' + error)
      })
    },
    logout () {
      firebase.auth().signOut().then(function () {
        console.log('Logout con exito!')
      }).catch(function (error) {
        console.log('Error en Logout' + error)
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
</style>
