<template>
  <nav>
    <ul>
        <li><router-link to="/" exact><img class="logo" src="../../assets/osw.svg"></router-link>  </li>
        <li><router-link to="/resources" exact>Recursos</router-link>  </li>
        <li><a v-on:click="login"> Login</a></li>
        <li><a v-on:click="logout"> Logout</a></li>
    </ul>
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
    width: 50px;
}

ul{
    list-style-type: none;
    text-align: center;
    margin: 0;
}
li{
    color: rgba(255,255,255,0.75);
    display: inline-block;
    margin: 0 10px;
}
a{
    color: rgba(255,255,255,0.75);
    text-decoration: none;
    font-size: 18px;
    padding: 6px 8px;
    cursor: pointer;
}
nav{
    background: #24292e;
    padding: 14px 0;
    margin-bottom: 40px;
}
.router-link-active{
     color: #fff;
    }
</style>
